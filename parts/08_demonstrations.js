/* =========================================================================
   Démonstrations à rédiger.
   Une démonstration ne peut pas être corrigée automatiquement : l'élève la
   rédige sur son cahier, puis compare avec le corrigé et s'auto-évalue
   ligne par ligne, avec le barème du professeur. C'est exactement ce que
   fait un correcteur · et ça apprend les attentes de rédaction.
   ========================================================================= */

NIVEAUX.demo = 'Démonstration';
ORDRE_NIVEAUX.push('demo');
POINTS.demo = 50;

function D(chap, id, label, fn){
  const g = { id: id, label: label, niveau: 'demo', chap: chap, fn: fn, demo: true };
  CHAP[chap].gens.push(g);
  METHODE[id] = g;
}

/* =================== SECOND DEGRÉ =================== */

D('second-degre', 'dm-canonique', 'Démontrer la forme canonique', function(){
  return {
    enonce: '<p>Soit ' + M('f(x) = ax^{2} + bx + c') + ' avec ' + M('a ≠ 0') + '.</p>' +
            '<p><b>Démontre</b> que, pour tout réel ' + M('x') + ' :</p>' +
            Mc('f(x) = a(x + frac{b}{2a})^{2} - frac{b^{2} - 4ac}{4a}'),
    aide: 'Méthode : factoriser ' + M('a') + ', puis reconnaître le début d’une identité remarquable ' + M('(x + k)^{2}') + '.',
    bareme: [
      { pts: 1, d: 'On factorise ' + M('a') + ' dans les deux premiers termes :' + Mc('f(x) = a(x^{2} + frac{b}{a}x) + c') },
      { pts: 2, d: 'On reconnaît le début du développement de ' + M('(x + frac{b}{2a})^{2}') + ', car ' +
                   M('(x + frac{b}{2a})^{2} = x^{2} + frac{b}{a}x + frac{b^{2}}{4a^{2}}') + '.' },
      { pts: 2, d: 'On ajoute et on retranche le terme manquant :' +
                   Mc('f(x) = a[(x + frac{b}{2a})^{2} - frac{b^{2}}{4a^{2}}] + c') },
      { pts: 1, d: 'On développe le facteur ' + M('a') + ' :' + Mc('f(x) = a(x + frac{b}{2a})^{2} - frac{b^{2}}{4a} + c') },
      { pts: 1, d: 'On réduit au même dénominateur ' + M('4a') + ' :' +
                   Mc('- frac{b^{2}}{4a} + c = frac{-b^{2} + 4ac}{4a} = - frac{b^{2} - 4ac}{4a}') },
      { pts: 1, d: 'Conclusion : on retrouve bien l’égalité annoncée, avec ' + M('α = - frac{b}{2a}') + ' et ' + M('β = - frac{Δ}{4a}') + '.' }
    ]
  };
});

D('second-degre', 'dm-racines', 'Démontrer la formule des racines', function(){
  return {
    enonce: '<p>On admet la forme canonique ' + M('f(x) = a(x + frac{b}{2a})^{2} - frac{Δ}{4a}') + ', avec ' + M('Δ = b^{2} - 4ac') + '.</p>' +
            '<p><b>Démontre</b> que, lorsque ' + M('Δ > 0') + ', l’équation ' + M('f(x) = 0') + ' admet exactement deux solutions :</p>' +
            Mc('x_1 = frac{-b - sqrt{Δ}}{2a}    et    x_2 = frac{-b + sqrt{Δ}}{2a}'),
    aide: 'Méthode : isoler le carré, puis utiliser l’identité ' + M('A^{2} - B^{2} = (A - B)(A + B)') + '.',
    bareme: [
      { pts: 1, d: M('f(x) = 0') + ' équivaut à ' + M('a[(x + frac{b}{2a})^{2} - frac{Δ}{4a^{2}}] = 0') + ', et comme ' + M('a ≠ 0') + ' :' +
                   Mc('(x + frac{b}{2a})^{2} = frac{Δ}{4a^{2}}') },
      { pts: 2, d: 'Comme ' + M('Δ > 0') + ', on peut écrire ' + M('frac{Δ}{4a^{2}} = (frac{sqrt{Δ}}{2a})^{2}') + ' : le second membre est bien un carré.' },
      { pts: 2, d: 'On applique ' + M('A^{2} = B^{2} ⇔ A = B') + ' ou ' + M('A = -B') + ' :' +
                   Mc('x + frac{b}{2a} = frac{sqrt{Δ}}{2a}    ou    x + frac{b}{2a} = - frac{sqrt{Δ}}{2a}') },
      { pts: 2, d: 'On isole ' + M('x') + ' dans chaque cas :' + Mc('x = frac{-b + sqrt{Δ}}{2a}    ou    x = frac{-b - sqrt{Δ}}{2a}') },
      { pts: 1, d: 'Ces deux nombres sont distincts car ' + M('sqrt{Δ} ≠ 0') + ' : il y a donc <b>exactement deux</b> solutions.' }
    ]
  };
});

