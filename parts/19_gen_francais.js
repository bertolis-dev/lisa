/* =========================================================================
   Générateurs d'exercices de français.
   Même principe qu'en maths : la réponse est calculée en même temps que
   l'énoncé, donc la correction est toujours juste.
   Les exercices de rédaction (introduction, paragraphe, explication
   linéaire) passent par le barème auto-évalué, comme les démonstrations.
   ========================================================================= */

/* petit utilitaire : n distracteurs pris dans une liste, différents du bon */
function autres(liste, bon, n){
  const vus = {}, uniq = [];
  liste.forEach(x => { if (x !== bon && !vus[x]){ vus[x] = 1; uniq.push(x); } });
  return R.shuffle(uniq).slice(0, n);
}
/* fabrique un QCM à 4 options à partir d'un bon et d'un vivier */
function qcm4(bon, vivier){
  const opts = R.shuffle([bon].concat(autres(vivier, bon, 3)));
  return { options: opts, bon: opts.indexOf(bon) };
}
/* encadré de citation */
function cit(t, src){
  return '<div class="cit">« ' + t + ' »' + (src ? '<span class="cit-src">' + src + '</span>' : '') + '</div>';
}

/* =================== FIGURES DE STYLE =================== */

const NOMS_FIGURES = ['Comparaison', 'Métaphore', 'Personnification', 'Allégorie',
  'Antithèse', 'Oxymore', 'Chiasme', 'Anaphore', 'Gradation', 'Hyperbole',
  'Litote', 'Euphémisme', 'Métonymie', 'Périphrase'];

const BANQUE_FIGURES = [
  { t: 'Le vent hurlait dans les branches nues', f: 'Personnification',
    e: 'Le vent reçoit un cri humain : il devient un être vivant et menaçant.' },
  { t: 'Cette femme est une rose', f: 'Métaphore',
    e: 'Aucun outil de comparaison : la femme est directement identifiée à la fleur.' },
  { t: 'Il est fort comme un lion', f: 'Comparaison',
    e: 'L’outil « comme » relie explicitement les deux éléments.' },
  { t: 'Une obscure clarté tombe des étoiles', f: 'Oxymore', s: 'Corneille, Le Cid',
    e: 'Deux mots contradictoires sont collés dans le même groupe : l’ombre et la lumière.' },
  { t: 'Va, je ne te hais point', f: 'Litote', s: 'Corneille, Le Cid',
    e: 'Chimène dit moins pour faire entendre beaucoup plus : elle aime encore Rodrigue.' },
  { t: 'Il nous a quittés la nuit dernière', f: 'Euphémisme',
    e: 'La mort est adoucie par une formule indirecte.' },
  { t: 'Je meurs, je suis mort, je suis enterré', f: 'Gradation',
    e: 'Les termes sont rangés dans une progression croissante d’intensité.' },
  { t: 'Il faut manger pour vivre et non vivre pour manger', f: 'Chiasme', s: 'Molière, L’Avare',
    e: 'Les deux verbes se croisent en miroir, selon le schéma AB / BA.' },
  { t: 'Je l’ai attendu mille ans devant cette porte', f: 'Hyperbole',
    e: 'L’exagération manifeste traduit l’impatience.' },
  { t: 'Un soleil noir de la mélancolie', f: 'Antithèse', s: 'Nerval, El Desdichado',
    e: 'La lumière et l’obscurité sont rapprochées pour dire la contradiction intérieure.' },
  { t: 'Paris s’éveille et se met à courir', f: 'Personnification',
    e: 'La ville agit comme une personne qui se lève.' },
  { t: 'Boire un verre entre amis', f: 'Métonymie',
    e: 'On nomme le contenant (le verre) pour désigner le contenu (la boisson).' },
  { t: 'Il a lu tout un Zola cet été', f: 'Métonymie',
    e: 'On nomme l’auteur pour désigner son œuvre.' },
  { t: 'La capitale de la France s’est réveillée sous la neige', f: 'Périphrase',
    e: 'Un groupe de mots remplace le nom propre « Paris ».' },
  { t: 'La Mort s’avançait, sa faux à la main, et frappait sans choisir', f: 'Allégorie',
    e: 'Une idée abstraite est incarnée en personnage, avec ses attributs.' },
  { t: 'Mon enfant, ma sœur, songe à la douceur', f: 'Comparaison', s: 'Baudelaire, L’Invitation au voyage',
    e: 'Les appositions rapprochent l’aimée de figures familières ; l’assimilation se fait sans outil explicite, mais le rapprochement est bien une mise en parallèle.' },
  { t: 'Rome, l’unique objet de mon ressentiment', f: 'Périphrase', s: 'Corneille, Horace',
    e: 'La ville est désignée par ce qu’elle représente pour Camille.' },
  { t: 'Le vent glacé mordait les visages', f: 'Métaphore',
    e: 'Le verbe « mordre » assimile le vent à un animal, sans outil de comparaison.' },
  { t: 'Partir, partir enfin, partir pour toujours', f: 'Anaphore',
    e: 'Le même mot ouvre chaque groupe : la répétition martèle le désir de départ.' },
  { t: 'Ses yeux sont plus clairs que l’astre des beaux soirs', f: 'Comparaison', s: 'Leconte de Lisle',
    e: 'Le comparatif « plus… que » est l’outil de comparaison.' }
];
/* la 16e entrée est ambiguë : on la retire du tirage */
BANQUE_FIGURES.splice(15, 1);

G('fr-figures', 'fg-identifier', 'Identifier la figure de style', 'app', function(){
  const c = R.pick(BANQUE_FIGURES);
  return {
    enonce: '<p>Quelle figure de style reconnais-tu dans cet extrait ?</p>' + cit(c.t, c.s || ''),
    qcm: qcm4(c.f, NOMS_FIGURES),
    etapes: [
      'Il s’agit d’une <b>' + c.f.toLowerCase() + '</b>.',
      c.e,
      'Rappel : on ne gagne des points qu’en disant <b>l’effet produit</b>, jamais en nommant seulement le procédé.'
    ]
  };
});

const DEFS_FIGURES = [
  ['Comparaison', 'rapprocher deux éléments à l’aide d’un outil (comme, tel, semblable à, plus… que)'],
  ['Métaphore', 'rapprocher deux éléments sans aucun outil de comparaison'],
  ['Personnification', 'attribuer à une chose ou à un animal des traits humains'],
  ['Allégorie', 'incarner une idée abstraite en personnage, avec ses attributs'],
  ['Antithèse', 'rapprocher dans une même phrase deux termes de sens opposé'],
  ['Oxymore', 'réunir dans un même groupe de mots deux termes contradictoires'],
  ['Chiasme', 'construire un croisement en miroir selon le schéma AB / BA'],
  ['Anaphore', 'répéter un même mot au début de plusieurs phrases ou vers'],
  ['Gradation', 'ranger des termes selon une progression d’intensité'],
  ['Hyperbole', 'exagérer volontairement pour frapper l’esprit'],
  ['Litote', 'dire moins pour faire entendre davantage'],
  ['Euphémisme', 'atténuer une réalité pénible par une formule adoucie'],
  ['Métonymie', 'désigner une chose par un élément qui lui est lié (le contenant, l’auteur, la matière)'],
  ['Périphrase', 'remplacer un mot par un groupe de mots qui le décrit']
];

G('fr-figures', 'fg-definition', 'Du sens vers le nom', 'app', function(){
  const c = R.pick(DEFS_FIGURES);
  return {
    enonce: '<p>Comment s’appelle la figure de style qui consiste à <b>' + c[1] + '</b> ?</p>',
    qcm: qcm4(c[0], NOMS_FIGURES),
    etapes: ['C’est <b>' + c[0].toLowerCase() + '</b> : ' + c[1] + '.']
  };
});

const CAT_FIGURE = {
  'Comparaison': 'Analogie', 'Métaphore': 'Analogie', 'Personnification': 'Analogie', 'Allégorie': 'Analogie',
  'Antithèse': 'Opposition', 'Oxymore': 'Opposition', 'Chiasme': 'Opposition',
  'Anaphore': 'Insistance', 'Gradation': 'Insistance', 'Hyperbole': 'Insistance',
  'Litote': 'Atténuation', 'Euphémisme': 'Atténuation',
  'Métonymie': 'Substitution', 'Périphrase': 'Substitution'
};
const NOMS_CAT = ['Analogie', 'Opposition', 'Insistance', 'Atténuation', 'Substitution'];

