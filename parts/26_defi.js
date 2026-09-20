/* =========================================================================
   LE DÉFI DU JOUR
   Dix questions tirées au sort dans toutes les matières que l'élève a
   sélectionnées. Le tirage est déterministe pour la journée : le défi est
   le même toute la journée, et change à minuit.
   Chrono par question, bonus de rapidité, combo, médaille, série de jours.
   Les bonnes réponses alimentent l'XP et la révision espacée comme
   n'importe quel exercice.
   ========================================================================= */

const DEFI_N = 10;                 /* nombre de questions */
const DEFI_T_QCM = 20;             /* secondes pour un QCM */
const DEFI_T_NUM = 35;             /* secondes pour un calcul */
const DEFI_MEDAILLES = [
  { min: 200, e: '🥇', nom: 'médaille d’or' },
  { min: 140, e: '🥈', nom: 'médaille d’argent' },
  { min: 80,  e: '🥉', nom: 'médaille de bronze' }
];

/* générateur pseudo-aléatoire reproductible, pour figer le défi du jour */
function defiSeed(txt){
  let h = 2166136261;
  for (let i = 0; i < txt.length; i++){ h ^= txt.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function defiRandom(seed){
  let s = seed >>> 0;
  return function(){ s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
}

function defiEtat(){
  S.defi = S.defi || { jour: '', score: 0, meilleur: 0, jours: 0, recordJours: 0, dernier: '' };
  return S.defi;
}

/* toutes les questions candidates : matières choisies, prêtes, hors rédactions */
function defiPool(){
  const cl = classeCourante().id;
  const out = [];
  MATIERES.filter(m => m.pret && S.mesMatieres.indexOf(m.id) >= 0).forEach(m => {
    CHAPITRES.filter(c => c.matiere === m.id && c.classe === cl).forEach(c => {
      (c.gens || []).forEach(g => { if (!g.demo) out.push({ g: g, mat: m }); });
    });
  });
  return out;
}

/* compose le défi en répartissant les questions entre les matières */
function defiComposer(seed){
  const pool = defiPool();
  if (!pool.length) return null;
  const rnd = defiRandom(seed);

  const parMat = {};
  pool.forEach(x => { (parMat[x.mat.id] = parMat[x.mat.id] || []).push(x); });
  const mats = Object.keys(parMat);
  const choisis = [];
  let garde = 0;
  while (choisis.length < DEFI_N && garde++ < 600){
    const lot = parMat[mats[choisis.length % mats.length]];
    const cand = lot[Math.floor(rnd() * lot.length)];
    if (!choisis.some(x => x.g.id === cand.g.id)) choisis.push(cand);
    else if (garde > 300) choisis.push(cand);      /* peu de générateurs : on autorise un doublon */
  }

  /* on fabrique les énoncés avec ce même hasard, pour que le défi soit figé */
  const vrai = Math.random;
  const questions = [];
  try {
    Math.random = rnd;
    choisis.forEach(x => {
      let q;
      try { q = x.g.fn(); } catch (e) { return; }
      if (!q || (!q.qcm && !q.champs)) return;
      if (q.qcm){
        const idx = q.qcm.options.map((o, i) => i);
        for (let i = idx.length - 1; i > 0; i--){
          const j = Math.floor(rnd() * (i + 1));
          const t = idx[i]; idx[i] = idx[j]; idx[j] = t;
        }
        q.qcm.options = idx.map(i => q.qcm.options[i]);
        q.qcm.bon = idx.indexOf(q.qcm.bon);
      }
      questions.push({ q: q, mid: x.g.id, mat: x.mat, chap: CHAP[x.g.chap] });
    });
  } finally { Math.random = vrai; }
  return questions.length ? questions : null;
}

let defi = null, defiTick = null;

function defiArreter(){ if (defiTick){ clearInterval(defiTick); defiTick = null; } }

function lancerDefi(entrainement){
  const seed = defiSeed(aujourdhui() + '|' + S.mesMatieres.join(',') +
                        (entrainement ? '|libre|' + Date.now() : ''));
  const qs = defiComposer(seed);
  if (!qs) return;
  defiArreter();
  defi = {
    qs: qs, i: 0, score: 0, justes: 0, combo: 0, meilleurCombo: 0,
    reste: 0, total: 0, fini: false, repondu: false,
    entrainement: !!entrainement, dernier: null, detail: []
  };
  vue = { nom: 'defi' };
  fermerMenu();
  defiQuestion();
  window.scrollTo(0, 0);
  rendre();
}

function defiQuestion(){
  const c = defi.qs[defi.i];
  defi.total = c.q.qcm ? DEFI_T_QCM : DEFI_T_NUM;
  defi.reste = defi.total;
  defi.repondu = false;
  defiArreter();
  defiTick = setInterval(function(){
    if (!defi || defi.repondu || defi.fini) return;
    defi.reste--;
    const b = document.getElementById('defi-chrono');
    if (b) b.style.width = Math.max(0, defi.reste / defi.total * 100) + '%';
    const n = document.getElementById('defi-sec');
    if (n) n.textContent = defi.reste;
    if (defi.reste <= 0) defiValider(true);
  }, 1000);
}

/* valide la question courante ; tempsEcoule = true si le chrono a expiré */
function defiValider(tempsEcoule){
  if (!defi || defi.repondu) return;
  const c = defi.qs[defi.i], q = c.q;
  let juste = false;
  if (!tempsEcoule){
    if (q.qcm) juste = (q.choix === q.qcm.bon);
    else {
      q.champs.forEach((f, i) => lireChamp('df' + i, f));
      juste = q.champs.every(champOk);
    }
  }
  defi.repondu = true;
  defiArreter();

  let gagne = 0;
  if (juste){
    defi.justes++;
    defi.combo++;
    if (defi.combo > defi.meilleurCombo) defi.meilleurCombo = defi.combo;
    gagne = 10;
    const part = defi.reste / defi.total;
    if (part > 0.66) gagne += 5; else if (part > 0.33) gagne += 3;
    if (defi.combo >= 2) gagne += Math.min(10, 2 * (defi.combo - 1));
    defi.score += gagne;
    bip('juste');
  } else {
    defi.combo = 0;
    bip('faux');
  }
  defi.dernier = { juste: juste, gagne: gagne, temps: !!tempsEcoule };
  defi.detail[defi.i] = { mat: c.mat.court, juste: juste };
  enregistrer(c.mid, juste);
  rendre();
}

function defiSuivante(){
  if (!defi) return;
  if (defi.i >= defi.qs.length - 1){ defiFinir(); return; }
  defi.i++;
  defiQuestion();
  window.scrollTo(0, 0);
  rendre();
}

function defiFinir(){
  defiArreter();
  defi.fini = true;
  const e = defiEtat();
  if (!defi.entrainement && e.jour !== aujourdhui()){
    e.jour = aujourdhui();
    e.score = defi.score;
    if (defi.score > (e.meilleur || 0)) e.meilleur = defi.score;
    e.jours = (e.dernier === hier()) ? (e.jours || 0) + 1 : 1;
    if (e.jours > (e.recordJours || 0)) e.recordJours = e.jours;
    e.dernier = aujourdhui();
    sauver();
    if (defi.score >= 140) confettis();
    const nouv = typeof nouveauxBadges === 'function' ? nouveauxBadges() : [];
    if (nouv && nouv.length && typeof feterBadges === 'function') feterBadges(nouv);
  }
  rendre();
}

function defiMedaille(score){
  for (let i = 0; i < DEFI_MEDAILLES.length; i++) if (score >= DEFI_MEDAILLES[i].min) return DEFI_MEDAILLES[i];
  return null;
}
function messageDefi(justes){
  if (justes >= 10) return 'Sans faute. Rien à ajouter.';
  if (justes >= 8)  return 'Excellent : tu tiens la distance sur toutes les matières.';
  if (justes >= 6)  return 'Bon défi. Les erreurs montrent exactement où réviser.';
  if (justes >= 4)  return 'C’est un début. Reviens demain, ça monte vite.';
  return 'Journée difficile. Le prochain défi sera plus clément.';
}

/* ---------------- la vue ---------------- */

function vueDefi(){
  const main = document.getElementById('main');
  if (!main) return '';
  const e = defiEtat();

  /* ---- écran d'accueil ---- */
  if (!defi){
    const fait = (e.jour === aujourdhui());
    const pool = defiPool();
    const mats = MATIERES.filter(m => m.pret && S.mesMatieres.indexOf(m.id) >= 0);
    let h = '<div class="chead" data-bloc="defi"><div class="eyebrow">Un nouveau défi chaque jour</div>' +
      '<h2>🎯 Le défi du jour</h2>' +
      '<p class="lede">Dix questions tirées dans toutes tes matières. Chrono, combo, médaille.</p></div>';

    if (!pool.length){
      h += '<div class="card"><p>Aucune question disponible pour l’instant. ' +
           'Choisis au moins une matière prête dans « Mes matières ».</p></div>';
      main.innerHTML = h; return h;
    }

    h += '<div class="stats">' +
      '<div class="stat"><div class="v">' + (e.jours || 0) + '</div><div class="k">jours d’affilée</div></div>' +
      '<div class="stat"><div class="v">' + (e.meilleur || 0) + '</div><div class="k">meilleur score</div></div>' +
      '<div class="stat"><div class="v">' + (e.recordJours || 0) + '</div><div class="k">record de série</div></div>' +
      '</div>';

    h += '<div class="card"><h3>Les matières tirées au sort</h3>' +
      '<div class="defi-mats">' + mats.map(m =>
        '<span class="pastille">' + m.e + ' ' + m.court + '</span>').join('') + '</div>' +
      '<p class="tiny">Le tirage suit les matières cochées dans « Mes matières ». ' +
      pool.length + ' types de questions peuvent tomber aujourd’hui.</p></div>';

    h += '<div class="card"><h3>Comment ça marche</h3><ul class="regles">' +
      '<li><b>10 points</b> par bonne réponse.</li>' +
      '<li><b>+5</b> si tu réponds très vite, <b>+3</b> si tu réponds vite.</li>' +
      '<li><b>Combo</b> : jusqu’à <b>+10</b> de plus par bonne réponse enchaînée.</li>' +
      '<li>Médailles : 🥉 dès 80 points · 🥈 dès 140 · 🥇 dès 200.</li>' +
      '<li>Le défi est le <b>même toute la journée</b>. Il change à minuit.</li></ul></div>';

    if (fait){
      const m = defiMedaille(e.score);
      h += '<div class="card"><h3>Défi d’aujourd’hui terminé ' + (m ? m.e : '') + '</h3>' +
        '<p>Tu as marqué <b>' + e.score + ' points</b>. Le prochain défi arrive demain.</p>' +
        '<div class="actions"><button class="btn primary" data-defi="entrainement">Rejouer pour s’entraîner</button></div>' +
        '<p class="tiny">Une partie d’entraînement ne compte pas dans la série, mais elle fait gagner de l’XP.</p></div>';
    } else {
      h += '<div class="actions"><button class="btn primary" data-defi="go">Lancer le défi du jour</button></div>';
    }
    main.innerHTML = h;
    return h;
  }

  /* ---- écran de fin ---- */
  if (defi.fini){
    const m = defiMedaille(defi.score);
    const parMat = {};
    defi.detail.forEach(d => {
      if (!d) return;
      parMat[d.mat] = parMat[d.mat] || { ok: 0, tot: 0 };
      parMat[d.mat].tot++; if (d.juste) parMat[d.mat].ok++;
    });
    let h = '<div class="chead" data-bloc="defi"><div class="eyebrow">' +
      (defi.entrainement ? 'Entraînement terminé' : 'Défi du jour terminé') + '</div>' +
      '<h2>' + (m ? m.e + ' ' + m.nom.charAt(0).toUpperCase() + m.nom.slice(1) : '🎯 Terminé') + '</h2>' +
      '<p class="lede">' + messageDefi(defi.justes) + '</p></div>';
    h += '<div class="stats">' +
      '<div class="stat"><div class="v">' + defi.score + '</div><div class="k">points</div></div>' +
      '<div class="stat"><div class="v">' + defi.justes + ' / ' + defi.qs.length + '</div><div class="k">bonnes réponses</div></div>' +
      '<div class="stat"><div class="v">' + defi.meilleurCombo + '</div><div class="k">meilleur combo</div></div>' +
      '</div>';
    h += '<div class="card"><h3>Matière par matière</h3><div class="defi-bilan">' +
      Object.keys(parMat).map(k => '<div class="db-ligne"><span>' + k + '</span>' +
        '<b>' + parMat[k].ok + ' / ' + parMat[k].tot + '</b></div>').join('') + '</div></div>';
    const suiv = DEFI_MEDAILLES.filter(x => x.min > defi.score).pop();
    if (suiv) h += '<div class="card"><p>Encore <b>' + (suiv.min - defi.score) +
      ' points</b> et tu décrochais la ' + suiv.nom + ' ' + suiv.e + '.</p></div>';
    h += '<div class="actions"><button class="btn primary" data-defi="entrainement">Rejouer</button>' +
         '<button class="btn ghost" data-defi="quitter">Revenir au défi</button></div>';
    main.innerHTML = h;
    return h;
  }

  /* ---- écran de question ---- */
  const c = defi.qs[defi.i], q = c.q;
  let h = '<div class="defi-tete">' +
    '<div class="defi-points">' + defi.qs.map((x, i) => {
      const d = defi.detail[i];
      return '<i class="' + (d ? (d.juste ? 'ok' : 'ko') : (i === defi.i ? 'now' : '')) + '"></i>';
    }).join('') + '</div>' +
    '<div class="defi-score">' + defi.score + ' pts' +
      (defi.combo >= 2 ? ' <span class="combo">combo ×' + defi.combo + '</span>' : '') + '</div></div>';

  h += '<div class="defi-barre' + (defi.repondu ? ' fige' : '') + '">' +
       '<span id="defi-chrono" style="width:' + Math.max(0, defi.reste / defi.total * 100) + '%"></span></div>' +
       '<div class="defi-sec">' + (defi.repondu ? 'question ' + (defi.i + 1) + ' sur ' + defi.qs.length
         : '<span id="defi-sec">' + defi.reste + '</span> s') + '</div>';

  h += '<div class="card defi-q">' +
    '<div class="defi-origine">' + c.mat.e + ' ' + c.mat.court + ' · ' + c.chap.titre + '</div>' +
    q.enonce;

  if (q.qcm){
    h += '<div class="choices">' + q.qcm.options.map((o, i) => {
      let cl = 'choice' + (q.choix === i ? ' sel' : '');
      if (defi.repondu){
        if (i === q.qcm.bon) cl += ' good';
        else if (q.choix === i) cl += ' bad';
      }
      return '<button class="' + cl + '" data-defichoix="' + i + '"' + (defi.repondu ? ' disabled' : '') + '>' +
             '<span class="k">' + 'ABCD'[i] + '</span><span>' + o + '</span></button>';
    }).join('') + '</div>';
  } else {
    h += '<div class="fields">' + q.champs.map((f, i) => {
      if (f.type === 'choix'){
        return '<div class="field"><label>' + f.label + '</label><div class="seg">' +
          f.options.map((o, j) => '<button class="' + (f.saisie === j ? 'on' : '') +
            '" data-defichamp="' + i + '" data-defival="' + j + '"' + (defi.repondu ? ' disabled' : '') + '>' +
            o + '</button>').join('') + '</div>' +
          (defi.repondu ? verdictChamp(f, f.saisie === f.bon) : '') + '</div>';
      }
      return '<div class="field"><label for="df' + i + '">' + f.label + '</label>' +
        champSaisie('df' + i, f, defi.repondu) +
        (defi.repondu ? verdictChamp(f, champOk(f)) : '') + '</div>';
    }).join('') + '</div>';
  }

  if (!defi.repondu){
    if (!q.qcm) h += '<div class="actions"><button class="btn primary" data-defivalider="1">Valider</button>' +
                     '<button class="btn ghost" data-defipasser="1">Passer</button></div>';
  } else {
    const d = defi.dernier;
    h += '<div class="verdict ' + (d.juste ? 'ok' : 'ko') + '">' +
      '<div class="vh"><span class="ve">' + (d.juste ? '🎯' : (d.temps ? '⏱️' : '💡')) + '</span>' +
      (d.juste ? 'Juste' : (d.temps ? 'Temps écoulé' : 'Pas tout à fait')) +
      (d.juste && d.gagne ? '<span class="gain">+' + d.gagne + ' pts</span>' : '') + '</div></div>';
    h += '<div class="sol"><h4>Correction détaillée</h4><div class="steps">' +
      (q.etapes || []).map(s => '<div class="step"><div>' + s + '</div></div>').join('') + '</div></div>';
    h += '<div class="actions"><button class="btn primary" data-defisuivante="1">' +
      (defi.i >= defi.qs.length - 1 ? 'Voir mon résultat' : 'Question suivante') + '</button></div>';
  }
  h += '</div>';

  main.innerHTML = h;
  if (!defi.repondu && !q.qcm){
    const f0 = document.getElementById('df0');
    if (f0) f0.focus();
  }
  return h;
}

/* ---------------- interactions propres au défi ---------------- */
document.addEventListener('click', function(ev){
  const t = ev.target.closest('[data-defi],[data-defichoix],[data-defichamp],[data-defivalider],[data-defipasser],[data-defisuivante]');
  if (!t) return;
  const d = t.dataset;
  if (d.defi === 'vue'){ defiArreter(); defi = null; aller({ nom: 'defi' }); return; }
  if (d.defi === 'go'){ lancerDefi(false); return; }
  if (d.defi === 'entrainement'){ lancerDefi(true); return; }
  if (d.defi === 'quitter'){ defiArreter(); defi = null; rendre(); return; }
  if (!defi) return;
  if (d.defichoix !== undefined){
    if (defi.repondu) return;
    defi.qs[defi.i].q.choix = +d.defichoix;
    defiValider(false);
    return;
  }
  if (d.defichamp !== undefined){
    if (defi.repondu) return;
    defi.qs[defi.i].q.champs[+d.defichamp].saisie = +d.defival;
    rendre();
    return;
  }
  if (d.defivalider){ defiValider(false); return; }
  if (d.defipasser){ defiValider(true); return; }
  if (d.defisuivante){ defiSuivante(); return; }
});
document.addEventListener('keydown', function(ev){
  if (ev.key !== 'Enter' || !defi || defi.fini || vue.nom !== 'defi') return;
  if (defi.repondu) defiSuivante();
  else if (!defi.qs[defi.i].q.qcm) defiValider(false);
});

/* trois badges pour le défi */
BADGES.push(
  { id: 'defi1',  e: '🎯', nom: 'Premier défi',   desc: 'Terminer un défi du jour',
    test: () => !!(S.defi && S.defi.dernier) },
  { id: 'defior', e: '🥇', nom: 'Défi en or',     desc: 'Décrocher la médaille d’or à un défi',
    test: () => !!(S.defi && (S.defi.meilleur || 0) >= 200) },
  { id: 'defi7',  e: '🔥', nom: 'Semaine pleine', desc: 'Faire le défi 7 jours d’affilée',
    test: () => !!(S.defi && (S.defi.recordJours || 0) >= 7) }
);
