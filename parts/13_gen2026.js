/* =========================================================================
   Générateurs d'exercices pour le programme 2026 :
   le chapitre Automatismes, et les capacités nouvelles des autres chapitres.
   ========================================================================= */

/* =================== AUTOMATISMES =================== */

G('automatismes', 'au-taux-appliquer', 'Appliquer un taux d’évolution', 'app', function(){
  const hausse = Math.random() < 0.6;
  const v0 = R.pick([40, 50, 60, 80, 120, 150, 200, 250, 400, 500, 1200, 2500]);
  const t = R.pick([2, 4, 5, 8, 10, 12, 15, 20, 25, 30]);
  const cm = hausse ? 1 + t / 100 : 1 - t / 100;
  const v1 = Math.round(v0 * cm * 100) / 100;
  const contexte = R.pick([
    ['Le prix d’un article est de', '€'], ['Une population compte', 'habitants'],
    ['Un abonnement coûte', '€'], ['Une entreprise emploie', 'salariés']
  ]);
  return {
    enonce: '<p>' + contexte[0] + ' <b>' + nf(v0) + ' ' + contexte[1] + '</b>. ' +
            'Cette valeur ' + (hausse ? '<b>augmente</b>' : '<b>diminue</b>') + ' de <b>' + t + ' %</b>.</p>' +
            '<p>Quelle est la nouvelle valeur ?</p>',
    champs: [{ type: 'num', label: 'Nouvelle valeur', bon: v1, tol: 0.011 }],
    etapes: [
      (hausse ? 'Augmenter' : 'Diminuer') + ' de ' + t + ' %, c’est multiplier par le <b>coefficient multiplicateur</b> ' +
        M('CM = 1 ' + (hausse ? '+' : '-') + ' frac{' + t + '}{100} = ' + nf(cm)) + '.',
      M(nf(v0) + ' × ' + nf(cm) + ' = ' + nf(v1)),
      'La nouvelle valeur est ' + M(nf(v1)) + ' ' + contexte[1] + '.',
      '<b>Réflexe</b> : on ne calcule pas la variation pour l’ajouter ensuite, on multiplie directement. C’est plus rapide et sans erreur de signe.'
    ]
  };
});

G('automatismes', 'au-taux-calculer', 'Calculer un taux d’évolution', 'app', function(){
  const v0 = R.pick([20, 25, 40, 50, 80, 120, 200, 250, 400, 500]);
  const t = R.pick([-40, -25, -20, -15, -10, -5, 5, 10, 15, 20, 25, 40, 50]);
  const v1 = Math.round(v0 * (1 + t / 100) * 100) / 100;
  return {
    enonce: '<p>Une valeur passe de <b>' + nf(v0) + '</b> à <b>' + nf(v1) + '</b>.</p>' +
            '<p>Quel est le taux d’évolution, en pourcentage ? (un nombre négatif pour une baisse)</p>',
    champs: [{ type: 'num', label: 'Taux (en %)', bon: t, tol: 0.06 }],
    etapes: [
      'Formule : ' + M('taux = frac{valeur finale - valeur initiale}{valeur initiale} × 100') + '.',
      M('frac{' + nf(v1) + ' - ' + nf(v0) + '}{' + nf(v0) + '} = frac{' + nf(Math.round((v1 - v0) * 100) / 100) + '}{' + nf(v0) + '} = ' + nf(t / 100)),
      'Soit ' + M(nf(t) + ' \\%') + ' : une ' + (t > 0 ? '<b>hausse</b>' : '<b>baisse</b>') + ' de ' + nf(Math.abs(t)) + ' %.',
      '<b>Piège</b> : on divise toujours par la valeur <b>de départ</b>, jamais par celle d’arrivée.'
    ]
  };
});

