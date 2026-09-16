/* =========================================================================
   MATIÈRE : mathématiques intégrées à l'enseignement scientifique.

   Depuis 2023, les élèves de première générale qui ne suivent PAS la
   spécialité mathématiques ont 1 h 30 de mathématiques dans l'enseignement
   scientifique. C'est un programme distinct, pas une version allégée.
   Arrêté du 26 février 2026, BO n°14 du 2 avril 2026 (NOR MENE2602916A),
   applicable à la rentrée 2026-2027.

   Différence à ne jamais perdre de vue : ici le discriminant n'est PAS au
   programme. Le second degré se traite par la forme factorisée et la
   symétrie de la parabole.
   ========================================================================= */

MAT['maths-es'] = { id: 'maths-es', nom: 'Maths (enseignement scientifique)', court: 'Maths ES',
                    e: '📊', type: 'commun', pret: true };
MATIERES.splice(1, 0, MAT['maths-es']);

BLOCS.push(
  { id: 'es-transverse', nom: 'Transversal', matiere: 'maths-es' },
  { id: 'es-donnees',    nom: 'Données et hasard', matiere: 'maths-es' },
  { id: 'es-evolution',  nom: 'Phénomènes d’évolution', matiere: 'maths-es' }
);

const CHAPITRES_ES = [
{
  id: 'es-automatismes', bloc: 'es-transverse', titre: 'Automatismes',
  resume: 'Taux d’évolution, calcul, lecture graphique.',
  capacites: [
    'Appliquer un taux d’évolution pour calculer une valeur finale ou initiale.',
    'Calculer un taux d’évolution et l’exprimer en pourcentage.',
    'Calculer le taux équivalent à plusieurs évolutions successives, et le taux réciproque.',
    'Déterminer les solutions d’une équation produit nul ; déterminer le signe d’une expression du premier degré ou d’une expression factorisée du second degré.',
    'Résoudre graphiquement une équation ou une inéquation ; lire l’équation réduite d’une droite, déterminer un coefficient directeur.',
    'Lire un graphique, passer du graphique aux données, calculer et interpréter des indicateurs statistiques.',
    'Calculer des probabilités conditionnelles à partir d’un tableau croisé ou d’un arbre ; distinguer ' +
      M('P(A ∩ B)') + ', ' + M('P_A(B)') + ' et ' + M('P_B(A)') + '.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce sont les réflexes de calcul et de lecture qui reviennent dans <b>tous</b> les chapitres, et dans la vie courante : ' +
      'comprendre un pourcentage dans un article de presse, lire un graphique sans se faire abuser.</p>' +
      '<p>Le programme les travaille en « questions flash », en début d’heure, toute l’année.</p>' },
    { k: 'prop', t: 'Le coefficient multiplicateur', c:
      '<p>Augmenter de ' + M('t') + ' % revient à multiplier par ' + M('1 + frac{t}{100}') + ', diminuer de ' + M('t') + ' % à multiplier par ' + M('1 - frac{t}{100}') + '.</p>' +
      Mc('taux = frac{valeur finale - valeur initiale}{valeur initiale} × 100') +
      '<p>Deux évolutions successives : les <b>coefficients se multiplient</b>. Le taux réciproque a pour coefficient ' + M('frac{1}{CM}') + '.</p>' },
    { k: 'meth', t: 'Produit nul et tableau de signes', c:
      Mc('A × B = 0 ⇔ A = 0   ou   B = 0') +
      '<p>Pour le signe de ' + M('ax + b') + ' : il s’annule en ' + M('frac{-b}{a}') + ' et prend le <b>signe de ' + M('a') + '</b> après cette valeur.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une baisse de 20 % suivie d’une hausse de 20 % ne ramène pas au départ : ' + M('0,8 × 1,2 = 0,96') + ', soit − 4 %.</li>' +
      '<li>On divise toujours par la valeur <b>de départ</b> pour calculer un taux.</li>' +
      '<li>Devant un produit nul, ne jamais développer.</li></ul>' }
  ]
},
{
  id: 'es-info-chiffree', bloc: 'es-donnees', titre: 'Analyse de l’information chiffrée',
  resume: 'Tableau croisé, nuage de points, ajustement affine.',
  capacites: [
    'Utiliser un tableur pour représenter des données sous forme de tableau ou de diagramme.',
    'Déterminer et utiliser un ajustement affine pour interpoler ou extrapoler des valeurs inconnues.',
    'Savoir calculer les coordonnées d’un point moyen.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Croiser deux données pour voir si elles sont <b>liées</b> : la température et le niveau des océans, le revenu et l’espérance de vie, ' +
      'l’âge et la pratique sportive.</p>' +
      '<p>C’est la base de la lecture critique des chiffres qu’on voit passer dans les médias, et le programme le dit explicitement : ' +
      'il s’agit de <b>développer le sens critique</b>.</p>' },
    { k: 'def', t: 'Deux caractères qualitatifs : le tableau croisé', c:
      '<p>On compte les individus dans chaque case. On peut alors calculer des <b>fréquences</b> : par rapport au total, ' +
      'par rapport à une ligne, ou par rapport à une colonne, et ce sont trois choses différentes.</p>' },
    { k: 'def', t: 'Deux caractères quantitatifs : le nuage de points', c:
      '<p>Chaque individu devient un point ' + M('(x_i ; y_i)') + '. Si les points s’alignent à peu près, une <b>droite d’ajustement</b> ' +
      'résume la relation.</p>' },
    { k: 'prop', t: 'Le point moyen', c:
      '<p>Le point moyen ' + M('G') + ' a pour coordonnées les <b>moyennes</b> des deux séries :</p>' +
      Mc('G(̄x ; ̄y)') +
      '<p>Toute droite d’ajustement correctement construite passe par ce point.</p>' },
    { k: 'meth', t: 'Interpoler et extrapoler', c:
      '<p>Une fois la droite d’ajustement ' + M('y = ax + b') + ' obtenue :</p>' +
      '<ul><li><b>interpoler</b>, c’est estimer une valeur <b>à l’intérieur</b> de la plage observée : raisonnablement fiable ;</li>' +
      '<li><b>extrapoler</b>, c’est prolonger <b>au-delà</b> : à manier avec prudence, car rien ne garantit que la tendance continue.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une corrélation n’est <b>pas</b> une causalité : deux grandeurs peuvent évoluer ensemble sans que l’une cause l’autre.</li>' +
      '<li>Toujours préciser si l’on interpole ou si l’on extrapole, et commenter la fiabilité.</li>' +
      '<li>Le point moyen se calcule sans la droite : ce sont juste deux moyennes.</li></ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Confondre fréquence par rapport au total et fréquence par ligne.</li>' +
      '<li>Extrapoler très loin et annoncer le résultat comme une certitude.</li></ul>' }
  ]
},
{
  id: 'es-aleatoire', bloc: 'es-donnees', titre: 'Phénomènes aléatoires',
  resume: 'Probabilités conditionnelles, indépendance, Bernoulli.',
  capacites: [
    'Calculer des probabilités conditionnelles à l’aide d’un tableau croisé d’effectifs ou d’un arbre pondéré.',
    'Représenter par un arbre la répétition de ' + M('n ≤ 4') + ' épreuves de Bernoulli identiques et indépendantes, pour calculer des probabilités.',
    'Savoir utiliser ou justifier l’indépendance de deux événements.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme cible explicitement les <b>tests médicaux</b> : faux positifs, faux négatifs. ' +
      '« Le test est fiable à 99 % et il est positif : suis-je malade ? » La réponse est souvent <b>non</b>, et c’est ce chapitre qui l’explique.</p>' },
    { k: 'def', t: 'Probabilité conditionnelle', c:
      Mc('P_A(B) = frac{P(A ∩ B)}{P(A)}') +
      '<p>Dans un tableau d’effectifs, c’est simplement une <b>proportion à l’intérieur d’une ligne</b> (ou d’une colonne).</p>' },
    { k: 'meth', t: 'Arbre pondéré', c:
      '<ul><li>Les branches issues d’un même nœud font <b>1</b>.</li>' +
      '<li>Le long d’un chemin, on <b>multiplie</b>.</li>' +
      '<li>Entre les chemins, on <b>additionne</b>.</li></ul>' },
    { k: 'def', t: 'Indépendance', c:
      '<p>Deux événements sont indépendants lorsque ' + M('P_A(B) = P(B)') + ', c’est-à-dire lorsque savoir que ' + M('A') +
      ' est réalisé ne change <b>rien</b> à la probabilité de ' + M('B') + '. Cela équivaut à ' + M('P(A ∩ B) = P(A) × P(B)') + '.</p>' },
    { k: 'prop', t: 'Répétition d’épreuves de Bernoulli', c:
      '<p>Une <b>épreuve de Bernoulli</b> n’a que deux issues : succès (probabilité ' + M('p') + ') ou échec (' + M('1 - p') + ').</p>' +
      '<p>Le programme demande, pour ' + M('n ≤ 4') + ', de dessiner l’arbre des ' + M('n') + ' répétitions et d’en déduire des probabilités. ' +
      'Exemple avec ' + M('n = 3') + ' et ' + M('p = 0,2') + ' : obtenir exactement un succès a pour probabilité ' +
      M('3 × 0,2 × 0,8 × 0,8 = 0,384') + ', car <b>trois chemins</b> conviennent.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Compter les chemins est l’étape que tout le monde oublie.</li>' +
      '<li>« Au moins un succès » se calcule par l’événement contraire : ' + M('1 - P(aucun)') + '.</li>' +
      '<li>' + M('P_A(B)') + ' et ' + M('P_B(A)') + ' n’ont rien à voir : c’est l’erreur de raisonnement la plus répandue.</li></ul>' }
  ]
},
{
  id: 'es-lineaire', bloc: 'es-evolution', titre: 'Variation linéaire',
  resume: 'Suites arithmétiques et fonctions affines.',
  capacites: [
    'Reconnaître un phénomène discret ou continu de croissance linéaire et savoir le modéliser.',
    'Calculer un terme de rang donné d’une suite arithmétique, définie par une relation fonctionnelle ou de récurrence.',
    'Réaliser et exploiter la représentation graphique des termes d’une suite arithmétique ou d’une fonction affine.',
    'Résoudre un problème de seuil dans le cas d’une croissance linéaire.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le modèle de tout ce qui augmente <b>de la même quantité</b> à chaque étape : un placement à intérêts simples, ' +
      'un abonnement avec un forfait plus un prix par unité, la montée du niveau des océans sur une courte période.</p>' },
    { k: 'def', t: 'Suite arithmétique', c:
      '<p>On ajoute toujours la même <b>raison</b> ' + M('r') + ' : ' + M('u_{n+1} = u_n + r') + '.</p>' +
      Mc('u_n = u_0 + n r') +
      '<p>Les points de la représentation graphique sont <b>alignés</b>.</p>' },
    { k: 'prop', t: 'Fonction affine', c:
      '<p>C’est la version <b>continue</b> du même phénomène : ' + M('f(x) = ax + b') + ', où ' + M('a') + ' est le coefficient directeur ' +
      '(l’équivalent de la raison) et ' + M('b') + ' l’ordonnée à l’origine (l’équivalent de ' + M('u_0') + ').</p>' +
      Mc('a = frac{y_B - y_A}{x_B - x_A}') +
      '<p>Croissante si ' + M('a > 0') + ', décroissante si ' + M('a &lt; 0') + '.</p>' },
    { k: 'meth', t: 'Problème de seuil', c:
      '<p>« À partir de quel rang dépasse-t-on ' + M('S') + ' ? » On résout ' + M('u_0 + n r > S') + ', ce qui donne ' +
      M('n > frac{S - u_0}{r}') + ', puis on prend le <b>plus petit entier</b> qui convient.</p>' +
      '<p class="tiny">Attention : si ' + M('r &lt; 0') + ', diviser par ' + M('r') + ' <b>renverse</b> l’inégalité.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Discret ou continu ? Si la grandeur n’existe qu’à des instants précis (chaque année, chaque mois), c’est une <b>suite</b>.</li>' +
      '<li>Une croissance linéaire, ce sont des points alignés : si le nuage se courbe, le modèle n’est pas linéaire.</li>' +
      '<li>Le résultat d’un problème de seuil est un <b>entier</b> : il faut arrondir au bon sens.</li></ul>' }
  ]
},
{
  id: 'es-quadratique', bloc: 'es-evolution', titre: 'Modélisation quadratique',
  resume: 'Paraboles, sommet, forme factorisée. Sans discriminant.',
  capacites: [
    'Associer une parabole à une expression algébrique de degré 2, pour les fonctions ' + M('x ↦ ax^{2}') + ', ' +
      M('x ↦ ax^{2} + c') + ', ' + M('x ↦ a(x - x_1)(x - x_2)') + '.',
    'Déterminer les éléments caractéristiques de ' + M('x ↦ ax^{2} + bx + c') + ' (aucune formule n’est attendue).',
    'Utiliser la forme factorisée pour trouver les racines et étudier le signe.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le mouvement d’un ballon, la forme d’un pont suspendu, l’arche d’un viaduc, un chiffre d’affaires en fonction du prix : ' +
      'tout ce qui monte puis redescend.</p>' +
      '<p class="tiny"><b>Différence importante avec la spécialité</b> : ici le <b>discriminant n’est pas au programme</b>. ' +
      'On travaille avec la forme factorisée et la symétrie de la parabole.</p>' },
    { k: 'def', t: 'Les éléments de la parabole', c:
      '<p>La courbe de ' + M('f(x) = ax^{2} + bx + c') + ' est une <b>parabole</b> :</p>' +
      '<ul><li>tournée vers le <b>haut</b> si ' + M('a > 0') + ', vers le <b>bas</b> si ' + M('a &lt; 0') + ' ;</li>' +
      '<li>symétrique par rapport à une droite verticale, l’<b>axe de symétrie</b> ;</li>' +
      '<li>le <b>sommet</b> est sur cet axe : c’est le minimum ou le maximum.</li></ul>' },
    { k: 'meth', t: 'Trouver l’axe de symétrie sans formule', c:
      '<p>Le programme suggère de résoudre ' + M('f(x) = c') + ' : on obtient deux valeurs symétriques par rapport à l’axe, ' +
      'dont on prend la <b>moyenne</b>.</p>' +
      '<p>Exemple avec ' + M('f(x) = 2x^{2} - 12x + 5') + ' : on résout ' + M('2x^{2} - 12x + 5 = 5') + ', soit ' +
      M('2x(x - 6) = 0') + ', d’où ' + M('x = 0') + ' et ' + M('x = 6') + '. L’axe est donc ' + M('x = 3') + ', le milieu des deux.</p>' +
      '<p>Si la fonction est <b>factorisée</b>, c’est encore plus direct : l’axe passe au <b>milieu des deux racines</b>.</p>' },
    { k: 'prop', t: 'Racines et signe par la forme factorisée', c:
      '<p>Si ' + M('f(x) = a(x - x_1)(x - x_2)') + ', les racines se lisent : ce sont ' + M('x_1') + ' et ' + M('x_2') + '.</p>' +
      '<p>Le signe se lit aussi : ' + M('f(x)') + ' est du <b>signe de ' + M('a') + '</b> à l’extérieur des racines, du signe contraire entre les deux.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Aucune formule n’est exigée : on raisonne par <b>symétrie</b>.</li>' +
      '<li>Le sommet s’obtient en calculant ' + M('f') + ' à l’abscisse de l’axe.</li>' +
      '<li>Une parabole passant par deux points de même ordonnée a son axe au <b>milieu</b> de ces deux abscisses.</li></ul>' }
  ]
},
{
  id: 'es-exponentiel', bloc: 'es-evolution', titre: 'Variation exponentielle',
  resume: 'Suites géométriques, fonctions exponentielles, taux moyen.',
  capacites: [
    'Reconnaître un phénomène discret ou continu de croissance ou décroissance exponentielle et savoir le modéliser.',
    'Calculer un terme de rang donné d’une suite géométrique.',
    'Calculer un taux d’évolution moyen.',
    'Réaliser et exploiter la représentation graphique d’une suite géométrique ou d’une fonction exponentielle.',
    'Estimer les ordres de grandeur d’une quantité en croissance ou décroissance exponentielle.',
    'Résoudre un problème de seuil dans le cas d’une croissance ou décroissance exponentielle.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Tout ce qui évolue d’un <b>pourcentage constant</b> : un capital placé, une dette, une épidémie à ses débuts, ' +
      'l’élimination d’un médicament dans le sang, la datation au carbone 14.</p>' +
      '<p>C’est le modèle dont les ordres de grandeur surprennent le plus : + 7 % par an double la quantité en dix ans.</p>' },
    { k: 'def', t: 'Suite géométrique', c:
      '<p>On multiplie toujours par la même <b>raison</b> ' + M('q') + ' : ' + M('u_{n+1} = q u_n') + '.</p>' + Mc('u_n = u_0 q^{n}') +
      '<p>Une évolution de ' + M('t') + ' % par période correspond à ' + M('q = 1 + frac{t}{100}') + '. ' +
      'Croissante si ' + M('q > 1') + ', décroissante si ' + M('0 &lt; q &lt; 1') + ' (pour des termes positifs).</p>' },
    { k: 'def', t: 'Fonction exponentielle de base a', c:
      '<p>C’est le prolongement <b>continu</b> de la suite géométrique : on autorise les exposants non entiers.</p>' +
      Mc('f(x) = a^{x}    avec   a > 0') +
      '<p>Les règles de calcul sont celles des puissances : ' + M('a^{x} × a^{y} = a^{x+y}') + ' et ' + M('(a^{x})^{y} = a^{xy}') + '.</p>' },
    { k: 'prop', t: 'Le taux d’évolution moyen', c:
      '<p>Si une quantité subit ' + M('n') + ' évolutions et que le coefficient global est ' + M('CM') + ', le coefficient <b>moyen</b> par période est</p>' +
      Mc('CM_{moyen} = CM^{frac{1}{n}}') +
      '<p>et le taux moyen s’en déduit par ' + M('t = (CM_{moyen} - 1) × 100') + '.</p>' +
      '<p>Exemple : une hausse de 21 % en 2 ans correspond à un taux moyen de ' + M('1,21^{frac{1}{2}} = 1,1') + ', soit <b>+ 10 % par an</b>, ' +
      'et non 10,5 %.</p>' },
    { k: 'meth', t: 'Problème de seuil', c:
      '<p>« Au bout de combien de temps dépasse-t-on ' + M('S') + ' ? » On calcule les termes un par un, à la calculatrice ou au tableur, ' +
      'jusqu’à franchir le seuil. La lecture graphique est également acceptée.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le taux moyen n’est <b>pas</b> la moyenne des taux : on passe par la racine ' + M('n') + '-ième du coefficient.</li>' +
      '<li>Une exponentielle décroissante tend vers 0 sans jamais l’atteindre.</li>' +
      '<li>Pour un ordre de grandeur, retenir qu’un doublement correspond à peu près à ' + M('frac{70}{t}') + ' périodes pour un taux de ' + M('t') + ' %.</li></ul>' }
  ]
}
];

