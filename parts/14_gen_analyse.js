/* =========================================================================
   Exercices : Variations et optimisation, Fonction exponentielle,
   Trigonométrie.
   ========================================================================= */

/* =================== VARIATIONS ET OPTIMISATION =================== */

G('variations', 'vr-sens', 'Sens de variation d’un trinôme', 'app', function(){
  const a = R.pick([1, 2, -1, -2, 3]);
  const al = R.nz(-5, 5);
  const b = -2 * a * al, c = R.int(-6, 6);
  const croit = M('[ ' + nf(al) + ' ; +∞ [');
  const decroit = M('] -∞ ; ' + nf(al) + ' ]');
  const demande = Math.random() < 0.5;                 /* croissante ou décroissante */
  const bonEstDroite = demande ? (a > 0) : (a < 0);
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p>' +
            '<p>Sur quel intervalle ' + M('f') + ' est-elle <b>' + (demande ? 'croissante' : 'décroissante') + '</b> ?</p>',
    qcm: { options: [croit, decroit, M('ℝ'), 'Sur aucun intervalle'], bon: bonEstDroite ? 0 : 1 },
    etapes: [
      M('f′(x) = ' + lead(2 * a, 'x') + sgn(b, '')),
      M('f′') + ' s’annule en ' + M('x = frac{' + nf(-b) + '}{' + nf(2 * a) + '} = ' + nf(al)) + ' : c’est l’abscisse du sommet.',
      'Le coefficient de ' + M('x') + ' dans ' + M('f′') + ' est ' + M(nf(2 * a)) + ', donc ' + M('f′') + ' est ' +
        (a > 0 ? 'négative avant ' + M(nf(al)) + ' et positive après' : 'positive avant ' + M(nf(al)) + ' et négative après') + '.',
      'Or ' + M('f′ > 0') + ' signifie « ' + M('f') + ' croît ». Donc ' + M('f') + ' est ' +
        (a > 0 ? 'décroissante puis croissante' : 'croissante puis décroissante') + '.',
      'Réponse : ' + (bonEstDroite ? croit : decroit) + '.'
    ]
  };
});

G('variations', 'vr-extremum', 'Extremum d’un trinôme', 'app', function(){
  const a = R.pick([1, -1, 2, -2, 0.5]);
  const al = R.nz(-6, 6), be = R.int(-9, 9);
  const b = -2 * a * al, c = be + a * al * al;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p>' +
            '<p>Donne l’abscisse de l’extremum, sa valeur, et sa nature.</p>',
    champs: [
      { type: 'num', label: 'x de l’extremum', bon: al, tol: 1e-6 },
      { type: 'num', label: 'valeur', bon: be, tol: 1e-6 },
      { type: 'choix', label: 'Nature', options: ['Minimum', 'Maximum'], bon: a > 0 ? 0 : 1 }
    ],
    etapes: [
      M('f′(x) = ' + lead(2 * a, 'x') + sgn(b, '')) + ', qui s’annule en ' + M('x = ' + nf(al)) + '.',
      M('f(' + nf(al) + ') = ' + nf(be)),
      'Le coefficient ' + M('a = ' + nf(a)) + ' est ' + (a > 0 ? 'positif : la parabole est tournée vers le haut, c’est un <b>minimum</b>' : 'négatif : la parabole est tournée vers le bas, c’est un <b>maximum</b>') + '.',
      'Extremum : ' + M(nf(be)) + ', atteint en ' + M('x = ' + nf(al)) + '.'
    ]
  };
});

G('variations', 'vr-parite', 'Parité d’une fonction', 'app', function(){
  const cas = R.pick([
    { f: 'x^{2} + 3', r: 0, d: 'Tous les exposants sont pairs (et la constante aussi) : ' + M('f(-x) = f(x)') + '.' },
    { f: 'x^{4} - 2x^{2}', r: 0, d: 'Tous les exposants sont pairs : ' + M('f(-x) = f(x)') + '.' },
    { f: '5x^{3} - x', r: 1, d: 'Tous les exposants sont impairs : ' + M('f(-x) = -f(x)') + '.' },
    { f: 'frac{1}{x}', r: 1, d: M('f(-x) = frac{1}{-x} = -f(x)') + '.' },
    { f: 'x^{3}', r: 1, d: M('f(-x) = (-x)^{3} = -x^{3} = -f(x)') + '.' },
    { f: 'x^{2} + x', r: 2, d: 'Il y a un exposant pair et un impair : ' + M('f(-1) = 0') + ' alors que ' + M('f(1) = 2') + '.' },
    { f: 'x^{3} + 1', r: 2, d: M('f(-1) = 0') + ' alors que ' + M('f(1) = 2') + ' et ' + M('-f(1) = -2') + '.' },
    { f: '@cos(x)', r: 0, d: 'Le cosinus est paire : ' + M('@cos(-x) = @cos(x)') + '.' },
    { f: '@sin(x)', r: 1, d: 'Le sinus est impaire : ' + M('@sin(-x) = -@sin(x)') + '.' }
  ]);
  return {
    enonce: '<p>La fonction ' + M('f(x) = ' + cas.f) + ' est-elle paire, impaire, ou ni l’une ni l’autre ?</p>',
    qcm: {
      options: ['Paire', 'Impaire', 'Ni paire ni impaire', 'Les deux à la fois'],
      bon: cas.r
    },
    etapes: [
      'On compare ' + M('f(-x)') + ' avec ' + M('f(x)') + ' et ' + M('-f(x)') + '.',
      cas.d,
      cas.r === 0 ? 'La courbe est donc symétrique par rapport à l’<b>axe des ordonnées</b>.'
        : (cas.r === 1 ? 'La courbe est donc symétrique par rapport à l’<b>origine</b>.'
                       : 'Aucune des deux symétries : un seul contre-exemple suffit à le prouver.'),
      '<b>Repère rapide</b> : un polynôme n’ayant que des exposants pairs est pair, que des exposants impairs est impair. Mélangés : ni l’un ni l’autre.'
    ]
  };
});

