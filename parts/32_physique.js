/* =========================================================================
   SPÉCIALITÉ PHYSIQUE-CHIMIE, première générale.

   Programme : BO spécial n°1 du 22 janvier 2019, inchangé pour 2026-2027.
   Vérifié sur la page éduscol « Programmes et ressources en physique-chimie
   voie GT », datée de mars 2026, rubrique « Programmes en vigueur ».

   Quatre thèmes, plus un chapitre transversal sur la mesure :
   Constitution et transformations de la matière · Mouvement et interactions
   L'énergie : conversions et transferts · Ondes et signaux
   ========================================================================= */

MAT['physique'].pret = true;

BLOCS.push(
  { id: 'pc-matiere',  nom: 'Constitution et transformations de la matière', matiere: 'physique' },
  { id: 'pc-mvt',      nom: 'Mouvement et interactions',                     matiere: 'physique' },
  { id: 'pc-energie',  nom: 'L’énergie : conversions et transferts',         matiere: 'physique' },
  { id: 'pc-ondes',    nom: 'Ondes et signaux',                              matiere: 'physique' },
  { id: 'pc-methode',  nom: 'Mesure et méthodes',                            matiere: 'physique' }
);

/* les formules de ce fichier sont ecrites dans la mini-syntaxe maths :
   on les fait passer par le moteur de rendu avant de les encadrer */
function formM(f, leg){ return form(M(f), leg); }

