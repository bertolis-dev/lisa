/* =========================================================================
   Les démonstrations exigibles du programme 2026 qui manquaient.
   Le BO en liste douze pour la spécialité de première ; celles-ci les
   complètent.
   ========================================================================= */

D('suites', 'dm-suite-arith', 'Démontrer le terme général d’une suite arithmétique', function(){
  return {
    enonce: '<p>' + M('(u_n)') + ' est une suite arithmétique de premier terme ' + M('u_0') + ' et de raison ' + M('r') + ', ' +
            'c’est-à-dire que ' + M('u_{n+1} = u_n + r') + ' pour tout entier ' + M('n') + '.</p>' +
            '<p><b>Démontre</b> que, pour tout entier ' + M('n') + ' :</p>' + Mc('u_n = u_0 + n r'),
    aide: 'Méthode : écrire les égalités successives, puis les additionner. Tout se simplifie.',
    bareme: [
      { pts: 2, d: 'On écrit la relation de récurrence pour chaque rang, de 0 à ' + M('n - 1') + ' :' +
                   Mc('u_1 - u_0 = r') + Mc('u_2 - u_1 = r') + '<p class="tiny" style="text-align:center">…</p>' +
                   Mc('u_n - u_{n-1} = r') },
      { pts: 2, d: 'On additionne ces ' + M('n') + ' égalités membre à membre. À gauche, chaque terme apparaît une fois en positif et une fois en négatif, sauf ' + M('u_n') + ' et ' + M('-u_0') + ' : c’est un <b>télescopage</b>.' },
      { pts: 2, d: 'Il reste donc' + Mc('u_n - u_0 = n r') + '<p class="tiny" style="text-align:center">(le second membre est la somme de ' + M('n') + ' fois ' + M('r') + ')</p>' },
      { pts: 1, d: 'Conclusion : ' + M('u_n = u_0 + n r') + '.' },
      { pts: 1, d: 'Remarque attendue : si la suite commence à ' + M('u_1') + ', la même démonstration donne ' + M('u_n = u_1 + (n - 1)r') + '.' }
    ]
  };
});

D('suites', 'dm-suite-geo', 'Démontrer le terme général d’une suite géométrique', function(){
  return {
    enonce: '<p>' + M('(u_n)') + ' est géométrique de premier terme ' + M('u_0') + ' non nul et de raison ' + M('q') + ' non nulle : ' +
            M('u_{n+1} = q u_n') + '.</p>' +
            '<p><b>Démontre</b> que, pour tout entier ' + M('n') + ' :</p>' + Mc('u_n = u_0 q^{n}'),
    aide: 'Même principe que pour l’arithmétique, mais avec des quotients : on multiplie au lieu d’additionner.',
    bareme: [
      { pts: 2, d: 'Comme ' + M('u_0 ≠ 0') + ' et ' + M('q ≠ 0') + ', aucun terme n’est nul et on peut écrire les quotients :' +
                   Mc('frac{u_1}{u_0} = q') + Mc('frac{u_2}{u_1} = q') + '<p class="tiny" style="text-align:center">…</p>' + Mc('frac{u_n}{u_{n-1}} = q') },
      { pts: 2, d: 'On <b>multiplie</b> ces ' + M('n') + ' égalités membre à membre.' },
      { pts: 2, d: 'À gauche, tous les facteurs se simplifient deux à deux sauf ' + M('u_n') + ' au numérateur et ' + M('u_0') + ' au dénominateur :' +
                   Mc('frac{u_n}{u_0} = q^{n}') },
      { pts: 1, d: 'Conclusion : ' + M('u_n = u_0 q^{n}') + '.' },
      { pts: 1, d: 'Remarque : la démonstration suppose les termes non nuls, ce qui est bien précisé dans l’énoncé.' }
    ]
  };
});