CHAPITRES_ES.forEach(c => {
  c.gens = [];
  c.matiere = 'maths-es';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});

/* ---------- exercices ----------
   Les automatismes sont rigoureusement les mêmes que dans la spécialité :
   on réutilise les générateurs plutôt que de les réécrire. */
['au-taux-appliquer', 'au-taux-calculer', 'au-taux-successifs', 'au-taux-reciproque',
 'au-produit-nul', 'au-signe-factorise', 'au-droite', 'au-tableau-croise'].forEach(id => {
  const src = METHODE[id];
  if (src) G('es-automatismes', 'es-' + id, src.label, src.niveau, src.fn);
});
['au-tableau-croise'].forEach(id => {
  const src = METHODE[id];
  if (src) G('es-aleatoire', 'esa-' + id, 'Probabilité dans un tableau croisé', 'app', src.fn);
});
[['pr-bernoulli', 'ent'], ['pr-succession', 'ent']].forEach(p => {
  const src = METHODE[p[0]];
  if (src) G('es-aleatoire', 'esa-' + p[0], src.label, p[1], src.fn);
});

G('es-info-chiffree', 'esi-point-moyen', 'Coordonnées du point moyen', 'app', function(){
  const n = R.pick([4, 5]);
  const xs = [], ys = [];
  for (let i = 0; i < n; i++){ xs.push(R.int(1, 12)); ys.push(R.int(5, 60)); }
  const sx = xs.reduce((t, v) => t + v, 0), sy = ys.reduce((t, v) => t + v, 0);
  const gx = Math.round(sx / n * 100) / 100, gy = Math.round(sy / n * 100) / 100;
  return {
    enonce: '<p>On a relevé les couples suivants :</p>' +
            '<div style="overflow-x:auto"><table class="tab"><tr><th>' + mathHtml('x_i') + '</th>' + xs.map(v => '<td>' + v + '</td>').join('') + '</tr>' +
            '<tr><th>' + mathHtml('y_i') + '</th>' + ys.map(v => '<td>' + v + '</td>').join('') + '</tr></table></div>' +
            '<p>Calcule les coordonnées du <b>point moyen</b> ' + M('G') + ' (arrondies au centième).</p>',
    champs: [
      { type: 'num', label: 'abscisse de G', bon: gx, tol: 0.011 },
      { type: 'num', label: 'ordonnée de G', bon: gy, tol: 0.011 }
    ],
    etapes: [
      'Le point moyen a pour coordonnées les <b>deux moyennes</b> : ' + M('G(̄x ; ̄y)') + '.',
      M('̄x = frac{' + xs.join(' + ') + '}{' + n + '} = frac{' + sx + '}{' + n + '} = ' + nf(gx)),
      M('̄y = frac{' + ys.join(' + ') + '}{' + n + '} = frac{' + sy + '}{' + n + '} = ' + nf(gy)),
      'Donc ' + M('G(' + nf(gx) + ' ; ' + nf(gy) + ')') + '. Toute droite d’ajustement correctement construite passe par ce point.'
    ]
  };
});