const CHAPITRES_PC = [
{
  id: 'pc-suivi', bloc: 'pc-matiere', titre: 'Suivi d’une transformation chimique',
  resume: 'Quantité de matière, avancement, réactif limitant.',
  capacites: [
    'Déterminer la quantité de matière contenue dans un échantillon, à partir de sa masse, de son volume ou de sa concentration.',
    'Établir un tableau d’avancement et déterminer l’avancement maximal et le réactif limitant.',
    'Déterminer la composition du système dans l’état final.',
    'Mettre en œuvre une méthode de suivi de l’évolution d’un système, notamment par spectrophotométrie.',
    'Réaliser une dilution et déterminer la concentration d’une solution.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Toute la chimie de l’année repose sur une seule question : <b>combien y en a-t-il ?</b> ' +
      'La quantité de matière est l’unité de compte du chimiste, et le tableau d’avancement est la comptabilité ' +
      'de la transformation.</p>' },
    { k: 'def', t: 'Les trois façons de compter la matière', c:
      formM('n = frac{m}{M}', 'à partir d’une masse · n en mol, m en g, M en g·mol⁻¹') +
      formM('n = C × V', 'à partir d’une solution · C en mol·L⁻¹, V en L') +
      formM('n = frac{V}{V_m}', 'pour un gaz · V<sub>m</sub> ≈ 24 L·mol⁻¹ à 20 °C et pression ordinaire') +
      '<p>La constante d’Avogadro vaut N<sub>A</sub> = 6,02 × 10<sup>23</sup> mol<sup>-1</sup> : ' +
      'une mole contient ce nombre d’entités.</p>' },
    { k: 'meth', t: 'Le tableau d’avancement', c:
      '<p>Pour une réaction <i>a</i> A + <i>b</i> B → <i>c</i> C, on note <i>x</i> l’avancement, en moles.</p>' +
      '<ul><li>État initial : n(A) = n<sub>0</sub>(A), n(B) = n<sub>0</sub>(B), n(C) = 0.</li>' +
      '<li>État intermédiaire : n(A) = n<sub>0</sub>(A) - <i>a</i>x · n(B) = n<sub>0</sub>(B) - <i>b</i>x · n(C) = <i>c</i>x.</li>' +
      '<li>État final : l’un des réactifs s’épuise.</li></ul>' +
      '<p>Le <b>réactif limitant</b> est celui qui donne le plus petit quotient :</p>' +
      formM('x_{max} = @min(frac{n_0(A)}{a} ; frac{n_0(B)}{b})', 'on compare les quotients, pas les quantités brutes') },
    { k: 'prop', t: 'La dilution', c:
      '<p>Diluer conserve la quantité de matière de soluté : ce qui est dans la fiole vient de la pipette.</p>' +
      formM('C_1 × V_1 = C_2 × V_2', 'indice 1 = solution mère · indice 2 = solution fille') +
      '<p>Le <b>facteur de dilution</b> vaut F = C<sub>1</sub>/C<sub>2</sub> = V<sub>2</sub>/V<sub>1</sub>.</p>' },
    { k: 'prop', t: 'La loi de Beer-Lambert', c:
      '<p>Pour une espèce colorée en solution, l’absorbance est <b>proportionnelle</b> à la concentration :</p>' +
      formM('A = k × C', 'A est sans unité · k dépend de l’espèce, de la longueur d’onde et de la cuve') +
      '<p>C’est ce qui permet de suivre une transformation au spectrophotomètre : on mesure A, on en déduit C.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Toujours <b>convertir avant de calculer</b> : les volumes en litres, les masses en grammes.</li>' +
      '<li>Le réactif limitant ne se devine pas : il se trouve en <b>divisant par le coefficient stœchiométrique</b>. ' +
      'Le réactif le moins abondant n’est pas forcément le limitant.</li>' +
      '<li>Vérifier son avancement final : aucune quantité de matière ne peut être négative.</li></ul>' }
  ]
},
{
  id: 'pc-entites', bloc: 'pc-matiere', titre: 'Structure des entités et propriétés',
  resume: 'Électronégativité, polarité, solubilité, solvants.',
  capacites: [
    'Déterminer le schéma de Lewis et la géométrie d’entités de type AX₄, AX₃E et AX₂E₂.',
    'Utiliser l’électronégativité pour prévoir la polarisation d’une liaison.',
    'Déterminer le caractère polaire ou apolaire d’une entité moléculaire.',
    'Interpréter la solubilité d’une espèce dans un solvant, et le caractère amphiphile d’une espèce.',
    'Choisir un solvant adapté à une extraction.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Pourquoi l’huile ne se mélange-t-elle pas à l’eau ? Pourquoi le sel s’y dissout-il ? ' +
      'Ce chapitre répond par la <b>structure</b> des molécules : la forme et la répartition des charges ' +
      'expliquent le comportement macroscopique.</p>' },
    { k: 'def', t: 'Électronégativité et polarité', c:
      '<p>L’<b>électronégativité</b> mesure la capacité d’un atome à attirer vers lui les électrons d’une liaison. ' +
      'Elle augmente de la gauche vers la droite d’une période, et du bas vers le haut d’une colonne.</p>' +
      '<ul><li>Deux atomes <b>identiques</b> → liaison <b>apolaire</b>.</li>' +
      '<li>Deux atomes d’électronégativités <b>différentes</b> → liaison <b>polarisée</b>, ' +
      'notée δ+ et δ-.</li></ul>' +
      '<p>Une molécule est <b>polaire</b> si elle possède des liaisons polarisées <b>et</b> si sa géométrie ' +
      'ne les compense pas. C’est le cas de l’eau, coudée. Le dioxyde de carbone, linéaire et symétrique, ' +
      'est apolaire malgré ses liaisons polarisées.</p>' },
    { k: 'prop', t: 'La géométrie selon le nombre de doublets', c:
      '<ul><li><b>AX<sub>4</sub></b> : quatre liaisons, aucun doublet non liant → <b>tétraédrique</b>, ' +
      'comme le méthane.</li>' +
      '<li><b>AX<sub>3</sub>E</b> : trois liaisons, un doublet non liant → <b>pyramidale</b>, ' +
      'comme l’ammoniac.</li>' +
      '<li><b>AX<sub>2</sub>E<sub>2</sub></b> : deux liaisons, deux doublets non liants → <b>coudée</b>, ' +
      'comme l’eau.</li></ul>' +
      '<p>Les doublets se repoussent et se placent le plus loin possible les uns des autres : ' +
      'c’est ce qui impose la forme.</p>' },
    { k: 'prop', t: 'Qui dissout quoi', c:
      '<p>La règle tient en une phrase : <b>le semblable dissout le semblable</b>.</p>' +
      '<ul><li>Un solvant <b>polaire</b>, comme l’eau, dissout les espèces polaires et les composés ioniques.</li>' +
      '<li>Un solvant <b>apolaire</b>, comme le cyclohexane, dissout les espèces apolaires, ' +
      'comme les huiles.</li></ul>' +
      '<p>Une espèce <b>amphiphile</b>, comme un savon, possède une partie hydrophile et une partie ' +
      'hydrophobe : elle fait le lien entre les deux mondes, et c’est pour cela qu’elle lave.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais conclure à la polarité d’une molécule à partir des seules liaisons : ' +
      'il faut examiner la <b>géométrie</b>. CO<sub>2</sub> est le contre-exemple à retenir.</li>' +
      '<li>Pour une extraction, deux critères : la <b>solubilité</b> de l’espèce et la <b>miscibilité</b> ' +
      'des solvants entre eux.</li>' +
      '<li>Comparer les <b>densités</b> pour savoir quelle phase est au-dessus dans l’ampoule à décanter.</li></ul>' }
  ]
},
{
  id: 'pc-synthese', bloc: 'pc-matiere', titre: 'Synthèses et combustions',
  resume: 'Nomenclature, familles fonctionnelles, énergie de combustion.',
  capacites: [
    'Passer du nom à la formule semi-développée et inversement, pour des alcanes, alcools, aldéhydes, cétones et acides carboxyliques.',
    'Identifier le groupe caractéristique et la famille fonctionnelle d’une espèce.',
    'Écrire et équilibrer l’équation d’une combustion.',
    'Estimer l’énergie libérée lors d’une combustion et discuter les enjeux associés.'
  ],
  cours: [
    { k: 'def', t: 'Les familles à connaître', c:
      '<ul><li><b>Alcane</b> : uniquement C et H, liaisons simples. Suffixe <b>-ane</b>.</li>' +
      '<li><b>Alcool</b> : groupe hydroxyle <b>-OH</b> porté par un carbone tétraédrique. Suffixe <b>-ol</b>.</li>' +
      '<li><b>Aldéhyde</b> : groupe carbonyle en <b>bout</b> de chaîne. Suffixe <b>-al</b>.</li>' +
      '<li><b>Cétone</b> : groupe carbonyle <b>à l’intérieur</b> de la chaîne. Suffixe <b>-one</b>.</li>' +
      '<li><b>Acide carboxylique</b> : groupe <b>-COOH</b>. Préfixe <b>acide</b> et suffixe <b>-oïque</b>.</li></ul>' +
      '<p>La différence entre aldéhyde et cétone n’est pas le groupe, c’est sa <b>position</b>.</p>' },
    { k: 'prop', t: 'Nommer une chaîne carbonée', c:
      '<p>Le préfixe dit le nombre de carbones de la chaîne principale :</p>' +
      '<ul class="dates">' +
      '<li><b>méth-</b> <span>1 carbone</span></li><li><b>éth-</b> <span>2</span></li>' +
      '<li><b>prop-</b> <span>3</span></li><li><b>but-</b> <span>4</span></li>' +
      '<li><b>pent-</b> <span>5</span></li><li><b>hex-</b> <span>6</span></li>' +
      '<li><b>hept-</b> <span>7</span></li><li><b>oct-</b> <span>8</span></li></ul>' +
      '<p>On numérote la chaîne de façon à donner au groupe caractéristique le plus petit indice possible.</p>' },
    { k: 'meth', t: 'Équilibrer une combustion', c:
      '<p>Une combustion complète dans le dioxygène donne du dioxyde de carbone et de l’eau.</p>' +
      formM('C_xH_y + (x + frac{y}{4}) O_2 → x CO_2 + frac{y}{2} H_2O', 'pour un alcane de formule CxHy') +
      '<p>Méthode : équilibrer d’abord le <b>carbone</b>, puis l’<b>hydrogène</b>, ' +
      'et enfin l’<b>oxygène</b>, quitte à passer par des coefficients fractionnaires que l’on double ensuite.</p>' },
    { k: 'prop', t: 'L’énergie libérée', c:
      formM('E = m × PC', 'énergie libérée = masse brûlée × pouvoir calorifique, en J·g⁻¹ ou MJ·kg⁻¹') +
      '<p>Une combustion est <b>exothermique</b> : elle libère de l’énergie vers l’extérieur. ' +
      'Par convention, l’énergie de réaction est alors comptée <b>négativement</b> pour le système.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Pour trancher entre aldéhyde et cétone, regarder si le carbone du groupe C=O porte un <b>H</b> : ' +
      'si oui, c’est un aldéhyde.</li>' +
      '<li>Une équation non équilibrée invalide tout le tableau d’avancement qui suit : ' +
      'vérifier avant de continuer.</li>' +
      '<li>Combustion <b>incomplète</b> : elle produit du monoxyde de carbone CO, toxique, ' +
      'et des particules. C’est l’enjeu de santé du chapitre.</li></ul>' }
  ]
},
{
  id: 'pc-champs', bloc: 'pc-mvt', titre: 'Interactions et champs',
  resume: 'Gravitation, électrostatique, notion de champ.',
  capacites: [
    'Utiliser l’expression de la force de gravitation et celle du champ de gravitation.',
    'Utiliser l’expression de la force électrostatique et celle du champ électrostatique.',
    'Caractériser un champ uniforme et représenter des lignes de champ.',
    'Comparer les intensités des interactions gravitationnelle et électrostatique.'
  ],
  cours: [
    { k: 'def', t: 'Les deux lois en 1/d²', c:
      formM('F = G × frac{m_A × m_B}{d^{2}}', 'gravitation · G = 6,67 × 10⁻¹¹ N·m²·kg⁻²') +
      formM('F = k × frac{|q_A × q_B|}{d^{2}}', 'électrostatique · k = 9,0 × 10⁹ N·m²·C⁻²') +
      '<p>Même forme, deux différences majeures : la gravitation est <b>toujours attractive</b>, ' +
      'l’interaction électrostatique peut être attractive ou <b>répulsive</b> ; et l’électrostatique ' +
      'est immensément plus intense à l’échelle des particules.</p>' },
    { k: 'def', t: 'La notion de champ', c:
      '<p>Un champ associe une grandeur à <b>chaque point</b> de l’espace. Il permet de décrire une action ' +
      'à distance sans parler de la seconde masse ou de la seconde charge.</p>' +
      formM('vec{F} = m × vec{g}&nbsp;&nbsp;·&nbsp;&nbsp;vec{F} = q × vec{E}', 'la force subie se déduit du champ') +
      formM('g = G × frac{M}{d^{2}}', 'champ de gravitation créé par un astre de masse M') +
      '<p>Un champ est dit <b>uniforme</b> dans une zone s’il y a partout la même direction, le même sens ' +
      'et la même valeur. Ses lignes de champ y sont des droites parallèles.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La distance est <b>au carré</b> : doubler la distance divise la force par <b>4</b>, pas par 2.</li>' +
      '<li>Le champ ne dépend <b>que</b> de la source, pas de l’objet qui le subit. C’est tout l’intérêt de la notion.</li>' +
      '<li>Sur Terre, g ≈ 9,8 N·kg⁻¹ : c’est le champ de gravitation, et c’est aussi ' +
      'l’accélération de la pesanteur.</li></ul>' }
  ]
},
{
  id: 'pc-fluide', bloc: 'pc-mvt', titre: 'Un fluide au repos',
  resume: 'Pression, loi de Boyle-Mariotte, statique des fluides.',
  capacites: [
    'Utiliser la relation entre pression, force pressante et surface.',
    'Exploiter la loi de Mariotte pour un gaz à température constante.',
    'Utiliser la loi fondamentale de la statique des fluides pour un fluide incompressible.',
    'Expliquer qualitativement l’évolution de la pression avec la profondeur ou l’altitude.'
  ],
  cours: [
    { k: 'def', t: 'La pression', c:
      formM('p = frac{F}{S}', 'p en pascals (Pa) · F en newtons · S en mètres carrés') +
      '<p>Repères : 1 bar = 10<sup>5</sup> Pa, et la pression atmosphérique au niveau de la mer vaut ' +
      'environ <b>1,013 × 10<sup>5</sup> Pa</b>.</p>' },
    { k: 'prop', t: 'La loi de Mariotte', c:
      '<p>Pour une quantité fixée de gaz, à <b>température constante</b> :</p>' +
      formM('p × V = @constante&nbsp;&nbsp;donc&nbsp;&nbsp;p_1 V_1 = p_2 V_2', 'comprimer de moitié double la pression') +
      '<p>C’est ce qui explique qu’une bulle d’air remonte en grossissant, ou qu’une seringue bouchée résiste.</p>' },
    { k: 'prop', t: 'La statique des fluides', c:
      '<p>Dans un fluide <b>incompressible</b> au repos, la pression augmente avec la profondeur :</p>' +
      formM('p_B - p_A = ρ × g × (z_A - z_B)', 'ρ en kg·m⁻³ · g ≈ 9,8 N·kg⁻¹ · z = altitude') +
      '<p>Cas courant : à la profondeur h sous la surface,</p>' +
      formM('p = p_{atm} + ρ g h', 'dans l’eau, ρ = 1000 kg·m⁻³, soit environ +1 bar tous les 10 mètres') },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La pression dans un liquide ne dépend <b>pas</b> de la forme du récipient, seulement ' +
      'de la <b>profondeur</b>. C’est le paradoxe hydrostatique.</li>' +
      '<li>Mariotte ne s’applique qu’aux <b>gaz</b>, et à température constante. ' +
      'La statique des fluides, elle, vaut pour les fluides <b>incompressibles</b>.</li>' +
      '<li>Repère utile en plongée : environ 1 bar de plus tous les 10 m d’eau.</li></ul>' }
  ]
},
{
  id: 'pc-mouvement', bloc: 'pc-mvt', titre: 'Mouvement d’un système',
  resume: 'Vitesse, variation de vitesse, deuxième loi de Newton.',
  capacites: [
    'Caractériser le mouvement d’un système : trajectoire, vitesse, variation de vitesse.',
    'Construire le vecteur variation de vitesse à partir de deux vecteurs vitesse.',
    'Relier la variation du vecteur vitesse à l’existence d’une force résultante non nulle.',
    'Exploiter la deuxième loi de Newton dans des cas simples.'
  ],
  cours: [
    { k: 'def', t: 'Vitesse et variation de vitesse', c:
      formM('v = frac{d}{Δt}', 'vitesse moyenne, en m·s⁻¹') +
      '<p>Le <b>vecteur variation de vitesse</b> entre deux instants se construit ainsi :</p>' +
      formM('Δvec{v} = vec{v_2} - vec{v_1}', 'on trace v₂, puis l’opposé de v₁, et on les additionne') +
      '<p>Il pointe dans la même direction et le même sens que la <b>force résultante</b>.</p>' },
    { k: 'prop', t: 'Les deux premières lois de Newton', c:
      '<p><b>Principe d’inertie</b> : si la somme des forces est nulle, le mouvement est rectiligne uniforme ' +
      'ou le corps est au repos. Et réciproquement.</p>' +
      '<p><b>Deuxième loi</b> : la variation du vecteur vitesse est liée à la force résultante.</p>' +
      formM('Σ vec{F} = m × vec{a}', 'la force résultante et l’accélération ont même direction et même sens') +
      '<p>Conséquence directe : un mouvement dont la vitesse <b>change de valeur ou de direction</b> ' +
      'suppose une force résultante non nulle. Un virage à vitesse constante en est un exemple.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>« Vitesse constante » ne veut pas dire « vecteur vitesse constant » : ' +
      'dans un virage, la valeur ne change pas mais la <b>direction</b> si.</li>' +
      '<li>Toujours convertir : 1 km·h⁻¹ = 1/3,6 m·s⁻¹. Diviser par 3,6 pour passer des km/h aux m/s.</li>' +
      '<li>Sur un enregistrement, la vitesse en un point se calcule avec les points <b>encadrants</b>, ' +
      'pas avec le point lui-même.</li></ul>' }
  ]
},
{
  id: 'pc-elec', bloc: 'pc-energie', titre: 'Énergie et phénomènes électriques',
  resume: 'Puissance, énergie, rendement, effet Joule.',
  capacites: [
    'Utiliser les expressions de la puissance et de l’énergie électriques.',
    'Distinguer une source idéale de tension et une source réelle.',
    'Établir un bilan énergétique pour un dipôle et calculer un rendement.',
    'Identifier les conversions d’énergie mises en jeu.'
  ],
  cours: [
    { k: 'def', t: 'Puissance et énergie', c:
      formM('P = U × I', 'P en watts · U en volts · I en ampères') +
      formM('E = P × Δt = U × I × Δt', 'E en joules si Δt est en secondes') +
      '<p>Pour un conducteur ohmique de résistance R, la loi d’Ohm U = R I donne aussi :</p>' +
      formM('P = R I^{2} = frac{U^{2}}{R}', 'c’est l’effet Joule : toute l’énergie est dissipée en chaleur') },
    { k: 'prop', t: 'Rendement', c:
      formM('η = frac{E_{utile}}{E_{absorbée}}', 'sans unité, toujours compris entre 0 et 1') +
      '<p>Le complément est l’énergie <b>perdue</b>, le plus souvent sous forme thermique. ' +
      'Un rendement supérieur à 1 est impossible : c’est un signal d’erreur de calcul.</p>' +
      '<p>Conversion utile : 1 kWh = 3,6 × 10<sup>6</sup> J.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Vérifier les <b>unités</b> avant de conclure : des watts multipliés par des heures ' +
      'donnent des wattheures, pas des joules.</li>' +
      '<li>Un rendement s’exprime souvent en pourcentage, mais il reste un <b>rapport de deux énergies ' +
      'de même nature</b>.</li>' +
      '<li>Une source réelle a une résistance interne : sa tension diminue quand le courant augmente.</li></ul>' }
  ]
},
{
  id: 'pc-meca', bloc: 'pc-energie', titre: 'Énergie et phénomènes mécaniques',
  resume: 'Travail, énergie cinétique, énergie potentielle.',
  capacites: [
    'Utiliser l’expression du travail d’une force constante.',
    'Utiliser les expressions de l’énergie cinétique et de l’énergie potentielle de pesanteur.',
    'Exploiter la conservation de l’énergie mécanique et identifier les cas de non-conservation.',
    'Établir un bilan énergétique pour un système en mouvement.'
  ],
  cours: [
    { k: 'def', t: 'Les trois énergies', c:
      formM('E_c = frac{1}{2} m v^{2}', 'énergie cinétique, en joules · m en kg, v en m·s⁻¹') +
      formM('E_{pp} = m g z', 'énergie potentielle de pesanteur · z mesurée depuis une origine choisie') +
      formM('E_m = E_c + E_{pp}', 'énergie mécanique') },
    { k: 'def', t: 'Le travail d’une force', c:
      formM('W = F × d × @cos(α)', 'α est l’angle entre la force et le déplacement') +
      '<ul><li>Force dans le <b>sens</b> du déplacement (α = 0) → travail <b>moteur</b>, positif.</li>' +
      '<li>Force <b>opposée</b> (α = 180°) → travail <b>résistant</b>, négatif.</li>' +
      '<li>Force <b>perpendiculaire</b> (α = 90°) → travail <b>nul</b>.</li></ul>' },
    { k: 'prop', t: 'Conservation, ou non', c:
      '<p>En l’absence de frottements, l’énergie mécanique se <b>conserve</b> : ce que l’on perd en altitude, ' +
      'on le gagne en vitesse.</p>' +
      formM('E_m = @constante&nbsp;&nbsp;donc&nbsp;&nbsp;frac{1}{2} m v_A^{2} + m g z_A = frac{1}{2} m v_B^{2} + m g z_B',
           'la masse se simplifie : la vitesse atteinte ne dépend pas de la masse') +
      '<p>Avec frottements, l’énergie mécanique <b>diminue</b> : la différence est dissipée sous forme thermique.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>L’énergie cinétique varie comme le <b>carré</b> de la vitesse : rouler deux fois plus vite ' +
      'multiplie l’énergie à dissiper par <b>quatre</b>. C’est l’argument sécurité routière du chapitre.</li>' +
      '<li>Le choix de l’origine des altitudes est <b>libre</b>, mais il doit être annoncé et gardé.</li>' +
      '<li>Si l’énergie mécanique diminue, chercher les frottements : ils sont la réponse attendue.</li></ul>' }
  ]
},
{
  id: 'pc-ondes', bloc: 'pc-ondes', titre: 'Les ondes mécaniques',
  resume: 'Célérité, période, longueur d’onde, retard.',
  capacites: [
    'Définir une onde mécanique progressive et sa célérité.',
    'Exploiter la relation entre retard, distance et célérité.',
    'Utiliser la double périodicité et la relation entre longueur d’onde, célérité et fréquence.',
    'Exploiter un enregistrement pour déterminer une période, une fréquence ou une célérité.'
  ],
  cours: [
    { k: 'def', t: 'Célérité et retard', c:
      '<p>Une onde mécanique progressive transporte de l’<b>énergie</b> sans transporter de matière.</p>' +
      formM('v = frac{d}{Δt}&nbsp;&nbsp;donc&nbsp;&nbsp;Δt = frac{d}{v}', 'le retard entre deux points est le temps de parcours') +
      '<p>La célérité dépend du <b>milieu</b>, pas de la source. Dans l’air, le son se propage à environ ' +
      '<b>340 m·s⁻¹</b> ; dans l’eau, environ 1500 m·s⁻¹ ; dans l’acier, environ 5000 m·s⁻¹.</p>' },
    { k: 'def', t: 'La double périodicité', c:
      '<p>Une onde périodique est périodique <b>dans le temps</b>, de période T, et <b>dans l’espace</b>, ' +
      'de longueur d’onde λ.</p>' +
      formM('λ = v × T = frac{v}{f}', 'λ en mètres · T en secondes · f en hertz') +
      '<p>La <b>fréquence</b> est imposée par la source et ne change pas quand l’onde change de milieu. ' +
      'La <b>longueur d’onde</b>, elle, dépend du milieu, puisqu’elle dépend de la célérité.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>λ dépend <b>à la fois</b> de la source et du milieu. La fréquence ne dépend que de la source. ' +
      'C’est le point que les correcteurs vérifient.</li>' +
      '<li>f = 1/T : une fréquence en hertz est l’inverse d’une durée en secondes.</li>' +
      '<li>Pour localiser un séisme ou un orage, on exploite le <b>retard</b> entre deux ondes ' +
      'de célérités différentes.</li></ul>' }
  ]
},
{
  id: 'pc-lumiere', bloc: 'pc-ondes', titre: 'La lumière',
  resume: 'Lentilles, images, couleurs, photon.',
  capacites: [
    'Utiliser la relation de conjugaison et le grandissement d’une lentille mince convergente.',
    'Exploiter le modèle ondulatoire de la lumière et la relation entre longueur d’onde et couleur.',
    'Exploiter le modèle particulaire et la relation entre énergie d’un photon et longueur d’onde.',
    'Interpréter un spectre d’émission ou d’absorption.'
  ],
  cours: [
    { k: 'prop', t: 'Les lentilles minces convergentes', c:
      formM('frac{1}{@OA\'} - frac{1}{@OA} = frac{1}{@OF\'}', 'relation de conjugaison · distances algébriques, en mètres') +
      formM('γ = frac{@A\'@B\'}{@AB} = frac{@OA\'}{@OA}', 'grandissement · négatif si l’image est renversée') +
      '<p>La <b>vergence</b> est l’inverse de la distance focale : C = 1/f′, en dioptries. ' +
      'Une lentille de 5 dioptries a une focale de 20 cm.</p>' },
    { k: 'def', t: 'Deux modèles pour la lumière', c:
      '<p><b>Modèle ondulatoire</b> : la lumière est une onde électromagnétique, caractérisée ' +
      'par sa longueur d’onde. Le visible s’étend d’environ <b>400 nm</b> (violet) à <b>800 nm</b> (rouge).</p>' +
      '<p><b>Modèle particulaire</b> : la lumière est constituée de photons, grains d’énergie.</p>' +
      formM('E = frac{h c}{λ}', 'h = 6,63 × 10⁻³⁴ J·s · c = 3,00 × 10⁸ m·s⁻¹ · λ en mètres') +
      '<p>Plus la longueur d’onde est <b>courte</b>, plus le photon est <b>énergétique</b> : ' +
      'c’est pourquoi les ultraviolets sont dangereux et pas les infrarouges.</p>' },
    { k: 'prop', t: 'Les spectres', c:
      '<ul><li>Un spectre <b>continu</b> est émis par un corps chaud ; son allure dépend de la température.</li>' +
      '<li>Un spectre de <b>raies d’émission</b> est la signature d’une entité chimique : ' +
      'chaque raie correspond à une transition d’énergie.</li>' +
      '<li>Un spectre de <b>raies d’absorption</b> montre les mêmes raies, en sombre : ' +
      'c’est ainsi que l’on identifie les éléments d’une atmosphère stellaire.</li></ul>' +
      '<p>L’énergie d’une transition est la différence entre deux niveaux : ΔE = E<sub>2</sub> - E<sub>1</sub> = hc/λ.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Convertir les longueurs d’onde en <b>mètres</b> avant d’appliquer E = hc/λ : ' +
      '500 nm = 500 × 10<sup>-9</sup> m.</li>' +
      '<li>Un grandissement <b>négatif</b> signifie une image renversée ; sa valeur absolue supérieure à 1 ' +
      'signifie une image agrandie.</li>' +
      '<li>Les raies d’un élément sont les mêmes en émission et en absorption : c’est la clé de l’analyse spectrale.</li></ul>' }
  ]
},
{
  id: 'pc-mesure', bloc: 'pc-methode', titre: 'Mesure et incertitudes',
  resume: 'Chiffres significatifs, dispersion, écart relatif.',
  capacites: [
    'Exprimer un résultat avec un nombre de chiffres significatifs cohérent.',
    'Évaluer qualitativement la dispersion d’une série de mesures.',
    'Calculer un écart relatif entre une valeur mesurée et une valeur de référence.',
    'Discuter la validité d’un résultat expérimental.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le chapitre transversal du programme : il s’applique à toutes les mesures de l’année, ' +
      'et il est évalué aux ECE. Une valeur sans unité ni chiffres significatifs cohérents est une valeur fausse.</p>' },
    { k: 'meth', t: 'Les chiffres significatifs', c:
      '<ul><li>Dans une <b>multiplication</b> ou une <b>division</b>, le résultat garde autant de chiffres ' +
      'significatifs que la donnée qui en a le <b>moins</b>.</li>' +
      '<li>Dans une <b>addition</b>, on garde le nombre de décimales de la donnée la moins précise.</li>' +
      '<li>Les zéros de tête ne comptent pas : 0,0025 a <b>deux</b> chiffres significatifs.</li></ul>' },
    { k: 'def', t: 'L’écart relatif', c:
      formM('écart relatif = frac{|valeur mesurée - valeur de référence|}{valeur de référence} × 100',
           'en pourcentage') +
      '<p>C’est lui qui permet de juger un résultat : un écart de quelques pour cent est ordinaire, ' +
      'un écart de 50 % signale une erreur de méthode ou de conversion.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Répéter la mesure et prendre la <b>moyenne</b> réduit l’effet des erreurs aléatoires. ' +
      'Cela ne corrige pas une erreur <b>systématique</b>, qui décale toutes les mesures du même côté.</li>' +
      '<li>Un résultat s’écrit toujours avec son <b>unité</b>.</li>' +
      '<li>Ne jamais recopier les douze chiffres de la calculatrice : c’est une faute, pas une précision.</li></ul>' }
  ]
}
];

CHAPITRES_PC.forEach(c => {
  c.gens = [];
  c.matiere = 'physique';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
