/* =========================================================================
   Niveau « Approfondissement » — calibré sur une évaluation exigeante :
   paramètre littéral, changement de variable, discussion selon les cas,
   position relative courbe / tangente, optimisation à deux étapes.
   ========================================================================= */

/* =================== SECOND DEGRÉ =================== */

G('second-degre', 'sd-parametre', 'Paramètre : racine double', 'exp', function(){
  const a = R.pick([1, 2, -1, -2, 3]);
  const b = R.nz(-9, 9);                 /* b n'a plus à être pair : m = b²/4a s'écrit en fraction */
  const m = { p: b * b, q: 4 * a };      /* Δ = 0  <=>  m = b²/(4a) */
  const x0 = { p: -b, q: 2 * a };
  return {
    enonce: '<p>On considère l’équation, d’inconnue ' + M('x') + ' et de paramètre réel ' + M('m') + ' :</p>' +
            Mc(lead(a, 'x^{2}') + sgn(b, 'x') + ' + m = 0') +
            '<p>Pour quelle valeur de ' + M('m') + ' cette équation admet-elle une <b>racine double</b> ?</p>' +
            '<p class="tiny">Réponse <b>exacte</b>.</p>',
    champs: [{ type: 'exact', label: 'm =', bon: m }],
    etapes: [
      'Une racine double correspond exactement à ' + M('Δ = 0') + '.',
      M('Δ = b^{2} - 4ac = (' + nf(b) + ')^{2} - 4 × (' + nf(a) + ') × m = ' + nf(b * b) + sgn(-4 * a, 'm')),
      'On résout ' + M(nf(b * b) + sgn(-4 * a, 'm') + ' = 0') + ', soit ' +
        M('m = frac{' + nf(b * b) + '}{' + nf(4 * a) + '} = ' + texteExact(m)) + '.',
      'La racine double vaut alors ' + M('x_0 = frac{-b}{2a} = ' + texteExact(x0)) + '.',
      '<b>Réflexe</b> : dès qu’un paramètre apparaît, la question porte presque toujours sur le <b>signe de ' + M('Δ') + '</b>.'
    ]
  };
});

G('second-degre', 'sd-toujours-positif', 'Paramètre : signe constant', 'exp', function(){
  const b = 2 * R.nz(-5, 5);
  const seuil = b * b / 4;
  const strictPos = Math.random() < 0.5;   // positif pour tout x, ou négatif pour tout x
  const a = strictPos ? 1 : -1;
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + lead(a, 'x^{2}') + sgn(a * b, 'x') + ' ' + (a > 0 ? '+ m' : '- m')) + ', où ' + M('m') + ' est un paramètre réel.</p>' +
            '<p>Pour quelles valeurs de ' + M('m') + ' a-t-on ' + M('f(x) ' + (strictPos ? '> 0' : '&lt; 0')) + ' <b>pour tout réel ' + M('x') + '</b> ?</p>',
    qcm: {
      options: [
        M('m > ' + nf(seuil)),
        M('m \u2265 ' + nf(seuil)),
        M('m &lt; ' + nf(seuil)),
        'Pour tout réel ' + M('m')
      ], bon: 0
    },
    etapes: [
      'Le coefficient dominant est ' + M('a = ' + nf(a)) + ' : le trinôme est ' + (strictPos ? 'positif' : 'négatif') +
        ' partout <b>si et seulement si</b> il n\u2019a <b>aucune racine</b>, c\u2019est-à-dire ' + M('\u0394 &lt; 0') + '.',
      M('\u0394 = (' + nf(a * b) + ')^{2} - 4 \u00D7 (' + nf(a) + ') \u00D7 (' + (a > 0 ? 'm' : '-m') + ') = ' + nf(b * b) + ' - 4m'),
      'On résout ' + M('' + nf(b * b) + ' - 4m &lt; 0') + ' soit ' + M('m > frac{' + nf(b * b) + '}{4} = ' + nf(seuil)) + '.',
      '<b>Piège classique</b> : avec ' + M('\u0394 = 0') + ' le trinôme s\u2019annule en un point : il ne serait plus <b>strictement</b> ' +
        (strictPos ? 'positif' : 'négatif') + '. L\u2019inégalité sur ' + M('m') + ' est donc <b>stricte</b>.'
    ]
  };
});

