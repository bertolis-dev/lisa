/* =========================================================================
   Exercices : Géométrie repérée, Algorithmique, Vocabulaire et logique,
   Expérimentations, plus les dernières capacités neuves du programme 2026.
   ========================================================================= */

/* =================== GÉOMÉTRIE REPÉRÉE =================== */

G('geometrie-reperee', 'gr-normal', 'Droite et vecteur normal', 'app', function(){
  const a = R.nz(-4, 4), b = R.nz(-4, 4);
  const xa = R.int(-5, 5), ya = R.int(-5, 5);
  const c = -(a * xa + b * ya);
  return {
    enonce: '<p>Détermine une équation cartésienne ' + M('ax + by + c = 0') + ' de la droite passant par ' +
            M('A(' + nf(xa) + ' ; ' + nf(ya) + ')') + ' et de vecteur normal ' + M('vec{n}(' + nf(a) + ' ; ' + nf(b) + ')') + '.</p>' +
            '<p>On prend ' + M('a = ' + nf(a)) + ' et ' + M('b = ' + nf(b)) + ' : que vaut ' + M('c') + ' ?</p>',
    champs: [{ type: 'num', label: 'c =', bon: c, tol: 1e-6 }],
    etapes: [
      'Un point ' + M('M(x ; y)') + ' est sur la droite si et seulement si ' + M('vec{AM} ⊥ vec{n}') + ', c’est-à-dire ' + M('vec{AM} · vec{n} = 0') + '.',
      'Cela s’écrit ' + M(nf(a) + '(x - ' + nf(xa) + ') ' + sgn(b, '') + '(y - ' + nf(ya) + ') = 0') + '.',
      'On développe : ' + M(lead(a, 'x') + sgn(b, 'y') + sgn(c, '') + ' = 0') + ', donc ' + M('c = ' + nf(c)) + '.',
      '<b>Vérification immédiate</b> : le point ' + M('A') + ' doit annuler l’équation. ' +
        M(nf(a) + ' × (' + nf(xa) + ') + ' + nf(b) + ' × (' + nf(ya) + ') ' + sgn(c, '') + ' = 0') + ' ✓'
    ]
  };
});

G('geometrie-reperee', 'gr-lire-normal', 'Lire un vecteur normal', 'app', function(){
  let a, b;
  do { a = R.nz(-5, 5); b = R.nz(-5, 5); } while (Math.abs(a) === Math.abs(b));  /* sinon deux propositions coincident */
  const c = R.int(-8, 8);
  return {
    enonce: '<p>On donne la droite d’équation</p>' + Mc(lead(a, 'x') + sgn(b, 'y') + (c ? sgn(c, '') : '') + ' = 0') +
            '<p>Lequel de ces vecteurs lui est <b>normal</b> ?</p>',
    qcm: {
      options: [
        M('vec{n}(' + nf(a) + ' ; ' + nf(b) + ')'),
        M('vec{n}(' + nf(-b) + ' ; ' + nf(a) + ')'),
        M('vec{n}(' + nf(b) + ' ; ' + nf(a) + ')'),
        M('vec{n}(' + nf(a) + ' ; ' + nf(-b) + ')')
      ], bon: 0
    },
    etapes: [
      'Dans une équation ' + M('ax + by + c = 0') + ', les coefficients <b>se lisent directement</b> :',
      M('vec{n}(a ; b)') + ' est <b>normal</b> à la droite, c’est-à-dire perpendiculaire à elle.',
      M('vec{u}(-b ; a)') + ' en est un vecteur <b>directeur</b> : on échange les coordonnées et on change un signe.',
      'Ici le vecteur normal est donc ' + M('vec{n}(' + nf(a) + ' ; ' + nf(b) + ')') + ', et un directeur serait ' + M('vec{u}(' + nf(-b) + ' ; ' + nf(a) + ')') + '.'
    ]
  };
});

G('geometrie-reperee', 'gr-cercle', 'Reconnaître une équation de cercle', 'ent', function(){
  const al = R.int(-5, 5), be = R.int(-5, 5), r = R.int(2, 9);
  const developpee = Math.random() < 0.5;
  const k = r * r - al * al - be * be;
  return {
    enonce: developpee
      ? '<p>Reconnais le cercle d’équation</p>' +
        Mc('x^{2} + y^{2}' + (al ? sgn(-2 * al, 'x') : '') + (be ? sgn(-2 * be, 'y') : '') + (k ? sgn(-k, '') : '') + ' = 0') +
        '<p>Donne les coordonnées du centre et le rayon.</p>'
      : '<p>Reconnais le cercle d’équation</p>' +
        Mc(fact(al) + '^{2} + ' + fact(be, 'y') + '^{2} = ' + nf(r * r)) +
        '<p>Donne les coordonnées du centre et le rayon.</p>',
    champs: [
      { type: 'num', label: 'abscisse du centre', bon: al, tol: 1e-6 },
      { type: 'num', label: 'ordonnée du centre', bon: be, tol: 1e-6 },
      { type: 'num', label: 'rayon', bon: r, tol: 1e-6 }
    ],
    etapes: developpee ? [
      'On reconnaît des débuts de carrés et on <b>complète</b> : ' + M('x^{2}' + sgn(-2 * al, 'x') + ' = ' + fact(al) + '^{2} - ' + nf(al * al)) + '.',
      'De même ' + M('y^{2}' + sgn(-2 * be, 'y') + ' = ' + fact(be, 'y') + '^{2} - ' + nf(be * be)) + '.',
      'L’équation devient ' + M(fact(al) + '^{2} + ' + fact(be, 'y') + '^{2} = ' + nf(r * r)) + '.',
      'Forme du cours : ' + M('(x - α)^{2} + (y - β)^{2} = r^{2}') + ', donc centre ' + M('Ω(' + nf(al) + ' ; ' + nf(be) + ')') +
        ' et rayon ' + M('r = sqrt{' + nf(r * r) + '} = ' + nf(r)) + '.'
    ] : [
      'Forme du cours : ' + M('(x - α)^{2} + (y - β)^{2} = r^{2}') + '.',
      'On lit ' + M('α = ' + nf(al)) + ' et ' + M('β = ' + nf(be)) + ' : attention aux signes, ' + M(fact(al)) + ' donne ' + M('α = ' + nf(al)) + '.',
      'Le membre de droite est ' + M('r^{2} = ' + nf(r * r)) + ', donc ' + M('r = ' + nf(r)) + '.',
      '<b>Le piège</b> : le rayon n’est pas le nombre écrit à droite, c’est sa <b>racine carrée</b>.'
    ]
  };
});