G('automatismes', 'au-taux-successifs', 'Évolutions successives', 'ent', function(){
  const t1 = R.pick([-30, -20, -10, -5, 10, 15, 20, 25, 50]);
  const t2 = R.pick([-25, -20, -10, -5, 5, 10, 20, 30]);
  const cm = (1 + t1 / 100) * (1 + t2 / 100);
  const t = Math.round((cm - 1) * 10000) / 100;
  return {
    enonce: '<p>Une valeur subit deux évolutions successives :</p>' +
            '<ul style="margin:6px 0 0;padding-left:20px"><li>d’abord <b>' + (t1 > 0 ? '+ ' : '− ') + Math.abs(t1) + ' %</b> ;</li>' +
            '<li>puis <b>' + (t2 > 0 ? '+ ' : '− ') + Math.abs(t2) + ' %</b>.</li></ul>' +
            '<p style="margin-top:10px">Quel est le taux d’évolution global, en pourcentage ? (arrondi au centième)</p>',
    champs: [{ type: 'num', label: 'Taux global (en %)', bon: t, tol: 0.011 }],
    etapes: [
      'Les <b>coefficients multiplicateurs se multiplient</b>, les taux ne s’additionnent pas.',
      M('CM_1 = ' + nf(1 + t1 / 100)) + ' et ' + M('CM_2 = ' + nf(1 + t2 / 100)) + '.',
      M('CM_{global} = ' + nf(1 + t1 / 100) + ' × ' + nf(1 + t2 / 100) + ' = ' + nf(Math.round(cm * 100000) / 100000)),
      'On revient au taux : ' + M('(' + nf(Math.round(cm * 100000) / 100000) + ' - 1) × 100 = ' + nf(t)) + ' %.',
      'Remarque : ' + M(nf(t1) + ' + ' + nf(t2) + ' = ' + nf(t1 + t2)) + ' % aurait été <b>faux</b>.'
    ]
  };
});

G('automatismes', 'au-taux-reciproque', 'Taux réciproque', 'ent', function(){
  const t = R.pick([-50, -25, -20, -10, 10, 20, 25, 50, 100]);
  const cm = 1 + t / 100;
  const tr = Math.round((1 / cm - 1) * 10000) / 100;
  return {
    enonce: '<p>Une valeur a évolué de <b>' + (t > 0 ? '+ ' : '− ') + Math.abs(t) + ' %</b>.</p>' +
            '<p>Quel taux d’évolution, en pourcentage, la ramènerait exactement à sa valeur de départ ? (arrondi au centième)</p>',
    champs: [{ type: 'num', label: 'Taux réciproque (en %)', bon: tr, tol: 0.011 }],
    etapes: [
      'Le coefficient de départ est ' + M('CM = ' + nf(cm)) + '.',
      'Pour annuler l’évolution, il faut multiplier par l’<b>inverse</b> : ' + M('frac{1}{' + nf(cm) + '} = ' + nf(Math.round(10000 / cm) / 10000)) + '.',
      'Le taux correspondant est ' + M('(' + nf(Math.round(10000 / cm) / 10000) + ' - 1) × 100 = ' + nf(tr)) + ' %.',
      '<b>À retenir</b> : le taux réciproque n’est pas l’opposé. Après ' + M('+' + nf(t) + ' \\%') + ', ce n’est pas ' +
        M(nf(-t) + ' \\%') + ' mais ' + M(nf(tr) + ' \\%') + '.'
    ]
  };
});

G('automatismes', 'au-produit-nul', 'Équation produit nul', 'app', function(){
  const a = R.pick([1, 2, 3, -1, -2]), b = R.nz(-8, 8);
  const c = R.pick([1, 2, 4, -1, -3]), d = R.nz(-9, 9);
  const x1 = -b / a, x2 = -d / c;
  const pet = Math.min(x1, x2), gra = Math.max(x1, x2);
  return {
    enonce: '<p>Résous</p>' + Mc('(' + lead(a, 'x') + sgn(b, '') + ')(' + lead(c, 'x') + sgn(d, '') + ') = 0'),
    champs: [
      { type: 'num', label: 'plus petite solution', bon: pet, tol: 1e-6 },
      { type: 'num', label: 'plus grande solution', bon: gra, tol: 1e-6 }
    ],
    etapes: [
      'Un produit est nul <b>si et seulement si</b> l’un de ses facteurs est nul : ' + M('A × B = 0 ⇔ A = 0') + ' ou ' + M('B = 0') + '.',
      M(lead(a, 'x') + sgn(b, '') + ' = 0') + ' donne ' + M('x = frac{' + nf(-b) + '}{' + nf(a) + '} = ' + nf(x1)) + '.',
      M(lead(c, 'x') + sgn(d, '') + ' = 0') + ' donne ' + M('x = frac{' + nf(-d) + '}{' + nf(c) + '} = ' + nf(x2)) + '.',
      'Les solutions sont ' + M(nf(pet)) + ' et ' + M(nf(gra)) + '.',
      '<b>Ne jamais développer</b> : l’équation est déjà sous la forme la plus commode.'
    ]
  };
});

