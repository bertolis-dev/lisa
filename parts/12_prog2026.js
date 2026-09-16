/* =========================================================================
   Mise en conformité avec le programme 2026.

   Arrêté du 26 février 2026 (BO n°14 du 2 avril 2026, NOR MENE2602917A) :
   il remplace l'annexe de 2019 et s'applique à la rentrée 2026-2027.
   Ce fichier porte tout l'écart avec l'ancien programme :
     - les capacités attendues, réécrites d'après le texte officiel ;
     - les ajouts et retraits dans les fiches de cours ;
     - deux chapitres nouveaux : Automatismes et Expérimentations.
   ========================================================================= */

/* ---------- capacités attendues, version 2026 ---------- */
const CAPACITES_2026 = {
'second-degre': [
  'Étudier le signe d’une fonction polynôme du second degré donnée sous forme factorisée.',
  'Déterminer les fonctions polynômes du second degré s’annulant en deux nombres réels distincts.',
  'Factoriser un trinôme en diversifiant les stratégies : racine évidente, détection des racines par leur somme et leur produit, identité remarquable, formules générales.',
  'Choisir la forme adaptée (développée, canonique, factorisée) pour résoudre un problème : équation, inéquation, optimisation, variations.'
],
'suites': [
  'Passer du langage naturel au registre algébrique ou graphique, et inversement.',
  'Modéliser une situation par une suite ; déterminer une relation explicite ou de récurrence à partir d’un motif géométrique ou d’un dénombrement.',
  'Calculer des termes d’une suite définie explicitement, par récurrence ou par un algorithme.',
  'Pour une suite arithmétique ou géométrique : calculer le terme général, une somme de termes consécutifs, déterminer le sens de variation.',
  'Modéliser une croissance linéaire par une suite arithmétique, une croissance exponentielle par une suite géométrique.',
  'Conjecturer, dans des cas simples, la limite éventuelle d’une suite.'
],
'derivation': [
  'Calculer un taux de variation, la pente d’une sécante.',
  'Interpréter le nombre dérivé en contexte : pente d’une tangente, vitesse instantanée, coût marginal.',
  'Déterminer graphiquement un nombre dérivé ; construire la tangente en un point.',
  'Déterminer l’équation de la tangente en un point.',
  'Calculer une valeur approchée de ' + M('f(a + h)') + ' par approximation linéaire.',
  'Calculer une fonction dérivée à l’aide des opérations sur les fonctions dérivables.'
],
'variations': [
  'Étudier les variations d’une fonction, déterminer ses extremums.',
  'Résoudre un problème d’optimisation.',
  'Exploiter les variations d’une fonction pour établir une inégalité ; étudier la position relative de deux courbes.',
  'Étudier, en lien avec la dérivation, une fonction polynôme du second degré : variations, extremum, allure selon le signe de ' + M('a') + '.'
],
'exponentielle': [
  'Transformer une expression en utilisant les propriétés algébriques de l’exponentielle.',
  'Pour ' + M('a') + ' réel, dériver la fonction ' + M('t \u21A6 @e^{at}') + '.',
  'Représenter graphiquement ' + M('t \u21A6 @e^{kt}') + ' et ' + M('t \u21A6 @e^{-kt}') + ' pour ' + M('k > 0') + '.',
  'Modéliser une croissance ou une décroissance exponentielle.'
],
'trigonometrie': [
  'Placer un point sur le cercle trigonométrique.',
  'Par lecture du cercle trigonométrique, déterminer les cosinus et sinus d’angles associés, pour des valeurs remarquables.'
],
'produit-scalaire': [
  'Utiliser le produit scalaire pour démontrer une orthogonalité, calculer un angle, une longueur.',
  'Choisir la méthode adaptée pour calculer un produit scalaire : projection orthogonale, coordonnées, normes et angle, normes.',
  'Utiliser le produit scalaire pour résoudre un problème géométrique.'
],
'geometrie-reperee': [
  'Déterminer une équation cartésienne de droite connaissant un point et un vecteur normal.',
  'Déterminer les coordonnées du projeté orthogonal d’un point sur une droite.',
  'Déterminer et utiliser l’équation d’un cercle donné par son centre et son rayon.',
  'Reconnaître une équation de cercle, déterminer son centre et son rayon.',
  'Utiliser un repère pour étudier une configuration.'
],
'probas-conditionnelles': [
  'Calculer une probabilité à l’aide de la formule des probabilités totales.',
  'Utiliser ou justifier l’indépendance de deux événements.',
  'Représenter la succession de deux épreuves indépendantes par un arbre ou un tableau.',
  'Pour ' + M('n \u2264 4') + ', représenter l’arbre d’une répétition d’épreuves de Bernoulli et calculer des probabilités.'
],
'variables-aleatoires': [
  'Interpréter et utiliser les notations ' + M('{X = a}') + ', ' + M('{X \u2264 a}') + ', ' + M('P(X = a)') + ', ' + M('P(X \u2264 a)') + '.',
  'Modéliser une situation à l’aide d’une variable aléatoire.',
  'Déterminer la loi de probabilité d’une variable aléatoire.',
  'Calculer une espérance, une variance, un écart type.',
  'Utiliser l’espérance dans la résolution d’un problème (mise pour un jeu équitable, etc.).'
],
'algorithmique': [
  'Générer une liste, en extension, par ajouts successifs ou en compréhension.',
  'Manipuler les éléments d’une liste et leurs indices ; parcourir une liste, itérer sur ses éléments.',
  'Écrire ou adapter une fonction ; utiliser variables, instructions conditionnelles et boucles.',
  'Découper une tâche complexe en tâches plus simples (programmation modulaire).'
],
'logique': [
  'Utiliser les symboles ' + M('\u2205, \u2208, \u2282, \u2229, \u222A') + ', les ensembles de nombres et les intervalles ; connaître couple, produit cartésien et cardinal.',
  'Lire et écrire des propositions contenant « et », « ou » ; mobiliser un contre-exemple.',
  'Formuler une implication, une équivalence, une réciproque, une contraposée ; employer « condition nécessaire » et « condition suffisante ».',
  'Identifier le statut des égalités et des lettres employées : variable, inconnue, paramètre.',
  'Utiliser les quantificateurs et formuler la négation d’une proposition quantifiée.',
  'Raisonner par disjonction de cas, par l’absurde, par contraposée.'
]
};
Object.keys(CAPACITES_2026).forEach(id => { if (CHAP[id]) CHAP[id].capacites = CAPACITES_2026[id]; });

