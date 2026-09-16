/* =========================================================================
   MATIÈRE : français, première générale.

   Programme : arrêté du 17 janvier 2019 modifié.
   Œuvres : note de service du 4 juillet 2025 (BO n°30 du 24 juillet 2025,
   NOR MENE2518792N), programme national d'œuvres pour l'année scolaire
   2026-2027 et les épreuves anticipées de la session 2028.
   Le roman est l'objet d'étude renouvelé cette année.

   Épreuve écrite : 4 heures, coefficient 5, au choix commentaire (20 points)
   ou dissertation sur une des œuvres étudiées (20 points).
   Épreuve orale : coefficient 5, explication linéaire sur 8 points,
   question de grammaire sur 2 points, lecture expressive sur 2 points,
   entretien sur une œuvre choisie sur 8 points.
   ========================================================================= */

MAT['francais'].pret = true;

BLOCS.push(
  { id: 'fr-oe',       nom: 'Les quatre objets d’étude', matiere: 'francais' },
  { id: 'fr-outils',   nom: 'Outils d’analyse',          matiere: 'francais' },
  { id: 'fr-epreuves', nom: 'Les épreuves',              matiere: 'francais' }
);

/* fabrique le bloc « les trois œuvres au programme » d'un objet d'étude */
function oeuvresAuProgramme(liste){
  return { k: 'def', t: 'Les trois œuvres au programme 2026-2027', c:
    '<p>Ton professeur en choisit <b>une</b>, avec son parcours associé. C’est celle-là que tu dois connaître en profondeur, ' +
    'et c’est sur elle que portera ton sujet de dissertation.</p>' +
    '<ul>' + liste.map(o =>
      '<li><b>' + o[0] + '</b>, <i>' + o[1] + '</i><br><span class="tiny">parcours : ' + o[2] + '</span></li>').join('') +
    '</ul>' };
}