G('second-degre', 'sd-bicarree', 'Équation bicarrée (changement de variable)', 'exp', function(){
  const k1 = R.int(1, 5);
  const deuxRacines = Math.random() < 0.65;
  const X1 = k1 * k1;
  /* X2 n'est plus forcément un carré parfait : x = ±√X2 est alors irrationnel,
     et c'est le cas le plus fréquent dans un vrai énoncé */
  const X2 = deuxRacines
    ? (Math.random() < 0.5 ? R.pick([4, 9, 16, 25, 36]) : R.pick([2, 3, 5, 6, 7, 8, 10, 12, 18, 20, 24, 27, 32]))
    : -R.int(1, 9);
  const b = -(X1 + X2), c = X1 * X2;
  const sols = deuxRacines ? 4 : 2;
  /* la plus grande solution : k1 si k1 ≥ √X2, sinon √X2 */
  const gagne2 = deuxRacines && Math.sqrt(X2) > k1;
  const plusGrande = gagne2 ? { p: 0, m: 1, d: X2, q: 1 } : { p: k1, q: 1 };
  const racX2 = texteExact({ p: 0, m: 1, d: X2, q: 1 });
  return {
    enonce: '<p>Résous dans ' + M('ℝ') + ' l’équation</p>' + Mc('x^{4}' + sgn(b, 'x^{2}') + sgn(c, '') + ' = 0') +
            '<p>Combien y a-t-il de solutions, et quelle est la plus grande ?</p>' +
            '<p class="tiny">Réponse <b>exacte</b> : une racine carrée ne se remplace pas par une valeur approchée.</p>',
    champs: [
      { type: 'choix', label: 'Nombre de solutions', options: ['0', '2', '3', '4'], bon: sols === 4 ? 3 : 1 },
      { type: 'exact', forme: 'radical', label: 'plus grande solution', bon: plusGrande }
    ],
    etapes: [
      'On pose ' + M('X = x^{2}') + ' (avec nécessairement ' + M('X ≥ 0') + ') : l’équation devient ' + M('X^{2}' + sgn(b, 'X') + sgn(c, '') + ' = 0') + '.',
      M('Δ = (' + nf(b) + ')^{2} - 4 × ' + nf(c) + ' = ' + nf(b * b - 4 * c)) + ', donc ' + M('X_1 = ' + nf(X1)) + ' et ' + M('X_2 = ' + nf(X2)) + '.',
      deuxRacines
        ? 'Les deux valeurs sont <b>positives</b> : chacune donne deux solutions en ' + M('x') + ', à savoir ' +
          M('x = ±sqrt{' + nf(X1) + '} = ±' + nf(k1)) + ' et ' + M('x = ±sqrt{' + nf(X2) + '} = ±' + racX2) + '.'
        : M('X_2 = ' + nf(X2) + ' &lt; 0') + ' est à <b>rejeter</b> : un carré ne peut pas être négatif. Seule ' + M('X_1 = ' + nf(X1)) +
          ' convient, d’où ' + M('x = ±' + nf(k1)) + '.',
      'Il y a donc <b>' + sols + ' solutions</b>, la plus grande étant ' + M(texteExact(plusGrande)) + '.',
      '<b>C’est là que le piège se joue</b> : ne jamais oublier de vérifier le signe de chaque ' + M('X') + ' avant de revenir à ' + M('x') + '.'
    ]
  };
});

G('second-degre', 'sd-inequation', 'Inéquation à ramener au second degré', 'exp', function(){
  let x1 = R.nz(-5, 4), x2 = x1 + R.int(1, 5);
  if (x2 === 0) x2 = x1 + R.int(1, 5) + 1;
  const a = R.pick([1, 2, -1]);
  const b = -a * (x1 + x2), c = a * x1 * x2;
  const d = R.nz(-5, 5), e = R.int(-6, 6);      // membre de droite : dx + e
  const superieur = Math.random() < 0.5;
  /* inéquation posée :  a x² + (b+d) x + (c+e)  ≥/≤  dx + e   ⇔  a x² + bx + c ≥/≤ 0 */
  const gaucheB = b + d, gaucheC = c + e;
  const dedans = M('[ ' + nf(x1) + ' ; ' + nf(x2) + ' ]');
  const dehors = M('] -\u221E ; ' + nf(x1) + ' ] \u222A [ ' + nf(x2) + ' ; +\u221E [');
  /* a>0 : trinôme ≥ 0 à l'extérieur ; a<0 : ≥ 0 entre les racines */
  const bonEstDehors = superieur ? (a > 0) : (a < 0);
  return {
    enonce: '<p>Résous dans ' + M('\u211D') + ' l\u2019inéquation</p>' +
            Mc(trinome(a, gaucheB, gaucheC) + (superieur ? ' \u2265 ' : ' \u2264 ') + lead(d, 'x') + (e ? sgn(e, '') : '')),
    qcm: {
      options: [dedans, dehors, 'Aucune solution', 'Tous les réels'],
      bon: bonEstDehors ? 1 : 0
    },
    etapes: [
      '<b>Étape 1</b> → tout ramener d\u2019un même côté : ' +
        M(trinome(a, gaucheB, gaucheC) + ' - (' + lead(d, 'x') + (e ? sgn(e, '') : '') + ')' + (superieur ? ' \u2265 ' : ' \u2264 ') + '0') +
        ' soit ' + M(trinome(a, b, c) + (superieur ? ' \u2265 ' : ' \u2264 ') + '0') + '.',
      '<b>Étape 2</b> → racines du trinôme : ' + M('\u0394 = ' + nf(b * b - 4 * a * c) + ' > 0') + ', ' +
        M('x_1 = ' + nf(x1)) + ' et ' + M('x_2 = ' + nf(x2)) + '.',
      '<b>Étape 3</b> → signe : ' + M('a = ' + nf(a)) + ', donc le trinôme est ' + (a > 0 ? 'positif' : 'négatif') +
        ' à l\u2019extérieur des racines et ' + (a > 0 ? 'négatif' : 'positif') + ' entre les deux.',
      '<b>Conclusion</b> : ' + (bonEstDehors ? dehors : dedans) + '. Les crochets sont <b>fermés</b> car l\u2019inégalité est large.',
      'Erreur fréquente : résoudre sans tout ramener à gauche, ou garder des crochets ouverts avec un ' + M('\u2265') + '.'
    ]
  };
});

