/* =========================================================================
   Générateurs d'exercices d'enseignement scientifique.
   La plupart sont des calculs : la réponse est recalculée exactement en
   même temps que l'énoncé, donc la correction est toujours juste.
   ========================================================================= */

/* ================= 1.1 LES ÉLÉMENTS CHIMIQUES ================= */

const REACTIONS = [
  { e: nuc(2,1,'H') + ' + ' + nuc(3,1,'H') + ' → ' + nuc(4,2,'He') + ' + ' + nuc(1,0,'n'), t: 'Fusion',
    d: 'Deux noyaux légers s’assemblent en un noyau plus lourd : c’est la réaction qui alimente les étoiles et le projet ITER.' },
  { e: '3 ' + nuc(4,2,'He') + ' → ' + nuc(12,6,'C'), t: 'Fusion',
    d: 'Trois noyaux d’hélium forment un noyau de carbone. C’est ainsi que le carbone de ton corps a été fabriqué.' },
  { e: nuc(12,6,'C') + ' + ' + nuc(4,2,'He') + ' → ' + nuc(16,8,'O'), t: 'Fusion',
    d: 'Un noyau léger s’ajoute à un autre : l’oxygène se forme dans les étoiles massives.' },
  { e: nuc(16,8,'O') + ' + ' + nuc(4,2,'He') + ' → ' + nuc(20,10,'Ne'), t: 'Fusion',
    d: 'Encore une addition de noyaux légers : la nucléosynthèse stellaire procède ainsi, de proche en proche.' },
  { e: nuc(235,92,'U') + ' + ' + nuc(1,0,'n') + ' → ' + nuc(94,38,'Sr') + ' + ' + nuc(140,54,'Xe') + ' + 2 ' + nuc(1,0,'n'), t: 'Fission',
    d: 'Un noyau lourd se casse en noyaux plus légers : c’est la réaction des centrales nucléaires.' },
  { e: nuc(235,92,'U') + ' + ' + nuc(1,0,'n') + ' → ' + nuc(92,36,'Kr') + ' + ' + nuc(141,56,'Ba') + ' + 3 ' + nuc(1,0,'n'), t: 'Fission',
    d: 'Le noyau d’uranium se brise en deux fragments plus petits, en libérant des neutrons.' },
  { e: nuc(239,94,'Pu') + ' + ' + nuc(1,0,'n') + ' → ' + nuc(103,42,'Mo') + ' + ' + nuc(134,52,'Te') + ' + 3 ' + nuc(1,0,'n'), t: 'Fission',
    d: 'Le plutonium se casse également : le noyau de départ est lourd, les produits sont plus légers.' }
];

G('sci-elements', 'sci-fusion-fission', 'Fusion ou fission ?', 'app', function(){
  const r = R.pick(REACTIONS);
  return {
    enonce: '<p>De quel type de réaction nucléaire s’agit-il ?</p>' + form(r.e),
    qcm: { options: ['Fusion', 'Fission'], bon: r.t === 'Fusion' ? 0 : 1 },
    etapes: [
      'C’est une <b>' + r.t.toLowerCase() + '</b>.', r.d,
      'Le réflexe : regarder les noyaux de <b>départ</b>. Légers qui s’assemblent → fusion. ' +
        'Un noyau lourd qui se casse → fission.'
    ]
  };
});

/* équations à trou : A et Z se conservent */
const EQ_TROU = [
  { g: [[14,7,'N'], [1,0,'n']], d: [[14,6,'C']], x: [1,1,'H'],
    c: 'C’est la réaction qui produit en permanence le carbone 14 dans la haute atmosphère.' },
  { g: [[2,1,'H'], [3,1,'H']], d: [[4,2,'He']], x: [1,0,'n'],
    c: 'La fusion deutérium-tritium, celle que vise le projet ITER.' },
  { g: [[235,92,'U'], [1,0,'n']], d: [[94,38,'Sr'], [1,0,'n'], [1,0,'n']], x: [140,54,'Xe'],
    c: 'Une fission de l’uranium 235.' },
  { g: [[12,6,'C'], [4,2,'He']], d: [], x: [16,8,'O'],
    c: 'La formation de l’oxygène par fusion dans les étoiles.' },
  { g: [[9,4,'Be'], [4,2,'He']], d: [[1,0,'n']], x: [12,6,'C'],
    c: 'La réaction par laquelle Chadwick a mis en évidence le neutron en 1932.' }
];

G('sci-elements', 'sci-conservation', 'Compléter une équation nucléaire', 'ent', function(){
  const r = R.pick(EQ_TROU);
  const gA = r.g.reduce((s, x) => s + x[0], 0), gZ = r.g.reduce((s, x) => s + x[1], 0);
  const dA = r.d.reduce((s, x) => s + x[0], 0), dZ = r.d.reduce((s, x) => s + x[1], 0);
  const A = gA - dA, Z = gZ - dZ;
  const gauche = r.g.map(x => nuc(x[0], x[1], x[2])).join(' + ');
  const droite = r.d.map(x => nuc(x[0], x[1], x[2])).concat(['<b>?</b>']).join(' + ');
  return {
    enonce: '<p>Complète cette équation nucléaire : donne le nombre de masse <b>A</b> et le numéro atomique <b>Z</b> ' +
            'du noyau manquant.</p>' + form(gauche + ' → ' + droite),
    champs: [
      { type: 'num', label: 'A (nombre du haut)', bon: A, tol: 0 },
      { type: 'num', label: 'Z (nombre du bas)', bon: Z, tol: 0 }
    ],
    etapes: [
      'Dans une réaction nucléaire, <b>A et Z se conservent</b> : la somme des nombres du haut est la même des deux côtés, ' +
        'et celle des nombres du bas aussi.',
      'À gauche : A = ' + gA + ' et Z = ' + gZ + '.',
      'À droite, sans le noyau manquant : A = ' + dA + ' et Z = ' + dZ + '.',
      'Donc le noyau manquant a A = ' + gA + ' - ' + dA + ' = <b>' + A + '</b> et Z = ' + gZ + ' - ' + dZ + ' = <b>' + Z + '</b>. ' +
        'Il s’agit de ' + nuc(r.x[0], r.x[1], r.x[2]) + '.',
      r.c
    ]
  };
});

G('sci-elements', 'sci-demi-vie', 'Combien de noyaux restent ?', 'app', function(){
  const n = R.int(1, 6);
  const N0 = R.pick([1000, 2000, 4000, 8000, 6400, 12800, 32000, 64000]);
  const N = N0 / Math.pow(2, n);
  return {
    enonce: '<p>Un échantillon contient au départ <b>' + nf(N0) + '</b> noyaux radioactifs.</p>' +
            '<p>Combien en reste-t-il au bout de <b>' + n + ' demi-vie' + (n > 1 ? 's' : '') + '</b> ?</p>',
    champs: [{ type: 'num', label: 'Noyaux restants', bon: N, tol: 0.5 }],
    etapes: [
      'À chaque demi-vie, il reste la <b>moitié</b> des noyaux présents.',
      'Après ' + n + ' demi-vie' + (n > 1 ? 's' : '') + ' : N = N<sub>0</sub> × (1/2)<sup>' + n + '</sup> = ' +
        nf(N0) + ' ÷ ' + Math.pow(2, n) + ' = <b>' + nf(N) + '</b>.',
      'C’est une suite géométrique de raison 1/2 : une décroissance exponentielle.',
      'Attention : la demi-vie ne dépend ni de la température, ni de la quantité. C’est une propriété du noyau seul.'
    ]
  };
});

G('sci-elements', 'sci-datation', 'Dater par la radioactivité', 'ent', function(){
  const noyaux = [
    { n: 'le carbone 14', t: 5730, u: 'ans' },
    { n: 'le potassium 40', t: 1.3e9, u: 'ans' },
    { n: 'l’uranium 238', t: 4.5e9, u: 'ans' },
    { n: 'le césium 137', t: 30, u: 'ans' },
    { n: 'l’iode 131', t: 8, u: 'jours' }
  ];
  const x = R.pick(noyaux);
  const n = R.int(1, 5);
  const age = x.t * n;
  const frac = Math.pow(2, n);
  return {
    enonce: '<p>La demi-vie de <b>' + x.n + '</b> est de <b>' + nf(x.t) + ' ' + x.u + '</b>.</p>' +
            '<p>Dans un échantillon, il ne reste plus que <b>1/' + frac + '</b> des noyaux initiaux. ' +
            'Quel est l’âge de cet échantillon, en ' + x.u + ' ?</p>',
    champs: [{ type: 'num', label: 'Âge (en ' + x.u + ')', bon: age, tol: Math.max(0.5, age * 1e-9) }],
    etapes: [
      'Il faut chercher <b>combien de fois on a divisé par 2</b> pour arriver à 1/' + frac + '.',
      '1/' + frac + ' = (1/2)<sup>' + n + '</sup>, donc <b>' + n + ' demi-vie' + (n > 1 ? 's' : '') + '</b> se sont écoulées.',
      'Âge = ' + n + ' × ' + nf(x.t) + ' = <b>' + nf(age) + ' ' + x.u + '</b>.',
      'Méthode générale : reste 1/2 → 1 demi-vie · 1/4 → 2 · 1/8 → 3 · 1/16 → 4 · 1/32 → 5.'
    ]
  };
});