G('geometrie-reperee', 'gr-projete', 'Projeté orthogonal d’un point sur une droite', 'ds', function(){
  const p = R.pick([[1, 1], [1, -1], [2, 1], [1, 2], [3, 4], [4, -3], [1, 3]]);
  const a = p[0], b = p[1];
  /* on choisit H sur la droite, puis A = H + t.n : le projeté de A est exactement H */
  const xh = R.int(-4, 4), yh = R.int(-4, 4);
  const c = -(a * xh + b * yh);
  const t = R.nz(-3, 3);
  const xa = xh + t * a, ya = yh + t * b;
  return {
    enonce: '<p>Dans un repère orthonormé, on donne le point ' + M('A(' + nf(xa) + ' ; ' + nf(ya) + ')') +
            ' et la droite ' + M('d') + ' d’équation</p>' +
            Mc(lead(a, 'x') + sgn(b, 'y') + (c ? sgn(c, '') : '') + ' = 0') +
            '<p>Détermine les coordonnées du <b>projeté orthogonal</b> ' + M('H') + ' de ' + M('A') + ' sur ' + M('d') + '.</p>',
    champs: [
      { type: 'num', label: 'abscisse de H', bon: xh, tol: 1e-6 },
      { type: 'num', label: 'ordonnée de H', bon: yh, tol: 1e-6 }
    ],
    etapes: [
      '<b>Étape 1</b> → la droite ' + M('(AH)') + ' est perpendiculaire à ' + M('d') + ', donc elle a pour vecteur directeur le vecteur <b>normal</b> de ' + M('d') + ', c’est-à-dire ' + M('vec{n}(' + nf(a) + ' ; ' + nf(b) + ')') + '.',
      '<b>Étape 2</b> → les points de ' + M('(AH)') + ' s’écrivent ' + M('(' + nf(xa) + ' + ' + nf(a) + 'k ; ' + nf(ya) + ' + ' + nf(b) + 'k)') + ' pour ' + M('k') + ' réel.',
      '<b>Étape 3</b> → on cherche ' + M('k') + ' tel que ce point soit sur ' + M('d') + ' :' +
        Mc(nf(a) + '(' + nf(xa) + ' + ' + nf(a) + 'k)' + sgn(b, '') + '(' + nf(ya) + ' + ' + nf(b) + 'k)' + (c ? sgn(c, '') : '') + ' = 0'),
      'On obtient ' + M('k = ' + nf(-t)) + ', d’où ' + M('H(' + nf(xh) + ' ; ' + nf(yh) + ')') + '.',
      'Vérification : ' + M('H') + ' appartient bien à ' + M('d') + ' (' + M(nf(a) + ' × (' + nf(xh) + ')' + sgn(b, '') + ' × (' + nf(yh) + ')' + (c ? sgn(c, '') : '') + ' = 0') + ') ✓' +
        ' et ' + M('vec{AH}') + ' est colinéaire à ' + M('vec{n}') + '.',
      'La distance de ' + M('A') + ' à la droite vaut alors ' + M('AH = ' + nf(Math.round(Math.abs(t) * Math.sqrt(a * a + b * b) * 100) / 100)) + '.'
    ]
  };
});

/* =================== ALGORITHMIQUE ET PROGRAMMATION =================== */

G('algorithmique', 'ag-liste-indice', 'Lire une liste', 'app', function(){
  const L = [];
  for (let i = 0; i < R.int(5, 7); i++) L.push(R.int(1, 30));
  const quoi = R.int(1, 3);
  const i = R.int(0, L.length - 1);
  const bon = quoi === 1 ? L[i] : (quoi === 2 ? L.length : L[L.length - 1]);
  const question = quoi === 1 ? 'L[' + i + ']' : (quoi === 2 ? 'len(L)' : 'L[len(L) - 1]');
  return {
    enonce: '<p>On définit en Python</p>' + '<pre class="code">L = [' + L.join(', ') + ']</pre>' +
            '<p>Que vaut <code>' + question + '</code> ?</p>',
    champs: [{ type: 'num', label: question + ' =', bon: bon, tol: 1e-9 }],
    etapes: [
      'Les indices d’une liste commencent à <b>0</b> : ' + M('L[0] = ' + L[0]) + ', ' + M('L[1] = ' + L[1]) + ', etc.',
      quoi === 1 ? 'Le terme d’indice ' + i + ' est donc le <b>' + (i + 1) + '<sup>e</sup></b> de la liste : ' + M(String(bon)) + '.'
        : (quoi === 2 ? '<code>len(L)</code> renvoie le <b>nombre d’éléments</b>, ici ' + M(String(bon)) + '.'
                      : 'Le dernier élément a pour indice ' + M('len(L) - 1 = ' + (L.length - 1)) + ', il vaut ' + M(String(bon)) + '.'),
      '<b>Le piège classique</b> : une liste de ' + L.length + ' éléments a des indices de 0 à ' + (L.length - 1) + '. ' +
        '<code>L[' + L.length + ']</code> provoquerait une erreur.'
    ]
  };
});