G('fr-figures', 'fg-effet', 'Figure, catégorie et effet', 'ent', function(){
  const c = R.pick(BANQUE_FIGURES);
  const figs = R.shuffle([c.f].concat(autres(NOMS_FIGURES, c.f, 3)));
  const cat = CAT_FIGURE[c.f];
  return {
    enonce: '<p>Lis l’extrait, puis donne la figure employée et la famille à laquelle elle appartient.</p>' +
            cit(c.t, c.s || ''),
    champs: [
      { type: 'choix', label: 'Figure employée', options: figs, bon: figs.indexOf(c.f) },
      { type: 'choix', label: 'Famille de figures', options: NOMS_CAT.slice(), bon: NOMS_CAT.indexOf(cat) }
    ],
    etapes: [
      'La figure est une <b>' + c.f.toLowerCase() + '</b>. Famille : <b>' + cat.toLowerCase() + '</b>.',
      c.e,
      'Dans une copie, la phrase attendue est toujours : <i>procédé + citation + effet</i>. Le nom seul ne rapporte rien.'
    ]
  };
});

/* =================== VERSIFICATION =================== */

const VERS = [
  { t: 'Une nuit claire, un vent glacé. La neige est rouge', n: 12, s: 'Leconte de Lisle' },
  { t: 'Mille braves sont là qui dorment sans tombeaux', n: 12, s: 'Leconte de Lisle' },
  { t: 'La lune froide verse au loin sa pâle flamme', n: 12, s: 'Leconte de Lisle' },
  { t: 'Demain, dès l’aube, à l’heure où blanchit la campagne', n: 12, s: 'Hugo' },
  { t: 'Je fais souvent ce rêve étrange et pénétrant', n: 12, s: 'Verlaine' },
  { t: 'Souvent, pour s’amuser, les hommes d’équipage', n: 12, s: 'Baudelaire' },
  { t: 'Les chants désespérés sont les chants les plus beaux', n: 12, s: 'Musset' },
  { t: 'Ce toit tranquille, où marchent des colombes', n: 10, s: 'Valéry' },
  { t: 'Sous le pont Mirabeau coule la Seine', n: 10, s: 'Apollinaire' },
  { t: 'Maître Corbeau, sur un arbre perché', n: 10, s: 'La Fontaine' },
  { t: 'Maître Renard, par l’odeur alléché', n: 10, s: 'La Fontaine' },
  { t: 'Tenait en son bec un fromage', n: 8, s: 'La Fontaine' },
  { t: 'Lui tint à peu près ce langage', n: 8, s: 'La Fontaine' },
  { t: 'Mignonne, allons voir si la rose', n: 8, s: 'Ronsard' },
  { t: 'Je suis venu, calme orphelin', n: 8, s: 'Verlaine' },
  { t: 'Vienne la nuit sonne l’heure', n: 7, s: 'Apollinaire' },
  { t: 'Les jours s’en vont je demeure', n: 7, s: 'Apollinaire' },
  { t: 'Il pleure dans mon cœur', n: 6, s: 'Verlaine' }
];
const NOM_METRE = { 12: 'Alexandrin', 10: 'Décasyllabe', 8: 'Octosyllabe', 7: 'Heptasyllabe', 6: 'Hexasyllabe' };

G('fr-versification', 'vs-metre', 'Compter les syllabes d’un vers', 'app', function(){
  const v = R.pick(VERS);
  const noms = ['Alexandrin', 'Décasyllabe', 'Octosyllabe', 'Heptasyllabe', 'Hexasyllabe'];
  const bon = NOM_METRE[v.n];
  return {
    enonce: '<p>Compte les syllabes de ce vers, puis donne le nom du mètre.</p>' + cit(v.t, v.s) +
            '<p class="tiny">Rappel : le « e » muet compte devant une consonne, mais pas devant une voyelle ni en fin de vers.</p>',
    champs: [
      { type: 'num', label: 'Nombre de syllabes', bon: v.n, tol: 0 },
      { type: 'choix', label: 'Nom du mètre', options: noms, bon: noms.indexOf(bon) }
    ],
    etapes: [
      'Ce vers compte <b>' + v.n + ' syllabes</b> : c’est un <b>' + bon.toLowerCase() + '</b>.',
      'Méthode : lire à voix basse en marquant chaque syllabe sur les doigts, et surveiller chaque « e » final.',
      'Piège habituel : un « e » suivi d’une voyelle s’élide et ne compte pas.'
    ]
  };
});

const QUATRAINS = [
  { v: ['Ô rage ! ô désespoir ! ô vieillesse ennemie !', 'N’ai-je donc tant vécu que pour cette infamie ?',
        'Et ne suis-je blanchi dans les travaux guerriers', 'Que pour voir en un jour flétrir tant de lauriers ?'],
    s: 'Corneille, Le Cid', mvt: 'Classicisme', d: 'Plates', sch: 'AABB' },
  { v: ['Enfin Malherbe vint, et, le premier en France,', 'Fit sentir dans les vers une juste cadence,',
        'D’un mot mis en sa place enseigna le pouvoir,', 'Et réduisit la muse aux règles du devoir.'],
    s: 'Boileau, Art poétique', mvt: 'Classicisme', d: 'Plates', sch: 'AABB' },
  { v: ['Une nuit claire, un vent glacé. La neige est rouge.', 'Mille braves sont là qui dorment sans tombeaux,',
        'L’épée au poing, les yeux hagards. Pas un ne bouge.', 'Au-dessus tourne et crie un vol de noirs corbeaux.'],
    s: 'Leconte de Lisle, Le Cœur de Hialmar', mvt: 'Parnasse', d: 'Croisées', sch: 'ABAB' },
  { v: ['Souvent, pour s’amuser, les hommes d’équipage', 'Prennent des albatros, vastes oiseaux des mers,',
        'Qui suivent, indolents compagnons de voyage,', 'Le navire glissant sur les gouffres amers.'],
    s: 'Baudelaire, L’Albatros', mvt: 'Symbolisme', d: 'Croisées', sch: 'ABAB' },
  { v: ['C’est un trou de verdure où chante une rivière', 'Accrochant follement aux herbes des haillons',
        'D’argent ; où le soleil, de la montagne fière,', 'Luit : c’est un petit val qui mousse de rayons.'],
    s: 'Rimbaud, Le Dormeur du val', mvt: 'Symbolisme', d: 'Croisées', sch: 'ABAB' },
  { v: ['Heureux qui, comme Ulysse, a fait un beau voyage,', 'Ou comme celui-là qui conquit la toison,',
        'Et puis est retourné, plein d’usage et raison,', 'Vivre entre ses parents le reste de son âge !'],
    s: 'Du Bellay, Les Regrets', mvt: 'Humanisme', d: 'Embrassées', sch: 'ABBA' },
  { v: ['Je fais souvent ce rêve étrange et pénétrant', 'D’une femme inconnue, et que j’aime, et qui m’aime,',
        'Et qui n’est, chaque fois, ni tout à fait la même', 'Ni tout à fait une autre, et m’aime et me comprend.'],
    s: 'Verlaine, Mon rêve familier', mvt: 'Symbolisme', d: 'Embrassées', sch: 'ABBA' }
];

G('fr-versification', 'vs-disposition', 'Disposition des rimes', 'app', function(){
  const q = R.pick(QUATRAINS);
  const noms = ['Plates', 'Croisées', 'Embrassées'];
  return {
    enonce: '<p>Quelle est la disposition des rimes dans ce quatrain ?</p>' +
            '<div class="cit">' + q.v.join('<br>') + '<span class="cit-src">' + q.s + '</span></div>',
    qcm: { options: noms.slice(), bon: noms.indexOf(q.d) },
    etapes: [
      'Les rimes suivent le schéma <b>' + q.sch + '</b> : ce sont des rimes <b>' + q.d.toLowerCase() + '</b>.',
      'Méthode : noter la lettre de chaque son final, en commençant par A, et relire la suite obtenue.',
      'AABB plates · ABAB croisées · ABBA embrassées.'
    ]
  };
});

