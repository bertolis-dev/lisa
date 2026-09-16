/* =========================================================================
   Générateurs d'exercices de spécialité physique-chimie.
   Presque tous sont des calculs : la valeur attendue est recalculée
   exactement en même temps que l'énoncé.
   ========================================================================= */

/* petite aide : écrit un nombre en notation scientifique lisible */
function sci(x, dec){
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = x / Math.pow(10, e);
  return nf(Math.round(m * Math.pow(10, dec === undefined ? 2 : dec)) / Math.pow(10, dec === undefined ? 2 : dec)) +
         ' × 10<sup>' + e + '</sup>';
}

/* ================= 1. TRANSFORMATIONS DE LA MATIÈRE ================= */

const ESPECES = [
  { n: 'l’eau', f: 'H₂O', M: 18.0 },
  { n: 'le dioxyde de carbone', f: 'CO₂', M: 44.0 },
  { n: 'le glucose', f: 'C₆H₁₂O₆', M: 180.0 },
  { n: 'le chlorure de sodium', f: 'NaCl', M: 58.5 },
  { n: 'l’éthanol', f: 'C₂H₆O', M: 46.0 },
  { n: 'le dioxygène', f: 'O₂', M: 32.0 },
  { n: 'l’acide éthanoïque', f: 'C₂H₄O₂', M: 60.0 },
  { n: 'le sulfate de cuivre', f: 'CuSO₄', M: 159.5 }
];

G('pc-suivi', 'pc-quantite', 'Quantité de matière', 'app', function(){
  const e = R.pick(ESPECES);
  const m = R.pick([1, 2, 5, 10, 18, 20, 25, 50, 100]);
  const n = m / e.M;
  const nr = Math.round(n * 1000) / 1000;
  return {
    enonce: '<p>On pèse <b>' + nf(m) + ' g</b> de ' + e.n + ', de formule <b>' + e.f + '</b> ' +
            'et de masse molaire <b>M = ' + nf(e.M) + ' g·mol<sup>-1</sup></b>.</p>' +
            '<p>Calcule la quantité de matière correspondante, en moles, arrondie au millième.</p>',
    champs: [{ type: 'num', label: 'n (mol)', bon: nr, tol: Math.max(0.001, nr * 0.02) }],
    etapes: [
      M('n = frac{m}{M}') + ' = ' + nf(m) + ' ÷ ' + nf(e.M) + ' ≈ <b>' + nf(nr) + ' mol</b>.',
      'Cela représente ' + nr + ' × 6,02 × 10<sup>23</sup> ≈ ' + sci(nr * 6.02e23) + ' entités.',
      'Réflexe : la masse molaire est en g·mol<sup>-1</sup>, donc la masse doit être en <b>grammes</b>.'
    ]
  };
});

G('pc-suivi', 'pc-concentration', 'Concentration et dilution', 'ent', function(){
  if (R.int(0, 1)){
    const C = R.pick([0.010, 0.020, 0.050, 0.10, 0.25, 0.50]);
    const V = R.pick([50, 100, 200, 250, 500]);
    const n = C * V / 1000;
    return {
      enonce: '<p>Une solution a une concentration <b>C = ' + nf(C) + ' mol·L<sup>-1</sup></b>. ' +
              'On en prélève <b>V = ' + nf(V) + ' mL</b>.</p>' +
              '<p>Quelle quantité de matière de soluté ce prélèvement contient-il, en moles ?</p>',
      champs: [{ type: 'num', label: 'n (mol)', bon: Math.round(n * 1e6) / 1e6, tol: Math.max(1e-5, n * 0.02) }],
      etapes: [
        'Conversion indispensable : V = ' + nf(V) + ' mL = ' + nf(V / 1000) + ' L.',
        M('n = C × V') + ' = ' + nf(C) + ' × ' + nf(V / 1000) + ' = <b>' + nf(Math.round(n * 1e6) / 1e6) + ' mol</b>.',
        'L’oubli de la conversion mL → L est l’erreur la plus fréquente du chapitre : elle donne un résultat mille fois trop grand.'
      ]
    };
  }
  const C1 = R.pick([0.10, 0.20, 0.50, 1.0]);
  const F = R.pick([2, 4, 5, 10, 20]);
  const V2 = R.pick([50, 100, 200, 250]);
  const C2 = C1 / F, V1 = V2 / F;
  return {
    enonce: '<p>On veut préparer <b>V<sub>2</sub> = ' + nf(V2) + ' mL</b> d’une solution de concentration ' +
            '<b>C<sub>2</sub> = ' + nf(Math.round(C2 * 1e4) / 1e4) + ' mol·L<sup>-1</sup></b>, ' +
            'à partir d’une solution mère de concentration <b>C<sub>1</sub> = ' + nf(C1) + ' mol·L<sup>-1</sup></b>.</p>' +
            '<p>Quel volume de solution mère faut-il prélever, en millilitres ?</p>',
    champs: [{ type: 'num', label: 'V₁ (mL)', bon: V1, tol: Math.max(0.5, V1 * 0.02) }],
    etapes: [
      'La dilution conserve la quantité de matière de soluté : ' + M('C_1 V_1 = C_2 V_2') + '.',
      M('V_1 = frac{C_2 V_2}{C_1}') + ' = (' + nf(Math.round(C2 * 1e4) / 1e4) + ' × ' + nf(V2) + ') ÷ ' + nf(C1) +
        ' = <b>' + nf(V1) + ' mL</b>.',
      'Le facteur de dilution vaut ici F = C<sub>1</sub>/C<sub>2</sub> = <b>' + F + '</b> : ' +
        'on retrouve V<sub>1</sub> = V<sub>2</sub> ÷ ' + F + '.',
      'Matériel : une pipette jaugée de ' + nf(V1) + ' mL et une fiole jaugée de ' + nf(V2) + ' mL.'
    ]
  };
});