/* =================== SUITES =================== */

G('suites', 'su-arithmetico', 'Suite arithmético-géométrique', 'exp', function(){
  const cas = R.pick([[0.5, 4, 8], [0.5, -3, -6], [3, -4, 2], [2, -6, 6], [0.8, 10, 50], [1.5, -5, 10], [0.25, 6, 8], [-0.5, 9, 6]]);
  const a = cas[0], b = cas[1], L = cas[2];
  const u0 = R.int(1, 20);
  const um = Math.round((1 - a) * 1e6) / 1e6;   /* 1 - a sans bruit de virgule flottante */
  return {
    enonce: '<p>Soit ' + M('u_0 = ' + nf(u0)) + ' et, pour tout ' + M('n') + ', ' + M('u_{n+1} = ' + lead(a, 'u_n') + sgn(b, '')) + '.</p>' +
            '<p>On cherche le réel ' + M('L') + ' tel que la suite ' + M('v_n = u_n - L') + ' soit <b>géométrique</b>.</p>' +
            '<p>Donne ' + M('L') + ', puis la raison de ' + M('(v_n)') + '.</p>',
    champs: [
      { type: 'num', label: 'L =', bon: L, tol: 1e-6 },
      { type: 'num', label: 'raison de (vₙ)', bon: a, tol: 1e-6 }
    ],
    etapes: [
      M('L') + ' est le <b>point fixe</b> de la relation : on résout ' + M('L = ' + lead(a, 'L') + sgn(b, '')) + '.',
      M('L - ' + lead(a, 'L') + ' = ' + nf(b)) + ' soit ' + M(nf(um) + 'L = ' + nf(b)) + ', donc ' + M('L = frac{' + nf(b) + '}{' + nf(um) + '} = ' + nf(L)) + '.',
      'On vérifie : ' + M('v_{n+1} = u_{n+1} - L = ' + lead(a, 'u_n') + sgn(b, '') + ' - ' + nf(L) + ' = ' + lead(a, '(v_n + ' + nf(L) + ')') + sgn(b, '') + ' - ' + nf(L)),
      'Les constantes se compensent (' + M(nf(a) + ' \u00D7 ' + nf(L) + sgn(b, '') + ' - ' + nf(L) + ' = 0') + '), il reste ' + M('v_{n+1} = ' + lead(a, 'v_n')) +
        ' : ' + M('(v_n)') + ' est géométrique de raison ' + M('q = ' + nf(a)) + '.',
      'On en déduit ' + M('v_n = (' + nf(u0 - L) + ') \u00D7 ' + nf(a) + '^{n}') + ' puis ' + M('u_n = v_n + ' + nf(L) + ' = (' + nf(u0 - L) + ') \u00D7 ' + nf(a) + '^{n} + ' + nf(L)) + '.'
    ]
  };
});

G('suites', 'su-somme-decalee', 'Somme entre deux indices', 'exp', function(){
  const u0 = R.int(-6, 15), r = R.nz(-6, 8);
  const p = R.int(5, 14), n = p + R.int(6, 16);
  const up = u0 + p * r, un = u0 + n * r;
  const nb = n - p + 1, S = nb * (up + un) / 2;
  return {
    enonce: '<p>' + M('(u_n)') + ' est arithmétique, ' + M('u_0 = ' + nf(u0)) + ', de raison ' + M('r = ' + nf(r)) + '.</p>' +
            '<p>Calcule ' + M('S = u_{' + p + '} + u_{' + (p + 1) + '} + \u2026 + u_{' + n + '}') + '.</p>',
    champs: [{ type: 'num', label: 'S =', bon: S, tol: 1e-6 }],
    etapes: [
      M('u_{' + p + '} = ' + nf(u0) + ' + ' + p + ' \u00D7 (' + nf(r) + ') = ' + nf(up)) + ' et ' + M('u_{' + n + '} = ' + nf(u0) + ' + ' + n + ' \u00D7 (' + nf(r) + ') = ' + nf(un)) + '.',
      '<b>Le point qui coûte des points</b> : le nombre de termes est ' + M(n + ' - ' + p + ' + 1 = ' + nb) + ', et non ' + M(n + ' - ' + p) + '.',
      'Formule : ' + M('S = frac{(nombre de termes) \u00D7 (premier + dernier)}{2}') + '.',
      M('S = frac{' + nb + ' \u00D7 (' + nf(up) + ' + ' + nf(un) + ')}{2} = ' + nf(S))
    ]
  };
});