/* ---------- outils pour retoucher une fiche de cours ---------- */
function blocIndex(id, titre){
  const c = CHAP[id];
  for (let k = 0; k < c.cours.length; k++) if (c.cours[k].t === titre) return k;
  return -1;
}
function retirerBloc(id, titre){
  const i = blocIndex(id, titre);
  if (i >= 0) CHAP[id].cours.splice(i, 1);
}
function remplacerBloc(id, titre, bloc){
  const i = blocIndex(id, titre);
  if (i >= 0) CHAP[id].cours[i] = bloc; else CHAP[id].cours.push(bloc);
}
function insererApres(id, titre, bloc){
  const i = blocIndex(id, titre);
  if (i >= 0) CHAP[id].cours.splice(i + 1, 0, bloc); else CHAP[id].cours.push(bloc);
}

/* ---------- TRIGONOMÉTRIE : le programme 2026 l'allège nettement ----------
   Les fonctions cosinus et sinus comme fonctions périodiques, leur parité et
   leurs dérivées ne sont plus au programme de première. */
CHAP['trigonometrie'].titre = 'Trigonométrie';
CHAP['trigonometrie'].resume = 'Cercle trigonométrique, radian, cosinus et sinus.';
retirerBloc('trigonometrie', 'Dérivées');
remplacerBloc('trigonometrie', 'Propriétés', { k: 'prop', t: 'Angles associés', c:
  '<ul><li>' + M('@cos^{2}(x) + @sin^{2}(x) = 1') + '</li>' +
  '<li>' + M('-1 \u2264 @cos(x) \u2264 1') + ' et ' + M('-1 \u2264 @sin(x) \u2264 1') + '</li>' +
  '<li>' + M('@cos(-x) = @cos(x)') + ' et ' + M('@sin(-x) = -@sin(x)') + '</li>' +
  '<li>' + M('@cos(\u03C0 - x) = -@cos(x)') + ' et ' + M('@sin(\u03C0 - x) = @sin(x)') + '</li>' +
  '<li>' + M('@cos(x + 2\u03C0) = @cos(x)') + ' : on retombe au même point après un tour complet.</li></ul>' +
  '<p class="tiny">Programme 2026 : on lit ces relations <b>sur le cercle</b>. L’étude des fonctions ' +
  M('@cos') + ' et ' + M('@sin') + ' (périodicité, dérivées) est reportée en terminale.</p>' });

