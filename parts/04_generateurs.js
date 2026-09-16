/* =========================================================================
   Générateurs d'exercices.
   Chaque générateur tire des valeurs au hasard ET calcule la solution exacte
   en même temps : les exercices sont illimités et la correction est juste.
   niveau : 'app' (application) | 'ent' (entraînement) | 'ds' (type DS)
   ========================================================================= */

const NIVEAUX = { app: 'Application', ent: 'Entraînement', ds: 'Type DS', exp: 'Approfondissement' };
const ORDRE_NIVEAUX = ['app', 'ent', 'ds', 'exp'];

function G(chap, id, label, niveau, fn){
  const g = { id, label, niveau, chap, fn };
  CHAP[chap].gens.push(g);
  METHODE[id] = g;
}
/* écrit (x - r) en gérant le signe */
function fact(r, v){ v = v || 'x'; return r === 0 ? '(' + v + ')' : '(' + v + (r < 0 ? ' + ' + (-r) : ' - ' + r) + ')'; }
function coef(a){ return a === 1 ? '' : (a === -1 ? '-' : nf(a)); }

/* =================== SECOND DEGRÉ =================== */

G('second-degre', 'sd-canonique', 'Forme canonique', 'app', function(){
  const a = R.pick([1, -1, 2, -2, 3]);
  const al = R.nz(-4, 4), be = R.int(-8, 8);
  const b = -2 * a * al, c = be + a * al * al;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p>' +
            '<p>Écris ' + M('f') + ' sous forme canonique ' + M('f(x) = a(x - α)^{2} + β') + '.</p>',
    champs: [
      { type: 'num', label: 'α =', bon: al, tol: 1e-6 },
      { type: 'num', label: 'β =', bon: be, tol: 1e-6 }
    ],
    etapes: [
      'On identifie ' + M('a = ' + nf(a)) + ', ' + M('b = ' + nf(b)) + ', ' + M('c = ' + nf(c)) + '.',
      M('α = frac{-b}{2a} = frac{' + nf(-b) + '}{' + nf(2 * a) + '} = ' + nf(al)),
      M('β = f(α) = ' + nf(a) + ' × (' + nf(al) + ')^{2} ' + sgn(b, '') + ' × (' + nf(al) + ') ' + sgn(c, '') + ' = ' + nf(be)),
      'Conclusion : ' + M('f(x) = ' + coef(a) + fact(al) + '^{2} ' + (be === 0 ? '' : sgn(be, ''))) +
        '. Le sommet de la parabole est ' + M('S(' + nf(al) + ' ; ' + nf(be) + ')') + '.'
    ]
  };
});

G('second-degre', 'sd-discriminant', 'Discriminant et nombre de solutions', 'app', function(){
  const a = R.nz(-3, 3), b = R.int(-7, 7), c = R.int(-6, 6);
  const D = b * b - 4 * a * c;
  const nb = D > 0 ? 2 : (D === 0 ? 1 : 0);
  return {
    enonce: '<p>On considère l’équation ' + M(trinome(a, b, c) + ' = 0') + '.</p>' +
            '<p>Calcule le discriminant, puis donne le nombre de solutions réelles.</p>',
    champs: [
      { type: 'num', label: 'Δ =', bon: D, tol: 1e-6 },
      { type: 'choix', label: 'Nombre de solutions', options: ['0', '1', '2'], bon: nb }
    ],
    etapes: [
      'On identifie ' + M('a = ' + nf(a)) + ', ' + M('b = ' + nf(b)) + ', ' + M('c = ' + nf(c)) + '.',
      M('Δ = b^{2} - 4ac = (' + nf(b) + ')^{2} - 4 × (' + nf(a) + ') × (' + nf(c) + ') = ' + nf(b * b) + sgn(-4 * a * c, '') + ' = ' + nf(D)),
      D > 0 ? M('Δ > 0') + ' donc l’équation admet <b>deux solutions</b> distinctes.'
            : (D === 0 ? M('Δ = 0') + ' donc l’équation admet <b>une solution double</b>.'
                       : M('Δ &lt; 0') + ' donc l’équation n’admet <b>aucune solution réelle</b>.')
    ]
  };
});

G('second-degre', 'sd-racines', 'Résoudre une équation du second degré', 'ent', function(){
  let x1 = R.int(-6, 6), x2 = R.int(-6, 6);
  while (x2 === x1) x2 = R.int(-6, 6);
  if (x1 > x2){ const t = x1; x1 = x2; x2 = t; }
  const a = R.pick([1, 1, -1, 2]);
  const b = -a * (x1 + x2), c = a * x1 * x2;
  const D = b * b - 4 * a * c, rD = Math.sqrt(D);
  return {
    enonce: '<p>Résous dans ' + M('ℝ') + ' l’équation</p>' + Mc(trinome(a, b, c) + ' = 0'),
    champs: [
      { type: 'num', label: 'plus petite solution', bon: x1, tol: 1e-6 },
      { type: 'num', label: 'plus grande solution', bon: x2, tol: 1e-6 }
    ],
    etapes: [
      M('a = ' + nf(a)) + ', ' + M('b = ' + nf(b)) + ', ' + M('c = ' + nf(c)) + '.',
      M('Δ = b^{2} - 4ac = ' + nf(b * b) + sgn(-4 * a * c, '') + ' = ' + nf(D)) + ' — ' + M('Δ > 0') + ', il y a deux solutions.',
      M('sqrt{Δ} = ' + nf(rD)),
      M('x_1 = frac{' + nf(-b) + ' - ' + nf(rD) + '}{' + nf(2 * a) + '} = ' + nf(a > 0 ? x1 : x2)) + '   et   ' +
        M('x_2 = frac{' + nf(-b) + ' + ' + nf(rD) + '}{' + nf(2 * a) + '} = ' + nf(a > 0 ? x2 : x1)),
      'Les solutions sont ' + M(nf(x1)) + ' et ' + M(nf(x2)) + '. Vérification : ' +
        M('x_1 + x_2 = frac{-b}{a} = ' + nf(-b / a)) + ' et ' + M('x_1 x_2 = frac{c}{a} = ' + nf(c / a)) + '.'
    ]
  };
});

