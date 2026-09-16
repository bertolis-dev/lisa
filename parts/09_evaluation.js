/* =========================================================================
   Évaluations : un vrai devoir surveillé — plusieurs exercices, un barème,
   une durée, aucune correction pendant l'épreuve. À la fin : la copie
   corrigée, la note sur 20, et l'historique des notes.
   ========================================================================= */

const BAREME = { app: 2, ent: 3, ds: 5, exp: 6, demo: 8 };
const MINUTES = { app: 5, ent: 7, ds: 10, exp: 12, demo: 15 };

let dsEnCours = null, tickDS = null;

function composerSujet(){
  const pool = poolRevision();
  if (pool.length < 3) return null;
  const par = n => pool.filter(g => g.niveau === n);
  const choix = [];
  const prendre = (n, k) => R.shuffle(par(n)).slice(0, k).forEach(g => { if (choix.indexOf(g) < 0) choix.push(g); });
  prendre('app', 1); prendre('ent', 2); prendre('ds', 1); prendre('exp', 1); prendre('demo', 1);
  R.shuffle(pool).forEach(g => { if (choix.length < 5 && choix.indexOf(g) < 0) choix.push(g); });
  /* les démonstrations en dernier, comme dans un vrai sujet */
  return choix.slice(0, 5).sort((a, b) => (a.niveau === 'demo' ? 1 : 0) - (b.niveau === 'demo' ? 1 : 0));
}

function lancerEvaluation(){
  const gens = composerSujet();
  if (!gens) return;
  const questions = gens.map(g => {
    const q = g.fn();
    q.gen = g;
    q.bar = BAREME[g.niveau] || 3;
    if (q.qcm){
      const idx = R.shuffle(q.qcm.options.map((o, i) => i));
      q.qcm.options = idx.map(i => q.qcm.options[i]);
      q.qcm.bon = idx.indexOf(q.qcm.bon);
      q.choix = null;
    }
    if (q.bareme) q.coches = q.bareme.map(() => false);
    return q;
  });
  const minutes = questions.reduce((t, q) => t + (MINUTES[q.gen.niveau] || 7), 0);
  dsEnCours = {
    questions: questions, idx: 0, debut: Date.now(),
    duree: minutes * 60, reste: minutes * 60,
    total: questions.reduce((t, q) => t + q.bar, 0),
    rendu: false, note: null
  };
  clearInterval(tickDS);
  tickDS = setInterval(() => {
    if (!dsEnCours || dsEnCours.rendu){ clearInterval(tickDS); return; }
    dsEnCours.reste--;
    const el = document.getElementById('chronoDS');
    if (el){ el.textContent = mmss(dsEnCours.reste); el.classList.toggle('warn', dsEnCours.reste <= 300); }
    if (dsEnCours.reste <= 0){ clearInterval(tickDS); rendreCopie(); }
  }, 1000);
  aller({ nom: 'ds' });
}

function lireReponsesDS(){
  const q = dsEnCours.questions[dsEnCours.idx];
  if (!q.champs) return;
  q.champs.forEach((f, i) => {
    if (f.type === 'choix') return;
    const el = document.getElementById('d' + i);
    if (el) f.saisie = el.value;
  });
}
function allerQuestion(i){
  lireReponsesDS();
  dsEnCours.idx = Math.max(0, Math.min(dsEnCours.questions.length - 1, i));
  rendre();
  window.scrollTo(0, 0);
}
function rendreCopie(){
  lireReponsesDS();
  dsEnCours.rendu = true;
  clearInterval(tickDS);
  aller({ nom: 'copie' });
}