G('variations', 'vr-position', 'Position relative de deux courbes', 'ent', function(){
  let r1 = R.nz(-4, 3), r2 = r1 + R.int(1, 4);
  const a = R.pick([1, -1, 2]);
  /* d(x) = f(x) - g(x) = a(x - r1)(x - r2) */
  const b = -a * (r1 + r2), c = a * r1 * r2;
  const d1 = R.nz(-4, 4), e1 = R.int(-6, 6);
  const dessus = Math.random() < 0.5;
  const dedans = M('] ' + nf(r1) + ' ; ' + nf(r2) + ' [');
  const dehors = M('] -∞ ; ' + nf(r1) + ' [ ∪ ] ' + nf(r2) + ' ; +∞ [');
  const bonEstDehors = dessus ? (a > 0) : (a < 0);
  return {
    enonce: '<p>On considère ' + M('f(x) = ' + trinome(a, b + d1, c + e1)) + ' et ' + M('g(x) = ' + lead(d1, 'x') + (e1 ? sgn(e1, '') : '')) + '.</p>' +
            '<p>Sur quel intervalle la courbe de ' + M('f') + ' est-elle <b>' + (dessus ? 'au-dessus' : 'en dessous') + '</b> de celle de ' + M('g') + ' ?</p>',
    qcm: { options: [dedans, dehors, 'Partout', 'Nulle part'], bon: bonEstDehors ? 1 : 0 },
    etapes: [
      '<b>Méthode</b> : on étudie le signe de la différence ' + M('d(x) = f(x) - g(x)') + '.',
      M('d(x) = ' + trinome(a, b + d1, c + e1) + ' - (' + lead(d1, 'x') + (e1 ? sgn(e1, '') : '') + ') = ' + trinome(a, b, c)),
      'Ses racines sont ' + M('x_1 = ' + nf(r1)) + ' et ' + M('x_2 = ' + nf(r2)) + ', et ' + M('a = ' + nf(a)) + '.',
      M('d(x) ' + (dessus ? '>' : '&lt;') + ' 0') + ' donne ' + (bonEstDehors ? dehors : dedans) + '.',
      'Rappel : ' + M('f') + ' est au-dessus de ' + M('g') + ' exactement là où ' + M('f(x) - g(x) > 0') + '.'
    ]
  };
});

G('variations', 'vr-optim-recette', 'Optimiser une recette', 'ds', function(){
  const k = R.pick([5, 10, 20]);
  const x = R.int(3, 12);                               /* baisse optimale, entière */
  const P = R.pick([40, 50, 60, 80]);
  const N = k * P - 2 * k * x;                          /* pour que le sommet tombe sur x */
  const R0 = (P - x) * (N + k * x);
  return {
    enonce: '<p>Un article est vendu <b>' + P + ' €</b> et s’écoule à <b>' + nf(N) + ' exemplaires</b> par mois.</p>' +
            '<p>Une étude montre que chaque <b>baisse de 1 €</b> du prix fait vendre <b>' + k + ' exemplaires de plus</b>.</p>' +
            '<p>On note ' + M('x') + ' la baisse, en euros. La recette est ' + M('R(x) = (' + P + ' - x)(' + nf(N) + ' + ' + k + 'x)') + '.</p>' +
            '<p>Quelle baisse rend la recette maximale, et combien vaut cette recette ?</p>',
    champs: [
      { type: 'num', label: 'baisse x (en €)', bon: x, tol: 1e-6 },
      { type: 'num', label: 'recette max (en €)', bon: R0, tol: 1e-6 }
    ],
    etapes: [
      'On développe : ' + M('R(x) = ' + trinome(-k, k * P - N, P * N)) + '.',
      'C’est un trinôme avec ' + M('a = ' + nf(-k) + ' &lt; 0') + ' : la parabole est tournée vers le bas, le sommet est un <b>maximum</b>.',
      M('x = frac{-b}{2a} = frac{' + nf(-(k * P - N)) + '}{' + nf(-2 * k) + '} = ' + nf(x)) + ' €.',
      M('R(' + nf(x) + ') = (' + P + ' - ' + nf(x) + ') × (' + nf(N) + ' + ' + k + ' × ' + nf(x) + ') = ' + nf(P - x) + ' × ' + nf(N + k * x) + ' = ' + nf(R0)) + ' €.',
      'Conclusion : baisser le prix de ' + M(nf(x)) + ' € porte la recette à ' + M(nf(R0)) + ' €. ' +
        'On vérifie que ' + M('x') + ' est bien dans l’intervalle de validité ' + M('[ 0 ; ' + P + ' ]') + '.'
    ]
  };
});

/* =================== FONCTION EXPONENTIELLE =================== */

G('exponentielle', 'ep-simplifier', 'Simplifier une expression', 'app', function(){
  let a, b, c, r, ex;
  do {                                   /* les quatre propositions doivent differer */
    a = R.nz(-5, 5); b = R.nz(-5, 5); c = R.nz(-5, 5);
    r = a + b - c;
    ex = [r, a + b + c, a * b - c, a - b - c];
  } while (new Set(ex).size !== 4);
  const ecrire = k => (k === 0 ? '1' : '@e^{' + nf(k) + '}');
  return {
    enonce: '<p>Simplifie</p>' + Mc('frac{@e^{' + nf(a) + 'x} × @e^{' + nf(b) + 'x}}{@e^{' + nf(c) + 'x}}'),
    qcm: {
      options: [
        M(r === 0 ? '1' : '@e^{' + nf(r) + 'x}'),
        M('@e^{' + nf(a + b + c) + 'x}'),
        M('@e^{' + nf(a * b - c) + 'x}'),
        M('@e^{' + nf(a - b - c) + 'x}')
      ], bon: 0
    },
    etapes: [
      'Un <b>produit</b> d’exponentielles : on <b>additionne</b> les exposants. ' + M('@e^{' + nf(a) + 'x} × @e^{' + nf(b) + 'x} = @e^{' + nf(a + b) + 'x}') + '.',
      'Un <b>quotient</b> : on <b>soustrait</b> l’exposant du bas. ' + M('frac{@e^{' + nf(a + b) + 'x}}{@e^{' + nf(c) + 'x}} = @e^{' + nf(r) + 'x}') + '.',
      'Résultat : ' + M(r === 0 ? '1' : '@e^{' + nf(r) + 'x}') + (r === 0 ? ' (car ' + M('@e^{0} = 1') + ')' : '') + '.',
      '<b>Ne jamais</b> multiplier les exposants : l’exponentielle transforme les sommes en produits, pas l’inverse.'
    ]
  };
});