G('suites', 'su-deux-suites', 'Comparer deux modèles', 'exp', function(){
  const a0 = R.pick([1200, 1500, 1800, 2000]);
  const r = R.pick([60, 80, 100, 120]);
  const b0 = R.pick([900, 1000, 1100]);
  const p = R.pick([6, 7, 8, 10]);
  const q = 1 + p / 100;
  let n = 0, A = a0, B = b0;
  while (B <= A && n < 500){ n++; A = a0 + n * r; B = b0 * Math.pow(q, n); }
  return {
    enonce: '<p>Deux offres pour un même service, sur ' + M('n') + ' années :</p>' +
            '<ul style="margin:8px 0 0;padding-left:20px"><li>Offre A : ' + nf(a0) + ' \u20AC la première année, puis <b>+ ' + r + ' \u20AC par an</b> ;</li>' +
            '<li>Offre B : ' + nf(b0) + ' \u20AC la première année, puis <b>+ ' + p + ' % par an</b>.</li></ul>' +
            '<p style="margin-top:10px">À partir de quelle année ' + M('n') + ' l\u2019offre B devient-elle <b>plus chère</b> que l\u2019offre A ?</p>',
    champs: [{ type: 'num', label: 'n =', bon: n, tol: 1e-9 }],
    etapes: [
      'Offre A : suite <b>arithmétique</b>, ' + M('a_n = ' + nf(a0) + ' + ' + r + 'n') + '. Offre B : suite <b>géométrique</b>, ' +
        M('b_n = ' + nf(b0) + ' \u00D7 ' + nf(q) + '^{n}') + '.',
      'Une suite géométrique de raison ' + M('q > 1') + ' finit <b>toujours</b> par dépasser une suite arithmétique : la question est « à partir de quand ».',
      'On compare année par année : ' + M('a_{' + n + '} = ' + nf(a0 + n * r)) + ' et ' + M('b_{' + n + '} \u2248 ' + nf(b0 * Math.pow(q, n), 1)) +
        ', alors qu\u2019à l\u2019année précédente ' + M('a_{' + (n - 1) + '} = ' + nf(a0 + (n - 1) * r)) + ' et ' + M('b_{' + (n - 1) + '} \u2248 ' + nf(b0 * Math.pow(q, n - 1), 1)) + '.',
      'C\u2019est donc à partir de ' + M('n = ' + n) + ' que B dépasse A.',
      'Algorithme :<pre class="code">n = 0\nA = ' + a0 + '\nB = ' + b0 + '\nwhile B &lt;= A:\n    n = n + 1\n    A = ' + a0 + ' + ' + r + '*n\n    B = ' + b0 + ' * ' + String(q) + '**n\nprint(n)</pre>'
    ]
  };
});

G('suites', 'su-algo-trace', 'Lire un algorithme', 'exp', function(){
  const u0 = R.int(2, 9), a = R.pick([2, 3]), b = R.nz(-5, 5), N = R.int(3, 6);
  let u = u0, s = u0;
  for (let i = 0; i < N; i++){ u = a * u + b; s += u; }
  const sommeDemandee = Math.random() < 0.5;
  return {
    enonce: '<p>On exécute ce programme :</p>' +
            '<pre class="code">u = ' + u0 + '\ns = u\nfor i in range(' + N + '):\n    u = ' + a + '*u ' + (b < 0 ? '- ' + (-b) : '+ ' + b) + '\n    s = s + u\n' +
            'print(' + (sommeDemandee ? 's' : 'u') + ')</pre>' +
            '<p>Qu\u2019affiche-t-il ?</p>',
    champs: [{ type: 'num', label: 'Valeur affichée', bon: sommeDemandee ? s : u, tol: 1e-9 }],
    etapes: [
      'La boucle tourne <b>' + N + ' fois</b> (' + M('i') + ' va de 0 à ' + (N - 1) + ') : il faut dérouler les ' + N + ' étapes.',
      (function(){
        let uu = u0, ss = u0, t = [];
        for (let i = 0; i < N; i++){ uu = a * uu + b; ss += uu; t.push(M('u = ' + nf(uu)) + ' (s = ' + nf(ss) + ')'); }
        return 'Déroulé : ' + M('u = ' + nf(u0)) + ' (s = ' + nf(u0) + '), puis ' + t.join(', ') + '.';
      })(),
      'Le programme affiche ' + M(nf(sommeDemandee ? s : u)) + '.',
      '<b>Attention</b> : ' + M('s') + ' est initialisée <b>avant</b> la boucle avec ' + M('u_0') + ', donc le premier terme est bien compté.'
    ]
  };
});