const ABONDANCE = [
  { q: 'Quels sont les deux éléments les plus abondants dans l’Univers ?', b: 'L’hydrogène et l’hélium',
    v: ['L’hydrogène et l’hélium', 'Le carbone et l’oxygène', 'Le fer et le silicium', 'L’oxygène et l’azote'] },
  { q: 'Quels éléments constituent principalement la Terre ?', b: 'Oxygène, hydrogène, fer, silicium et magnésium',
    v: ['Oxygène, hydrogène, fer, silicium et magnésium', 'Hydrogène et hélium',
        'Carbone, hydrogène, oxygène et azote', 'Uranium, plomb et or'] },
  { q: 'Quels éléments constituent principalement les êtres vivants ?', b: 'Carbone, hydrogène, oxygène et azote',
    v: ['Carbone, hydrogène, oxygène et azote', 'Hydrogène et hélium',
        'Fer, silicium et magnésium', 'Calcium, sodium et potassium'] },
  { q: 'Où se forment les noyaux des éléments chimiques stables ?', b: 'Dans les étoiles, à partir de l’hydrogène initial',
    v: ['Dans les étoiles, à partir de l’hydrogène initial', 'Dans le noyau terrestre',
        'Dans les océans', 'Dans les centrales nucléaires'] },
  { q: 'L’instant de désintégration d’un noyau radioactif donné est-il prévisible ?', b: 'Non, il est aléatoire',
    v: ['Non, il est aléatoire', 'Oui, il vaut exactement une demi-vie',
        'Oui, il dépend de la température', 'Oui, si l’on connaît la masse de l’échantillon'] }
];

G('sci-elements', 'sci-abondance', 'D’où vient la matière ?', 'app', function(){
  const x = R.pick(ABONDANCE);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Trois compositions très différentes à connaître : l’Univers, la Terre, les êtres vivants.']
  };
});

/* ================= 1.2 LES CRISTAUX ================= */

G('sci-cristaux', 'sci-masse-volumique', 'Masse volumique d’un cristal', 'ds', function(){
  const cas = [
    { n: 'chlorure de sodium', a: 564, m: 3.88 },
    { n: 'fer', a: 287, m: 1.86 },
    { n: 'cuivre', a: 361, m: 4.22 },
    { n: 'aluminium', a: 405, m: 1.79 }
  ];
  const x = R.pick(cas);
  const a = x.a * 1e-12;               /* arête en mètres */
  const m = x.m * 1e-25;               /* masse de la maille en kg */
  const V = a * a * a;
  const rho = m / V;                   /* kg/m3 */
  const rk = Math.round(rho);
  return {
    enonce: '<p>Une maille cubique de <b>' + x.n + '</b> a une arête <b>a = ' + x.a + ' pm</b> ' +
            '(1 pm = 10<sup>-12</sup> m) et contient une masse totale <b>m = ' + nf(x.m) + ' × 10<sup>-25</sup> kg</b>.</p>' +
            '<p>Calcule la masse volumique de ce cristal, en kg·m<sup>-3</sup>, arrondie à l’unité.</p>',
    champs: [{ type: 'num', label: 'ρ (kg·m⁻³)', bon: rk, tol: Math.max(5, rk * 0.02) }],
    etapes: [
      'La maille est un cube d’arête a, donc son volume vaut V = a<sup>3</sup>.',
      'Conversion : a = ' + x.a + ' pm = ' + x.a + ' × 10<sup>-12</sup> m, donc ' +
        'V = (' + x.a + ' × 10<sup>-12</sup>)<sup>3</sup> ≈ ' + V.toExponential(2).replace('.', ',').replace('e', ' × 10^') + ' m<sup>3</sup>.',
      'ρ = m / V = ' + nf(x.m) + ' × 10<sup>-25</sup> ÷ ' + V.toExponential(2).replace('.', ',').replace('e', ' × 10^') +
        ' ≈ <b>' + nf(rk) + ' kg·m<sup>-3</sup></b>.',
      'C’est exactement le lien demandé par le programme : l’organisation <b>microscopique</b> de la maille ' +
        'explique une propriété <b>macroscopique</b> du cristal.'
    ]
  };
});

const CRISTAUX_QCM = [
  { q: 'Dans quel ordre de taille croissante faut-il ranger ces objets ?', b: 'Atome, maille, cristal, roche',
    v: ['Atome, maille, cristal, roche', 'Maille, atome, roche, cristal',
        'Cristal, maille, atome, roche', 'Roche, cristal, maille, atome'] },
  { q: 'Qu’est-ce qu’une maille ?', b: 'Le plus petit motif qui, répété, reconstruit tout le cristal',
    v: ['Le plus petit motif qui, répété, reconstruit tout le cristal', 'Un assemblage de plusieurs roches',
        'La surface extérieure d’un cristal', 'Un atome isolé'] },
  { q: 'Qu’est-ce qu’une roche ?', b: 'L’association de cristaux d’un même minéral ou de plusieurs minéraux',
    v: ['L’association de cristaux d’un même minéral ou de plusieurs minéraux', 'Un cristal de très grande taille',
        'Un solide toujours amorphe', 'Une maille répétée une seule fois'] },
  { q: 'Une lave qui refroidit très rapidement donne une structure…', b: 'Amorphe, comme le verre',
    v: ['Amorphe, comme le verre', 'Cristalline, à gros cristaux',
        'Toujours cristalline', 'Ni amorphe ni cristalline'] },
  { q: 'Un refroidissement lent d’un magma produit…', b: 'De gros cristaux bien formés',
    v: ['De gros cristaux bien formés', 'Du verre volcanique',
        'Une structure amorphe', 'Aucun solide'] },
  { q: 'Un même composé chimique peut-il cristalliser sous plusieurs structures ?', b: 'Oui, et cela donne des minéraux différents',
    v: ['Oui, et cela donne des minéraux différents', 'Non, la formule impose la structure',
        'Non, sauf pour le verre', 'Oui, mais seulement à très haute pression'] },
  { q: 'Trouve-t-on des structures cristallines chez les êtres vivants ?', b: 'Oui : coquilles, squelettes, calculs rénaux',
    v: ['Oui : coquilles, squelettes, calculs rénaux', 'Non, jamais',
        'Seulement chez les végétaux', 'Seulement chez les bactéries'] }
];

G('sci-cristaux', 'sci-cristaux-qcm', 'Cristallin, amorphe, échelles', 'app', function(){
  const x = R.pick(CRISTAUX_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le réflexe du chapitre : devant une roche, se demander <b>à quelle vitesse elle a refroidi</b>. ' +
               'La taille des cristaux répond.']
  };
});

/* ================= 1.3 LA CELLULE ================= */

const ORDRES = [
  { o: 'un atome', p: -10 },
  { o: 'une molécule simple', p: -9 },
  { o: 'un virus', p: -7 },
  { o: 'un organite', p: -6 },
  { o: 'une cellule animale', p: -5 },
  { o: 'un organisme humain', p: 0 }
];

G('sci-cellule', 'sci-ordres', 'Les ordres de grandeur du vivant', 'app', function(){
  const x = R.pick(ORDRES);
  const bon = '10<sup>' + x.p + '</sup> m';
  const opts = R.shuffle([bon].concat(autres(ORDRES.map(y => '10<sup>' + y.p + '</sup> m'), bon, 3)));
  return {
    enonce: '<p>Quel est l’ordre de grandeur de la taille de <b>' + x.o + '</b> ?</p>',
    qcm: { options: opts, bon: opts.indexOf(bon) },
    etapes: [
      'Ordre de grandeur : <b>' + bon + '</b>.',
      'Les repères du programme : atome 10<sup>-10</sup> m · molécule 10<sup>-9</sup> m (le nanomètre) · ' +
        'virus et organite 10<sup>-7</sup> à 10<sup>-6</sup> m · cellule 10<sup>-5</sup> m (quelques dizaines de micromètres) · ' +
        'organisme 1 m.',
      'De l’atome à la cellule, il y a cinq ordres de grandeur, soit un facteur 100 000.'
    ]
  };
});

const CELLULE_QCM = [
  { q: 'Qu’est-ce qui a permis la découverte de l’unité cellulaire ?', b: 'L’invention du microscope optique',
    v: ['L’invention du microscope optique', 'L’invention du microscope électronique',
        'La découverte de l’ADN', 'L’invention du télescope'] },
  { q: 'Qu’a permis l’invention du microscope électronique ?', b: 'L’exploration de l’intérieur de la cellule et le lien entre échelle moléculaire et cellulaire',
    v: ['L’exploration de l’intérieur de la cellule et le lien entre échelle moléculaire et cellulaire',
        'La découverte des premières cellules', 'L’observation des organismes vivants entiers',
        'La mesure de la taille des atomes'] },
  { q: 'Qu’est-ce qui sépare la cellule de son environnement ?', b: 'La membrane plasmique',
    v: ['La membrane plasmique', 'La paroi osseuse', 'Le noyau', 'Le cytoplasme'] },
  { q: 'Pourquoi la cellule échange-t-elle en permanence avec son environnement ?', b: 'Parce que son fonctionnement nécessite un apport d’énergie',
    v: ['Parce que son fonctionnement nécessite un apport d’énergie', 'Parce qu’elle n’a pas de membrane',
        'Pour évacuer ses cristaux', 'Uniquement pendant sa division'] },
  { q: 'Quel argument fait douter du caractère vivant d’un virus ?', b: 'Il n’a pas de structure cellulaire ni de métabolisme propre',
    v: ['Il n’a pas de structure cellulaire ni de métabolisme propre', 'Il ne possède aucun matériel génétique',
        'Il est trop petit pour être observé', 'Il ne se multiplie jamais'] }
];