G('exponentielle', 'ep-derivee', 'Dériver une exponentielle', 'app', function(){
  const k = R.nz(-6, 6);
  let a;
  do { a = R.nz(-4, 4); } while (a === 1);     /* avec a = 1 deux propositions seraient identiques */
  return {
    enonce: '<p>Calcule la dérivée de</p>' + Mc('f(x) = ' + lead(k, '@e^{' + nf(a) + 'x}')),
    qcm: {
      options: [
        M('f′(x) = ' + lead(k * a, '@e^{' + nf(a) + 'x}')),
        M('f′(x) = ' + lead(k, '@e^{' + nf(a) + 'x}')),
        M('f′(x) = ' + lead(k * a, '@e^{' + nf(a - 1) + 'x}')),
        M('f′(x) = ' + lead(k, '@e^{' + nf(a) + '}'))
      ], bon: 0
    },
    etapes: [
      'Formule du cours : ' + M('(@e^{u})′ = u′ × @e^{u}') + '.',
      'Ici ' + M('u(x) = ' + lead(a, 'x')) + ' donc ' + M('u′(x) = ' + nf(a)) + '.',
      M('f′(x) = ' + nf(k) + ' × ' + nf(a) + ' × @e^{' + nf(a) + 'x} = ' + lead(k * a, '@e^{' + nf(a) + 'x}')),
      '<b>L’exposant ne change pas</b> : seul un facteur apparaît devant.'
    ]
  };
});

G('exponentielle', 'ep-equation', 'Résoudre une équation', 'ent', function(){
  let a, b, c, d;
  do { a = R.nz(-4, 4); b = R.int(-6, 6); c = R.nz(-4, 4); d = R.int(-6, 6); } while (a === c || (d - b) % (a - c) !== 0);
  const x = (d - b) / (a - c);
  return {
    enonce: '<p>Résous dans ' + M('ℝ') + '</p>' + Mc('@e^{' + lead(a, 'x') + sgn(b, '') + '} = @e^{' + lead(c, 'x') + sgn(d, '') + '}'),
    champs: [{ type: 'num', label: 'x =', bon: x, tol: 1e-6 }],
    etapes: [
      'La fonction exponentielle est <b>strictement croissante</b>, donc ' + M('@e^{A} = @e^{B} ⇔ A = B') + '.',
      'On résout ' + M(lead(a, 'x') + sgn(b, '') + ' = ' + lead(c, 'x') + sgn(d, '')) + '.',
      M(lead(a - c, 'x') + ' = ' + nf(d - b)) + ' donc ' + M('x = frac{' + nf(d - b) + '}{' + nf(a - c) + '} = ' + nf(x)) + '.',
      'On n’a jamais eu besoin du logarithme : les deux membres étaient déjà des exponentielles.'
    ]
  };
});

G('exponentielle', 'ep-signe', 'Signe d’un produit avec une exponentielle', 'ent', function(){
  const a = R.nz(-4, 4), b = R.nz(-8, 8);
  const r = -b / a;
  const positif = Math.random() < 0.5;
  const droite = M('] ' + nf(r) + ' ; +∞ [');
  const gauche = M('] -∞ ; ' + nf(r) + ' [');
  /* signe de (ax+b)e^x = signe de ax+b : positif après r si a>0 */
  const bonEstDroite = positif ? (a > 0) : (a < 0);
  return {
    enonce: '<p>Soit ' + M('f(x) = (' + lead(a, 'x') + sgn(b, '') + ')@e^{x}') + '.</p>' +
            '<p>Sur quel intervalle a-t-on ' + M('f(x) ' + (positif ? '>' : '&lt;') + ' 0') + ' ?</p>',
    qcm: { options: [droite, gauche, M('ℝ'), 'Aucune valeur de ' + M('x')], bon: bonEstDroite ? 0 : 1 },
    etapes: [
      '<b>Point clé</b> : ' + M('@e^{x} > 0') + ' pour tout réel ' + M('x') + '. L’exponentielle ne change donc <b>jamais</b> le signe.',
      'Le signe de ' + M('f(x)') + ' est exactement celui de ' + M(lead(a, 'x') + sgn(b, '')) + '.',
      'Cette expression s’annule en ' + M('x = frac{' + nf(-b) + '}{' + nf(a) + '} = ' + nf(r)) + ', et elle est du signe de ' +
        M('a = ' + nf(a)) + ' <b>après</b> cette valeur.',
      'Réponse : ' + (bonEstDroite ? droite : gauche) + '.'
    ]
  };
});