G('pc-suivi', 'pc-limitant', 'Réactif limitant et avancement', 'ds', function(){
  const cas = [
    { eq: '2 H_2 + O_2 → 2 H_2O', a: 2, b: 1, na: 'H₂', nb: 'O₂' },
    { eq: 'CH_4 + 2 O_2 → CO_2 + 2 H_2O', a: 1, b: 2, na: 'CH₄', nb: 'O₂' },
    { eq: 'N_2 + 3 H_2 → 2 NH_3', a: 1, b: 3, na: 'N₂', nb: 'H₂' },
    { eq: '2 Al + 3 Cl_2 → 2 AlCl_3', a: 2, b: 3, na: 'Al', nb: 'Cl₂' },
    { eq: 'Fe + S → FeS', a: 1, b: 1, na: 'Fe', nb: 'S' }
  ];
  const c = R.pick(cas);
  const n1 = R.int(2, 12) / 10, n2 = R.int(2, 12) / 10;
  const q1 = n1 / c.a, q2 = n2 / c.b;
  const xmax = Math.min(q1, q2);
  const lim = q1 < q2 ? c.na : (q2 < q1 ? c.nb : 'les deux, en proportions stœchiométriques');
  const xr = Math.round(xmax * 1000) / 1000;
  const resteA = Math.round((n1 - c.a * xmax) * 1000) / 1000;
  const noms = [c.na, c.nb, 'les deux, en proportions stœchiométriques'];
  return {
    enonce: '<p>On considère la transformation :</p>' + form(M(c.eq)) +
            '<p>On introduit <b>' + nf(n1) + ' mol</b> de ' + c.na + ' et <b>' + nf(n2) + ' mol</b> de ' + c.nb + '.</p>' +
            '<p>Détermine le réactif limitant et l’avancement maximal, puis la quantité de ' + c.na +
            ' restante à l’état final.</p>',
    champs: [
      { type: 'choix', label: 'Réactif limitant', options: noms.slice(), bon: noms.indexOf(lim) },
      { type: 'num', label: 'x max (mol)', bon: xr, tol: Math.max(0.002, xr * 0.03) },
      { type: 'num', label: 'n(' + c.na + ') restante (mol)', bon: resteA, tol: Math.max(0.002, 0.03) }
    ],
    etapes: [
      'On divise chaque quantité initiale par son <b>coefficient stœchiométrique</b> :',
      'pour ' + c.na + ' : ' + nf(n1) + ' ÷ ' + c.a + ' = ' + nf(Math.round(q1 * 1000) / 1000) +
        ' · pour ' + c.nb + ' : ' + nf(n2) + ' ÷ ' + c.b + ' = ' + nf(Math.round(q2 * 1000) / 1000) + '.',
      'Le plus petit quotient donne le réactif limitant : <b>' + lim + '</b>, et ' +
        M('x_{max} = ' + nf(xr)) + ' mol.',
      'Quantité de ' + c.na + ' restante : ' + nf(n1) + ' - ' + c.a + ' × ' + nf(xr) + ' = <b>' + nf(resteA) + ' mol</b>.',
      'Attention : le réactif le moins abondant n’est pas forcément le limitant. ' +
        'C’est le <b>quotient</b> qui décide, pas la quantité brute.'
    ]
  };
});

const POLARITE = [
  { m: 'H₂O, molécule coudée', p: 'Polaire', e: 'Les liaisons O-H sont polarisées et la géométrie coudée ne les compense pas.' },
  { m: 'CO₂, molécule linéaire', p: 'Apolaire', e: 'Les liaisons C=O sont polarisées, mais la symétrie linéaire annule l’effet global. C’est le contre-exemple à connaître.' },
  { m: 'CH₄, molécule tétraédrique', p: 'Apolaire', e: 'Les liaisons C-H sont très peu polarisées et la symétrie est parfaite.' },
  { m: 'NH₃, molécule pyramidale', p: 'Polaire', e: 'Les liaisons N-H sont polarisées et le doublet non liant rompt la symétrie.' },
  { m: 'O₂, molécule diatomique', p: 'Apolaire', e: 'Deux atomes identiques : la liaison n’est pas polarisée du tout.' },
  { m: 'HCl, molécule diatomique', p: 'Polaire', e: 'Le chlore est bien plus électronégatif que l’hydrogène.' },
  { m: 'le cyclohexane', p: 'Apolaire', e: 'Une chaîne carbonée sans groupe fonctionnel est apolaire : c’est un bon solvant des huiles.' }
];

G('pc-entites', 'pc-polarite', 'Polaire ou apolaire ?', 'app', function(){
  const x = R.pick(POLARITE);
  return {
    enonce: '<p>Cette entité est-elle polaire ou apolaire ?</p>' + form('<b>' + x.m + '</b>'),
    qcm: { options: ['Polaire', 'Apolaire'], bon: x.p === 'Polaire' ? 0 : 1 },
    etapes: [
      'Elle est <b>' + x.p.toLowerCase() + '</b>.', x.e,
      'La méthode en deux temps : d’abord les <b>liaisons</b> sont-elles polarisées, ' +
        'puis la <b>géométrie</b> compense-t-elle ou non.'
    ]
  };
});

const FAMILLES = [
  { n: 'propan-1-ol', f: 'Alcool', g: 'le groupe hydroxyle -OH', c: 3 },
  { n: 'butan-2-ol', f: 'Alcool', g: 'le groupe hydroxyle -OH', c: 4 },
  { n: 'propanal', f: 'Aldéhyde', g: 'le groupe carbonyle en bout de chaîne', c: 3 },
  { n: 'butanal', f: 'Aldéhyde', g: 'le groupe carbonyle en bout de chaîne', c: 4 },
  { n: 'propanone', f: 'Cétone', g: 'le groupe carbonyle à l’intérieur de la chaîne', c: 3 },
  { n: 'pentan-2-one', f: 'Cétone', g: 'le groupe carbonyle à l’intérieur de la chaîne', c: 5 },
  { n: 'acide éthanoïque', f: 'Acide carboxylique', g: 'le groupe carboxyle -COOH', c: 2 },
  { n: 'acide propanoïque', f: 'Acide carboxylique', g: 'le groupe carboxyle -COOH', c: 3 },
  { n: 'hexane', f: 'Alcane', g: 'aucun groupe caractéristique, uniquement C et H', c: 6 },
  { n: 'méthane', f: 'Alcane', g: 'aucun groupe caractéristique, uniquement C et H', c: 1 }
];
const NOMS_FAM = ['Alcane', 'Alcool', 'Aldéhyde', 'Cétone', 'Acide carboxylique'];