const CHAPITRES_FR = [
{
  id: 'fr-poesie', bloc: 'fr-oe', titre: 'La poésie du XIXe au XXIe siècle',
  resume: 'Rimbaud, Ponge, Dorion. Le poème et son travail.',
  capacites: [
    'Situer l’œuvre dans son mouvement et son siècle.',
    'Analyser la forme du poème : mètre, rimes, strophes, rythme.',
    'Repérer et interpréter les images : métaphore, comparaison, personnification.',
    'Relier le poème au parcours associé et à l’œuvre intégrale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La poésie est l’objet d’étude où l’on apprend à lire <b>lentement</b> : chaque mot, chaque son, chaque coupe compte. ' +
      'C’est aussi le plus rentable à l’oral, parce qu’un poème court se prête bien à l’explication linéaire.</p>' },
    oeuvresAuProgramme([
      ['Rimbaud', 'Cahier de Douai', 'émancipations créatrices'],
      ['Francis Ponge', 'La rage de l’expression', 'dans l’atelier du poète'],
      ['Hélène Dorion', 'Mes forêts', 'la poésie, la nature, l’intime']
    ]),
    { k: 'prop', t: 'Trois façons très différentes d’écrire', c:
      '<ul><li><b>Rimbaud</b> (1870) : vingt-deux poèmes écrits à seize ans. La forme classique, l’alexandrin et le sonnet, ' +
      'mise au service d’une révolte et d’une liberté nouvelles. D’où le parcours : <i>émancipations créatrices</i>.</li>' +
      '<li><b>Ponge</b> (1952) : le poème devient un <b>chantier</b>. On lit les brouillons, les ratures, les tentatives. ' +
      'Le sujet n’est plus la chose décrite mais le travail pour la dire.</li>' +
      '<li><b>Dorion</b> (2021) : vers libres, poésie contemporaine québécoise. La forêt comme paysage intérieur, ' +
      'le lien entre le vivant et l’intime.</li></ul>' },
    { k: 'meth', t: 'Lire un poème sans réciter le cours', c:
      '<ul><li>1. <b>Lire à voix haute</b> : le rythme et les sons livrent déjà la moitié du sens.</li>' +
      '<li>2. Repérer la <b>forme</b> : mètre, rimes, strophes, et surtout les endroits où la forme <b>se casse</b> (enjambement, rejet, vers faux).</li>' +
      '<li>3. Suivre le <b>mouvement du texte</b> : où bascule-t-il ? C’est cette bascule qui donne le plan de l’explication linéaire.</li>' +
      '<li>4. Interpréter les <b>images</b>, jamais isolément : une métaphore prend sens dans son réseau.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais dire « il y a une métaphore » sans dire <b>ce qu’elle produit</b>. Le procédé seul ne vaut aucun point.</li>' +
      '<li>Une rupture de forme est toujours volontaire : un enjambement, une strophe plus courte, un mot qui déborde du vers.</li>' +
      '<li>Apprendre <b>trois citations courtes</b> par poème étudié suffit largement, à condition de savoir les placer.</li></ul>' }
  ]
},
{
  id: 'fr-idees', bloc: 'fr-oe', titre: 'La littérature d’idées du XVIe au XVIIIe siècle',
  resume: 'La Boétie, Fontenelle, Graffigny. Convaincre et persuader.',
  capacites: [
    'Repérer une thèse, des arguments, des exemples.',
    'Distinguer convaincre, persuader, délibérer.',
    'Analyser les procédés de l’argumentation, directe ou indirecte, et l’ironie.',
    'Situer le texte dans son contexte historique, notamment humaniste ou des Lumières.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est l’objet d’étude qui apprend à <b>repérer comment on cherche à vous convaincre</b> : par la raison, ' +
      'par l’émotion, par l’ironie, par la mise en scène. Une compétence qui dépasse très largement le cours de français.</p>' },
    oeuvresAuProgramme([
      ['Étienne de La Boétie', 'Discours de la servitude volontaire', '« Défendre » et « entretenir » la liberté'],
      ['Fontenelle', 'Entretiens sur la pluralité des mondes', 'le goût de la science'],
      ['Françoise de Graffigny', 'Lettres d’une Péruvienne', '« un nouvel univers s’est offert à mes yeux »']
    ]),
    { k: 'prop', t: 'Trois manières d’argumenter', c:
      '<ul><li><b>La Boétie</b> (1576) : un texte de révolte. Pourquoi les peuples obéissent-ils à un seul homme ? ' +
      'Argumentation <b>directe</b>, portée par l’indignation, les questions rhétoriques et les images fortes.</li>' +
      '<li><b>Fontenelle</b> (1686) : la science expliquée sous forme de <b>dialogue</b> galant avec une marquise, ' +
      'la nuit, dans un parc. Vulgariser sans ennuyer, c’est déjà une stratégie argumentative.</li>' +
      '<li><b>Graffigny</b> (1747) : un <b>roman épistolaire</b>. Une Péruvienne enlevée découvre la France et la décrit ' +
      'avec les yeux d’une étrangère : le <b>regard éloigné</b> rend visibles nos absurdités.</li></ul>' },
    { k: 'def', t: 'Convaincre, persuader, délibérer', c:
      '<ul><li><b>Convaincre</b> : s’adresser à la <b>raison</b>, par des arguments logiques et des preuves.</li>' +
      '<li><b>Persuader</b> : s’adresser aux <b>émotions</b>, par les images, le rythme, l’implication du lecteur.</li>' +
      '<li><b>Délibérer</b> : peser le pour et le contre avant de trancher.</li></ul>' +
      '<p>Argumentation <b>directe</b> : l’auteur dit ce qu’il pense. <b>Indirecte</b> : il passe par une fiction, un apologue, ' +
      'un dialogue, un regard naïf.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Repérer le <b>destinataire</b> : à qui l’auteur parle-t-il ? Cela explique presque tous ses choix.</li>' +
      '<li>L’<b>ironie</b> se repère à un décalage : entre ce qui est dit et ce qui est pensé, entre le ton et le sujet.</li>' +
      '<li>Les questions rhétoriques, les impératifs et le « nous » servent à <b>embarquer</b> le lecteur : ils persuadent plus qu’ils ne convainquent.</li></ul>' }
  ]
},
{
  id: 'fr-roman', bloc: 'fr-oe', titre: 'Le roman et le récit du Moyen Âge au XXIe siècle',
  resume: 'Chrétien de Troyes, Zola, Schwarz-Bart. Œuvres renouvelées.',
  capacites: [
    'Analyser la construction du récit : narrateur, point de vue, rythme, ellipses.',
    'Étudier la construction d’un personnage et son évolution.',
    'Relier le roman à son époque et à son courant : roman courtois, naturalisme, récit contemporain.',
    'Nourrir la dissertation par des exemples précis tirés de l’œuvre et du parcours.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p><b>C’est l’objet d’étude renouvelé pour 2026-2027</b> : les trois œuvres changent cette année. ' +
      'C’est aussi celui qui tombe le plus souvent en dissertation, parce qu’une œuvre longue offre beaucoup de matière.</p>' },
    oeuvresAuProgramme([
      ['Chrétien de Troyes', 'Le Chevalier de la charrette (édition bilingue)', 'le roman et l’invention de l’amour'],
      ['Émile Zola', 'Pot-Bouille', 'dévoiler les rouages de la société'],
      ['Simone Schwarz-Bart', 'Pluie et vent sur Télumée Miracle', 'tisser les mémoires, habiter le monde']
    ]),
    { k: 'prop', t: 'Trois romans, trois mondes', c:
      '<ul><li><b>Chrétien de Troyes</b> (vers 1180) : Lancelot, la charrette d’infamie, l’amour courtois poussé jusqu’à l’humiliation. ' +
      'Le roman <b>invente</b> une certaine idée de l’amour, celle qui nous gouverne encore.</li>' +
      '<li><b>Zola</b> (1882) : un immeuble bourgeois parisien, sa façade respectable et ce qui se passe derrière les portes. ' +
      '<b>Naturalisme</b> : le roman comme enquête sociale, qui dévoile les rouages.</li>' +
      '<li><b>Schwarz-Bart</b> (1972) : la Guadeloupe, quatre générations de femmes, l’héritage de l’esclavage. ' +
      'Une langue qui mêle le français et le créole, la mémoire et le présent.</li></ul>' },
    { k: 'def', t: 'Les outils du récit', c:
      '<ul><li><b>Narrateur</b> : qui raconte ? Interne au récit (« je ») ou extérieur.</li>' +
      '<li><b>Point de vue</b> (ou focalisation) : à travers les yeux de qui voit-on ? <b>Interne</b> (un personnage), ' +
      '<b>externe</b> (une caméra), <b>omniscient</b> (on sait tout, même les pensées).</li>' +
      '<li><b>Rythme</b> : la <b>scène</b> (temps du récit = temps de l’histoire), le <b>sommaire</b> (on résume), ' +
      'l’<b>ellipse</b> (on saute), la <b>pause</b> (description).</li>' +
      '<li><b>Ordre</b> : chronologique, ou avec retours en arrière et anticipations.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le choix du <b>point de vue</b> n’est jamais neutre : il décide de ce que le lecteur sait et ignore.</li>' +
      '<li>Une <b>ellipse</b> est un choix d’auteur : demander ce qu’on a caché, et pourquoi, fait souvent avancer l’analyse.</li>' +
      '<li>Pour la dissertation, préparer <b>cinq à six passages clés</b> de l’œuvre, capables de servir plusieurs sujets différents.</li></ul>' }
  ]
},
{
  id: 'fr-theatre', bloc: 'fr-oe', titre: 'Le théâtre du XVIIe au XXIe siècle',
  resume: 'Corneille, Musset, Sarraute. Le texte et la scène.',
  capacites: [
    'Analyser la double énonciation et les effets de la parole théâtrale.',
    'Étudier la structure d’une scène : enjeux, rapports de force, retournements.',
    'Prendre en compte la mise en scène : didascalies, espace, corps, silences.',
    'Situer la pièce dans son genre et son époque.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Au théâtre, <b>parler, c’est agir</b>. Une réplique n’informe pas : elle blesse, séduit, manipule, esquive. ' +
      'Analyser une scène, c’est repérer qui prend le pouvoir sur qui, réplique après réplique.</p>' },
    oeuvresAuProgramme([
      ['Pierre Corneille', 'Le Menteur', 'mensonge et comédie'],
      ['Alfred de Musset', 'On ne badine pas avec l’amour', 'les jeux du cœur et de la parole'],
      ['Nathalie Sarraute', 'Pour un oui ou pour un non', 'théâtre et dispute']
    ]),
    { k: 'prop', t: 'Trois pièces, trois usages de la parole', c:
      '<ul><li><b>Corneille</b> (1644) : une comédie où le héros ment sans arrêt, par plaisir et par virtuosité. ' +
      'Le mensonge devient un art, et le moteur de l’intrigue.</li>' +
      '<li><b>Musset</b> (1834) : un drame romantique. On joue avec l’amour par orgueil, et cela finit mal. ' +
      'Le badinage y est une arme, et une faute.</li>' +
      '<li><b>Sarraute</b> (1982) : deux amis se déchirent à cause d’une phrase anodine, « c’est bien, ça ». ' +
      'Tout le théâtre tient dans les <b>sous-entendus</b> et les silences.</li></ul>' },
    { k: 'def', t: 'La double énonciation', c:
      '<p>Un personnage parle à un autre personnage <b>et</b>, en même temps, l’auteur parle au public. ' +
      'Une même réplique a donc toujours deux destinataires.</p>' +
      '<p>C’est ce qui rend possibles l’<b>aside</b> (l’aparté), le <b>quiproquo</b>, l’<b>ironie tragique</b> : ' +
      'le spectateur sait ce que le personnage ignore.</p>' },
    { k: 'meth', t: 'Analyser une scène', c:
      '<ul><li>Qui <b>veut</b> quoi ? L’enjeu de la scène se formule en une phrase.</li>' +
      '<li>Qui <b>parle le plus</b> ? La longueur des répliques dit le rapport de force, et son basculement.</li>' +
      '<li>Que disent les <b>didascalies</b> ? Elles portent le corps, l’espace, le ton.</li>' +
      '<li>Comment la scène <b>finit-elle</b> ? Une scène de théâtre se juge à son point de bascule.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Toujours penser <b>représentation</b> : un texte de théâtre est fait pour être joué, pas lu.</li>' +
      '<li>Les <b>silences</b> et les interruptions comptent autant que les mots, surtout chez Sarraute.</li>' +
      '<li>Comparer deux <b>mises en scène</b> d’un même passage est un excellent argument d’entretien à l’oral.</li></ul>' }
  ]
},
{
  id: 'fr-grammaire', bloc: 'fr-outils', titre: 'Grammaire',
  resume: 'Subordonnées, négation, interrogation. 2 points à l’oral.',
  capacites: [
    'Distinguer juxtaposition, coordination et subordination.',
    'Identifier une proposition subordonnée relative, conjonctive ou interrogative indirecte, et donner sa fonction.',
    'Analyser l’interrogation : directe ou indirecte, totale ou partielle.',
    'Analyser l’expression de la négation : totale ou partielle, syntaxique ou lexicale.',
    'Mener l’analyse syntaxique d’une courte phrase, comme à l’oral de l’EAF.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p><b>Deux points sur vingt à l’oral</b>, sur une seule question, posée au moment du tirage et portant sur le texte. ' +
      'Deux points faciles à prendre, et faciles à perdre.</p>' +
      '<p>Et au-delà de la note : comprendre la construction d’une phrase, c’est comprendre le texte.</p>' },
    { k: 'def', t: 'Les trois façons de relier des propositions', c:
      '<ul><li><b>Juxtaposition</b> : virgule, point-virgule, deux-points. <i>Il pleut, je reste.</i></li>' +
      '<li><b>Coordination</b> : mais, ou, et, donc, or, ni, car. <i>Il pleut <b>donc</b> je reste.</i></li>' +
      '<li><b>Subordination</b> : une proposition dépend d’une autre. <i><b>Comme</b> il pleut, je reste.</i></li></ul>' },
    { k: 'prop', t: 'Les trois subordonnées à connaître', c:
      '<ul><li><b>Relative</b> : introduite par un pronom relatif (qui, que, dont, où, lequel…). ' +
      'Elle complète un <b>nom</b> : c’est son antécédent. <i>Le livre <b>que je lis</b> est court.</i> → complément de l’antécédent « livre ».</li>' +
      '<li><b>Conjonctive complétive</b> : introduite par <b>que</b>, elle complète un <b>verbe</b>. ' +
      '<i>Je pense <b>qu’il viendra</b>.</i> → COD de « pense ».</li>' +
      '<li><b>Conjonctive circonstancielle</b> : introduite par une conjonction (quand, parce que, si, bien que, pour que…). ' +
      'Elle précise les circonstances. <i><b>Quand il arrive</b>, tout change.</i> → complément circonstanciel de temps.</li>' +
      '<li><b>Interrogative indirecte</b> : une question intégrée à une phrase déclarative, <b>sans point d’interrogation</b>. ' +
      '<i>Je me demande <b>s’il viendra</b>.</i></li></ul>' },
    { k: 'prop', t: 'Interrogation et négation', c:
      '<p><b>Interrogation</b> :</p>' +
      '<ul><li><b>totale</b> (réponse oui/non) ou <b>partielle</b> (elle porte sur un élément : qui, quand, où, comment) ;</li>' +
      '<li><b>directe</b> (point d’interrogation) ou <b>indirecte</b> (intégrée, sans point d’interrogation) ;</li>' +
      '<li>trois constructions : intonation (<i>Tu viens ?</i>), <b>est-ce que</b>, inversion (<i>Viens-tu ?</i>).</li></ul>' +
      '<p><b>Négation</b> :</p>' +
      '<ul><li><b>totale</b> : <i>ne… pas</i>, elle porte sur toute la phrase ;</li>' +
      '<li><b>partielle</b> : <i>ne… plus, ne… jamais, ne… personne, ne… rien, ne… que</i> (qui est en fait une <b>restriction</b>) ;</li>' +
      '<li><b>lexicale</b> : le sens négatif est dans le mot (<i>impossible</i>, <i>refuser</i>), sans « ne ».</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Pour reconnaître une relative : le mot introducteur <b>remplace un nom</b> déjà cité. Pour une complétive : on peut remplacer par « cela ».</li>' +
      '<li><i>Ne… que</i> n’est <b>pas</b> une négation : c’est une <b>restriction</b>, elle signifie « seulement ». Question classique à l’oral.</li>' +
      '<li>Le <b>ne explétif</b> (<i>je crains qu’il ne vienne</i>) n’a aucune valeur négative.</li>' +
      '<li>Toujours donner la <b>nature</b> ET la <b>fonction</b> : c’est ce qui vaut les deux points.</li></ul>' },
    { k: 'piege', t: 'Erreurs classiques', c:
      '<ul><li>Confondre « que » pronom relatif et « que » conjonction.</li>' +
      '<li>Oublier la fonction et ne donner que la nature.</li>' +
      '<li>Analyser la phrase entière alors que la question ne porte que sur une partie.</li></ul>' }
  ]
},
{
  id: 'fr-figures', bloc: 'fr-outils', titre: 'Figures de style',
  resume: 'Les reconnaître, et surtout dire ce qu’elles font.',
  capacites: [
    'Identifier les principales figures d’analogie, d’opposition, d’insistance et d’atténuation.',
    'Interpréter l’effet produit, et non seulement nommer le procédé.',
    'Repérer les réseaux de procédés qui se répondent dans un texte.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Une figure de style n’est pas une décoration : c’est un <b>choix</b>. La nommer ne rapporte rien. ' +
      'Dire <b>ce qu’elle produit</b> sur le lecteur, voilà ce qui rapporte des points.</p>' +
      '<p>La formule qui sauve une copie : « <i>procédé + citation + effet</i> ».</p>' },
    { k: 'def', t: 'Les figures d’analogie', c:
      '<ul><li><b>Comparaison</b> : deux éléments rapprochés par un <b>outil</b> (comme, tel, semblable à). <i>Il est fort comme un lion.</i></li>' +
      '<li><b>Métaphore</b> : la même chose <b>sans outil</b>. <i>Ce lion s’est jeté dans la bataille.</i></li>' +
      '<li><b>Personnification</b> : une chose ou une idée traitée comme une personne. <i>La nuit murmure.</i></li>' +
      '<li><b>Allégorie</b> : une idée abstraite incarnée tout au long d’un texte. <i>La Mort, sa faux à la main.</i></li></ul>' },
    { k: 'def', t: 'Les figures d’opposition et d’insistance', c:
      '<ul><li><b>Antithèse</b> : deux termes opposés rapprochés. <i>Un soleil noir de mélancolie.</i></li>' +
      '<li><b>Oxymore</b> : deux mots contradictoires <b>collés</b>. <i>Une obscure clarté.</i></li>' +
      '<li><b>Chiasme</b> : un croisement en miroir, ABBA. <i>Il faut manger pour vivre et non vivre pour manger.</i></li>' +
      '<li><b>Anaphore</b> : le même mot répété en <b>début</b> de phrases ou de vers.</li>' +
      '<li><b>Gradation</b> : une progression, croissante ou décroissante. <i>Je me meurs, je suis mort, je suis enterré.</i></li>' +
      '<li><b>Hyperbole</b> : l’exagération. <i>Mourir de rire.</i></li></ul>' },
    { k: 'def', t: 'Les figures d’atténuation et de substitution', c:
      '<ul><li><b>Litote</b> : on dit moins pour faire entendre plus. <i>Va, je ne te hais point</i> = je t’aime.</li>' +
      '<li><b>Euphémisme</b> : on adoucit une réalité pénible. <i>Il nous a quittés.</i></li>' +
      '<li><b>Métonymie</b> : on nomme par un élément lié. <i>Boire un verre</i>, <i>lire un Zola</i>.</li>' +
      '<li><b>Périphrase</b> : on remplace un mot par un groupe. <i>La capitale de la France.</i></li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Comparaison ou métaphore ? Cherchez l’<b>outil</b>. S’il y en a un, c’est une comparaison.</li>' +
      '<li>Antithèse ou oxymore ? L’oxymore est <b>collé</b> dans le même groupe de mots, l’antithèse est répartie dans la phrase.</li>' +
      '<li>Une figure isolée ne vaut rien : cherchez le <b>réseau</b>, plusieurs procédés qui vont dans le même sens.</li>' +
      '<li>Bannir « l’auteur utilise une métaphore pour embellir son texte » : cette phrase ne dit rien.</li></ul>' }
  ]
},
{
  id: 'fr-versification', bloc: 'fr-outils', titre: 'Versification',
  resume: 'Compter les syllabes, nommer les rimes et les strophes.',
  capacites: [
    'Compter les syllabes d’un vers et nommer le mètre.',
    'Identifier la disposition des rimes et leur qualité.',
    'Nommer une strophe et une forme fixe.',
    'Repérer les effets de rythme : césure, enjambement, rejet, contre-rejet.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce sont des <b>points certains</b> : contrairement à l’interprétation, la versification se vérifie. ' +
      'Et un décompte de syllabes juste montre immédiatement au correcteur qu’on sait lire un poème.</p>' },
    { k: 'meth', t: 'Compter les syllabes', c:
      '<ul><li>Le <b>e muet</b> se prononce <b>devant une consonne</b>, mais pas devant une voyelle ni en fin de vers.</li>' +
      '<li><i>U/ne / nuit / clai/re, un / vent / gla/cé</i> : le « e » de « claire » ne compte pas, car le mot suivant commence par une voyelle.</li></ul>' +
      '<p>Les mètres à connaître : <b>alexandrin</b> (12), <b>décasyllabe</b> (10), <b>octosyllabe</b> (8), ' +
      '<b>heptasyllabe</b> (7), <b>hexasyllabe</b> (6).</p>' },
    { k: 'prop', t: 'Les rimes', c:
      '<p><b>Disposition</b> :</p>' +
      '<ul><li><b>plates</b> (ou suivies) : AABB ;</li>' +
      '<li><b>croisées</b> : ABAB ;</li>' +
      '<li><b>embrassées</b> : ABBA.</li></ul>' +
      '<p><b>Qualité</b>, selon le nombre de sons communs :</p>' +
      '<ul><li><b>pauvre</b> : 1 son (<i>ami / joli</i>) ;</li>' +
      '<li><b>suffisante</b> : 2 sons (<i>amour / toujours</i>) ;</li>' +
      '<li><b>riche</b> : 3 sons ou plus (<i>image / hommage</i>).</li></ul>' },
    { k: 'prop', t: 'Strophes et formes fixes', c:
      '<ul><li>2 vers : <b>distique</b> · 3 : <b>tercet</b> · 4 : <b>quatrain</b> · 5 : <b>quintil</b> · 6 : <b>sizain</b> · 8 : <b>huitain</b> · 10 : <b>dizain</b>.</li>' +
      '<li>Le <b>sonnet</b> : deux quatrains puis deux tercets, quatorze vers. La <b>chute</b> est le dernier vers, souvent le plus fort.</li></ul>' },
    { k: 'prop', t: 'Les effets de rythme', c:
      '<ul><li><b>Césure</b> : la coupe principale du vers ; l’alexandrin classique se coupe en deux <b>hémistiches</b> de six syllabes.</li>' +
      '<li><b>Enjambement</b> : la phrase déborde sur le vers suivant.</li>' +
      '<li><b>Rejet</b> : un court élément renvoyé au début du vers suivant, donc <b>mis en valeur</b>.</li>' +
      '<li><b>Contre-rejet</b> : l’inverse, un élément placé en fin de vers qui annonce la suite.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Compter sur ses doigts, discrètement : personne ne compte de tête sans erreur.</li>' +
      '<li>Un <b>rejet</b> met toujours un mot en avant : c’est presque toujours interprétable, donc payant.</li>' +
      '<li>Un vers faux dans un poème classique n’est jamais une erreur de l’auteur : c’est un effet.</li></ul>' }
  ]
},
{
  id: 'fr-registres', bloc: 'fr-outils', titre: 'Registres et mouvements',
  resume: 'Le ton d’un texte, son siècle, son courant.',
  capacites: [
    'Identifier le registre dominant d’un texte et les procédés qui le portent.',
    'Situer une œuvre dans son mouvement littéraire et son siècle.',
    'Reconnaître les genres littéraires et leurs codes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le registre, c’est l’<b>effet recherché sur le lecteur</b>. Le nommer dès l’introduction du commentaire ' +
      'oriente toute l’analyse, et montre qu’on a compris le texte avant de l’expliquer.</p>' },
    { k: 'def', t: 'Les registres', c:
      '<ul><li><b>Lyrique</b> : l’expression des sentiments personnels. Première personne, exclamations, images.</li>' +
      '<li><b>Tragique</b> : l’homme écrasé par une force qui le dépasse, sans issue. Fatalité, mort.</li>' +
      '<li><b>Pathétique</b> : la souffrance montrée pour émouvoir, faire pitié.</li>' +
      '<li><b>Épique</b> : l’amplification héroïque. Hyperboles, pluriels, combat.</li>' +
      '<li><b>Comique</b> : faire rire, par les mots, les gestes, la situation ou le caractère.</li>' +
      '<li><b>Ironique</b> : dire le contraire de ce que l’on pense, pour critiquer.</li>' +
      '<li><b>Polémique</b> : attaquer un adversaire. Ton virulent, lexique dépréciatif.</li>' +
      '<li><b>Didactique</b> : instruire, expliquer.</li></ul>' },
    { k: 'prop', t: 'Les mouvements littéraires', c:
      '<ul><li><b>Humanisme</b> (XVIe) : la confiance dans l’homme et le savoir. Rabelais, Montaigne, La Boétie.</li>' +
      '<li><b>Baroque</b> (fin XVIe – début XVIIe) : le mouvement, l’instabilité, l’illusion.</li>' +
      '<li><b>Classicisme</b> (XVIIe) : l’ordre, la mesure, les règles. Corneille, Molière, Racine, La Fontaine.</li>' +
      '<li><b>Lumières</b> (XVIIIe) : la raison contre les préjugés. Voltaire, Diderot, Rousseau, Fontenelle, Graffigny.</li>' +
      '<li><b>Romantisme</b> (début XIXe) : le moi, la passion, la nature. Hugo, Musset, Lamartine.</li>' +
      '<li><b>Réalisme</b> (milieu XIXe) : peindre la société telle qu’elle est. Balzac, Flaubert, Maupassant.</li>' +
      '<li><b>Naturalisme</b> (fin XIXe) : le réalisme poussé à la méthode scientifique. <b>Zola</b>.</li>' +
      '<li><b>Parnasse</b> (milieu XIXe) : « l’art pour l’art », la forme impeccable, les sujets antiques ou exotiques, le refus de l’épanchement personnel. Leconte de Lisle, Heredia.</li>' +
      '<li><b>Symbolisme</b> (fin XIXe) : suggérer plutôt que nommer. Baudelaire, Verlaine, Rimbaud, Mallarmé.</li>' +
      '<li><b>Surréalisme</b> (XXe) : le rêve, l’inconscient, l’écriture automatique. Breton, Éluard.</li>' +
      '<li><b>Absurde et Nouveau Roman</b> (XXe) : Camus, Ionesco, Beckett, <b>Sarraute</b>.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Un texte a souvent <b>deux registres</b> qui se mêlent : le dire est plus fin que d’en choisir un seul.</li>' +
      '<li>Tragique ≠ pathétique : le tragique suppose une <b>fatalité</b>, le pathétique cherche seulement l’émotion.</li>' +
      '<li>Citer un mouvement sans le relier au texte ne rapporte rien : montrez le trait du mouvement <b>dans</b> l’extrait.</li></ul>' }
  ]
},
{
  id: 'fr-commentaire', bloc: 'fr-epreuves', titre: 'Le commentaire',
  resume: 'Écrit, 4 h, 20 points. Analyser un texte inconnu.',
  capacites: [
    'Construire un projet de lecture et un plan en deux ou trois axes.',
    'Rédiger une introduction complète : amorce, présentation, problématique, annonce du plan.',
    'Rédiger un paragraphe d’analyse liant procédé, citation et interprétation.',
    'Conclure en répondant à la problématique et en ouvrant.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’épreuve', c:
      '<p><b>Écrit de 4 heures, coefficient 5.</b> Deux sujets au choix : le <b>commentaire</b> d’un texte que tu découvres, ' +
      'ou la <b>dissertation</b> sur une des œuvres étudiées. Chacun est noté sur 20.</p>' +
      '<p>Le commentaire porte sur un texte <b>hors programme</b>, mais relevant d’un des quatre objets d’étude.</p>' },
    { k: 'meth', t: 'La méthode, étape par étape', c:
      '<ul><li>1. <b>Lire trois fois</b> : pour comprendre, pour repérer les procédés, pour chercher le mouvement du texte.</li>' +
      '<li>2. Formuler un <b>projet de lecture</b> : qu’est-ce que ce texte fait, et comment ? C’est la problématique.</li>' +
      '<li>3. Bâtir <b>deux ou trois axes</b>, qui sont des <b>réponses</b> à la problématique, jamais des étiquettes comme « les procédés ».</li>' +
      '<li>4. Rédiger entièrement : pas de plan apparent, pas de titres, pas de tirets.</li></ul>' },
    { k: 'prop', t: 'L’introduction, quatre étapes obligatoires', c:
      '<ul><li><b>Amorce</b> : une phrase de contexte (mouvement, genre, époque).</li>' +
      '<li><b>Présentation</b> : auteur, titre, date, situation du passage.</li>' +
      '<li><b>Problématique</b> : la question à laquelle le devoir répond.</li>' +
      '<li><b>Annonce du plan</b> : les axes, dans l’ordre, sans les numéroter lourdement.</li></ul>' },
    { k: 'prop', t: 'Le paragraphe d’analyse', c:
      '<p>Chaque paragraphe suit le même mouvement, connu sous le nom d’<b>AQA</b> :</p>' +
      '<ul><li><b>Affirmation</b> : l’idée défendue, annoncée d’emblée.</li>' +
      '<li><b>Quotation</b> : la citation, courte, entre guillemets, avec la ligne.</li>' +
      '<li><b>Analyse</b> : le procédé nommé <b>et son effet</b>.</li></ul>' +
      '<p>Trois ou quatre paragraphes de ce type par axe suffisent.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Un axe qui s’appelle « les figures de style » est un axe raté : ce n’est pas une idée, c’est un inventaire.</li>' +
      '<li>Ne jamais paraphraser : si la phrase pourrait être écrite par quelqu’un qui n’a pas analysé le texte, elle ne vaut rien.</li>' +
      '<li>Garder <b>vingt minutes</b> pour la relecture : l’orthographe compte dans la note.</li>' +
      '<li>Une conclusion sans ouverture est une conclusion incomplète.</li></ul>' }
  ]
},
{
  id: 'fr-dissertation', bloc: 'fr-epreuves', titre: 'La dissertation',
  resume: 'Écrit, 4 h, 20 points. Sur une œuvre étudiée.',
  capacites: [
    'Analyser un sujet et en dégager les mots clés et les enjeux.',
    'Construire un plan dialectique ou thématique cohérent.',
    'Nourrir chaque partie d’exemples précis tirés de l’œuvre et du parcours.',
    'Rédiger une introduction et une conclusion complètes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’épreuve', c:
      '<p>Trois sujets de dissertation sont proposés, un par œuvre du programme. Tu traites celui qui porte sur ' +
      '<b>l’œuvre étudiée dans ta classe</b>.</p>' +
      '<p>Le sujet prend appui sur l’œuvre, sur le <b>parcours associé</b>, et sur ta culture personnelle : les trois sont attendus.</p>' },
    { k: 'meth', t: 'Analyser le sujet', c:
      '<ul><li>Souligner les <b>mots clés</b> et les définir : un sujet se joue souvent sur un seul mot.</li>' +
      '<li>Repérer la <b>forme</b> : une question fermée appelle un plan <b>dialectique</b> (oui / non / dépassement) ; ' +
      'une question ouverte appelle un plan <b>thématique</b>.</li>' +
      '<li>Chercher la <b>tension</b> du sujet : ce qui, dans la citation, résiste ou surprend.</li></ul>' },
    { k: 'prop', t: 'Les deux plans possibles', c:
      '<ul><li><b>Dialectique</b> : I. Oui, dans une certaine mesure · II. Mais c’est insuffisant · III. En réalité, le sujet se déplace. ' +
      'La troisième partie ne doit jamais être un simple compromis.</li>' +
      '<li><b>Thématique</b> : trois aspects complémentaires d’une même question, du plus évident au plus fin.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Préparer <b>cinq ou six passages</b> de l’œuvre, capables de servir plusieurs sujets différents : c’est plus efficace que de tout relire.</li>' +
      '<li>Le <b>parcours associé</b> doit apparaître explicitement : c’est un attendu du sujet.</li>' +
      '<li>Un exemple non analysé ne compte pas. Un exemple = une idée + ce qu’il prouve.</li>' +
      '<li>Ne jamais résumer l’œuvre : le correcteur la connaît.</li></ul>' }
  ]
},
{
  id: 'fr-oral', bloc: 'fr-epreuves', titre: 'L’oral',
  resume: 'Explication linéaire, grammaire, entretien. 20 points.',
  capacites: [
    'Lire un texte à voix haute de façon expressive.',
    'Conduire une explication linéaire suivant le mouvement du texte.',
    'Répondre à une question de grammaire par une analyse syntaxique précise.',
    'Présenter et défendre une œuvre choisie lors de l’entretien.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’épreuve, dans le détail', c:
      '<p><b>Coefficient 5</b>, 20 minutes de préparation puis 20 minutes devant l’examinateur.</p>' +
      '<ul><li><b>Lecture expressive</b> du texte : <b>2 points</b>.</li>' +
      '<li><b>Explication linéaire</b> d’un passage d’une vingtaine de lignes, tiré de ton descriptif : <b>8 points</b>.</li>' +
      '<li><b>Question de grammaire</b>, posée au tirage et portant sur le texte : <b>2 points</b>.</li>' +
      '<li><b>Entretien</b> sur une œuvre que <b>tu as choisie</b> et présentée : <b>8 points</b>.</li></ul>' },
    { k: 'meth', t: 'L’explication linéaire', c:
      '<p>Elle suit le texte <b>dans son ordre</b> : ce n’est pas un commentaire composé.</p>' +
      '<ul><li>1. Situer le texte en deux phrases.</li>' +
      '<li>2. Annoncer les <b>mouvements</b> du texte : deux ou trois parties, repérées par un changement de ton, de temps, de sujet.</li>' +
      '<li>3. Expliquer mouvement par mouvement, en citant, en nommant les procédés et en disant leurs effets.</li>' +
      '<li>4. Conclure sur l’intérêt du passage et le relier à l’œuvre.</li></ul>' },
    { k: 'meth', t: 'L’entretien', c:
      '<p>Tu présentes l’œuvre choisie pendant deux à trois minutes, puis l’examinateur échange avec toi.</p>' +
      '<ul><li>Expliquer <b>pourquoi</b> tu l’as choisie : une raison personnelle et sincère vaut mieux qu’un résumé.</li>' +
      '<li>Préparer <b>deux passages précis</b> à citer.</li>' +
      '<li>Accepter la discussion : l’examinateur teste ta capacité à réagir, pas ta mémoire.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La <b>lecture expressive</b> vaut 2 points et se prépare : respirer aux virgules, ralentir à la chute.</li>' +
      '<li>Ne jamais réciter : un examinateur repère un texte appris par cœur en trente secondes.</li>' +
      '<li>La question de grammaire arrive <b>au tirage</b> : y penser pendant les 20 minutes de préparation, pas à la fin.</li>' +
      '<li>Si un mot manque, le dire et reformuler : le silence coûte plus cher que l’hésitation.</li></ul>' }
  ]
}
];

CHAPITRES_FR.forEach(c => {
  c.gens = [];
  c.matiere = 'francais';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