G('exponentielle', 'ep-modele', 'Modéliser une évolution', 'ds', function(){
  const croissance = Math.random() < 0.5;
  const N0 = R.pick([200, 500, 1000, 2000, 5000]);
  const k = R.pick([0.02, 0.03, 0.05, 0.08, 0.1]);
  const t = R.int(5, 25);
  const val = N0 * Math.exp(croissance ? k * t : -k * t);
  const sujet = croissance
    ? ['Une population de bactéries', 'individus', 'croît']
    : ['Un échantillon radioactif', 'noyaux', 'décroît'];
  return {
    enonce: '<p>' + sujet[0] + ' compte <b>' + nf(N0) + ' ' + sujet[1] + '</b> à l’instant ' + M('t = 0') + '. ' +
            'Son effectif ' + sujet[2] + ' selon le modèle</p>' +
            Mc('N(t) = ' + nf(N0) + '@e^{' + (croissance ? '' : '-') + nf(k) + 't}') +
            '<p>où ' + M('t') + ' est en heures. Combien vaut ' + M('N(' + t + ')') + ' ? (arrondi à l’unité)</p>',
    champs: [{ type: 'num', label: 'N(' + t + ') ≈', bon: Math.round(val), tol: 1.01 }],
    etapes: [
      'On remplace ' + M('t') + ' par ' + M(nf(t)) + ' : ' + M('N(' + t + ') = ' + nf(N0) + '@e^{' + (croissance ? '' : '-') + nf(k) + ' × ' + t + '} = ' + nf(N0) + '@e^{' + nf(croissance ? k * t : -k * t) + '}') + '.',
      'À la calculatrice, ' + M('@e^{' + nf(croissance ? k * t : -k * t) + '} ≈ ' + nf(Math.round(Math.exp(croissance ? k * t : -k * t) * 10000) / 10000)) + '.',
      M('N(' + t + ') ≈ ' + nf(N0) + ' × ' + nf(Math.round(Math.exp(croissance ? k * t : -k * t) * 10000) / 10000) + ' ≈ ' + nf(Math.round(val))) + ' ' + sujet[1] + '.',
      croissance
        ? 'Croissance exponentielle : l’effectif est multiplié par ' + M('@e^{' + nf(k) + '} ≈ ' + nf(Math.round(Math.exp(k) * 1000) / 1000)) + ' à chaque heure.'
        : 'Décroissance exponentielle : l’effectif est multiplié par ' + M('@e^{-' + nf(k) + '} ≈ ' + nf(Math.round(Math.exp(-k) * 1000) / 1000)) + ' à chaque heure, il tend vers 0 sans jamais l’atteindre.'
    ]
  };
});

/* =================== TRIGONOMÉTRIE =================== */

G('trigonometrie', 'tg-radian', 'Radians et degrés', 'app', function(){
  const cas = R.pick([
    ['frac{π}{6}', 30], ['frac{π}{4}', 45], ['frac{π}{3}', 60], ['frac{π}{2}', 90],
    ['frac{2π}{3}', 120], ['frac{3π}{4}', 135], ['frac{5π}{6}', 150], ['π', 180],
    ['frac{4π}{3}', 240], ['frac{3π}{2}', 270], ['2π', 360]
  ]);
  const versDegres = Math.random() < 0.6;
  return {
    enonce: versDegres
      ? '<p>Convertis ' + M(cas[0]) + ' radians en degrés.</p>'
      : '<p>Convertis ' + M(cas[1] + '°') + ' en radians. Donne le résultat sous la forme ' + M('frac{kπ}{n}') +
        ', en indiquant la valeur de ' + M('frac{k}{n}') + ' (par exemple 0,5 pour ' + M('frac{π}{2}') + ').</p>',
    champs: versDegres
      ? [{ type: 'num', label: 'en degrés', bon: cas[1], tol: 0.51 }]
      : [{ type: 'num', label: 'coefficient devant π', bon: Math.round((cas[1] / 180) * 10000) / 10000, tol: 0.0011 }],
    etapes: [
      'Tout part de l’égalité ' + M('π rad = 180°') + ', puis règle de trois.',
      versDegres
        ? M(cas[0] + ' × frac{180}{π} = ' + cas[1] + '°')
        : M(cas[1] + ' × frac{π}{180} = ' + cas[0]) + ', soit un coefficient de ' + M(nf(Math.round((cas[1] / 180) * 10000) / 10000)) + ' devant ' + M('π') + '.',
      'Les repères à connaître : ' + M('frac{π}{6} = 30°') + ', ' + M('frac{π}{4} = 45°') + ', ' +
        M('frac{π}{3} = 60°') + ', ' + M('frac{π}{2} = 90°') + '.'
    ]
  };
});

G('trigonometrie', 'tg-valeurs', 'Valeurs remarquables', 'app', function(){
  const table = [
    { a: '0', c: '1', s: '0' },
    { a: 'frac{π}{6}', c: 'frac{sqrt{3}}{2}', s: 'frac{1}{2}' },
    { a: 'frac{π}{4}', c: 'frac{sqrt{2}}{2}', s: 'frac{sqrt{2}}{2}' },
    { a: 'frac{π}{3}', c: 'frac{1}{2}', s: 'frac{sqrt{3}}{2}' },
    { a: 'frac{π}{2}', c: '0', s: '1' },
    { a: 'π', c: '-1', s: '0' }
  ];
  const t = R.pick(table);
  const cos = Math.random() < 0.5;
  const bonne = cos ? t.c : t.s;
  const autres = ['0', '1', '-1', 'frac{1}{2}', 'frac{sqrt{2}}{2}', 'frac{sqrt{3}}{2}', '-frac{1}{2}']
    .filter(v => v !== bonne);
  const options = R.shuffle(autres).slice(0, 3).concat([bonne]);
  const melange = R.shuffle(options);
  return {
    enonce: '<p>Donne la valeur exacte de</p>' + Mc((cos ? '@cos' : '@sin') + '(' + t.a + ')'),
    qcm: { options: melange.map(v => M(v)), bon: melange.indexOf(bonne) },
    etapes: [
      'On lit les coordonnées du point image de ' + M(t.a) + ' sur le cercle trigonométrique : ' +
        M('@cos') + ' est l’<b>abscisse</b>, ' + M('@sin') + ' l’<b>ordonnée</b>.',
      M('@cos(' + t.a + ') = ' + t.c) + ' et ' + M('@sin(' + t.a + ') = ' + t.s) + '.',
      'Vérification : ' + M('@cos^{2} + @sin^{2} = 1') + ' ✓',
      '<b>Moyen de retenir</b> : pour ' + M('frac{π}{6}, frac{π}{4}, frac{π}{3}') + ', les sinus valent ' +
        M('frac{1}{2}, frac{sqrt{2}}{2}, frac{sqrt{3}}{2}') + ' dans cet ordre, et les cosinus dans l’ordre inverse.'
    ]
  };
});

