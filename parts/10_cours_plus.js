/* =========================================================================
   Enrichissement des fiches de cours : à quoi ça sert, exemples traités,
   astuces. Ces blocs sont insérés dans les chapitres déjà définis.
   ========================================================================= */

const PLUS = {

'second-degre': {
  pourquoi: '<p>Dès qu’une quantité <b>monte puis redescend</b> (ou l’inverse), il y a un second degré derrière : ' +
    'la trajectoire d’un ballon, un jet d’eau, une aire que l’on veut rendre maximale, un prix qui maximise la recette.</p>' +
    '<p>C’est aussi l’outil le plus <b>réutilisé de toute l’année</b> : en dérivation, le signe de ' + M('f′') +
    ' est très souvent celui d’un trinôme. Le maîtriser maintenant, c’est gagner des points partout ensuite.</p>',
  exemples: [{ t: 'Résoudre ' + M('2x^{2} - 5x - 3 = 0'), c:
    '<p>On identifie ' + M('a = 2') + ', ' + M('b = -5') + ', ' + M('c = -3') + '.</p>' +
    Mc('Δ = (-5)^{2} - 4 × 2 × (-3) = 25 + 24 = 49') +
    '<p>' + M('Δ > 0') + ' et ' + M('sqrt{49} = 7') + ', donc</p>' +
    Mc('x_1 = frac{5 - 7}{4} = -frac{1}{2}     x_2 = frac{5 + 7}{4} = 3') +
    '<p><b>Vérification en 3 secondes</b> : ' + M('x_1 + x_2 = frac{5}{2}') + ' et ' + M('frac{-b}{a} = frac{5}{2}') + ' ✓</p>' }],
  astuces: [
    'Si ' + M('a + b + c = 0') + ', alors <b>1 est racine évidente</b> — et l’autre vaut ' + M('frac{c}{a}') + '. Ça évite tout le calcul du discriminant.',
    'Dans un exercice, ' + M('Δ') + ' est presque toujours un <b>carré parfait</b> (4, 9, 16, 25, 49…). Si tu tombes sur ' + M('Δ = 53') + ', relis tes signes avant de sortir la calculatrice.',
    'Le piège numéro 1 des copies : ' + M('-4ac') + ' avec ' + M('c') + ' négatif donne un <b>plus</b>. Écris toujours les parenthèses : ' + M('-4 × a × (-3)') + '.',
    'Pour le signe, retiens la phrase : « <b>du signe de ' + M('a') + ', sauf entre les racines</b> ». Tout le tableau de signes tient là-dedans.'
  ]
},

'suites': {
  pourquoi: '<p>Une suite décrit tout ce qui évolue <b>par paliers</b> : une population année après année, un capital placé, ' +
    'le nombre d’abonnés d’une chaîne, le remboursement d’un crédit mois par mois.</p>' +
    '<p>La question posée en devoir est presque toujours la même : « <b>au bout de combien de temps</b> dépasse-t-on telle valeur ? »</p>',
  exemples: [{ t: 'Un livret à 3 %', c:
    '<p>On place ' + M('2 000') + ' € à 3 % par an. Chaque année, on multiplie par ' + M('1,03') + ' : la suite est <b>géométrique</b>.</p>' +
    Mc('u_n = 2000 × 1,03^{n}') +
    '<p>Au bout de 10 ans : ' + M('u_{10} = 2000 × 1,03^{10} ≈ 2 687,83') + ' €.</p>' +
    '<p>Remarque : ce n’est <b>pas</b> ' + M('2000 + 10 × 60 = 2600') + ' €. La différence, ce sont les intérêts qui rapportent eux-mêmes des intérêts.</p>' }],
  astuces: [
    '<b>+ ' + M('p') + ' %</b> se traduit par ' + M('q = 1 + frac{p}{100}') + ' et <b>− ' + M('p') + ' %</b> par ' + M('q = 1 - frac{p}{100}') + '. C’est la traduction la plus demandée de l’année.',
    'Deux hausses de 10 % ne font <b>pas</b> + 20 % mais ' + M('1,1 × 1,1 = 1,21') + ', soit + 21 %.',
    'Pour reconnaître la nature : je calcule ' + M('u_{n+1} - u_n') + ' — constant ? arithmétique. Sinon ' + M('frac{u_{n+1}}{u_n}') + ' — constant ? géométrique.',
    'Compter les termes de ' + M('u_p') + ' à ' + M('u_n') + ' : il y en a ' + M('n - p + 1') + '. Le « + 1 » oublié coûte un point à chaque devoir.'
  ]
},

'derivation': {
  pourquoi: '<p>La dérivée, c’est une <b>vitesse de variation</b> : la vitesse d’un mobile, le coût d’une unité supplémentaire, ' +
    'la pente d’une route. Un nombre dérivé grand veut dire « ça grimpe vite ».</p>' +
    '<p>Et surtout : le <b>signe</b> de la dérivée donne les variations de la fonction, donc ses maximums et minimums. ' +
    'C’est l’outil qui permet de répondre à « quelle valeur rend cette quantité la plus grande possible ? ».</p>',
  exemples: [{ t: 'Tangente à une parabole', c:
    '<p>Soit ' + M('f(x) = x^{2} - 4x + 7') + '. On veut la tangente au point d’abscisse 3.</p>' +
    '<p>1. ' + M('f′(x) = 2x - 4') + ', donc ' + M('f′(3) = 2') + ' : la pente vaut 2.</p>' +
    '<p>2. ' + M('f(3) = 9 - 12 + 7 = 4') + ' : le point de contact est ' + M('(3 ; 4)') + '.</p>' +
    '<p>3. ' + M('y = 2(x - 3) + 4 = 2x - 2') + '.</p>' +
    '<p>Lecture : au voisinage de ' + M('x = 3') + ', la courbe « ressemble » à cette droite.</p>' }],
  astuces: [
    'Dériver ' + M('x^{n}') + ' : « <b>l’exposant descend devant, puis on lui retire 1</b> ». ' + M('x^{5} → 5x^{4}') + '.',
    'La dérivée d’une <b>constante est toujours 0</b> : le ' + M('+ 7') + ' de l’exemple ci-dessus disparaît.',
    'Produit : « <b>dérivée du premier × le second + le premier × dérivée du second</b> ». Récite-la, elle s’oublie moins qu’une formule lue.',
    'Quotient : le dénominateur passe <b>au carré</b>, et en haut c’est ' + M('u′v - uv′') + ' — <b>dans cet ordre</b>. Inverser les deux termes change le signe de toute l’étude.'
  ]
},

'variations': {
  pourquoi: '<p>C’est ici qu’on répond aux questions du type « <b>quel est le bénéfice maximal ?</b> », « pour quelle largeur l’aire est-elle la plus grande ? ». ' +
    'Sans dérivée, il faudrait essayer des valeurs au hasard.</p>',
  exemples: [{ t: 'Étude complète express', c:
    '<p>Soit ' + M('f(x) = x^{3} - 12x + 5') + '.</p>' +
    '<p>1. ' + M('f′(x) = 3x^{2} - 12 = 3(x^{2} - 4) = 3(x - 2)(x + 2)') + '.</p>' +
    '<p>2. Signe : ' + M('f′') + ' est <b>positive à l’extérieur</b> de ' + M('[-2 ; 2]') + ', négative entre.</p>' +
    '<p>3. Donc ' + M('f') + ' croît, puis décroît, puis croît : <b>maximum local en ' + M('x = -2') + '</b> ' +
    '(' + M('f(-2) = 21') + ') et <b>minimum local en ' + M('x = 2') + '</b> (' + M('f(2) = -11') + ').</p>' }],
  astuces: [
    'Dans le tableau, la ligne du <b>signe</b> est celle de ' + M('f′') + ', la ligne des <b>flèches</b> celle de ' + M('f') + '. Ne jamais mélanger les deux.',
    'Une flèche qui monte = ' + M('f′ > 0') + '. Si tu doutes, teste une valeur : ' + M('f′(0)') + ' est souvent immédiat.',
    'Dans un problème concret, <b>écris l’intervalle d’étude avant de dériver</b> (une longueur est positive, un pourcentage est entre 0 et 100). Les correcteurs le cherchent.'
  ]
},

'exponentielle': {
  pourquoi: '<p>L’exponentielle décrit les évolutions <b>continues</b> : la décroissance radioactive, le refroidissement d’un café, ' +
    'la charge d’une batterie, la propagation d’une épidémie à ses débuts.</p>' +
    '<p>Là où une suite géométrique avance par sauts, l’exponentielle est la même idée <b>en continu</b>.</p>',
  exemples: [{ t: 'Simplifier et dériver', c:
    '<p>' + M('@e^{2x} × @e^{-x} = @e^{2x - x} = @e^{x}') + ' : on <b>additionne les exposants</b>.</p>' +
    '<p>' + M('frac{@e^{5}}{@e^{3}} = @e^{2}') + '.</p>' +
    '<p>Dérivée de ' + M('f(x) = 3@e^{-2x}') + ' : on applique ' + M('(@e^{u})′ = u′@e^{u}') + ' avec ' + M('u = -2x') + ' :</p>' +
    Mc('f′(x) = 3 × (-2)@e^{-2x} = -6@e^{-2x}') }],
  astuces: [
    'L’exponentielle <b>ne s’annule jamais</b> et reste positive : une équation ' + M('@e^{x} = -3') + ' n’a aucune solution, et on peut toujours diviser par ' + M('@e^{x}') + '.',
    'Le signe d’un produit ' + M('(3x - 1)@e^{x}') + ' est donc simplement celui de ' + M('3x - 1') + ' : l’exponentielle « ne change rien au signe ».',
    'Ne jamais écrire ' + M('@e^{a} + @e^{b} = @e^{a+b}') + '. L’exponentielle transforme les <b>sommes en produits</b>, pas l’inverse.'
  ]
},

'trigonometrie': {
  pourquoi: '<p>Tout ce qui est <b>périodique</b> se décrit avec cosinus et sinus : un son, une marée, une tension alternative, ' +
    'la durée du jour au fil des saisons, un mouvement de rotation.</p>',
  exemples: [{ t: 'Placer ' + M('frac{2π}{3}') + ' sur le cercle', c:
    '<p>' + M('frac{2π}{3}') + ' correspond à ' + M('frac{2 × 180}{3} = 120°') + ' : on est dans le deuxième quart, en haut à gauche.</p>' +
    '<p>L’abscisse est donc <b>négative</b> et l’ordonnée <b>positive</b> :</p>' +
    Mc('@cos(frac{2π}{3}) = -frac{1}{2}     @sin(frac{2π}{3}) = frac{sqrt{3}}{2}') +
    '<p>Vérification : ' + M('(-frac{1}{2})^{2} + (frac{sqrt{3}}{2})^{2} = frac{1}{4} + frac{3}{4} = 1') + ' ✓</p>' }],
  astuces: [
    'Conversion : ' + M('π = 180°') + ', puis règle de trois. ' + M('frac{π}{4} = 45°') + ', ' + M('frac{π}{3} = 60°') + ', ' + M('frac{π}{6} = 30°') + '.',
    '<b>cos = abscisse, sin = ordonnée.</b> Le quart du cercle où l’on se trouve donne immédiatement les deux signes, avant tout calcul.',
    'Les trois valeurs remarquables se rangent dans l’ordre : ' + M('frac{1}{2}') + ', ' + M('frac{sqrt{2}}{2}') + ', ' + M('frac{sqrt{3}}{2}') + ' — le sinus les prend dans cet ordre quand l’angle grandit, le cosinus dans l’ordre inverse.',
    'Vérification gratuite de toute réponse : ' + M('@cos^{2} + @sin^{2}') + ' doit faire <b>1</b>.'
  ]
},

'produit-scalaire': {
  pourquoi: '<p>Le produit scalaire répond à deux questions très concrètes : « ces deux droites sont-elles <b>perpendiculaires</b> ? » ' +
    'et « <b>combien mesure cet angle</b> ? » — sans rapporteur, uniquement par le calcul.</p>' +
    '<p>En physique, c’est exactement le travail d’une force : ' + M('W = vec{F} · vec{d}') + '.</p>',
  exemples: [{ t: 'Perpendiculaires ou pas ?', c:
    '<p>' + M('vec{u}(3 ; -1)') + ' et ' + M('vec{v}(2 ; 6)') + ' :</p>' +
    Mc('vec{u} · vec{v} = 3 × 2 + (-1) × 6 = 6 - 6 = 0') +
    '<p>Le produit scalaire est nul : les vecteurs sont <b>orthogonaux</b>. Deux lignes de calcul, et la perpendicularité est démontrée.</p>' +
    '<p>Avec ' + M('vec{w}(1 ; 5)') + ' en revanche : ' + M('3 × 1 + (-1) × 5 = -2') + ', négatif, donc l’angle est <b>obtus</b>.</p>' }],
  astuces: [
    'Le résultat est un <b>nombre</b>, jamais un vecteur. Écrire ' + M('vec{u} · vec{v} = vec{w}') + ' est une faute de cours.',
    'Le <b>signe</b> raconte l’angle : positif → aigu, nul → droit, négatif → obtus. Un réflexe de vérification instantané.',
    'La formule ' + M('xx′ + yy′') + ' n’est valable que dans un repère <b>orthonormé</b> — vérifie que l’énoncé le dit.',
    'Pour démontrer qu’un triangle est rectangle en ' + M('A') + ', on calcule ' + M('vec{AB} · vec{AC}') + ' : les deux vecteurs doivent <b>partir de ' + M('A') + '</b>.'
  ]
},

'geometrie-reperee': {
  pourquoi: '<p>Mettre la géométrie en équations, c’est ce qui permet à un ordinateur de dessiner, à un GPS de calculer, ' +
    'à un jeu vidéo de savoir si deux objets se touchent. On remplace « je vois sur la figure » par « je calcule, donc je démontre ».</p>',
  exemples: [{ t: 'Une droite à partir d’un vecteur normal', c:
    '<p>Droite passant par ' + M('A(1 ; 2)') + ' et perpendiculaire à ' + M('vec{n}(3 ; -1)') + ' :</p>' +
    Mc('3(x - 1) - 1(y - 2) = 0') +
    '<p>On développe : ' + M('3x - 3 - y + 2 = 0') + ', soit ' + M('3x - y - 1 = 0') + '.</p>' +
    '<p>Vérification : le point ' + M('A') + ' doit annuler l’équation — ' + M('3 × 1 - 2 - 1 = 0') + ' ✓</p>' }],
  astuces: [
    'Dans ' + M('ax + by + c = 0') + ', le vecteur <b>normal se lit directement</b> : ' + M('vec{n}(a ; b)') + '. Et le directeur, c’est ' + M('vec{u}(-b ; a)') + ' (on échange et on change un signe).',
    'Dans l’équation d’un cercle, c’est ' + M('r^{2}') + ' qui apparaît : si le membre de droite vaut 25, le rayon est <b>5</b>.',
    'Pour savoir si un point est sur une courbe, on <b>remplace</b> ' + M('x') + ' et ' + M('y') + '. C’est toujours la méthode, et elle rapporte des points faciles.'
  ]
},

'probas-conditionnelles': {
  pourquoi: '<p>« Ce test est fiable à 99 %, il est positif : suis-je malade ? » La réponse est souvent <b>non</b>, et c’est précisément ' +
    'ce chapitre qui l’explique. Tests médicaux, contrôle qualité, filtres anti-spam : tous fonctionnent là-dessus.</p>',
  exemples: [{ t: 'Un arbre, de bout en bout', c:
    '<p>Une usine a deux machines. ' + M('A') + ' produit 60 % des pièces, dont 2 % sont défectueuses ; ' +
    'la seconde produit les 40 % restants, dont 5 % sont défectueuses. Quelle est la probabilité qu’une pièce prise au hasard soit défectueuse ?</p>' +
    '<p>Le long de chaque chemin, on <b>multiplie</b> ; entre les chemins, on <b>additionne</b> :</p>' +
    Mc('P(D) = 0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,02 = 0,032') +
    '<p>Soit <b>3,2 %</b> des pièces.</p>' }],
  astuces: [
    'Sur un arbre : <b>le long d’un chemin on multiplie, entre les chemins on additionne</b>. Toute la formule des probabilités totales tient dans cette phrase.',
    'Les branches issues d’un même nœud font toujours <b>1</b> : c’est la vérification à faire avant de calculer quoi que ce soit.',
    M('P_A(B)') + ' et ' + M('P_B(A)') + ' sont <b>différentes</b>. « 99 % des malades sont positifs » ne veut pas dire « 99 % des positifs sont malades ».',
    'Indépendant ≠ incompatible. Incompatibles, ils ne peuvent pas arriver ensemble ; indépendants, l’un n’informe pas sur l’autre.'
  ]
},

'variables-aleatoires': {
  pourquoi: '<p>Une variable aléatoire met un <b>nombre</b> sur le hasard : un gain, une durée, un nombre de clients. ' +
    'L’espérance répond à « à long terme, je gagne ou je perds ? » — c’est le calcul que font les assureurs et les casinos.</p>',
  exemples: [{ t: 'Ce jeu est-il rentable ?', c:
    '<p>Mise de 2 €. On gagne 10 € avec une probabilité de 0,1, 1 € avec 0,3, rien sinon. On note ' + M('X') + ' le gain <b>net</b>.</p>' +
    '<p>Loi : ' + M('X = 8') + ' avec 0,1 ; ' + M('X = -1') + ' avec 0,3 ; ' + M('X = -2') + ' avec 0,6.</p>' +
    Mc('E(X) = 8 × 0,1 + (-1) × 0,3 + (-2) × 0,6 = 0,8 - 0,3 - 1,2 = -0,7') +
    '<p>En moyenne, on <b>perd 0,70 € par partie</b>. Sur 100 parties : environ 70 € de perte.</p>' }],
  astuces: [
    'Premier réflexe : vérifier que la somme des probabilités fait <b>1</b>. Si non, il y a une issue oubliée.',
    'Bien lire si l’énoncé demande le gain <b>net</b> (on retire la mise) ou le gain brut. C’est l’erreur la plus fréquente du chapitre.',
    'Un jeu est <b>équitable</b> quand ' + M('E(X) = 0') + '. Aucun casino n’en propose.',
    'Dans ' + M('V(aX + b)') + ' : le ' + M('b') + ' <b>disparaît</b> (décaler ne change pas la dispersion) et le ' + M('a') + ' passe <b>au carré</b>.'
  ]
},

'algorithmique': {
  pourquoi: '<p>Programmer, c’est faire faire à la machine ce qui est trop long à la main : calculer 200 termes d’une suite, ' +
    'simuler 10 000 lancers de dés. Et c’est <b>évalué au bac</b>, dans les exercices de maths eux-mêmes.</p>',
  exemples: [{ t: 'Lire un programme pas à pas', c:
    '<pre class="code">u = 5\nfor i in range(3):\n    u = 2*u - 3\nprint(u)</pre>' +
    '<p>On déroule : ' + M('u = 5') + ' → ' + M('2 × 5 - 3 = 7') + ' → ' + M('2 × 7 - 3 = 11') + ' → ' + M('2 × 11 - 3 = 19') + '.</p>' +
    '<p>Le programme affiche <b>19</b>. La boucle a bien tourné <b>3 fois</b> (' + M('i') + ' vaut 0, puis 1, puis 2).</p>' }],
  astuces: [
    M('range(3)') + ' donne <b>0, 1, 2</b> : trois tours, mais on ne compte jamais jusqu’à 3.',
    '<b>for</b> quand on sait combien de tours faire ; <b>while</b> quand on cherche un seuil (« tant que c’est trop petit »).',
    'Toujours <b>initialiser avant la boucle</b> — la variable de départ et le compteur. Un oubli et le programme plante ou compte faux.',
    'Pour une question « qu’affiche ce programme ? », fais un <b>tableau de valeurs</b> ligne par ligne. C’est plus long mais toujours juste.'
  ]
},

'logique': {
  pourquoi: '<p>C’est la <b>grammaire des mathématiques</b>. Un correcteur pardonne plus facilement une erreur de calcul qu’un raisonnement mal construit : ' +
    'confondre une implication et sa réciproque, c’est perdre la question entière.</p>',
  exemples: [{ t: 'Une implication et sa réciproque', c:
    '<p>« Si un nombre est divisible par 4, alors il est pair » : <b>vraie</b>.</p>' +
    '<p>Réciproque : « s’il est pair, alors il est divisible par 4 » : <b>fausse</b> — contre-exemple : <b>6</b> est pair et n’est pas divisible par 4.</p>' +
    '<p>Contraposée : « s’il n’est pas pair, alors il n’est pas divisible par 4 » : <b>vraie</b>, comme l’implication de départ.</p>' +
    '<p>Un seul contre-exemple a suffi à démolir la réciproque. C’est toute la puissance de la méthode.</p>' }],
  astuces: [
    'Pour montrer qu’une propriété « <b>pour tout…</b> » est fausse : un <b>seul contre-exemple</b> suffit. Pour la montrer vraie, il faut une démonstration générale — un exemple ne prouve rien.',
    'Contraposée : on <b>échange et on nie</b> les deux membres. Elle a toujours la même valeur de vérité que l’implication ; la réciproque, non.',
    M('∈') + ' relie un <b>élément</b> à un ensemble, ' + M('⊂') + ' relie <b>deux ensembles</b>. ' + M('2 ∈ ℕ') + ' mais ' + M('ℕ ⊂ ℤ') + '.',
    'Le « ou » mathématique n’est <b>pas exclusif</b> : « ' + M('x') + ' est positif ou pair » est vrai pour 4.'
  ]
}

};

/* insertion dans les fiches : « à quoi ça sert » en tête, exemples et
   astuces juste avant le bloc « à éviter » */
Object.keys(PLUS).forEach(id => {
  const c = CHAP[id];
  if (!c) return;
  const p = PLUS[id];
  if (p.pourquoi) c.cours.unshift({ k: 'pourquoi', t: 'À quoi ça sert ?', c: p.pourquoi });
  const ajouts = [];
  (p.exemples || []).forEach(e => ajouts.push({ k: 'ex', t: e.t, c: e.c }));
  if (p.astuces && p.astuces.length){
    ajouts.push({ k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul>' + p.astuces.map(a => '<li>' + a + '</li>').join('') + '</ul>' });
  }
  let i = -1;
  for (let k = 0; k < c.cours.length; k++) if (c.cours[k].k === 'piege'){ i = k; break; }
  if (i >= 0) c.cours.splice.apply(c.cours, [i, 0].concat(ajouts));
  else c.cours.push.apply(c.cours, ajouts);
});