G('second-degre', 'sd-factorisation', 'Factoriser un trinôme', 'ent', function(){
  let x1 = R.nz(-5, 5), x2 = R.nz(-5, 5);
  while (x2 === x1 || x2 === -x1) x2 = R.nz(-5, 5);
  if (x1 > x2){ const t = x1; x1 = x2; x2 = t; }
  const a = R.pick([2, -2, 3, -3]);
  const b = -a * (x1 + x2), c = a * x1 * x2;
  const bon = M(nf(a) + fact(x1) + fact(x2));
  return {
    enonce: '<p>Factorise le trinôme</p>' + Mc('f(x) = ' + trinome(a, b, c)),
    qcm: {
      options: [bon,
        M(fact(x1) + fact(x2)),
        M(nf(a) + fact(-x1) + fact(-x2)),
        M(nf(a) + fact(x1) + fact(-x2))],
      bon: 0
    },
    etapes: [
      M('Δ = ' + nf(b) + '^{2} - 4 × ' + nf(a) + ' × ' + nf(c) + ' = ' + nf(b * b - 4 * a * c)) + ' — deux racines.',
      'Les racines sont ' + M('x_1 = ' + nf(x1)) + ' et ' + M('x_2 = ' + nf(x2)) + '.',
      'La forme factorisée est ' + M('f(x) = a(x - x_1)(x - x_2)') + ', donc ' + bon + '.',
      '<b>Ne jamais oublier le coefficient ' + M('a') + '</b> : sans lui, on ne retrouve pas le même trinôme en développant.'
    ]
  };
});

G('second-degre', 'sd-signe', 'Signe d’un trinôme', 'ent', function(){
  const negatif = Math.random() < 0.5;          // on demande f(x) < 0 ou f(x) > 0
  const sansRacine = Math.random() < 0.28;
  const a = R.pick([1, 2, -1, -2]);
  let b, c, x1, x2, D;
  if (sansRacine){
    do { b = R.int(-4, 4); c = R.int(-6, 6); D = b * b - 4 * a * c; } while (D >= 0);
  } else {
    x1 = R.int(-5, 4); x2 = x1 + R.int(1, 5);
    b = -a * (x1 + x2); c = a * x1 * x2; D = b * b - 4 * a * c;
  }
  const optEntre = sansRacine ? null : M('] ' + nf(x1) + ' ; ' + nf(x2) + ' [');
  const optDehors = sansRacine ? null : M('] -∞ ; ' + nf(x1) + ' [ ∪ ] ' + nf(x2) + ' ; +∞ [');
  const optTout = 'Pour tout réel ' + M('x');
  const optAucun = 'Aucune valeur de ' + M('x');
  let options, bon;
  if (sansRacine){
    options = [optTout, optAucun, M('] -∞ ; 0 [') , M('] 0 ; +∞ [')];
    // Δ<0 : f garde le signe de a
    const signePositif = a > 0;
    bon = (negatif ? (signePositif ? 1 : 0) : (signePositif ? 0 : 1));
  } else {
    options = [optEntre, optDehors, optTout, optAucun];
    // a>0 : négatif entre les racines ; a<0 : positif entre les racines
    bon = negatif ? (a > 0 ? 0 : 1) : (a > 0 ? 1 : 0);
  }
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p>' +
            '<p>Pour quelles valeurs de ' + M('x') + ' a-t-on ' + M('f(x) ' + (negatif ? '&lt;' : '>') + ' 0') + ' ?</p>',
    qcm: { options: options, bon: bon },
    etapes: sansRacine ? [
      M('Δ = ' + nf(b) + '^{2} - 4 × ' + nf(a) + ' × ' + nf(c) + ' = ' + nf(D)) + ' : ' + M('Δ &lt; 0') + ', il n’y a <b>pas de racine</b>.',
      'Le trinôme garde donc <b>toujours le signe de ' + M('a') + '</b>, ici ' + M('a = ' + nf(a)) + ' donc ' + M('f(x) ' + (a > 0 ? '> 0' : '&lt; 0')) + ' pour tout réel.',
      'Réponse : ' + (bon === 0 ? optTout : optAucun) + '.'
    ] : [
      M('Δ = ' + nf(D) + ' > 0') + ' : deux racines ' + M('x_1 = ' + nf(x1)) + ' et ' + M('x_2 = ' + nf(x2)) + '.',
      'Règle : ' + M('f(x)') + ' est du <b>signe de ' + M('a') + '</b> à l’extérieur des racines, et du <b>signe contraire</b> entre les racines.',
      'Ici ' + M('a = ' + nf(a)) + ' : ' + M('f(x)') + ' est ' + (a > 0 ? 'positif' : 'négatif') + ' à l’extérieur et ' +
        (a > 0 ? 'négatif' : 'positif') + ' sur ' + optEntre + '.',
      'Réponse : ' + options[bon] + '.'
    ]
  };
});

G('second-degre', 'sd-optim', 'Problème d’optimisation', 'ds', function(){
  if (Math.random() < 0.5){
    const L = R.pick([40, 60, 80, 100, 120]);
    const x = L / 4, A = L * L / 8;
    return {
      enonce: '<p>Un éleveur dispose de <b>' + L + ' m</b> de grillage pour clôturer un enclos <b>rectangulaire adossé à un mur</b> ' +
              '(seuls trois côtés sont à clôturer : deux largeurs ' + M('x') + ' et une longueur).</p>' +
              '<p>Quelle largeur ' + M('x') + ' rend l’aire maximale, et combien vaut cette aire ?</p>',
      champs: [
        { type: 'num', label: 'x (en m)', bon: x, tol: 1e-6 },
        { type: 'num', label: 'aire max (en m²)', bon: A, tol: 1e-6 }
      ],
      etapes: [
        'La longueur vaut ' + M(L + ' - 2x') + ', donc l’aire est ' + M('A(x) = x(' + L + ' - 2x) = -2x^{2} + ' + L + 'x') + ', avec ' + M('x ∈ ] 0 ; ' + (L / 2) + ' [') + '.',
        'C’est un trinôme avec ' + M('a = -2 &lt; 0') + ' : la parabole est tournée vers le bas, le <b>sommet est un maximum</b>.',
        M('α = frac{-b}{2a} = frac{-' + L + '}{-4} = ' + nf(x)),
        M('A(' + nf(x) + ') = ' + nf(x) + ' × (' + L + ' - ' + nf(2 * x) + ') = ' + nf(x) + ' × ' + nf(L - 2 * x) + ' = ' + nf(A)),
        'L’aire est maximale pour ' + M('x = ' + nf(x)) + ' m et vaut ' + M(nf(A)) + ' m².'
      ]
    };
  }
  const v = R.pick([20, 30, 40, 50]);
  const h0 = R.pick([0, 1, 2, 5]);
  const t = v / 10, h = v * v / 20 + h0;
  return {
    enonce: '<p>Un objet est lancé vers le haut. Sa hauteur, en mètres, après ' + M('t') + ' secondes est</p>' +
            Mc('h(t) = -5t^{2} + ' + v + 't' + (h0 ? ' + ' + h0 : '')) +
            '<p>À quel instant la hauteur est-elle maximale, et quelle est cette hauteur ?</p>',
    champs: [
      { type: 'num', label: 't (en s)', bon: t, tol: 1e-6 },
      { type: 'num', label: 'hauteur max (en m)', bon: h, tol: 1e-6 }
    ],
    etapes: [
      'Trinôme avec ' + M('a = -5 &lt; 0') + ' : le sommet est un <b>maximum</b>.',
      M('α = frac{-b}{2a} = frac{-' + v + '}{-10} = ' + nf(t)) + ' seconde(s).',
      M('h(' + nf(t) + ') = -5 × ' + nf(t * t) + ' + ' + v + ' × ' + nf(t) + (h0 ? ' + ' + h0 : '') + ' = ' + nf(h)) + ' mètres.',
      'La hauteur maximale est ' + M(nf(h)) + ' m, atteinte au bout de ' + M(nf(t)) + ' s.'
    ]
  };
});