G('trigonometrie', 'tg-quadrant', 'Signes sur le cercle', 'app', function(){
  const cas = R.pick([
    { a: 'frac{2π}{3}', q: 2, c: '-', s: '+' },
    { a: 'frac{3π}{4}', q: 2, c: '-', s: '+' },
    { a: 'frac{5π}{4}', q: 3, c: '-', s: '-' },
    { a: 'frac{4π}{3}', q: 3, c: '-', s: '-' },
    { a: 'frac{5π}{3}', q: 4, c: '+', s: '-' },
    { a: '-frac{π}{4}', q: 4, c: '+', s: '-' },
    { a: 'frac{π}{3}', q: 1, c: '+', s: '+' },
    { a: 'frac{π}{6}', q: 1, c: '+', s: '+' }
  ]);
  const noms = ['', 'en haut à droite', 'en haut à gauche', 'en bas à gauche', 'en bas à droite'];
  return {
    enonce: '<p>Le point image de ' + M(cas.a) + ' est placé sur le cercle trigonométrique.</p>' +
            '<p>Quels sont les signes de ' + M('@cos') + ' et de ' + M('@sin') + ' ?</p>',
    qcm: {
      options: [
        M('@cos > 0') + ' et ' + M('@sin > 0'),
        M('@cos &lt; 0') + ' et ' + M('@sin > 0'),
        M('@cos &lt; 0') + ' et ' + M('@sin &lt; 0'),
        M('@cos > 0') + ' et ' + M('@sin &lt; 0')
      ], bon: cas.q - 1
    },
    etapes: [
      M(cas.a) + ' correspond à ' + M(nf(Math.round(({ 1: 45, 2: 120, 3: 225, 4: 315 })[cas.q])) + '°') + ' environ : le point est <b>' + noms[cas.q] + '</b>.',
      M('@cos') + ' est l’abscisse : elle est ' + (cas.c === '+' ? '<b>positive</b> à droite' : '<b>négative</b> à gauche') + '.',
      M('@sin') + ' est l’ordonnée : elle est ' + (cas.s === '+' ? '<b>positive</b> en haut' : '<b>négative</b> en bas') + '.',
      '<b>Réflexe</b> : placer le point avant tout calcul donne les deux signes gratuitement, et permet de vérifier un résultat.'
    ]
  };
});

G('trigonometrie', 'tg-associes', 'Angles associés', 'ent', function(){
  const p = R.pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13], [8, 15, 17], [15, 8, 17]]);
  const c = p[0] / p[2], s = p[1] / p[2];
  const quoi = R.pick([
    { t: '@cos(-x)', v: c, d: 'le cosinus est <b>pair</b> : ' + M('@cos(-x) = @cos(x)') },
    { t: '@sin(-x)', v: -s, d: 'le sinus est <b>impair</b> : ' + M('@sin(-x) = -@sin(x)') },
    { t: '@cos(π - x)', v: -c, d: M('@cos(π - x) = -@cos(x)') + ' : on passe à gauche du cercle' },
    { t: '@sin(π - x)', v: s, d: M('@sin(π - x) = @sin(x)') + ' : on reste à la même hauteur' },
    { t: '@cos(x + 2π)', v: c, d: 'un tour complet ramène au même point : ' + M('@cos(x + 2π) = @cos(x)') }
  ]);
  return {
    enonce: '<p>On sait que ' + M('@cos(x) = ' + nf(Math.round(c * 1000) / 1000)) + ' et ' + M('@sin(x) = ' + nf(Math.round(s * 1000) / 1000)) + '.</p>' +
            '<p>Calcule ' + M(quoi.t) + '.</p>',
    champs: [{ type: 'num', label: quoi.t.replace(/@/g, '') + ' =', bon: Math.round(quoi.v * 1000) / 1000, tol: 0.0011 }],
    etapes: [
      'On lit la relation sur le cercle trigonométrique : ' + quoi.d + '.',
      'Donc ' + M(quoi.t + ' = ' + nf(Math.round(quoi.v * 1000) / 1000)) + '.',
      'Vérification : ' + M('@cos^{2}(x) + @sin^{2}(x) = ' + nf(Math.round((c * c + s * s) * 1000) / 1000)) + ' ✓',
      '<b>Méthode</b> : ces relations se <b>retrouvent sur le cercle</b> en une seconde, il est inutile de les apprendre par cœur.'
    ]
  };
});