D('suites', 'dm-somme-geo', 'Démontrer la somme 1 + q + … + qⁿ', function(){
  return {
    enonce: '<p>Soit ' + M('q') + ' un réel différent de 1 et ' + M('n') + ' un entier naturel.</p>' +
            '<p><b>Démontre</b> que</p>' + Mc('1 + q + q^{2} + … + q^{n} = frac{1 - q^{n+1}}{1 - q}'),
    aide: 'Méthode : poser ' + M('S') + ', calculer ' + M('qS') + ', puis soustraire les deux.',
    bareme: [
      { pts: 1, d: 'On pose ' + M('S = 1 + q + q^{2} + … + q^{n}') + '.' },
      { pts: 2, d: 'On multiplie par ' + M('q') + ' :' + Mc('qS = q + q^{2} + … + q^{n} + q^{n+1}') },
      { pts: 2, d: 'On soustrait les deux lignes. Tous les termes intermédiaires disparaissent, il ne reste que le premier de ' + M('S') + ' et le dernier de ' + M('qS') + ' :' +
                   Mc('S - qS = 1 - q^{n+1}') },
      { pts: 2, d: 'On factorise à gauche : ' + M('S(1 - q) = 1 - q^{n+1}') + '.' },
      { pts: 1, d: 'Comme ' + M('q ≠ 1') + ', on a ' + M('1 - q ≠ 0') + ' et on peut diviser :' + Mc('S = frac{1 - q^{n+1}}{1 - q}') },
      { pts: 1, d: 'La mention « ' + M('q ≠ 1') + ' donc on peut diviser » est <b>attendue</b> : c’est elle qui justifie la dernière étape.' }
    ]
  };
});

D('derivation', 'dm-tangente', 'Démontrer l’équation de la tangente', function(){
  return {
    enonce: '<p>Soit ' + M('f') + ' une fonction dérivable en ' + M('a') + ', et ' + M('T') + ' la tangente à sa courbe au point ' +
            M('A(a ; f(a))') + '.</p>' +
            '<p><b>Démontre</b> que ' + M('T') + ' a pour équation</p>' + Mc('y = f′(a)(x - a) + f(a)'),
    aide: 'Méthode : une tangente est une droite ; on écrit son équation réduite, puis on traduit les deux informations qu’on a sur elle.',
    bareme: [
      { pts: 2, d: 'La tangente n’est pas verticale : c’est une droite d’équation ' + M('y = mx + p') + '.' },
      { pts: 2, d: 'Par définition du nombre dérivé, son <b>coefficient directeur</b> est ' + M('f′(a)') + ', donc ' + M('m = f′(a)') + '.' },
      { pts: 2, d: 'Elle passe par le point de contact ' + M('A(a ; f(a))') + ', donc ses coordonnées vérifient l’équation :' +
                   Mc('f(a) = f′(a) × a + p') },
      { pts: 1, d: 'On en tire ' + M('p = f(a) - a f′(a)') + '.' },
      { pts: 2, d: 'En remplaçant : ' + M('y = f′(a)x + f(a) - a f′(a)') + ', que l’on factorise :' +
                   Mc('y = f′(a)(x - a) + f(a)') }
    ]
  };
});

D('derivation', 'dm-derivee-produit', 'Démontrer la dérivée d’un produit', function(){
  return {
    enonce: '<p>Soit ' + M('u') + ' et ' + M('v') + ' deux fonctions dérivables en ' + M('a') + '.</p>' +
            '<p><b>Démontre</b> que ' + M('uv') + ' est dérivable en ' + M('a') + ' et que</p>' +
            Mc('(uv)′(a) = u′(a)v(a) + u(a)v′(a)'),
    aide: 'Méthode : écrire le taux de variation du produit, puis <b>ajouter et retrancher</b> un même terme pour faire apparaître les deux taux de variation.',
    bareme: [
      { pts: 2, d: 'On écrit le taux de variation de ' + M('uv') + ' entre ' + M('a') + ' et ' + M('a + h') + ' :' +
                   Mc('τ(h) = frac{u(a+h)v(a+h) - u(a)v(a)}{h}') },
      { pts: 3, d: 'On ajoute et on retranche ' + M('u(a)v(a+h)') + ' au numérateur. Cela ne change rien à sa valeur, mais permet de regrouper :' +
                   Mc('u(a+h)v(a+h) - u(a)v(a+h) + u(a)v(a+h) - u(a)v(a)') },
      { pts: 2, d: 'On factorise par groupes :' +
                   Mc('τ(h) = frac{u(a+h) - u(a)}{h} v(a+h) + u(a) frac{v(a+h) - v(a)}{h}') },
      { pts: 2, d: 'Quand ' + M('h') + ' tend vers 0 : le premier quotient tend vers ' + M('u′(a)') + ', le second vers ' + M('v′(a)') +
                   ', et ' + M('v(a+h)') + ' tend vers ' + M('v(a)') + ' car ' + M('v') + ' est dérivable donc continue en ' + M('a') + '.' },
      { pts: 1, d: 'Conclusion : ' + M('(uv)′(a) = u′(a)v(a) + u(a)v′(a)') + '.' }
    ]
  };
});