G('es-info-chiffree', 'esi-ajustement', 'Interpoler et extrapoler', 'ent', function(){
  const a = R.pick([1.5, 2, 2.5, 3, -1.5, -2, 0.8]);
  const b = R.int(5, 60);
  const xmin = R.int(0, 4), xmax = xmin + R.int(6, 10);
  const dedans = Math.random() < 0.5;
  const x = dedans ? R.int(xmin + 1, xmax - 1) : xmax + R.int(3, 8);
  const y = Math.round((a * x + b) * 100) / 100;
  return {
    enonce: '<p>Un nuage de points a été ajusté par la droite d’équation</p>' + Mc('y = ' + lead(a, 'x') + sgn(b, '')) +
            '<p>Les valeurs observées vont de ' + M('x = ' + xmin) + ' à ' + M('x = ' + xmax) + '.</p>' +
            '<p>Estime ' + M('y') + ' pour ' + M('x = ' + x) + ', puis dis s’il s’agit d’une interpolation ou d’une extrapolation.</p>',
    champs: [
      { type: 'num', label: 'y ≈', bon: y, tol: 0.011 },
      { type: 'choix', label: 'Il s’agit d’une', options: ['Interpolation', 'Extrapolation'], bon: dedans ? 0 : 1 }
    ],
    etapes: [
      'On remplace ' + M('x') + ' par ' + M(String(x)) + ' dans l’équation d’ajustement :',
      M('y = ' + nf(a) + ' × ' + x + sgn(b, '') + ' = ' + nf(y)),
      dedans
        ? M(String(x)) + ' est <b>à l’intérieur</b> de la plage observée ' + M('[ ' + xmin + ' ; ' + xmax + ' ]') + ' : c’est une <b>interpolation</b>, l’estimation est raisonnablement fiable.'
        : M(String(x)) + ' est <b>au-delà</b> de la plage observée ' + M('[ ' + xmin + ' ; ' + xmax + ' ]') + ' : c’est une <b>extrapolation</b>, à prendre avec prudence car rien ne garantit que la tendance se poursuive.',
      '<b>Le commentaire est attendu</b> dans la copie : donner le nombre sans préciser la fiabilité coûte des points.'
    ]
  };
});