/* ---------------- passation ---------------- */
function vueDS(){
  const d = dsEnCours, q = d.questions[d.idx], g = q.gen;
  let h = '<div class="run">';
  h += '<div class="runtop"><div><div class="eyebrow" style="margin-bottom:2px">DS blanc &middot; ' + matiereCourante().nom + '</div>' +
       '<div class="dots">' + d.questions.map((qq, i) =>
         '<button class="pastille' + (i === d.idx ? ' now' : '') + (repondu(qq) ? ' faite' : '') + '" data-dsq="' + i + '">' + (i + 1) + '</button>').join('') +
       '</div></div>' +
       '<div style="display:flex;align-items:center;gap:10px">' +
       '<span class="timer" id="chronoDS">' + mmss(d.reste) + '</span>' +
       '<button class="btn sm ghost" data-dsrendre="1">Rendre la copie</button></div></div>';

  h += '<div class="qcard" data-bloc="' + CHAP[g.chap].bloc + '">';
  h += '<div class="qmeta"><span class="pill neuf">Exercice ' + (d.idx + 1) + '</span>' +
       '<span class="tiny">' + CHAP[g.chap].titre + '</span>' +
       '<span class="bar-pts">' + q.bar + ' point' + (q.bar > 1 ? 's' : '') + '</span></div>';
  h += '<div class="qtext">' + q.enonce + '</div>';

  if (q.bareme){
    h += '<div class="consigne">✍️ Rédige cette démonstration <b>sur ta copie</b>. Tu la compareras au corrigé et tu t’auto-évalueras à la fin, ligne par ligne.' +
         (q.aide ? '<div class="tiny" style="margin-top:6px">' + q.aide + '</div>' : '') + '</div>';
  } else if (q.qcm){
    h += '<div class="choices">' + q.qcm.options.map((o, i) =>
      '<button class="choice' + (q.choix === i ? ' sel' : '') + '" data-dschoix="' + i + '"><span class="k">' + 'ABCD'[i] + '</span><span>' + o + '</span></button>').join('') + '</div>';
  } else {
    h += '<div class="fields">' + q.champs.map((f, i) => {
      if (f.type === 'choix'){
        return '<div class="field"><label>' + f.label + '</label><div class="seg">' +
          f.options.map((o, j) => '<button class="' + (f.saisie === j ? 'on' : '') + '" data-dschamp="' + i + '" data-val="' + j + '">' + o + '</button>').join('') + '</div></div>';
      }
      return '<div class="field"><label for="d' + i + '">' + f.label + '</label>' +
        '<input id="d' + i + '" type="text" inputmode="' + (f.type === 'texte' ? 'text' : 'decimal') + '"' +
        (f.type === 'texte' ? ' spellcheck="false" autocapitalize="off"' : '') +
        ' autocomplete="off" value="' + (f.saisie === undefined ? '' : esc(f.saisie)) + '"></div>';
    }).join('') + '</div>';
  }

  h += '<div class="actions">' +
       (d.idx > 0 ? '<button class="btn" data-dsq="' + (d.idx - 1) + '">← Précédent</button>' : '') +
       (d.idx < d.questions.length - 1
          ? '<button class="btn primary" data-dsq="' + (d.idx + 1) + '">Suivant →</button>'
          : '<button class="btn primary" data-dsrendre="1">Rendre la copie</button>') +
       '</div>';
  h += '</div></div>';
  elMain.innerHTML = h;
  elTop.textContent = 'DS blanc';
}
function repondu(q){
  if (q.bareme) return false;
  if (q.qcm) return q.choix !== null && q.choix !== undefined;
  return q.champs.some(f => f.type === 'choix' ? f.saisie !== undefined : String(f.saisie || '').trim() !== '');
}