D('derivation', 'dm-racine-zero', 'Démontrer que √x n’est pas dérivable en 0', function(){
  return {
    enonce: '<p>Soit ' + M('f(x) = sqrt{x}') + ', définie sur ' + M('[ 0 ; +∞ [') + '.</p>' +
            '<p><b>Démontre</b> que ' + M('f') + ' n’est <b>pas dérivable en 0</b>, et interprète graphiquement ce résultat.</p>',
    aide: 'Méthode : écrire le taux de variation en 0, le simplifier, puis observer son comportement quand ' + M('h') + ' tend vers 0.',
    bareme: [
      { pts: 2, d: 'Taux de variation entre 0 et ' + M('h') + ', avec ' + M('h > 0') + ' :' +
                   Mc('τ(h) = frac{f(h) - f(0)}{h} = frac{sqrt{h} - 0}{h} = frac{sqrt{h}}{h}') },
      { pts: 2, d: 'On simplifie en écrivant ' + M('h = sqrt{h} × sqrt{h}') + ' :' + Mc('τ(h) = frac{sqrt{h}}{sqrt{h} × sqrt{h}} = frac{1}{sqrt{h}}') },
      { pts: 2, d: 'Quand ' + M('h') + ' tend vers 0 par valeurs positives, ' + M('sqrt{h}') + ' tend vers 0, donc ' + M('frac{1}{sqrt{h}}') +
                   ' devient <b>aussi grand que l’on veut</b> : le taux de variation tend vers ' + M('+∞') + '.' },
      { pts: 1, d: 'Il n’a donc pas de limite finie : par définition, ' + M('f') + ' <b>n’est pas dérivable en 0</b>.' },
      { pts: 2, d: '<b>Interprétation graphique</b> : la pente des sécantes devient infinie, la courbe admet en 0 une <b>tangente verticale</b>, ' +
                   'l’axe des ordonnées. C’est pour cela que la formule ' + M('(sqrt{x})′ = frac{1}{2sqrt{x}}') + ' n’est valable que sur ' + M('] 0 ; +∞ [') + '.' }
    ]
  };
});

D('trigonometrie', 'dm-valeurs-remarquables', 'Démontrer les valeurs de cos π/4 et cos π/3', function(){
  return {
    enonce: '<p><b>Démontre</b>, sans calculatrice, que</p>' +
            Mc('@cos(frac{π}{4}) = @sin(frac{π}{4}) = frac{sqrt{2}}{2}') +
            Mc('@cos(frac{π}{3}) = frac{1}{2}    et    @sin(frac{π}{3}) = frac{sqrt{3}}{2}'),
    aide: 'Méthode : pour ' + M('frac{π}{4}') + ', utiliser la symétrie du carré ; pour ' + M('frac{π}{3}') + ', le triangle équilatéral.',
    bareme: [
      { pts: 2, d: '<b>Cas de ' + M('frac{π}{4}') + '</b> : cet angle vaut 45°, la bissectrice du premier quart. Par symétrie par rapport à la droite ' +
                   M('y = x') + ', le point image a la même abscisse et la même ordonnée, donc ' + M('@cos(frac{π}{4}) = @sin(frac{π}{4})') + '.' },
      { pts: 2, d: 'On utilise l’identité ' + M('@cos^{2} + @sin^{2} = 1') + ' : ' + M('2@cos^{2}(frac{π}{4}) = 1') + ', donc ' +
                   M('@cos^{2}(frac{π}{4}) = frac{1}{2}') + '.' },
      { pts: 2, d: 'Le point est dans le premier quart, donc le cosinus est <b>positif</b> :' +
                   Mc('@cos(frac{π}{4}) = frac{1}{sqrt{2}} = frac{sqrt{2}}{2}') },
      { pts: 2, d: '<b>Cas de ' + M('frac{π}{3}') + '</b> : soit ' + M('O') + ' le centre, ' + M('I') + ' le point de coordonnées ' + M('(1 ; 0)') +
                   ' et ' + M('M') + ' le point image de ' + M('frac{π}{3}') + '. Le triangle ' + M('OIM') + ' a deux côtés égaux au rayon 1 et un angle de 60° : il est <b>équilatéral</b>.' },
      { pts: 2, d: 'Son côté vaut donc 1, et la hauteur issue de ' + M('M') + ' coupe ' + M('[OI]') + ' en son <b>milieu</b> : l’abscisse de ' + M('M') + ' est ' + M('frac{1}{2}') + ', ' +
                   'c’est-à-dire ' + M('@cos(frac{π}{3}) = frac{1}{2}') + '.' },
      { pts: 1, d: 'Enfin ' + M('@sin^{2}(frac{π}{3}) = 1 - frac{1}{4} = frac{3}{4}') + ', et le sinus est positif dans le premier quart :' +
                   Mc('@sin(frac{π}{3}) = frac{sqrt{3}}{2}') }
    ]
  };
});