const RIMES = [
  { a: 'ami', b: 'joli', son: '[i]', n: 1, q: 'Pauvre' },
  { a: 'vu', b: 'perdu', son: '[y]', n: 1, q: 'Pauvre' },
  { a: 'chanté', b: 'oublié', son: '[e]', n: 1, q: 'Pauvre' },
  { a: 'content', b: 'temps', son: '[ɑ̃]', n: 1, q: 'Pauvre' },
  { a: 'amour', b: 'toujours', son: '[uʀ]', n: 2, q: 'Suffisante' },
  { a: 'matin', b: 'destin', son: '[tɛ̃]', n: 2, q: 'Suffisante' },
  { a: 'sommeil', b: 'pareil', son: '[ɛj]', n: 2, q: 'Suffisante' },
  { a: 'âge', b: 'voyage', son: '[aʒ]', n: 2, q: 'Suffisante' },
  { a: 'image', b: 'hommage', son: '[maʒ]', n: 3, q: 'Riche' },
  { a: 'victoire', b: 'histoire', son: '[twaʀ]', n: 3, q: 'Riche' },
  { a: 'tendresse', b: 'caresse', son: '[ʀɛs]', n: 3, q: 'Riche' },
  { a: 'sévère', b: 'persévère', son: '[sevɛʀ]', n: 4, q: 'Riche' }
];

G('fr-versification', 'vs-qualite', 'Qualité d’une rime', 'ent', function(){
  const r = R.pick(RIMES);
  const noms = ['Pauvre', 'Suffisante', 'Riche'];
  return {
    enonce: '<p>Deux vers riment en <b>' + r.a + '</b> / <b>' + r.b + '</b>.</p>' +
            '<p>Combien de sons ces deux mots ont-ils en commun, et quelle est la qualité de la rime ?</p>',
    champs: [
      { type: 'num', label: 'Sons en commun', bon: r.n, tol: 0 },
      { type: 'choix', label: 'Qualité de la rime', options: noms, bon: noms.indexOf(r.q) }
    ],
    etapes: [
      'Les deux mots ont en commun le son ' + r.son + ', soit <b>' + r.n + ' son' + (r.n > 1 ? 's' : '') + '</b>.',
      '1 son → rime <b>pauvre</b> · 2 sons → rime <b>suffisante</b> · 3 sons ou plus → rime <b>riche</b>.',
      'Ici la rime est donc <b>' + r.q.toLowerCase() + '</b>.',
      'Attention : on compte des <b>sons</b>, pas des lettres.'
    ]
  };
});

const STROPHES = [[2, 'Distique'], [3, 'Tercet'], [4, 'Quatrain'], [5, 'Quintil'],
                  [6, 'Sizain'], [8, 'Huitain'], [10, 'Dizain']];

G('fr-versification', 'vs-strophe', 'Nommer une strophe', 'app', function(){
  const s = R.pick(STROPHES);
  const noms = STROPHES.map(x => x[1]);
  return {
    enonce: '<p>Comment appelle-t-on une strophe de <b>' + s[0] + ' vers</b> ?</p>',
    qcm: qcm4(s[1], noms),
    etapes: [
      'Une strophe de ' + s[0] + ' vers est un <b>' + s[1].toLowerCase() + '</b>.',
      'À retenir aussi : le <b>sonnet</b> est fait de deux quatrains suivis de deux tercets, soit quatorze vers.'
    ]
  };
});

const RYTHME = [
  ['Enjambement', 'la phrase se poursuit au-delà de la fin du vers, sans pause'],
  ['Rejet', 'un élément court est renvoyé au début du vers suivant, ce qui le met en relief'],
  ['Contre-rejet', 'un élément court est placé en fin de vers alors qu’il appartient à la phrase suivante'],
  ['Césure', 'la coupe principale à l’intérieur du vers'],
  ['Hémistiche', 'chacune des deux moitiés de l’alexandrin séparées par la césure'],
  ['Diérèse', 'prononcer en deux syllabes un groupe de voyelles habituellement dit en une seule']
];

G('fr-versification', 'vs-rythme', 'Les effets de rythme', 'ent', function(){
  const r = R.pick(RYTHME);
  const noms = RYTHME.map(x => x[0]);
  return {
    enonce: '<p>Quel terme désigne le fait suivant : <b>' + r[1] + '</b> ?</p>',
    qcm: qcm4(r[0], noms),
    etapes: [
      'Il s’agit de <b>' + r[0].toLowerCase() + '</b>.',
      'Exemple de rejet célèbre, chez Rimbaud : « Il dort dans le soleil, la main sur sa poitrine / <b>Tranquille</b>. » Le mot isolé au vers suivant frappe d’autant plus que la suite annonce la mort du soldat.'
    ]
  };
});

/* =================== GRAMMAIRE =================== */

const SUBORDONNEES = [
  { mot: 'que', p: 'Le livre <u>que je lis</u> est passionnant.', nat: 'Subordonnée relative',
    fon: 'Complément de l’antécédent « livre »',
    e: 'Introduite par le pronom relatif « que », elle complète le nom « livre », son antécédent.' },
  { mot: 'où', p: 'La ville <u>où je suis né</u> a beaucoup changé.', nat: 'Subordonnée relative',
    fon: 'Complément de l’antécédent « ville »',
    e: '« où » est ici un pronom relatif, dont l’antécédent est « ville ».' },
  { mot: 'que', p: 'Je pense <u>qu’il viendra demain</u>.', nat: 'Subordonnée conjonctive complétive',
    fon: 'COD du verbe « pense »',
    e: 'Elle est introduite par la conjonction « que » et complète le verbe. On peut la remplacer par « cela ».' },
  { mot: 'que', p: 'Elle affirme <u>que ce texte est un pastiche</u>.', nat: 'Subordonnée conjonctive complétive',
    fon: 'COD du verbe « affirme »',
    e: 'Test : « elle affirme cela » fonctionne, donc la subordonnée est bien COD.' },
  { mot: 'quand', p: '<u>Quand la nuit tombe</u>, la ville devient silencieuse.', nat: 'Subordonnée conjonctive circonstancielle',
    fon: 'Complément circonstanciel de temps',
    e: 'Introduite par « quand », elle précise le moment de l’action principale.' },
  { mot: 'parce que', p: 'Il se tait <u>parce qu’il a peur</u>.', nat: 'Subordonnée conjonctive circonstancielle',
    fon: 'Complément circonstanciel de cause',
    e: '« parce que » introduit la cause du silence.' },
  { mot: 'bien que', p: '<u>Bien qu’il soit tard</u>, elle continue d’écrire.', nat: 'Subordonnée conjonctive circonstancielle',
    fon: 'Complément circonstanciel de concession',
    e: '« bien que » marque la concession, et se construit avec le subjonctif.' },
  { mot: 'si', p: 'Je me demande <u>s’il viendra</u>.', nat: 'Subordonnée interrogative indirecte',
    fon: 'COD du verbe « me demande »',
    e: 'C’est une question intégrée à une phrase déclarative : pas de point d’interrogation, pas d’inversion.' },
  { mot: 'pourquoi', p: 'Elle ignore <u>pourquoi il est parti</u>.', nat: 'Subordonnée interrogative indirecte',
    fon: 'COD du verbe « ignore »',
    e: 'La question porte sur la cause, et elle est intégrée : interrogative indirecte partielle.' }
];
const NAT_SUB = ['Subordonnée relative', 'Subordonnée conjonctive complétive',
                 'Subordonnée conjonctive circonstancielle', 'Subordonnée interrogative indirecte'];

G('fr-grammaire', 'gr-subordonnee', 'Nature d’une subordonnée', 'app', function(){
  const s = R.pick(SUBORDONNEES);
  return {
    enonce: '<p>Quelle est la nature de la proposition soulignée ?</p>' + cit(s.p),
    qcm: { options: NAT_SUB.slice(), bon: NAT_SUB.indexOf(s.nat) },
    etapes: [
      'C’est une <b>' + s.nat.toLowerCase() + '</b>.',
      s.e,
      'À l’oral, on attend toujours la <b>nature</b> et la <b>fonction</b> : ici ' + s.fon.toLowerCase() + '.'
    ]
  };
});