/* =================== DÉRIVATION =================== */

G('derivation', 'de-tangente-parallele', 'Tangentes parallèles à une droite', 'exp', function(){
  let r1, r2;
  do { r1 = R.int(-4, 3); r2 = r1 + R.int(1, 4); } while ((r1 + r2) % 2 !== 0);
  const b = -3 * (r1 + r2) / 2;
  const d = R.int(-5, 5);
  const m = R.pick([-12, -9, -6, -3, 0, 3, 6, 9, 12]);
  const c = m + 3 * r1 * r2;
  const f = 'x^{3}' + (b ? sgn(b, 'x^{2}') : '') + (c ? sgn(c, 'x') : '') + (d ? sgn(d, '') : '');
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + f) + ' et la droite ' + M('d : y = ' + lead(m, 'x') + ' + 7') + '.</p>' +
            '<p>En quels points la tangente à la courbe de ' + M('f') + ' est-elle <b>parallèle</b> à ' + M('d') + ' ? ' +
            'Donne les deux abscisses, dans l\u2019ordre croissant.</p>',
    champs: [
      { type: 'num', label: 'x₁ =', bon: r1, tol: 1e-6 },
      { type: 'num', label: 'x₂ =', bon: r2, tol: 1e-6 }
    ],
    etapes: [
      'Deux droites sont parallèles lorsqu\u2019elles ont le <b>même coefficient directeur</b>. Celui de la tangente en ' + M('a') + ' est ' + M('f\u2032(a)') + '.',
      'On résout donc ' + M('f\u2032(x) = ' + nf(m)) + ', avec ' + M('f\u2032(x) = 3x^{2}' + (b ? sgn(2 * b, 'x') : '') + (c ? sgn(c, '') : '')) + '.',
      M('3x^{2}' + (b ? sgn(2 * b, 'x') : '') + sgn(c - m, '') + ' = 0') + ', ' + M('\u0394 = ' + nf(4 * b * b - 12 * (c - m)) + ' > 0') + '.',
      'Les solutions sont ' + M('x_1 = ' + nf(r1)) + ' et ' + M('x_2 = ' + nf(r2)) + ' : il y a <b>deux</b> points où la tangente est parallèle à ' + M('d') + '.',
      'Remarque : l\u2019ordonnée à l\u2019origine de ' + M('d') + ' (ici 7) <b>ne sert à rien</b> : seul le coefficient directeur compte.'
    ]
  };
});

G('derivation', 'de-position-tangente', 'Position de la courbe et de sa tangente', 'exp', function(){
  const a = R.nz(-3, 3);
  const p = R.int(-5, 5), q = R.int(-5, 5);
  const f = 'x^{3}' + (p ? sgn(p, 'x') : '') + (q ? sgn(q, '') : '');
  const seuil = -2 * a;
  const au = M('] ' + nf(seuil) + ' ; +\u221E [');
  const sous = M('] -\u221E ; ' + nf(seuil) + ' [');
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + f) + ' et ' + M('T') + ' la tangente à sa courbe au point d\u2019abscisse ' + M('a = ' + nf(a)) + '.</p>' +
            '<p>Sur quel intervalle la courbe de ' + M('f') + ' est-elle <b>au-dessus</b> de ' + M('T') + ' ?</p>',
    qcm: {
      options: [au, sous, 'Partout sauf en ' + M('x = ' + nf(a)), 'Nulle part'],
      bon: 0
    },
    etapes: [
      'On étudie le <b>signe de la différence</b> ' + M('f(x) - T(x)') + ' : c\u2019est toujours ainsi qu\u2019on compare une courbe et une droite.',
      'Avec ' + M('T(x) = f\u2032(' + nf(a) + ')' + fact(a) + ' + f(' + nf(a) + ')') + ', les termes en ' + M('x') + ' et les constantes se simplifient et il reste :',
      Mc('f(x) - T(x) = x^{3} - 3a^{2}x + 2a^{3} = (x - a)^{2}(x + 2a)') +
        '<p class="tiny" style="text-align:center">soit ici ' + M(fact(a) + '^{2}' + fact(-2 * a)) + '</p>',
      M(fact(a) + '^{2} ≥ 0') + ' toujours : le signe de la différence est donc <b>celui de ' + M(fact(-2 * a)) + '</b>, ' +
        'qui est positif pour ' + M('x > ' + nf(seuil)) + '.',
      'La courbe est donc au-dessus de ' + M('T') + ' sur ' + au + ' et en dessous sur ' + sous + ' (avec contact en ' + M('x = ' + nf(a)) + ').'
    ]
  };
});