G('sci-cellule', 'sci-cellule-qcm', 'La cellule et les virus', 'app', function(){
  const x = R.pick(CELLULE_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Sur les virus, le programme demande une <b>discussion</b>, pas un verdict : pas de cellule ni de métabolisme, ' +
               'mais un matériel génétique et une capacité à évoluer.']
  };
});

/* ================= 2.1 LE RAYONNEMENT SOLAIRE ================= */

const ETOILES = [
  { n: 'Bételgeuse, une supergéante rouge', T: 3500 },
  { n: 'une naine rouge', T: 3000 },
  { n: 'le Soleil', T: 5800 },
  { n: 'Sirius A, une étoile blanche', T: 9900 },
  { n: 'Rigel, une supergéante bleue', T: 11000 },
  { n: 'une étoile très chaude', T: 20000 }
];

G('sci-rayonnement', 'sci-wien', 'La loi de Wien', 'ent', function(){
  const e = R.pick(ETOILES);
  const lam = 2.90e-3 / e.T;                 /* en mètres */
  const nm = Math.round(lam * 1e9);
  if (R.int(0, 1)) {
    return {
      enonce: '<p>On assimile <b>' + e.n + '</b> à un corps noir de température de surface ' +
              '<b>T = ' + nf(e.T) + ' K</b>.</p>' +
              '<p>Calcule la longueur d’onde de son maximum d’émission, en nanomètres, arrondie à l’unité.</p>' +
              form('λ<sub>max</sub> × T = 2,90 × 10<sup>-3</sup> m·K'),
      champs: [{ type: 'num', label: 'λmax (nm)', bon: nm, tol: Math.max(2, nm * 0.01) }],
      etapes: [
        'λ<sub>max</sub> = 2,90 × 10<sup>-3</sup> / T = 2,90 × 10<sup>-3</sup> ÷ ' + nf(e.T) +
          ' ≈ ' + lam.toExponential(2).replace('.', ',').replace('e', ' × 10^') + ' m.',
        'Conversion en nanomètres : on multiplie par 10<sup>9</sup>, donc λ<sub>max</sub> ≈ <b>' + nm + ' nm</b>.',
        nm < 400 ? 'Ce maximum est dans l’<b>ultraviolet</b> : l’étoile est très chaude et apparaît bleue.'
                 : (nm > 700 ? 'Ce maximum est dans l’<b>infrarouge</b> : l’étoile est froide et apparaît rouge.'
                             : 'Ce maximum est dans le <b>visible</b>.'),
        'Rappel : plus un corps est chaud, plus il émet vers le bleu, donc vers les petites longueurs d’onde.'
      ]
    };
  }
  return {
    enonce: '<p>Le spectre d’une étoile assimilée à un corps noir présente un maximum d’émission à ' +
            '<b>λ<sub>max</sub> = ' + nm + ' nm</b>.</p>' +
            '<p>Calcule sa température de surface, en kelvins, arrondie à la dizaine.</p>' +
            form('λ<sub>max</sub> × T = 2,90 × 10<sup>-3</sup> m·K'),
    champs: [{ type: 'num', label: 'T (K)', bon: Math.round(2.90e-3 / (nm * 1e-9) / 10) * 10,
               tol: Math.max(20, e.T * 0.02) }],
    etapes: [
      'Conversion : λ<sub>max</sub> = ' + nm + ' nm = ' + nm + ' × 10<sup>-9</sup> m. ' +
        'Une loi de Wien appliquée en nanomètres est fausse.',
      'T = 2,90 × 10<sup>-3</sup> / λ<sub>max</sub> = 2,90 × 10<sup>-3</sup> ÷ (' + nm + ' × 10<sup>-9</sup>) ' +
        '≈ <b>' + nf(Math.round(2.90e-3 / (nm * 1e-9))) + ' K</b>.',
      'Il s’agit d’un objet du type : ' + e.n + '.'
    ]
  };
});

G('sci-rayonnement', 'sci-stefan', 'La loi de Stefan', 'ent', function(){
  const T = R.pick([250, 260, 270, 280, 288, 300, 320, 350, 400]);
  const P = 5.67e-8 * Math.pow(T, 4);
  const Pr = Math.round(P);
  return {
    enonce: '<p>Un corps assimilé à un corps noir est à la température <b>T = ' + T + ' K</b>.</p>' +
            '<p>Calcule la puissance qu’il émet par unité de surface, en W·m<sup>-2</sup>, arrondie à l’unité.</p>' +
            form('P / S = σ × T<sup>4</sup>&nbsp;&nbsp;avec σ = 5,67 × 10<sup>-8</sup> W·m<sup>-2</sup>·K<sup>-4</sup>'),
    champs: [{ type: 'num', label: 'P/S (W·m⁻²)', bon: Pr, tol: Math.max(2, Pr * 0.02) }],
    etapes: [
      'T<sup>4</sup> = ' + T + '<sup>4</sup> ≈ ' +
        Math.pow(T, 4).toExponential(2).replace('.', ',').replace('e+', ' × 10^') + '.',
      'P/S = 5,67 × 10<sup>-8</sup> × ' + Math.pow(T, 4).toExponential(2).replace('.', ',').replace('e+', ' × 10^') +
        ' ≈ <b>' + nf(Pr) + ' W·m<sup>-2</sup></b>.',
      'Retiens la conséquence : comme la puissance varie en T<sup>4</sup>, <b>doubler la température ' +
        'multiplie la puissance émise par 16</b>.',
      'La température doit toujours être en <b>kelvins</b> : T(K) = θ(°C) + 273.'
    ]
  };
});

/* ================= 2.2 LE BILAN RADIATIF ================= */

G('sci-bilan', 'sci-albedo', 'Albédo et puissance absorbée', 'ent', function(){
  const surf = [
    { n: 'la neige fraîche', a: 0.85 }, { n: 'la banquise', a: 0.60 },
    { n: 'un désert de sable', a: 0.40 }, { n: 'la Terre en moyenne', a: 0.30 },
    { n: 'une forêt', a: 0.15 }, { n: 'l’océan', a: 0.10 }
  ];
  const s = R.pick(surf);
  const P = R.pick([1360, 1000, 800, 600, 500, 400]);
  const abs = Math.round(P * (1 - s.a));
  return {
    enonce: '<p>Une surface reçoit une puissance de <b>' + nf(P) + ' W·m<sup>-2</sup></b>. ' +
            'Il s’agit de <b>' + s.n + '</b>, dont l’albédo vaut <b>a = ' + nf(s.a) + '</b>.</p>' +
            '<p>Quelle puissance par mètre carré cette surface <b>absorbe</b>-t-elle ?</p>',
    champs: [{ type: 'num', label: 'Puissance absorbée (W·m⁻²)', bon: abs, tol: Math.max(1, abs * 0.02) }],
    etapes: [
      'L’albédo est la fraction <b>renvoyée</b> vers l’espace. Ce qui reste est absorbé.',
      'P<sub>absorbée</sub> = (1 - a) × P = (1 - ' + nf(s.a) + ') × ' + nf(P) + ' = ' +
        nf(1 - s.a) + ' × ' + nf(P) + ' ≈ <b>' + nf(abs) + ' W·m<sup>-2</sup></b>.',
      'Cette surface renvoie donc ' + nf(Math.round(s.a * 100)) + ' % et absorbe ' +
        nf(Math.round((1 - s.a) * 100)) + ' % de ce qu’elle reçoit.',
      'C’est l’enjeu de la fonte des glaces : remplacer une banquise très réfléchissante par un océan très absorbant ' +
        'fait absorber davantage d’énergie.'
    ]
  };
});

const BILAN_QCM = [
  { q: 'Qu’appelle-t-on l’albédo ?', b: 'La fraction de la puissance reçue qui est renvoyée vers l’espace',
    v: ['La fraction de la puissance reçue qui est renvoyée vers l’espace', 'La puissance absorbée par l’atmosphère',
        'La température moyenne de la Terre', 'Le rayonnement infrarouge émis par le sol'] },
  { q: 'Dans quel domaine la surface terrestre émet-elle son rayonnement ?', b: 'Dans l’infrarouge',
    v: ['Dans l’infrarouge', 'Dans le visible', 'Dans l’ultraviolet', 'Dans le domaine des rayons X'] },
  { q: 'Qu’est-ce que l’effet de serre ?', b: 'L’absorption par l’atmosphère du rayonnement infrarouge du sol, qu’elle réémet en partie vers le sol',
    v: ['L’absorption par l’atmosphère du rayonnement infrarouge du sol, qu’elle réémet en partie vers le sol',
        'La réflexion du rayonnement solaire par les nuages', 'Le réchauffement dû à la chaleur interne de la Terre',
        'La diminution de l’albédo terrestre'] },
  { q: 'La puissance reçue par le sol est égale à…', b: 'La somme de celle reçue du Soleil et de celle reçue de l’atmosphère',
    v: ['La somme de celle reçue du Soleil et de celle reçue de l’atmosphère', 'Celle reçue du Soleil uniquement',
        'Celle reçue de l’atmosphère uniquement', 'La différence entre les deux'] },
  { q: 'Quand l’équilibre dynamique est-il atteint ?', b: 'Quand la surface reçoit en moyenne autant de puissance qu’elle en émet',
    v: ['Quand la surface reçoit en moyenne autant de puissance qu’elle en émet', 'Quand l’albédo vaut zéro',
        'Quand l’atmosphère cesse d’émettre', 'Quand la Terre n’émet plus de rayonnement'] },
  { q: 'Si l’albédo terrestre augmente, la température moyenne…', b: 'Diminue, car moins d’énergie est absorbée',
    v: ['Diminue, car moins d’énergie est absorbée', 'Augmente, car plus d’énergie est piégée',
        'Ne change pas', 'Augmente puis diminue'] },
  { q: 'Pourquoi un facteur 4 apparaît-il dans le bilan radiatif ?', b: 'La Terre intercepte le rayonnement sur un disque de surface πR², mais rayonne depuis toute sa sphère, de surface 4πR²',
    v: ['La Terre intercepte le rayonnement sur un disque de surface πR², mais rayonne depuis toute sa sphère, de surface 4πR²',
        'Parce qu’il y a quatre saisons', 'Parce que l’albédo vaut 0,25',
        'Parce que la Terre tourne sur elle-même en 24 heures'] }
];