G('trigonometrie', 'tg-identite', 'Utiliser cos² + sin² = 1', 'ent', function(){
  const p = R.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]]);
  const cosConnu = Math.random() < 0.5;
  const c = p[0] / p[2], s = p[1] / p[2];
  const donne = cosConnu ? c : s;
  const cherche = cosConnu ? s : c;
  return {
    enonce: '<p>Un réel ' + M('x') + ' appartient à ' + M('[ 0 ; frac{π}{2} ]') + ' et ' +
            M((cosConnu ? '@cos' : '@sin') + '(x) = frac{' + (cosConnu ? p[0] : p[1]) + '}{' + p[2] + '}') + '.</p>' +
            '<p>Calcule ' + M((cosConnu ? '@sin' : '@cos') + '(x)') + ' (valeur décimale, arrondie au millième).</p>',
    champs: [{ type: 'num', label: (cosConnu ? 'sin' : 'cos') + '(x) ≈', bon: Math.round(cherche * 1000) / 1000, tol: 0.0011 }],
    etapes: [
      'On part de l’identité fondamentale : ' + M('@cos^{2}(x) + @sin^{2}(x) = 1') + '.',
      M((cosConnu ? '@sin' : '@cos') + '^{2}(x) = 1 - (frac{' + (cosConnu ? p[0] : p[1]) + '}{' + p[2] + '})^{2} = 1 - frac{' +
        (cosConnu ? p[0] * p[0] : p[1] * p[1]) + '}{' + (p[2] * p[2]) + '} = frac{' + (cosConnu ? p[1] * p[1] : p[0] * p[0]) + '}{' + (p[2] * p[2]) + '}'),
      'Donc ' + M((cosConnu ? '@sin' : '@cos') + '(x) = ±frac{' + (cosConnu ? p[1] : p[0]) + '}{' + p[2] + '}') + '.',
      '<b>C’est ici qu’on tranche</b> : ' + M('x ∈ [ 0 ; frac{π}{2} ]') + ' place le point dans le quart <b>en haut à droite</b>, ' +
        'où cosinus et sinus sont tous deux <b>positifs</b>. On garde donc ' + M('+frac{' + (cosConnu ? p[1] : p[0]) + '}{' + p[2] + '} ≈ ' + nf(Math.round(cherche * 1000) / 1000)) + '.',
      'Oublier de discuter le signe est l’erreur la plus fréquente sur cet exercice.'
    ]
  };
});

/* --- outils communs aux équations trigonométriques ---
   Un angle est repéré par sa mesure en douzièmes de π : 2 vaut π/6, 3 vaut
   π/4, 6 vaut π/2, 12 vaut π. Tout se calcule alors sur des entiers, ce qui
   évite les arrondis et rend les vérifications exactes. */
const TRIG12 = {
  0:  { c: '1', s: '0' },
  2:  { c: 'frac{sqrt{3}}{2}', s: 'frac{1}{2}' },
  3:  { c: 'frac{sqrt{2}}{2}', s: 'frac{sqrt{2}}{2}' },
  4:  { c: 'frac{1}{2}', s: 'frac{sqrt{3}}{2}' },
  6:  { c: '0', s: '1' },
  8:  { c: '-frac{1}{2}', s: 'frac{sqrt{3}}{2}' },
  9:  { c: '-frac{sqrt{2}}{2}', s: 'frac{sqrt{2}}{2}' },
  10: { c: '-frac{sqrt{3}}{2}', s: 'frac{1}{2}' },
  12: { c: '-1', s: '0' }
};
/* écriture de m douzièmes de π, fraction réduite : 8 -> 2π/3 */
function angPi(m){
  if (m === 0) return '0';
  let k = m, n = 12;
  const g = pgcd(Math.abs(k), n);
  k /= g; n /= g;
  const t = (Math.abs(k) === 1 ? 'π' : Math.abs(k) + 'π');
  const e = (n === 1 ? t : 'frac{' + t + '}{' + n + '}');
  return (k < 0 ? '-' : '') + e;
}
function negVal(v){ return v === '0' ? '0' : (v.charAt(0) === '-' ? v.slice(1) : '-' + v); }
/* ramène une mesure dans ] -π ; π ], c'est-à-dire m dans ] -12 ; 12 ] */
function principal12(m){
  let r = ((m % 24) + 24) % 24;
  return r > 12 ? r - 24 : r;
}
/* cosinus et sinus exacts d'une mesure remarquable, quelle qu'elle soit */
function cos12(m){ const t = TRIG12[Math.abs(principal12(m))]; return t ? t.c : null; }
function sin12(m){
  const r = principal12(m), t = TRIG12[Math.abs(r)];
  if (!t) return null;
  return r < 0 ? negVal(t.s) : t.s;
}
/* quelques valeurs pour fabriquer des distracteurs de QCM */
const VALS_REM = ['1', '-1', '0', 'frac{1}{2}', '-frac{1}{2}',
  'frac{sqrt{2}}{2}', '-frac{sqrt{2}}{2}', 'frac{sqrt{3}}{2}', '-frac{sqrt{3}}{2}'];

/* les neuf valeurs remarquables, écrites pour la saisie exacte (p + m√d)/q */
const EXACT_VAL = {
  '1': { p: 1, m: 0, d: 0, q: 1 },
  '0': { p: 0, m: 0, d: 0, q: 1 },
  'frac{1}{2}': { p: 1, m: 0, d: 0, q: 2 },
  'frac{sqrt{2}}{2}': { p: 0, m: 1, d: 2, q: 2 },
  'frac{sqrt{3}}{2}': { p: 0, m: 1, d: 3, q: 2 }
};
function exactDeTexte(v){
  const neg = v.charAt(0) === '-', b = EXACT_VAL[neg ? v.slice(1) : v];
  if (!b) return null;
  return { p: neg ? -b.p : b.p, m: neg ? -b.m : b.m, d: b.d, q: b.q };
}

