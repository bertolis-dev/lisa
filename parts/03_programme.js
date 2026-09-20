/* =========================================================================
   Le programme officiel : spécialité mathématiques, première générale
   (arrêté du 17 janvier 2019 · BO spécial n°1 du 22 janvier 2019)
   5 blocs, 12 chapitres. Pour chaque chapitre : capacités attendues + cours.
   ========================================================================= */

/* =========================================================================
   Les matières de première générale. Chaque matière apporte ses propres
   blocs et chapitres ; l'application n'en affiche qu'une à la fois.
   Pour ajouter une matière : ses chapitres avec `matiere: "<id>"`, ses blocs
   dans BLOCS avec le même champ, et passer `pret` à true.
   ========================================================================= */

/* Classes couvertes. Une seule est remplie aujourd'hui ; le champ `classe`
   porte par chaque chapitre permet d'en ajouter d'autres sans rien casser. */
const CLASSES = [
  { id: 'seconde',   nom: 'Seconde g\u00e9n\u00e9rale',   court: 'Seconde' },
  { id: 'premiere',  nom: 'Premi\u00e8re g\u00e9n\u00e9rale',  court: 'Premi\u00e8re', pret: true },
  { id: 'terminale', nom: 'Terminale g\u00e9n\u00e9rale', court: 'Terminale' }
];
function classeCourante(){ return CLASSES.filter(c => c.pret)[0]; }

const MATIERES = [
  { id: 'maths',      nom: 'Spécialité mathématiques', court: 'Maths',       e: '📐', type: 'specialite', pret: true },
  { id: 'francais',   nom: 'Français',                 court: 'Français',    e: '📖', type: 'commun' },
  { id: 'histgeo',    nom: 'Histoire-géographie',      court: 'Hist-géo',    e: '🗺️', type: 'commun' },
  { id: 'sciences',   nom: 'Enseignement scientifique', court: 'Ens. sci.',  e: '🔬', type: 'commun' },
  { id: 'anglais',    nom: 'Anglais (LVA)',            court: 'Anglais',     e: '💬', type: 'commun' },
  { id: 'lvb',        nom: 'Langue vivante B',         court: 'LVB',         e: '🌍', type: 'commun' },
  { id: 'emc',        nom: 'EMC',                      court: 'EMC',         e: '⚖️', type: 'commun' },
  { id: 'physique',   nom: 'Spécialité physique-chimie', court: 'Physique',  e: '⚗️', type: 'specialite' },
  { id: 'svt',        nom: 'Spécialité SVT',           court: 'SVT',         e: '🧬', type: 'specialite' },
  { id: 'ses',        nom: 'Spécialité SES',           court: 'SES',         e: '📊', type: 'specialite' },
  { id: 'hggsp',      nom: 'Spécialité HGGSP',         court: 'HGGSP',       e: '🏛️', type: 'specialite' },
  { id: 'hlp',        nom: 'Spécialité HLP',           court: 'HLP',         e: '📜', type: 'specialite' },
  { id: 'nsi',        nom: 'Spécialité NSI',           court: 'NSI',         e: '💻', type: 'specialite' },
  { id: 'llcer',      nom: 'Spécialité LLCER',         court: 'LLCER',       e: '🗣️', type: 'specialite' },
  { id: 'llca',       nom: 'Spécialité LLCA',          court: 'LLCA',        e: '🏺', type: 'specialite' },
  { id: 'si',         nom: 'Spécialité sciences de l’ingénieur', court: 'SI', e: '⚙️', type: 'specialite' },
  { id: 'arts',       nom: 'Spécialité arts',          court: 'Arts',        e: '🎨', type: 'specialite' },
  { id: 'eppcs',      nom: 'Spécialité EPPCS',         court: 'EPPCS',       e: '🏃', type: 'specialite' },
  { id: 'bioeco',     nom: 'Spécialité biologie-écologie', court: 'Bio-éco', e: '🌿', type: 'specialite' },
  { id: 'eps',        nom: 'Éducation physique et sportive', court: 'EPS',   e: '🤸', type: 'commun' }
];
const MAT = {};
MATIERES.forEach(m => { MAT[m.id] = m; });
function matiereCourante(){ return MAT[S.matiere] || MAT.maths; }

const BLOCS = [
  { id: 'algebre',    nom: 'Algèbre' },
  { id: 'analyse',    nom: 'Analyse' },
  { id: 'geometrie',  nom: 'Géométrie' },
  { id: 'probas',     nom: 'Probabilités et statistiques' },
  { id: 'transverse', nom: 'Transversal' }
];