/* =================== SUITES =================== */

G('suites', 'su-nature', 'Reconnaître la nature d’une suite', 'app', function(){
  const arith = Math.random() < 0.5;
  const explicite = Math.random() < 0.5;
  let enonce, raison, etapes;
  if (arith){
    const u0 = R.int(-10, 20), r = R.nz(-7, 9);
    raison = r;
    if (explicite){
      enonce = M('u_n = ' + lead(r, 'n') + (u0 ? sgn(u0, '') : ''));
      etapes = [
        'On calcule ' + M('u_{n+1} - u_n') + ' : ' + M('u_{n+1} = ' + nf(r) + '(n + 1) ' + (u0 ? sgn(u0, '') : '') + ' = ' + lead(r, 'n') + sgn(r + u0, '')) + '.',
        M('u_{n+1} - u_n = ' + nf(r)) + ' : c’est une <b>constante</b>.',
        'La suite est donc <b>arithmétique</b> de raison ' + M('r = ' + nf(r)) + '.'
      ];
    } else {
      enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = u_n ' + sgn(r, ''));
      etapes = [
        'On passe d’un terme au suivant en <b>ajoutant</b> toujours ' + M(nf(r)) + '.',
        'La suite est <b>arithmétique</b> de raison ' + M('r = ' + nf(r)) + '.',
        'Son terme général est ' + M('u_n = u_0 + nr = ' + nf(u0) + sgn(r, 'n'))
      ];
    }
  } else {
    const u0 = R.pick([1, 2, 3, 5, 8, 10, 100]), q = R.pick([2, 3, 5, 0.5, 1.5, -2, 0.8]);
    raison = q;
    if (explicite){
      enonce = M('u_n = ' + (u0 === 1 ? '' : nf(u0) + ' × ') + '(' + nf(q) + ')^{n}');
      etapes = [
        'On calcule ' + M('frac{u_{n+1}}{u_n}') + '.',
        M('frac{u_{n+1}}{u_n} = frac{' + nf(u0) + ' × (' + nf(q) + ')^{n+1}}{' + nf(u0) + ' × (' + nf(q) + ')^{n}} = ' + nf(q)) + ' : constante.',
        'La suite est <b>géométrique</b> de raison ' + M('q = ' + nf(q)) + '.'
      ];
    } else {
      enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + nf(q) + ' × u_n');
      etapes = [
        'On passe d’un terme au suivant en <b>multipliant</b> toujours par ' + M(nf(q)) + '.',
        'La suite est <b>géométrique</b> de raison ' + M('q = ' + nf(q)) + '.',
        'Son terme général est ' + M('u_n = u_0 q^{n} = ' + nf(u0) + ' × (' + nf(q) + ')^{n}')
      ];
    }
  }
  return {
    enonce: '<p>On considère la suite définie par</p>' + '<div class="center">' + enonce + '</div>' +
            '<p>Quelle est sa nature, et quelle est sa raison ?</p>',
    champs: [
      { type: 'choix', label: 'Nature', options: ['Arithmétique', 'Géométrique', 'Ni l’une ni l’autre'], bon: arith ? 0 : 1 },
      { type: 'num', label: 'Raison', bon: raison, tol: 1e-6 }
    ],
    etapes: etapes
  };
});

G('suites', 'su-terme', 'Calculer des termes', 'app', function(){
  const u0 = R.int(-4, 9), a = R.pick([2, 3, -2]), b = R.int(-6, 6);
  const u1 = a * u0 + b, u2 = a * u1 + b, u3 = a * u2 + b;
  return {
    enonce: '<p>Soit la suite définie par ' + M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + lead(a, 'u_n') + (b ? sgn(b, '') : '')) + '.</p>' +
            '<p>Calcule ' + M('u_3') + '.</p>',
    champs: [{ type: 'num', label: 'u₃ =', bon: u3, tol: 1e-6 }],
    etapes: [
      M('u_1 = ' + nf(a) + ' × ' + nf(u0) + (b ? sgn(b, '') : '') + ' = ' + nf(u1)),
      M('u_2 = ' + nf(a) + ' × ' + nf(u1) + (b ? sgn(b, '') : '') + ' = ' + nf(u2)),
      M('u_3 = ' + nf(a) + ' × ' + nf(u2) + (b ? sgn(b, '') : '') + ' = ' + nf(u3)),
      'Attention : la suite est définie <b>par récurrence</b>, il faut calculer tous les termes intermédiaires.'
    ]
  };
});

G('suites', 'su-explicite', 'Terme général', 'ent', function(){
  const arith = Math.random() < 0.5;
  if (arith){
    const u0 = R.int(-8, 15), r = R.nz(-6, 8);
    return {
      enonce: '<p>Soit ' + M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = u_n ' + sgn(r, '')) + '.</p><p>Quel est le terme général ' + M('u_n') + ' ?</p>',
      qcm: {
        options: [
          M('u_n = ' + nf(u0) + sgn(r, 'n')),
          M('u_n = ' + nf(u0) + ' ' + (r < 0 ? '-' : '+') + ' ' + Math.abs(r) + '(n - 1)'),
          M('u_n = ' + nf(u0) + ' × ' + nf(r) + '^{n}'),
          M('u_n = ' + lead(u0, 'n') + sgn(r, ''))
        ], bon: 0
      },
      etapes: [
        'La suite est <b>arithmétique</b> de raison ' + M('r = ' + nf(r)) + ', et le premier terme est ' + M('u_0') + '.',
        'Formule du cours : ' + M('u_n = u_0 + n × r') + '.',
        'Donc ' + M('u_n = ' + nf(u0) + sgn(r, 'n')) + '.',
        '<b>Piège</b> : ' + M('u_n = u_0 + nr') + ' quand on part de ' + M('u_0') + ', mais ' + M('u_n = u_1 + (n-1)r') + ' quand on part de ' + M('u_1') + '.'
      ]
    };
  }
  const u0 = R.pick([2, 3, 5, 10, 50]), q = R.pick([2, 3, 0.5, 1.5]);
  return {
    enonce: '<p>Soit ' + M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + nf(q) + ' × u_n') + '.</p><p>Quel est le terme général ' + M('u_n') + ' ?</p>',
    qcm: {
      options: [
        M('u_n = ' + nf(u0) + ' × ' + nf(q) + '^{n}'),
        M('u_n = ' + nf(u0) + ' × ' + nf(q) + '^{n-1}'),
        M('u_n = ' + nf(u0) + ' + ' + nf(q) + 'n'),
        M('u_n = ' + nf(u0 * q) + ' × ' + nf(q) + '^{n}')
      ], bon: 0
    },
    etapes: [
      'La suite est <b>géométrique</b> de raison ' + M('q = ' + nf(q)) + ', premier terme ' + M('u_0 = ' + nf(u0)) + '.',
      'Formule du cours : ' + M('u_n = u_0 × q^{n}') + '.',
      'Vérification : ' + M('u_0 = ' + nf(u0) + ' × ' + nf(q) + '^{0} = ' + nf(u0)) + ' ✓'
    ]
  };
});