G('sci-bilan', 'sci-bilan-qcm', 'Comprendre le bilan radiatif', 'app', function(){
  const x = R.pick(BILAN_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Sans effet de serre, la température moyenne serait d’environ -18 °C au lieu de 15 °C. ' +
               'C’est son <b>renforcement</b> qui pose problème, pas son existence.']
  };
});

/* ================= 2.3 PHOTOSYNTHÈSE ET ALIMENTATION ================= */

G('sci-photosynthese', 'sci-bilan-alim', 'Bilan énergétique', 'ent', function(){
  const apport = R.int(18, 30) * 100;            /* kcal/jour, entre 1800 et 3000 */
  const base = R.int(13, 17) * 100;
  const sport = R.pick([200, 300, 450, 600, 750]);
  const depense = base + sport;
  const bilan = apport - depense;
  return {
    enonce: '<p>Sur une journée, une personne consomme <b>' + nf(apport) + ' kcal</b> par son alimentation.</p>' +
            '<p>Ses dépenses sont de <b>' + nf(base) + ' kcal</b> pour le métabolisme de base ' +
            'et de <b>' + nf(sport) + ' kcal</b> pour son activité physique.</p>' +
            '<p>Calcule son bilan énergétique de la journée, en kcal, puis convertis-le en kilojoules ' +
            '(1 kcal = 4,18 kJ), arrondi à l’unité.</p>',
    champs: [
      { type: 'num', label: 'Bilan (kcal)', bon: bilan, tol: 0.5 },
      { type: 'num', label: 'Bilan (kJ)', bon: Math.round(bilan * 4.18), tol: Math.max(2, Math.abs(bilan * 4.18) * 0.02) }
    ],
    etapes: [
      'Dépense totale = ' + nf(base) + ' + ' + nf(sport) + ' = ' + nf(depense) + ' kcal.',
      'Bilan = apport - dépense = ' + nf(apport) + ' - ' + nf(depense) + ' = <b>' + nf(bilan) + ' kcal</b>.',
      'Conversion : ' + nf(bilan) + ' × 4,18 ≈ <b>' + nf(Math.round(bilan * 4.18)) + ' kJ</b>.',
      bilan > 0 ? 'Le bilan est <b>positif</b> : l’excédent est stocké. Maintenu longtemps, cela conduit à une prise de masse.'
                : (bilan < 0 ? 'Le bilan est <b>négatif</b> : l’organisme puise dans ses réserves.'
                             : 'Le bilan est <b>nul</b> : apports et dépenses s’équilibrent exactement.'),
      'Un bilan se calcule toujours dans la <b>même unité</b> : convertir avant de soustraire, jamais après.'
    ]
  };
});

const PHOTO_QCM = [
  { q: 'Que produit la photosynthèse à partir de matière minérale ?', b: 'De la matière organique et du dioxygène',
    v: ['De la matière organique et du dioxygène', 'Du dioxyde de carbone et de l’eau',
        'De l’énergie lumineuse', 'Des ions minéraux'] },
  { q: 'Quelles matières premières minérales la photosynthèse utilise-t-elle ?', b: 'L’eau, les ions et le dioxyde de carbone',
    v: ['L’eau, les ions et le dioxyde de carbone', 'Le dioxygène et le glucose',
        'Uniquement le dioxyde de carbone', 'Les protéines et les lipides'] },
  { q: 'La photosynthèse « fabrique »-t-elle de l’énergie ?', b: 'Non, elle convertit l’énergie lumineuse en énergie chimique',
    v: ['Non, elle convertit l’énergie lumineuse en énergie chimique', 'Oui, elle crée de l’énergie à partir de rien',
        'Oui, à partir du dioxyde de carbone', 'Non, elle ne met en jeu aucune énergie'] },
  { q: 'Quelle part de l’énergie solaire reçue par la Terre la photosynthèse utilise-t-elle ?', b: 'Une part infime, qui suffit pourtant à nourrir presque toute la vie',
    v: ['Une part infime, qui suffit pourtant à nourrir presque toute la vie', 'Environ la moitié',
        'La quasi-totalité', 'Environ 30 %, comme l’albédo'] },
  { q: 'À quels problèmes de santé les déséquilibres alimentaires sont-ils reliés par le programme ?', b: 'Dénutrition, maladies cardiovasculaires, diabètes, obésité',
    v: ['Dénutrition, maladies cardiovasculaires, diabètes, obésité', 'Uniquement l’obésité',
        'Les maladies infectieuses', 'Les pathologies auditives'] }
];

G('sci-photosynthese', 'sci-photo-qcm', 'Photosynthèse et alimentation', 'app', function(){
  const x = R.pick(PHOTO_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le mot juste est <b>convertir</b>, jamais « fabriquer » : l’énergie ne se crée pas.']
  };
});

/* ================= 2.4 LES SOURCES D'ÉNERGIE ================= */

const SOURCES = [
  { n: 'le pétrole', r: 'Non renouvelable', s: 'Origine solaire indirecte',
    e: 'Il vient de matière organique produite par photosynthèse il y a des dizaines à des centaines de millions d’années.' },
  { n: 'le charbon', r: 'Non renouvelable', s: 'Origine solaire indirecte',
    e: 'Même origine que le pétrole : une biomasse fossilisée, donc de l’énergie solaire très ancienne.' },
  { n: 'le gaz naturel', r: 'Non renouvelable', s: 'Origine solaire indirecte',
    e: 'C’est aussi un combustible fossile, issu de matière organique.' },
  { n: 'l’énergie éolienne', r: 'Renouvelable', s: 'Origine solaire indirecte',
    e: 'Le vent naît des différences de température créées par le Soleil.' },
  { n: 'l’énergie hydraulique', r: 'Renouvelable', s: 'Origine solaire indirecte',
    e: 'Elle repose sur le cycle de l’eau, mis en mouvement par l’évaporation due au Soleil.' },
  { n: 'la biomasse', r: 'Renouvelable', s: 'Origine solaire indirecte',
    e: 'Elle est produite par photosynthèse, et fournit de l’énergie par combustion ou par fermentation.' },
  { n: 'le solaire photovoltaïque', r: 'Renouvelable', s: 'Origine solaire directe',
    e: 'Le rayonnement solaire est converti directement en électricité.' },
  { n: 'la géothermie', r: 'Renouvelable', s: 'Origine non solaire',
    e: 'Elle exploite la chaleur interne de la Terre, sans rapport avec le Soleil.' },
  { n: 'l’énergie marémotrice', r: 'Renouvelable', s: 'Origine non solaire',
    e: 'Les marées sont dues à l’attraction de la Lune, et non au Soleil.' },
  { n: 'l’énergie nucléaire', r: 'Non renouvelable', s: 'Origine non solaire',
    e: 'Elle exploite la fission de noyaux lourds présents en quantité limitée. Rien à voir avec le Soleil.' }
];

G('sci-energies', 'sci-sources', 'Renouvelable, et d’origine solaire ?', 'ent', function(){
  const x = R.pick(SOURCES);
  const ori = ['Origine solaire directe', 'Origine solaire indirecte', 'Origine non solaire'];
  return {
    enonce: '<p>On considère <b>' + x.n + '</b>.</p>' +
            '<p>Cette source est-elle renouvelable, et son origine est-elle solaire ?</p>',
    champs: [
      { type: 'choix', label: 'Renouvelable ?', options: ['Renouvelable', 'Non renouvelable'],
        bon: x.r === 'Renouvelable' ? 0 : 1 },
      { type: 'choix', label: 'Origine', options: ori.slice(), bon: ori.indexOf(x.s) }
    ],
    etapes: [
      '<b>' + x.n.charAt(0).toUpperCase() + x.n.slice(1) + '</b> : ' + x.r.toLowerCase() + ', ' + x.s.toLowerCase() + '.',
      x.e,
      'Le critère du programme n’est pas « propre » ou « sale », mais une <b>comparaison de durées</b> : ' +
        'durée de formation de la source contre durée prévisible de son épuisement.'
    ]
  };
});