/* ---------------- copie corrigée ---------------- */
function vueCopie(){
  const d = dsEnCours;
  let h = '<div class="run">';
  h += '<div class="eyebrow">Copie corrigée &middot; ' + matiereCourante().nom + '</div>' +
       '<h2 style="font-size:27px;margin-bottom:6px">DS blanc</h2>' +
       '<p class="tiny" style="margin-bottom:20px">Durée utilisée : ' + mmss(Math.round((Date.now() - d.debut) / 1000)) +
       ' sur ' + Math.round(d.duree / 60) + ' minutes &middot; barème sur ' + d.total + ' points</p>';

  if (d.note !== null){
    h += '<div class="note-finale"><div class="nf">' + nf(d.note, 1) + '<span>/ 20</span></div>' +
         '<div><b>' + appreciation(d.note) + '</b><p class="tiny">' + d.detail + '</p></div></div>';
  }

  d.questions.forEach((q, i) => {
    const g = q.gen;
    h += '<div class="copie-q" data-bloc="' + CHAP[g.chap].bloc + '">';
    h += '<div class="qmeta"><span class="pill neuf">Exercice ' + (i + 1) + '</span>' +
         '<span class="tiny">' + CHAP[g.chap].titre + ' &middot; ' + esc(g.label) + '</span>' +
         '<span class="bar-pts">' + (d.note !== null ? nf(pointsQuestion(q), 1) + ' / ' + q.bar : q.bar + ' pts') + '</span></div>';
    h += '<div class="qtext" style="font-size:15.5px">' + q.enonce + '</div>';

    if (q.bareme){
      h += '<div class="consigne">Compare ta rédaction au corrigé et coche <b>chaque ligne que tu as écrite</b>. ' +
           'Sois honnête : c’est ce qui te dira où tu perds des points le jour du DS.</div>';
      h += '<div class="autoeval">' + q.bareme.map((b, j) =>
        '<label class="ligne' + (q.coches[j] ? ' ok' : '') + '"><input type="checkbox" data-coche="' + i + '-' + j + '"' +
        (q.coches[j] ? ' checked' : '') + (d.note !== null ? ' disabled' : '') + '>' +
        '<span class="lp">' + b.pts + ' pt' + (b.pts > 1 ? 's' : '') + '</span><span class="ld">' + b.d + '</span></label>').join('') + '</div>';
    } else {
      h += '<div class="reponses">';
      if (q.qcm){
        const bonne = q.qcm.options[q.qcm.bon];
        const don = (q.choix === null || q.choix === undefined) ? '<i>sans réponse</i>' : q.qcm.options[q.choix];
        h += '<div class="rep' + (q.choix === q.qcm.bon ? ' ok' : ' ko') + '"><span>Ta réponse</span>' + don + '</div>' +
             '<div class="rep ok"><span>Réponse attendue</span>' + bonne + '</div>';
      } else {
        q.champs.forEach(f => {
          const ok = champOk(f);
          const don = (f.type === 'choix')
            ? (f.saisie === undefined ? '<i>sans réponse</i>' : f.options[f.saisie])
            : (String(f.saisie || '').trim() === '' ? '<i>sans réponse</i>' : esc(f.saisie));
          const att = (f.type === 'choix') ? f.options[f.bon] : nf(f.bon);
          h += '<div class="rep' + (ok ? ' ok' : ' ko') + '"><span>' + f.label + '</span>' + don +
               (ok ? '' : ' <b class="att">→ ' + att + '</b>') + '</div>';
        });
      }
      h += '</div>';
      h += '<div class="sol"><h4>Correction</h4><div class="steps">' +
           q.etapes.map(s => '<div class="step"><div>' + s + '</div></div>').join('') + '</div></div>';
    }
    h += '</div>';
  });

  h += '<div class="actions" style="justify-content:center;margin:24px 0 10px">' +
       (d.note === null
          ? '<button class="btn primary" data-noter="1">Calculer ma note</button>'
          : '<button class="btn primary" data-go="matiere">Retour à la matière</button><button class="btn" data-eval="1">Refaire un DS blanc</button>') +
       '</div></div>';
  elMain.innerHTML = h;
  elTop.textContent = 'Copie corrigée';
}
function pointsQuestion(q){
  if (q.bareme){
    const tot = q.bareme.reduce((t, b) => t + b.pts, 0);
    const eus = q.bareme.reduce((t, b, j) => t + (q.coches[j] ? b.pts : 0), 0);
    return tot ? Math.round(10 * q.bar * eus / tot) / 10 : 0;
  }
  if (q.qcm) return q.choix === q.qcm.bon ? q.bar : 0;
  const n = q.champs.length, bons = q.champs.filter(champOk).length;
  return Math.round(10 * q.bar * bons / n) / 10;
}
function appreciation(n){
  if (n >= 18) return 'Remarquable 🏆';
  if (n >= 15) return 'Très bien 🎉';
  if (n >= 12) return 'Bien 💪';
  if (n >= 10) return 'Assez bien 🙂';
  if (n >= 7)  return 'Des bases, mais il faut consolider 🌱';
  return 'Reprends le cours et refais des séries 📖';
}
function calculerNote(){
  const d = dsEnCours;
  let obtenu = 0;
  d.questions.forEach(q => {
    const p = pointsQuestion(q);
    obtenu += p;
    const part = q.bar ? p / q.bar : 0;
    enregistrer(q.gen.id, part >= 0.7, part);
  });
  d.note = Math.round(2 * 20 * obtenu / d.total) / 2;      /* au demi-point */
  d.detail = nf(Math.round(obtenu * 10) / 10) + ' points sur ' + d.total + ' · ' +
             d.questions.filter(q => pointsQuestion(q) === q.bar).length + ' exercice(s) parfaitement traité(s) sur ' + d.questions.length + '.';
  S.notes = S.notes || [];
  S.notes.push({ t: Date.now(), note: d.note, matiere: S.matiere, duree: Math.round((Date.now() - d.debut) / 1000) });
  if (S.notes.length > 40) S.notes = S.notes.slice(-40);
  sauver();
  const gagnes = nouveauxBadges({ noteMax: d.note });
  rendre();
  if (d.note >= 14) confettis(d.note >= 18 ? 'max' : '');
  bip(d.note >= 10 ? 'badge' : 'faux');
  if (gagnes.length) setTimeout(() => feterBadges(gagnes), 700);
}