G('algorithmique', 'ag-comprehension', 'Liste en compréhension', 'ent', function(){
  const cas = R.pick([
    { code: '[n**2 for n in range(5)]', r: '[0, 1, 4, 9, 16]', d: 'les carrés de 0 à 4' },
    { code: '[2*n + 1 for n in range(5)]', r: '[1, 3, 5, 7, 9]', d: 'les cinq premiers impairs' },
    { code: '[n for n in range(10) if n % 3 == 0]', r: '[0, 3, 6, 9]', d: 'les multiples de 3 inférieurs à 10' },
    { code: '[3*n for n in range(1, 5)]', r: '[3, 6, 9, 12]', d: 'les multiples de 3, pour n de 1 à 4' },
    { code: '[n**2 for n in range(1, 5)]', r: '[1, 4, 9, 16]', d: 'les carrés de 1 à 4' }
  ]);
  const faux = ['[1, 2, 3, 4, 5]', '[0, 2, 4, 6, 8]', '[1, 4, 9, 16, 25]', '[0, 1, 2, 3, 4]', '[2, 4, 6, 8]', '[3, 6, 9]']
    .filter(v => v !== cas.r);
  const opts = R.shuffle(R.shuffle(faux).slice(0, 3).concat([cas.r]));
  return {
    enonce: '<p>Que vaut cette liste ?</p><pre class="code">L = ' + cas.code + '</pre>',
    qcm: { options: opts.map(o => '<code>' + o + '</code>'), bon: opts.indexOf(cas.r) },
    etapes: [
      'Une liste <b>en compréhension</b> se lit de droite à gauche : d’abord ce que parcourt ' + M('n') + ', ensuite ce qu’on en fait.',
      '<code>range(5)</code> donne <b>0, 1, 2, 3, 4</b>, jamais 5. <code>range(1, 5)</code> donne 1, 2, 3, 4.',
      'Ici on construit ' + cas.d + ', soit <code>' + cas.r + '</code>.',
      'Une condition <code>if</code> à la fin <b>filtre</b> les valeurs conservées.'
    ]
  };
});

G('algorithmique', 'ag-boucle', 'Dérouler une boucle', 'app', function(){
  const s0 = R.int(0, 5), a = R.pick([2, 3]), b = R.nz(-4, 6), n = R.int(3, 5);
  let s = s0;
  const trace = [];
  for (let i = 0; i < n; i++){ s = a * s + b; trace.push(s); }
  return {
    enonce: '<p>Qu’affiche ce programme ?</p>' +
            '<pre class="code">s = ' + s0 + '\nfor i in range(' + n + '):\n    s = ' + a + '*s ' + (b < 0 ? '- ' + (-b) : '+ ' + b) + '\nprint(s)</pre>',
    champs: [{ type: 'num', label: 'Valeur affichée', bon: s, tol: 1e-9 }],
    etapes: [
      'La boucle tourne <b>' + n + ' fois</b> : ' + M('i') + ' prend les valeurs 0, 1, … , ' + (n - 1) + '.',
      'On déroule ligne par ligne : ' + M('s = ' + s0) + ', puis ' + trace.map(v => M('s = ' + v)).join(', ') + '.',
      'Le programme affiche ' + M(String(s)) + '.',
      '<b>Méthode sûre</b> : écrire un petit tableau avec une colonne par variable, et une ligne par tour de boucle.'
    ]
  };
});

G('algorithmique', 'ag-while', 'Boucle non bornée et seuil', 'ent', function(){
  const u0 = R.pick([1, 2, 3, 5]), a = R.pick([2, 3]), S = R.pick([50, 100, 200, 500, 1000]);
  let u = u0, n = 0;
  while (u <= S){ u = a * u; n++; }
  return {
    enonce: '<p>Que renvoie cette fonction ?</p>' +
            '<pre class="code">def seuil():\n    u = ' + u0 + '\n    n = 0\n    while u &lt;= ' + S + ':\n        u = ' + a + '*u\n        n = n + 1\n    return n</pre>',
    champs: [{ type: 'num', label: 'Valeur renvoyée', bon: n, tol: 1e-9 }],
    etapes: [
      'Tant que ' + M('u ≤ ' + S) + ', on multiplie ' + M('u') + ' par ' + M(String(a)) + ' et on compte un tour.',
      'Les valeurs successives de ' + M('u') + ' sont ' + (function(){ const t = []; let v = u0; while (v <= S){ t.push(v); v *= a; } t.push(v); return t.join(', '); })() + '.',
      'On sort dès que ' + M('u') + ' dépasse ' + M(String(S)) + ', ce qui arrive au bout de <b>' + n + ' tours</b>.',
      'La fonction renvoie ' + M(String(n)) + '.',
      '<b>Attention</b> : la valeur renvoyée est le <b>compteur</b>, pas la valeur de ' + M('u') + '.'
    ]
  };
});

/* =================== VOCABULAIRE ENSEMBLISTE ET LOGIQUE =================== */