G('fr-grammaire', 'gr-nature-fonction', 'Nature et fonction', 'ent', function(){
  const s = R.pick(SUBORDONNEES);
  const fons = R.shuffle([s.fon].concat(autres(SUBORDONNEES.map(x => x.fon), s.fon, 3)));
  return {
    enonce: '<p>Analyse la proposition soulignée : donne sa nature, puis sa fonction.</p>' + cit(s.p) +
            '<p class="tiny">C’est exactement le format de la question de grammaire de l’oral, notée sur 2 points.</p>',
    champs: [
      { type: 'choix', label: 'Nature', options: NAT_SUB.slice(), bon: NAT_SUB.indexOf(s.nat) },
      { type: 'choix', label: 'Fonction', options: fons, bon: fons.indexOf(s.fon) }
    ],
    etapes: [
      'Nature : <b>' + s.nat.toLowerCase() + '</b>. ' + s.e,
      'Fonction : <b>' + s.fon.toLowerCase() + '</b>.',
      'Formulation attendue à l’oral : « c’est une ' + s.nat.toLowerCase() + ', introduite par …, et elle est ' + s.fon.toLowerCase() + ' ».'
    ]
  };
});

const NEGATIONS = [
  { p: 'Il ne viendra pas ce soir.', t: 'Négation totale',
    e: '« ne… pas » porte sur toute la phrase : rien n’est sauvé de l’affirmation.' },
  { p: 'Je ne comprends pas cette phrase.', t: 'Négation totale',
    e: '« ne… pas » nie l’ensemble de l’énoncé.' },
  { p: 'Elle ne sort jamais le dimanche.', t: 'Négation partielle',
    e: '« ne… jamais » nie seulement la fréquence, pas l’action elle-même.' },
  { p: 'Il n’y a plus personne dans la salle.', t: 'Négation partielle',
    e: '« ne… plus » et « personne » portent sur le temps et sur les êtres, non sur la phrase entière.' },
  { p: 'Je n’ai rien dit.', t: 'Négation partielle',
    e: '« ne… rien » nie l’objet du verbe.' },
  { p: 'Je n’ai qu’une seule question.', t: 'Restriction',
    e: '« ne… que » n’est pas une négation : c’est une restriction, elle signifie « seulement ». Piège classique à l’oral.' },
  { p: 'Il ne reste que deux minutes.', t: 'Restriction',
    e: '« ne… que » équivaut à « seulement deux minutes ».' },
  { p: 'Cette réponse est impossible à comprendre.', t: 'Négation lexicale',
    e: 'Le sens négatif vient du préfixe « im- », pas d’un outil grammatical : il n’y a pas de « ne ».' },
  { p: 'Elle refuse de répondre.', t: 'Négation lexicale',
    e: 'Le verbe « refuser » porte lui-même le sens négatif.' }
];
const T_NEG = ['Négation totale', 'Négation partielle', 'Restriction', 'Négation lexicale'];

G('fr-grammaire', 'gr-negation', 'L’expression de la négation', 'app', function(){
  const n = R.pick(NEGATIONS);
  return {
    enonce: '<p>Comment analyses-tu la négation dans cette phrase ?</p>' + cit(n.p),
    qcm: { options: T_NEG.slice(), bon: T_NEG.indexOf(n.t) },
    etapes: ['Il s’agit d’une <b>' + n.t.toLowerCase() + '</b>.', n.e]
  };
});

const INTERROGATIONS = [
  { p: 'Viens-tu demain ?', por: 'Totale', con: 'Directe', pro: 'Inversion du sujet',
    e: 'La réponse attendue est oui ou non : l’interrogation est totale. Le point d’interrogation montre qu’elle est directe.' },
  { p: 'Est-ce que tu as terminé ?', por: 'Totale', con: 'Directe', pro: 'Locution « est-ce que »',
    e: 'Réponse par oui ou non, question posée directement, construite avec « est-ce que ».' },
  { p: 'Tu viens ?', por: 'Totale', con: 'Directe', pro: 'Intonation',
    e: 'Aucun marqueur grammatical : seule l’intonation, notée par le point d’interrogation, fait la question.' },
  { p: 'Quand pars-tu ?', por: 'Partielle', con: 'Directe', pro: 'Inversion du sujet',
    e: 'La question porte sur un élément précis, le moment : elle est partielle.' },
  { p: 'Qui a écrit ce poème ?', por: 'Partielle', con: 'Directe', pro: 'Pronom interrogatif sujet',
    e: 'La question porte sur l’auteur : interrogation partielle, sans inversion car le mot interrogatif est sujet.' },
  { p: 'Je me demande s’il viendra.', por: 'Totale', con: 'Indirecte', pro: 'Subordonnée introduite par « si »',
    e: 'Question intégrée à une phrase déclarative : ni point d’interrogation ni inversion.' },
  { p: 'Elle ignore où il est allé.', por: 'Partielle', con: 'Indirecte', pro: 'Subordonnée introduite par « où »',
    e: 'La question porte sur le lieu, et elle est intégrée : interrogative indirecte partielle.' }
];

G('fr-grammaire', 'gr-interrogation', 'L’interrogation', 'ent', function(){
  const q = R.pick(INTERROGATIONS);
  const pros = R.shuffle([q.pro].concat(autres(INTERROGATIONS.map(x => x.pro), q.pro, 3)));
  return {
    enonce: '<p>Analyse l’interrogation contenue dans cette phrase.</p>' + cit(q.p),
    champs: [
      { type: 'choix', label: 'Portée', options: ['Totale', 'Partielle'], bon: q.por === 'Totale' ? 0 : 1 },
      { type: 'choix', label: 'Construction', options: ['Directe', 'Indirecte'], bon: q.con === 'Directe' ? 0 : 1 },
      { type: 'choix', label: 'Procédé', options: pros, bon: pros.indexOf(q.pro) }
    ],
    etapes: [
      'Interrogation <b>' + q.por.toLowerCase() + '</b> et <b>' + q.con.toLowerCase() + '</b>, construite par ' + q.pro.toLowerCase() + '.',
      q.e,
      'Repère rapide : pas de point d’interrogation → interrogation indirecte. Réponse par oui ou non → interrogation totale.'
    ]
  };
});

const LIENS = [
  { p: 'Il pleut, je reste à la maison.', t: 'Juxtaposition', e: 'Les deux propositions sont reliées par une simple virgule.' },
  { p: 'Il pleut ; la rue est déserte.', t: 'Juxtaposition', e: 'Le point-virgule relie sans mot de liaison.' },
  { p: 'Il pleut, donc je reste à la maison.', t: 'Coordination', e: '« donc » est une conjonction de coordination.' },
  { p: 'Elle écrit et il lit.', t: 'Coordination', e: '« et » coordonne deux propositions indépendantes.' },
  { p: 'Comme il pleut, je reste à la maison.', t: 'Subordination', e: '« comme » rend la première proposition dépendante de la seconde.' },
  { p: 'Je sais que tu as raison.', t: 'Subordination', e: '« que » introduit une subordonnée complétive, dépendante du verbe « sais ».' }
];

G('fr-grammaire', 'gr-liaison', 'Juxtaposition, coordination, subordination', 'app', function(){
  const l = R.pick(LIENS);
  const noms = ['Juxtaposition', 'Coordination', 'Subordination'];
  return {
    enonce: '<p>Comment les propositions de cette phrase sont-elles reliées ?</p>' + cit(l.p),
    qcm: { options: noms.slice(), bon: noms.indexOf(l.t) },
    etapes: [
      'Il s’agit d’une <b>' + l.t.toLowerCase() + '</b>.', l.e,
      'Rappel des coordonnants : mais, ou, et, donc, or, ni, car.'
    ]
  };
});

/* =================== REGISTRES, GENRES, MOUVEMENTS =================== */