/* ---------------- historique des notes ---------------- */
function vueNotes(){
  const notes = (S.notes || []).filter(n => n.matiere === S.matiere);
  let h = '<div class="eyebrow">' + matiereCourante().nom + '</div><h2 style="font-size:27px">Ma courbe</h2>';
  if (!notes.length){
    h += '<div class="empty" style="margin-top:18px">Aucun DS blanc pour l’instant.' +
         '<div style="margin-top:14px"><button class="btn primary" data-eval="1">Passer un DS blanc</button></div></div>';
    elMain.innerHTML = h; elTop.textContent = 'Ma courbe'; return;
  }
  const moy = notes.reduce((t, n) => t + n.note, 0) / notes.length;
  const best = Math.max.apply(null, notes.map(n => n.note));
  h += '<p class="lede" style="margin:8px 0 18px">Moyenne : <b>' + nf(Math.round(moy * 10) / 10) + '/20</b> sur ' +
       notes.length + ' devoir' + (notes.length > 1 ? 's' : '') + ' &middot; meilleure note : <b>' + nf(best) + '/20</b></p>';
  /* courbe des notes */
  const W = 620, H = 150, m = 26;
  const pts = notes.map((n, i) => {
    const x = m + (notes.length === 1 ? (W - 2 * m) / 2 : i * (W - 2 * m) / (notes.length - 1));
    const y = H - m - (n.note / 20) * (H - 2 * m);
    return [x, y];
  });
  h += '<div class="courbe"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Évolution des notes">' +
       [0, 10, 20].map(v => {
         const y = H - m - (v / 20) * (H - 2 * m);
         return '<line x1="' + m + '" y1="' + y + '" x2="' + (W - m) + '" y2="' + y + '" class="gr"></line>' +
                '<text x="' + (m - 6) + '" y="' + (y + 4) + '" text-anchor="end" class="gt">' + v + '</text>';
       }).join('') +
       '<polyline points="' + pts.map(p => p.join(',')).join(' ') + '" class="cl"></polyline>' +
       pts.map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.5" class="cp"></circle>' +
         '<text x="' + p[0] + '" y="' + (p[1] - 11) + '" text-anchor="middle" class="gv">' + nf(notes[i].note) + '</text>').join('') +
       '</svg></div>';
  h += '<div class="methods" style="margin-top:18px">' + notes.slice().reverse().map(n =>
    '<div class="mrow" style="grid-template-columns:minmax(0,1fr) 90px 70px">' +
    '<div class="lbl">' + new Date(n.t).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) + '</div>' +
    '<div class="sc">' + mmss(n.duree) + '</div>' +
    '<div class="sc" style="font-weight:700;color:' + (n.note >= 10 ? 'var(--juste)' : 'var(--faux)') + '">' + nf(n.note) + '/20</div></div>').join('') + '</div>';
  h += '<div class="actions" style="margin-top:20px"><button class="btn primary" data-eval="1">Passer un nouveau devoir</button></div>';
  elMain.innerHTML = h;
  elTop.textContent = 'Ma courbe';
}