G('pc-synthese', 'pc-famille', 'Famille fonctionnelle', 'app', function(){
  const x = R.pick(FAMILLES);
  return {
    enonce: '<p>À quelle famille appartient cette espèce, et combien d’atomes de carbone ' +
            'sa chaîne principale compte-t-elle ?</p>' + form('<b>' + x.n + '</b>'),
    champs: [
      { type: 'choix', label: 'Famille', options: NOMS_FAM.slice(), bon: NOMS_FAM.indexOf(x.f) },
      { type: 'num', label: 'Nombre de carbones', bon: x.c, tol: 0 }
    ],
    etapes: [
      '<b>' + x.n + '</b> est un' + (x.f === 'Cétone' ? 'e ' : ' ') + x.f.toLowerCase() +
        ', reconnaissable à ' + x.g + '.',
      'Le préfixe donne le nombre de carbones : méth- 1 · éth- 2 · prop- 3 · but- 4 · pent- 5 · hex- 6 · hept- 7 · oct- 8. ' +
        'Ici : <b>' + x.c + '</b>.',
      'Aldéhyde ou cétone ? Regarder si le carbone du groupe C=O porte un <b>H</b> : si oui, c’est un aldéhyde.'
    ]
  };
});

G('pc-synthese', 'pc-combustion', 'Équilibrer une combustion', 'ent', function(){
  const alcanes = [
    { n: 'méthane', f: 'CH_4', x: 1, y: 4 },
    { n: 'éthane', f: 'C_2H_6', x: 2, y: 6 },
    { n: 'propane', f: 'C_3H_8', x: 3, y: 8 },
    { n: 'butane', f: 'C_4H_{10}', x: 4, y: 10 },
    { n: 'pentane', f: 'C_5H_{12}', x: 5, y: 12 },
    { n: 'octane', f: 'C_8H_{18}', x: 8, y: 18 }
  ];
  const a = R.pick(alcanes);
  const o2 = a.x + a.y / 4;           /* peut être demi-entier */
  const dbl = (o2 % 1 !== 0);
  const co2 = dbl ? 2 * a.x : a.x;
  const h2o = dbl ? a.y : a.y / 2;
  const nO2 = dbl ? 2 * o2 : o2;
  const coefAlc = dbl ? 2 : 1;
  return {
    enonce: '<p>Équilibre l’équation de la combustion complète du <b>' + a.n + '</b> ' +
            'dans le dioxygène, avec des coefficients <b>entiers les plus petits possibles</b>.</p>' +
            form(M(coefAlc === 1 ? a.f : '... ' + a.f) + ' + ... O<sub>2</sub> → ... CO<sub>2</sub> + ... H<sub>2</sub>O'),
    champs: [
      { type: 'num', label: 'Coefficient de ' + a.n.charAt(0).toUpperCase() + a.n.slice(1), bon: coefAlc, tol: 0 },
      { type: 'num', label: 'Coefficient de O₂', bon: nO2, tol: 0 },
      { type: 'num', label: 'Coefficient de CO₂', bon: co2, tol: 0 },
      { type: 'num', label: 'Coefficient de H₂O', bon: h2o, tol: 0 }
    ],
    etapes: [
      'Méthode : équilibrer d’abord le <b>carbone</b>, puis l’<b>hydrogène</b>, puis l’<b>oxygène</b>.',
      'Carbone : ' + a.x + ' atome' + (a.x > 1 ? 's' : '') + ' dans la molécule, donc ' + a.x +
        ' CO<sub>2</sub> par molécule brûlée.',
      'Hydrogène : ' + a.y + ' atomes, donc ' + (a.y / 2) + ' H<sub>2</sub>O par molécule brûlée.',
      'Oxygène : il en faut ' + a.x + ' × 2 + ' + (a.y / 2) + ' = ' + nf(2 * a.x + a.y / 2) +
        ', soit ' + nf(o2) + ' molécules de O<sub>2</sub>.',
      dbl ? 'Ce coefficient n’est pas entier : on <b>double toute l’équation</b>. Résultat : ' +
              coefAlc + ' ' + a.n + ' + ' + nO2 + ' O₂ → ' + co2 + ' CO₂ + ' + h2o + ' H₂O.'
          : 'Tous les coefficients sont déjà entiers. Résultat : ' + a.n + ' + ' + nO2 +
              ' O₂ → ' + co2 + ' CO₂ + ' + h2o + ' H₂O.'
    ]
  };
});

/* ================= 2. MOUVEMENT ET INTERACTIONS ================= */

G('pc-champs', 'pc-gravitation', 'Force et champ de gravitation', 'ent', function(){
  const cas = [
    { n: 'la Terre', Mm: 5.97e24, R: 6.37e6 },
    { n: 'la Lune', Mm: 7.35e22, R: 1.74e6 },
    { n: 'Mars', Mm: 6.42e23, R: 3.39e6 },
    { n: 'Jupiter', Mm: 1.90e27, R: 6.99e7 }
  ];
  const c = R.pick(cas);
  const m = R.pick([1, 2, 5, 10, 50, 60, 70, 80]);
  const G = 6.67e-11;
  const g = G * c.Mm / (c.R * c.R);
  const F = m * g;
  const gr = Math.round(g * 100) / 100;
  const Fr = Math.round(F * 10) / 10;
  return {
    enonce: '<p>Un objet de masse <b>m = ' + nf(m) + ' kg</b> est posé à la surface de <b>' + c.n + '</b>, ' +
            'de masse <b>M = ' + sci(c.Mm) + ' kg</b> et de rayon <b>R = ' + sci(c.R) + ' m</b>.</p>' +
            '<p>Calcule la valeur du champ de gravitation à la surface, puis celle du poids de l’objet.</p>' +
            form(M('g = G frac{M}{R^{2}}') + ' avec G = 6,67 × 10<sup>-11</sup> N·m²·kg<sup>-2</sup>'),
    champs: [
      { type: 'num', label: 'g (N·kg⁻¹)', bon: gr, tol: Math.max(0.05, gr * 0.03) },
      { type: 'num', label: 'Poids (N)', bon: Fr, tol: Math.max(0.5, Fr * 0.03) }
    ],
    etapes: [
      'R<sup>2</sup> = (' + sci(c.R) + ')<sup>2</sup> = ' + sci(c.R * c.R) + ' m².',
      M('g = frac{6,67 × 10^{-11} × ' + sci(c.Mm).replace(' × 10<sup>', 'e').replace('</sup>', '') + '}{R^{2}}') +
        ' ≈ <b>' + nf(gr) + ' N·kg<sup>-1</sup></b>.',
      'Poids : P = m × g = ' + nf(m) + ' × ' + nf(gr) + ' ≈ <b>' + nf(Fr) + ' N</b>.',
      'Le champ ne dépend <b>que</b> de l’astre, jamais de l’objet posé dessus. ' +
        'Sur Terre on retrouve bien g ≈ 9,8 N·kg<sup>-1</sup>.'
    ]
  };
});