G('logique', 'lg-symboles', 'Appartenance et inclusion', 'app', function(){
  const cas = R.pick([
    { bon: M('3 ∈ ℕ'), faux: [M('3 ⊂ ℕ'), M('ℕ ∈ ℤ'), M('{3} ∈ ℕ')], d: '3 est un <b>élément</b> de ' + M('ℕ') + ', on utilise ' + M('∈') + '.' },
    { bon: M('ℕ ⊂ ℤ'), faux: [M('ℕ ∈ ℤ'), M('ℤ ⊂ ℕ'), M('ℕ = ℤ')], d: M('ℕ') + ' et ' + M('ℤ') + ' sont deux <b>ensembles</b> : on utilise ' + M('⊂') + '. Et tout entier naturel est un entier relatif.' },
    { bon: M('-2 ∈ ℤ'), faux: [M('-2 ∈ ℕ'), M('-2 ⊂ ℤ'), M('-2 ∈ ℤ^{+}')], d: M('-2') + ' est un entier <b>relatif</b>, mais pas naturel : les entiers naturels sont positifs.' },
    { bon: M('frac{1}{3} ∈ ℚ'), faux: [M('frac{1}{3} ∈ ℤ'), M('frac{1}{3} ⊂ ℚ'), M('frac{1}{3} ∈ ℕ')], d: 'Un quotient de deux entiers est un <b>rationnel</b>, il appartient à ' + M('ℚ') + '.' },
    { bon: M('sqrt{2} ∈ ℝ'), faux: [M('sqrt{2} ∈ ℚ'), M('sqrt{2} ∈ ℤ'), M('sqrt{2} ⊂ ℝ')], d: M('sqrt{2}') + ' est un <b>irrationnel</b> : il est réel, mais ne s’écrit pas comme un quotient d’entiers.' }
  ]);
  const opts = R.shuffle([cas.bon].concat(cas.faux));
  return {
    enonce: '<p>Laquelle de ces écritures est <b>correcte</b> ?</p>',
    qcm: { options: opts, bon: opts.indexOf(cas.bon) },
    etapes: [
      cas.d,
      '<b>La règle</b> : ' + M('∈') + ' relie un <b>élément</b> à un ensemble, ' + M('⊂') + ' relie <b>deux ensembles</b>.',
      'Les emboîtements à connaître : ' + M('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ') + '.'
    ]
  };
});

G('logique', 'lg-contraposee', 'Contraposée et réciproque', 'app', function(){
  const cas = R.pick([
    { p: 'x = 2', q: 'x^{2} = 4' },
    { p: 'n est divisible par 4', q: 'n est pair', txt: true },
    { p: 'x > 3', q: 'x > 1' },
    { p: 'ABCD est un carré', q: 'ABCD est un rectangle', txt: true }
  ]);
  const P = cas.txt ? cas.p : M(cas.p);
  const Q = cas.txt ? cas.q : M(cas.q);
  const quoi = Math.random() < 0.5;
  const contraposee = 'Si ' + (cas.txt ? 'non (' + cas.q + ')' : 'non (' + mathHtml(cas.q) + ')') + ', alors ' + (cas.txt ? 'non (' + cas.p + ')' : mathHtml('non (' + cas.p + ')')) + '.';
  const reciproque = 'Si ' + Q + ', alors ' + P + '.';
  const identique = 'Si ' + P + ', alors ' + Q + '.';
  const opts = R.shuffle([contraposee, reciproque, identique, 'Si ' + P + ', alors non (' + Q + ').']);
  return {
    enonce: '<p>On considère l’implication : <b>si ' + P + ', alors ' + Q + '</b>.</p>' +
            '<p>Laquelle de ces propositions est sa <b>' + (quoi ? 'contraposée' : 'réciproque') + '</b> ?</p>',
    qcm: { options: opts, bon: opts.indexOf(quoi ? contraposee : reciproque) },
    etapes: [
      '<b>Réciproque</b> : on <b>échange</b> les deux membres. ' + M('P ⇒ Q') + ' devient ' + M('Q ⇒ P') + '.',
      '<b>Contraposée</b> : on échange <b>et</b> on nie les deux. ' + M('P ⇒ Q') + ' devient ' + M('non Q ⇒ non P') + '.',
      'La contraposée a <b>toujours</b> la même valeur de vérité que l’implication de départ. La réciproque, elle, peut très bien être fausse.',
      'Réponse : ' + (quoi ? contraposee : reciproque)
    ]
  };
});

G('logique', 'lg-contre-exemple', 'Trouver un contre-exemple', 'ent', function(){
  const cas = R.pick([
    { p: 'Tout nombre pair est divisible par 4.', ce: 6, d: '6 est pair, mais ' + M('6 = 4 × 1,5') + ' n’est pas divisible par 4.' },
    { p: 'Si ' + M('x^{2} > 4') + ' alors ' + M('x > 2') + '.', ce: -3, d: M('(-3)^{2} = 9 > 4') + ', pourtant ' + M('-3 &lt; 2') + '.' },
    { p: 'Tout entier divisible par 3 est impair.', ce: 6, d: '6 est divisible par 3 et pourtant pair.' },
    { p: 'Si ' + M('x > 0') + ' alors ' + M('x^{2} > x') + '.', ce: 0.5, d: M('0,5 > 0') + ' mais ' + M('0,5^{2} = 0,25 &lt; 0,5') + '.' }
  ]);
  const faux = [2, 4, 8, 12, 3, 5, -3, 0.5, 1].filter(v => v !== cas.ce);
  const opts = R.shuffle(R.shuffle(faux).slice(0, 3).concat([cas.ce]));
  return {
    enonce: '<p>Cette affirmation est <b>fausse</b> :</p><div class="center" style="font-size:1.05em">' + cas.p + '</div>' +
            '<p>Lequel de ces nombres en est un <b>contre-exemple</b> ?</p>',
    qcm: { options: opts.map(v => M(nf(v))), bon: opts.indexOf(cas.ce) },
    etapes: [
      'Pour démontrer qu’une propriété « <b>pour tout…</b> » est fausse, <b>un seul contre-exemple suffit</b>.',
      'Un contre-exemple doit vérifier l’hypothèse et <b>contredire</b> la conclusion.',
      'Ici : ' + cas.d,
      '<b>Attention à la réciproque</b> : un exemple qui marche ne démontre <b>rien</b>. Il faut une démonstration générale.'
    ]
  };
});

