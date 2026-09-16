/* =========================================================================
   Couche motivation : encouragements, badges, confettis, objectif du jour,
   petits sons. Tout est décoratif — rien ici ne change une correction.
   ========================================================================= */

/* ---------- messages ---------- */
const MSG_JUSTE = [
  'Impeccable !', 'Nickel.', 'Exactement ça.', 'Tu gères.', 'Parfait.',
  'Bravo !', 'Tranquille.', 'Sans faute.', 'Joli.', 'Pile poil.'
];
const MSG_FAUX = [
  'Presque ! Regarde la correction, elle est détaillée.',
  'Pas grave — c’est exactement pour ça qu’on s’entraîne.',
  'Celle-là est piégeuse. Reprends la correction tranquillement.',
  'On la remettra dans « Réviser » dans quelques jours.',
  'C’est en se trompant qu’on retient. Lis chaque étape.',
  'Rien de grave. La prochaine est pour toi.'
];
const EMO_JUSTE = ['🎯', '💪', '✨', '👏', '🔥', '⭐', '🙌'];

function unDe(liste){ return liste[Math.floor(Math.random() * liste.length)]; }

function motDeFin(pc){
  if (pc === 100) return { e: '🏆', t: 'Sans-faute. Chapeau.' };
  if (pc >= 85)   return { e: '🎉', t: 'Excellent — c’est du niveau DS, ça.' };
  if (pc >= 70)   return { e: '💪', t: 'Solide. Encore un peu d’entraînement et c’est plié.' };
  if (pc >= 50)   return { e: '🙂', t: 'Ça avance. Reprends les erreurs, elles reviendront.' };
  if (pc >= 25)   return { e: '🌱', t: 'Chapitre pas encore digéré — relis la fiche de cours.' };
  return { e: '📖', t: 'Relis le cours, puis reviens : ça ira beaucoup mieux.' };
}

/* ---------- objectif du jour ---------- */
const OBJECTIF_JOUR = 60;