G('pc-champs', 'pc-distance', 'L’effet de la distance', 'app', function(){
  const k = R.pick([2, 3, 4, 5, 10]);
  const sens = R.int(0, 1);
  const f = sens ? 1 / (k * k) : k * k;
  const opts = ['multipliée par ' + (k * k), 'divisée par ' + (k * k),
                'multipliée par ' + k, 'divisée par ' + k];
  const bon = sens ? 'divisée par ' + (k * k) : 'multipliée par ' + (k * k);
  return {
    enonce: '<p>Deux corps s’attirent par gravitation. On ' + (sens ? '<b>multiplie</b>' : '<b>divise</b>') +
            ' leur distance par <b>' + k + '</b>, sans changer les masses.</p>' +
            '<p>Que devient la valeur de la force ?</p>',
    qcm: { options: opts, bon: opts.indexOf(bon) },
    etapes: [
      'La force varie en <b>1/d²</b> : c’est le carré de la distance qui compte.',
      (sens ? 'Distance × ' + k + ' → force ÷ ' + k + '² = ÷ ' + (k * k) + '.'
            : 'Distance ÷ ' + k + ' → force × ' + k + '² = × ' + (k * k) + '.'),
      'L’erreur classique est d’oublier le carré et de répondre ' + (sens ? '« divisée par ' + k : '« multipliée par ' + k) + ' ».',
      'La même loi en 1/d² vaut pour l’interaction électrostatique.'
    ]
  };
});

G('pc-fluide', 'pc-pression', 'Pression dans un liquide', 'ent', function(){
  const liq = [
    { n: 'l’eau douce', rho: 1000 }, { n: 'l’eau de mer', rho: 1030 },
    { n: 'l’huile', rho: 920 }, { n: 'le mercure', rho: 13600 }
  ];
  const l = R.pick(liq);
  const h = R.pick([1, 2, 5, 10, 20, 50, 100]);
  const g = 9.8, patm = 1.013e5;
  const p = patm + l.rho * g * h;
  const pr = Math.round(p);
  return {
    enonce: '<p>On plonge un capteur à la profondeur <b>h = ' + nf(h) + ' m</b> dans ' + l.n +
            ', de masse volumique <b>ρ = ' + nf(l.rho) + ' kg·m<sup>-3</sup></b>.</p>' +
            '<p>Calcule la pression en ce point, en pascals, arrondie à l’unité. ' +
            'On prend g = 9,8 N·kg<sup>-1</sup> et une pression atmosphérique de 1,013 × 10<sup>5</sup> Pa.</p>',
    champs: [{ type: 'num', label: 'p (Pa)', bon: pr, tol: Math.max(50, pr * 0.01) }],
    etapes: [
      M('p = p_{atm} + ρ g h'),
      'ρ g h = ' + nf(l.rho) + ' × 9,8 × ' + nf(h) + ' = ' + nf(Math.round(l.rho * g * h)) + ' Pa.',
      'p = 101 300 + ' + nf(Math.round(l.rho * g * h)) + ' ≈ <b>' + nf(pr) + ' Pa</b>, ' +
        'soit environ ' + nf(Math.round(pr / 1e5 * 100) / 100) + ' bar.',
      'Repère à retenir : dans l’eau, la pression augmente d’environ <b>1 bar tous les 10 mètres</b>.'
    ]
  };
});

G('pc-fluide', 'pc-mariotte', 'La loi de Mariotte', 'app', function(){
  const p1 = R.pick([1.0, 1.5, 2.0, 2.5, 3.0]);
  const V1 = R.pick([2, 4, 5, 10, 20]);
  const V2 = R.pick([1, 2, 8, 25, 50]).valueOf();
  const p2 = p1 * V1 / V2;
  const pr = Math.round(p2 * 1000) / 1000;
  return {
    enonce: '<p>Une quantité de gaz occupe un volume <b>V<sub>1</sub> = ' + nf(V1) + ' L</b> ' +
            'sous une pression <b>p<sub>1</sub> = ' + nf(p1) + ' bar</b>.</p>' +
            '<p>À <b>température constante</b>, on modifie le volume jusqu’à <b>V<sub>2</sub> = ' + nf(V2) + ' L</b>. ' +
            'Quelle est la nouvelle pression, en bar ?</p>',
    champs: [{ type: 'num', label: 'p₂ (bar)', bon: pr, tol: Math.max(0.01, pr * 0.02) }],
    etapes: [
      'À température constante, ' + M('p_1 V_1 = p_2 V_2') + '.',
      M('p_2 = frac{p_1 V_1}{V_2}') + ' = (' + nf(p1) + ' × ' + nf(V1) + ') ÷ ' + nf(V2) +
        ' = <b>' + nf(pr) + ' bar</b>.',
      V2 < V1 ? 'Le volume diminue, donc la pression <b>augmente</b> : c’est cohérent.'
              : 'Le volume augmente, donc la pression <b>diminue</b> : c’est cohérent.',
      'La loi de Mariotte ne vaut que pour un <b>gaz</b>, et seulement à température constante.'
    ]
  };
});