G('sci-energies', 'sci-calorifique', 'Pouvoir calorifique', 'app', function(){
  const comb = [
    { n: 'le bois sec', pc: 15 }, { n: 'le charbon', pc: 30 },
    { n: 'le pétrole', pc: 42 }, { n: 'le gaz naturel', pc: 50 },
    { n: 'la paille', pc: 14 }
  ];
  const c = R.pick(comb);
  const m = R.pick([2, 5, 10, 20, 25, 50, 100]);
  const E = m * c.pc;
  return {
    enonce: '<p>Le pouvoir calorifique de <b>' + c.n + '</b> est de <b>' + c.pc + ' MJ·kg<sup>-1</sup></b>.</p>' +
            '<p>Quelle énergie libère la combustion de <b>' + m + ' kg</b> de ce combustible, en mégajoules ?</p>',
    champs: [{ type: 'num', label: 'Énergie (MJ)', bon: E, tol: 0.5 }],
    etapes: [
      'E = m × PC = ' + m + ' × ' + c.pc + ' = <b>' + nf(E) + ' MJ</b>.',
      'Le pouvoir calorifique est une <b>grandeur quotient</b> : une énergie par unité de masse. ' +
        'Il permet de comparer des combustibles de natures différentes.',
      'Ordre d’idée : le gaz naturel libère environ trois fois plus d’énergie par kilogramme que le bois sec.'
    ]
  };
});

/* ================= 3.1 LA FORME DE LA TERRE ================= */

G('sci-forme', 'sci-eratosthene', 'La méthode d’Ératosthène', 'ent', function(){
  const cas = [
    { L: 40000, a: 7.2, d: 800, r: 'C’est le calcul historique d’Ératosthène, entre Syène et Alexandrie.' },
    { L: 36000, a: 5, d: 500, r: '' }, { L: 36000, a: 8, d: 800, r: '' },
    { L: 36000, a: 12, d: 1200, r: '' }, { L: 45000, a: 4, d: 500, r: '' },
    { L: 45000, a: 8, d: 1000, r: '' }, { L: 45000, a: 12, d: 1500, r: '' },
    { L: 54000, a: 6, d: 900, r: '' }, { L: 54000, a: 10, d: 1500, r: '' }
  ];
  const x = R.pick(cas);
  const terre = x.L === 40000;
  return {
    enonce: '<p>Deux villes ' + (terre ? '' : 'd’une planète ') + 'situées sur le <b>même méridien</b> sont distantes de ' +
            '<b>d = ' + nf(x.d) + ' km</b>.</p>' +
            '<p>Le même jour à midi, le Soleil est exactement à la verticale dans la première, ' +
            'et fait un angle <b>α = ' + nf(x.a) + '°</b> avec la verticale dans la seconde.</p>' +
            '<p>Calcule la longueur du méridien, en kilomètres.</p>',
    champs: [{ type: 'num', label: 'Longueur du méridien (km)', bon: x.L, tol: Math.max(10, x.L * 0.01) }],
    etapes: [
      'L’angle α mesuré est aussi l’<b>angle au centre</b> entre les deux villes.',
      'Il n’y a plus qu’une <b>proportionnalité</b> : l’angle est à 360° ce que la distance est au méridien complet.',
      'L / 360 = d / α, donc L = d × 360 / α = ' + nf(x.d) + ' × 360 ÷ ' + nf(x.a) + ' = <b>' + nf(x.L) + ' km</b>.',
      x.r || 'La même méthode fonctionne sur n’importe quel astre sphérique.'
    ]
  };
});

G('sci-forme', 'sci-rayon', 'Du méridien au rayon', 'app', function(){
  const L = R.pick([40000, 36000, 45000, 54000, 30000, 25000]);
  const Rk = Math.round(L / (2 * Math.PI));
  return {
    enonce: '<p>La longueur du méridien d’un astre sphérique vaut <b>L = ' + nf(L) + ' km</b>.</p>' +
            '<p>Calcule son rayon, en kilomètres, arrondi à l’unité.</p>',
    champs: [{ type: 'num', label: 'Rayon (km)', bon: Rk, tol: Math.max(5, Rk * 0.01) }],
    etapes: [
      'Le méridien est un <b>grand cercle</b> : sa longueur vaut 2πR.',
      'Donc R = L / (2π) = ' + nf(L) + ' ÷ (2 × 3,1416) ≈ <b>' + nf(Rk) + ' km</b>.',
      L === 40000 ? 'C’est bien l’ordre de grandeur du rayon terrestre, environ 6 371 km.'
                  : 'Pour la Terre, L ≈ 40 000 km donne R ≈ 6 371 km.'
    ]
  };
});

G('sci-forme', 'sci-horizon', 'La distance à l’horizon', 'ds', function(){
  const h = R.pick([2, 5, 10, 20, 50, 100, 200, 300]);
  const Rm = 6371e3;
  const d = Math.sqrt(2 * Rm * h);
  const dk = Math.round(d / 1000 * 10) / 10;
  return {
    enonce: '<p>Un observateur a les yeux à la hauteur <b>h = ' + h + ' m</b> au-dessus du niveau de la mer. ' +
            'Le rayon terrestre vaut <b>R = 6 371 km</b>.</p>' +
            '<p>Calcule la distance à l’horizon, en kilomètres, arrondie au dixième.</p>' +
            form('d = √((R + h)² - R²) ≈ √(2 R h)'),
    champs: [{ type: 'num', label: 'Distance à l’horizon (km)', bon: dk, tol: Math.max(0.2, dk * 0.03) }],
    etapes: [
      'Le rayon allant vers le point d’horizon est <b>perpendiculaire</b> au rayon visuel : ' +
        'le triangle centre-observateur-horizon est rectangle, et le <b>théorème de Pythagore</b> s’applique.',
      'Comme h est très petit devant R, la formule se simplifie en d ≈ √(2 R h).',
      'Tout convertir en mètres : R = 6 371 000 m, h = ' + h + ' m.',
      'd ≈ √(2 × 6 371 000 × ' + h + ') = √' + Math.round(2 * Rm * h).toExponential(2).replace('.', ',').replace('e+', ' × 10^') +
        ' ≈ ' + nf(Math.round(d)) + ' m, soit <b>' + nf(dk) + ' km</b>.',
      'Retiens l’ordre de grandeur : debout sur une plage, l’horizon est à environ <b>5 km</b>. ' +
        'Il faut monter très haut pour le repousser beaucoup, car la distance varie comme la racine de la hauteur.'
    ]
  };
});

const ROTONDITE = [
  { q: 'Quelle observation antique prouve la rotondité de la Terre lors d’une éclipse de Lune ?', b: 'L’ombre de la Terre projetée sur la Lune est toujours circulaire',
    v: ['L’ombre de la Terre projetée sur la Lune est toujours circulaire', 'La Lune disparaît complètement',
        'La Lune change de couleur', 'L’éclipse dure plus longtemps aux pôles'] },
  { q: 'Comment un navire disparaît-il à l’horizon ?', b: 'Progressivement, en commençant par la coque puis le mât',
    v: ['Progressivement, en commençant par la coque puis le mât', 'D’un seul coup',
        'En commençant par le mât', 'En devenant flou sans disparaître'] },
  { q: 'Que mesure la méthode d’Ératosthène ?', b: 'La longueur du méridien terrestre, à partir d’un angle et d’une distance',
    v: ['La longueur du méridien terrestre, à partir d’un angle et d’une distance', 'La distance de la Terre au Soleil',
        'Le rayon de la Lune', 'L’âge de la Terre'] },
  { q: 'Sur quoi repose la triangulation de Delambre et Méchain ?', b: 'Une chaîne de triangles dont on mesure les angles et une seule longueur de base',
    v: ['Une chaîne de triangles dont on mesure les angles et une seule longueur de base',
        'La mesure directe de la distance entre deux villes', 'L’observation des éclipses',
        'La mesure de la hauteur du Soleil à midi'] },
  { q: 'Par quoi repère-t-on un point à la surface de la Terre ?', b: 'Sa latitude, sa longitude et son altitude',
    v: ['Sa latitude, sa longitude et son altitude', 'Sa seule latitude',
        'Sa distance à l’équateur uniquement', 'Son fuseau horaire'] },
  { q: 'Quel est le plus court chemin entre deux points de la sphère terrestre ?', b: 'L’arc du grand cercle qui les relie',
    v: ['L’arc du grand cercle qui les relie', 'La ligne droite tracée sur une carte plate',
        'Le trajet passant par l’équateur', 'Le trajet suivant un parallèle'] }
];

G('sci-forme', 'sci-rotondite', 'Preuves et repérage', 'app', function(){
  const x = R.pick(ROTONDITE);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Les avions semblent faire des détours sur une carte plate : ils suivent en réalité ' +
               'le plus court chemin, l’arc de grand cercle.']
  };
});

/* ================= 3.2 L'ÂGE DE LA TERRE ================= */