G('es-info-chiffree', 'esi-indicateurs', 'Moyenne et médiane', 'app', function(){
  const n = R.pick([5, 7, 9]);
  const v = [];
  for (let i = 0; i < n; i++) v.push(R.int(2, 20));
  const tri = v.slice().sort((x, y) => x - y);
  const med = tri[(n - 1) / 2];
  const moy = Math.round(v.reduce((t, x) => t + x, 0) / n * 100) / 100;
  return {
    enonce: '<p>Voici une série statistique :</p><div class="center"><code>' + v.join(' ; ') + '</code></div>' +
            '<p>Calcule la moyenne (arrondie au centième) et la médiane.</p>',
    champs: [
      { type: 'num', label: 'moyenne ≈', bon: moy, tol: 0.011 },
      { type: 'num', label: 'médiane', bon: med, tol: 1e-9 }
    ],
    etapes: [
      'Moyenne : ' + M('frac{' + v.join(' + ') + '}{' + n + '} = ' + nf(moy)),
      'Pour la médiane, on <b>range d’abord</b> les valeurs : ' + M(tri.join(' ; ')) + '.',
      'La série compte ' + n + ' valeurs, un nombre impair : la médiane est la valeur <b>du milieu</b>, la ' + ((n + 1) / 2) + '<sup>e</sup>, soit ' + M(String(med)) + '.',
      '<b>À savoir interpréter</b> : la moyenne est sensible aux valeurs extrêmes, la médiane beaucoup moins. ' +
        'C’est pour cela qu’on parle du salaire <b>médian</b> plutôt que du salaire moyen.'
    ]
  };
});