/* ---------- SECOND DEGRÉ : la forme factorisée passe devant ---------- */
insererApres('second-degre', 'Fonction polynôme du second degré', { k: 'prop', t: 'La forme factorisée d’abord', c:
  '<p>Le programme 2026 part de la <b>forme factorisée</b> ' + M('f(x) = a(x - x_1)(x - x_2)') + ' : elle donne directement ' +
  'les racines <b>et</b> le signe, sans aucun calcul.</p>' +
  '<p>Avant de sortir le discriminant, on cherche donc à factoriser astucieusement :</p>' +
  '<ul><li><b>racine évidente</b> : si ' + M('a + b + c = 0') + ' alors 1 est racine ; si ' + M('a - b + c = 0') + ' alors ' + M('-1') + ' l’est ;</li>' +
  '<li><b>somme et produit</b> : deux entiers de somme ' + M('frac{-b}{a}') + ' et de produit ' + M('frac{c}{a}') + ' ;</li>' +
  '<li><b>identité remarquable</b> : ' + M('x^{2} - 9 = (x - 3)(x + 3)') + ' ;</li>' +
  '<li><b>coefficient de ' + M('x') + ' nul ou terme constant nul</b> : ' + M('2x^{2} - 6x = 2x(x - 3)') + '.</li></ul>' +
  '<p>Les formules générales ne viennent qu’ensuite, quand rien de tout cela ne marche.</p>' });
insererApres('second-degre', 'Forme canonique et sommet', { k: 'meth', t: 'Compléter le carré', c:
  '<p>En 2026, la forme canonique se détermine <b>dans des cas simples</b>, avec l’identité</p>' +
  Mc('x^{2} + 2a x = (x + a)^{2} - a^{2}') +
  '<p>Exemple : ' + M('x^{2} + 6x + 1 = (x + 3)^{2} - 9 + 1 = (x + 3)^{2} - 8') + '.</p>' +
  '<p class="tiny">Le calcul de la forme canonique dans le cas général n’est plus une capacité exigible.</p>' });

/* ---------- SUITES : sensibilisation à la limite ---------- */
insererApres('suites', 'Sens de variation', { k: 'def', t: 'Vers quoi va la suite ?', c:
  '<p>Le programme 2026 demande de <b>conjecturer</b> le comportement d’une suite quand ' + M('n') + ' devient très grand. ' +
  'Aucune définition formelle n’est exigée : on observe des valeurs.</p>' +
  '<ul><li>' + M('u_n = 3 \u00D7 2^{n}') + ' : les termes grandissent sans fin, la suite <b>tend vers ' + M('+\u221E') + '</b>.</li>' +
  '<li>' + M('u_n = 100 \u00D7 0,5^{n}') + ' : les termes se rapprochent de 0, la suite <b>tend vers 0</b>.</li>' +
  '<li>' + M('u_n = (-1)^{n}') + ' : la suite saute entre ' + M('-1') + ' et 1, elle <b>n’a pas de limite</b>.</li></ul>' });

/* ---------- DÉRIVATION : approximation linéaire, nouvelles dérivées ---------- */
insererApres('derivation', 'Équation de la tangente', { k: 'meth', t: 'Approximation linéaire', c:
  '<p>Près du point de contact, la courbe et sa tangente se confondent presque. D’où, pour ' + M('h') + ' petit :</p>' +
  Mc('f(a + h) \u2248 f(a) + f\u2032(a) \u00D7 h') +
  '<p>Exemple avec ' + M('f(x) = sqrt{x}') + ' et ' + M('a = 100') + ' : ' + M('f\u2032(100) = frac{1}{20} = 0,05') + ', donc</p>' +
  Mc('sqrt{101} \u2248 10 + 0,05 = 10,05') +
  '<p class="tiny">La vraie valeur est ' + M('10,0499\u2026') + ' : l’approximation est excellente. <b>Nouveauté du programme 2026.</b></p>' });