G('logique', 'lg-intervalles', 'Réunion et intersection', 'ent', function(){
  const a = R.int(-6, 0), b = a + R.int(2, 5);
  const c = b - R.int(1, 2), d = c + R.int(3, 6);
  const inter = Math.random() < 0.5;
  const I = M('[ ' + nf(a) + ' ; ' + nf(b) + ' ]'), J = M('[ ' + nf(c) + ' ; ' + nf(d) + ' ]');
  const bonne = inter ? M('[ ' + nf(c) + ' ; ' + nf(b) + ' ]') : M('[ ' + nf(a) + ' ; ' + nf(d) + ' ]');
  const opts = R.shuffle([
    bonne,
    inter ? M('[ ' + nf(a) + ' ; ' + nf(d) + ' ]') : M('[ ' + nf(c) + ' ; ' + nf(b) + ' ]'),
    M('[ ' + nf(a) + ' ; ' + nf(c) + ' ]'),
    M('[ ' + nf(b) + ' ; ' + nf(d) + ' ]')
  ]);
  return {
    enonce: '<p>On pose ' + M('I = [ ' + nf(a) + ' ; ' + nf(b) + ' ]') + ' et ' + M('J = [ ' + nf(c) + ' ; ' + nf(d) + ' ]') + '.</p>' +
            '<p>Que vaut ' + M('I ' + (inter ? '∩' : '∪') + ' J') + ' ?</p>',
    qcm: { options: opts, bon: opts.indexOf(bonne) },
    etapes: [
      'On place les deux intervalles sur une droite graduée : ' + I + ' et ' + J + ' se chevauchent entre ' + M(nf(c)) + ' et ' + M(nf(b)) + '.',
      inter
        ? 'L’<b>intersection</b> (' + M('∩') + ', le « et ») est la partie <b>commune</b> : ' + bonne + '.'
        : 'La <b>réunion</b> (' + M('∪') + ', le « ou ») est tout ce qui est couvert par l’un <b>ou</b> l’autre : ' + bonne + '.',
      '<b>Mémo</b> : ' + M('∩') + ' ressemble à un A comme « <b>A</b>ussi dans les deux », ' + M('∪') + ' est ouvert vers le haut, il ramasse tout.'
    ]
  };
});

/* =================== EXPÉRIMENTATIONS =================== */

G('experimentations', 'xp-esperance', 'Espérance d’un jeu', 'app', function(){
  const faces = R.pick([4, 6, 8, 10]);
  const gain = R.int(1, 5);
  const E = (faces + 1) / 2 * gain;
  return {
    enonce: '<p>On lance un dé équilibré à <b>' + faces + ' faces</b>, numérotées de 1 à ' + faces + '. ' +
            'On gagne <b>' + gain + ' €</b> par point obtenu.</p>' +
            '<p>Quel est le gain moyen par partie, sur un très grand nombre de parties ? (arrondi au centième)</p>',
    champs: [{ type: 'num', label: 'Gain moyen (en €)', bon: Math.round(E * 100) / 100, tol: 0.011 }],
    etapes: [
      'Toutes les faces ont la même probabilité ' + M('frac{1}{' + faces + '}') + '.',
      'L’espérance du numéro obtenu est la moyenne des numéros : ' +
        M('frac{1 + 2 + … + ' + faces + '}{' + faces + '} = frac{' + (faces * (faces + 1) / 2) + '}{' + faces + '} = ' + nf((faces + 1) / 2)) + '.',
      'Le gain vaut ' + M(String(gain)) + ' fois le numéro, et l’espérance est <b>linéaire</b> : ' +
        M('E(' + gain + 'X) = ' + gain + 'E(X) = ' + nf(Math.round(E * 100) / 100)) + ' €.',
      '<b>Interprétation</b> : sur 1 000 parties, le gain total sera proche de ' + M(nf(Math.round(E * 1000)) + ' €') + '. ' +
        'Sur une seule partie, cela ne dit rien.'
    ]
  };
});

G('experimentations', 'xp-moyenne', 'Moyenne d’un échantillon', 'app', function(){
  const n = R.pick([5, 8, 10]);
  const ech = [];
  for (let i = 0; i < n; i++) ech.push(R.int(1, 6));
  const somme = ech.reduce((t, v) => t + v, 0);
  const m = somme / n;
  return {
    enonce: '<p>On simule ' + n + ' lancers d’un dé équilibré à six faces. On obtient :</p>' +
            '<div class="center"><code>[' + ech.join(', ') + ']</code></div>' +
            '<p>Calcule la moyenne de cet échantillon (arrondie au centième).</p>',
    champs: [{ type: 'num', label: 'moyenne ≈', bon: Math.round(m * 100) / 100, tol: 0.011 }],
    etapes: [
      'On additionne : ' + M(ech.join(' + ') + ' = ' + somme) + '.',
      'On divise par la taille de l’échantillon : ' + M('frac{' + somme + '}{' + n + '} = ' + nf(Math.round(m * 1000) / 1000)) + '.',
      'L’espérance théorique vaut ' + M('3,5') + '. L’écart observé ici est de ' + M(nf(Math.round(Math.abs(m - 3.5) * 100) / 100)) + '.',
      '<b>C’est tout le sujet du chapitre</b> : avec ' + n + ' lancers seulement, la moyenne observée peut être loin de 3,5. ' +
        'Avec 10 000 lancers, elle en serait très proche.'
    ]
  };
});