const REGISTRES = [
  { t: 'Ô temps, suspends ton vol ! et vous, heures propices, suspendez votre cours !', s: 'Lamartine, Le Lac',
    r: 'Lyrique', e: 'Apostrophes, exclamations, expression d’un sentiment intime : c’est le registre lyrique.' },
  { t: 'Je meurs, je suis perdue, et rien ne peut me sauver du destin qui me poursuit.',
    r: 'Tragique', e: 'Une force supérieure écrase le personnage, sans issue possible : registre tragique.' },
  { t: 'L’enfant tendait ses petites mains vides vers la foule qui passait sans le voir.',
    r: 'Pathétique', e: 'La détresse est montrée pour émouvoir et faire pitié : registre pathétique.' },
  { t: 'Mille braves sont là qui dorment sans tombeaux, l’épée au poing, les yeux hagards.', s: 'Leconte de Lisle',
    r: 'Épique', e: 'Pluriels, nombre impressionnant, grandeur du combat : registre épique.' },
  { t: 'Que diable allait-il faire dans cette galère ?', s: 'Molière, Les Fourberies de Scapin',
    r: 'Comique', e: 'La répétition de la réplique et la naïveté du personnage font rire : registre comique.' },
  { t: 'Ils sont si parfaitement organisés qu’ils ont même prévu de nous faire payer l’attente.',
    r: 'Ironique', e: 'L’éloge apparent dit le contraire de ce qui est pensé : registre ironique.' },
  { t: 'Ces gens-là, qui se disent nos maîtres, ne sont que des tyrans engraissés de notre servitude.',
    r: 'Polémique', e: 'Attaque frontale, lexique dépréciatif, adversaire désigné : registre polémique.' },
  { t: 'On distingue trois formes de liaison entre les propositions : la juxtaposition, la coordination et la subordination.',
    r: 'Didactique', e: 'Le texte instruit et classe : registre didactique.' }
];
const NOMS_REG = ['Lyrique', 'Tragique', 'Pathétique', 'Épique', 'Comique', 'Ironique', 'Polémique', 'Didactique'];

G('fr-registres', 'rg-registre', 'Identifier le registre', 'app', function(){
  const r = R.pick(REGISTRES);
  return {
    enonce: '<p>Quel est le registre dominant de cet extrait ?</p>' + cit(r.t, r.s || ''),
    qcm: qcm4(r.r, NOMS_REG),
    etapes: ['Registre <b>' + r.r.toLowerCase() + '</b>.', r.e,
             'Astuce : le registre se repère à l’<b>effet cherché sur le lecteur</b>, pas au sujet du texte.']
  };
});

const AUTEURS = [
  { a: 'Rabelais', m: 'Humanisme', s: 16 },
  { a: 'Montaigne', m: 'Humanisme', s: 16 },
  { a: 'La Boétie', m: 'Humanisme', s: 16 },
  { a: 'Corneille', m: 'Classicisme', s: 17 },
  { a: 'Molière', m: 'Classicisme', s: 17 },
  { a: 'Racine', m: 'Classicisme', s: 17 },
  { a: 'La Fontaine', m: 'Classicisme', s: 17 },
  { a: 'Fontenelle', m: 'Lumières', s: 17 },
  { a: 'Voltaire', m: 'Lumières', s: 18 },
  { a: 'Diderot', m: 'Lumières', s: 18 },
  { a: 'Rousseau', m: 'Lumières', s: 18 },
  { a: 'Madame de Graffigny', m: 'Lumières', s: 18 },
  { a: 'Hugo', m: 'Romantisme', s: 19 },
  { a: 'Musset', m: 'Romantisme', s: 19 },
  { a: 'Lamartine', m: 'Romantisme', s: 19 },
  { a: 'Balzac', m: 'Réalisme', s: 19 },
  { a: 'Flaubert', m: 'Réalisme', s: 19 },
  { a: 'Maupassant', m: 'Réalisme', s: 19 },
  { a: 'Zola', m: 'Naturalisme', s: 19 },
  { a: 'Leconte de Lisle', m: 'Parnasse', s: 19 },
  { a: 'Verlaine', m: 'Symbolisme', s: 19 },
  { a: 'Rimbaud', m: 'Symbolisme', s: 19 },
  { a: 'Mallarmé', m: 'Symbolisme', s: 19 },
  { a: 'Breton', m: 'Surréalisme', s: 20 },
  { a: 'Éluard', m: 'Surréalisme', s: 20 },
  { a: 'Sarraute', m: 'Nouveau Roman', s: 20 },
  { a: 'Ionesco', m: 'Théâtre de l’absurde', s: 20 },
  { a: 'Beckett', m: 'Théâtre de l’absurde', s: 20 }
];
const NOMS_MVT = ['Humanisme', 'Baroque', 'Classicisme', 'Lumières', 'Romantisme', 'Réalisme',
                  'Naturalisme', 'Parnasse', 'Symbolisme', 'Surréalisme', 'Nouveau Roman', 'Théâtre de l’absurde'];
const SIECLES = [['16', 'XVIe siècle'], ['17', 'XVIIe siècle'], ['18', 'XVIIIe siècle'],
                 ['19', 'XIXe siècle'], ['20', 'XXe siècle']];

G('fr-registres', 'rg-mouvement', 'Auteur, mouvement et siècle', 'app', function(){
  const a = R.pick(AUTEURS);
  const noms = SIECLES.map(x => x[1]);
  const bonS = SIECLES.find(x => +x[0] === a.s)[1];
  const mvts = R.shuffle([a.m].concat(autres(NOMS_MVT, a.m, 3)));
  return {
    enonce: '<p>À quel mouvement littéraire rattache-t-on <b>' + a.a + '</b>, et à quel siècle a-t-il écrit ?</p>',
    champs: [
      { type: 'choix', label: 'Mouvement', options: mvts, bon: mvts.indexOf(a.m) },
      { type: 'choix', label: 'Siècle', options: noms, bon: noms.indexOf(bonS) }
    ],
    etapes: [
      a.a + ' appartient au <b>' + a.m.toLowerCase() + '</b>, au <b>' + bonS + '</b>.',
      'Fontenelle est un cas intéressant : il écrit à la fin du XVIIe siècle, mais il annonce déjà l’esprit des Lumières.',
      'Un mouvement cité sans être montré dans le texte ne rapporte aucun point : il faut en repérer les traits dans l’extrait.'
    ]
  };
});

const GENRES = [
  ['Roman épistolaire', 'un récit entièrement composé de lettres échangées'],
  ['Roman d’apprentissage', 'un récit qui suit la formation d’un jeune héros au contact du monde'],
  ['Autobiographie', 'un récit où l’auteur, le narrateur et le personnage sont la même personne'],
  ['Apologue', 'un court récit plaisant porteur d’une leçon'],
  ['Comédie', 'une pièce qui fait rire et se termine bien, souvent par un mariage'],
  ['Tragédie', 'une pièce où un héros de haut rang est écrasé par une fatalité'],
  ['Drame romantique', 'une pièce du XIXe siècle qui mêle le comique et le tragique en refusant les règles classiques'],
  ['Sonnet', 'un poème de quatorze vers, deux quatrains puis deux tercets'],
  ['Essai', 'un texte où un auteur expose librement sa réflexion personnelle']
];

G('fr-registres', 'rg-genre', 'Genres et formes', 'app', function(){
  const g = R.pick(GENRES);
  const noms = GENRES.map(x => x[0]);
  return {
    enonce: '<p>Quel genre ou quelle forme désigne-t-on ainsi : <b>' + g[1] + '</b> ?</p>',
    qcm: qcm4(g[0], noms),
    etapes: ['C’est <b>' + g[0].toLowerCase() + '</b>.',
             'Les Lettres d’une Péruvienne de Madame de Graffigny, au programme cette année, sont un roman épistolaire.']
  };
});

/* =================== LE PROGRAMME 2026-2027 =================== */