G('es-lineaire', 'esl-terme', 'Terme d’une suite arithmétique', 'app', function(){
  const u0 = R.int(-10, 40), r = R.nz(-8, 9), n = R.int(6, 30);
  return {
    enonce: '<p>Une suite arithmétique a pour premier terme ' + M('u_0 = ' + nf(u0)) + ' et pour raison ' + M('r = ' + nf(r)) + '.</p>' +
            '<p>Calcule ' + M('u_{' + n + '}') + '.</p>',
    champs: [{ type: 'num', label: 'u' + n + ' =', bon: u0 + n * r, tol: 1e-9 }],
    etapes: [
      'Formule du cours : ' + M('u_n = u_0 + n r') + '.',
      M('u_{' + n + '} = ' + nf(u0) + ' + ' + n + ' × (' + nf(r) + ') = ' + nf(u0) + ' ' + (n * r < 0 ? '- ' + nf(-n * r) : '+ ' + nf(n * r)) + ' = ' + nf(u0 + n * r)),
      'On n’a pas eu besoin de calculer les termes un par un : c’est tout l’intérêt de la formule explicite.'
    ]
  };
});

G('es-lineaire', 'esl-seuil', 'Seuil dans une croissance linéaire', 'ent', function(){
  const u0 = R.pick([100, 150, 200, 250, 500]);
  const r = R.pick([8, 12, 15, 20, 25]);
  const S = u0 + r * R.int(5, 20) + R.int(1, r - 1);
  const n = Math.floor((S - u0) / r) + 1;
  return {
    enonce: '<p>Un abonnement compte <b>' + nf(u0) + ' membres</b> et en gagne <b>' + r + ' chaque mois</b>.</p>' +
            '<p>À partir de quel mois ' + M('n') + ' le nombre de membres <b>dépasse-t-il</b> ' + nf(S) + ' ?</p>',
    champs: [{ type: 'num', label: 'n =', bon: n, tol: 1e-9 }],
    etapes: [
      'La situation est une croissance <b>linéaire</b> : ' + M('u_n = ' + nf(u0) + ' + ' + r + 'n') + '.',
      'On résout ' + M(nf(u0) + ' + ' + r + 'n > ' + nf(S)) + ', soit ' + M(r + 'n > ' + nf(S - u0)) + '.',
      M('n > frac{' + nf(S - u0) + '}{' + r + '} ≈ ' + nf(Math.round((S - u0) / r * 100) / 100)) + '.',
      'Comme ' + M('n') + ' est un <b>entier</b>, le plus petit qui convient est ' + M('n = ' + n) + '.',
      'Vérification : ' + M('u_{' + n + '} = ' + nf(u0 + r * n)) + ' dépasse bien ' + M(nf(S)) + ', alors que ' + M('u_{' + (n - 1) + '} = ' + nf(u0 + r * (n - 1))) + ' non.'
    ]
  };
});