remplacerBloc('derivation', 'Dérivées des fonctions usuelles', { k: 'prop', t: 'Dérivées des fonctions usuelles', c:
  '<ul>' +
  '<li>' + M('f(x) = k') + ' \u2192 ' + M('f\u2032(x) = 0') + '</li>' +
  '<li>' + M('f(x) = x') + ' \u2192 ' + M('f\u2032(x) = 1') + '</li>' +
  '<li>' + M('f(x) = x^{2}') + ' \u2192 ' + M('f\u2032(x) = 2x') + '</li>' +
  '<li>' + M('f(x) = x^{3}') + ' \u2192 ' + M('f\u2032(x) = 3x^{2}') + '</li>' +
  '<li>' + M('f(x) = frac{1}{x}') + ' \u2192 ' + M('f\u2032(x) = frac{-1}{x^{2}}') + '</li>' +
  '<li>' + M('f(x) = sqrt{x}') + ' \u2192 ' + M('f\u2032(x) = frac{1}{2sqrt{x}}') + '</li>' +
  '</ul>' +
  '<p>Plus généralement, pour ' + M('n') + ' entier <b>relatif</b> (donc aussi négatif) : ' + M('(x^{n})\u2032 = n x^{n-1}') + '. ' +
  'Par exemple ' + M('(frac{1}{x^{2}})\u2032 = (x^{-2})\u2032 = -2x^{-3} = frac{-2}{x^{3}}') + '.</p>' +
  '<p class="tiny">À connaître aussi : ' + M('sqrt{x}') + ' n’est <b>pas dérivable en 0</b>, et la fonction valeur absolue non plus.</p>' });

/* ---------- VARIATIONS : parité, position relative ---------- */
insererApres('variations', 'Lien dérivée / variations', { k: 'prop', t: 'Fonctions paires et impaires', c:
  '<ul><li>' + M('f') + ' est <b>paire</b> si ' + M('f(-x) = f(x)') + ' : sa courbe est symétrique par rapport à l’<b>axe des ordonnées</b> (exemple : ' + M('x^{2}') + ').</li>' +
  '<li>' + M('f') + ' est <b>impaire</b> si ' + M('f(-x) = -f(x)') + ' : sa courbe est symétrique par rapport à l’<b>origine</b> (exemple : ' + M('x^{3}') + ').</li></ul>' +
  '<p>Repérer une parité divise le travail par deux : on étudie la fonction sur les ' + M('x \u2265 0') + ', puis on complète par symétrie.</p>' });
insererApres('variations', 'Extremum local', { k: 'meth', t: 'Comparer deux courbes', c:
  '<p>Pour savoir laquelle des deux courbes est au-dessus de l’autre, on étudie le <b>signe de la différence</b> :</p>' +
  Mc('d(x) = f(x) - g(x)') +
  '<p>' + M('d(x) > 0') + ' signifie que la courbe de ' + M('f') + ' est au-dessus de celle de ' + M('g') + '. ' +
  'La même méthode sert à <b>établir une inégalité</b> : pour montrer que ' + M('@e^{x} \u2265 x + 1') + ', on étudie ' + M('d(x) = @e^{x} - x - 1') + '.</p>' });

/* ---------- GÉOMÉTRIE REPÉRÉE : projeté orthogonal ---------- */
insererApres('geometrie-reperee', 'Droite par un point et un vecteur normal', { k: 'meth', t: 'Projeté orthogonal d’un point sur une droite', c:
  '<p>Le projeté orthogonal ' + M('H') + ' de ' + M('A') + ' sur une droite ' + M('d') + ' est le point de ' + M('d') + ' <b>le plus proche</b> de ' + M('A') + '.</p>' +
  '<ul><li>1. On écrit la droite ' + M('(AH)') + ' : elle passe par ' + M('A') + ' et a pour vecteur directeur le vecteur <b>normal</b> de ' + M('d') + '.</li>' +
  '<li>2. On résout le système formé par les deux équations : le point d’intersection est ' + M('H') + '.</li></ul>' +
  '<p>La distance de ' + M('A') + ' à la droite vaut alors ' + M('AH') + '. <b>Nouveauté du programme 2026.</b></p>' });