G('suites', 'su-somme', 'Somme de termes', 'ent', function(){
  const v = R.int(1, 3);
  if (v === 1){
    const n = R.int(18, 60), S = n * (n + 1) / 2;
    return {
      enonce: '<p>Calcule la somme des entiers de 1 à ' + n + ' :</p>' + Mc('S = 1 + 2 + 3 + … + ' + n),
      champs: [{ type: 'num', label: 'S =', bon: S, tol: 1e-6 }],
      etapes: [
        'Formule du cours : ' + M('1 + 2 + … + n = frac{n(n+1)}{2}') + '.',
        M('S = frac{' + n + ' × ' + (n + 1) + '}{2} = frac{' + (n * (n + 1)) + '}{2} = ' + nf(S))
      ]
    };
  }
  if (v === 2){
    const u0 = R.int(-5, 12), r = R.nz(-5, 7), n = R.int(8, 25);
    const un = u0 + n * r, S = (n + 1) * (u0 + un) / 2;
    return {
      enonce: '<p>' + M('(u_n)') + ' est arithmétique de premier terme ' + M('u_0 = ' + nf(u0)) + ' et de raison ' + M('r = ' + nf(r)) + '.</p>' +
              '<p>Calcule ' + M('S = u_0 + u_1 + … + u_{' + n + '}') + '.</p>',
      champs: [{ type: 'num', label: 'S =', bon: S, tol: 1e-6 }],
      etapes: [
        M('u_{' + n + '} = u_0 + ' + n + 'r = ' + nf(u0) + ' + ' + n + ' × (' + nf(r) + ') = ' + nf(un)),
        'Il y a ' + M(nf(n + 1)) + ' termes (de ' + M('u_0') + ' à ' + M('u_{' + n + '}') + ').',
        'Formule : ' + M('S = frac{(nombre de termes) × (premier + dernier)}{2}'),
        M('S = frac{' + (n + 1) + ' × (' + nf(u0) + ' + ' + nf(un) + ')}{2} = ' + nf(S))
      ]
    };
  }
  const n = R.int(5, 12), S = Math.pow(2, n + 1) - 1;
  return {
    enonce: '<p>Calcule</p>' + Mc('S = 1 + 2 + 2^{2} + 2^{3} + … + 2^{' + n + '}'),
    champs: [{ type: 'num', label: 'S =', bon: S, tol: 1e-6 }],
    etapes: [
      'Formule du cours : ' + M('1 + q + … + q^{n} = frac{1 - q^{n+1}}{1 - q}') + ' avec ' + M('q = 2') + '.',
      M('S = frac{1 - 2^{' + (n + 1) + '}}{1 - 2} = frac{1 - ' + nf(Math.pow(2, n + 1)) + '}{-1} = ' + nf(S)),
      'Astuce de vérification : cette somme vaut toujours ' + M('2^{n+1} - 1') + '.'
    ]
  };
});

G('suites', 'su-variation', 'Sens de variation', 'ent', function(){
  const cas = R.int(1, 4);
  let enonce, bon, expl;
  if (cas === 1){
    const u0 = R.int(-5, 10), r = R.nz(-6, 6);
    enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = u_n ' + sgn(r, ''));
    bon = r > 0 ? 0 : 1;
    expl = 'Suite <b>arithmétique</b> de raison ' + M('r = ' + nf(r)) + '. Comme ' + M('r ' + (r > 0 ? '> 0' : '&lt; 0')) +
           ', la suite est <b>' + (r > 0 ? 'croissante' : 'décroissante') + '</b>.';
  } else if (cas === 2){
    const u0 = R.pick([2, 5, 10, 100]), q = R.pick([1.5, 2, 3]);
    enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + nf(q) + ' × u_n');
    bon = 0;
    expl = 'Suite <b>géométrique</b> de raison ' + M('q = ' + nf(q) + ' > 1') + ' avec ' + M('u_0 > 0') + ' : elle est <b>croissante</b>.';
  } else if (cas === 3){
    const u0 = R.pick([80, 100, 200, 1000]), q = R.pick([0.5, 0.8, 0.9]);
    enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + nf(q) + ' × u_n');
    bon = 1;
    expl = 'Suite <b>géométrique</b> de raison ' + M('0 &lt; q = ' + nf(q) + ' &lt; 1') + ' avec ' + M('u_0 > 0') + ' : elle est <b>décroissante</b>.';
  } else {
    const u0 = R.pick([1, 2, 3]), q = R.pick([-2, -3, -0.5]);
    enonce = M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + nf(q) + ' × u_n');
    bon = 2;
    expl = 'La raison est <b>négative</b> (' + M('q = ' + nf(q)) + ') : les termes changent de signe alternativement, la suite n’est <b>pas monotone</b>.';
  }
  return {
    enonce: '<p>Étudie le sens de variation de la suite définie par</p><div class="center">' + enonce + '</div>',
    qcm: { options: ['Croissante', 'Décroissante', 'Ni croissante ni décroissante', 'Constante'], bon: bon },
    etapes: [expl, 'Rappel : pour une suite géométrique, le sens de variation dépend <b>à la fois</b> du signe de ' + M('u_0') + ' et de la valeur de ' + M('q') + '.']
  };
});