G('pc-mouvement', 'pc-vitesse', 'Vitesse et conversion', 'app', function(){
  const v = R.pick([18, 36, 54, 72, 90, 108, 130]);
  const ms = Math.round(v / 3.6 * 100) / 100;
  const t = R.pick([2, 5, 10, 20, 30]);
  const d = Math.round(ms * t * 10) / 10;
  return {
    enonce: '<p>Un véhicule roule à <b>' + nf(v) + ' km·h<sup>-1</sup></b>.</p>' +
            '<p>Convertis cette vitesse en mètres par seconde, puis calcule la distance parcourue ' +
            'en <b>' + t + ' s</b> à cette vitesse.</p>',
    champs: [
      { type: 'num', label: 'v (m·s⁻¹)', bon: ms, tol: Math.max(0.05, ms * 0.02) },
      { type: 'num', label: 'd (m)', bon: d, tol: Math.max(0.5, d * 0.02) }
    ],
    etapes: [
      'Pour passer des km·h<sup>-1</sup> aux m·s<sup>-1</sup>, on <b>divise par 3,6</b> : ' +
        nf(v) + ' ÷ 3,6 ≈ <b>' + nf(ms) + ' m·s<sup>-1</sup></b>.',
      M('d = v × Δt') + ' = ' + nf(ms) + ' × ' + t + ' ≈ <b>' + nf(d) + ' m</b>.',
      'Repère utile : 36 km·h<sup>-1</sup> valent exactement 10 m·s<sup>-1</sup>.'
    ]
  };
});

const NEWTON = [
  { s: 'Une bille tombe en chute libre, de plus en plus vite.', f: 'Non nulle',
    e: 'La valeur de la vitesse augmente : le vecteur vitesse varie, donc la force résultante n’est pas nulle.' },
  { s: 'Un palet glisse en ligne droite à vitesse constante sur une table à coussin d’air.', f: 'Nulle',
    e: 'Mouvement rectiligne uniforme : d’après le principe d’inertie, la somme des forces est nulle.' },
  { s: 'Une voiture prend un virage à vitesse constante.', f: 'Non nulle',
    e: 'La <b>direction</b> du vecteur vitesse change, même si sa valeur ne change pas. ' +
       'C’est le piège classique du chapitre.' },
  { s: 'Un livre est posé, immobile, sur une table.', f: 'Nulle',
    e: 'Au repos dans un référentiel galiléen : le poids et la réaction du support se compensent.' },
  { s: 'Un skieur ralentit sur une portion plate.', f: 'Non nulle',
    e: 'La vitesse diminue : les frottements exercent une force résultante opposée au mouvement.' },
  { s: 'Une station spatiale décrit une orbite circulaire à vitesse constante.', f: 'Non nulle',
    e: 'La trajectoire est courbe, donc la direction du vecteur vitesse change en permanence : ' +
       'la gravitation fournit la force résultante.' }
];

G('pc-mouvement', 'pc-newton', 'La force résultante est-elle nulle ?', 'ent', function(){
  const x = R.pick(NEWTON);
  return {
    enonce: '<p>Dans cette situation, la somme des forces exercées sur le système est-elle nulle ?</p>' +
            cit(x.s),
    qcm: { options: ['Nulle', 'Non nulle'], bon: x.f === 'Nulle' ? 0 : 1 },
    etapes: [
      'La force résultante est <b>' + x.f.toLowerCase() + '</b>.', x.e,
      'La règle : la somme des forces est nulle <b>si et seulement si</b> le vecteur vitesse ne varie pas, ' +
        'ni en valeur, ni en direction.'
    ]
  };
});

/* ================= 3. ÉNERGIE ================= */

G('pc-elec', 'pc-puissance', 'Puissance et énergie électriques', 'app', function(){
  const U = R.pick([5, 12, 24, 230]);
  const I = R.pick([0.1, 0.5, 1, 2, 5, 10]);
  const t = R.pick([60, 300, 600, 1800, 3600]);
  const P = U * I;
  const E = P * t;
  return {
    enonce: '<p>Un appareil fonctionne sous une tension <b>U = ' + nf(U) + ' V</b> ' +
            'et est traversé par un courant d’intensité <b>I = ' + nf(I) + ' A</b> pendant <b>' + nf(t) + ' s</b>.</p>' +
            '<p>Calcule la puissance, puis l’énergie consommée en joules.</p>',
    champs: [
      { type: 'num', label: 'P (W)', bon: P, tol: Math.max(0.05, P * 0.02) },
      { type: 'num', label: 'E (J)', bon: E, tol: Math.max(1, E * 0.02) }
    ],
    etapes: [
      M('P = U × I') + ' = ' + nf(U) + ' × ' + nf(I) + ' = <b>' + nf(P) + ' W</b>.',
      M('E = P × Δt') + ' = ' + nf(P) + ' × ' + nf(t) + ' = <b>' + nf(E) + ' J</b>.',
      'Soit ' + nf(Math.round(E / 3.6e6 * 10000) / 10000) + ' kWh, puisque 1 kWh = 3,6 × 10<sup>6</sup> J.',
      'Les joules exigent une durée en <b>secondes</b>. Une durée en heures donne des wattheures.'
    ]
  };
});

G('pc-elec', 'pc-rendement', 'Rendement', 'ent', function(){
  const Ea = R.pick([100, 200, 500, 1000, 2000, 5000]);
  const r = R.pick([0.25, 0.30, 0.40, 0.55, 0.60, 0.75, 0.85, 0.90]);
  const Eu = Math.round(Ea * r);
  const perdue = Ea - Eu;
  const rp = Math.round(Eu / Ea * 1000) / 10;
  return {
    enonce: '<p>Un convertisseur reçoit <b>' + nf(Ea) + ' J</b> et restitue <b>' + nf(Eu) + ' J</b> ' +
            'sous la forme utile attendue.</p>' +
            '<p>Calcule son rendement en pourcentage, et l’énergie perdue en joules.</p>',
    champs: [
      { type: 'num', label: 'Rendement (%)', bon: rp, tol: 0.6 },
      { type: 'num', label: 'Énergie perdue (J)', bon: perdue, tol: 1 }
    ],
    etapes: [
      M('η = frac{E_{utile}}{E_{absorbée}}') + ' = ' + nf(Eu) + ' ÷ ' + nf(Ea) +
        ' ≈ ' + nf(Math.round(Eu / Ea * 1000) / 1000) + ', soit <b>' + nf(rp) + ' %</b>.',
      'Énergie perdue : ' + nf(Ea) + ' - ' + nf(Eu) + ' = <b>' + nf(perdue) + ' J</b>, ' +
        'dissipée essentiellement sous forme thermique.',
      'Un rendement est toujours compris entre 0 et 1 : une valeur supérieure à 1 signale une erreur de calcul.'
    ]
  };
});