G('automatismes', 'au-signe-factorise', 'Signe d’une expression factorisée', 'ent', function(){
  const a = R.pick([1, 2, -1, -3]);
  let r1 = R.nz(-5, 4), r2 = r1 + R.int(1, 5);
  const positif = Math.random() < 0.5;
  /* a(x - r1)(x - r2) : du signe de a à l'extérieur, du signe contraire entre */
  const dedans = M('] ' + nf(r1) + ' ; ' + nf(r2) + ' [');
  const dehors = M('] -∞ ; ' + nf(r1) + ' [ ∪ ] ' + nf(r2) + ' ; +∞ [');
  const bonEstDehors = positif ? (a > 0) : (a < 0);
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + coef(a) + fact(r1) + fact(r2)) + '.</p>' +
            '<p>Pour quelles valeurs de ' + M('x') + ' a-t-on ' + M('f(x) ' + (positif ? '>' : '&lt;') + ' 0') + ' ?</p>',
    qcm: { options: [dedans, dehors, 'Pour tout réel ' + M('x'), 'Aucune valeur de ' + M('x')], bon: bonEstDehors ? 1 : 0 },
    etapes: [
      'L’expression est <b>déjà factorisée</b> : on lit les racines directement, ' + M('x = ' + nf(r1)) + ' et ' + M('x = ' + nf(r2)) + '.',
      'Tableau de signes : une ligne pour ' + M(fact(r1)) + ', une pour ' + M(fact(r2)) + ', une pour le produit.',
      'Chaque facteur ' + M('x - r') + ' est <b>négatif avant</b> ' + M('r') + ' et <b>positif après</b>.',
      'Avec ' + M('a = ' + nf(a)) + ', le produit est ' + (a > 0 ? 'positif' : 'négatif') + ' à l’extérieur des racines et ' +
        (a > 0 ? 'négatif' : 'positif') + ' entre les deux.',
      'Réponse : ' + (bonEstDehors ? dehors : dedans) + '.'
    ]
  };
});

G('automatismes', 'au-droite', 'Coefficient directeur et équation réduite', 'app', function(){
  const m = R.pick([-3, -2, -1, 1, 2, 3, 0.5, -0.5, 1.5]);
  const p = R.int(-6, 6);
  const xa = R.int(-5, 0), xb = xa + R.pick([2, 4]);
  const f = x => m * x + p;
  return {
    enonce: '<p>Une droite passe par ' + M('A(' + nf(xa) + ' ; ' + nf(f(xa)) + ')') + ' et ' + M('B(' + nf(xb) + ' ; ' + nf(f(xb)) + ')') + '.</p>' +
            '<p>Donne son coefficient directeur ' + M('m') + ' et son ordonnée à l’origine ' + M('p') + '.</p>',
    champs: [
      { type: 'num', label: 'm =', bon: m, tol: 1e-6 },
      { type: 'num', label: 'p =', bon: p, tol: 1e-6 }
    ],
    etapes: [
      'Formule : ' + M('m = frac{y_B - y_A}{x_B - x_A}') + '.',
      M('m = frac{' + nf(f(xb)) + ' - (' + nf(f(xa)) + ')}{' + nf(xb) + ' - (' + nf(xa) + ')} = frac{' + nf(f(xb) - f(xa)) + '}{' + nf(xb - xa) + '} = ' + nf(m)),
      'Puis on utilise un des deux points dans ' + M('y = mx + p') + ' : ' +
        M(nf(f(xa)) + ' = ' + nf(m) + ' × (' + nf(xa) + ') + p') + ', donc ' + M('p = ' + nf(p)) + '.',
      'Équation réduite : ' + M('y = ' + lead(m, 'x') + (p ? sgn(p, '') : '')) + '.'
    ]
  };
});