const OEUVRES = [
  { o: 'Le Chevalier de la charrette', a: 'Chrétien de Troyes', p: 'le roman et l’invention de l’amour',
    oe: 'Le roman et le récit du Moyen Âge au XXIe siècle', d: 'vers 1180', chap: 'fr-roman' },
  { o: 'Pot-Bouille', a: 'Émile Zola', p: 'dévoiler les rouages de la société',
    oe: 'Le roman et le récit du Moyen Âge au XXIe siècle', d: '1882', chap: 'fr-roman' },
  { o: 'Pluie et vent sur Télumée Miracle', a: 'Simone Schwarz-Bart', p: 'tisser les mémoires, habiter le monde',
    oe: 'Le roman et le récit du Moyen Âge au XXIe siècle', d: '1972', chap: 'fr-roman' },
  { o: 'Discours de la servitude volontaire', a: 'Étienne de La Boétie', p: '« Défendre » et « entretenir » la liberté',
    oe: 'La littérature d’idées du XVIe au XVIIIe siècle', d: 'XVIe siècle', chap: 'fr-idees' },
  { o: 'Entretiens sur la pluralité des mondes', a: 'Fontenelle', p: 'le goût de la science',
    oe: 'La littérature d’idées du XVIe au XVIIIe siècle', d: '1686', chap: 'fr-idees' },
  { o: 'Lettres d’une Péruvienne', a: 'Françoise de Graffigny', p: '« un nouvel univers s’est offert à mes yeux »',
    oe: 'La littérature d’idées du XVIe au XVIIIe siècle', d: '1747', chap: 'fr-idees' },
  { o: 'Le Menteur', a: 'Pierre Corneille', p: 'mensonge et comédie',
    oe: 'Le théâtre du XVIIe au XXIe siècle', d: '1644', chap: 'fr-theatre' },
  { o: 'On ne badine pas avec l’amour', a: 'Alfred de Musset', p: 'les jeux du cœur et de la parole',
    oe: 'Le théâtre du XVIIe au XXIe siècle', d: '1834', chap: 'fr-theatre' },
  { o: 'Pour un oui ou pour un non', a: 'Nathalie Sarraute', p: 'théâtre et dispute',
    oe: 'Le théâtre du XVIIe au XXIe siècle', d: '1982', chap: 'fr-theatre' },
  { o: 'Cahier de Douai', a: 'Arthur Rimbaud', p: 'émancipations créatrices',
    oe: 'La poésie du XIXe au XXIe siècle', d: '1870', chap: 'fr-poesie' },
  { o: 'La rage de l’expression', a: 'Francis Ponge', p: 'dans l’atelier du poète',
    oe: 'La poésie du XIXe au XXIe siècle', d: '1952', chap: 'fr-poesie' },
  { o: 'Mes forêts', a: 'Hélène Dorion', p: 'la poésie, la nature, l’intime',
    oe: 'La poésie du XIXe au XXIe siècle', d: '2021', chap: 'fr-poesie' }
];
const NOMS_OE = ['Le roman et le récit du Moyen Âge au XXIe siècle',
                 'La littérature d’idées du XVIe au XVIIIe siècle',
                 'Le théâtre du XVIIe au XXIe siècle',
                 'La poésie du XIXe au XXIe siècle'];

['fr-roman', 'fr-idees', 'fr-theatre', 'fr-poesie'].forEach(function(ch){
  G(ch, ch + '-auteur', 'Œuvre et auteur', 'app', function(){
    const w = R.pick(OEUVRES.filter(x => x.chap === ch));
    return {
      enonce: '<p>Qui a écrit <b>' + w.o + '</b> ?</p>',
      qcm: qcm4(w.a, OEUVRES.map(x => x.a)),
      etapes: [w.o + ' a été écrit par <b>' + w.a + '</b> (' + w.d + ').',
               'Parcours associé : <i>' + w.p + '</i>.']
    };
  });
  G(ch, ch + '-parcours', 'Œuvre et parcours associé', 'ent', function(){
    const w = R.pick(OEUVRES.filter(x => x.chap === ch));
    return {
      enonce: '<p>Quel parcours est associé à <b>' + w.o + '</b>, de ' + w.a + ' ?</p>' +
              '<p class="tiny">Le parcours doit apparaître explicitement dans la dissertation : c’est un attendu du sujet.</p>',
      qcm: qcm4(w.p, OEUVRES.map(x => x.p)),
      etapes: ['Le parcours associé est : <b>' + w.p + '</b>.',
               'Objet d’étude : ' + w.oe + '.']
    };
  });
});

G('fr-registres', 'oe-objet', 'Situer une œuvre du programme', 'app', function(){
  const w = R.pick(OEUVRES);
  return {
    enonce: '<p>À quel objet d’étude appartient <b>' + w.o + '</b>, de ' + w.a + ' (' + w.d + ') ?</p>',
    qcm: { options: NOMS_OE.slice(), bon: NOMS_OE.indexOf(w.oe) },
    etapes: ['Cette œuvre relève de l’objet d’étude <b>' + w.oe + '</b>.',
             'Le programme 2026-2027 propose trois œuvres par objet d’étude ; le professeur en choisit une.']
  };
});

const EPREUVE_QCM = [
  { q: 'Quelle est la durée de l’épreuve écrite de français ?', b: '4 heures', v: ['2 heures', '3 heures', '4 heures', '5 heures'] },
  { q: 'Quel est le coefficient de l’épreuve écrite ?', b: '5', v: ['2', '3', '5', '8'] },
  { q: 'Sur combien de points est notée l’explication linéaire à l’oral ?', b: '8 points', v: ['4 points', '6 points', '8 points', '10 points'] },
  { q: 'Sur combien de points est notée la question de grammaire à l’oral ?', b: '2 points', v: ['1 point', '2 points', '4 points', '5 points'] },
  { q: 'Sur combien de points est noté l’entretien à l’oral ?', b: '8 points', v: ['4 points', '6 points', '8 points', '12 points'] },
  { q: 'Combien de temps dure la préparation de l’oral ?', b: '30 minutes', v: ['10 minutes', '20 minutes', '30 minutes', '45 minutes'] },
  { q: 'Combien de sujets de dissertation sont proposés à l’écrit ?', b: 'Trois, un par œuvre du programme', v: ['Un seul', 'Deux', 'Trois, un par œuvre du programme', 'Quatre'] },
  { q: 'Le dictionnaire est-il autorisé à l’écrit ?', b: 'Non, ni dictionnaire ni calculatrice', v: ['Oui, un dictionnaire de langue', 'Oui, pour les candidats concernés', 'Non, ni dictionnaire ni calculatrice', 'Seulement pour le commentaire'] },
  { q: 'Le texte du commentaire est-il tiré d’une œuvre au programme ?', b: 'Non, c’est un texte hors programme', v: ['Oui, toujours', 'Non, c’est un texte hors programme', 'Au choix du candidat', 'Seulement en voie technologique'] }
];

G('fr-commentaire', 'fr-epreuve-regles', 'Les règles de l’épreuve', 'app', function(){
  const e = R.pick(EPREUVE_QCM);
  const opts = R.shuffle(e.v.slice());
  return {
    enonce: '<p>' + e.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(e.b) },
    etapes: ['Réponse : <b>' + e.b + '</b>.',
             'À l’écrit : 4 heures, coefficient 5, commentaire ou dissertation, chacun sur 20 points.',
             'À l’oral : 30 minutes de préparation, puis lecture expressive sur 2 points, explication linéaire sur 8, question de grammaire sur 2 et entretien sur 8.']
  };
});

/* =================== EXERCICES DE RÉDACTION (barème auto-évalué) =================== */