/* ---------- PROBABILITÉS : succession d'épreuves, Bernoulli ---------- */
insererApres('probas-conditionnelles', 'Indépendance', { k: 'prop', t: 'Succession d’épreuves indépendantes', c:
  '<p>Quand on enchaîne deux expériences qui <b>ne s’influencent pas</b> (deux lancers, deux tirages avec remise), ' +
  'on représente la succession par un arbre ou un tableau, et la probabilité d’un chemin est le <b>produit</b> des probabilités.</p>' +
  '<p><b>Épreuve de Bernoulli</b> : une expérience à deux issues seulement, <b>succès</b> (probabilité ' + M('p') + ') et échec (' + M('1 - p') + ').</p>' +
  '<p>Le programme 2026 demande, <b>pour ' + M('n \u2264 4') + '</b>, de dessiner l’arbre de ' + M('n') + ' épreuves identiques et indépendantes et d’en tirer des probabilités.</p>' +
  '<p>Exemple, ' + M('n = 3') + ' et ' + M('p = 0,2') + ' : la probabilité d’obtenir <b>exactement un succès</b> est ' +
  M('3 \u00D7 0,2 \u00D7 0,8 \u00D7 0,8 = 0,384') + ' : il y a <b>3 chemins</b> qui donnent un seul succès.</p>' });

/* ---------- VARIABLES ALÉATOIRES : linéarité, König-Huygens ---------- */
insererApres('variables-aleatoires', 'Transformation affine', { k: 'prop', t: 'Formule de König-Huygens', c:
  '<p>Pour calculer une variance sans repasser par les écarts à la moyenne :</p>' +
  Mc('V(X) = E(X^{2}) - E(X)^{2}') +
  '<p>autrement dit « la moyenne des carrés moins le carré de la moyenne ». C’est presque toujours plus rapide.</p>' +
  '<p><b>Linéarité de l’espérance</b> : ' + M('E(X + Y) = E(X) + E(Y)') + ', et ' + M('E(aX + b) = aE(X) + b') + '. ' +
  'Ces deux résultats sont au programme 2026.</p>' });

/* ---------- ALGORITHMIQUE : les listes ---------- */
insererApres('algorithmique', 'Écrire une fonction', { k: 'meth', t: 'Les listes, la nouveauté de première', c:
  '<p>Une liste est une <b>suite de valeurs rangées dans l’ordre</b>, chacune repérée par son indice, qui commence à <b>0</b>.</p>' +
  '<pre class="code">L = [4, 9, 2, 7]\nL[0]        # 4, le premier\nL[3]        # 7, le dernier\nlen(L)      # 4, le nombre d\u2019éléments\nL.append(5) # L vaut maintenant [4, 9, 2, 7, 5]</pre>' +
  '<p><b>En compréhension</b>, on fabrique une liste en une ligne :</p>' +
  '<pre class="code">carres = [n**2 for n in range(6)]      # [0, 1, 4, 9, 16, 25]\npairs  = [n for n in range(20) if n % 2 == 0]</pre>' +
  '<p>C’est l’outil naturel pour stocker les premiers termes d’une suite, une série statistique, un tableau de valeurs.</p>' });

/* =========================================================================
   CHAPITRE NOUVEAU : Automatismes
   ========================================================================= */
