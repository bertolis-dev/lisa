/* =========================================================================
   Interface : navigation, fiches de cours, séries d'exercices, progression.
   ========================================================================= */

const elMain = document.getElementById('main');
const elNav = document.getElementById('nav');
const elSide = document.getElementById('side');
const elTop = document.getElementById('topttl');
let vue = { nom: 'accueil' };
let serie = null, tickChrono = null;

const STATUTS = [
  { id: 'neuf', court: 'À voir', long: 'Pas encore vu' },
  { id: 'encours', court: 'En cours', long: 'En cours' },
  { id: 'fini', court: 'Vu', long: 'Terminé' }
];

function esc(s){ return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function aller(v){ vue = v; fermerMenu(); window.scrollTo(0, 0); rendre(); }
let defilementPage = 0;
function ouvrirMenu(){
  defilementPage = window.scrollY || 0;
  elSide.classList.add('open');
  document.body.classList.add('menu-ouvert');
  document.body.style.top = (-defilementPage) + 'px';
  const s = document.createElement('div');
  s.className = 'scrim';
  s.addEventListener('click', fermerMenu);
  document.body.appendChild(s);
}
function fermerMenu(){
  elSide.classList.remove('open');
  const s = document.querySelector('.scrim');
  if (s) s.remove();
  if (document.body.classList.contains('menu-ouvert')){
    document.body.classList.remove('menu-ouvert');
    document.body.style.top = '';
    window.scrollTo(0, defilementPage);       /* on revient où on en était */
  }
}

/* ---------------- navigation latérale ---------------- */
function rendreNav(){
  const bs = document.getElementById('brandsub');
  if (bs) bs.textContent = classeCourante().nom;
  const xpg = xpTotal(), rgg = rang(xpg, RANGS), sj = serieJours();

  let h = '<div class="side-rank">' +
    '<div class="sr-top"><span class="sr-nom">' + rgg.nom + '</span>' +
    '<button class="son" data-son="1" aria-label="Activer ou couper les sons">' + (S.son ? '\uD83D\uDD0A' : '\uD83D\uDD07') + '</button></div>' +
    '<div class="sr-pts">' + xpg + '<span>points</span></div>' +
    '<div class="bar"><span style="width:' + rgg.pc + '%"></span></div>' +
    '<div class="sr-bas"><span>' + (rgg.prochain ? '+' + (rgg.prochain.min - xpg) + ' \u2192 ' + rgg.prochain.nom : 'Rang maximal') + '</span>' +
    (sj ? '<span class="fl">\uD83D\uDD25 ' + sj + '</span>' : '') + '</div></div>';

  const liens = [
    { id: 'accueil',  e: '\uD83C\uDFE0', t: 'Accueil',                a: 'data-go="accueil"' },
    { id: 'revision', e: '\uD83D\uDD01', t: 'R\u00e9viser',          a: 'data-go="revision"' },
    { id: 'chrono',   e: '\u23F1\uFE0F', t: 'Interro chrono',         a: 'data-go="chrono"' },
    { id: 'ds',       e: '\uD83D\uDCDD', t: 'Devoir surveill\u00e9', a: 'data-eval="1"' },
    { id: 'notes',    e: '\uD83D\uDCC8', t: 'Mes notes',              a: 'data-go="notes"' }
  ];
  h += '<div class="liens">' + liens.map(l =>
    '<button class="lien l-' + l.id + (estActif(l.id) ? ' on' : '') + '" ' + l.a + '>' +
    '<span class="ic">' + l.e + '</span><span>' + l.t + '</span></button>').join('') + '</div>';

  h += '<div class="grp-mat">Mes mati\u00e8res</div>';
  const ouverte = (S.navOuv === undefined) ? S.matiere : S.navOuv;
  MATIERES.filter(m => S.mesMatieres.indexOf(m.id) >= 0).forEach(m => {
    const chs = CHAPITRES.filter(c => c.matiere === m.id && c.classe === classeCourante().id);
    const est = (m.id === ouverte && m.pret && chs.length);
    h += '<button class="mat-tete' + (est ? ' ouverte' : '') + (m.pret ? '' : ' futur') + '" data-ouvrir="' + m.id + '"' +
         ' aria-expanded="' + (est ? 'true' : 'false') + '">' +
         '<span class="me">' + m.e + '</span>' +
         '<span class="nm">' + m.court + '</span>' +
         (m.pret ? '<span class="cnt">' + chs.length + '</span>' : '<span class="mb">bient\u00f4t</span>') +
         '<span class="chev"></span></button>';
    if (!est) return;
    h += '<div class="mat-corps">';
    blocsCourants().forEach(b => {
      const dedans = chs.filter(c => c.bloc === b.id);
      if (!dedans.length) return;
      h += '<div class="grp" data-bloc="' + b.id + '"><i></i>' + b.nom + '</div>';
      dedans.forEach(c => {
        const st = statutChap(c.id), sc = scoreChap(c.id);
        h += '<button class="chl' + (vue.nom === 'chapitre' && vue.id === c.id ? ' on' : '') + '" data-bloc="' + c.bloc + '" data-chap="' + c.id + '">' +
             '<span class="dot ' + (st === 'encours' ? 'vu' : (st === 'fini' ? 'fini' : '')) + '"></span>' +
             '<span class="nm">' + c.titre + '</span>' +
             (c.gens.length
                ? '<span class="jg" title="Réussite : ' + (sc.pc === null ? 0 : sc.pc) + ' %"><i style="width:' +
                  (sc.pc === null ? 0 : sc.pc) + '%"></i></span>'
                : '<span class="bientot" title="Fiche de cours disponible, exercices à venir">bientôt</span>') +
             '</button>';
      });
    });
    h += '</div>';
  });
  h += '<button class="lien plus-mat" data-mat="+"><span class="ic">+</span><span>Ajouter une mati\u00e8re</span></button>';
  h += ligneVersion();
  elNav.innerHTML = h;
}
function estActif(id){
  if (id === 'accueil') return vue.nom === 'accueil';
  if (id === 'notes') return vue.nom === 'notes';
  if (id === 'ds') return vue.nom === 'ds' || vue.nom === 'copie';
  return vue.nom === 'serie' && serie && serie.mode === id;
}

/* version affichée et mise à jour forcée : une application installée garde
   parfois une version en mémoire, ce bouton la remet à neuf */
function ligneVersion(){
  return '<button class="version" data-maj="1" title="Forcer la mise à jour">' +
         'Version ' + VERSION_APP + '<span>Toucher pour mettre à jour</span></button>';
}
async function forcerMiseAJour(){
  try {
    if (navigator.serviceWorker){
      const rs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(rs.map(r => r.unregister()));
    }
    if (window.caches){
      const ks = await caches.keys();
      await Promise.all(ks.map(k => caches.delete(k)));
    }
  } catch (e) {}
  location.replace(location.pathname + '?maj=' + Date.now());
}

/* ---------------- accueil ---------------- */
function vueAccueil(){
  const g = scoreGlobal(), rev = aRevoir();
  const cur = S.courant && CHAP[S.courant] ? CHAP[S.courant] : null;
  const chaps = chapitresCourants();
  const travailles = chaps.filter(c => statutChap(c.id) !== 'neuf').length;
  let h = '';
  h += rubanMatieres();
  const heure = new Date().getHours();
  const salut = heure < 13 ? 'Bonjour 👋' : (heure < 18 ? 'Bon après-midi 👋' : 'Bonsoir 👋');
  h += '<div class="home-head"><div>' +
       '<div class="eyebrow">' + salut + ' &middot; Spécialité maths, première</div>' +
       '<h2 style="font-size:31px">On travaille quoi aujourd’hui ?</h2>' +
       '<p class="lede" style="margin-top:8px">Les exercices sont tirés au sort à chaque fois, avec la correction détaillée ' +
       'étape par étape. Plus c’est difficile, plus ça rapporte de points.</p></div></div>';

  const xp = xpTotal(), rg = rang(xp, RANGS);
  h += '<div class="duo">';
  h += '<div class="rank"><div class="rank-top">' +
       '<div><div class="eyebrow" style="margin-bottom:2px">Niveau ' + (rg.index + 1) + ' sur ' + RANGS.length + '</div>' +
       '<h3 class="rank-nom">' + rg.nom + '</h3></div>' +
       '<div class="rank-xp">' + xp + '<span> pts</span></div></div>' +
       '<div class="bar" style="height:8px"><span style="width:' + rg.pc + '%"></span></div>' +
       '<div class="rank-foot"><span>' + (rg.prochain ? (rg.prochain.min - xp) + ' points avant <b>' + rg.prochain.nom + '</b>' : 'Rang maximal atteint') + '</span>' +
       '<span>' + Object.keys(POINTS).map(n => NIVEAUX[n] + ' ' + POINTS[n] + ' pts').join(' &middot; ') + '</span></div></div>';

  const xj = xpDuJour(), pcj = Math.min(100, Math.round(100 * xj / OBJECTIF_JOUR)), sj = serieJours();
  const C = 2 * Math.PI * 34;
  h += '<div class="jour">' +
       '<svg class="anneau" viewBox="0 0 80 80" aria-hidden="true">' +
       '<circle cx="40" cy="40" r="34" class="piste"></circle>' +
       '<circle cx="40" cy="40" r="34" class="jauge" style="stroke-dasharray:' + C + ';stroke-dashoffset:' + (C * (1 - pcj / 100)) + '"></circle>' +
       '<text x="40" y="46" text-anchor="middle" class="anneau-t">' + (pcj >= 100 ? '✓' : pcj + '%') + '</text></svg>' +
       '<div class="jour-txt"><b>Objectif du jour</b>' +
       '<span>' + (xj >= OBJECTIF_JOUR
          ? 'Atteint ! ' + xj + ' points aujourd’hui. Tout ce qui suit est du bonus 🎁'
          : xj + ' / ' + OBJECTIF_JOUR + ' points. Encore ' + (OBJECTIF_JOUR - xj) + ', soit deux ou trois exercices.') + '</span></div>' +
       '<div class="flamme' + (sj ? ' on' : '') + '"><span class="f">🔥</span><b>' + sj + '</b>' +
       '<span class="j">jour' + (sj > 1 ? 's' : '') + ' de suite</span></div>' +
       '</div>';
  h += '</div>';

  h += '<div class="stats">' +
       '<div class="stat"><div class="v">' + g.tot + '</div><div class="k">exercices faits</div></div>' +
       '<div class="stat"><div class="v">' + (g.pc === null ? '—' : g.pc + ' %') + '</div><div class="k">de réussite</div></div>' +
       '<div class="stat"><div class="v">' + (S.record || 0) + '</div><div class="k">meilleure série</div></div>' +
       '<div class="stat"><div class="v">' + travailles + '<span style="font-size:17px;color:var(--ink-3)"> / ' + chaps.length + '</span></div><div class="k">chapitres entamés</div></div>' +
       '<div class="stat"><div class="v">' + rev.length + '</div><div class="k">notions à revoir</div></div>' +
       '</div>';

  if (cur){
    const sc = scoreChap(cur.id);
    h += '<div class="encours"><div>' +
         '<div class="eyebrow" style="margin-bottom:4px">Chapitre en cours</div>' +
         '<h3 style="font-size:21px">' + cur.titre + '</h3>' +
         '<p class="tiny" style="margin-top:4px">' + cur.resume + (sc.tot ? ' &middot; ' + sc.ok + '/' + sc.tot + ' réussis' : '') + '</p></div>' +
         '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
         (cur.gens.length ? '<button class="btn primary" data-serie="' + cur.id + '|mixte">S’entraîner</button>' : '') +
         '<button class="btn" data-chap="' + cur.id + '">Ouvrir</button></div></div>';
  } else {
    h += '<div class="encours"><div><h3 style="font-size:19px">Sur quoi travailles-tu en ce moment ?</h3>' +
         '<p class="tiny" style="margin-top:4px">Ouvre un chapitre et marque-le « En cours » : il apparaîtra ici, et les révisions se concentreront dessus.</p></div>' +
         '<div><button class="btn" data-chap="second-degre">Voir un chapitre</button></div></div>';
  }

  h += '<div class="modes" style="margin-top:14px">' +
       '<button class="mode" data-go="revision"' + (poolRevision().length ? '' : ' disabled') + '><b>🔁 Réviser</b>' +
       '<span>Un mélange tiré dans les chapitres déjà vus, en commençant par ce qui a été raté.</span></button>' +
       '<button class="mode" data-go="chrono"' + (poolRevision().length ? '' : ' disabled') + '><b>⏱️ Interro chrono</b>' +
       '<span>10 questions en 15 minutes, comme un devoir surveillé.</span></button>' +
       '<button class="mode m-ds" data-eval="1"' + (poolRevision().length ? '' : ' disabled') + '><b>📝 Devoir surveillé</b>' +
       '<span>Un vrai sujet noté sur 20, avec barème et durée. Correction et note à la fin.</span></button>' +
       '<button class="mode" data-go="notes"><b>📈 Mes notes</b>' +
       '<span>L’historique des devoirs et la courbe de progression.</span></button>' +
       '<button class="mode" data-go="programme"><b>📋 Le programme officiel</b>' +
       '<span>Les 12 chapitres du BO et les capacités attendues pour chacun.</span></button>' +
       '</div>';

  S.badges = S.badges || [];
  h += '<div class="titre-sec">Badges <span>' + S.badges.length + ' / ' + BADGES.length + '</span></div>' +
       '<div class="badges">' + BADGES.map(b => {
         const eu = S.badges.indexOf(b.id) >= 0;
         return '<div class="badge' + (eu ? ' eu' : '') + '" title="' + esc(b.desc) + '">' +
                '<span class="be">' + (eu ? b.e : '🔒') + '</span>' +
                '<b>' + b.nom + '</b><span class="bd">' + b.desc + '</span></div>';
       }).join('') + '</div>';

  if (rev.length){
    h += '<h3 style="font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-3);font-family:var(--sans);font-weight:700;margin-bottom:10px">À revoir en priorité</h3>' +
         '<div class="revue" style="margin-bottom:30px">' +
         rev.slice(0, 5).map(r => '<div class="rev"><span>' + esc(r.meta.label) + '</span>' +
           '<span class="ch">' + CHAP[r.meta.chap].titre + ' &middot; ' + r.st.ko + ' erreur' + (r.st.ko > 1 ? 's' : '') + '</span></div>').join('') +
         '</div>';
  }

  h += '<div class="blocs">';
  blocsCourants().forEach(b => {
    h += '<div class="bloc" data-bloc="' + b.id + '"><h3>' + b.nom + '</h3><div class="chaps">';
    chapitresCourants().filter(c => c.bloc === b.id).forEach(c => {
      const st = statutChap(c.id), sc = scoreChap(c.id);
      const info = STATUTS.find(x => x.id === st);
      const cxp = xpChap(c.id), crg = rang(cxp, RANGS_CHAP);
      h += '<button class="chap" data-bloc="' + c.bloc + '" data-chap="' + c.id + '">' +
           '<div class="t">' + c.titre + '</div>' +
           '<div class="tiny" style="line-height:1.4">' + c.resume + '</div>' +
           (c.gens.length && cxp ? '<div class="chap-rank"><span class="niv-dots">' +
              RANGS_CHAP.map((_, i) => '<i class="' + (i <= crg.index ? 'on' : '') + '"></i>').join('') +
              '</span><span>' + crg.nom + ' &middot; ' + cxp + ' pts</span></div>' : '') +
           '<div class="row"><span class="pill ' + (st === 'encours' ? 'vu' : (st === 'fini' ? 'fini' : 'neuf')) + '">' + info.court + '</span>' +
           (c.gens.length
             ? (sc.tot ? '<span class="tiny">' + sc.ok + '/' + sc.tot + ' &middot; ' + sc.pc + ' %</span>' : '<span class="tiny">' + c.gens.length + ' types d’exercices</span>')
             : '<span class="pill vu">exercices bientôt</span>') +
           '</div></button>';
    });
    h += '</div></div>';
  });
  h += '</div>';
  h += '<div class="pied">' + ligneVersion() + '</div>';
  elMain.innerHTML = h;
  elTop.textContent = 'Lisa';
}

/* ---------------- programme officiel ---------------- */
function vueProgramme(){
  let h = '<div class="eyebrow">Arrêté du 17 janvier 2019 &middot; BO spécial n°1 du 22 janvier 2019</div>' +
          '<h2 style="font-size:28px">Le programme de spécialité</h2>' +
          '<p class="lede" style="margin:8px 0 24px">Cinq grandes parties, douze chapitres. Pour chacun, les <b>capacités attendues</b> : ' +
          'ce sont elles qui servent de base aux devoirs surveillés.</p><div class="blocs">';
  blocsCourants().forEach(b => {
    h += '<div class="bloc" data-bloc="' + b.id + '"><h3>' + b.nom + '</h3><div class="cours">';
    chapitresCourants().filter(c => c.bloc === b.id).forEach(c => {
      h += '<div class="blk def"><div class="h"><span class="k">' + c.titre + '</span></div>' +
           '<div class="body"><ul>' + c.capacites.map(x => '<li>' + x + '</li>').join('') + '</ul>' +
           '<div style="margin-top:6px"><button class="btn sm" data-chap="' + c.id + '">Ouvrir le chapitre</button></div></div></div>';
    });
    h += '</div></div>';
  });
  h += '</div>';
  elMain.innerHTML = h;
  elTop.textContent = 'Le programme';
}

/* ---------------- chapitre ---------------- */
function vueChapitre(){
  const c = CHAP[vue.id];
  const onglet = vue.onglet || 'cours';
  const st = statutChap(c.id), sc = scoreChap(c.id);
  const cxp = xpChap(c.id), crg = rang(cxp, RANGS_CHAP);
  let h = '<div class="chead" data-bloc="' + c.bloc + '">' +
    '<div class="eyebrow">' + BLOCS.find(b => b.id === c.bloc).nom + '</div>' +
    '<h2>' + c.titre + '</h2>' +
    '<p class="lede">' + c.resume + '</p>' +
    (c.gens.length ? '<div class="chap-rank big"><span class="niv-dots">' +
       RANGS_CHAP.map((_, i) => '<i class="' + (i <= crg.index ? 'on' : '') + '"></i>').join('') + '</span>' +
       '<b>' + crg.nom + '</b><span>' + cxp + ' pts' +
       (crg.prochain ? ' &middot; encore ' + (crg.prochain.min - cxp) + ' pour ' + crg.prochain.nom : '') + '</span></div>' : '') +
    '<div class="toolbar" style="margin-top:16px">' +
    '<span class="tiny">Où en es-tu ?</span><div class="seg">' +
    STATUTS.map(s => '<button class="' + (st === s.id ? 'on' : '') + '" data-statut="' + s.id + '">' + s.long + '</button>').join('') +
    '</div>' + (sc.tot ? '<span class="tiny">' + sc.ok + ' / ' + sc.tot + ' exercices réussis (' + sc.pc + ' %)</span>' : '') +
    '</div></div>';

  h += '<div class="tabs">' +
    '<button class="' + (onglet === 'cours' ? 'on' : '') + '" data-onglet="cours">Cours</button>' +
    '<button class="' + (onglet === 'exos' ? 'on' : '') + '" data-onglet="exos">S’entraîner</button>' +
    '<button class="' + (onglet === 'res' ? 'on' : '') + '" data-onglet="res">Mes résultats</button>' +
    '</div>';

  if (onglet === 'cours'){
    h += '<div class="capa"><div class="eyebrow" style="margin-bottom:2px">Capacités attendues</div><ul>' +
         c.capacites.map(x => '<li>' + x + '</li>').join('') + '</ul></div>';
    h += '<div class="cours" data-bloc="' + c.bloc + '">' + c.cours.map(b => {
      const k = { def: 'Définition', prop: 'Propriété', meth: 'Méthode', piege: 'À éviter',
                  pourquoi: '🤔 À quoi ça sert', ex: '✏️ Exemple', astuce: '💡 Astuces' }[b.k];
      return '<div class="blk ' + b.k + '"><div class="h"><span class="k">' + k + '</span><b>' + b.t + '</b></div><div class="body">' + b.c + '</div></div>';
    }).join('') + '</div>';
    if (c.gens.length){
      h += '<div style="margin-top:22px"><button class="btn primary" data-onglet="exos">Passer aux exercices</button></div>';
    }
  }

  if (onglet === 'exos'){
    if (!c.gens.length){
      h += '<div class="empty"><h3 style="font-size:19px;margin-bottom:8px">Fiche de cours disponible</h3>' +
           '<p style="max-width:52ch;margin:0 auto">Les exercices générés pour ce chapitre arrivent dans une prochaine version. ' +
           'En attendant, le cours et les capacités attendues sont complets dans l’onglet « Cours ».</p></div>';
    } else {
      const parNiveau = {};
      ORDRE_NIVEAUX.forEach(n => { parNiveau[n] = []; });
      c.gens.forEach(g => parNiveau[g.niveau].push(g));
      h += '<p class="lede" style="margin-bottom:16px">Choisis un niveau. Chaque série comporte 8 questions tirées au sort ' +
           '(les valeurs changent à chaque fois), et rapporte des points selon la difficulté.</p><div class="niveaux">';
      h += '<button class="niv" data-serie="' + c.id + '|mixte"><b>Série mixte</b>' +
           '<span>Les ' + c.gens.length + ' types d’exercices du chapitre, mélangés.</span></button>';
      ORDRE_NIVEAUX.forEach(n => {
        if (!parNiveau[n].length) return;
        h += '<button class="niv' + (n === 'exp' ? ' dur' : '') + (n === 'demo' ? ' demo' : '') + '" data-serie="' + c.id + '|' + n + '">' +
             '<b>' + NIVEAUX[n] + '<span class="pts">' + POINTS[n] + ' pts</span></b>' +
             (n === 'exp' ? '<span class="avert">Niveau évaluation exigeante</span>' : '') +
             (n === 'demo' ? '<span class="avert" style="color:var(--accent)">À rédiger sur ton cahier</span>' : '') +
             '<span>' + parNiveau[n].map(g => g.label).join(' &middot; ') + '</span></button>';
      });
      h += '</div>';
    }
  }

  if (onglet === 'res'){
    if (!c.gens.length){
      h += '<div class="empty">Ce chapitre n’a pas encore d’exercices.</div>';
    } else {
      h += '<div class="methods">' + c.gens.map(g => {
        const m = S.methodes[g.id];
        const tot = m ? m.ok + m.ko : 0;
        const pc = tot ? Math.round(100 * m.ok / tot) : null;
        return '<div class="mrow"><div class="lbl">' + esc(g.label) + '<div class="tiny">' + NIVEAUX[g.niveau] + '</div></div>' +
               '<div class="sc">' + (tot ? m.ok + ' / ' + tot : '—') + '</div>' +
               '<div class="bar' + (pc !== null && pc >= 70 ? ' g' : '') + '"><span style="width:' + (pc === null ? 0 : pc) + '%"></span></div></div>';
      }).join('') + '</div>' +
      '<p class="tiny" style="margin-top:12px">Une notion ratée est automatiquement reproposée dans « Réviser » quelques jours plus tard.</p>';
    }
  }
  elMain.innerHTML = h;
  elTop.textContent = c.titre;
}

/* ---------------- constitution des séries ---------------- */
function poolRevision(){
  const out = [];
  chapitresCourants().forEach(c => { if (statutChap(c.id) !== 'neuf') c.gens.forEach(g => out.push(g)); });
  return out;
}

/* ---------------- matieres ---------------- */
function rubanMatieres(){
  const miennes = MATIERES.filter(m => S.mesMatieres.indexOf(m.id) >= 0);
  return '<div class="ruban">' + miennes.map(m =>
    '<button class="mat' + (m.id === S.matiere ? ' on' : '') + (m.pret ? '' : ' futur') + '" data-mat="' + m.id + '">' +
    '<span class="me">' + m.e + '</span><b>' + m.court + '</b>' +
    (m.pret ? '' : '<span class="mb">bientot</span>') + '</button>').join('') +
    '<button class="mat plus" data-mat="+"><span class="me">+</span><b>Mes matieres</b></button></div>';
}
function vueMatieres(){
  let h = '<div class="eyebrow">Premiere generale</div>' +
    '<h2 style="font-size:28px">Mes matieres</h2>' +
    '<p class="lede" style="margin:8px 0 22px">Coche les matieres que tu suis cette annee : elles apparaissent en haut de l\u2019accueil. ' +
    'Les mathematiques sont pretes ; les autres programmes arrivent l\u2019un apres l\u2019autre.</p>';
  [['specialite', 'Specialites'], ['commun', 'Enseignements communs']].forEach(g => {
    h += '<div class="bloc"><h3>' + g[1] + '</h3><div class="chaps">' +
      MATIERES.filter(m => m.type === g[0]).map(m => {
        const prise = S.mesMatieres.indexOf(m.id) >= 0;
        return '<button class="matcard' + (prise ? ' prise' : '') + '" data-prendre="' + m.id + '">' +
          '<span class="me">' + m.e + '</span>' +
          '<span class="mn"><b>' + m.nom + '</b><span class="tiny">' +
          (m.pret ? CHAPITRES.filter(c => c.matiere === m.id).length + ' chapitres \u00B7 exercices disponibles' : 'Programme a venir') +
          '</span></span><span class="mk"></span></button>';
      }).join('') + '</div></div>';
  });
  elMain.innerHTML = h;
  elTop.textContent = 'Mes matieres';
}
function vueBientot(){
  const m = MAT[vue.id];
  elMain.innerHTML = '<div class="empty" style="padding-block:56px">' +
    '<div style="font-size:46px;line-height:1.2">' + m.e + '</div>' +
    '<h2 style="font-size:24px;margin:10px 0 8px">' + m.nom + '</h2>' +
    '<p style="max-width:54ch;margin:0 auto 18px">Cette matiere n\u2019a pas encore son programme dans l\u2019application. ' +
    'Les mathematiques ont servi de modele : chapitres officiels, fiches de cours, exercices generes et points. ' +
    'Les autres matieres suivront sur le meme moule.</p>' +
    '<button class="btn primary" data-mat="maths">Retour aux maths</button></div>';
  elTop.textContent = m.nom;
}
function tirer(pool, n){
  if (!pool.length) return [];
  const now = Date.now();
  const prio = pool.filter(g => { const m = S.methodes[g.id]; return m && m.ko > 0 && m.due <= now; });
  const neufs = pool.filter(g => !S.methodes[g.id]);
  const autres = pool.filter(g => prio.indexOf(g) < 0 && neufs.indexOf(g) < 0);
  let liste = R.shuffle(prio).concat(R.shuffle(neufs)).concat(R.shuffle(autres));
  while (liste.length < n) liste = liste.concat(R.shuffle(pool));
  return liste.slice(0, n);
}
function lancerSerie(pool, n, mode, titre, secondes){
  if (!pool.length) return;
  serie = {
    gens: tirer(pool, n), idx: 0, mode: mode, titre: titre,
    resultats: [], q: null, valide: false, reste: secondes || 0, debut: Date.now()
  };
  clearInterval(tickChrono);
  if (secondes){
    tickChrono = setInterval(() => {
      if (!serie){ clearInterval(tickChrono); return; }
      serie.reste--;
      const el = document.getElementById('chrono');
      if (el){ el.textContent = mmss(serie.reste); el.classList.toggle('warn', serie.reste <= 60); }
      if (serie.reste <= 0){ clearInterval(tickChrono); aller({ nom: 'bilan' }); }
    }, 1000);
  }
  prochaine();
  aller({ nom: 'serie' });
}
function mmss(s){ s = Math.max(0, s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function prochaine(){
  const g = serie.gens[serie.idx];
  const q = g.fn();
  q.gen = g;
  if (q.qcm){
    const idx = R.shuffle(q.qcm.options.map((o, i) => i));
    q.qcm.options = idx.map(i => q.qcm.options[i]);
    q.qcm.bon = idx.indexOf(q.qcm.bon);
  }
  q.choix = null;
  if (q.bareme) q.coches = q.bareme.map(() => false);
  serie.q = q;
  serie.valide = false;
  serie.juste = null;
  serie.note = undefined;
}

/* ---------------- déroulé d'une série ---------------- */
function vueSerie(){
  const q = serie.q, g = q.gen;
  let h = '<div class="run">';
  h += '<div class="runtop"><div><div class="eyebrow" style="margin-bottom:2px">' + esc(serie.titre) + '</div>' +
       '<div class="dots">' + serie.gens.map((_, i) => {
         const r = serie.resultats[i];
         return '<i class="' + (i === serie.idx ? 'now' : (r === true ? 'ok' : (r === false ? 'ko' : ''))) + '"></i>';
       }).join('') + '</div></div>' +
       '<div style="display:flex;align-items:center;gap:10px">' +
       (S.serie >= 2 ? '<span class="streak">série ×' + S.serie + '</span>' : '') +
       (serie.mode === 'chrono' ? '<span class="timer" id="chrono">' + mmss(serie.reste) + '</span>' : '') +
       '<button class="btn sm ghost" data-quitter="1">Quitter</button></div></div>';

  h += '<div class="qcard" data-bloc="' + CHAP[g.chap].bloc + '">';
  h += '<div class="qmeta"><span class="pill neuf">' + NIVEAUX[g.niveau] + '</span>' +
       '<span class="tiny">' + CHAP[g.chap].titre + ' &middot; ' + esc(g.label) + '</span>' +
       '<span class="tiny" style="margin-left:auto">Question ' + (serie.idx + 1) + ' / ' + serie.gens.length + '</span></div>';
  h += '<div class="qtext">' + q.enonce + '</div>';

  if (q.bareme){
    h += '<div class="consigne">✍️ Rédige cette démonstration <b>sur ton cahier</b>, puis compare avec le corrigé.' +
         (q.aide ? '<div class="tiny" style="margin-top:6px">' + q.aide + '</div>' : '') + '</div>';
    if (serie.valide){
      h += '<div class="autoeval">' + q.bareme.map((b, j) =>
        '<label class="ligne' + (q.coches[j] ? ' ok' : '') + '"><input type="checkbox" data-coched="' + j + '"' +
        (q.coches[j] ? ' checked' : '') + (serie.note !== undefined ? ' disabled' : '') + '>' +
        '<span class="lp">' + b.pts + ' pt' + (b.pts > 1 ? 's' : '') + '</span><span class="ld">' + b.d + '</span></label>').join('') + '</div>';
    }
  } else if (q.qcm){
    h += '<div class="choices">' + q.qcm.options.map((o, i) => {
      let cl = 'choice' + (q.choix === i ? ' sel' : '');
      if (serie.valide){
        if (i === q.qcm.bon) cl += ' good';
        else if (q.choix === i) cl += ' bad';
      }
      return '<button class="' + cl + '" data-choix="' + i + '"' + (serie.valide ? ' disabled' : '') + '>' +
             '<span class="k">' + 'ABCD'[i] + '</span><span>' + o + '</span></button>';
    }).join('') + '</div>';
  } else {
    h += '<div class="fields">' + q.champs.map((f, i) => {
      if (f.type === 'choix'){
        return '<div class="field"><label>' + f.label + '</label><div class="seg">' +
          f.options.map((o, j) => '<button class="' + (f.saisie === j ? 'on' : '') + '" data-champ="' + i + '" data-val="' + j + '"' +
            (serie.valide ? ' disabled' : '') + '>' + o + '</button>').join('') + '</div>' +
          (serie.valide ? verdictChamp(f, f.saisie === f.bon) : '') + '</div>';
      }
      return '<div class="field"><label for="f' + i + '">' + f.label + '</label>' +
        '<input id="f' + i + '" type="text" inputmode="decimal" autocomplete="off" value="' + (f.saisie === undefined ? '' : esc(f.saisie)) + '"' +
        (serie.valide ? ' disabled' : '') + '>' +
        (serie.valide ? verdictChamp(f, champOk(f)) : '') + '</div>';
    }).join('') + '</div>';
  }

  if (q.bareme){
    if (!serie.valide){
      h += '<div class="actions"><button class="btn primary" data-corrige="1">J’ai fini, voir le corrigé</button></div>';
    } else if (serie.note === undefined){
      h += '<div class="actions"><button class="btn primary" data-autoeval="1">Valider mon auto-évaluation</button></div>';
    } else {
      h += '<div class="verdict ' + (serie.juste ? 'ok' : 'ko') + '">' +
           '<div class="vh"><span class="ve">' + (serie.juste ? '🧩' : '📖') + '</span>' +
           nf(serie.note) + ' / ' + nf(serie.noteTot) + ' sur le barème' +
           (serie.gain ? '<span class="gain">+' + serie.gain + ' pts</span>' : '') + '</div>' +
           '<div class="vb">' + (serie.juste
              ? 'Rédaction solide. C’est exactement ce qui est attendu le jour du devoir.'
              : 'Relis les lignes non cochées : ce sont elles qui coûtent des points en DS.') + '</div></div>' +
           '<div class="actions"><button class="btn primary" data-suivante="1">' +
           (serie.idx + 1 >= serie.gens.length ? 'Voir le bilan' : 'Question suivante') + '</button></div>';
    }
  } else if (!serie.valide){
    h += '<div class="actions"><button class="btn primary" data-verifier="1">Vérifier</button>' +
         '<button class="btn ghost" data-sechapper="1">Je ne sais pas</button></div>';
  } else {
    h += '<div class="verdict ' + (serie.juste ? 'ok' : 'ko') + '">' +
         '<div class="vh"><span class="ve">' + (serie.emo || (serie.juste ? '🎯' : '💡')) + '</span>' +
         (serie.juste ? 'Juste' : (serie.abandon ? 'Correction' : 'Pas tout à fait')) +
         (serie.juste && serie.gain ? '<span class="gain">+' + serie.gain + ' pts</span>' : '') + '</div>' +
         '<div class="vb">' + (serie.msg || '') + '</div></div>';
    if (!q.bareme) h += '<div class="sol"><h4>Correction détaillée</h4><div class="steps">' +
         q.etapes.map(s => '<div class="step"><div>' + s + '</div></div>').join('') + '</div></div>';
    h += '<div class="actions"><button class="btn primary" data-suivante="1">' +
         (serie.idx + 1 >= serie.gens.length ? 'Voir le bilan' : 'Question suivante') + '</button></div>';
  }
  h += '</div></div>';
  elMain.innerHTML = h;
  elTop.textContent = serie.titre;
  const first = document.getElementById('f0');
  if (first && !serie.valide) first.focus();
}
function verdictChamp(f, ok){
  if (ok) return '<span class="tiny" style="color:var(--juste);font-weight:700">✓</span>';
  const att = f.type === 'choix' ? f.options[f.bon] : nf(f.bon);
  return '<span class="tiny" style="color:var(--faux);font-weight:700">✗ attendu : ' + att + '</span>';
}
function champOk(f){
  if (f.type === 'choix') return f.saisie === f.bon;
  const v = String(f.saisie === undefined ? '' : f.saisie).trim().replace(/\s/g, '').replace(',', '.');
  if (v === '') return false;
  const x = Number(v);
  if (!isFinite(x)) return false;
  return Math.abs(x - f.bon) <= (f.tol === undefined ? 1e-6 : f.tol);
}
function lireChamps(){
  const q = serie.q;
  if (q.qcm || !q.champs) return;      /* une démonstration n'a pas de champs */
  q.champs.forEach((f, i) => {
    if (f.type === 'choix') return;
    const el = document.getElementById('f' + i);
    if (el) f.saisie = el.value;
  });
}
function verifier(abandon){
  const q = serie.q;
  lireChamps();
  let juste;
  if (q.bareme) return;                /* une démonstration se valide par l'auto-évaluation */
  if (q.qcm) juste = (q.choix === q.qcm.bon);
  else juste = q.champs.every(champOk);
  if (abandon) juste = false;
  const rangAvant = rang(xpTotal(), RANGS).index;
  serie.abandon = !!abandon;
  serie.valide = true;
  serie.juste = juste;
  serie.resultats[serie.idx] = juste;
  const r = enregistrer(q.gen.id, juste);
  serie.gain = r.gain;
  serie.gains = (serie.gains || 0) + r.gain;
  serie.msg = juste
    ? (r.revanche ? 'Tu l’avais ratée la dernière fois. Plus maintenant !'
       : (q.gen.niveau === 'exp' ? 'Chapeau ! Celle-là était coriace.'
          : (serie.gain > POINTS[q.gen.niveau] ? unDe(MSG_JUSTE) + ' Bonus de série.' : unDe(MSG_JUSTE))))
    : unDe(MSG_FAUX);
  serie.emo = juste ? (r.revanche ? '🔁' : unDe(EMO_JUSTE)) : '💡';
  bip(juste ? 'juste' : 'faux');
  rendre();
  const gagnes = nouveauxBadges({ revanche: r.revanche });
  const rangApres = rang(xpTotal(), RANGS).index;
  if (rangApres > rangAvant){ feterRang(RANGS[rangApres].nom); rendreNav(); }
  if (gagnes.length) setTimeout(() => feterBadges(gagnes), rangApres > rangAvant ? 1400 : 0);
  else if (juste && S.serie >= 5 && S.serie % 5 === 0) confettis();
}
function suivante(){
  if (serie.idx + 1 >= serie.gens.length){ aller({ nom: 'bilan' }); return; }
  serie.idx++;
  prochaine();
  rendre();
  window.scrollTo(0, 0);
}

/* ---------------- bilan ---------------- */
function vueBilan(){
  clearInterval(tickChrono);
  const ok = serie.resultats.filter(r => r === true).length;
  const tot = serie.gens.length;
  const faits = serie.resultats.filter(r => r !== undefined).length;
  const duree = Math.round((Date.now() - serie.debut) / 1000);
  const rates = serie.gens.filter((g, i) => serie.resultats[i] === false);
  const pc = faits ? Math.round(100 * ok / faits) : 0;
  const fin = motDeFin(pc);
  if (!serie.bilanFait){
    serie.bilanFait = true;
    const gagnes = nouveauxBadges({ serieParfaite: (ok === tot && faits === tot), chronoOk: serie.mode === 'chrono' ? ok : 0 });
    if (pc >= 70) setTimeout(() => confettis(pc === 100 ? 'max' : ''), 200);
    if (gagnes.length) setTimeout(() => feterBadges(gagnes), 900);
  }
  const xp = xpTotal(), rg = rang(xp, RANGS);
  let h = '<div class="run"><div class="card bilan">' +
    '<div class="eyebrow">' + esc(serie.titre) + '</div>' +
    '<div class="bemo">' + fin.e + '</div>' +
    '<div class="score">' + ok + '<span class="sur"> / ' + tot + '</span></div>' +
    '<div class="gain-total">+ ' + (serie.gains || 0) + ' points</div>' +
    '<p class="lede" style="margin:12px auto 0;text-align:center">' + fin.t + '</p>' +
    '<p class="tiny" style="margin-top:6px">Durée : ' + mmss(duree) + (faits < tot ? ' &middot; ' + (tot - faits) + ' question(s) non traitée(s)' : '') + '</p>' +
    '<div class="bilan-rank"><div class="rank-top" style="margin-bottom:6px"><b>' + rg.nom + '</b><span class="tiny">' + xp + ' pts</span></div>' +
    '<div class="bar" style="height:7px"><span style="width:' + rg.pc + '%"></span></div>' +
    '<p class="tiny" style="margin-top:6px">' + (rg.prochain ? (rg.prochain.min - xp) + ' points avant le rang ' + rg.prochain.nom : 'Rang maximal atteint') + '</p></div>';
  if (rates.length){
    const uniques = [];
    rates.forEach(g => { if (uniques.indexOf(g) < 0) uniques.push(g); });
    h += '<div class="revue" style="margin-top:22px;text-align:left">' +
      uniques.map(g => '<div class="rev"><span>' + esc(g.label) + '</span><span class="ch">' + CHAP[g.chap].titre + '</span></div>').join('') +
      '</div><p class="tiny" style="margin-top:10px">Ces notions reviendront automatiquement dans « Réviser ».</p>';
  }
  h += '<div class="actions" style="justify-content:center;margin-top:24px">' +
    '<button class="btn primary" data-refaire="1">Refaire une série</button>' +
    '<button class="btn" data-go="accueil">Retour à l’accueil</button></div>';
  h += '</div></div>';
  elMain.innerHTML = h;
  elTop.textContent = 'Bilan';
}

/* ---------------- rendu global + événements ---------------- */
function rendre(){
  if (vue.nom === 'accueil') vueAccueil();
  else if (vue.nom === 'programme') vueProgramme();
  else if (vue.nom === 'matieres') vueMatieres();
  else if (vue.nom === 'ds') vueDS();
  else if (vue.nom === 'copie') vueCopie();
  else if (vue.nom === 'notes') vueNotes();
  else if (vue.nom === 'bientot') vueBientot();
  else if (vue.nom === 'chapitre') vueChapitre();
  else if (vue.nom === 'serie') vueSerie();
  else if (vue.nom === 'bilan') vueBilan();
  rendreNav();
}

document.addEventListener('click', function(e){
  const t = e.target.closest('[data-maj],[data-ouvrir],[data-corrige],[data-coched],[data-autoeval],[data-eval],[data-dsq],[data-dschoix],[data-dschamp],[data-dsrendre],[data-coche],[data-noter],[data-mat],[data-prendre],[data-son],[data-go],[data-chap],[data-onglet],[data-statut],[data-serie],[data-choix],[data-champ],[data-verifier],[data-sechapper],[data-suivante],[data-quitter],[data-refaire]');
  if (e.target.closest('#burger')){ ouvrirMenu(); return; }
  if (!t) return;
  const d = t.dataset;
  if (d.go){
    if (d.go === 'revision'){
      const pool = poolRevision();
      if (!pool.length) return;
      lancerSerie(pool, 10, 'revision', 'Révision');
    } else if (d.go === 'chrono'){
      const pool = poolRevision();
      if (!pool.length) return;
      lancerSerie(pool, 10, 'chrono', 'Interro chrono', 900);
    } else aller({ nom: d.go });
    return;
  }
  if (d.ouvrir){
    const m = MAT[d.ouvrir];
    const ouverte = (S.navOuv === undefined) ? S.matiere : S.navOuv;
    if (!m.pret){ aller({ nom: 'bientot', id: d.ouvrir }); return; }
    if (m.id === ouverte){ S.navOuv = null; }
    else { S.navOuv = m.id; if (S.matiere !== m.id){ S.matiere = m.id; aller({ nom: 'accueil' }); return; } }
    sauver(); rendreNav(); return;
  }
  if (d.mat){
    if (d.mat === '+'){ aller({ nom: 'matieres' }); return; }
    const m = MAT[d.mat];
    if (m && m.pret){ S.matiere = d.mat; S.navOuv = d.mat; sauver(); aller({ nom: 'accueil' }); }
    else aller({ nom: 'bientot', id: d.mat });
    return;
  }
  if (d.prendre){
    const i = S.mesMatieres.indexOf(d.prendre);
    if (i >= 0){ if (d.prendre !== 'maths') S.mesMatieres.splice(i, 1); }
    else S.mesMatieres.push(d.prendre);
    sauver(); rendre(); return;
  }
  if (d.chap){ aller({ nom: 'chapitre', id: d.chap, onglet: 'cours' }); return; }
  if (d.onglet){ vue.onglet = d.onglet; window.scrollTo(0, 0); rendre(); return; }
  if (d.maj){ forcerMiseAJour(); return; }
  if (d.son){
    S.son = !S.son;
    sauver();
    if (S.son) bip('juste');
    rendre();
    return;
  }
  if (d.statut){
    const id = vue.id;
    S.statuts[id] = d.statut;
    if (d.statut === 'encours') S.courant = id;
    else if (S.courant === id && d.statut === 'neuf') S.courant = null;
    sauver(); rendre(); return;
  }
  if (d.serie){
    const p = d.serie.split('|'), c = CHAP[p[0]];
    const pool = p[1] === 'mixte' ? c.gens : c.gens.filter(g => g.niveau === p[1]);
    lancerSerie(pool, 8, 'chapitre', c.titre + (p[1] === 'mixte' ? '' : ' · ' + NIVEAUX[p[1]]));
    return;
  }
  if (d.choix !== undefined){ if (!serie.valide){ serie.q.choix = +d.choix; rendre(); } return; }
  if (d.champ !== undefined){
    if (!serie.valide){ lireChamps(); serie.q.champs[+d.champ].saisie = +d.val; rendre(); }
    return;
  }
  if (d.corrige){ serie.valide = true; rendre(); return; }
  if (d.coched !== undefined){
    const j = +d.coched;
    serie.q.coches[j] = !serie.q.coches[j];
    rendre();
    return;
  }
  if (d.autoeval){ validerAutoEval(); return; }
  if (d.eval){ lancerEvaluation(); return; }
  if (d.dsq !== undefined){ allerQuestion(+d.dsq); return; }
  if (d.dschoix !== undefined){ lireReponsesDS(); dsEnCours.questions[dsEnCours.idx].choix = +d.dschoix; rendre(); return; }
  if (d.dschamp !== undefined){ lireReponsesDS(); dsEnCours.questions[dsEnCours.idx].champs[+d.dschamp].saisie = +d.val; rendre(); return; }
  if (d.dsrendre){ rendreCopie(); return; }
  if (d.coche !== undefined){
    const p = d.coche.split('-');
    const q = dsEnCours.questions[+p[0]];
    q.coches[+p[1]] = !q.coches[+p[1]];
    rendre();
    return;
  }
  if (d.noter){ calculerNote(); return; }
  if (d.verifier){ verifier(false); return; }
  if (d.sechapper){ verifier(true); return; }
  if (d.suivante){ suivante(); return; }
  if (d.quitter){ clearInterval(tickChrono); aller({ nom: 'bilan' }); return; }
  if (d.refaire){
    const pool = serie.mode === 'chapitre' ? serie.gens.slice() : poolRevision();
    lancerSerie(pool, serie.gens.length, serie.mode, serie.titre, serie.mode === 'chrono' ? 900 : 0);
    return;
  }
});
document.addEventListener('keydown', function(e){
  if (e.key !== 'Enter' || vue.nom !== 'serie' || !serie || serie.q.bareme) return;
  e.preventDefault();
  if (serie.valide) suivante(); else verifier(false);
});

/* auto-évaluation d'une démonstration : la note vient du barème coché */
function validerAutoEval(){
  const q = serie.q;
  const tot = q.bareme.reduce((t, b) => t + b.pts, 0);
  const eus = q.bareme.reduce((t, b, j) => t + (q.coches[j] ? b.pts : 0), 0);
  const part = tot ? eus / tot : 0;
  serie.note = eus;
  serie.noteTot = tot;
  serie.juste = part >= 0.7;
  serie.resultats[serie.idx] = serie.juste;
  const r = enregistrer(q.gen.id, serie.juste, part);
  serie.gain = r.gain;
  serie.gains = (serie.gains || 0) + r.gain;
  bip(serie.juste ? 'juste' : 'faux');
  rendre();
  const gagnes = nouveauxBadges({});
  if (gagnes.length) feterBadges(gagnes);
}

rendre();
initStore();
</script>