G('derivation', 'de-quotient-extremum', 'Extremum d\u2019un quotient', 'exp', function(){
  const k = R.int(2, 9), c = k * k;
  return {
    enonce: '<p>Soit ' + M('f(x) = frac{x^{2} + ' + c + '}{x}') + ' définie sur ' + M('] 0 ; +\u221E [') + '.</p>' +
            '<p>Détermine l\u2019abscisse du minimum de ' + M('f') + ' sur cet intervalle, puis la valeur de ce minimum.</p>',
    champs: [
      { type: 'num', label: 'x du minimum', bon: k, tol: 1e-6 },
      { type: 'num', label: 'minimum', bon: 2 * k, tol: 1e-6 }
    ],
    etapes: [
      'On dérive avec ' + M('(frac{u}{v})\u2032 = frac{u\u2032v - uv\u2032}{v^{2}}') + ', ' + M('u(x) = x^{2} + ' + c) + ' et ' + M('v(x) = x') + ' :',
      Mc('f\u2032(x) = frac{2x \u00D7 x - (x^{2} + ' + c + ') \u00D7 1}{x^{2}} = frac{x^{2} - ' + c + '}{x^{2}}'),
      'Sur ' + M('] 0 ; +\u221E [') + ', ' + M('x^{2} > 0') + ' : le signe de ' + M('f\u2032(x)') + ' est celui de ' + M('x^{2} - ' + c) +
        ', qui s\u2019annule en ' + M('x = ' + k) + ' (la racine ' + M('-' + k) + ' est hors de l\u2019intervalle).',
      M('f\u2032') + ' est <b>négative</b> sur ' + M('] 0 ; ' + k + ' [') + ' puis <b>positive</b> sur ' + M('] ' + k + ' ; +\u221E [') +
        ' : ' + M('f') + ' décroît puis croît, il y a donc un <b>minimum</b> en ' + M('x = ' + k) + '.',
      M('f(' + k + ') = frac{' + (c + c) + '}{' + k + '} = ' + nf(2 * k)) + '. Le minimum vaut ' + M(nf(2 * k)) + '.'
    ]
  };
});

G('derivation', 'de-optim-boite', 'Optimisation : volume d\u2019une boîte', 'exp', function(){
  const L = R.pick([12, 18, 24, 30, 36]);
  const x = L / 6, V = x * (L - 2 * x) * (L - 2 * x);
  return {
    enonce: '<p>Dans une plaque carrée de <b>' + L + ' cm</b> de côté, on découpe un carré de côté ' + M('x') +
            ' à chaque coin, puis on relève les bords pour former une boîte <b>sans couvercle</b>.</p>' +
            '<p>Pour quelle valeur de ' + M('x') + ' le volume est-il maximal, et combien vaut ce volume ?</p>',
    champs: [
      { type: 'num', label: 'x (en cm)', bon: x, tol: 1e-6 },
      { type: 'num', label: 'volume max (en cm³)', bon: V, tol: 1e-6 }
    ],
    etapes: [
      'La base est un carré de côté ' + M(L + ' - 2x') + ' et la hauteur vaut ' + M('x') + ', donc ' +
        M('V(x) = x(' + L + ' - 2x)^{2}') + ', avec ' + M('x \u2208 ] 0 ; ' + (L / 2) + ' [') + '.',
      'On développe puis on dérive : ' + M('V(x) = 4x^{3} - ' + (4 * L) + 'x^{2} + ' + (L * L) + 'x') + ', donc ' +
        M('V\u2032(x) = 12x^{2} - ' + (8 * L) + 'x + ' + (L * L)) + '.',
      M('\u0394 = ' + nf(64 * L * L - 48 * L * L) + ' > 0') + ' : les racines sont ' + M('x = ' + nf(L / 6)) + ' et ' + M('x = ' + nf(L / 2)) +
        '. Seule ' + M('x = ' + nf(L / 6)) + ' appartient à l\u2019intervalle.',
      M('V\u2032') + ' est positive avant ' + M(nf(x)) + ' et négative après : le volume est <b>maximal</b> en ' + M('x = ' + nf(x)) + ' cm.',
      M('V(' + nf(x) + ') = ' + nf(x) + ' \u00D7 ' + nf(L - 2 * x) + '^{2} = ' + nf(V)) + ' cm³.',
      '<b>Réflexe de DS</b> : toujours vérifier que la racine trouvée est bien <b>dans l\u2019intervalle de validité</b>.'
    ]
  };
});

/* =================== PRODUIT SCALAIRE =================== */