G('suites', 'su-seuil', 'Recherche de seuil', 'ds', function(){
  const croissante = Math.random() < 0.7;
  const u0 = R.pick([200, 500, 1000, 1500, 2500]);
  const p = croissante ? R.pick([2, 3, 4, 5, 8, 10]) : R.pick([10, 15, 20]);
  const q = croissante ? 1 + p / 100 : 1 - p / 100;
  const k = R.int(6, 20);
  let S = u0 * Math.pow(q, k);
  S = croissante ? Math.round(S / 100) * 100 : Math.round(S / 10) * 10;
  if (croissante && S <= u0) S = u0 + 100;
  if (!croissante && S < 10) S = 10;
  let u = u0, n = 0, trace = [];
  while (croissante ? u <= S : u >= S){ u = u * q; n++; if (n <= 3) trace.push(n); if (n > 4000) break; }
  const suiteTxt = croissante ? 'augmente de ' + p + ' % par an' : 'diminue de ' + p + ' % par an';
  return {
    enonce: '<p>Une population de <b>' + nf(u0) + '</b> individus ' + suiteTxt + '. On note ' + M('u_n') +
            ' l’effectif au bout de ' + M('n') + ' années.</p>' +
            '<p>À partir de quelle année l’effectif ' + (croissante ? 'dépasse-t-il' : 'passe-t-il en dessous de') +
            ' <b>' + nf(S) + '</b> ? (donne le plus petit entier ' + M('n') + ')</p>',
    champs: [{ type: 'num', label: 'n =', bon: n, tol: 1e-9 }],
    etapes: [
      (croissante ? 'Une hausse' : 'Une baisse') + ' de ' + p + ' % correspond à un coefficient multiplicateur ' + M('q = ' + nf(q)) +
        ' : la suite est <b>géométrique</b>, ' + M('u_n = ' + nf(u0) + ' × ' + nf(q) + '^{n}') + '.',
      'On calcule les termes jusqu’à ' + (croissante ? 'dépasser' : 'descendre sous') + ' ' + M(nf(S)) + ' : ' +
        trace.map(i => M('u_{' + i + '} ≈ ' + nf(u0 * Math.pow(q, i), 1))).join(', ') + ', …',
      'On obtient ' + M('u_{' + n + '} ≈ ' + nf(u0 * Math.pow(q, n), 1)) + ' et ' + M('u_{' + (n - 1) + '} ≈ ' + nf(u0 * Math.pow(q, n - 1), 1)) +
        ' : le seuil est franchi pour ' + M('n = ' + n) + '.',
      'Algorithme correspondant :<pre class="code">def seuil():\n    u = ' + u0 + '\n    n = 0\n    while u ' + (croissante ? '&lt;=' : '&gt;=') + ' ' + S +
        ':\n        u = u * ' + String(q) + '\n        n = n + 1\n    return n</pre>'
    ]
  };
});

/* =================== DÉRIVATION =================== */

G('derivation', 'de-polynome', 'Dériver un polynôme', 'app', function(){
  const a = R.nz(-4, 4), b = R.nz(-6, 6), c = R.nz(-8, 8), d = R.int(-9, 9);
  const f = lead(a, 'x^{3}') + sgn(b, 'x^{2}') + sgn(c, 'x') + (d ? sgn(d, '') : '');
  return {
    enonce: '<p>Calcule la dérivée de</p>' + Mc('f(x) = ' + f),
    qcm: {
      options: [
        M('f′(x) = ' + lead(3 * a, 'x^{2}') + sgn(2 * b, 'x') + sgn(c, '')),
        M('f′(x) = ' + lead(3 * a, 'x^{2}') + sgn(2 * b, 'x') + sgn(c, '') + (d ? sgn(d, '') : ' + 1')),
        M('f′(x) = ' + lead(a, 'x^{2}') + sgn(b, 'x') + sgn(c, '')),
        M('f′(x) = ' + lead(3 * a, 'x^{2}') + sgn(b, 'x') + sgn(c, ''))
      ], bon: 0
    },
    etapes: [
      'On dérive terme par terme avec ' + M('(x^{n})′ = n x^{n-1}') + '.',
      M('(' + lead(a, 'x^{3}') + ')′ = ' + lead(3 * a, 'x^{2}')) + ', ' +
        M('(' + lead(b, 'x^{2}') + ')′ = ' + lead(2 * b, 'x')) + ', ' +
        M('(' + lead(c, 'x') + ')′ = ' + nf(c)) + ', et la dérivée de la constante ' + M(nf(d)) + ' est <b>0</b>.',
      M('f′(x) = ' + lead(3 * a, 'x^{2}') + sgn(2 * b, 'x') + sgn(c, ''))
    ]
  };
});

G('derivation', 'de-nombre-derive', 'Nombre dérivé', 'app', function(){
  const a = R.nz(-4, 4), b = R.nz(-7, 7), c = R.int(-8, 8), k = R.nz(-4, 4);
  const v = 2 * a * k + b;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p><p>Calcule ' + M('f′(' + nf(k) + ')') + '.</p>',
    champs: [{ type: 'num', label: 'f′(' + nf(k) + ') =', bon: v, tol: 1e-6 }],
    etapes: [
      M('f′(x) = ' + lead(2 * a, 'x') + sgn(b, '')),
      M('f′(' + nf(k) + ') = ' + nf(2 * a) + ' × (' + nf(k) + ') ' + sgn(b, '') + ' = ' + nf(v)),
      'Interprétation : ' + M(nf(v)) + ' est le <b>coefficient directeur de la tangente</b> à la courbe au point d’abscisse ' + M(nf(k)) + '.'
    ]
  };
});

G('derivation', 'de-tangente', 'Équation de la tangente', 'ent', function(){
  const a = R.pick([1, -1, 2, -2]), b = R.nz(-6, 6), c = R.int(-8, 8), k = R.nz(-3, 3);
  const m = 2 * a * k + b, y0 = a * k * k + b * k + c, p = y0 - m * k;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + trinome(a, b, c)) + '.</p>' +
            '<p>Détermine l’équation ' + M('y = mx + p') + ' de la tangente à la courbe au point d’abscisse ' + M('a = ' + nf(k)) + '.</p>',
    champs: [
      { type: 'num', label: 'm =', bon: m, tol: 1e-6 },
      { type: 'num', label: 'p =', bon: p, tol: 1e-6 }
    ],
    etapes: [
      M('f(' + nf(k) + ') = ' + nf(y0)) + ' et ' + M('f′(x) = ' + lead(2 * a, 'x') + sgn(b, '')) + ' donc ' + M('f′(' + nf(k) + ') = ' + nf(m)) + '.',
      'Formule : ' + M('y = f′(a)(x - a) + f(a)') + ', ici ' + M('y = ' + nf(m) + '(x ' + (k < 0 ? '+ ' + (-k) : '- ' + k) + ')' + sgn(y0, '')) + '.',
      'On développe : ' + M('y = ' + lead(m, 'x') + ' ' + sgn(-m * k, '') + ' ' + sgn(y0, '')) + ' soit ' + M('y = ' + lead(m, 'x') + sgn(p, '')) + '.',
      'Donc ' + M('m = ' + nf(m)) + ' et ' + M('p = ' + nf(p)) + '.'
    ]
  };
});