G('pc-meca', 'pc-energie-meca', 'Énergie cinétique et potentielle', 'ent', function(){
  const m = R.pick([0.5, 1, 2, 5, 10, 60, 70]);
  const v = R.pick([2, 5, 10, 15, 20]);
  const z = R.pick([1, 2, 5, 10, 20, 50]);
  const g = 9.8;
  const Ec = 0.5 * m * v * v;
  const Ep = m * g * z;
  const Em = Ec + Ep;
  return {
    enonce: '<p>Un système de masse <b>m = ' + nf(m) + ' kg</b> se déplace à la vitesse ' +
            '<b>v = ' + nf(v) + ' m·s<sup>-1</sup></b>, à l’altitude <b>z = ' + nf(z) + ' m</b> ' +
            'au-dessus de l’origine choisie. On prend g = 9,8 N·kg<sup>-1</sup>.</p>' +
            '<p>Calcule son énergie cinétique, son énergie potentielle de pesanteur et son énergie mécanique.</p>',
    champs: [
      { type: 'num', label: 'Ec (J)', bon: Math.round(Ec * 10) / 10, tol: Math.max(0.5, Ec * 0.02) },
      { type: 'num', label: 'Epp (J)', bon: Math.round(Ep * 10) / 10, tol: Math.max(0.5, Ep * 0.02) },
      { type: 'num', label: 'Em (J)', bon: Math.round(Em * 10) / 10, tol: Math.max(1, Em * 0.02) }
    ],
    etapes: [
      M('E_c = frac{1}{2} m v^{2}') + ' = 0,5 × ' + nf(m) + ' × ' + nf(v) + '² = <b>' + nf(Math.round(Ec * 10) / 10) + ' J</b>.',
      M('E_{pp} = m g z') + ' = ' + nf(m) + ' × 9,8 × ' + nf(z) + ' = <b>' + nf(Math.round(Ep * 10) / 10) + ' J</b>.',
      M('E_m = E_c + E_{pp}') + ' = <b>' + nf(Math.round(Em * 10) / 10) + ' J</b>.',
      'L’énergie cinétique varie comme le <b>carré</b> de la vitesse : doubler la vitesse la multiplie par 4. ' +
        'C’est l’argument de sécurité routière du chapitre.'
    ]
  };
});

G('pc-meca', 'pc-chute', 'Conservation de l’énergie mécanique', 'ds', function(){
  const h = R.pick([1.25, 5, 10, 20, 45, 80]);
  const g = 9.8;
  const v = Math.sqrt(2 * g * h);
  const vr = Math.round(v * 100) / 100;
  return {
    enonce: '<p>Un objet est lâché <b>sans vitesse initiale</b> depuis une hauteur <b>h = ' + nf(h) + ' m</b>. ' +
            'On néglige les frottements et on prend g = 9,8 N·kg<sup>-1</sup>.</p>' +
            '<p>Quelle est la valeur de sa vitesse juste avant l’impact, en m·s<sup>-1</sup>, arrondie au centième ?</p>',
    champs: [{ type: 'num', label: 'v (m·s⁻¹)', bon: vr, tol: Math.max(0.05, vr * 0.02) }],
    etapes: [
      'Sans frottements, l’énergie mécanique se <b>conserve</b> : ' + M('E_m(@depart) = E_m(@arrivee)') + '.',
      'Au départ : v = 0, donc ' + M('E_m = m g h') + '. À l’arrivée : z = 0, donc ' + M('E_m = frac{1}{2} m v^{2}') + '.',
      M('m g h = frac{1}{2} m v^{2}') + ' · la masse se <b>simplifie</b> : ' + M('v = sqrt{2 g h}') + '.',
      'v = √(2 × 9,8 × ' + nf(h) + ') = √' + nf(Math.round(2 * g * h * 100) / 100) + ' ≈ <b>' + nf(vr) + ' m·s<sup>-1</sup></b>.',
      'Conséquence remarquable : la vitesse d’arrivée <b>ne dépend pas de la masse</b>. ' +
        'Une bille de plomb et une bille de bois arrivent à la même vitesse, en l’absence d’air.'
    ]
  };
});

/* ================= 4. ONDES ET SIGNAUX ================= */

G('pc-ondes', 'pc-longueur-onde', 'Longueur d’onde et fréquence', 'ent', function(){
  const mil = [
    { n: 'l’air', v: 340 }, { n: 'l’eau', v: 1500 },
    { n: 'l’acier', v: 5000 }, { n: 'le béton', v: 4000 }
  ];
  const m = R.pick(mil);
  const f = R.pick([100, 200, 440, 500, 1000, 2000, 4000]);
  const lam = m.v / f;
  const lr = Math.round(lam * 10000) / 10000;
  return {
    enonce: '<p>Une onde sonore de fréquence <b>f = ' + nf(f) + ' Hz</b> se propage dans <b>' + m.n +
            '</b>, où sa célérité vaut <b>v = ' + nf(m.v) + ' m·s<sup>-1</sup></b>.</p>' +
            '<p>Calcule sa longueur d’onde, en mètres, arrondie au dix-millième.</p>',
    champs: [{ type: 'num', label: 'λ (m)', bon: lr, tol: Math.max(0.0005, lr * 0.02) }],
    etapes: [
      M('λ = frac{v}{f}') + ' = ' + nf(m.v) + ' ÷ ' + nf(f) + ' ≈ <b>' + nf(lr) + ' m</b>.',
      'La <b>fréquence</b> est imposée par la source et ne change pas de milieu en milieu.',
      'La <b>longueur d’onde</b>, elle, dépend du milieu, puisqu’elle dépend de la célérité. ' +
        'La même note a une longueur d’onde plus grande dans l’eau que dans l’air.',
      'Autre écriture : ' + M('λ = v × T') + ', avec ' + M('T = frac{1}{f}') + '.'
    ]
  };
});

