<script>
/* =========================================================================
   Cahier de spé maths — Première générale (programme BO 22/01/2019)
   Noyau : rendu mathématique, stockage de la progression, utilitaires.
   ========================================================================= */

/* ---------- rendu mathématique (sans dépendance externe) ----------
   Mini-syntaxe :
     x^{2}  x^2   u_{n+1}  u_n     -> exposants / indices
     frac{a}{b}                    -> fraction
     sqrt{b^{2}-4ac}               -> racine carrée
     vec{AB}                       -> vecteur (flèche)
     @e @cos @sin @ln              -> texte droit (non italique)
   Les lettres isolées deviennent automatiquement italiques.            */

function mathHtml(src){
  const keep = [];
  let s = String(src);
  s = s.replace(/@([A-Za-z]+)/g, (_m, w) => { keep.push(w); return '' + (keep.length - 1) + ''; });
  s = s.replace(/(?<![A-Za-z-])([a-zA-Z])(?![A-Za-z])/g, '<i>$1</i>');
  s = s.replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>');
  s = s.replace(/\^(-?<i>[a-zA-Z]<\/i>|-?[0-9])/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>');
  s = s.replace(/_(<i>[a-zA-Z]<\/i>|[0-9])/g, '<sub>$1</sub>');
  s = s.replace(/sqrt\{([^{}]*)\}/g, '<span class="sqrt">√<span class="rad">$1</span></span>');
  s = s.replace(/frac\{([^{}]*)\}\{([^{}]*)\}/g, '<span class="frac"><span class="n">$1</span><span class="d">$2</span></span>');
  s = s.replace(/vec\{([^{}]*)\}/g, '<span class="vec">$1<span class="arw">→</span></span>');
  s = s.replace(/(\d+)/g, (_m, i) => keep[+i]);
  return s;
}
function M(src){ return '<span class="m">' + mathHtml(src) + '</span>'; }
function Mc(src){ return '<div class="center">' + M(src) + '</div>'; }

/* ---------- utilitaires numériques ---------- */
const R = {
  int(a, b){ return a + Math.floor(Math.random() * (b - a + 1)); },
  nz(a, b){ let v = 0; while (v === 0) v = R.int(a, b); return v; },
  pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; },
  sign(){ return Math.random() < 0.5 ? -1 : 1; },
  shuffle(arr){ const a = arr.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
};

/* nombre -> texte français (virgule décimale, pas de -0) */
function nf(x, dec){
  if (!isFinite(x)) return '—';
  let v = (dec === undefined) ? x : Math.round(x * Math.pow(10, dec)) / Math.pow(10, dec);
  if (Object.is(v, -0)) v = 0;
  let s = (dec === undefined) ? String(v) : v.toFixed(dec);
  return s.replace('.', ',');
}
/* coefficient signé pour écrire un polynôme : +3x, -x, ... */
function sgn(v, unit){
  const a = Math.abs(v);
  const body = unit ? (a === 1 ? unit : nf(a) + unit) : nf(a);
  return (v < 0 ? ' - ' : ' + ') + body;
}
/* premier terme d'un polynôme (pas de + initial) */
function lead(v, unit){
  const a = Math.abs(v);
  const body = unit ? (a === 1 ? unit : nf(a) + unit) : nf(a);
  return (v < 0 ? '-' : '') + body;
}
/* écrit ax^2+bx+c proprement (termes nuls omis) */
function trinome(a, b, c, v){
  v = v || 'x';
  let s = lead(a, v + '^{2}');
  if (b !== 0) s += sgn(b, v);
  if (c !== 0) s += sgn(c, '');
  return s;
}
function pgcd(a, b){ a = Math.abs(a); b = Math.abs(b); while (b){ [a, b] = [b, a % b]; } return a || 1; }
/* fraction réduite en mini-syntaxe */
function fracTxt(p, q){
  if (q < 0){ p = -p; q = -q; }
  const g = pgcd(p, q);
  p /= g; q /= g;
  if (q === 1) return nf(p);
  return (p < 0 ? '-' : '') + 'frac{' + Math.abs(p) + '}{' + q + '}';
}

/* ---------- état de la progression ---------- */
const VIDE = () => ({ v: 3, statuts: {}, methodes: {}, courant: null, serie: 0, record: 0,
                      badges: [], notes: [], jour: '', joursSuite: 0, recordJours: 0, xpJour: 0, son: true,
                      matiere: 'maths', mesMatieres: ['maths', 'francais', 'histgeo', 'sciences', 'anglais'], maj: 0 });
let S = VIDE();

const BOXES = [0, 1, 3, 7, 16];           // révision espacée, en jours
const JOUR = 86400000;

/* points par exercice réussi, selon la difficulté */
const POINTS = { app: 10, ent: 15, ds: 25, exp: 40 };

/* rangs — seuils globaux et seuils par chapitre */
const RANGS = [
  { min: 0,    nom: 'Débutant' },
  { min: 300,  nom: 'Confirmé' },
  { min: 900,  nom: 'Avancé' },
  { min: 2000, nom: 'Expert' },
  { min: 4000, nom: 'Maître' }
];
const RANGS_CHAP = [
  { min: 0,   nom: 'Débutant' },
  { min: 80,  nom: 'Confirmé' },
  { min: 220, nom: 'Avancé' },
  { min: 450, nom: 'Expert' },
  { min: 800, nom: 'Maître' }
];
function rang(xp, table){
  let i = 0;
  for (let k = 0; k < table.length; k++) if (xp >= table[k].min) i = k;
  return {
    index: i, nom: table[i].nom,
    seuil: table[i].min,
    prochain: i + 1 < table.length ? table[i + 1] : null,
    pc: i + 1 < table.length ? Math.round(100 * (xp - table[i].min) / (table[i + 1].min - table[i].min)) : 100
  };
}

function mStat(id){
  if (!S.methodes[id]) S.methodes[id] = { ok: 0, ko: 0, box: 0, due: 0, dernier: 0, xp: 0 };
  if (S.methodes[id].xp === undefined) S.methodes[id].xp = 0;
  return S.methodes[id];
}
function enregistrer(mid, juste, part){
  const st = mStat(mid);
  const avait = st.ko > 0 && st.ok === 0;      /* notion ratée et jamais réussie jusqu'ici */
  marquerJour();
  let gain = 0;
  if (juste){
    st.ok++;
    st.box = Math.min(st.box + 1, BOXES.length - 1);
    S.serie = (S.serie || 0) + 1;
    gain = Math.round((POINTS[METHODE[mid].niveau] || 10) * (part === undefined ? 1 : Math.max(0, Math.min(1, part))));
    if (S.serie >= 3) gain += 5;
    if (S.serie >= 6) gain += 10;
    st.xp += gain;
    S.xpJour = (S.xpJour || 0) + gain;
    if (S.serie > (S.record || 0)) S.record = S.serie;
  } else {
    st.ko++; st.box = 0; S.serie = 0;
  }
  st.dernier = Date.now();
  st.due = Date.now() + BOXES[st.box] * JOUR;
  sauver();
  return { gain: gain, revanche: juste && avait };
}
function xpChap(id){
  let t = 0;
  (CHAP[id].gens || []).forEach(g => { const m = S.methodes[g.id]; if (m) t += (m.xp || 0); });
  return t;
}
function xpTotal(){
  let t = 0;
  for (const mid in S.methodes) t += (S.methodes[mid].xp || 0);
  return t;
}
function aRevoir(){
  const now = Date.now();
  const out = [];
  for (const mid in S.methodes){
    const st = S.methodes[mid];
    const meta = METHODE[mid];
    if (!meta) continue;
    if (st.ko > 0 && st.due <= now) out.push({ mid, st, meta });
  }
  return out.sort((a, b) => a.st.due - b.st.due);
}
function statutChap(id){ return S.statuts[id] || 'neuf'; }
function scoreChap(id){
  const ch = CHAP[id];
  let ok = 0, tot = 0;
  (ch.gens || []).forEach(g => { const st = S.methodes[g.id]; if (st){ ok += st.ok; tot += st.ok + st.ko; } });
  return { ok, tot, pc: tot ? Math.round(100 * ok / tot) : null };
}
function scoreGlobal(){
  let ok = 0, tot = 0;
  for (const mid in S.methodes){ ok += S.methodes[mid].ok; tot += S.methodes[mid].ok + S.methodes[mid].ko; }
  return { ok, tot, pc: tot ? Math.round(100 * ok / tot) : null };
}

/* ---------- persistance : db si disponible, sinon navigateur ---------- */
const CLE = 'cahier-spe-maths-1re';
let docRef = null, tSave = null, chargement = true;

function localLoad(){
  try {
    const raw = localStorage.getItem(CLE);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}
function localSave(){
  try { localStorage.setItem(CLE, JSON.stringify(S)); } catch (e) {}
}
function sauver(){
  S.maj = Date.now();
  localSave();
  if (!docRef) return;
  clearTimeout(tSave);
  tSave = setTimeout(() => {
    docRef.set(JSON.parse(JSON.stringify(S))).catch(() => {});
  }, 700);
}
function adopter(d){
  if (!d || typeof d !== 'object') return;
  S = Object.assign(VIDE(), d);
  S.statuts = S.statuts || {};
  S.methodes = S.methodes || {};
  S.serie = S.serie || 0;
  S.record = S.record || 0;
  S.badges = S.badges || [];
  S.notes = S.notes || [];
  S.jour = S.jour || '';
  S.joursSuite = S.joursSuite || 0;
  S.recordJours = S.recordJours || 0;
  S.xpJour = S.xpJour || 0;
  if (S.son === undefined) S.son = true;
  if (!S.matiere || !MAT[S.matiere] || !MAT[S.matiere].pret) S.matiere = 'maths';
  if (!S.mesMatieres || !S.mesMatieres.length) S.mesMatieres = ['maths', 'francais', 'histgeo', 'sciences', 'anglais'];
  if (S.mesMatieres.indexOf('maths') < 0) S.mesMatieres.push('maths');
  for (const mid in S.methodes) if (S.methodes[mid].xp === undefined) S.methodes[mid].xp = 0;
}
async function initStore(){
  const loc = localLoad();
  if (loc) adopter(loc);
  try {
    const db = await (window.claude && window.claude.use ? window.claude.use('db') : null);
    if (db){
      docRef = db.doc('progression/eleve');
      const snap = await docRef.get();
      const dist = snap && snap.exists ? snap.data() : null;
      if (dist && (!loc || (dist.maj || 0) >= (loc.maj || 0))) adopter(dist);
      else if (loc) sauver();
    }
  } catch (e) { /* pas de synchro : on reste en local */ }
  chargement = false;
  if (typeof rendre === 'function') rendre();
}