G('experimentations', 'xp-ecart', 'L’écart 2σ/√n', 'ent', function(){
  const sigma = R.pick([1, 1.5, 2, 2.5, 3, 4]);
  const n = R.pick([25, 100, 400, 900, 2500]);
  const e = 2 * sigma / Math.sqrt(n);
  return {
    enonce: '<p>Une variable aléatoire a pour écart type ' + M('σ = ' + nf(sigma)) + '. ' +
            'On simule un échantillon de taille ' + M('n = ' + n) + '.</p>' +
            '<p>Calcule ' + M('frac{2σ}{sqrt{n}}') + ' (arrondi au millième). C’est l’écart que la moyenne de l’échantillon ' +
            'ne dépasse pas, dans environ 95 % des cas.</p>',
    champs: [{ type: 'num', label: '2σ/√n ≈', bon: Math.round(e * 1000) / 1000, tol: 0.0011 }],
    etapes: [
      M('sqrt{' + n + '} = ' + nf(Math.sqrt(n))),
      M('frac{2 × ' + nf(sigma) + '}{' + nf(Math.sqrt(n)) + '} = frac{' + nf(2 * sigma) + '}{' + nf(Math.sqrt(n)) + '} ≈ ' + nf(Math.round(e * 10000) / 10000)),
      'Autrement dit, la moyenne observée a environ 95 % de chances de tomber à moins de ' + M(nf(Math.round(e * 1000) / 1000)) + ' de l’espérance.',
      '<b>À retenir</b> : cette quantité décroît en ' + M('sqrt{n}') + '. Pour diviser l’erreur par 2, il faut <b>quatre fois plus</b> de tirages, pas deux fois plus.'
    ]
  };
});

/* =================== DERNIÈRES CAPACITÉS NEUVES =================== */

G('second-degre', 'sd-factorisation-astuce', 'Factoriser sans discriminant', 'ent', function(){
  const type = R.int(1, 3);
  let a, b, c, x1, x2, indice;
  if (type === 1){                                   /* racine évidente 1 : a + b + c = 0 */
    a = R.pick([1, 2, 3, -1, -2]); x1 = 1; x2 = R.nz(-6, 6);
    b = -a * (x1 + x2); c = a * x1 * x2;
    indice = 'La somme des coefficients est nulle : ' + M(nf(a) + sgn(b, '') + sgn(c, '') + ' = 0') + ', donc <b>1 est racine</b>.';
  } else if (type === 2){                            /* racine évidente -1 : a - b + c = 0 */
    a = R.pick([1, 2, 3, -1, -2]); x1 = -1; x2 = R.nz(-6, 6);
    b = -a * (x1 + x2); c = a * x1 * x2;
    indice = M('a - b + c = ' + nf(a - b + c) + ' = 0') + ', donc <b>' + M('-1') + ' est racine</b>.';
  } else {                                           /* somme et produit entiers */
    a = 1; x1 = R.nz(-6, 6); x2 = R.nz(-6, 6);
    b = -(x1 + x2); c = x1 * x2;
    indice = 'On cherche deux entiers de somme ' + M(nf(-b)) + ' et de produit ' + M(nf(c)) + ' : ce sont ' +
             M(nf(x1)) + ' et ' + M(nf(x2)) + '.';
  }
  const pet = Math.min(x1, x2), gra = Math.max(x1, x2);
  return {
    enonce: '<p>Factorise <b>sans calculer le discriminant</b> :</p>' + Mc('f(x) = ' + trinome(a, b, c)) +
            '<p>Donne les deux racines.</p>',
    champs: [
      { type: 'num', label: 'plus petite racine', bon: pet, tol: 1e-6 },
      { type: 'num', label: 'plus grande racine', bon: gra, tol: 1e-6 }
    ],
    etapes: [
      indice,
      'La seconde racine se déduit du <b>produit</b> : ' + M('x_1 x_2 = frac{c}{a} = ' + nf(c / a)) + ', donc l’autre racine est ' +
        M(nf(x1 === 1 || x1 === -1 ? x2 : x1)) + '.',
      'On vérifie avec la <b>somme</b> : ' + M('x_1 + x_2 = frac{-b}{a} = ' + nf(-b / a)) + ' ✓',
      'Forme factorisée : ' + M('f(x) = ' + (a === 1 ? '' : nf(a)) + fact(pet) + fact(gra)) + '.',
      '<b>Le programme 2026 demande explicitement cette stratégie</b> : on cherche d’abord une factorisation astucieuse, le discriminant vient en dernier recours.'
    ]
  };
});

/* Résoudre en donnant la réponse EXACTE. Une racine de trinôme à coefficients
   entiers vaut (-b ± √Δ)/(2a) : selon Δ c'est un entier, une fraction, ou un
   nombre avec radical. La classe attend (1 - √7)/3 ou 1/3, jamais une décimale,
   d'où la saisie en cases. */