G('automatismes', 'au-tableau-croise', 'Probabilité dans un tableau croisé', 'ent', function(){
  const a = R.int(20, 60) * 2, b = R.int(15, 50) * 2;
  const c = R.int(10, 45) * 2, d = R.int(20, 60) * 2;
  const total = a + b + c + d;
  const quoi = R.int(1, 3);
  const bon = quoi === 1 ? a / (a + b) : (quoi === 2 ? a / (a + c) : a / total);
  const libelle = quoi === 1 ? 'P<sub>A</sub>(B)' : (quoi === 2 ? 'P<sub>B</sub>(A)' : 'P(A ∩ B)');
  const expl = quoi === 1
    ? 'On se place <b>dans la ligne A</b> : sur les ' + (a + b) + ' individus de A, ' + a + ' sont aussi dans B.'
    : (quoi === 2
        ? 'On se place <b>dans la colonne B</b> : sur les ' + (a + c) + ' individus de B, ' + a + ' sont aussi dans A.'
        : 'On rapporte au <b>total général</b> : ' + a + ' individus sur ' + total + '.');
  const den = quoi === 1 ? (a + b) : (quoi === 2 ? (a + c) : total);
  return {
    enonce: '<p>Dans une population, on classe les individus selon deux caractères ' + M('A') + ' et ' + M('B') + ' :</p>' +
            '<div style="overflow-x:auto"><table class="tab"><tr><th></th><th>B</th><th>B̄</th><th>Total</th></tr>' +
            '<tr><th>A</th><td>' + a + '</td><td>' + b + '</td><td>' + (a + b) + '</td></tr>' +
            '<tr><th>Ā</th><td>' + c + '</td><td>' + d + '</td><td>' + (c + d) + '</td></tr>' +
            '<tr><th>Total</th><td>' + (a + c) + '</td><td>' + (b + d) + '</td><td>' + total + '</td></tr></table></div>' +
            '<p>On choisit un individu au hasard. Calcule <b>' + libelle + '</b> (arrondi au centième).</p>',
    champs: [{ type: 'num', label: libelle + ' ≈', bon: Math.round(bon * 100) / 100, tol: 0.011 }],
    etapes: [
      expl,
      M('frac{' + a + '}{' + den + '} ≈ ' + nf(Math.round(bon * 1000) / 1000)),
      'Soit ' + M(nf(Math.round(bon * 100) / 100)) + ' au centième.',
      '<b>Le piège du chapitre</b> : ' + M('P_A(B)') + ' divise par l’effectif de ' + M('A') + ', ' + M('P_B(A)') +
        ' par celui de ' + M('B') + ', et ' + M('P(A ∩ B)') + ' par le <b>total</b>. Trois dénominateurs différents.'
    ]
  };
});

/* =================== CAPACITÉS NOUVELLES DES AUTRES CHAPITRES =================== */