D('fr-commentaire', 'fr-intro-commentaire', 'Rédiger une introduction de commentaire', function(){
  return {
    enonce: '<p>Voici le début d’un poème donné au baccalauréat.</p>' +
      '<div class="cit">Une nuit claire, un vent glacé. La neige est rouge.<br>' +
      'Mille braves sont là qui dorment sans tombeaux,<br>' +
      'L’épée au poing, les yeux hagards. Pas un ne bouge.<br>' +
      'Au-dessus tourne et crie un vol de noirs corbeaux.' +
      '<span class="cit-src">Leconte de Lisle, Poèmes barbares, « Le Cœur de Hialmar », 1862</span></div>' +
      '<p><b>Rédige entièrement l’introduction</b> du commentaire de ce texte, sur ton cahier.</p>',
    aide: 'Quatre étapes obligatoires : amorce · présentation du texte · problématique · annonce du plan. ' +
          'Une introduction réussie tient en huit à douze lignes.',
    bareme: [
      { pts: 1, d: '<b>Amorce</b> : une phrase de contexte, sans jamais commencer par « De tout temps ». ' +
                   'Par exemple : la poésie du XIXe siècle se détourne du lyrisme personnel pour aller chercher, chez les Parnassiens, des univers lointains et des figures héroïques.' },
      { pts: 2, d: '<b>Présentation</b> : auteur, titre du recueil, titre du poème, date, et situation du passage. ' +
                   'Ici : Leconte de Lisle, Poèmes barbares, « Le Cœur de Hialmar », 1862, un poème qui met en scène un guerrier scandinave mourant sur un champ de bataille.' },
      { pts: 1, d: 'Une ou deux phrases de <b>résumé neutre</b> du passage, sans analyse : un décor de carnage, puis la parole du héros blessé.' },
      { pts: 2, d: '<b>Problématique</b> : une vraie question, qui porte sur ce que le texte fait. ' +
                   'Par exemple : comment ce tableau de mort devient-il la célébration d’un héroïsme sans peur ?' },
      { pts: 2, d: '<b>Annonce du plan</b> : les axes dans l’ordre, formulés comme des réponses. ' +
                   'Par exemple : un décor funèbre saisissant · puis la parole d’un héros qui renverse la mort en victoire.' },
      { pts: 1, d: '<b>Rédaction</b> : un seul paragraphe, sans titre ni tiret, sans « je vais montrer », sans annoncer les procédés.' },
      { pts: 1, d: '<b>Langue</b> : orthographe et syntaxe soignées, temps du commentaire au présent, titres du recueil en italique et titre du poème entre guillemets.' }
    ]
  };
});

D('fr-commentaire', 'fr-paragraphe-aqa', 'Rédiger un paragraphe d’analyse', function(){
  return {
    enonce: '<p>Toujours sur le même poème :</p>' +
      '<div class="cit">Viens par ici, Corbeau, mon brave mangeur d’hommes !<br>' +
      'Ouvre-moi la poitrine avec ton bec de fer.<br>' +
      'Tu nous retrouveras demain tels que nous sommes ;<br>' +
      'Porte mon cœur tout chaud à la fille d’Ylmer.' +
      '<span class="cit-src">Leconte de Lisle, « Le Cœur de Hialmar »</span></div>' +
      '<p><b>Rédige un paragraphe d’analyse complet</b> montrant que le héros domine la mort au lieu de la subir.</p>',
    aide: 'Structure attendue : Affirmation · citation courte · analyse du procédé et de son effet · phrase de bilan. ' +
          'Un paragraphe fait entre huit et quinze lignes.',
    bareme: [
      { pts: 2, d: '<b>Affirmation</b> en ouverture : l’idée est annoncée avant toute citation. ' +
                   'Par exemple : loin d’implorer, Hialmar prend l’initiative et transforme son agonie en acte volontaire.' },
      { pts: 2, d: '<b>Citations courtes</b>, entre guillemets, intégrées à la phrase : « Viens par ici, Corbeau », « Ouvre-moi la poitrine ».' },
      { pts: 2, d: '<b>Procédés nommés</b> : l’apostrophe au corbeau, la série d’<b>impératifs</b> (« Viens », « Ouvre », « Porte »), ' +
                   'l’<b>apposition</b> familière « mon brave mangeur d’hommes ».' },
      { pts: 2, d: '<b>Effets analysés</b> : les impératifs font du mourant le donneur d’ordres ; le charognard devient un serviteur, ' +
                   'presque un ami ; l’horreur physique est dite sans trembler, ce qui manifeste le courage.' },
      { pts: 1, d: 'Un <b>détail précis</b> relevé et interprété : « mon cœur tout chaud », où l’adjectif transforme l’organe arraché en gage d’amour vivant.' },
      { pts: 1, d: '<b>Bilan</b> d’une phrase qui relie le paragraphe à la problématique, sans répéter l’affirmation mot pour mot.' },
      { pts: 0, d: '<span class="tiny">Zéro point, mais vérifie-le : aucune paraphrase, aucun « l’auteur utilise une figure pour embellir son texte ».</span>' }
    ]
  };
});

D('fr-dissertation', 'fr-intro-dissertation', 'Rédiger une introduction de dissertation', function(){
  const sujets = [
    { o: 'Pot-Bouille', a: 'Zola', p: 'dévoiler les rouages de la société',
      s: 'Le roman de Zola se contente-t-il de dévoiler les rouages de la société bourgeoise ?' },
    { o: 'Le Menteur', a: 'Corneille', p: 'mensonge et comédie',
      s: 'Dans Le Menteur, le mensonge n’est-il qu’un ressort comique ?' },
    { o: 'Cahier de Douai', a: 'Rimbaud', p: 'émancipations créatrices',
      s: 'La liberté du Cahier de Douai tient-elle seulement au refus des règles ?' },
    { o: 'Pour un oui ou pour un non', a: 'Sarraute', p: 'théâtre et dispute',
      s: 'La dispute, chez Sarraute, porte-t-elle vraiment sur des mots ?' }
  ];
  const t = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet de dissertation</b>, portant sur <i>' + t.o + '</i> de ' + t.a +
            ' et sur le parcours <i>' + t.p + '</i> :</p>' + cit(t.s) +
            '<p>Vous répondrez à cette question dans un développement organisé, en prenant appui sur l’œuvre au programme, ' +
            'sur le parcours associé et sur votre culture personnelle.</p>' +
            '<p><b>Rédige entièrement l’introduction</b>, puis note le plan détaillé en trois parties.</p>',
    aide: 'Introduction : amorce · présentation de l’œuvre et du sujet · analyse des mots clés · problématique · annonce du plan. ' +
          'Le mot qui compte ici est le mot restrictif du sujet (« se contente-t-il », « n’est-il que », « seulement », « vraiment ») : ' +
          'c’est lui qui impose un plan dialectique.',
    bareme: [
      { pts: 1, d: '<b>Amorce</b> reliée au genre ou au parcours, jamais générale.' },
      { pts: 1, d: '<b>Présentation</b> de l’œuvre : auteur, titre, date, et en une phrase ce dont elle traite.' },
      { pts: 2, d: '<b>Citation du sujet</b> entre guillemets, puis <b>analyse des mots clés</b>. ' +
                   'Le mot restrictif du sujet doit être repéré et commenté : c’est lui qui crée la tension.' },
      { pts: 2, d: '<b>Problématique</b> reformulée, plus précise que le sujet, et qui ne se contente pas de le recopier.' },
      { pts: 2, d: '<b>Annonce d’un plan dialectique</b> en trois temps : oui, dans une certaine mesure · mais c’est insuffisant · ' +
                   'en réalité la question se déplace. La troisième partie n’est jamais un simple compromis.' },
      { pts: 2, d: '<b>Plan détaillé</b> : trois parties, deux ou trois sous-parties chacune, et pour chaque sous-partie ' +
                   '<b>un exemple précis</b> tiré de l’œuvre (un passage, un personnage, une scène), pas une idée générale.' },
      { pts: 1, d: 'Le <b>parcours associé</b> apparaît explicitement quelque part dans le plan : c’est un attendu du sujet.' },
      { pts: 1, d: 'Au moins une référence de <b>culture personnelle</b> : une autre œuvre, un film, une pièce vue, reliée à la question.' }
    ]
  };
});