G('produit-scalaire', 'ps-ensemble-points', 'Ensemble de points', 'exp', function(){
  const ax = 2 * R.int(-4, 4), ay = 2 * R.int(-4, 4);
  const p = R.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]);
  const s1 = R.sign(), s2 = R.sign();
  const bx = ax + 2 * p[0] * s1, by = ay + 2 * p[1] * s2;
  const cx = (ax + bx) / 2, cy = (ay + by) / 2, r = p[2];
  return {
    enonce: '<p>Dans un repère orthonormé, ' + M('A(' + nf(ax) + ' ; ' + nf(ay) + ')') + ' et ' + M('B(' + nf(bx) + ' ; ' + nf(by) + ')') + '.</p>' +
            '<p>On cherche l\u2019ensemble des points ' + M('M') + ' du plan tels que ' + M('vec{MA} \u00B7 vec{MB} = 0') + '.</p>' +
            '<p>C\u2019est un cercle : donne les coordonnées de son centre et son rayon.</p>',
    champs: [
      { type: 'num', label: 'abscisse du centre', bon: cx, tol: 1e-6 },
      { type: 'num', label: 'ordonnée du centre', bon: cy, tol: 1e-6 },
      { type: 'num', label: 'rayon', bon: r, tol: 1e-6 }
    ],
    etapes: [
      'Propriété du cours : ' + M('vec{MA} \u00B7 vec{MB} = 0') + ' signifie que ' + M('M') + ' voit ' + M('[AB]') +
        ' sous un angle droit → c\u2019est le <b>cercle de diamètre ' + M('[AB]') + '</b>.',
      'Son centre est le <b>milieu</b> de ' + M('[AB]') + ' : ' + M('\u03A9(frac{' + nf(ax) + ' + ' + nf(bx) + '}{2} ; frac{' + nf(ay) + ' + ' + nf(by) + '}{2}) = \u03A9(' + nf(cx) + ' ; ' + nf(cy) + ')') + '.',
      M('AB = sqrt{(' + nf(bx - ax) + ')^{2} + (' + nf(by - ay) + ')^{2}} = sqrt{' + nf((bx - ax) * (bx - ax) + (by - ay) * (by - ay)) + '} = ' + nf(2 * r)) +
        ', donc le rayon vaut ' + M('frac{AB}{2} = ' + nf(r)) + '.',
      'Équation du cercle : ' + M('(x ' + (cx < 0 ? '+ ' + (-cx) : '- ' + cx) + ')^{2} + (y ' + (cy < 0 ? '+ ' + (-cy) : '- ' + cy) + ')^{2} = ' + nf(r * r)) + '.',
      'Attention : ' + M('A') + ' et ' + M('B') + ' appartiennent à cet ensemble (le produit scalaire y est nul car un des vecteurs est nul).'
    ]
  };
});

G('produit-scalaire', 'ps-angle-coord', 'Calculer un angle par les coordonnées', 'exp', function(){
  const ax = R.int(-3, 3), ay = R.int(-3, 3);
  let pa, pb, ux, uy, vx, vy, ps, nu, nv, cosv;
  do {
    pa = R.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [4, 3, 5], [8, 6, 10]]);
    pb = R.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [4, 3, 5], [12, 5, 13]]);
    ux = pa[0] * R.sign(); uy = pa[1] * R.sign();
    vx = pb[0] * R.sign(); vy = pb[1] * R.sign();
    ps = ux * vx + uy * vy;
    nu = pa[2]; nv = pb[2];
    cosv = ps / (nu * nv);
  } while (Math.abs(cosv) > 0.985);
  const ang = Math.acos(cosv) * 180 / Math.PI;
  return {
    enonce: '<p>Dans un repère orthonormé : ' + M('A(' + nf(ax) + ' ; ' + nf(ay) + ')') + ', ' +
            M('B(' + nf(ax + ux) + ' ; ' + nf(ay + uy) + ')') + ', ' + M('C(' + nf(ax + vx) + ' ; ' + nf(ay + vy) + ')') + '.</p>' +
            '<p>Calcule ' + M('@cos(\u00C2)') + ' (arrondi au centième) puis l\u2019angle ' + M('\u00C2') + ' en degrés (arrondi au degré).</p>',
    champs: [
      { type: 'num', label: 'cos Â ≈', bon: Math.round(cosv * 100) / 100, tol: 0.011 },
      { type: 'num', label: 'Â ≈ (en degrés)', bon: Math.round(ang), tol: 1.01 }
    ],
    etapes: [
      M('vec{AB}(' + nf(ux) + ' ; ' + nf(uy) + ')') + ' et ' + M('vec{AC}(' + nf(vx) + ' ; ' + nf(vy) + ')') + '.',
      M('vec{AB} \u00B7 vec{AC} = ' + nf(ux * vx) + sgn(uy * vy, '') + ' = ' + nf(ps)) + ', ' +
        M('AB = sqrt{' + (pa[0] * pa[0] + pa[1] * pa[1]) + '} = ' + nu) + ', ' + M('AC = sqrt{' + (pb[0] * pb[0] + pb[1] * pb[1]) + '} = ' + nv) + '.',
      'On isole le cosinus dans ' + M('vec{AB} \u00B7 vec{AC} = AB \u00D7 AC \u00D7 @cos(\u00C2)') + ' :',
      Mc('@cos(\u00C2) = frac{' + nf(ps) + '}{' + nu + ' \u00D7 ' + nv + '} = frac{' + nf(ps) + '}{' + (nu * nv) + '} \u2248 ' + nf(Math.round(cosv * 1000) / 1000)),
      'À la calculatrice (touche ' + M('@cos^{-1}') + ' ou ' + M('@arccos') + ', en mode <b>degrés</b>) : ' + M('\u00C2 \u2248 ' + nf(Math.round(ang * 10) / 10) + '\u00B0') +
        ', soit ' + M(Math.round(ang) + '\u00B0') + ' au degré près.'
    ]
  };
});