const CH_AUTOMATISMES = {
  id: 'automatismes', bloc: 'transverse', titre: 'Automatismes', matiere: 'maths', classe: 'premiere',
  resume: 'Taux d’évolution, calcul, lecture graphique : les réflexes.',
  capacites: [
    'Appliquer un taux d’évolution pour calculer une valeur finale ou initiale.',
    'Calculer un taux d’évolution et l’exprimer en pourcentage.',
    'Calculer le taux d’évolution équivalent à plusieurs évolutions successives, et le taux réciproque.',
    'Déterminer les solutions d’une équation produit nul.',
    'Déterminer le signe d’une expression du premier degré, d’une expression factorisée du second degré.',
    'Développer, factoriser, réduire une expression algébrique simple.',
    'Résoudre graphiquement ' + M('f(x) = k') + ', ' + M('f(x) &lt; k') + ' ; lire un signe, un tableau de variations.',
    'Tracer une droite, lire son équation réduite, déterminer un coefficient directeur.',
    'Lire un graphique, passer du graphique aux données, calculer et interpréter des indicateurs statistiques.',
    'Calculer des probabilités conditionnelles à partir d’un tableau croisé ou d’un arbre ; distinguer ' +
      M('P(A \u2229 B)') + ', ' + M('P_A(B)') + ' et ' + M('P_B(A)') + '.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p><b>Nouveauté du programme 2026.</b> Ce n’est pas un chapitre qu’on traite puis qu’on oublie : ce sont les gestes ' +
      'qui doivent devenir <b>automatiques</b>, pour que la tête reste disponible pour le raisonnement.</p>' +
      '<p>Ils reviennent en début d’heure, en questions flash, et dans toutes les autres parties du programme.</p>' },
    { k: 'prop', t: 'Le coefficient multiplicateur', c:
      '<p>Toute évolution en pourcentage se traduit par une <b>multiplication</b> :</p>' +
      '<ul><li>augmenter de ' + M('t') + ' % : multiplier par ' + M('CM = 1 + frac{t}{100}') + ' ;</li>' +
      '<li>diminuer de ' + M('t') + ' % : multiplier par ' + M('CM = 1 - frac{t}{100}') + '.</li></ul>' +
      '<p>Inversement, connaissant ' + M('CM') + ' : ' + M('t = (CM - 1) \u00D7 100') + '.</p>' +
      Mc('taux = frac{valeur finale - valeur initiale}{valeur initiale} \u00D7 100') },
    { k: 'prop', t: 'Évolutions successives et taux réciproque', c:
      '<p>Deux évolutions à la suite : les coefficients se <b>multiplient</b>.</p>' +
      Mc('CM_{global} = CM_1 \u00D7 CM_2') +
      '<p>+ 20 % puis − 20 % donne ' + M('1,2 \u00D7 0,8 = 0,96') + ', soit <b>− 4 %</b> : on ne revient pas au point de départ.</p>' +
      '<p>Le <b>taux réciproque</b> est celui qui annule une évolution : son coefficient est ' + M('frac{1}{CM}') + '. ' +
      'Après + 25 % (' + M('CM = 1,25') + '), il faut ' + M('frac{1}{1,25} = 0,8') + ', soit <b>− 20 %</b>.</p>' },
    { k: 'meth', t: 'Équation produit nul et signe', c:
      '<p>Un produit est nul si et seulement si <b>l’un de ses facteurs</b> est nul :</p>' +
      Mc('A \u00D7 B = 0 \u21D4 A = 0 \u00A0 ou \u00A0 B = 0') +
      '<p>Pour le signe de ' + M('ax + b') + ' : il s’annule en ' + M('frac{-b}{a}') + ', et il est du <b>signe de ' + M('a') + ' après</b> cette valeur.</p>' +
      '<p>Pour une expression déjà factorisée, on fait un <b>tableau de signes</b> : une ligne par facteur, une ligne pour le produit.</p>' },
    { k: 'prop', t: 'Lecture graphique', c:
      '<ul><li>Résoudre ' + M('f(x) = k') + ' : repérer où la courbe <b>coupe</b> la droite horizontale d’altitude ' + M('k') + '.</li>' +
      '<li>Résoudre ' + M('f(x) &lt; k') + ' : repérer où la courbe est <b>en dessous</b> de cette droite.</li>' +
      '<li>Coefficient directeur d’une droite passant par ' + M('A(x_A ; y_A)') + ' et ' + M('B(x_B ; y_B)') + ' :</li></ul>' +
      Mc('m = frac{y_B - y_A}{x_B - x_A}') +
      '<p>et l’ordonnée à l’origine se lit à l’intersection avec l’axe des ordonnées.</p>' },
    { k: 'prop', t: 'Probabilités dans un tableau croisé', c:
      '<p>Dans un tableau d’effectifs, une probabilité conditionnelle est une <b>proportion à l’intérieur d’une ligne ou d’une colonne</b> :</p>' +
      Mc('P_A(B) = frac{effectif de A et B}{effectif de A}') +
      '<p>tandis que ' + M('P(A \u2229 B)') + ' rapporte au <b>total général</b>. C’est la confusion la plus fréquente.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une baisse de ' + M('t') + ' % suivie d’une hausse de ' + M('t') + ' % ne ramène <b>jamais</b> au point de départ.</li>' +
      '<li>Passer par le coefficient multiplicateur évite presque toutes les erreurs de pourcentage.</li>' +
      '<li>Pour un taux réciproque, on divise par le coefficient, on ne change pas le signe du taux.</li>' +
      '<li>Devant un produit nul, ne jamais développer : on lit les solutions directement sur les facteurs.</li></ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Additionner les pourcentages d’évolutions successives.</li>' +
      '<li>Confondre ' + M('P_A(B)') + ' et ' + M('P(A \u2229 B)') + ' : le dénominateur n’est pas le même.</li>' +
      '<li>Oublier que le signe de ' + M('ax + b') + ' dépend du signe de ' + M('a') + '.</li></ul>' }
  ]
};