function jourTexte(d){
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function aujourdhui(){ return jourTexte(new Date()); }
function hier(){ return jourTexte(new Date(Date.now() - JOUR)); }

/* appelée à chaque réponse : entretient la série de jours */
function marquerJour(){
  const j = aujourdhui();
  if (S.jour === j) return;
  S.joursSuite = (S.jour === hier()) ? (S.joursSuite || 0) + 1 : 1;
  if (S.joursSuite > (S.recordJours || 0)) S.recordJours = S.joursSuite;
  S.jour = j;
  S.xpJour = 0;
}
function xpDuJour(){ return S.jour === aujourdhui() ? (S.xpJour || 0) : 0; }
function serieJours(){
  if (S.jour === aujourdhui() || S.jour === hier()) return S.joursSuite || 0;
  return 0;
}

/* ---------- badges ---------- */
const BADGES = [
  { id: 'premier',   e: '🌟', nom: 'Premier pas',       desc: 'Réussir un premier exercice',
    test: c => c.totalOk >= 1 },
  { id: 'serie5',    e: '🔥', nom: 'En feu',            desc: '5 bonnes réponses d’affilée',
    test: c => (S.record || 0) >= 5 },
  { id: 'serie10',   e: '⚡', nom: 'Inarrêtable',       desc: '10 bonnes réponses d’affilée',
    test: c => (S.record || 0) >= 10 },
  { id: 'parfait',   e: '💯', nom: 'Sans-faute',        desc: 'Terminer une série sans aucune erreur',
    test: c => c.serieParfaite },
  { id: 'revanche',  e: '🔁', nom: 'Revanche',          desc: 'Réussir une notion ratée auparavant',
    test: c => c.revanche },
  { id: 'coriace',   e: '🧠', nom: 'Chasseuse de pièges', desc: '10 exercices d’Approfondissement réussis',
    test: c => c.okExp >= 10 },
  { id: 'chrono',    e: '⏱️', nom: 'Sang-froid',        desc: 'Au moins 8 bonnes réponses en interro chrono',
    test: c => c.chronoOk >= 8 },
  { id: 'expertChap',e: '🏅', nom: 'Spécialiste',       desc: 'Atteindre le rang Expert sur un chapitre',
    test: c => CHAPITRES.some(ch => xpChap(ch.id) >= RANGS_CHAP[3].min) },
  { id: 'jours3',    e: '📅', nom: 'Trois jours',       desc: 'Travailler 3 jours de suite',
    test: c => serieJours() >= 3 },
  { id: 'jours7',    e: '🗓️', nom: 'Une semaine',       desc: 'Travailler 7 jours de suite',
    test: c => serieJours() >= 7 },
  { id: 'pts500',    e: '🚀', nom: '500 points',        desc: 'Cumuler 500 points',
    test: c => xpTotal() >= 500 },
  { id: 'pts2000',   e: '🛰️', nom: '2 000 points',      desc: 'Cumuler 2 000 points',
    test: c => xpTotal() >= 2000 },
  { id: 'tourneur',  e: '🧭', nom: 'Tour du programme', desc: 'Entamer 4 chapitres différents',
    test: c => CHAPITRES.filter(ch => statutChap(ch.id) !== 'neuf').length >= 4 },
  { id: 'objectif',  e: '✅', nom: 'Objectif atteint',  desc: 'Atteindre l’objectif de points du jour',
    test: c => xpDuJour() >= OBJECTIF_JOUR },
  { id: 'ds14',      e: '📝', nom: 'Bon devoir',        desc: 'Obtenir au moins 14/20 à un devoir surveillé',
    test: c => (S.notes || []).some(n => n.note >= 14) },
  { id: 'demo',      e: '🧩', nom: 'Démonstratrice',    desc: 'Réussir 3 démonstrations rédigées',
    test: c => c.okDemo >= 3 }
];

function contexteBadges(extra){
  let totalOk = 0, okExp = 0, okDemo = 0;
  for (const mid in S.methodes){
    const m = S.methodes[mid], g = METHODE[mid];
    totalOk += m.ok;
    if (g && g.niveau === 'exp') okExp += m.ok;
    if (g && g.niveau === 'demo') okDemo += m.ok;
  }
  return Object.assign({ totalOk: totalOk, okExp: okExp, okDemo: okDemo, serieParfaite: false, revanche: false, chronoOk: 0 }, extra || {});
}
/* renvoie les badges débloqués à l'instant (et les mémorise) */
function nouveauxBadges(extra){
  const ctx = contexteBadges(extra);
  const gagnes = [];
  S.badges = S.badges || [];
  BADGES.forEach(b => {
    if (S.badges.indexOf(b.id) >= 0) return;
    let ok = false;
    try { ok = !!b.test(ctx); } catch (e) { ok = false; }
    if (ok){ S.badges.push(b.id); gagnes.push(b); }
  });
  if (gagnes.length) sauver();
  return gagnes;
}

/* ---------- confettis ---------- */
function confettis(force){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.createElement('canvas');
  cv.className = 'confettis';
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d');
  const couleurs = ['#2F45C5', '#E0A84B', '#0F7A54', '#C13A86', '#2F6FE0', '#D9720B'];
  const n = force === 'max' ? 140 : 70;
  const p = [];
  for (let i = 0; i < n; i++){
    p.push({
      x: cv.width * (0.2 + 0.6 * Math.random()),
      y: cv.height * 0.32 + Math.random() * 40,
      vx: (Math.random() - 0.5) * 11,
      vy: -7 - Math.random() * 11,
      l: 5 + Math.random() * 7,
      a: Math.random() * Math.PI,
      va: (Math.random() - 0.5) * 0.35,
      c: couleurs[Math.floor(Math.random() * couleurs.length)]
    });
  }
  let t = 0;
  (function boucle(){
    t++;
    ctx.clearRect(0, 0, cv.width, cv.height);
    p.forEach(o => {
      o.vy += 0.32; o.x += o.vx; o.y += o.vy; o.a += o.va;
      ctx.save();
      ctx.translate(o.x, o.y); ctx.rotate(o.a);
      ctx.globalAlpha = Math.max(0, 1 - t / 110);
      ctx.fillStyle = o.c;
      ctx.fillRect(-o.l / 2, -o.l / 4, o.l, o.l / 2);
      ctx.restore();
    });
    if (t < 110) requestAnimationFrame(boucle); else cv.remove();
  })();
}

/* ---------- sons (générés, aucun fichier) ---------- */
let audioCtx = null;
function bip(genre){
  if (!S.son) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = genre === 'juste' ? [660, 880] : genre === 'badge' ? [660, 880, 1100, 1320] : [200, 160];
    notes.forEach((f, i) => {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = genre === 'faux' ? 'sine' : 'triangle';
      o.frequency.value = f;
      const t0 = audioCtx.currentTime + i * 0.085;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.13, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.17);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t0); o.stop(t0 + 0.2);
    });
  } catch (e) { /* le son n'est jamais indispensable */ }
}

/* ---------- bandeaux de récompense ---------- */
function toast(html, duree){
  const d = document.createElement('div');
  d.className = 'toast';
  d.innerHTML = html;
  document.body.appendChild(d);
  requestAnimationFrame(() => d.classList.add('on'));
  setTimeout(() => { d.classList.remove('on'); setTimeout(() => d.remove(), 350); }, duree || 3600);
}
function feterBadges(liste){
  liste.forEach((b, i) => {
    setTimeout(() => {
      toast('<span class="te">' + b.e + '</span><span><b>Badge débloqué — ' + b.nom + '</b><br>' + b.desc + '</span>', 4200);
      bip('badge');
      confettis();
    }, i * 900);
  });
}
function feterRang(nom){
  toast('<span class="te">👑</span><span><b>Nouveau rang : ' + nom + '</b><br>Bravo, tu montes !</span>', 4600);
  bip('badge');
  confettis('max');
}