const AGE_QCM = [
  { q: 'Quel est l’âge de la Terre actuellement admis ?', b: '4,57 × 10⁹ ans',
    v: ['4,57 × 10⁹ ans', '4,57 × 10⁶ ans', '13,8 × 10⁹ ans', '2,5 × 10⁹ ans'] },
  { q: 'Quelle méthode a permis de trancher définitivement la question de l’âge de la Terre ?', b: 'La datation par la radioactivité des minéraux',
    v: ['La datation par la radioactivité des minéraux', 'Le calcul du temps de refroidissement',
        'L’épaisseur des couches sédimentaires', 'L’observation des fossiles'] },
  { q: 'Pourquoi l’estimation de Kelvin était-elle trop faible ?', b: 'Il ignorait la radioactivité, source de chaleur interne',
    v: ['Il ignorait la radioactivité, source de chaleur interne', 'Il se trompait dans ses calculs',
        'Il ne disposait pas de thermomètre', 'Il croyait la Terre plate'] },
  { q: 'Quel argument Darwin a-t-il apporté au débat sur l’âge de la Terre ?', b: 'L’évolution biologique exige des durées très longues',
    v: ['L’évolution biologique exige des durées très longues', 'La Terre refroidit lentement',
        'Les roches contiennent de l’uranium', 'Les continents se déplacent'] },
  { q: 'Pourquoi date-t-on des météorites pour connaître l’âge de la Terre ?', b: 'Elles se sont formées en même temps que le système solaire et n’ont pas été remaniées',
    v: ['Elles se sont formées en même temps que le système solaire et n’ont pas été remaniées',
        'Elles sont plus radioactives que les roches terrestres', 'Elles sont plus faciles à trouver',
        'Elles sont plus anciennes que le système solaire'] }
];

G('sci-age', 'sci-age-qcm', 'La controverse sur l’âge de la Terre', 'app', function(){
  const x = R.pick(AGE_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le message du chapitre : une théorie scientifique peut être discutée, amendée, ' +
               'et même réfutée. C’est ce qui la distingue d’une croyance.']
  };
});

/* ================= 3.3 LA TERRE DANS L'UNIVERS ================= */

const UNIVERS_QCM = [
  { q: 'Pourquoi la Lune nous présente-t-elle toujours la même face ?', b: 'Elle tourne sur elle-même dans le même temps qu’elle fait le tour de la Terre',
    v: ['Elle tourne sur elle-même dans le même temps qu’elle fait le tour de la Terre',
        'Elle ne tourne pas sur elle-même', 'Elle est immobile par rapport aux étoiles',
        'Son autre face est toujours dans l’ombre'] },
  { q: 'À quoi sont dues les phases de la Lune ?', b: 'À la portion de la moitié éclairée que nous voyons depuis la Terre',
    v: ['À la portion de la moitié éclairée que nous voyons depuis la Terre', 'À l’ombre de la Terre sur la Lune',
        'Aux nuages de l’atmosphère terrestre', 'À la rotation de la Terre sur elle-même'] },
  { q: 'Que défend la conception héliocentrique ?', b: 'Que la Terre tourne autour du Soleil',
    v: ['Que la Terre tourne autour du Soleil', 'Que le Soleil tourne autour de la Terre',
        'Que la Terre est immobile au centre du monde', 'Que la Lune tourne autour du Soleil'] },
  { q: 'Qu’est-ce que la zone d’habitabilité d’une étoile ?', b: 'L’intervalle de distances où l’eau liquide peut exister en surface d’une planète',
    v: ['L’intervalle de distances où l’eau liquide peut exister en surface d’une planète',
        'La région où l’étoile émet le plus', 'La zone où les planètes sont rocheuses',
        'La distance à laquelle la gravité s’annule'] },
  { q: 'Quelle proportion de l’eau de la planète est douce ?', b: 'Environ 3 %',
    v: ['Environ 3 %', 'Environ 30 %', 'Environ 50 %', 'Environ 97 %'] },
  { q: 'Quelles conditions permettent à la Terre de conserver de l’eau liquide en surface ?', b: 'La puissance lumineuse du Soleil, la distance au Soleil et la gravité terrestre',
    v: ['La puissance lumineuse du Soleil, la distance au Soleil et la gravité terrestre',
        'Uniquement sa distance au Soleil', 'La présence de la Lune',
        'La rotation de la Terre sur elle-même'] }
];

G('sci-univers', 'sci-univers-qcm', 'La Lune, l’héliocentrisme, l’eau', 'app', function(){
  const x = R.pick(UNIVERS_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Sur l’influence de la Lune, le programme demande de <b>distinguer les arguments scientifiques ' +
               'des croyances</b>.']
  };
});

G('sci-univers', 'sci-eau', 'Répartition de l’eau', 'ent', function(){
  const V = R.pick([1400, 1350, 1386]);           /* millions de km3 */
  const pDouce = 3, pAccessible = R.pick([0.5, 1]);
  const douce = Math.round(V * pDouce / 100 * 10) / 10;
  const acc = Math.round(douce * pAccessible / 100 * 1000) / 1000;
  return {
    enonce: '<p>Le volume total d’eau sur Terre est d’environ <b>' + nf(V) + ' millions de km<sup>3</sup></b>. ' +
            'Environ <b>' + pDouce + ' %</b> de cette eau est douce, et seulement <b>' + nf(pAccessible) + ' %</b> ' +
            'de cette eau douce est directement accessible.</p>' +
            '<p>Calcule le volume d’eau douce, puis celui d’eau douce accessible, en millions de km<sup>3</sup>.</p>',
    champs: [
      { type: 'num', label: 'Eau douce (millions de km³)', bon: douce, tol: Math.max(0.2, douce * 0.02) },
      { type: 'num', label: 'Eau douce accessible (millions de km³)', bon: acc, tol: Math.max(0.005, acc * 0.05) }
    ],
    etapes: [
      'Eau douce : ' + nf(V) + ' × ' + pDouce + ' ÷ 100 = <b>' + nf(douce) + ' millions de km<sup>3</sup></b>.',
      'Eau douce accessible : ' + nf(douce) + ' × ' + nf(pAccessible) + ' ÷ 100 ≈ <b>' + nf(acc) +
        ' million' + (acc >= 2 ? 's' : '') + ' de km<sup>3</sup></b>.',
      'Attention au piège : le second pourcentage porte sur l’<b>eau douce</b>, pas sur le total. ' +
        'On applique donc les pourcentages l’un après l’autre.',
      'À retenir : environ 97 % de l’eau est salée, 3 % est douce, et l’essentiel de cette eau douce ' +
        'est immobilisé dans les glaciers et les eaux souterraines.'
    ]
  };
});

/* ================= 4.1 SON ET MUSIQUE ================= */

G('sci-son', 'sci-harmonique', 'Fondamentale et harmoniques', 'app', function(){
  const f = R.pick([110, 220, 262, 330, 440, 523, 660]);
  const n = R.int(2, 6);
  return {
    enonce: '<p>Un son composé a pour fréquence fondamentale <b>f<sub>1</sub> = ' + nf(f) + ' Hz</b>.</p>' +
            '<p>Quelle est la fréquence de son <b>harmonique de rang ' + n + '</b>, en hertz ?</p>',
    champs: [{ type: 'num', label: 'Fréquence (Hz)', bon: f * n, tol: 0.5 }],
    etapes: [
      'Les harmoniques ont des fréquences <b>multiples entiers</b> de la fondamentale : f<sub>n</sub> = n × f<sub>1</sub>.',
      'f<sub>' + n + '</sub> = ' + n + ' × ' + nf(f) + ' = <b>' + nf(f * n) + ' Hz</b>.',
      'C’est la répartition des harmoniques qui donne son <b>timbre</b> à un instrument : ' +
        'un piano et un violon jouant la même note ont la même fondamentale, mais pas les mêmes harmoniques.',
      'Sur un spectre, la fondamentale est la <b>première</b> raie, pas nécessairement la plus haute.'
    ]
  };
});

G('sci-son', 'sci-intervalle', 'Les intervalles musicaux', 'ent', function(){
  const f = R.pick([110, 220, 264, 330, 440, 528]);
  const int = [
    { n: 'une octave au-dessus', r: 2, d: 'Le rapport 2 pour 1 : c’est la même note, une hauteur plus haut.' },
    { n: 'deux octaves au-dessus', r: 4, d: 'Deux octaves, c’est 2 × 2 = 4, et non 2 + 2.' },
    { n: 'une octave en dessous', r: 0.5, d: 'On divise par 2 pour descendre d’une octave.' },
    { n: 'une quinte au-dessus', r: 1.5, d: 'La quinte correspond au rapport 3/2.' },
    { n: 'une quarte au-dessus', r: 4 / 3, d: 'La quarte correspond au rapport 4/3.' }
  ];
  const x = R.pick(int);
  const res = Math.round(f * x.r * 100) / 100;
  return {
    enonce: '<p>Une note a pour fréquence fondamentale <b>' + nf(f) + ' Hz</b>.</p>' +
            '<p>Quelle est la fréquence de la note située <b>' + x.n + '</b> ?</p>' +
            '<p class="tiny">Octave : rapport 2 · quinte : rapport 3/2 · quarte : rapport 4/3.</p>',
    champs: [{ type: 'num', label: 'Fréquence (Hz)', bon: res, tol: Math.max(0.5, res * 0.01) }],
    etapes: [
      'Un intervalle musical est un <b>rapport</b> de fréquences, jamais une différence.',
      'Fréquence = ' + nf(f) + ' × ' + (x.r === 1.5 ? '3/2' : x.r === 4 / 3 ? '4/3' : x.r === 0.5 ? '1/2' : nf(x.r)) +
        ' ≈ <b>' + nf(res) + ' Hz</b>.',
      x.d,
      'Erreur classique : croire que deux octaves correspondent au rapport 3. Les intervalles se <b>multiplient</b>.'
    ]
  };
});