G('es-quadratique', 'esq-factorisee', 'Racines et signe par la forme factorisée', 'app', function(){
  const a = R.pick([1, 2, -1, -2, 3]);
  let r1 = R.nz(-5, 4), r2 = r1 + R.int(1, 5);
  const positif = Math.random() < 0.5;
  const dedans = M('] ' + nf(r1) + ' ; ' + nf(r2) + ' [');
  const dehors = M('] -∞ ; ' + nf(r1) + ' [ ∪ ] ' + nf(r2) + ' ; +∞ [');
  const bonEstDehors = positif ? (a > 0) : (a < 0);
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + coef(a) + fact(r1) + fact(r2)) + '.</p>' +
            '<p>Pour quelles valeurs de ' + M('x') + ' a-t-on ' + M('f(x) ' + (positif ? '>' : '&lt;') + ' 0') + ' ?</p>',
    qcm: { options: [dedans, dehors, 'Pour tout réel ' + M('x'), 'Aucune valeur de ' + M('x')], bon: bonEstDehors ? 1 : 0 },
    etapes: [
      'La fonction est <b>déjà factorisée</b> : ses racines se lisent directement, ' + M('x_1 = ' + nf(r1)) + ' et ' + M('x_2 = ' + nf(r2)) + '.',
      '<b>Aucun discriminant n’est nécessaire</b> : il n’est d’ailleurs pas au programme de cet enseignement.',
      'Règle du signe : ' + M('f(x)') + ' est du <b>signe de ' + M('a') + '</b> à l’extérieur des racines, du signe contraire entre les deux. Ici ' + M('a = ' + nf(a)) + '.',
      'Réponse : ' + (bonEstDehors ? dehors : dedans) + '.'
    ]
  };
});