G('derivation', 'de-approximation', 'Approximation linéaire', 'ent', function(){
  const cas = R.pick([
    { f: 'sqrt{x}', a: 100, fa: 10, fp: 0.05, txt: 'sqrt{x}', d: 'frac{1}{2sqrt{x}}' },
    { f: 'sqrt{x}', a: 25,  fa: 5,  fp: 0.1,  txt: 'sqrt{x}', d: 'frac{1}{2sqrt{x}}' },
    { f: 'x^{2}',   a: 30,  fa: 900, fp: 60,  txt: 'x^{2}',   d: '2x' },
    { f: 'frac{1}{x}', a: 4, fa: 0.25, fp: -0.0625, txt: 'frac{1}{x}', d: 'frac{-1}{x^{2}}' }
  ]);
  const h = R.pick([0.1, 0.2, -0.1, 0.5, -0.2]);
  const approx = Math.round((cas.fa + cas.fp * h) * 100000) / 100000;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + cas.f) + '.</p>' +
            '<p>À l’aide de l’<b>approximation linéaire</b> en ' + M('a = ' + nf(cas.a)) + ', donne une valeur approchée de ' +
            M('f(' + nf(cas.a + h) + ')') + '.</p>',
    champs: [{ type: 'num', label: 'valeur approchée', bon: approx, tol: 0.0011 }],
    etapes: [
      'Formule : ' + M('f(a + h) ≈ f(a) + f′(a) × h') + ', valable pour ' + M('h') + ' petit.',
      M('f(' + nf(cas.a) + ') = ' + nf(cas.fa)) + ' et ' + M('f′(x) = ' + cas.d) + ' donc ' + M('f′(' + nf(cas.a) + ') = ' + nf(cas.fp)) + '.',
      'Ici ' + M('h = ' + nf(h)) + ', donc ' + M('f(' + nf(cas.a + h) + ') ≈ ' + nf(cas.fa) + ' + ' + nf(cas.fp) + ' × (' + nf(h) + ') = ' + nf(approx)) + '.',
      'Géométriquement, on a remplacé la courbe par sa <b>tangente</b> au point d’abscisse ' + M(nf(cas.a)) + '. ' +
        'Plus ' + M('h') + ' est petit, meilleure est l’approximation.'
    ]
  };
});

G('probas-conditionnelles', 'pr-bernoulli', 'Répétition d’épreuves de Bernoulli', 'ent', function(){
  const p = R.pick([0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
  const n = R.int(2, 4);
  const k = R.int(0, n);
  const binom = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]][n][k];
  const val = binom * Math.pow(p, k) * Math.pow(1 - p, n - k);
  return {
    enonce: '<p>On répète <b>' + n + ' fois</b> la même expérience, de façon indépendante. ' +
            'À chaque fois, la probabilité de <b>succès</b> est ' + M('p = ' + nf(p)) + '.</p>' +
            '<p>Quelle est la probabilité d’obtenir <b>exactement ' + k + ' succès</b> ? (arrondi au millième)</p>',
    champs: [{ type: 'num', label: 'Probabilité ≈', bon: Math.round(val * 1000) / 1000, tol: 0.0011 }],
    etapes: [
      'On dessine l’arbre des ' + n + ' répétitions : à chaque niveau, deux branches, succès (' + M(nf(p)) + ') et échec (' + M(nf(Math.round((1 - p) * 100) / 100)) + ').',
      'Un chemin donnant ' + k + ' succès et ' + (n - k) + ' échecs a pour probabilité ' +
        M(nf(p) + '^{' + k + '} × ' + nf(Math.round((1 - p) * 100) / 100) + '^{' + (n - k) + '} = ' + nf(Math.round(Math.pow(p, k) * Math.pow(1 - p, n - k) * 100000) / 100000)) + '.',
      'Il y a <b>' + binom + ' chemin' + (binom > 1 ? 's' : '') + '</b> qui donne' + (binom > 1 ? 'nt' : '') + ' exactement ' + k + ' succès : on <b>additionne</b> ces chemins.',
      M('P = ' + binom + ' × ' + nf(Math.round(Math.pow(p, k) * Math.pow(1 - p, n - k) * 100000) / 100000) + ' ≈ ' + nf(Math.round(val * 1000) / 1000)),
      '<b>Méthode du programme</b> : le long d’un chemin on multiplie, entre les chemins on additionne. Compter les chemins est l’étape qu’on oublie.'
    ]
  };
});