G('sci-son', 'sci-db', 'Le niveau d’intensité sonore', 'ent', function(){
  const k = R.int(2, 12);                       /* I = 10^-k W/m2 ... */
  const I = Math.pow(10, -(12 - k));            /* I / I0 = 10^k */
  const L = 10 * k;
  return {
    enonce: '<p>Une source émet un son d’intensité <b>I = 10<sup>' + (-(12 - k)) + '</sup> W·m<sup>-2</sup></b>.</p>' +
            '<p>Calcule son niveau d’intensité sonore, en décibels.</p>' +
            form('L = 10 × log(I / I<sub>0</sub>)&nbsp;&nbsp;avec I<sub>0</sub> = 1,0 × 10<sup>-12</sup> W·m<sup>-2</sup>'),
    champs: [{ type: 'num', label: 'Niveau L (dB)', bon: L, tol: 0.5 }],
    etapes: [
      'I / I<sub>0</sub> = 10<sup>' + (-(12 - k)) + '</sup> ÷ 10<sup>-12</sup> = 10<sup>' + k + '</sup>.',
      'L = 10 × log(10<sup>' + k + '</sup>) = 10 × ' + k + ' = <b>' + L + ' dB</b>.',
      L >= 80 ? 'Ce niveau dépasse <b>80 dB</b> : au-delà, un son peut devenir nocif selon son intensité et sa durée d’écoute.'
              : 'Ce niveau reste sous le seuil de 80 dB au-delà duquel un son peut devenir nocif.',
      'Les repères qui sauvent : intensité <b>× 10</b> → <b>+ 10 dB</b> · intensité <b>doublée</b> → <b>+ 3 dB</b>. ' +
        'Les décibels ne s’additionnent pas : deux sources de 60 dB donnent 63 dB, pas 120.'
    ]
  };
});

const SON_QCM = [
  { q: 'À quoi correspond un son pur ?', b: 'À un signal sinusoïdal, donc à une seule fréquence',
    v: ['À un signal sinusoïdal, donc à une seule fréquence', 'À un signal périodique quelconque',
        'À un son de forte intensité', 'À un son sans harmoniques audibles mais composé'] },
  { q: 'Si on raccourcit une corde tendue, le son émis devient…', b: 'Plus aigu',
    v: ['Plus aigu', 'Plus grave', 'Plus fort', 'Inchangé'] },
  { q: 'Si on tend davantage une corde, le son émis devient…', b: 'Plus aigu',
    v: ['Plus aigu', 'Plus grave', 'Plus faible', 'Inchangé'] },
  { q: 'Qu’est-ce qu’une gamme ?', b: 'Une suite finie de notes réparties sur une octave',
    v: ['Une suite finie de notes réparties sur une octave', 'L’ensemble des harmoniques d’un son',
        'La gamme des intensités audibles', 'Une suite de sons purs de même fréquence'] },
  { q: 'Deux sources identiques de 60 dB fonctionnant ensemble produisent…', b: 'Environ 63 dB',
    v: ['Environ 63 dB', '120 dB', '70 dB', '60 dB'] },
  { q: 'Qu’est-ce qui distingue le timbre d’un piano de celui d’un violon sur la même note ?', b: 'La répartition de leurs harmoniques',
    v: ['La répartition de leurs harmoniques', 'Leur fréquence fondamentale',
        'Leur niveau d’intensité sonore', 'La durée du son'] }
];

G('sci-son', 'sci-son-qcm', 'Sons, cordes et décibels', 'app', function(){
  const x = R.pick(SON_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Corde plus courte, plus tendue, ou plus légère : le son monte. Plus longue, plus molle, ' +
               'ou plus lourde : le son descend.']
  };
});

/* ================= 4.2 NUMÉRISATION ================= */

G('sci-numerisation', 'sci-fichier', 'Taille d’un fichier audio', 'ent', function(){
  const fe = R.pick([8000, 16000, 22050, 32000, 44100, 48000]);
  const q = R.pick([8, 16, 24]);
  const duree = R.pick([10, 30, 60, 120, 180, 240]);
  const voies = R.pick([1, 2]);
  const bits = fe * q * duree * voies;
  const Mo = Math.round(bits / 8 / 1e6 * 10) / 10;
  return {
    enonce: '<p>On numérise un son avec les paramètres suivants :</p>' +
            '<ul><li>fréquence d’échantillonnage <b>f<sub>e</sub> = ' + nf(fe) + ' Hz</b></li>' +
            '<li>quantification sur <b>' + q + ' bits</b></li>' +
            '<li>durée <b>' + duree + ' s</b></li>' +
            '<li><b>' + (voies === 1 ? 'mono, 1 voie' : 'stéréo, 2 voies') + '</b></li></ul>' +
            '<p>Calcule la taille du fichier, en mégaoctets, arrondie au dixième. ' +
            'On prendra 1 octet = 8 bits et 1 Mo = 10<sup>6</sup> octets.</p>',
    champs: [{ type: 'num', label: 'Taille (Mo)', bon: Mo, tol: Math.max(0.1, Mo * 0.03) }],
    etapes: [
      'Taille en bits = f<sub>e</sub> × q × durée × voies = ' + nf(fe) + ' × ' + q + ' × ' + duree + ' × ' + voies +
        ' = ' + nf(bits) + ' bits.',
      'En octets : on divise par 8, soit ' + nf(Math.round(bits / 8)) + ' octets.',
      'En mégaoctets : on divise encore par 10<sup>6</sup>, soit <b>' + nf(Mo) + ' Mo</b>.',
      'Le compromis du chapitre : augmenter f<sub>e</sub> ou q rend la numérisation plus fidèle, ' +
        'mais alourdit le fichier dans la même proportion.'
    ]
  };
});

G('sci-numerisation', 'sci-compression', 'Taux de compression', 'ent', function(){
  const init = R.pick([40, 50, 60, 80, 100, 120]);
  const taux = R.pick([60, 70, 75, 80, 85, 90]);
  const comp = Math.round(init * (100 - taux) / 100 * 10) / 10;
  return {
    enonce: '<p>Un fichier audio non comprimé pèse <b>' + nf(init) + ' Mo</b>. Après compression, il pèse ' +
            '<b>' + nf(comp) + ' Mo</b>.</p>' +
            '<p>Calcule le taux de compression, en pourcentage de réduction, arrondi à l’unité.</p>' +
            form('taux = (1 - taille comprimée / taille initiale) × 100'),
    champs: [{ type: 'num', label: 'Taux de compression (%)', bon: taux, tol: 1.5 }],
    etapes: [
      'Rapport des tailles : ' + nf(comp) + ' ÷ ' + nf(init) + ' ≈ ' + nf(Math.round(comp / init * 1000) / 1000) + '.',
      'Taux = (1 - ' + nf(Math.round(comp / init * 1000) / 1000) + ') × 100 ≈ <b>' + taux + ' %</b>.',
      'Le fichier a donc perdu environ ' + taux + ' % de sa taille.',
      'La compression du son est dite <b>avec perte</b> : elle supprime les informations auxquelles ' +
        'l’oreille est peu sensible. Le son n’est pas identique à l’original.'
    ]
  };
});

/* ================= 4.3 L'AUDITION ================= */

const AUDITION_QCM = [
  { q: 'Quelle est la gamme de fréquences audibles par l’être humain ?', b: 'De 20 Hz à 20 000 Hz',
    v: ['De 20 Hz à 20 000 Hz', 'De 2 Hz à 2 000 Hz', 'De 200 Hz à 200 000 Hz', 'De 20 Hz à 2 000 Hz'] },
  { q: 'Quel est le rôle de l’oreille externe ?', b: 'Canaliser les sons du milieu extérieur vers le tympan',
    v: ['Canaliser les sons du milieu extérieur vers le tympan', 'Transformer les vibrations en message nerveux',
        'Amplifier le message nerveux', 'Interpréter la parole et la musique'] },
  { q: 'Que font les cellules ciliées de l’oreille interne ?', b: 'Elles traduisent les vibrations reçues en un message nerveux',
    v: ['Elles traduisent les vibrations reçues en un message nerveux', 'Elles amplifient le son mécaniquement',
        'Elles protègent le tympan', 'Elles filtrent les fréquences aiguës'] },
  { q: 'Au-delà de quel niveau un son peut-il devenir nocif ?', b: '80 dB, selon son intensité et sa durée d’écoute',
    v: ['80 dB, selon son intensité et sa durée d’écoute', '40 dB, quelle que soit la durée',
        '120 dB uniquement', '60 dB, quelle que soit la durée'] },
  { q: 'Les dégâts causés aux cellules ciliées sont-ils réparables ?', b: 'Non, ils peuvent être irréversibles car ces cellules ne se remplacent pas',
    v: ['Non, ils peuvent être irréversibles car ces cellules ne se remplacent pas',
        'Oui, en quelques jours', 'Oui, avec un traitement médicamenteux', 'Oui, elles se régénèrent chaque année'] },
  { q: 'Qu’est-ce qui détermine le risque pour l’oreille interne ?', b: 'L’intensité du son et la durée d’écoute, ensemble',
    v: ['L’intensité du son et la durée d’écoute, ensemble', 'L’intensité du son uniquement',
        'La durée d’écoute uniquement', 'La fréquence du son uniquement'] },
  { q: 'Comment la perception auditive évolue-t-elle avec l’âge ?', b: 'Elle diminue, en commençant par les fréquences aiguës',
    v: ['Elle diminue, en commençant par les fréquences aiguës', 'Elle reste identique toute la vie',
        'Elle diminue en commençant par les fréquences graves', 'Elle augmente jusqu’à 40 ans'] }
];