/* =================== SUITES =================== */

D('suites', 'dm-gauss', 'Démontrer la somme des n premiers entiers', function(){
  return {
    enonce: '<p><b>Démontre</b> que, pour tout entier ' + M('n ≥ 1') + ' :</p>' +
            Mc('1 + 2 + 3 + … + n = frac{n(n+1)}{2}'),
    aide: 'Méthode dite « de Gauss » : écrire la somme deux fois, la seconde à l’envers, puis additionner.',
    bareme: [
      { pts: 1, d: 'On note ' + M('S = 1 + 2 + … + n') + '.' },
      { pts: 2, d: 'On récrit la même somme dans l’ordre décroissant :' + Mc('S = n + (n-1) + … + 2 + 1') },
      { pts: 2, d: 'On additionne les deux lignes terme à terme. Chaque colonne donne ' + M('n + 1') + ' :' +
                   Mc('2S = (n+1) + (n+1) + … + (n+1)') + '<p class="tiny" style="text-align:center">et il y a exactement ' + M('n') + ' colonnes</p>' },
      { pts: 1, d: 'Donc ' + M('2S = n(n+1)') + '.' },
      { pts: 1, d: 'Conclusion : ' + M('S = frac{n(n+1)}{2}') + '.' }
    ]
  };
});

D('suites', 'dm-arithmetico', 'Démontrer qu’une suite auxiliaire est géométrique', function(){
  const cas = R.pick([[0.5, 4, 8], [3, -4, 2], [2, -6, 6], [0.8, 10, 50], [1.5, -5, 10]]);
  const a = cas[0], b = cas[1], L = cas[2];
  const u0 = R.int(1, 20);
  return {
    enonce: '<p>Soit ' + M('u_0 = ' + nf(u0)) + ' et ' + M('u_{n+1} = ' + lead(a, 'u_n') + sgn(b, '')) + ' pour tout entier ' + M('n') + '.</p>' +
            '<p>On pose ' + M('v_n = u_n - ' + nf(L)) + '.</p>' +
            '<p><b>Démontre</b> que ' + M('(v_n)') + ' est géométrique, puis donne l’expression de ' + M('u_n') + ' en fonction de ' + M('n') + '.</p>',
    aide: 'Méthode : calculer ' + M('v_{n+1}') + ' et faire apparaître ' + M('v_n') + ' en facteur.',
    bareme: [
      { pts: 1, d: 'On part de la définition : ' + M('v_{n+1} = u_{n+1} - ' + nf(L)) + '.' },
      { pts: 2, d: 'On remplace ' + M('u_{n+1}') + ' par la relation de récurrence :' +
                   Mc('v_{n+1} = ' + lead(a, 'u_n') + sgn(b, '') + ' - ' + nf(L)) },
      { pts: 2, d: 'On remplace ' + M('u_n') + ' par ' + M('v_n + ' + nf(L)) + ' (puisque ' + M('v_n = u_n - ' + nf(L)) + ') :' +
                   Mc('v_{n+1} = ' + nf(a) + '(v_n + ' + nf(L) + ')' + sgn(b, '') + ' - ' + nf(L)) },
      { pts: 2, d: 'On développe et on constate que les constantes se compensent : ' +
                   M(nf(a) + ' × ' + nf(L) + sgn(b, '') + ' - ' + nf(L) + ' = 0') + ', il reste' + Mc('v_{n+1} = ' + lead(a, 'v_n')) },
      { pts: 1, d: 'Conclusion : ' + M('(v_n)') + ' est <b>géométrique de raison ' + M('q = ' + nf(a)) + '</b>, de premier terme ' +
                   M('v_0 = u_0 - ' + nf(L) + ' = ' + nf(u0 - L)) + '.' },
      { pts: 2, d: 'On en déduit ' + M('v_n = ' + nf(u0 - L) + ' × ' + nf(a) + '^{n}') + ' puis, en revenant à ' + M('u_n = v_n + ' + nf(L)) + ' :' +
                   Mc('u_n = ' + nf(u0 - L) + ' × ' + nf(a) + '^{n} + ' + nf(L)) }
    ]
  };
});