G('trigonometrie', 'tg-exact-associes', 'Valeur exacte hors du premier quart', 'ent', function(){
  /* on évite le premier quart de tour : c'est là que le détour par un angle
     associé devient indispensable */
  const m = R.pick([8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 26, 27, 28, -2, -3, -4, -8, -9, -10, -15, -16]);
  const cos = Math.random() < 0.5;
  const bonne = cos ? cos12(m) : sin12(m);
  const r = principal12(m);
  const ref = Math.abs(r) > 6 ? 12 - Math.abs(r) : Math.abs(r);   /* angle du premier quart */
  const etapes = [];
  if (m !== r) etapes.push('On enlève d’abord les tours complets : ' + M(angPi(m) + ' = ' + angPi(r) + (m - r > 0 ? ' + ' : ' - ') +
    (Math.abs(m - r) === 24 ? '2π' : nf(Math.abs(m - r) / 12) + 'π')) + ', et un tour ne change ni le cosinus ni le sinus.');
  const surAxe = (r === 0 || Math.abs(r) === 6 || r === 12);
  if (surAxe){
    etapes.push('Le point image de ' + M(angPi(r)) + ' tombe <b>sur un axe</b> : ses deux coordonnées se lisent ' +
      'directement, ' + M('@cos(' + angPi(r) + ') = ' + cos12(r)) + ' et ' + M('@sin(' + angPi(r) + ') = ' + sin12(r)) + '.');
  } else {
    etapes.push('Le point image de ' + M(angPi(r)) + ' est ' + (r < 0 ? 'sous' : 'au-dessus de') + ' l’axe des abscisses, ' +
      (Math.abs(r) > 6 ? 'à <b>gauche</b>' : 'à <b>droite</b>') + ' de l’axe des ordonnées : ' +
      M('@cos') + ' y est ' + (Math.abs(r) > 6 ? '<b>négatif</b>' : '<b>positif</b>') + ' et ' +
      M('@sin') + ' ' + (r < 0 ? '<b>négatif</b>' : '<b>positif</b>') + '.');
    etapes.push('On se ramène à l’angle remarquable ' + M(angPi(ref)) + ' du premier quart : ' +
      M('@cos(' + angPi(ref) + ') = ' + TRIG12[ref].c) + ' et ' + M('@sin(' + angPi(ref) + ') = ' + TRIG12[ref].s) + '.');
  }
  etapes.push('D’où ' + M((cos ? '@cos' : '@sin') + '(' + angPi(m) + ') = ' + bonne) + '.');
  etapes.push('<b>Vérification gratuite</b> : ' + M('@cos^{2} + @sin^{2} = 1') + '. Ici ' +
    M('@cos(' + angPi(m) + ') = ' + cos12(m)) + ' et ' + M('@sin(' + angPi(m) + ') = ' + sin12(m)) + '.');
  return {
    enonce: '<p>Donne la valeur exacte de</p>' + Mc((cos ? '@cos' : '@sin') + '(' + angPi(m) + ')') +
            '<p class="tiny">Une case laissée vide vaut 0 : sans racine, seuls ' + M('a') + ' et ' + M('d') + ' sont à remplir.</p>',
    champs: [{ type: 'exact', forme: 'radical', bon: exactDeTexte(bonne),
               label: M((cos ? '@cos' : '@sin') + '(' + angPi(m) + ')') + ' =' }],
    etapes: etapes
  };
});

/* consigne commune aux équations : on écrit les familles, on ne les reconnaît pas */
const AIDE_FAM = '<p class="tiny">Écris chaque famille de solutions dans les cases : le numérateur ' +
  '(avec son signe), le dénominateur, puis le coefficient devant ' + M('kπ') + '. ' +
  'Un dénominateur laissé vide vaut 1. L’ordre des deux familles est indifférent.</p>';

G('trigonometrie', 'tg-eq-cos', 'Résoudre cos(x) = c dans ℝ', 'ent', function(){
  const m = R.pick([2, 3, 4, 6, 8, 9, 10]);          /* a dans [ 0 ; π ] */
  const val = TRIG12[m].c;
  return {
    enonce: '<p>Résous dans ' + M('ℝ') + ' l’équation</p>' + Mc('@cos(x) = ' + val) + AIDE_FAM,
    champs: [{ type: 'angle', label: M('x') + ' =', periode: true,
               bon: [{ p: m, q: 12 }, { p: -m, q: 12 }] }],
    etapes: [
      'On commence par écrire le second membre comme un cosinus : ' + M(val + ' = @cos(' + angPi(m) + ')') + '.',
      'L’équation devient ' + M('@cos(x) = @cos(' + angPi(m) + ')') + '.',
      'Le cosinus est l’<b>abscisse</b> sur le cercle. Deux points ont cette abscisse : ' + M(angPi(m)) +
        ' et son symétrique par rapport à l’axe horizontal, ' + M(angPi(-m)) + '.',
      'En ajoutant les tours complets : ' + Mc('x = ' + angPi(m) + ' + 2kπ  ou  x = ' + angPi(-m) + ' + 2kπ,  k ∈ ℤ'),
      '<b>Le piège</b> : ' + M('π - a') + ' est la règle du <b>sinus</b>. Avec un cosinus, c’est ' + M('-a') + '. ' +
        'Un cercle tracé au brouillon tranche en deux secondes.',
      '<b>Le second piège</b> : sans le ' + M('2kπ') + ', on donne deux solutions au lieu d’une infinité — et la question est fausse. ' +
        M('kπ') + ' ne marche pas non plus : un demi-tour change le signe du cosinus.'
    ]
  };
});

G('trigonometrie', 'tg-eq-sin', 'Résoudre sin(x) = c dans ℝ', 'ent', function(){
  const m = R.pick([2, 3, 4, -2, -3, -4]);           /* a dans [ -π/2 ; π/2 ] ; π/2 exclu : π - a = a */
  const val = m < 0 ? negVal(TRIG12[-m].s) : TRIG12[m].s;
  const autre = principal12(12 - m);
  return {
    enonce: '<p>Résous dans ' + M('ℝ') + ' l’équation</p>' + Mc('@sin(x) = ' + val) + AIDE_FAM,
    champs: [{ type: 'angle', label: M('x') + ' =', periode: true,
               bon: [{ p: m, q: 12 }, { p: 12 - m, q: 12 }] }],
    etapes: [
      'On écrit le second membre comme un sinus : ' + M(val + ' = @sin(' + angPi(m) + ')') + '.',
      'L’équation devient ' + M('@sin(x) = @sin(' + angPi(m) + ')') + '.',
      'Le sinus est l’<b>ordonnée</b>. Deux points du cercle ont cette ordonnée : ' + M(angPi(m)) +
        ' et son symétrique par rapport à l’axe vertical, ' + M('π - ' + angPi(m)) + ' c’est-à-dire ' + M(angPi(12 - m)) +
        (autre !== 12 - m ? ', soit ' + M(angPi(autre)) + ' une fois ramené dans ' + M('] -π ; π ]') : '') + '.',
      'En ajoutant les tours complets : ' + Mc('x = ' + angPi(m) + ' + 2kπ  ou  x = ' + angPi(autre) + ' + 2kπ,  k ∈ ℤ'),
      '<b>Le piège</b> : ' + M('-a') + ' est la règle du <b>cosinus</b>. Avec un sinus, c’est ' + M('π - a') + '.',
      'Contrôle : ' + M('@sin(' + angPi(autre) + ') = ' + val) + ', on retombe bien sur le second membre. ✓',
      '<b>Deux écritures valent la même famille</b> : ' + M(angPi(12 - m) + ' + 2kπ') + ' et ' + M(angPi(autre) + ' + 2kπ') +
        ' décrivent le même ensemble, puisqu’elles diffèrent de ' + M('2π') + '. Les deux sont acceptées.'
    ]
  };
});