const CHAPITRES = [
{
  id: 'second-degre', bloc: 'algebre', titre: 'Second degré',
  resume: 'Forme canonique, discriminant, racines, signe du trinôme.',
  capacites: [
    'Déterminer la forme canonique, les racines et la forme factorisée d\u2019un trinôme.',
    'Résoudre une équation du second degré, étudier le signe d\u2019un trinôme.',
    'Déterminer le sommet et les variations de la parabole.',
    'Résoudre un problème se ramenant au second degré (optimisation, aire\u2026).'
  ],
  cours: [
    { k: 'def', t: 'Fonction polynôme du second degré', c:
      '<p>Une fonction du second degré s\u2019écrit ' + M('f(x) = ax^{2} + bx + c') + ' avec ' + M('a \u2260 0') + '.</p>' +
      '<p>Sa courbe est une <b>parabole</b> : tournée vers le haut si ' + M('a > 0') + ', vers le bas si ' + M('a < 0') + '.</p>' },
    { k: 'prop', t: 'Forme canonique et sommet', c:
      '<p>' + M('f(x) = a(x - \u03B1)^{2} + \u03B2') + ' avec ' + M('\u03B1 = frac{-b}{2a}') + ' et ' +
      M('\u03B2 = f(\u03B1) = frac{-\u0394}{4a}') + '.</p>' +
      '<p>Le <b>sommet</b> de la parabole est le point ' + M('S(\u03B1 ; \u03B2)') + '. Si ' + M('a > 0') + ', ' + M('\u03B2') +
      ' est le <b>minimum</b> de ' + M('f') + ' ; si ' + M('a < 0') + ', c\u2019est le <b>maximum</b>.</p>' },
    { k: 'def', t: 'Discriminant', c:
      Mc('\u0394 = b^{2} - 4ac') +
      '<p><b>Contrôle rapide</b> : si ' + M('a') + ' et ' + M('c') + ' sont de <b>signes contraires</b>, ' +
      'alors ' + M('-4ac > 0') + ' et donc ' + M('\u0394 > 0') + ' à coup sûr. Il y a deux racines, ' +
      'sans avoir besoin de finir le calcul.</p>' },
    { k: 'prop', t: 'Racines et factorisation', c:
      '<ul>' +
      '<li>' + M('\u0394 > 0') + ' : deux racines ' + M('x_1 = frac{-b - sqrt{\u0394}}{2a}') + ' et ' + M('x_2 = frac{-b + sqrt{\u0394}}{2a}') +
      ', et ' + M('f(x) = a(x - x_1)(x - x_2)') + '.</li>' +
      '<li>' + M('\u0394 = 0') + ' : une racine double ' + M('x_0 = frac{-b}{2a}') + ', et ' + M('f(x) = a(x - x_0)^{2}') + '.</li>' +
      '<li>' + M('\u0394 < 0') + ' : aucune racine réelle, pas de factorisation.</li></ul>' },
    { k: 'prop', t: 'Signe du trinôme', c:
      '<p>' + M('f(x)') + ' est <b>toujours du signe de ' + M('a') + '</b>, <b>sauf entre les racines</b> lorsqu\u2019elles existent.</p>' +
      '<p>Si ' + M('\u0394 \u2264 0') + ', ' + M('f(x)') + ' garde le signe de ' + M('a') + ' sur tout ' + M('\u211D') + '.</p>' },
    { k: 'prop', t: 'Relations de Viète : somme et produit', c:
      '<p>Si le trinôme admet deux racines ' + M('x_1') + ' et ' + M('x_2') + '&nbsp;:</p>' +
      Mc('S = x_1 + x_2 = frac{-b}{a}') + Mc('P = x_1 \u00D7 x_2 = frac{c}{a}') +
      '<p><b>La réciproque est vraie aussi</b> : si deux nombres ont pour somme ' + M('frac{-b}{a}') +
      ' et pour produit ' + M('frac{c}{a}') + ', alors ce sont les racines de ' + M('f') + '.</p>' +
      '<p><b>Corollaire.</b> Deux nombres de somme ' + M('S') + ' et de produit ' + M('P') + ' sont les racines de</p>' +
      Mc('x^{2} - S x + P = 0') +
      '<p>C’est ce qui permet de retrouver deux nombres dont on ne connaît que leur somme et leur produit, ' +
      'et de deviner des racines entières ou de vérifier un résultat.</p>' },
    { k: 'meth', t: 'Les quatre méthodes, un exemple chacune', c:
      '<p>Les critères qui font reconnaître chaque cas sont plus haut. Ici, les quatre méthodes ' +
      'appliquées de bout en bout, dans l’ordre où on les essaie.</p>' +
      '<ol class="meth-liste">' +
      '<li><b>Racine évidente.</b> On teste les entiers de −3 à 3 : 1, −1, 2, −2, 3, −3. Si ' + M('f(r) = 0') + ', alors ' + M('r') +
      ' est une racine, et la somme ' + M('x_1 + x_2 = frac{-b}{a}') + ' donne l’autre.' +
      '<div class="ex">' + M('f(x) = 2x^{2} - 5x - 3') + ' : ' + M('f(3) = 18 - 15 - 3 = 0') + ', donc 3 est racine.<br>' +
      M('x_1 + x_2 = frac{5}{2}') + ', donc ' + M('x_2 = frac{5}{2} - 3 = -frac{1}{2}') + '.<br>' +
      M('f(x) = 2(x - 3)(x + frac{1}{2}) = (x - 3)(2x + 1)') + '</div></li>' +
      '<li><b>Somme et produit.</b> On cherche deux nombres dont la somme vaut ' + M('frac{-b}{a}') +
      ' et le produit ' + M('frac{c}{a}') + '. Efficace quand les racines sont entières.' +
      '<div class="ex">' + M('f(x) = x^{2} - 7x + 12') + ' : somme 7, produit 12.<br>' +
      M('3 + 4 = 7') + ' et ' + M('3 × 4 = 12') + ', donc ' + M('x_1 = 3') + ' et ' + M('x_2 = 4') + '.<br>' +
      M('f(x) = (x - 3)(x - 4)') + '</div></li>' +
      '<li><b>Identité remarquable.</b> Trois formes à reconnaître :' +
      Mc('a^{2} + 2ab + b^{2} = (a + b)^{2}') + Mc('a^{2} - 2ab + b^{2} = (a - b)^{2}') +
      Mc('a^{2} - b^{2} = (a - b)(a + b)') +
      '<div class="ex">' + M('x^{2} - 16 = x^{2} - 4^{2} = (x - 4)(x + 4)') + '<br>' +
      M('x^{2} - 6x + 9 = x^{2} - 2 × 3 × x + 3^{2} = (x - 3)^{2}') + '</div></li>' +
      '<li><b>Discriminant.</b> La méthode générale, détaillée plus haut : ' + M('\u0394 = b^{2} - 4ac') +
      ', puis ' + M('f(x) = a(x - x_1)(x - x_2)') + '.' +
      '<div class="ex">' + M('f(x) = 2x^{2} + 3x - 2') + ' : ' + M('\u0394 = 9 + 16 = 25') + '.<br>' +
      M('x_1 = frac{-3 - 5}{4} = -2') + ' et ' + M('x_2 = frac{-3 + 5}{4} = frac{1}{2}') + '.<br>' +
      M('f(x) = 2(x + 2)(x - frac{1}{2})') + '</div></li>' +
      '</ol>' },
    { k: 'meth', t: 'Lire le signe sur la forme factorisée', c:
      '<p>Si ' + M('f(x) = a(x - x_1)(x - x_2)') + ' avec ' + M('x_1 < x_2') + ' et ' + M('a > 0') + ' : ' +
      M('f') + ' est <b>positive à l’extérieur des racines</b> et <b>négative entre les racines</b>. ' +
      'Si ' + M('a < 0') + ', c’est l’inverse.</p>' +
      '<p class="tiny">Exemple : ' + M('f(x) = 2(x - 3)(x + 1)') + ', donc ' + M('x_1 = -1') + ', ' +
      M('x_2 = 3') + ', et ' + M('a = 2 > 0') + '.</p>' +
      '<table class="tab signes">' +
      '<tr><th>' + M('x') + '</th><th>\u2212\u221E</th><th></th><th>\u22121</th><th></th><th>3</th><th></th><th>+\u221E</th></tr>' +
      '<tr><th>' + M('f(x)') + '</th><td></td><td>+</td><td>0</td><td>\u2212</td><td>0</td><td>+</td><td></td></tr>' +
      '</table>' },
    { k: 'meth', t: 'Retrouver un polynôme à partir de ses racines', c:
      '<p>Deux racines ne suffisent pas : elles fixent la forme ' + M('f(x) = a(x - x_1)(x - x_2)') +
      ', mais pas le coefficient ' + M('a') + '. Il faut un point de plus, souvent ' + M('f(0)') + '.</p>' +
      '<div class="ex">Racines 3 et −2, avec ' + M('f(0) = -12') + ' :<br>' +
      M('f(x) = a(x - 3)(x + 2)') + '<br>' +
      M('-12 = a × (-3) × 2 = -6a') + ', donc ' + M('a = 2') + '.<br>' +
      M('f(x) = 2(x - 3)(x + 2)') + '</div>' },
    { k: 'meth', t: 'Choisir la bonne forme', c:
      '<p>Les trois écritures décrivent la même fonction. La question posée dit laquelle utiliser — ' +
      'passer par la mauvaise fait perdre du temps et des points.</p>' +
      '<ul class="formes">' +
      '<li><b>Développée</b> ' + M('ax^{2} + bx + c') +
      '<span>identifier ' + M('a') + ', ' + M('b') + ', ' + M('c') + ' &middot; calculer ' + M('\u0394') +
      ' &middot; calculer ' + M('f(0)') + '</span></li>' +
      '<li><b>Factorisée</b> ' + M('a(x - x_1)(x - x_2)') +
      '<span>racines &middot; résoudre ' + M('f(x) = 0') + ' &middot; signe &middot; inéquations</span></li>' +
      '<li><b>Canonique</b> ' + M('a(x - \u03B1)^{2} + \u03B2') +
      '<span>minimum ou maximum &middot; sommet &middot; variations</span></li>' +
      '</ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Oublier le facteur ' + M('a') + ' dans la forme factorisée.</li>' +
      '<li>Écrire ' + M('\u0394 = b^{2} - 4ac') + ' en oubliant le signe de ' + M('b') + ' ou de ' + M('c') + ' (attention aux coefficients négatifs).</li>' +
      '<li>' + M('\u0394 < 0') + ' ne signifie pas « impossible » : la parabole ne coupe simplement pas l\u2019axe des abscisses.</li>' +
      '<li>Confondre ' + M('\u03B1') + ' et ' + M('\u03B2') + ' dans la forme canonique. Pour ' + M('f(x) = 2(x - 3)^{2} - 5') + ' : ' + 'le minimum est ' + M('-5') + ', <b>atteint en</b> ' + M('x = 3') + '. Le 3 n\u2019est pas un maximum \u2014 avec ' + M('a > 0') + ', ' + 'la parabole monte vers ' + M('+\u221E') + ' des deux c\u00f4t\u00e9s, donc il n\u2019y a <b>pas de maximum</b>.</li>' +
      '<li>Oublier le signe moins de ' + M('\u03B1 = frac{-b}{2a}') + ' et de ' + M('\u03B2 = frac{-\u0394}{4a}') + '.</li></ul>' }
  ]
},
{
  id: 'suites', bloc: 'algebre', titre: 'Suites numériques',
  resume: 'Arithmétiques, géométriques, sommes, variations, seuils.',
  capacites: [
    'Modéliser un phénomène discret à l\u2019aide d\u2019une suite.',
    'Calculer des termes, avec ou sans algorithme.',
    'Reconnaître une suite arithmétique ou géométrique, donner son terme général.',
    'Calculer une somme de termes consécutifs.',
    'Étudier le sens de variation, chercher un seuil.'
  ],
  cours: [
    { k: 'def', t: 'Suite et modes de génération', c:
      '<p>Une suite ' + M('(u_n)') + ' associe à chaque entier ' + M('n') + ' un nombre ' + M('u_n') + '.</p>' +
      '<ul><li><b>Explicite</b> : ' + M('u_n = 3n + 5') + ' → on calcule directement n\u2019importe quel terme.</li>' +
      '<li><b>Par récurrence</b> : ' + M('u_0 = 2') + ' et ' + M('u_{n+1} = 3u_n - 1') + ' → il faut calculer les termes de proche en proche.</li></ul>' },
    { k: 'def', t: 'Suite arithmétique', c:
      '<p>On ajoute toujours la même <b>raison</b> ' + M('r') + ' : ' + M('u_{n+1} = u_n + r') + '.</p>' +
      Mc('u_n = u_0 + n \u00D7 r') +
      '<p>Plus généralement ' + M('u_n = u_p + (n - p) \u00D7 r') + '.</p>' },
    { k: 'def', t: 'Suite géométrique', c:
      '<p>On multiplie toujours par la même <b>raison</b> ' + M('q') + ' : ' + M('u_{n+1} = q \u00D7 u_n') + '.</p>' +
      Mc('u_n = u_0 \u00D7 q^{n}') },
    { k: 'prop', t: 'Sommes de référence', c:
      Mc('1 + 2 + \u2026 + n = frac{n(n+1)}{2}') +
      Mc('1 + q + q^{2} + \u2026 + q^{n} = frac{1 - q^{n+1}}{1 - q}') + '<p class="tiny">(pour ' + M('q \u2260 1') + ')</p>' +
      '<p>Somme de termes consécutifs d\u2019une suite arithmétique :</p>' +
      Mc('u_0 + u_1 + \u2026 + u_n = frac{(n+1)(u_0 + u_n)}{2}') },
    { k: 'prop', t: 'Sens de variation', c:
      '<ul><li>Arithmétique : croissante si ' + M('r > 0') + ', décroissante si ' + M('r < 0') + '.</li>' +
      '<li>Géométrique avec ' + M('u_0 > 0') + ' : croissante si ' + M('q > 1') + ', décroissante si ' + M('0 < q < 1') + '.</li>' +
      '<li>Si ' + M('q < 0') + ', la suite change de signe : elle n\u2019est <b>pas monotone</b>.</li></ul>' },
    { k: 'meth', t: 'Chercher un seuil', c:
      '<p>Trouver le plus petit ' + M('n') + ' tel que ' + M('u_n > S') + ' : on calcule les termes un par un jusqu\u2019à dépasser ' + M('S') + '.</p>' +
      '<pre class="code">def seuil(S):\n    u = 200        # valeur de u0\n    n = 0\n    while u &lt;= S:\n        u = u * 1.05   # relation de récurrence\n        n = n + 1\n    return n</pre>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Confondre ' + M('u_n = u_0 + nr') + ' (départ à ' + M('n = 0') + ') et ' + M('u_n = u_1 + (n-1)r') + ' (départ à ' + M('n = 1') + ').</li>' +
      '<li>Une hausse de 5 % correspond à ' + M('q = 1,05') + ', pas à ' + M('q = 0,05') + '.</li></ul>' }
  ]
},
{
  id: 'derivation', bloc: 'analyse', titre: 'Dérivation',
  resume: 'Nombre dérivé, tangente, dérivées usuelles et opérations.',
  capacites: [
    'Calculer un taux de variation et un nombre dérivé.',
    'Déterminer l\u2019équation de la tangente en un point.',
    'Calculer la dérivée des fonctions usuelles et de leurs sommes, produits, quotients.',
    'Interpréter le nombre dérivé comme vitesse ou coût marginal.'
  ],
  cours: [
    { k: 'def', t: 'Taux de variation et nombre dérivé', c:
      '<p>Taux de variation de ' + M('f') + ' entre ' + M('a') + ' et ' + M('a + h') + ' :</p>' +
      Mc('frac{f(a + h) - f(a)}{h}') +
      '<p>Quand ' + M('h') + ' devient très proche de 0, ce taux tend vers le <b>nombre dérivé</b> ' + M('f\u2032(a)') +
      ', qui est le <b>coefficient directeur de la tangente</b> à la courbe au point d\u2019abscisse ' + M('a') + '.</p>' },
    { k: 'prop', t: 'Équation de la tangente', c:
      Mc('y = f\u2032(a)(x - a) + f(a)') },
    { k: 'prop', t: 'Dérivées des fonctions usuelles', c:
      '<ul>' +
      '<li>' + M('f(x) = k') + ' \u2192 ' + M('f\u2032(x) = 0') + '</li>' +
      '<li>' + M('f(x) = x') + ' \u2192 ' + M('f\u2032(x) = 1') + '</li>' +
      '<li>' + M('f(x) = x^{n}') + ' \u2192 ' + M('f\u2032(x) = n x^{n-1}') + '</li>' +
      '<li>' + M('f(x) = frac{1}{x}') + ' \u2192 ' + M('f\u2032(x) = frac{-1}{x^{2}}') + '</li>' +
      '<li>' + M('f(x) = sqrt{x}') + ' \u2192 ' + M('f\u2032(x) = frac{1}{2sqrt{x}}') + '</li>' +
      '</ul>' },
    { k: 'prop', t: 'Opérations', c:
      '<ul>' +
      '<li>' + M('(u + v)\u2032 = u\u2032 + v\u2032') + '</li>' +
      '<li>' + M('(ku)\u2032 = k u\u2032') + '</li>' +
      '<li>' + M('(uv)\u2032 = u\u2032v + uv\u2032') + '</li>' +
      '<li>' + M('(frac{1}{v})\u2032 = frac{-v\u2032}{v^{2}}') + '</li>' +
      '<li>' + M('(frac{u}{v})\u2032 = frac{u\u2032v - uv\u2032}{v^{2}}') + '</li>' +
      '</ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>' + M('(uv)\u2032 \u2260 u\u2032v\u2032') + ' : il faut les deux termes.</li>' +
      '<li>Dans le quotient, c\u2019est ' + M('u\u2032v - uv\u2032') + ' au numérateur : <b>l\u2019ordre compte</b>.</li>' +
      '<li>' + M('sqrt{x}') + ' n\u2019est pas dérivable en 0.</li></ul>' }
  ]
},
{
  id: 'variations', bloc: 'analyse', titre: 'Variations et optimisation',
  resume: 'Signe de la dérivée, tableau de variations, extremums.',
  capacites: [
    'Étudier les variations d\u2019une fonction à partir du signe de sa dérivée.',
    'Dresser un tableau de variations complet.',
    'Déterminer les extremums d\u2019une fonction.',
    'Résoudre un problème d\u2019optimisation.'
  ],
  cours: [
    { k: 'prop', t: 'Lien dérivée / variations', c:
      '<p>Sur un intervalle ' + M('I') + ' :</p>' +
      '<ul><li>' + M('f\u2032(x) > 0') + ' sur ' + M('I') + ' \u2192 ' + M('f') + ' est <b>strictement croissante</b> sur ' + M('I') + '</li>' +
      '<li>' + M('f\u2032(x) < 0') + ' sur ' + M('I') + ' \u2192 ' + M('f') + ' est <b>strictement décroissante</b> sur ' + M('I') + '</li>' +
      '<li>' + M('f\u2032(x) = 0') + ' sur ' + M('I') + ' \u2192 ' + M('f') + ' est <b>constante</b> sur ' + M('I') + '</li></ul>' },
    { k: 'meth', t: 'Méthode : étudier les variations', c:
      '<ul><li>1. Calculer ' + M('f\u2032(x)') + '.</li>' +
      '<li>2. Étudier le <b>signe</b> de ' + M('f\u2032(x)') + ' (souvent un trinôme : on cherche ses racines).</li>' +
      '<li>3. Dresser le tableau de variations, en plaçant les valeurs de ' + M('f') + ' aux bornes et aux racines.</li>' +
      '<li>4. Conclure.</li></ul>' },
    { k: 'def', t: 'Extremum local', c:
      '<p>Si ' + M('f\u2032') + ' <b>s\u2019annule en changeant de signe</b> en ' + M('x_0') + ', alors ' + M('f') + ' admet un extremum local en ' + M('x_0') + ' :</p>' +
      '<ul><li>' + M('+') + ' puis ' + M('-') + ' \u2192 <b>maximum</b> local ;</li>' +
      '<li>' + M('-') + ' puis ' + M('+') + ' \u2192 <b>minimum</b> local.</li></ul>' },
    { k: 'meth', t: 'Problème d\u2019optimisation', c:
      '<p>Toujours la même trame : choisir l\u2019inconnue ' + M('x') + ', exprimer la quantité à optimiser en fonction de ' + M('x') +
      ', préciser l\u2019<b>intervalle de validité</b>, dériver, étudier le signe, conclure par une phrase.</p>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>' + M('f\u2032(x_0) = 0') + ' ne suffit pas : il faut un <b>changement de signe</b> (contre-exemple : ' + M('f(x) = x^{3}') + ' en 0).</li>' +
      '<li>Oublier de préciser l\u2019intervalle d\u2019étude dans un problème concret (une longueur est positive !).</li></ul>' }
  ]
},
{
  id: 'exponentielle', bloc: 'analyse', titre: 'Fonction exponentielle',
  resume: 'Définition, propriétés algébriques, dérivée, variations.',
  capacites: [
    'Transformer une expression avec la relation fonctionnelle.',
    'Calculer la dérivée de ' + M('x \u21A6 @e^{ax}') + '.',
    'Étudier les variations, résoudre équations et inéquations.',
    'Modéliser une croissance ou une décroissance exponentielle.'
  ],
  cours: [
    { k: 'def', t: 'Définition', c:
      '<p>La fonction exponentielle est l\u2019<b>unique</b> fonction ' + M('f') + ' dérivable sur ' + M('\u211D') + ' telle que</p>' +
      Mc('f\u2032 = f \u00A0\u00A0 et \u00A0\u00A0 f(0) = 1') +
      '<p>On la note ' + M('@exp(x)') + ' ou ' + M('@e^{x}') + ', avec ' + M('@e \u2248 2,718') + '.</p>' },
    { k: 'prop', t: 'Relation fonctionnelle', c:
      '<ul>' +
      '<li>' + M('@e^{a+b} = @e^{a} \u00D7 @e^{b}') + '</li>' +
      '<li>' + M('@e^{-a} = frac{1}{@e^{a}}') + '</li>' +
      '<li>' + M('@e^{a-b} = frac{@e^{a}}{@e^{b}}') + '</li>' +
      '<li>' + M('(@e^{a})^{n} = @e^{na}') + '</li></ul>' },
    { k: 'prop', t: 'Signe, variations, dérivée', c:
      '<ul><li>' + M('@e^{x} > 0') + ' pour tout réel ' + M('x') + ' : l\u2019exponentielle ne s\u2019annule <b>jamais</b>.</li>' +
      '<li>Elle est strictement <b>croissante</b> sur ' + M('\u211D') + '.</li>' +
      '<li>' + M('(@e^{ax})\u2032 = a\u00A0@e^{ax}') + ', et plus généralement ' + M('(@e^{u})\u2032 = u\u2032\u00A0@e^{u}') + '.</li></ul>' },
    { k: 'prop', t: 'Équations et inéquations', c:
      '<ul><li>' + M('@e^{x} = @e^{y} \u21D4 x = y') + '</li>' +
      '<li>' + M('@e^{x} < @e^{y} \u21D4 x < y') + ' (la croissance conserve l\u2019ordre)</li></ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>' + M('@e^{a} + @e^{b} \u2260 @e^{a+b}') + '</li>' +
      '<li>Une équation ' + M('@e^{x} = -3') + ' n\u2019a <b>aucune</b> solution.</li>' +
      '<li>' + M('(@e^{3x})\u2032 = 3@e^{3x}') + ' et non ' + M('@e^{3x}') + '.</li></ul>' }
  ]
},
{
  id: 'trigonometrie', bloc: 'analyse', titre: 'Fonctions trigonométriques',
  resume: 'Cercle trigonométrique, radian, cosinus et sinus.',
  capacites: [
    'Placer un point image sur le cercle trigonométrique, convertir degrés / radians.',
    'Utiliser les valeurs remarquables de cosinus et sinus.',
    'Utiliser la périodicité et la parité.',
    'Dériver les fonctions cosinus et sinus.'
  ],
  cours: [
    { k: 'def', t: 'Radian et cercle trigonométrique', c:
      '<p>Le radian mesure la longueur de l\u2019arc parcouru sur le cercle de rayon 1 :</p>' +
      Mc('\u03C0 rad = 180\u00B0') +
      '<p>Enroulement de la droite numérique : à tout réel ' + M('x') + ' correspond un point ' + M('N') + ' du cercle.</p>' },
    { k: 'def', t: 'Cosinus et sinus', c:
      '<p>' + M('@cos(x)') + ' et ' + M('@sin(x)') + ' sont l\u2019abscisse et l\u2019ordonnée du point image de ' + M('x') + ' sur le cercle trigonométrique.</p>' },
    { k: 'prop', t: 'Valeurs remarquables', c:
      '<ul>' +
      '<li>' + M('@cos(0) = 1') + ', ' + M('@sin(0) = 0') + '</li>' +
      '<li>' + M('@cos(frac{\u03C0}{6}) = frac{sqrt{3}}{2}') + ', ' + M('@sin(frac{\u03C0}{6}) = frac{1}{2}') + '</li>' +
      '<li>' + M('@cos(frac{\u03C0}{4}) = @sin(frac{\u03C0}{4}) = frac{sqrt{2}}{2}') + '</li>' +
      '<li>' + M('@cos(frac{\u03C0}{3}) = frac{1}{2}') + ', ' + M('@sin(frac{\u03C0}{3}) = frac{sqrt{3}}{2}') + '</li>' +
      '<li>' + M('@cos(frac{\u03C0}{2}) = 0') + ', ' + M('@sin(frac{\u03C0}{2}) = 1') + '</li></ul>' },
    { k: 'prop', t: 'Propriétés', c:
      '<ul><li>' + M('@cos^{2}(x) + @sin^{2}(x) = 1') + '</li>' +
      '<li>' + M('-1 \u2264 @cos(x) \u2264 1') + ' et ' + M('-1 \u2264 @sin(x) \u2264 1') + '</li>' +
      '<li>Périodicité : ' + M('@cos(x + 2\u03C0) = @cos(x)') + '</li>' +
      '<li>Parité : ' + M('@cos(-x) = @cos(x)') + ' (paire), ' + M('@sin(-x) = -@sin(x)') + ' (impaire)</li>' +
      '<li>' + M('@cos(\u03C0 - x) = -@cos(x)') + ', ' + M('@sin(\u03C0 - x) = @sin(x)') + '</li></ul>' },
    { k: 'prop', t: 'Dérivées', c:
      '<ul><li>' + M('(@cos)\u2032 = -@sin') + '</li><li>' + M('(@sin)\u2032 = @cos') + '</li></ul>' }
  ]
},
{
  id: 'produit-scalaire', bloc: 'geometrie', titre: 'Produit scalaire',
  resume: 'Quatre expressions, orthogonalité, Al-Kashi.',
  capacites: [
    'Calculer un produit scalaire avec les coordonnées, les normes et l\u2019angle, ou une projection.',
    'Démontrer une orthogonalité.',
    'Utiliser le théorème d\u2019Al-Kashi.',
    'Calculer longueurs et angles dans un triangle.'
  ],
  cours: [
    { k: 'def', t: 'Définition avec l\u2019angle', c:
      '<p>Pour deux vecteurs non nuls formant un angle ' + M('\u03B8') + ' :</p>' +
      Mc('vec{u} \u00B7 vec{v} = \u2016vec{u}\u2016 \u00D7 \u2016vec{v}\u2016 \u00D7 @cos(\u03B8)') +
      '<p>Le résultat est un <b>nombre</b>, pas un vecteur.</p>' },
    { k: 'prop', t: 'Avec les coordonnées', c:
      '<p>Dans un repère <b>orthonormé</b>, si ' + M('vec{u}(x ; y)') + ' et ' + M('vec{v}(x\u2032 ; y\u2032)') + ' :</p>' +
      Mc('vec{u} \u00B7 vec{v} = xx\u2032 + yy\u2032') +
      '<p>et ' + M('\u2016vec{u}\u2016 = sqrt{x^{2} + y^{2}}') + '.</p>' },
    { k: 'prop', t: 'Avec les normes', c:
      Mc('vec{u} \u00B7 vec{v} = frac{1}{2}(\u2016vec{u} + vec{v}\u2016^{2} - \u2016vec{u}\u2016^{2} - \u2016vec{v}\u2016^{2})') +
      '<p>et ' + M('\u2016vec{u} + vec{v}\u2016^{2} = \u2016vec{u}\u2016^{2} + 2\u00A0vec{u} \u00B7 vec{v} + \u2016vec{v}\u2016^{2}') + '.</p>' },
    { k: 'prop', t: 'Orthogonalité', c:
      Mc('vec{u} \u00B7 vec{v} = 0 \u21D4 vec{u} \u22A5 vec{v}') +
      '<p>C\u2019est l\u2019outil n\u00B01 pour démontrer qu\u2019un triangle est rectangle ou que deux droites sont perpendiculaires.</p>' },
    { k: 'prop', t: 'Théorème d\u2019Al-Kashi', c:
      '<p>Dans un triangle ' + M('ABC') + ', en notant ' + M('a = BC') + ', ' + M('b = AC') + ', ' + M('c = AB') + ' :</p>' +
      Mc('a^{2} = b^{2} + c^{2} - 2bc\u00A0@cos(\u00C2)') +
      '<p>C\u2019est la généralisation du théorème de Pythagore (' + M('\u00C2 = 90\u00B0') + ' donne ' + M('@cos(\u00C2) = 0') + ').</p>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>La formule avec les coordonnées n\u2019est valable que dans un repère <b>orthonormé</b>.</li>' +
      '<li>Un angle <b>obtus</b> donne un produit scalaire <b>négatif</b>.</li>' +
      '<li>Ne pas confondre ' + M('vec{u} \u00B7 vec{v}') + ' (un nombre) et ' + M('\u2016vec{u}\u2016') + ' (une longueur).</li></ul>' }
  ]
},
{
  id: 'geometrie-reperee', bloc: 'geometrie', titre: 'Géométrie repérée',
  resume: 'Équations de droites, vecteur normal, équation de cercle.',
  capacites: [
    'Déterminer une équation cartésienne de droite à partir d\u2019un point et d\u2019un vecteur normal ou directeur.',
    'Déterminer une équation de cercle.',
    'Étudier positions relatives et intersections.'
  ],
  cours: [
    { k: 'prop', t: 'Équation cartésienne d\u2019une droite', c:
      '<p>Toute droite admet une équation ' + M('ax + by + c = 0') + ' avec ' + M('(a ; b) \u2260 (0 ; 0)') + '.</p>' +
      '<ul><li>' + M('vec{u}(-b ; a)') + ' est un <b>vecteur directeur</b> ;</li>' +
      '<li>' + M('vec{n}(a ; b)') + ' est un <b>vecteur normal</b> (perpendiculaire à la droite).</li></ul>' },
    { k: 'meth', t: 'Droite par un point et un vecteur normal', c:
      '<p>La droite passant par ' + M('A(x_A ; y_A)') + ' et de vecteur normal ' + M('vec{n}(a ; b)') + ' a pour équation :</p>' +
      Mc('a(x - x_A) + b(y - y_A) = 0') +
      '<p>Démonstration : ' + M('M(x ; y)') + ' appartient à la droite ' + M('\u21D4 vec{AM} \u00B7 vec{n} = 0') + '.</p>' },
    { k: 'prop', t: 'Équation d\u2019un cercle', c:
      '<p>Cercle de centre ' + M('\u03A9(\u03B1 ; \u03B2)') + ' et de rayon ' + M('r') + ' :</p>' +
      Mc('(x - \u03B1)^{2} + (y - \u03B2)^{2} = r^{2}') },
    { k: 'prop', t: 'Cercle de diamètre [AB]', c:
      '<p>' + M('M') + ' appartient au cercle de diamètre ' + M('[AB]') + ' si et seulement si ' + M('vec{MA} \u00B7 vec{MB} = 0') + '.</p>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Une équation de droite n\u2019est <b>pas unique</b> : ' + M('2x + 4y - 6 = 0') + ' et ' + M('x + 2y - 3 = 0') + ' décrivent la même droite.</li>' +
      '<li>Dans l\u2019équation du cercle, le rayon apparaît <b>au carré</b>.</li></ul>' }
  ]
},
{
  id: 'probas-conditionnelles', bloc: 'probas', titre: 'Probabilités conditionnelles',
  resume: 'Arbres pondérés, probabilités totales, indépendance.',
  capacites: [
    'Construire et exploiter un arbre pondéré ou un tableau croisé.',
    'Utiliser la formule des probabilités totales.',
    'Démontrer ou exploiter l\u2019indépendance de deux événements.'
  ],
  cours: [
    { k: 'def', t: 'Probabilité conditionnelle', c:
      '<p>Probabilité de ' + M('B') + ' sachant que ' + M('A') + ' est réalisé (avec ' + M('P(A) \u2260 0') + ') :</p>' +
      Mc('P_A(B) = frac{P(A \u2229 B)}{P(A)}') +
      '<p>d\u2019où ' + M('P(A \u2229 B) = P(A) \u00D7 P_A(B)') + '.</p>' },
    { k: 'meth', t: 'Arbre pondéré', c:
      '<ul><li>La somme des probabilités des branches issues d\u2019un même n\u0153ud vaut <b>1</b>.</li>' +
      '<li>La probabilité d\u2019un <b>chemin</b> est le <b>produit</b> des probabilités rencontrées.</li>' +
      '<li>La probabilité d\u2019un événement est la <b>somme</b> des probabilités des chemins qui y mènent.</li></ul>' },
    { k: 'prop', t: 'Formule des probabilités totales', c:
      '<p>Si ' + M('A') + ' et ' + M('\u0100') + ' forment une partition de l\u2019univers :</p>' +
      Mc('P(B) = P(A \u2229 B) + P(\u0100 \u2229 B)') +
      Mc('P(B) = P(A) \u00D7 P_A(B) + P(\u0100) \u00D7 P_{\u0100}(B)') },
    { k: 'def', t: 'Indépendance', c:
      '<p>' + M('A') + ' et ' + M('B') + ' sont indépendants si</p>' +
      Mc('P(A \u2229 B) = P(A) \u00D7 P(B)') +
      '<p>ce qui équivaut à ' + M('P_A(B) = P(B)') + ' : savoir que ' + M('A') + ' est réalisé ne change rien.</p>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>' + M('P_A(B) \u2260 P_B(A)') + ' : l\u2019ordre du conditionnement change tout.</li>' +
      '<li>Indépendant \u2260 incompatible. Deux événements incompatibles de probabilité non nulle ne sont <b>jamais</b> indépendants.</li></ul>' }
  ]
},
{
  id: 'variables-aleatoires', bloc: 'probas', titre: 'Variables aléatoires',
  resume: 'Loi, espérance, variance, écart-type.',
  capacites: [
    'Déterminer la loi de probabilité d\u2019une variable aléatoire.',
    'Calculer espérance, variance et écart-type.',
    'Interpréter l\u2019espérance comme moyenne sur un grand nombre de répétitions.',
    'Simuler une expérience aléatoire et observer la fluctuation d\u2019échantillonnage.'
  ],
  cours: [
    { k: 'def', t: 'Loi de probabilité', c:
      '<p>Une variable aléatoire ' + M('X') + ' associe un nombre à chaque issue. Sa <b>loi</b> est le tableau des ' + M('P(X = x_i') + ')</p>' +
      '<p>La somme de toutes ces probabilités vaut <b>1</b>.</p>' },
    { k: 'def', t: 'Espérance, variance, écart-type', c:
      Mc('E(X) = x_1 p_1 + x_2 p_2 + \u2026 + x_n p_n') +
      Mc('V(X) = p_1 x_1^{2} + \u2026 + p_n x_n^{2} - E(X)^{2}') +
      Mc('\u03C3(X) = sqrt{V(X)}') },
    { k: 'prop', t: 'Transformation affine', c:
      '<ul><li>' + M('E(aX + b) = a\u00A0E(X) + b') + '</li>' +
      '<li>' + M('V(aX + b) = a^{2}\u00A0V(X)') + '</li>' +
      '<li>' + M('\u03C3(aX + b) = |a|\u00A0\u03C3(X)') + '</li></ul>' },
    { k: 'meth', t: 'Interprétation', c:
      '<p>L\u2019espérance est le gain moyen que l\u2019on obtiendrait en répétant l\u2019expérience un très grand nombre de fois (loi des grands nombres).</p>' +
      '<p>Un jeu est <b>équitable</b> lorsque ' + M('E(X) = 0') + '.</p>' +
      '<p>L\u2019écart-type mesure la <b>dispersion</b> autour de l\u2019espérance.</p>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Oublier de vérifier que la somme des probabilités vaut 1.</li>' +
      '<li>Dans ' + M('V(aX+b)') + ', le ' + M('b') + ' <b>disparaît</b> et le ' + M('a') + ' est <b>au carré</b>.</li></ul>' }
  ]
},
{
  id: 'algorithmique', bloc: 'transverse', titre: 'Algorithmique et programmation',
  resume: 'Fonctions, boucles, listes, seuils, simulation (Python).',
  capacites: [
    'Écrire ou adapter une fonction Python.',
    'Utiliser boucles bornées (for) et non bornées (while).',
    'Manipuler des listes, calculer des sommes.',
    'Simuler une expérience aléatoire.'
  ],
  cours: [
    { k: 'meth', t: 'Écrire une fonction', c:
      '<pre class="code">def f(x):\n    return 3*x**2 - 5*x + 2\n\nprint(f(4))   # affiche 30</pre>' },
    { k: 'meth', t: 'Boucle bornée : termes d\u2019une suite', c:
      '<pre class="code">def terme(n):\n    u = 200          # u0\n    for i in range(n):\n        u = 1.05 * u  # relation de récurrence\n    return u</pre>' },
    { k: 'meth', t: 'Boucle non bornée : recherche de seuil', c:
      '<pre class="code">def seuil(S):\n    u = 200\n    n = 0\n    while u &lt;= S:\n        u = 1.05 * u\n        n = n + 1\n    return n</pre>' +
      '<p>À retenir : on incrémente ' + M('n') + ' <b>dans</b> la boucle, et la condition porte sur la valeur <b>courante</b>.</p>' },
    { k: 'meth', t: 'Listes et sommes', c:
      '<pre class="code">L = [2, 5, 9, 4]\ns = 0\nfor v in L:\n    s = s + v\nmoyenne = s / len(L)</pre>' },
    { k: 'meth', t: 'Simuler une expérience aléatoire', c:
      '<pre class="code">from random import random\n\ndef frequence(n):\n    succes = 0\n    for i in range(n):\n        if random() &lt; 0.3:\n            succes = succes + 1\n    return succes / n</pre>' +
      '<p>Plus ' + M('n') + ' est grand, plus la fréquence observée se rapproche de la probabilité théorique.</p>' }
  ]
},
{
  id: 'logique', bloc: 'transverse', titre: 'Vocabulaire ensembliste et logique',
  resume: 'Ensembles, quantificateurs, implication, raisonnements.',
  capacites: [
    'Utiliser les symboles ' + M('\u2208, \u2282, \u222A, \u2229') + ' et les intervalles.',
    'Employer correctement les quantificateurs.',
    'Formuler une implication, sa réciproque, sa contraposée.',
    'Raisonner par contre-exemple, par disjonction de cas, par l\u2019absurde.'
  ],
  cours: [
    { k: 'def', t: 'Ensembles', c:
      '<ul><li>' + M('x \u2208 A') + ' : ' + M('x') + ' <b>appartient</b> à ' + M('A') + ' (élément / ensemble).</li>' +
      '<li>' + M('A \u2282 B') + ' : ' + M('A') + ' est <b>inclus</b> dans ' + M('B') + ' (ensemble / ensemble).</li>' +
      '<li>' + M('A \u222A B') + ' : réunion (« ou »). ' + M('A \u2229 B') + ' : intersection (« et »).</li>' +
      '<li>Ensembles de nombres : ' + M('\u2115 \u2282 \u2124 \u2282 \u211A \u2282 \u211D') + '.</li></ul>' },
    { k: 'def', t: 'Quantificateurs', c:
      '<ul><li>« Pour tout ' + M('x') + ' de ' + M('I') + ', … » : la propriété est vraie <b>partout</b>.</li>' +
      '<li>« Il existe ' + M('x') + ' de ' + M('I') + ' tel que … » : il suffit d\u2019<b>un seul</b> exemple.</li></ul>' +
      '<p>L\u2019ordre des quantificateurs change le sens de la phrase.</p>' },
    { k: 'def', t: 'Implication, réciproque, contraposée', c:
      '<ul><li>Implication : ' + M('P \u21D2 Q') + '. Si ' + M('P') + ' est vraie, alors ' + M('Q') + ' l\u2019est.</li>' +
      '<li>Réciproque : ' + M('Q \u21D2 P') + '. Elle peut être <b>fausse</b> alors que l\u2019implication est vraie.</li>' +
      '<li>Contraposée : ' + M('non\u00A0Q \u21D2 non\u00A0P') + '. Elle a <b>toujours</b> la même valeur de vérité que l\u2019implication.</li>' +
      '<li>Équivalence ' + M('P \u21D4 Q') + ' : les deux implications sont vraies.</li></ul>' },
    { k: 'meth', t: 'Types de raisonnement', c:
      '<ul><li><b>Contre-exemple</b> : pour montrer qu\u2019une propriété « pour tout » est fausse, un seul exemple suffit.</li>' +
      '<li><b>Disjonction de cas</b> : on traite séparément ' + M('x \u2265 0') + ' et ' + M('x < 0') + ', par exemple.</li>' +
      '<li><b>Par l\u2019absurde</b> : on suppose le contraire et on aboutit à une contradiction.</li>' +
      '<li><b>Par contraposée</b> : on démontre ' + M('non\u00A0Q \u21D2 non\u00A0P') + ' à la place de ' + M('P \u21D2 Q') + '.</li></ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Confondre ' + M('\u2208') + ' et ' + M('\u2282') + '.</li>' +
      '<li>Confondre réciproque et contraposée.</li>' +
      '<li>Croire qu\u2019un exemple démontre une propriété « pour tout » : un exemple n\u2019est <b>pas</b> une preuve.</li></ul>' }
  ]
}
];

const CHAP = {};
CHAPITRES.forEach(c => { c.gens = []; c.matiere = c.matiere || 'maths'; c.classe = c.classe || 'premiere'; CHAP[c.id] = c; });
BLOCS.forEach(b => { b.matiere = b.matiere || 'maths'; });
/* chapitres et blocs de la matière affichée */
function chapitresCourants(){ return CHAPITRES.filter(c => c.matiere === S.matiere && c.classe === classeCourante().id); }
function blocsCourants(){ return BLOCS.filter(b => b.matiere === S.matiere); }
const METHODE = {};