G('variables-aleatoires', 'va-konig', 'Espérance et variance', 'ent', function(){
  const n = 3;
  const xs = R.shuffle([R.int(-5, 0), R.int(1, 4), R.int(5, 10)]);
  const ps = R.pick([[0.5, 0.3, 0.2], [0.25, 0.25, 0.5], [0.6, 0.3, 0.1], [0.4, 0.4, 0.2]]);
  let E = 0, E2 = 0;
  for (let i = 0; i < n; i++){ E += xs[i] * ps[i]; E2 += xs[i] * xs[i] * ps[i]; }
  E = Math.round(E * 10000) / 10000;
  E2 = Math.round(E2 * 10000) / 10000;
  const V = Math.round((E2 - E * E) * 10000) / 10000;
  return {
    enonce: '<p>La loi de la variable aléatoire ' + M('X') + ' est donnée par :</p>' +
            '<div style="overflow-x:auto"><table class="tab"><tr><th>' + mathHtml('x_i') + '</th>' +
            xs.map(x => '<td>' + nf(x) + '</td>').join('') + '</tr>' +
            '<tr><th>' + mathHtml('P(X = x_i)') + '</th>' + ps.map(p => '<td>' + nf(p) + '</td>').join('') + '</tr></table></div>' +
            '<p>Calcule ' + M('E(X)') + ' puis ' + M('V(X)') + ' (arrondis au centième).</p>',
    champs: [
      { type: 'num', label: 'E(X) =', bon: Math.round(E * 100) / 100, tol: 0.011 },
      { type: 'num', label: 'V(X) =', bon: Math.round(V * 100) / 100, tol: 0.011 }
    ],
    etapes: [
      'Vérification préalable : ' + M(ps.map(p => nf(p)).join(' + ') + ' = 1') + ' ✓',
      M('E(X) = ' + xs.map((x, i) => '(' + nf(x) + ') × ' + nf(ps[i])).join(' + ') + ' = ' + nf(E)),
      'Pour la variance, on utilise <b>König-Huygens</b> : ' + M('V(X) = E(X^{2}) - E(X)^{2}') + '.',
      M('E(X^{2}) = ' + xs.map((x, i) => '(' + nf(x) + ')^{2} × ' + nf(ps[i])).join(' + ') + ' = ' + nf(E2)),
      M('V(X) = ' + nf(E2) + ' - (' + nf(E) + ')^{2} = ' + nf(Math.round(V * 100) / 100)),
      'L’écart type vaut ' + M('σ(X) = sqrt{V(X)} ≈ ' + nf(Math.round(Math.sqrt(Math.max(0, V)) * 100) / 100)) + '.'
    ]
  };
});

/* le calcul de la forme canonique dans le cas général n'est plus exigible :
   on se limite aux cas simples, avec la complétion du carré */
(function ajusterFormeCanonique(){
  const g = METHODE['sd-canonique'];
  if (!g) return;
  g.label = 'Forme canonique (compléter le carré)';
  g.fn = function(){
    const al = R.nz(-6, 6), be = R.int(-9, 9);
    const b = -2 * al, c = be + al * al;
    return {
      enonce: '<p>Soit ' + M('f(x) = ' + trinome(1, b, c)) + '.</p>' +
              '<p>Écris ' + M('f') + ' sous forme canonique ' + M('f(x) = (x - α)^{2} + β') + ' en complétant le carré.</p>',
      champs: [
        { type: 'num', label: 'α =', bon: al, tol: 1e-6 },
        { type: 'num', label: 'β =', bon: be, tol: 1e-6 }
      ],
      etapes: [
        'On utilise l’identité du programme : ' + M('x^{2} + 2a x = (x + a)^{2} - a^{2}') + '.',
        'Ici ' + M('2a = ' + nf(b)) + ', donc ' + M('a = ' + nf(b / 2)) + ' et ' +
          M('x^{2} ' + sgn(b, 'x') + ' = ' + fact(al) + '^{2} - ' + nf(al * al)) + '.',
        'On remet le terme constant : ' + M('f(x) = ' + fact(al) + '^{2} - ' + nf(al * al) + sgn(c, '') + ' = ' + fact(al) + '^{2}' + (be === 0 ? '' : sgn(be, ''))) + '.',
        'Donc ' + M('α = ' + nf(al)) + ' et ' + M('β = ' + nf(be)) + ' : le sommet est ' + M('S(' + nf(al) + ' ; ' + nf(be) + ')') + '.'
      ]
    };
  };
})();