/* =================== DÉRIVATION =================== */

D('derivation', 'dm-derivee-carre', 'Démontrer que la dérivée de x² est 2x', function(){
  return {
    enonce: '<p>Soit ' + M('f(x) = x^{2}') + ' et ' + M('a') + ' un réel.</p>' +
            '<p><b>Démontre</b>, en revenant à la définition du nombre dérivé, que ' + M('f′(a) = 2a') + '.</p>',
    aide: 'Méthode : écrire le taux de variation entre ' + M('a') + ' et ' + M('a + h') + ', le simplifier, puis faire tendre ' + M('h') + ' vers 0.',
    bareme: [
      { pts: 2, d: 'On écrit le taux de variation :' + Mc('τ(h) = frac{f(a + h) - f(a)}{h} = frac{(a + h)^{2} - a^{2}}{h}') },
      { pts: 2, d: 'On développe le numérateur :' + Mc('(a + h)^{2} - a^{2} = a^{2} + 2ah + h^{2} - a^{2} = 2ah + h^{2}') },
      { pts: 2, d: 'On factorise par ' + M('h') + ' et on simplifie (licite car ' + M('h ≠ 0') + ') :' +
                   Mc('τ(h) = frac{h(2a + h)}{h} = 2a + h') },
      { pts: 1, d: 'Quand ' + M('h') + ' tend vers 0, ' + M('2a + h') + ' tend vers ' + M('2a') + '.' },
      { pts: 1, d: 'Conclusion : ' + M('f') + ' est dérivable en ' + M('a') + ' et ' + M('f′(a) = 2a') + '. Ceci valant pour tout réel ' + M('a') + ', ' + M('f′(x) = 2x') + '.' }
    ]
  };
});

D('derivation', 'dm-derivee-inverse', 'Démontrer la dérivée de 1/x', function(){
  return {
    enonce: '<p>Soit ' + M('f(x) = frac{1}{x}') + ' définie sur ' + M('] 0 ; +∞ [') + ' et ' + M('a > 0') + '.</p>' +
            '<p><b>Démontre</b> que ' + M('f′(a) = - frac{1}{a^{2}}') + '.</p>',
    aide: 'Méthode : mettre le taux de variation au même dénominateur avant de simplifier par ' + M('h') + '.',
    bareme: [
      { pts: 2, d: Mc('τ(h) = frac{f(a+h) - f(a)}{h} = frac{frac{1}{a+h} - frac{1}{a}}{h}') },
      { pts: 2, d: 'On réduit le numérateur au même dénominateur ' + M('a(a+h)') + ' :' +
                   Mc('frac{1}{a+h} - frac{1}{a} = frac{a - (a+h)}{a(a+h)} = frac{-h}{a(a+h)}') },
      { pts: 2, d: 'Diviser par ' + M('h') + ' revient à multiplier par ' + M('frac{1}{h}') + ', et on simplifie :' +
                   Mc('τ(h) = frac{-h}{a(a+h)} × frac{1}{h} = frac{-1}{a(a+h)}') },
      { pts: 1, d: 'Quand ' + M('h') + ' tend vers 0, ' + M('a + h') + ' tend vers ' + M('a') + ', donc ' + M('τ(h)') + ' tend vers ' + M('frac{-1}{a^{2}}') + '.' },
      { pts: 1, d: 'Conclusion : ' + M('f′(a) = - frac{1}{a^{2}}') + ', d’où ' + M('f′(x) = - frac{1}{x^{2}}') + ' sur ' + M('] 0 ; +∞ [') + '.' }
    ]
  };
});