G('sci-audition', 'sci-audition-qcm', 'L’oreille et les risques', 'app', function(){
  const x = R.pick(AUDITION_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le trajet du son en trois natures différentes : vibration mécanique, puis message nerveux, ' +
               'puis interprétation par le cerveau après apprentissage.']
  };
});

/* ================= 5. PROJET EXPÉRIMENTAL ================= */

const PROJET_QCM = [
  { q: 'Dans un protocole, combien de facteurs doit-on faire varier à la fois ?', b: 'Un seul, tout le reste étant maintenu constant',
    v: ['Un seul, tout le reste étant maintenu constant', 'Deux, pour gagner du temps',
        'Tous ceux qui sont mesurables', 'Aucun, on se contente d’observer'] },
  { q: 'À quoi sert une expérience témoin ?', b: 'À servir de référence, sans le facteur testé',
    v: ['À servir de référence, sans le facteur testé', 'À vérifier que l’appareil fonctionne',
        'À refaire la même mesure une seconde fois', 'À mesurer la température ambiante'] },
  { q: 'Pourquoi répète-t-on une mesure plusieurs fois ?', b: 'Pour en prendre la moyenne et estimer la dispersion',
    v: ['Pour en prendre la moyenne et estimer la dispersion', 'Pour user moins vite le capteur',
        'Parce que la première mesure est toujours fausse', 'Pour remplir le tableau de résultats'] },
  { q: 'Un écart entre la mesure et la valeur attendue signifie-t-il que l’expérience a échoué ?', b: 'Non : il faut l’expliquer, et c’est là que se gagnent les points',
    v: ['Non : il faut l’expliquer, et c’est là que se gagnent les points', 'Oui, il faut recommencer sans le mentionner',
        'Oui, la mesure est à jeter', 'Non, il suffit de l’ignorer'] },
  { q: 'Comment un résultat de mesure doit-il être écrit ?', b: 'Avec son unité et un nombre de chiffres cohérent avec la précision de l’appareil',
    v: ['Avec son unité et un nombre de chiffres cohérent avec la précision de l’appareil',
        'Avec le plus de chiffres possible', 'Sans unité, pour alléger',
        'Arrondi systématiquement à l’entier'] }
];

G('sci-projet', 'sci-demarche', 'La démarche expérimentale', 'app', function(){
  const x = R.pick(PROJET_QCM);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le critère que le correcteur cherche en premier dans un protocole : ' +
               '<b>un seul facteur varie</b>, tout le reste est maintenu constant.']
  };
});

/* ================= EXERCICES RÉDIGÉS ================= */

D('sci-projet', 'sci-protocole', 'Concevoir un protocole expérimental', function(){
  const sujets = [
    { s: 'L’albédo d’une surface dépend-il de sa couleur ?',
      p: 'Éclairer des surfaces de couleurs différentes avec la même lampe, et mesurer la puissance réfléchie ' +
         'avec un luxmètre placé toujours à la même distance et au même angle.',
      f: 'la couleur de la surface', c: 'la lampe, la distance, l’angle, la durée, la surface éclairée' },
    { s: 'La hauteur du son émis par une corde dépend-elle de sa longueur ?',
      p: 'Faire vibrer une même corde, sous une même tension, en faisant varier uniquement sa longueur utile, ' +
         'et relever la fréquence fondamentale au logiciel d’analyse spectrale.',
      f: 'la longueur de la corde', c: 'la tension, la nature de la corde, la façon de la pincer' },
    { s: 'La taille d’un fichier audio dépend-elle de la fréquence d’échantillonnage ?',
      p: 'Numériser le même extrait sonore, de même durée et de même quantification, à plusieurs fréquences ' +
         'd’échantillonnage, puis relever la taille de chaque fichier.',
      f: 'la fréquence d’échantillonnage', c: 'l’extrait, sa durée, la quantification, le nombre de voies' },
    { s: 'La vitesse de refroidissement influence-t-elle la taille des cristaux ?',
      p: 'Préparer une même solution saturée, la répartir en plusieurs récipients identiques, et les faire refroidir ' +
         'à des vitesses différentes. Observer ensuite les cristaux au microscope et mesurer leur taille.',
      f: 'la vitesse de refroidissement', c: 'la solution, sa concentration, le volume, les récipients' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Question de départ :</b></p>' + form(x.s) +
            '<p>Sur ton cahier, rédige un <b>protocole expérimental complet</b> permettant d’y répondre, ' +
            'puis indique comment tu traiterais les résultats et ce que tu critiquerais.</p>',
    aide: 'Un protocole se juge d’abord sur une chose : <b>un seul facteur varie</b>, tout le reste est maintenu constant. ' +
          'N’oublie ni la répétition des mesures, ni l’analyse critique.',
    bareme: [
      { pts: 1, d: '<b>Hypothèse</b> formulée de manière testable, et non une simple reformulation de la question.' },
      { pts: 2, d: '<b>Le facteur que l’on fait varier</b> est nommé explicitement : ici, ' + x.f + '.' },
      { pts: 3, d: '<b>Les facteurs maintenus constants</b> sont listés : ' + x.c + '. ' +
                   'C’est le point le plus discriminant du barème.' },
      { pts: 2, d: '<b>Matériel et grandeur mesurée</b> précisés, avec l’instrument utilisé et son unité.' },
      { pts: 2, d: '<b>Mesures répétées</b> pour chaque valeur du facteur testé, et non une mesure unique.' },
      { pts: 1, d: 'Présence d’un <b>témoin</b> ou d’une mesure de référence, quand le sujet s’y prête.' },
      { pts: 2, d: '<b>Traitement des résultats</b> annoncé : tableau, moyenne, graphique, recherche d’une tendance.' },
      { pts: 3, d: '<b>Analyse critique</b> : sources d’erreur, limites du dispositif, dispersion des mesures, ' +
                   'et ce qui pourrait fausser la conclusion.' },
      { pts: 1, d: '<b>Réponse à la question posée</b>, annoncée comme conditionnelle aux résultats obtenus.' },
      { pts: 0, d: '<span class="tiny">Zéro point, mais vérifie-le : ton protocole est-il réalisable en classe, ' +
                   'avec du matériel ordinaire ?</span>' }
    ]
  };
});

D('sci-bilan', 'sci-schema-bilan', 'Expliquer le bilan radiatif terrestre', function(){
  return {
    enonce: '<p>Sur ton cahier, <b>réalise le schéma</b> des rayonnements reçus et émis par le sol, ' +
            'puis rédige un paragraphe expliquant comment l’albédo et l’effet de serre influencent ' +
            'la température moyenne de la Terre.</p>',
    aide: 'Distingue soigneusement les flèches du rayonnement <b>solaire visible</b> et celles du rayonnement ' +
          '<b>infrarouge</b>. Le mot attendu en conclusion est « équilibre dynamique ».',
    bareme: [
      { pts: 2, d: '<b>Rayonnement solaire incident</b> représenté, arrivant sur la Terre.' },
      { pts: 2, d: '<b>Fraction réfléchie</b> vers l’espace, correctement nommée : c’est l’<b>albédo</b>, ' +
                   'soit environ 30 % en moyenne pour la Terre.' },
      { pts: 2, d: '<b>Rayonnement infrarouge émis par le sol</b>, distingué du rayonnement solaire ' +
                   'par une flèche différente. Sa puissance par unité de surface augmente avec la température.' },
      { pts: 3, d: '<b>Rôle de l’atmosphère</b> : elle absorbe une partie de cet infrarouge, et réémet ' +
                   'de l’infrarouge <b>vers l’espace et vers le sol</b>. Les deux flèches sont représentées.' },
      { pts: 2, d: 'Le point du programme : la puissance reçue par le sol est la <b>somme</b> de celle reçue du Soleil ' +
                   'et de celle reçue de l’atmosphère, et ces deux-là sont du <b>même ordre de grandeur</b>.' },
      { pts: 2, d: '<b>Équilibre dynamique</b> défini : la surface reçoit en moyenne autant de puissance qu’elle en émet, ' +
                   'donc sa température moyenne reste constante. Les échanges ne s’arrêtent pas, ce sont les totaux qui s’égalisent.' },
      { pts: 2, d: '<b>Influence de l’albédo</b> expliquée : s’il augmente, moins d’énergie est absorbée, ' +
                   'donc la température baisse. Exemple de la fonte des glaces.' },
      { pts: 2, d: '<b>Influence de l’effet de serre</b> expliquée : s’il se renforce, davantage d’infrarouge revient ' +
                   'vers le sol, donc la température monte.' },
      { pts: 1, d: '<b>Nuance attendue</b> : l’effet de serre n’est pas une anomalie. Sans lui, la température moyenne ' +
                   'serait d’environ -18 °C au lieu de 15 °C. C’est son renforcement qui pose problème.' }
    ]
  };
});