G('second-degre', 'sd-racines-exactes', 'Racines exactes : fraction ou radical', 'ent', function(){
  let a = 3, b = -2, c = -2, D = 28;
  for (let k = 0; k < 400; k++){
    const aa = R.pick([1, 1, 2, 3]), bb = R.nz(-9, 9), cc = R.nz(-6, 6);
    const DD = bb * bb - 4 * aa * cc;
    if (DD <= 0 || DD > 200) continue;
    const n = normExact({ p: -bb, m: 1, d: DD, q: 2 * aa });
    if (n && n.d <= 60 && Math.abs(n.p) <= 40 && n.q <= 30){ a = aa; b = bb; c = cc; D = DD; break; }
  }
  const r1 = { p: -b, m: -1, d: D, q: 2 * a };   /* a > 0, donc r1 < r2 */
  const r2 = { p: -b, m: 1, d: D, q: 2 * a };
  const rac = Math.sqrt(D), carre = Math.abs(rac - Math.round(rac)) < 1e-9;
  const sr = sortirDuRadical(1, D);
  /* écriture brute sortie de la formule, avant réduction */
  const brut = sg => 'frac{' + nf(-b) + ' ' + sg + ' sqrt{' + nf(D) + '}}{' + nf(2 * a) + '}';
  const t1 = texteExact(r1), t2 = texteExact(r2);
  return {
    enonce: '<p>Résous ' + M(trinome(a, b, c) + ' = 0') + '.</p>' +
            '<p class="tiny">Réponse <b>exacte</b>, un entier par case' +
            (!carre && sr.m > 1 ? ' — la racine se simplifie' : '') + '.</p>',
    champs: [
      { type: 'exact', forme: 'radical', label: 'plus petite racine', bon: r1 },
      { type: 'exact', forme: 'radical', label: 'plus grande racine', bon: r2 }
    ],
    etapes: [
      'On identifie ' + M('a = ' + nf(a)) + ', ' + M('b = ' + nf(b)) + ', ' + M('c = ' + nf(c)) + '.',
      M('Δ = (' + nf(b) + ')^{2} - 4 × ' + nf(a) + ' × (' + nf(c) + ') = ' + nf(D)) +
        ', donc ' + M('Δ > 0') + ' : deux racines.',
      carre
        ? M('sqrt{' + nf(D) + '} = ' + nf(Math.round(rac))) + ' : un carré parfait, les racines sont rationnelles.'
        : (sr.m > 1
            ? '<b>On simplifie la racine</b> : ' + M('sqrt{' + nf(D) + '} = ' + nf(sr.m) + 'sqrt{' + nf(sr.d) + '}') +
              '. C’est cette écriture qu’attend le correcteur, pas une valeur approchée.'
            : M('sqrt{' + nf(D) + '}') + ' ne se simplifie pas : ' + M(nf(D)) +
              ' n’a aucun facteur carré. On le garde tel quel — surtout pas de valeur approchée.'),
      M('x_1 = ' + brut('-') + (t1 === brut('-') ? '' : ' = ' + t1)) + ' et ' +
        M('x_2 = ' + brut('+') + (t2 === brut('+') ? '' : ' = ' + t2)) + '.',
      'Forme factorisée : ' + M('f(x) = ' + coef(a) + '(x - ' + t1 + ')(x - ' + t2 + ')') +
        '. <b>Ne pas oublier le facteur ' + M('a') + '.</b>'
    ]
  };
});

/* Retrouver un trinôme à partir de ses racines et d'un point : les exercices 55,
   56 et 72 du manuel le demandent trois fois de suite. Le coefficient a vaut v/P,
   souvent fractionnaire — l'exercice 72 attend exactement 1/3 — d'où la réponse
   exacte plutôt qu'une décimale. */
G('second-degre', 'sd-polynome-point', 'Retrouver un trinôme : ses racines et un point', 'ent', function(){
  const x1 = R.nz(-6, 6);
  let x2 = R.nz(-6, 6);
  while (x2 === x1) x2 = R.nz(-6, 6);
  let x0 = R.int(-6, 6);
  while (x0 === x1 || x0 === x2) x0 = R.int(-6, 6);
  const pet = Math.min(x1, x2), gra = Math.max(x1, x2);
  const P = (x0 - pet) * (x0 - gra);
  const v = R.nz(-12, 12);
  const a = { p: v, q: P };                              /* a = v / P            */
  const b = { p: -v * (pet + gra), q: P };               /* b = -a(x1 + x2)      */
  const c = { p: v * pet * gra, q: P };                  /* c = a·x1·x2          */
  const ta = texteExact(a);
  return {
    enonce: '<p>' + M('f') + ' est un trinôme du second degré dont les racines sont ' +
            M(nf(pet)) + ' et ' + M(nf(gra)) + ', et tel que ' + M('f(' + nf(x0) + ') = ' + nf(v)) + '.</p>' +
            '<p>Donne sa forme développée ' + M('f(x) = ax^{2} + bx + c') + '.</p>' +
            '<p class="tiny">Réponse <b>exacte</b> : les coefficients ne sont pas toujours entiers.</p>',
    champs: [
      { type: 'exact', label: 'a =', bon: a },
      { type: 'exact', label: 'b =', bon: b },
      { type: 'exact', label: 'c =', bon: c }
    ],
    etapes: [
      'Les deux racines donnent la forme factorisée <b>à un coefficient près</b> : ' +
        M('f(x) = a' + fact(pet) + fact(gra)) + '. Deux racines ne suffisent pas, il faut un point pour fixer ' + M('a') + '.',
      'Le point le fixe : ' + M('f(' + nf(x0) + ') = a × (' + nf(x0 - pet) + ') × (' + nf(x0 - gra) + ') = ' + nf(P) + 'a') +
        ', et cette valeur vaut ' + M(nf(v)) + '.',
      'Donc ' + M(nf(P) + 'a = ' + nf(v)) + ', soit ' + M('a = frac{' + nf(v) + '}{' + nf(P) + '} = ' + ta) +
        '. <b>Attention au sens de la division</b> : c’est la valeur divisée par le produit, pas l’inverse.',
      'On développe ' + M(ta + fact(pet) + fact(gra)) + ' : ' +
        M('b = -a(x_1 + x_2) = ' + texteExact(b)) + ' et ' + M('c = a x_1 x_2 = ' + texteExact(c)) + '.',
      'Vérification : ' + M('f(' + nf(x0) + ') = ' + ta + ' × (' + nf(x0 - pet) + ') × (' + nf(x0 - gra) + ') = ' + nf(v)) + ' ✓'
    ]
  };
});