G('trigonometrie', 'tg-eq-intervalle', 'Résoudre sur un intervalle', 'ds', function(){
  const cos = Math.random() < 0.5;
  let m, s1, s2, val;
  if (cos){
    m = R.pick([2, 3, 4, 6, 8, 9, 10]);
    val = TRIG12[m].c;
    s1 = -m; s2 = m;                                   /* -a et a, tous deux dans ] -π ; π ] */
  } else {
    m = R.pick([2, 3, 4, -2, -3, -4]);
    val = m < 0 ? negVal(TRIG12[-m].s) : TRIG12[m].s;
    const a2 = principal12(12 - m);                    /* π - a ramené dans ] -π ; π ] */
    s1 = Math.min(m, a2); s2 = Math.max(m, a2);
  }
  return {
    enonce: '<p>Résous sur ' + M('] -π ; π ]') + ' l’équation</p>' +
            Mc((cos ? '@cos' : '@sin') + '(x) = ' + val) +
            '<p class="tiny">Ici les solutions sont en nombre fini : pas de ' + M('2kπ') + '. ' +
            'L’ordre des deux réponses est indifférent, un dénominateur vide vaut 1.</p>',
    champs: [{ type: 'angle', label: 'Les deux solutions', bon: [{ p: s1, q: 12 }, { p: s2, q: 12 }] }],
    etapes: [
      'Étape 1 — on écrit le second membre comme ' + (cos ? 'un cosinus' : 'un sinus') + ' : ' +
        M(val + ' = ' + (cos ? '@cos' : '@sin') + '(' + angPi(m) + ')') + '.',
      'Étape 2 — on applique la règle : ' + (cos
        ? M('@cos(x) = @cos(a) ⇔ x = a + 2kπ ou x = -a + 2kπ')
        : M('@sin(x) = @sin(a) ⇔ x = a + 2kπ ou x = π - a + 2kπ')) + '.',
      'Ici : ' + M('x = ' + angPi(m) + ' + 2kπ') + ' ou ' + M('x = ' + angPi(cos ? -m : principal12(12 - m)) + ' + 2kπ') + '.',
      'Étape 3 — on trie sur l’intervalle. ' + M('k = 0') + ' donne ' + M(angPi(s1)) + ' et ' + M(angPi(s2)) +
        ', tous deux dans ' + M('] -π ; π ]') + '. Tout autre ' + M('k') + ' déplace de ' + M('2π') + ' au moins, donc fait sortir.',
      Mc('S = { ' + angPi(s1) + ' ; ' + angPi(s2) + ' }'),
      '<b>Réflexe de contrôle</b> : replace les deux solutions sur le cercle. Elles doivent être symétriques par rapport à ' +
        (cos ? 'l’axe des <b>abscisses</b>' : 'l’axe des <b>ordonnées</b>') + '. Si ce n’est pas le cas, la règle a été croisée.'
    ]
  };
});

G('trigonometrie', 'tg-mesure-principale', 'Mesure principale', 'ent', function(){
  const base = R.pick([2, 3, 4, 6, 8, 9, 10, 12, -2, -3, -4, -6, -8, -9, -10]);
  const tours = R.pick([-2, -1, 1, 2]);
  const m = base + 24 * tours;
  const etapes = ['La mesure principale est la seule mesure du point qui appartient à ' + M('] -π ; π ]') +
    '. On retire ou on ajoute des ' + M('2π') + ' jusqu’à y tomber.'];
  let cour = m;
  const pas = tours > 0 ? -24 : 24;
  while (cour !== base){
    const suiv = cour + pas;
    etapes.push(M(angPi(cour) + (pas < 0 ? ' - 2π = ' : ' + 2π = ') + angPi(suiv)) +
      (suiv === base ? ' : cette fois on est dans ' + M('] -π ; π ]') + '. ✓' : ' : on n’y est pas encore.'));
    cour = suiv;
  }
  etapes.push('La mesure principale de ' + M(angPi(m)) + ' est donc ' + M(angPi(base)) + '.');
  etapes.push('<b>Le raccourci</b> : on écrit ' + M('2π') + ' avec le <b>même dénominateur</b> que l’angle, et on ne touche plus qu’aux numérateurs. ' +
    M('2π = frac{4π}{2} = frac{6π}{3} = frac{8π}{4} = frac{12π}{6}') + '.');
  etapes.push('<b>Attention à la borne</b> : ' + M('π') + ' est dans l’intervalle, ' + M('-π') + ' ne l’est pas.');
  return {
    enonce: '<p>Détermine la mesure principale de l’angle</p>' + Mc(angPi(m)) +
            '<p class="tiny">Un dénominateur laissé vide vaut 1.</p>',
    champs: [{ type: 'angle', label: 'Mesure principale', bon: [{ p: base, q: 12 }] }],
    etapes: etapes
  };
});