/* =========================================================================
   CHAPITRE NOUVEAU : Expérimentations
   ========================================================================= */
const CH_EXPERIMENTATIONS = {
  id: 'experimentations', bloc: 'probas', titre: 'Expérimentations', matiere: 'maths', classe: 'premiere',
  resume: 'Simuler, estimer une espérance, mesurer l’écart.',
  capacites: [
    'Simuler une variable aléatoire avec Python ou un tableur.',
    'Lire, comprendre et écrire une fonction Python renvoyant la moyenne d’un échantillon de taille ' + M('n') + '.',
    'Étudier l’écart entre la moyenne d’un échantillon simulé et l’espérance de la variable aléatoire.',
    'Simuler ' + M('N') + ' échantillons de taille ' + M('n') + ' et calculer la proportion des cas où ' +
      M('|m - \u03BC| \u2264 frac{2\u03C3}{sqrt{n}}') + '.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p><b>Nouveauté du programme 2026.</b> On ne démontre plus, on <b>observe</b> : en simulant des milliers de tirages, ' +
      'on voit apparaître ce que la théorie annonce.</p>' +
      '<p>L’idée centrale : la <b>moyenne observée</b> sur un échantillon estime l’<b>espérance</b> de la variable aléatoire. ' +
      'Plus l’échantillon est grand, plus l’estimation est fiable. C’est le principe de tous les sondages.</p>' },
    { k: 'meth', t: 'Simuler une variable aléatoire', c:
      '<pre class="code">from random import random, randint\n\ndef lancer_de():\n    return randint(1, 6)\n\ndef succes(p):\n    # 1 avec la probabilité p, 0 sinon\n    if random() &lt; p:\n        return 1\n    return 0</pre>' },
    { k: 'meth', t: 'Moyenne d’un échantillon', c:
      '<pre class="code">def moyenne_echantillon(n):\n    s = 0\n    for i in range(n):\n        s = s + lancer_de()\n    return s / n</pre>' +
      '<p>Pour un dé équilibré, l’espérance vaut ' + M('E(X) = frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3,5') + '. ' +
      'La moyenne d’un échantillon de taille 10 en est souvent loin ; celle d’un échantillon de taille 10 000 en est très proche.</p>' },
    { k: 'prop', t: 'L’écart typique', c:
      '<p>Si la variable a pour espérance ' + M('\u03BC') + ' et pour écart type ' + M('\u03C3') + ', la moyenne ' + M('m') +
      ' d’un échantillon de taille ' + M('n') + ' vérifie, dans <b>environ 95 % des cas</b> :</p>' +
      Mc('|m - \u03BC| \u2264 frac{2\u03C3}{sqrt{n}}') +
      '<p>Cette quantité diminue en ' + M('sqrt{n}') + ' : pour diviser l’erreur par 2, il faut <b>quatre fois plus</b> de tirages.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une simulation ne <b>démontre</b> rien : elle rend un résultat crédible. Le dire dans la conclusion rapporte des points.</li>' +
      '<li>Deux exécutions du même programme ne donnent pas le même résultat : c’est normal, c’est le hasard.</li>' +
      '<li>Toujours initialiser la somme à 0 <b>avant</b> la boucle, et diviser <b>après</b>.</li></ul>' }
  ]
};

[CH_AUTOMATISMES, CH_EXPERIMENTATIONS].forEach(c => {
  if (CHAP[c.id]) return;
  c.gens = [];
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