G('derivation', 'de-usuelles', 'Dériver racine et inverse', 'ent', function(){
  const a = R.nz(-5, 5), b = R.nz(-6, 6), c = R.int(-5, 5);
  /* f(x) = a√x + b/x + cx   →   f'(x) = a/(2√x) - b/x² + c */
  const fr = (p, q) => (p < 0 ? ' - ' : ' + ') + 'frac{' + Math.abs(p) + '}{' + q + '}';
  const f = lead(a, 'sqrt{x}') + fr(b, 'x') + (c ? sgn(c, 'x') : '');
  const bonne = 'f′(x) = frac{' + nf(a) + '}{2sqrt{x}}' + fr(-b, 'x^{2}') + (c ? sgn(c, '') : '');
  return {
    enonce: '<p>Calcule la dérivée, sur ' + M('] 0 ; +∞ [') + ', de</p>' + Mc('f(x) = ' + f),
    qcm: {
      options: [
        M(bonne),
        M('f′(x) = frac{' + nf(a) + '}{2sqrt{x}}' + fr(b, 'x^{2}') + (c ? sgn(c, '') : '')),
        M('f′(x) = frac{' + nf(a) + '}{sqrt{x}}' + fr(-b, 'x^{2}') + (c ? sgn(c, '') : '')),
        M('f′(x) = ' + lead(2 * a, 'sqrt{x}') + fr(-b, 'x') + (c ? sgn(c, '') : ''))
      ], bon: 0
    },
    etapes: [
      'Dérivées du cours : ' + M('(sqrt{x})′ = frac{1}{2sqrt{x}}') + ' et ' + M('(frac{1}{x})′ = frac{-1}{x^{2}}') + '.',
      'Terme par terme : ' + M('(' + lead(a, 'sqrt{x}') + ')′ = frac{' + nf(a) + '}{2sqrt{x}}') + ', ' +
        M('(frac{' + nf(b) + '}{x})′ = frac{' + nf(-b) + '}{x^{2}}') + (c ? ', et ' + M('(' + lead(c, 'x') + ')′ = ' + nf(c)) : '') + '.',
      M(bonne),
      '<b>Attention au signe</b> : dériver ' + M('frac{1}{x}') + ' fait apparaître un signe moins.'
    ]
  };
});

G('derivation', 'de-produit-quotient', 'Produit et quotient', 'ent', function(){
  if (Math.random() < 0.5){
    const a = R.nz(-4, 4), b = R.nz(-6, 6), c = R.nz(-4, 4), d = R.nz(-6, 6);
    return {
      enonce: '<p>Calcule la dérivée de</p>' + Mc('f(x) = (' + lead(a, 'x') + sgn(b, '') + ')(' + lead(c, 'x') + sgn(d, '') + ')'),
      qcm: {
        options: [
          M('f′(x) = ' + lead(2 * a * c, 'x') + sgn(a * d + b * c, '')),
          M('f′(x) = ' + nf(a * c)),
          M('f′(x) = ' + lead(a * c, 'x') + sgn(a * d + b * c, '')),
          M('f′(x) = ' + lead(2 * a * c, 'x') + sgn(a * d - b * c, ''))
        ], bon: 0
      },
      etapes: [
        'On pose ' + M('u(x) = ' + lead(a, 'x') + sgn(b, '')) + ' et ' + M('v(x) = ' + lead(c, 'x') + sgn(d, '')) + ', donc ' +
          M('u′(x) = ' + nf(a)) + ' et ' + M('v′(x) = ' + nf(c)) + '.',
        'Formule : ' + M('(uv)′ = u′v + uv′') + '.',
        M('f′(x) = ' + nf(a) + '(' + lead(c, 'x') + sgn(d, '') + ') + (' + lead(a, 'x') + sgn(b, '') + ') × ' + nf(c)),
        'On développe : ' + M('f′(x) = ' + lead(2 * a * c, 'x') + sgn(a * d + b * c, '')) + '.'
      ]
    };
  }
  let a, b, c, d, num;
  do {
    a = R.nz(-4, 4); b = R.nz(-6, 6); c = R.pick([1, 2, -1, -2]); d = R.nz(-5, 5);
    num = a * d - b * c;
  } while (num === 0);
  return {
    enonce: '<p>Calcule la dérivée de</p>' + Mc('f(x) = frac{' + lead(a, 'x') + sgn(b, '') + '}{' + lead(c, 'x') + sgn(d, '') + '}'),
    qcm: {
      options: [
        M('f′(x) = frac{' + nf(num) + '}{(' + lead(c, 'x') + sgn(d, '') + ')^{2}}'),
        M('f′(x) = frac{' + nf(b * c - a * d) + '}{(' + lead(c, 'x') + sgn(d, '') + ')^{2}}'),
        M('f′(x) = frac{' + nf(a) + '}{' + nf(c) + '}'),
        M('f′(x) = frac{' + nf(num) + '}{' + lead(c, 'x') + sgn(d, '') + '}')
      ], bon: 0
    },
    etapes: [
      M('u(x) = ' + lead(a, 'x') + sgn(b, '')) + ', ' + M('u′(x) = ' + nf(a)) + ' ; ' +
        M('v(x) = ' + lead(c, 'x') + sgn(d, '')) + ', ' + M('v′(x) = ' + nf(c)) + '.',
      'Formule : ' + M('(frac{u}{v})′ = frac{u′v - uv′}{v^{2}}') + ' — <b>l’ordre compte</b>.',
      M('u′v - uv′ = ' + nf(a) + '(' + lead(c, 'x') + sgn(d, '') + ') - (' + lead(a, 'x') + sgn(b, '') + ') × (' + nf(c) + ') = ' + nf(num)),
      'Les termes en ' + M('x') + ' se simplifient : ' + M('f′(x) = frac{' + nf(num) + '}{(' + lead(c, 'x') + sgn(d, '') + ')^{2}}') + '.'
    ]
  };
});