G('produit-scalaire', 'ps-alkashi-angle', 'Al-Kashi : retrouver un angle', 'exp', function(){
  let a, b, c;
  do {
    b = R.int(4, 12); c = R.int(4, 12); a = R.int(Math.abs(b - c) + 1, b + c - 1);
  } while (Math.abs((b * b + c * c - a * a) / (2 * b * c)) > 0.985);
  const cosv = (b * b + c * c - a * a) / (2 * b * c);
  const ang = Math.acos(cosv) * 180 / Math.PI;
  return {
    enonce: '<p>Dans un triangle ' + M('ABC') + ' : ' + M('BC = ' + a) + ', ' + M('AC = ' + b) + ', ' + M('AB = ' + c) + '.</p>' +
            '<p>Calcule ' + M('@cos(\u00C2)') + ' (arrondi au centième), puis l\u2019angle ' + M('\u00C2') + ' (arrondi au degré).</p>',
    champs: [
      { type: 'num', label: 'cos Â ≈', bon: Math.round(cosv * 100) / 100, tol: 0.011 },
      { type: 'num', label: 'Â ≈ (en degrés)', bon: Math.round(ang), tol: 1.01 }
    ],
    etapes: [
      'On part d\u2019Al-Kashi : ' + M('a^{2} = b^{2} + c^{2} - 2bc\u00A0@cos(\u00C2)') + ', puis on <b>isole le cosinus</b> :',
      Mc('@cos(\u00C2) = frac{b^{2} + c^{2} - a^{2}}{2bc}'),
      M('@cos(\u00C2) = frac{' + (b * b) + ' + ' + (c * c) + ' - ' + (a * a) + '}{2 \u00D7 ' + b + ' \u00D7 ' + c + '} = frac{' + nf(b * b + c * c - a * a) + '}{' + (2 * b * c) + '} \u2248 ' + nf(Math.round(cosv * 1000) / 1000)),
      M('\u00C2 \u2248 ' + nf(Math.round(ang * 10) / 10) + '\u00B0') + ', soit ' + M(Math.round(ang) + '\u00B0') + '.',
      cosv < 0 ? 'Cosinus <b>négatif</b> : l\u2019angle est <b>obtus</b>, ce qui est cohérent avec ' + M('a^{2} > b^{2} + c^{2}') + '.'
               : 'Cosinus <b>positif</b> : l\u2019angle est <b>aigu</b>.'
    ]
  };
});

G('produit-scalaire', 'ps-norme-somme', 'Norme d\u2019une somme de vecteurs', 'exp', function(){
  let nu, nv, ps, n2;
  do {
    nu = R.int(2, 10); nv = R.int(2, 10);
    ps = R.int(-nu * nv, nu * nv);
    n2 = nu * nu + nv * nv + 2 * ps;
  } while (n2 <= 0 || Math.sqrt(n2) % 1 !== 0);
  const n = Math.sqrt(n2);
  return {
    enonce: '<p>Deux vecteurs vérifient ' + M('\u2016vec{u}\u2016 = ' + nu) + ', ' + M('\u2016vec{v}\u2016 = ' + nv) + ' et ' + M('vec{u} \u00B7 vec{v} = ' + nf(ps)) + '.</p>' +
            '<p>Calcule ' + M('\u2016vec{u} + vec{v}\u2016') + '.</p>',
    champs: [{ type: 'num', label: '‖u⃗ + v⃗‖ =', bon: n, tol: 1e-6 }],
    etapes: [
      'On développe le carré de la norme, exactement comme une identité remarquable :',
      Mc('\u2016vec{u} + vec{v}\u2016^{2} = \u2016vec{u}\u2016^{2} + 2\u00A0vec{u} \u00B7 vec{v} + \u2016vec{v}\u2016^{2}'),
      M('\u2016vec{u} + vec{v}\u2016^{2} = ' + (nu * nu) + ' + 2 \u00D7 (' + nf(ps) + ') + ' + (nv * nv) + ' = ' + nf(n2)),
      M('\u2016vec{u} + vec{v}\u2016 = sqrt{' + nf(n2) + '} = ' + nf(n)),
      '<b>Ne jamais écrire</b> ' + M('\u2016vec{u} + vec{v}\u2016 = \u2016vec{u}\u2016 + \u2016vec{v}\u2016') + ' : ce serait ' + M(nf(nu + nv)) +
        ', ce qui est faux (l\u2019égalité n\u2019a lieu que si les vecteurs sont colinéaires et de même sens).'
    ]
  };
});