G('pc-ondes', 'pc-retard', 'Retard et distance', 'app', function(){
  const mil = [{ n: 'l’air', v: 340 }, { n: 'l’eau', v: 1500 }, { n: 'l’acier', v: 5000 }];
  const m = R.pick(mil);
  const d = R.pick([17, 34, 170, 340, 680, 1500, 3000]);
  const dt = d / m.v;
  const dr = Math.round(dt * 10000) / 10000;
  return {
    enonce: '<p>Une onde se propage dans <b>' + m.n + '</b> à la célérité <b>v = ' + nf(m.v) +
            ' m·s<sup>-1</sup></b>. Elle parcourt une distance <b>d = ' + nf(d) + ' m</b>.</p>' +
            '<p>Quel est le retard entre l’émission et la réception, en secondes ?</p>',
    champs: [{ type: 'num', label: 'Retard (s)', bon: dr, tol: Math.max(0.0005, dr * 0.02) }],
    etapes: [
      M('Δt = frac{d}{v}') + ' = ' + nf(d) + ' ÷ ' + nf(m.v) + ' ≈ <b>' + nf(dr) + ' s</b>.',
      'Une onde transporte de l’<b>énergie</b>, pas de la matière : le milieu oscille sur place.',
      'Application classique : compter les secondes entre l’éclair et le tonnerre. ' +
        'Trois secondes correspondent à environ un kilomètre.'
    ]
  };
});

G('pc-lumiere', 'pc-photon', 'Énergie d’un photon', 'ent', function(){
  const cas = [
    { n: 'un ultraviolet', l: 300 }, { n: 'une lumière violette', l: 400 },
    { n: 'une lumière verte', l: 550 }, { n: 'une lumière rouge', l: 700 },
    { n: 'un infrarouge', l: 1000 }
  ];
  const c = R.pick(cas);
  const h = 6.63e-34, cel = 3.00e8;
  const E = h * cel / (c.l * 1e-9);
  const Er = Math.round(E / 1e-19 * 100) / 100;
  return {
    enonce: '<p>Un photon correspond à <b>' + c.n + '</b> de longueur d’onde <b>λ = ' + nf(c.l) + ' nm</b>.</p>' +
            '<p>Calcule son énergie, exprimée en <b>10<sup>-19</sup> J</b>, arrondie au centième.</p>' +
            form(M('E = frac{h c}{λ}') + ' avec h = 6,63 × 10<sup>-34</sup> J·s et c = 3,00 × 10<sup>8</sup> m·s<sup>-1</sup>'),
    champs: [{ type: 'num', label: 'E (× 10⁻¹⁹ J)', bon: Er, tol: Math.max(0.02, Er * 0.02) }],
    etapes: [
      'Conversion obligatoire : λ = ' + nf(c.l) + ' nm = ' + nf(c.l) + ' × 10<sup>-9</sup> m.',
      'E = (6,63 × 10<sup>-34</sup> × 3,00 × 10<sup>8</sup>) ÷ (' + nf(c.l) + ' × 10<sup>-9</sup>) ≈ ' +
        sci(E) + ' J, soit <b>' + nf(Er) + ' × 10<sup>-19</sup> J</b>.',
      'Plus la longueur d’onde est <b>courte</b>, plus le photon est <b>énergétique</b>. ' +
        'C’est pourquoi les ultraviolets sont dangereux pour la peau et pas les infrarouges.',
      'Appliquer la formule en nanomètres donne un résultat 10<sup>9</sup> fois trop grand : ' +
        'c’est l’erreur la plus fréquente.'
    ]
  };
});

G('pc-lumiere', 'pc-lentille', 'Lentille mince convergente', 'ds', function(){
  const f = R.pick([0.05, 0.10, 0.20, 0.25, 0.50]);
  const k = R.pick([2, 3, 4, 5]);
  const OA = -k * f;                          /* objet réel, avant la lentille */
  const OAp = 1 / (1 / f + 1 / OA);           /* relation de conjugaison */
  const gam = OAp / OA;
  const or_ = Math.round(OAp * 10000) / 10000;
  const gr = Math.round(gam * 1000) / 1000;
  return {
    enonce: '<p>Une lentille mince convergente a une distance focale <b>f′ = ' + nf(f) + ' m</b>. ' +
            'Un objet est placé à <b>' + nf(k * f) + ' m</b> devant elle, ' +
            'donc ' + M('@OA = ' + nf(OA)) + ' m en valeur algébrique.</p>' +
            '<p>Calcule la position de l’image et le grandissement.</p>' +
            form(M('frac{1}{@OA\'} - frac{1}{@OA} = frac{1}{f\'}') + ' et ' + M('γ = frac{@OA\'}{@OA}')),
    champs: [
      { type: 'num', label: 'OA′ (m)', bon: or_, tol: Math.max(0.002, Math.abs(or_) * 0.03) },
      { type: 'num', label: 'Grandissement γ', bon: gr, tol: Math.max(0.02, Math.abs(gr) * 0.03) }
    ],
    etapes: [
      'On isole : ' + M('frac{1}{@OA\'} = frac{1}{f\'} + frac{1}{@OA}') + ' = 1 ÷ ' + nf(f) +
        ' + 1 ÷ (' + nf(OA) + ') = ' + nf(Math.round((1 / f + 1 / OA) * 1000) / 1000) + '.',
      'Donc ' + M('@OA\'') + ' ≈ <b>' + nf(or_) + ' m</b>. La valeur est positive : ' +
        'l’image se forme <b>après</b> la lentille, elle est réelle.',
      'Grandissement : γ = ' + nf(or_) + ' ÷ (' + nf(OA) + ') ≈ <b>' + nf(gr) + '</b>.',
      'γ est <b>négatif</b> : l’image est renversée. Sa valeur absolue ' +
        (Math.abs(gr) > 1 ? 'est supérieure à 1 : l’image est agrandie.' : 'est inférieure à 1 : l’image est réduite.'),
      'Toutes les distances sont <b>algébriques</b> : un objet réel placé avant la lentille donne ' +
        M('@OA') + ' négatif. Oublier ce signe fausse tout.'
    ]
  };
});

/* ================= MESURE ================= */