/* Corollaire des relations de Viète, dans le sens « on connaît S et P, on cherche
   les deux nombres ». La fiche de révision du contrôle le demande ; aucun exercice
   ne travaillait ce sens-là — la factorisation part du trinôme, pas de S et P. */
G('second-degre', 'sd-viete-corollaire', 'Somme et produit : retrouver les deux nombres', 'ent', function(){
  const x1 = R.nz(-9, 9);
  let x2 = R.nz(-9, 9);
  while (x2 === x1) x2 = R.nz(-9, 9);
  const S = x1 + x2, P = x1 * x2, D = S * S - 4 * P;
  const pet = Math.min(x1, x2), gra = Math.max(x1, x2);
  return {
    enonce: '<p>Trouve deux nombres dont la <b>somme</b> vaut ' + M(nf(S)) +
            ' et le <b>produit</b> ' + M(nf(P)) + '.</p>',
    champs: [
      { type: 'num', label: 'le plus petit', bon: pet, tol: 1e-6 },
      { type: 'num', label: 'le plus grand', bon: gra, tol: 1e-6 }
    ],
    etapes: [
      'Corollaire des <b>relations de Viète</b> : deux nombres de somme ' + M('S') + ' et de produit ' +
        M('P') + ' sont les racines de ' + M('x^{2} - S x + P = 0') + '.',
      'Ici ' + M('S = ' + nf(S)) + ' et ' + M('P = ' + nf(P)) + ', donc on résout :' + Mc(trinome(1, -S, P) + ' = 0'),
      'Discriminant : ' + M('\u0394 = (' + nf(-S) + ')^{2} - 4 \u00D7 1 \u00D7 (' + nf(P) + ') = ' + nf(D)) +
        ', et ' + M('sqrt{' + nf(D) + '} = ' + nf(Math.sqrt(D))) + '.',
      'Racines : ' + M('frac{' + nf(S) + ' - ' + nf(Math.sqrt(D)) + '}{2} = ' + nf(pet)) + ' et ' +
        M('frac{' + nf(S) + ' + ' + nf(Math.sqrt(D)) + '}{2} = ' + nf(gra)) + '.',
      'Vérification : ' + M(nf(pet) + ' + ' + nf(gra) + ' = ' + nf(S)) + ' et ' +
        M(nf(pet) + ' \u00D7 ' + nf(gra) + ' = ' + nf(P)) + ' \u2713'
    ]
  };
});

G('probas-conditionnelles', 'pr-succession', 'Succession de deux épreuves', 'ent', function(){
  const p1 = R.pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
  const p2 = R.pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.75]);
  const quoi = R.int(1, 3);
  const val = quoi === 1 ? p1 * p2 : (quoi === 2 ? (1 - p1) * (1 - p2) : p1 * (1 - p2) + (1 - p1) * p2);
  const libelle = quoi === 1 ? 'les deux réussissent'
    : (quoi === 2 ? 'ni l’un ni l’autre ne réussisse' : 'exactement un des deux réussisse');
  return {
    enonce: '<p>Deux tirs sont effectués, <b>indépendamment</b> l’un de l’autre.</p>' +
            '<p>Le premier réussit avec la probabilité ' + M(nf(p1)) + ', le second avec la probabilité ' + M(nf(p2)) + '.</p>' +
            '<p>Quelle est la probabilité que <b>' + libelle + '</b> ? (arrondi au millième)</p>',
    champs: [{ type: 'num', label: 'Probabilité ≈', bon: Math.round(val * 1000) / 1000, tol: 0.0011 }],
    etapes: [
      'Les épreuves sont <b>indépendantes</b> : le long d’un chemin de l’arbre, on <b>multiplie</b> les probabilités.',
      quoi === 1
        ? M(nf(p1) + ' × ' + nf(p2) + ' = ' + nf(Math.round(val * 10000) / 10000))
        : (quoi === 2
            ? 'Échouer, c’est l’événement contraire : ' + M('(1 - ' + nf(p1) + ') × (1 - ' + nf(p2) + ') = ' + nf(Math.round((1 - p1) * 100) / 100) + ' × ' + nf(Math.round((1 - p2) * 100) / 100) + ' = ' + nf(Math.round(val * 10000) / 10000))
            : 'Deux chemins conviennent : réussite puis échec, ou échec puis réussite. On les <b>additionne</b> :' +
              Mc(nf(p1) + ' × ' + nf(Math.round((1 - p2) * 100) / 100) + ' + ' + nf(Math.round((1 - p1) * 100) / 100) + ' × ' + nf(p2) + ' = ' + nf(Math.round(val * 10000) / 10000))),
      'Soit ' + M(nf(Math.round(val * 1000) / 1000)) + ' au millième.',
      '<b>La règle du chapitre</b> : le long d’un chemin on multiplie, entre les chemins on additionne.'
    ]
  };
});