G('derivation', 'de-variations', 'Extremums d’un polynôme de degré 3', 'ds', function(){
  let r1, r2;
  do { r1 = R.int(-4, 3); r2 = r1 + R.int(1, 4); } while ((r1 + r2) % 2 !== 0);
  const b = -3 * (r1 + r2) / 2, c = 3 * r1 * r2, d = R.int(-5, 5);
  const f = 'x^{3}' + (b ? sgn(b, 'x^{2}') : '') + (c ? sgn(c, 'x') : '') + (d ? sgn(d, '') : '');
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + f) + ' définie sur ' + M('ℝ') + '.</p>' +
            '<p>Donne l’abscisse du <b>maximum local</b> puis celle du <b>minimum local</b>.</p>',
    champs: [
      { type: 'num', label: 'x du maximum local', bon: r1, tol: 1e-6 },
      { type: 'num', label: 'x du minimum local', bon: r2, tol: 1e-6 }
    ],
    etapes: [
      M('f′(x) = 3x^{2}' + (b ? sgn(2 * b, 'x') : '') + (c ? sgn(c, '') : '')),
      M('Δ = (' + nf(2 * b) + ')^{2} - 4 × 3 × (' + nf(c) + ') = ' + nf(4 * b * b - 12 * c)) + ' > 0 : deux racines ' +
        M('x_1 = ' + nf(r1)) + ' et ' + M('x_2 = ' + nf(r2)) + '.',
      'Le coefficient de ' + M('x^{2}') + ' dans ' + M('f′') + ' est ' + M('3 > 0') + ' : ' + M('f′') + ' est <b>positive à l’extérieur</b> des racines et <b>négative entre</b> les deux.',
      M('f') + ' est donc croissante sur ' + M('] -∞ ; ' + nf(r1) + ' ]') + ', décroissante sur ' + M('[ ' + nf(r1) + ' ; ' + nf(r2) + ' ]') +
        ', puis croissante sur ' + M('[ ' + nf(r2) + ' ; +∞ [') + '.',
      'Maximum local en ' + M('x = ' + nf(r1)) + ' (valeur ' + M(nf(r1 * r1 * r1 + b * r1 * r1 + c * r1 + d)) + '), minimum local en ' +
        M('x = ' + nf(r2)) + ' (valeur ' + M(nf(r2 * r2 * r2 + b * r2 * r2 + c * r2 + d)) + ').'
    ]
  };
});

/* =================== PRODUIT SCALAIRE =================== */

G('produit-scalaire', 'ps-coord', 'Produit scalaire avec les coordonnées', 'app', function(){
  const x = R.nz(-7, 7), y = R.nz(-7, 7), xp = R.nz(-7, 7), yp = R.nz(-7, 7);
  const ps = x * xp + y * yp;
  return {
    enonce: '<p>Dans un repère orthonormé, ' + M('vec{u}(' + nf(x) + ' ; ' + nf(y) + ')') + ' et ' + M('vec{v}(' + nf(xp) + ' ; ' + nf(yp) + ')') + '.</p>' +
            '<p>Calcule ' + M('vec{u} · vec{v}') + '.</p>',
    champs: [{ type: 'num', label: 'u⃗ · v⃗ =', bon: ps, tol: 1e-6 }],
    etapes: [
      'Formule : ' + M('vec{u} · vec{v} = xx′ + yy′') + '.',
      M('vec{u} · vec{v} = (' + nf(x) + ') × (' + nf(xp) + ') + (' + nf(y) + ') × (' + nf(yp) + ') = ' + nf(x * xp) + sgn(y * yp, '') + ' = ' + nf(ps)),
      ps === 0 ? 'Le produit scalaire est nul : les vecteurs sont <b>orthogonaux</b>.'
               : 'Le produit scalaire est ' + (ps > 0 ? 'positif : l’angle entre les vecteurs est <b>aigu</b>.' : 'négatif : l’angle est <b>obtus</b>.')
    ]
  };
});

G('produit-scalaire', 'ps-norme', 'Norme d’un vecteur', 'app', function(){
  const p = R.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [20, 21, 29], [12, 16, 20]]);
  const x = p[0] * R.sign(), y = p[1] * R.sign();
  return {
    enonce: '<p>Dans un repère orthonormé, ' + M('vec{u}(' + nf(x) + ' ; ' + nf(y) + ')') + '.</p><p>Calcule sa norme ' + M('‖vec{u}‖') + '.</p>',
    champs: [{ type: 'num', label: '‖u⃗‖ =', bon: p[2], tol: 1e-6 }],
    etapes: [
      'Formule : ' + M('‖vec{u}‖ = sqrt{x^{2} + y^{2}}') + '.',
      M('‖vec{u}‖ = sqrt{(' + nf(x) + ')^{2} + (' + nf(y) + ')^{2}} = sqrt{' + (p[0] * p[0]) + ' + ' + (p[1] * p[1]) + '} = sqrt{' + (p[2] * p[2]) + '} = ' + p[2]),
      'Une norme est toujours <b>positive</b>, même si les coordonnées sont négatives.'
    ]
  };
});

G('produit-scalaire', 'ps-orthogonal', 'Trouver une valeur qui rend deux vecteurs orthogonaux', 'ent', function(){
  const x = R.pick([1, 2, 3, 4]), y = R.nz(-6, 6), t = R.nz(-4, 4);
  const yp = x * t, k = -y * t;
  return {
    enonce: '<p>On donne ' + M('vec{u}(' + nf(x) + ' ; ' + nf(y) + ')') + ' et ' + M('vec{v}(k ; ' + nf(yp) + ')') + ' dans un repère orthonormé.</p>' +
            '<p>Pour quelle valeur de ' + M('k') + ' ces deux vecteurs sont-ils orthogonaux ?</p>',
    champs: [{ type: 'num', label: 'k =', bon: k, tol: 1e-6 }],
    etapes: [
      'Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est <b>nul</b>.',
      M('vec{u} · vec{v} = ' + nf(x) + 'k + (' + nf(y) + ') × (' + nf(yp) + ') = ' + nf(x) + 'k ' + sgn(y * yp, '')),
      'On résout ' + M(nf(x) + 'k ' + sgn(y * yp, '') + ' = 0') + ' soit ' + M('k = frac{' + nf(-y * yp) + '}{' + nf(x) + '} = ' + nf(k)) + '.',
      'Vérification : ' + M('(' + nf(x) + ') × (' + nf(k) + ') + (' + nf(y) + ') × (' + nf(yp) + ') = 0') + ' ✓'
    ]
  };
});