D('fr-oral', 'fr-explication-lineaire', 'Préparer une explication linéaire', function(){
  return {
    enonce: '<p>Tu disposes de 30 minutes de préparation. Voici la fin du poème étudié en classe :</p>' +
      '<div class="cit">Va, sombre messager, dis-lui bien que je l’aime,<br>' +
      'Et que voici mon cœur. Elle reconnaîtra<br>' +
      'Qu’il est rouge et solide et non tremblant et blême ;<br>' +
      'Et la fille d’Ylmer, Corbeau, te sourira !<br><br>' +
      'Moi, je meurs. Mon esprit coule par vingt blessures.<br>' +
      'J’ai fait mon temps. Buvez, ô loups, mon sang vermeil.<br>' +
      'Jeune, brave, riant, libre et sans flétrissures,<br>' +
      'Je vais m’asseoir parmi les Dieux, dans le soleil !' +
      '<span class="cit-src">Leconte de Lisle, « Le Cœur de Hialmar », 1862</span></div>' +
      '<p><b>Prépare l’explication linéaire</b> de ce passage sur ton cahier, puis dis-la à voix haute, en te chronométrant.</p>',
    aide: 'L’explication suit le texte dans son ordre : ce n’est pas un commentaire composé. ' +
          'Découpe d’abord le passage en mouvements, puis explique mouvement par mouvement.',
    bareme: [
      { pts: 1, d: '<b>Situation</b> du passage en deux phrases : la fin du poème, après l’appel au corbeau, au moment où le guerrier meurt.' },
      { pts: 2, d: '<b>Mouvements identifiés</b> et justifiés : premier mouvement, le message d’amour confié au corbeau ; ' +
                   'second mouvement, à partir de « Moi, je meurs », le face-à-face du héros avec sa propre mort.' },
      { pts: 1, d: '<b>Projet de lecture</b> annoncé : comment la mort se change-t-elle en apothéose ?' },
      { pts: 3, d: '<b>Explication suivie</b> du premier mouvement : l’impératif « Va », l’apostrophe « sombre messager », ' +
                   'l’<b>antithèse</b> « rouge et solide » contre « tremblant et blême » qui fait du cœur la preuve du courage, ' +
                   'et le futur « sourira » qui projette une scène apaisée.' },
      { pts: 3, d: '<b>Explication suivie</b> du second mouvement : la brièveté des phrases (« Moi, je meurs. », « J’ai fait mon temps. ») ' +
                   'qui dit le calme ; l’<b>hyperbole</b> « vingt blessures » ; l’impératif « Buvez, ô loups » qui offre le corps ; ' +
                   'l’<b>accumulation</b> « Jeune, brave, riant, libre et sans flétrissures » ; ' +
                   'et le dernier vers, qui fait passer du champ de bataille au soleil des dieux.' },
      { pts: 1, d: '<b>Conclusion</b> : réponse au projet de lecture, et lien avec le recueil ou le parcours.' },
      { pts: 1, d: '<b>Lecture expressive</b> préparée : respirer aux points, marquer la césure, ralentir sur le dernier vers. Elle vaut 2 points le jour de l’oral.' }
    ]
  };
});

D('fr-grammaire', 'fr-question-grammaire', 'La question de grammaire de l’oral', function(){
  const cas = [
    { p: 'Elle reconnaîtra qu’il est rouge et solide.',
      r: ['<b>Nature</b> : proposition subordonnée conjonctive complétive, introduite par la conjonction de subordination « que ».',
          '<b>Fonction</b> : COD du verbe « reconnaîtra ». Test : « elle reconnaîtra <i>cela</i> ».',
          '<b>Détail</b> : à l’intérieur, « il » est sujet, « est » verbe d’état, « rouge et solide » attribut du sujet.'] },
    { p: 'Mille braves sont là qui dorment sans tombeaux.',
      r: ['<b>Nature</b> : proposition subordonnée relative, introduite par le pronom relatif « qui ».',
          '<b>Fonction</b> : complément de l’antécédent « braves ».',
          '<b>Détail</b> : « qui » est sujet du verbe « dorment » dans la subordonnée ; « sans tombeaux » est complément circonstanciel de manière.'] },
    { p: 'Je me demande si le corbeau portera le message.',
      r: ['<b>Nature</b> : proposition subordonnée interrogative indirecte, introduite par « si ».',
          '<b>Fonction</b> : COD du verbe « me demande ».',
          '<b>Détail</b> : interrogation <b>totale</b> (la réponse serait oui ou non) et <b>indirecte</b> : ni point d’interrogation ni inversion du sujet.'] },
    { p: 'Il ne reste qu’un guerrier debout.',
      r: ['<b>Nature</b> : il ne s’agit pas d’une négation mais d’une <b>restriction</b>, exprimée par « ne… que ».',
          '<b>Sens</b> : « il reste seulement un guerrier debout ».',
          '<b>Détail</b> : « ne » est ici corrélé à « que » ; supprimer « que » changerait entièrement le sens de la phrase. C’est le piège le plus fréquent de l’épreuve.'] }
  ];
  const c = R.pick(cas);
  return {
    enonce: '<p>L’examinateur te pose la question de grammaire, notée <b>sur 2 points</b>.</p>' + cit(c.p) +
            '<p><b>Analyse cette phrase</b> à l’oral, comme le jour de l’épreuve : à voix haute, en une minute.</p>',
    aide: 'On attend toujours la <b>nature</b> puis la <b>fonction</b>, avec le mot introducteur cité et un test qui justifie la réponse.',
    bareme: c.r.map((t, i) => ({ pts: i === 2 ? 2 : 1, d: t })).concat([
      { pts: 1, d: '<b>Formulation</b> : une phrase complète, calme, qui cite le mot introducteur et justifie par un test, plutôt qu’une étiquette lancée seule.' }
    ])
  };
});

/* =================== SYNTHÈSES DE NIVEAU DEVOIR SURVEILLÉ =================== */

G('fr-versification', 'vs-synthese', 'Analyser une strophe', 'ds', function(){
  const q = R.pick(QUATRAINS);
  const metres = ['Alexandrin', 'Décasyllabe', 'Octosyllabe', 'Heptasyllabe'];
  const disp = ['Plates', 'Croisées', 'Embrassées'];
  const mvts = R.shuffle([q.mvt].concat(autres(NOMS_MVT, q.mvt, 3)));
  return {
    enonce: '<p>Analyse cette strophe comme on te le demandera le jour du devoir.</p>' +
            '<div class="cit">' + q.v.join('<br>') + '<span class="cit-src">' + q.s + '</span></div>',
    champs: [
      { type: 'choix', label: 'Nombre de vers', options: ['Tercet', 'Quatrain', 'Quintil', 'Sizain'], bon: 1 },
      { type: 'choix', label: 'Mètre employé', options: metres, bon: 0 },
      { type: 'choix', label: 'Disposition des rimes', options: disp, bon: disp.indexOf(q.d) },
      { type: 'choix', label: 'Mouvement de l’auteur', options: mvts, bon: mvts.indexOf(q.mvt) }
    ],
    etapes: [
      'Quatre vers : c’est un <b>quatrain</b>.',
      'Chaque vers compte douze syllabes : ce sont des <b>alexandrins</b>. Pense à élider les « e » placés devant une voyelle, ' +
        'comme dans « ô rage ! ô » ou « comme Ulysse ».',
      'Les rimes suivent le schéma <b>' + q.sch + '</b>, ce sont donc des rimes <b>' + q.d.toLowerCase() + '</b>.',
      'L’auteur appartient au <b>' + q.mvt.toLowerCase() + '</b>.',
      'Dans une copie, cette description ne suffit pas : il faut ensuite dire ce que la forme <b>produit</b>. ' +
        'Des rimes embrassées enferment le vers central, des rimes plates donnent un effet de liste ou de raisonnement.'
    ]
  };
});

G('fr-grammaire', 'gr-synthese', 'Analyse syntaxique complète', 'ds', function(){
  const s = R.pick(SUBORDONNEES);
  const fons = R.shuffle([s.fon].concat(autres(SUBORDONNEES.map(x => x.fon), s.fon, 3)));
  const mots = R.shuffle([s.mot].concat(autres(SUBORDONNEES.map(x => x.mot), s.mot, 3)));
  return {
    enonce: '<p>Analyse la proposition soulignée, comme le jour de l’oral.</p>' + cit(s.p) +
            '<p class="tiny">Trois réponses attendues : le mot qui introduit, la nature, la fonction.</p>',
    champs: [
      { type: 'choix', label: 'Mot introducteur', options: mots, bon: mots.indexOf(s.mot) },
      { type: 'choix', label: 'Nature', options: NAT_SUB.slice(), bon: NAT_SUB.indexOf(s.nat) },
      { type: 'choix', label: 'Fonction', options: fons, bon: fons.indexOf(s.fon) }
    ],
    etapes: [
      'La proposition est introduite par <b>« ' + s.mot + ' »</b>.',
      'Nature : <b>' + s.nat.toLowerCase() + '</b>. ' + s.e,
      'Fonction : <b>' + s.fon.toLowerCase() + '</b>.',
      'Réponse orale attendue, en une phrase : « c’est une ' + s.nat.toLowerCase() + ', introduite par « ' + s.mot +
        ' », et elle est ' + s.fon.toLowerCase() + ' ».'
    ]
  };
});