/* =================== PRODUIT SCALAIRE =================== */

D('produit-scalaire', 'dm-alkashi', 'Démontrer le théorème d’Al-Kashi', function(){
  return {
    enonce: '<p>Dans un triangle ' + M('ABC') + ', on note ' + M('a = BC') + ', ' + M('b = AC') + ', ' + M('c = AB') + '.</p>' +
            '<p><b>Démontre</b>, à l’aide du produit scalaire, que :</p>' +
            Mc('a^{2} = b^{2} + c^{2} - 2bc @cos(Â)'),
    aide: 'Méthode : écrire ' + M('vec{BC} = vec{AC} - vec{AB}') + ' puis développer le carré scalaire.',
    bareme: [
      { pts: 2, d: 'Relation de Chasles : ' + M('vec{BC} = vec{BA} + vec{AC} = vec{AC} - vec{AB}') + '.' },
      { pts: 2, d: 'On élève au carré scalaire :' + Mc('a^{2} = ‖vec{BC}‖^{2} = ‖vec{AC} - vec{AB}‖^{2}') },
      { pts: 2, d: 'On développe comme une identité remarquable :' +
                   Mc('‖vec{AC} - vec{AB}‖^{2} = ‖vec{AC}‖^{2} - 2 vec{AC} · vec{AB} + ‖vec{AB}‖^{2}') },
      { pts: 2, d: 'On reconnaît ' + M('‖vec{AC}‖ = b') + ', ' + M('‖vec{AB}‖ = c') + ', et par définition du produit scalaire ' +
                   M('vec{AC} · vec{AB} = bc @cos(Â)') + '.' },
      { pts: 1, d: 'Conclusion : ' + M('a^{2} = b^{2} + c^{2} - 2bc @cos(Â)') + '.' },
      { pts: 1, d: 'Remarque attendue : si ' + M('Â = 90°') + ' alors ' + M('@cos(Â) = 0') + ' et on retrouve le théorème de Pythagore.' }
    ]
  };
});

D('produit-scalaire', 'dm-cercle-diametre', 'Démontrer la caractérisation du cercle de diamètre [AB]', function(){
  return {
    enonce: '<p>Soit ' + M('A') + ' et ' + M('B') + ' deux points distincts, et ' + M('I') + ' le milieu de ' + M('[AB]') + '.</p>' +
            '<p><b>Démontre</b> que l’ensemble des points ' + M('M') + ' tels que ' + M('vec{MA} · vec{MB} = 0') +
            ' est le cercle de centre ' + M('I') + ' et de rayon ' + M('frac{AB}{2}') + '.</p>',
    aide: 'Méthode : introduire le milieu ' + M('I') + ' avec Chasles, puis reconnaître une identité remarquable.',
    bareme: [
      { pts: 2, d: 'Chasles avec le point ' + M('I') + ' : ' + M('vec{MA} = vec{MI} + vec{IA}') + ' et ' + M('vec{MB} = vec{MI} + vec{IB}') + '.' },
      { pts: 1, d: 'Comme ' + M('I') + ' est le milieu de ' + M('[AB]') + ', on a ' + M('vec{IB} = -vec{IA}') + '.' },
      { pts: 2, d: 'Donc' + Mc('vec{MA} · vec{MB} = (vec{MI} + vec{IA}) · (vec{MI} - vec{IA})') },
      { pts: 2, d: 'C’est une identité remarquable ' + M('(X + Y)(X - Y) = X^{2} - Y^{2}') + ' :' +
                   Mc('vec{MA} · vec{MB} = ‖vec{MI}‖^{2} - ‖vec{IA}‖^{2} = MI^{2} - frac{AB^{2}}{4}') },
      { pts: 2, d: 'L’égalité ' + M('vec{MA} · vec{MB} = 0') + ' équivaut donc à ' + M('MI^{2} = frac{AB^{2}}{4}') + ', soit ' + M('MI = frac{AB}{2}') + '.' },
      { pts: 1, d: 'Conclusion : l’ensemble cherché est le cercle de centre ' + M('I') + ' et de rayon ' + M('frac{AB}{2}') + ', c’est-à-dire le cercle de diamètre ' + M('[AB]') + '.' }
    ]
  };
});