G('es-quadratique', 'esq-sommet', 'Axe de symétrie et sommet', 'ent', function(){
  const a = R.pick([1, 2, -1, -2]);
  let r1 = R.nz(-5, 4), r2 = r1 + R.int(2, 6);
  if ((r1 + r2) % 2 !== 0) r2 = r2 + 1;
  const axe = (r1 + r2) / 2;
  const som = a * (axe - r1) * (axe - r2);
  return {
    enonce: '<p>Soit ' + M('f(x) = ' + coef(a) + fact(r1) + fact(r2)) + '.</p>' +
            '<p>Donne l’abscisse de l’axe de symétrie de la parabole, puis l’ordonnée du sommet.</p>',
    champs: [
      { type: 'num', label: 'axe : x =', bon: axe, tol: 1e-6 },
      { type: 'num', label: 'ordonnée du sommet', bon: som, tol: 1e-6 }
    ],
    etapes: [
      'Les deux racines sont ' + M(nf(r1)) + ' et ' + M(nf(r2)) + '. La parabole est <b>symétrique</b>, donc son axe passe exactement au <b>milieu</b> :',
      M('x = frac{' + nf(r1) + ' + ' + nf(r2) + '}{2} = ' + nf(axe)),
      'L’ordonnée du sommet est l’image de cette abscisse :' +
        Mc('f(' + nf(axe) + ') = ' + coef(a) + '(' + nf(axe) + ' - ' + nf(r1) + ')(' + nf(axe) + ' - ' + nf(r2) + ') = ' + nf(som)),
      'Comme ' + M('a = ' + nf(a)) + ' est ' + (a > 0 ? 'positif, la parabole est tournée vers le haut : c’est un <b>minimum</b>' : 'négatif, la parabole est tournée vers le bas : c’est un <b>maximum</b>') + '.',
      '<b>Aucune formule n’a été utilisée</b> : uniquement la symétrie, comme le demande le programme.'
    ]
  };
});

G('es-exponentiel', 'ese-terme', 'Terme d’une suite géométrique', 'app', function(){
  const u0 = R.pick([100, 200, 500, 1000, 2500, 5000]);
  const t = R.pick([2, 3, 4, 5, 8, 10, -5, -10, -20]);
  const q = 1 + t / 100;
  const n = R.int(3, 15);
  const val = Math.round(u0 * Math.pow(q, n) * 100) / 100;
  return {
    enonce: '<p>Une quantité vaut <b>' + nf(u0) + '</b> et évolue de <b>' + (t > 0 ? '+ ' : '− ') + Math.abs(t) + ' % par an</b>.</p>' +
            '<p>Combien vaut-elle au bout de <b>' + n + ' ans</b> ? (arrondi au centième)</p>',
    champs: [{ type: 'num', label: 'valeur ≈', bon: val, tol: 0.011 }],
    etapes: [
      'Une évolution à taux constant se modélise par une suite <b>géométrique</b>, de raison ' +
        M('q = 1 ' + (t > 0 ? '+' : '-') + ' frac{' + Math.abs(t) + '}{100} = ' + nf(q)) + '.',
      'Formule : ' + M('u_n = u_0 q^{n}') + '.',
      M('u_{' + n + '} = ' + nf(u0) + ' × ' + nf(q) + '^{' + n + '} ≈ ' + nf(val)),
      'À la calculatrice, ' + M(nf(q) + '^{' + n + '} ≈ ' + nf(Math.round(Math.pow(q, n) * 100000) / 100000)) + '.',
      '<b>Erreur classique</b> : multiplier par ' + M(nf(t) + ' × ' + n) + ' % : cela reviendrait à une croissance <b>linéaire</b>, pas exponentielle.'
    ]
  };
});