G('pc-mesure', 'pc-ecart', 'Écart relatif', 'app', function(){
  const ref = R.pick([9.8, 340, 1000, 6.02, 22.4, 1.013]);
  const err = R.pick([-0.08, -0.05, -0.02, 0.02, 0.03, 0.06, 0.12]);
  const mes = Math.round(ref * (1 + err) * 1000) / 1000;
  const ecart = Math.abs(mes - ref) / ref * 100;
  const er = Math.round(ecart * 10) / 10;
  return {
    enonce: '<p>Une mesure donne <b>' + nf(mes) + '</b> alors que la valeur de référence est <b>' + nf(ref) + '</b>.</p>' +
            '<p>Calcule l’écart relatif, en pourcentage, arrondi au dixième.</p>',
    champs: [{ type: 'num', label: 'Écart relatif (%)', bon: er, tol: 0.3 }],
    etapes: [
      M('écart = frac{|mesure - référence|}{référence} × 100'),
      '= |' + nf(mes) + ' - ' + nf(ref) + '| ÷ ' + nf(ref) + ' × 100 ≈ <b>' + nf(er) + ' %</b>.',
      er < 5 ? 'Un écart inférieur à 5 % est ordinaire : la mesure est compatible avec la référence.'
             : 'Un écart de cet ordre invite à chercher une cause : erreur de conversion, protocole, ou erreur systématique.',
      'On prend toujours la <b>valeur absolue</b> : un écart relatif est positif.'
    ]
  };
});

const SIGNIFICATIFS = [
  { v: '0,0025', n: 2, e: 'Les zéros de tête ne comptent jamais : seuls 2 et 5 sont significatifs.' },
  { v: '1,050', n: 4, e: 'Le zéro final après la virgule est significatif : il indique la précision.' },
  { v: '340', n: 2, e: 'Sans indication supplémentaire, on retient 3 et 4 : le zéro final d’un entier est ambigu.' },
  { v: '6,02', n: 3, e: 'Trois chiffres, tous significatifs.' },
  { v: '9,81', n: 3, e: 'Trois chiffres significatifs.' },
  { v: '0,50', n: 2, e: 'Le zéro de tête ne compte pas, le zéro final après la virgule compte.' },
  { v: '1,013', n: 4, e: 'Le zéro entre deux chiffres significatifs est toujours significatif.' }
];

G('pc-mesure', 'pc-significatifs', 'Chiffres significatifs', 'app', function(){
  const x = R.pick(SIGNIFICATIFS);
  return {
    enonce: '<p>Combien de chiffres significatifs compte cette valeur ?</p>' + form('<b>' + x.v + '</b>'),
    champs: [{ type: 'num', label: 'Nombre de chiffres significatifs', bon: x.n, tol: 0 }],
    etapes: [
      'Réponse : <b>' + x.n + '</b>.', x.e,
      'Règle de calcul : dans une multiplication ou une division, le résultat garde autant de chiffres ' +
        'significatifs que la donnée qui en a le <b>moins</b>.'
    ]
  };
});

/* ================= EXERCICE RÉDIGÉ ================= */

D('pc-mesure', 'pc-protocole', 'Rédiger un protocole et l’analyser', function(){
  const sujets = [
    { s: 'Déterminer la concentration en sulfate de cuivre d’une solution inconnue.',
      m: 'spectrophotomètre, fioles jaugées, pipettes jaugées, solution mère de concentration connue',
      d: 'préparer une gamme d’étalonnage par dilutions, tracer A = f(C), mesurer A de l’inconnue, lire C',
      p: 'la loi de Beer-Lambert, A proportionnelle à C' },
    { s: 'Déterminer la masse volumique d’un liquide inconnu.',
      m: 'balance, éprouvette graduée ou pipette jaugée',
      d: 'peser un volume mesuré, répéter la mesure, calculer ρ = m/V et en prendre la moyenne',
      p: 'la définition de la masse volumique' },
    { s: 'Déterminer la célérité du son dans l’air.',
      m: 'deux microphones, une carte d’acquisition ou un smartphone, un mètre ruban',
      d: 'mesurer le retard entre les deux microphones séparés d’une distance connue, puis v = d/Δt',
      p: 'la relation entre retard, distance et célérité' },
    { s: 'Vérifier la conservation de l’énergie mécanique lors d’une chute.',
      m: 'caméra ou vidéo à fréquence connue, logiciel de pointage, règle de référence',
      d: 'pointer la position à chaque image, calculer v et z, puis Ec, Epp et Em à plusieurs instants',
      p: 'la conservation de l’énergie mécanique en l’absence de frottements' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Objectif expérimental :</b></p>' + form(x.s) +
            '<p>Sur ton cahier, rédige le <b>protocole complet</b>, puis indique comment tu exploiterais ' +
            'les mesures et ce que tu critiquerais.</p>',
    aide: 'Matériel possible : ' + x.m + '. La loi mobilisée est ' + x.p + '. ' +
          'N’oublie ni la répétition des mesures, ni l’écart relatif, ni les chiffres significatifs.',
    bareme: [
      { pts: 2, d: '<b>Loi ou relation mobilisée</b> écrite explicitement, avec le nom de chaque grandeur et son unité. ' +
                   'Ici : ' + x.p + '.' },
      { pts: 2, d: '<b>Matériel</b> listé et adapté, avec la verrerie jaugée quand la précision l’exige ' +
                   '(pipette et fiole jaugées plutôt qu’éprouvette).' },
      { pts: 3, d: '<b>Déroulé</b> clair et réalisable, étape par étape : ' + x.d + '.' },
      { pts: 2, d: '<b>Mesures répétées</b>, et moyenne annoncée. Une mesure unique ne permet aucune conclusion.' },
      { pts: 2, d: '<b>Exploitation</b> prévue : tableau, graphique, régression ou calcul direct, ' +
                   'avec la grandeur cherchée isolée.' },
      { pts: 2, d: '<b>Chiffres significatifs</b> cohérents avec la précision des instruments, et unités partout.' },
      { pts: 3, d: '<b>Analyse critique</b> : sources d’erreur identifiées, distinction entre erreur ' +
                   '<b>aléatoire</b> (réduite par la répétition) et erreur <b>systématique</b> ' +
                   '(qui décale toutes les mesures du même côté).' },
      { pts: 2, d: '<b>Écart relatif</b> annoncé par rapport à une valeur de référence, et commenté.' },
      { pts: 2, d: '<b>Sécurité</b> : gants et lunettes si l’on manipule des solutions, ' +
                   'récupération des déchets, mentionnées quand le sujet s’y prête.' }
    ]
  };
});