G('produit-scalaire', 'ps-angle', 'Produit scalaire avec un angle', 'ent', function(){
  const ang = R.pick([0, 60, 90, 120, 180]);
  const cosv = { 0: 1, 60: 0.5, 90: 0, 120: -0.5, 180: -1 }[ang];
  let n1 = R.int(2, 12), n2 = R.int(2, 12);
  if ((ang === 60 || ang === 120) && (n1 * n2) % 2 !== 0) n2 = n2 + 1;
  const ps = n1 * n2 * cosv;
  const cosTxt = { 0: '1', 60: 'frac{1}{2}', 90: '0', 120: '-frac{1}{2}', 180: '-1' }[ang];
  return {
    enonce: '<p>Deux vecteurs vérifient ' + M('‖vec{u}‖ = ' + n1) + ', ' + M('‖vec{v}‖ = ' + n2) +
            ' et forment un angle de <b>' + ang + '°</b>.</p><p>Calcule ' + M('vec{u} · vec{v}') + '.</p>',
    champs: [{ type: 'num', label: 'u⃗ · v⃗ =', bon: ps, tol: 1e-6 }],
    etapes: [
      'Formule : ' + M('vec{u} · vec{v} = ‖vec{u}‖ × ‖vec{v}‖ × @cos(θ)') + '.',
      M('@cos(' + ang + '°) = ' + cosTxt),
      M('vec{u} · vec{v} = ' + n1 + ' × ' + n2 + ' × ' + (cosv < 0 ? '(' + nf(cosv) + ')' : nf(cosv)) + ' = ' + nf(ps)),
      ang === 90 ? 'Un angle droit donne toujours un produit scalaire <b>nul</b>.'
                 : (ang > 90 ? 'Angle <b>obtus</b> : le produit scalaire est <b>négatif</b>.' : 'Angle <b>aigu</b> (ou nul) : le produit scalaire est <b>positif</b>.')
    ]
  };
});

G('produit-scalaire', 'ps-alkashi', 'Théorème d’Al-Kashi', 'ent', function(){
  const ang = R.pick([60, 90, 120]);
  const cosv = { 60: 0.5, 90: 0, 120: -0.5 }[ang];
  const b = R.int(3, 12), c = R.int(3, 12);
  const a2 = b * b + c * c - 2 * b * c * cosv;
  const a = Math.sqrt(a2);
  const cosTxt = { 60: 'frac{1}{2}', 90: '0', 120: '-frac{1}{2}' }[ang];
  return {
    enonce: '<p>Dans un triangle ' + M('ABC') + ' : ' + M('AB = ' + c) + ', ' + M('AC = ' + b) +
            ' et l’angle ' + M('Â') + ' mesure <b>' + ang + '°</b>.</p>' +
            '<p>Calcule ' + M('BC^{2}') + ' puis ' + M('BC') + ' (arrondi au dixième).</p>',
    champs: [
      { type: 'num', label: 'BC² =', bon: a2, tol: 1e-6 },
      { type: 'num', label: 'BC ≈', bon: Math.round(a * 10) / 10, tol: 0.051 }
    ],
    etapes: [
      'Al-Kashi : ' + M('BC^{2} = AB^{2} + AC^{2} - 2 × AB × AC × @cos(Â)') + '.',
      M('@cos(' + ang + '°) = ' + cosTxt),
      M('BC^{2} = ' + (c * c) + ' + ' + (b * b) + ' - 2 × ' + c + ' × ' + b + ' × ' + (cosv < 0 ? '(' + nf(cosv) + ')' : nf(cosv)) + ' = ' + nf(a2)),
      M('BC = sqrt{' + nf(a2) + '} ≈ ' + nf(Math.round(a * 100) / 100)) + ', soit ' + M(nf(Math.round(a * 10) / 10)) + ' au dixième.',
      ang === 90 ? 'Avec un angle droit, Al-Kashi redonne exactement le <b>théorème de Pythagore</b>.'
        : (ang > 90 ? 'Angle <b>obtus</b> : le cosinus est négatif, le terme ' + M('-2bc @cos(Â)') + ' devient positif et <b>allonge</b> le côté opposé.'
                    : 'Angle <b>aigu</b> : le cosinus est positif, le côté opposé est plus <b>court</b> que dans le cas rectangle.')
    ]
  };
});

G('produit-scalaire', 'ps-rectangle', 'Démontrer qu’un triangle est rectangle', 'ds', function(){
  const ortho = Math.random() < 0.5;
  const ax = R.int(-4, 4), ay = R.int(-4, 4);
  const p = R.nz(-4, 4), q = R.nz(-4, 4);
  const bx = ax + p, by = ay + q;
  let cx, cy;
  if (ortho){ const t = R.pick([1, -1, 2, -2]); cx = ax - q * t; cy = ay + p * t; }
  else { let u = R.nz(-4, 4), v = R.nz(-4, 4); while (p * u + q * v === 0){ u = R.nz(-4, 4); v = R.nz(-4, 4); } cx = ax + u; cy = ay + v; }
  const abx = bx - ax, aby = by - ay, acx = cx - ax, acy = cy - ay;
  const ps = abx * acx + aby * acy;
  return {
    enonce: '<p>Dans un repère orthonormé : ' + M('A(' + nf(ax) + ' ; ' + nf(ay) + ')') + ', ' + M('B(' + nf(bx) + ' ; ' + nf(by) + ')') +
            ', ' + M('C(' + nf(cx) + ' ; ' + nf(cy) + ')') + '.</p>' +
            '<p>Calcule ' + M('vec{AB} · vec{AC}') + ', puis dis si le triangle ' + M('ABC') + ' est rectangle en ' + M('A') + '.</p>',
    champs: [
      { type: 'num', label: 'AB⃗ · AC⃗ =', bon: ps, tol: 1e-6 },
      { type: 'choix', label: 'Rectangle en A ?', options: ['Oui', 'Non'], bon: ps === 0 ? 0 : 1 }
    ],
    etapes: [
      'Coordonnées des vecteurs : ' + M('vec{AB}(x_B - x_A ; y_B - y_A) = vec{AB}(' + nf(abx) + ' ; ' + nf(aby) + ')') + ' et ' +
        M('vec{AC}(' + nf(acx) + ' ; ' + nf(acy) + ')') + '.',
      M('vec{AB} · vec{AC} = (' + nf(abx) + ') × (' + nf(acx) + ') + (' + nf(aby) + ') × (' + nf(acy) + ') = ' + nf(abx * acx) + sgn(aby * acy, '') + ' = ' + nf(ps)),
      ps === 0
        ? 'Le produit scalaire est <b>nul</b>, donc ' + M('vec{AB} ⊥ vec{AC}') + ' : le triangle <b>est rectangle en ' + M('A') + '</b>.'
        : 'Le produit scalaire <b>n’est pas nul</b> (' + M(nf(ps)) + '), donc les vecteurs ne sont pas orthogonaux : le triangle <b>n’est pas rectangle en ' + M('A') + '</b>.',
      'Rédaction attendue : calcul des coordonnées, calcul du produit scalaire, puis conclusion explicite avec le critère ' + M('vec{u} · vec{v} = 0 ⇔ vec{u} ⊥ vec{v}') + '.'
    ]
  };
});