G('es-exponentiel', 'ese-taux-moyen', 'Taux d’évolution moyen', 'ent', function(){
  const tm = R.pick([2, 3, 5, 8, 10, -5, -10]);
  const n = R.pick([2, 3, 4, 5]);
  const cmGlobal = Math.pow(1 + tm / 100, n);
  const tGlobal = Math.round((cmGlobal - 1) * 10000) / 100;
  return {
    enonce: '<p>Sur <b>' + n + ' ans</b>, une quantité a évolué au total de <b>' + nf(tGlobal) + ' %</b>.</p>' +
            '<p>Quel est le <b>taux d’évolution moyen annuel</b>, en pourcentage ? (arrondi au centième)</p>',
    champs: [{ type: 'num', label: 'taux moyen (en %)', bon: tm, tol: 0.06 }],
    etapes: [
      'Le coefficient global est ' + M('CM = 1 + frac{' + nf(tGlobal) + '}{100} = ' + nf(Math.round(cmGlobal * 100000) / 100000)) + '.',
      'Le coefficient <b>moyen</b> est celui qui, répété ' + M(String(n)) + ' fois, redonne le coefficient global :' +
        Mc('CM_{moyen} = CM^{frac{1}{' + n + '}}'),
      M('CM_{moyen} = ' + nf(Math.round(cmGlobal * 100000) / 100000) + '^{frac{1}{' + n + '}} ≈ ' + nf(Math.round((1 + tm / 100) * 100000) / 100000)),
      'Le taux moyen est donc ' + M('(' + nf(Math.round((1 + tm / 100) * 10000) / 10000) + ' - 1) × 100 ≈ ' + nf(tm)) + ' %.',
      '<b>Le piège</b> : ce n’est <b>pas</b> ' + M('frac{' + nf(tGlobal) + '}{' + n + '} = ' + nf(Math.round(tGlobal / n * 100) / 100)) +
        ' %. On divise les coefficients par une racine, jamais les taux par le nombre de périodes.'
    ]
  };
});

G('es-exponentiel', 'ese-seuil', 'Seuil dans une évolution exponentielle', 'ds', function(){
  const croissante = Math.random() < 0.6;
  const u0 = R.pick([500, 1000, 2000, 5000]);
  const t = croissante ? R.pick([3, 5, 7, 10]) : R.pick([10, 15, 20]);
  const q = croissante ? 1 + t / 100 : 1 - t / 100;
  const k = R.int(5, 18);
  let S = u0 * Math.pow(q, k);
  S = croissante ? Math.round(S / 100) * 100 : Math.round(S / 10) * 10;
  if (croissante && S <= u0) S = u0 + 100;
  if (!croissante && S < 10) S = 10;
  let u = u0, n = 0;
  while (croissante ? u <= S : u >= S){ u = u * q; n++; if (n > 4000) break; }
  return {
    enonce: '<p>Une population de <b>' + nf(u0) + '</b> individus ' + (croissante ? 'augmente' : 'diminue') +
            ' de <b>' + t + ' % par an</b>.</p>' +
            '<p>À partir de quelle année ' + M('n') + ' l’effectif ' + (croissante ? 'dépasse-t-il' : 'passe-t-il sous') +
            ' <b>' + nf(S) + '</b> ?</p>',
    champs: [{ type: 'num', label: 'n =', bon: n, tol: 1e-9 }],
    etapes: [
      'Évolution à taux constant : suite géométrique de raison ' + M('q = ' + nf(q)) + ', donc ' + M('u_n = ' + nf(u0) + ' × ' + nf(q) + '^{n}') + '.',
      'Le programme n’exige pas le logarithme : on calcule les termes <b>un par un</b>, à la calculatrice ou au tableur, jusqu’à franchir le seuil.',
      M('u_{' + (n - 1) + '} ≈ ' + nf(Math.round(u0 * Math.pow(q, n - 1) * 10) / 10)) + ' et ' +
        M('u_{' + n + '} ≈ ' + nf(Math.round(u0 * Math.pow(q, n) * 10) / 10)) + '.',
      'Le seuil est franchi pour ' + M('n = ' + n) + '.',
      'Au tableur : une colonne des rangs, une colonne des effectifs avec la formule ' + M('= cellule × ' + nf(q)) + ', et on descend jusqu’au franchissement.'
    ]
  };
});
