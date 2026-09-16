/* =========================================================================
   SPÉCIALITÉ SCIENCES ÉCONOMIQUES ET SOCIALES, première générale.

   Programme : BO spécial n°1 du 22 janvier 2019, inchangé pour 2026-2027.

   Dix questions réparties en trois ensembles : science économique (4),
   sociologie et science politique (4), regards croisés (2).
   S'y ajoutent les objectifs d'apprentissage sur les données quantitatives,
   qui sont évalués dans toutes les questions.
   ========================================================================= */

MAT['ses'].pret = true;

BLOCS.push(
  { id: 'ses-eco',     nom: 'Science économique',                matiere: 'ses' },
  { id: 'ses-socio',   nom: 'Sociologie et science politique',   matiere: 'ses' },
  { id: 'ses-croises', nom: 'Regards croisés',                   matiere: 'ses' },
  { id: 'ses-outils',  nom: 'Les outils quantitatifs',           matiere: 'ses' }
);

const CHAPITRES_SES = [
{
  id: 'ses-marche', bloc: 'ses-eco', titre: 'Comment un marché concurrentiel fonctionne-t-il ?',
  resume: 'Offre, demande, prix d’équilibre, surplus.',
  capacites: [
    'Connaître les caractéristiques d’un marché concurrentiel.',
    'Savoir interpréter les courbes d’offre et de demande et leurs pentes.',
    'Comprendre la notion d’équilibre et le rôle du prix dans l’allocation des ressources.',
    'Comprendre les notions de surplus du producteur et du consommateur.',
    'Comprendre l’effet d’une variation de l’offre ou de la demande sur l’équilibre.'
  ],
  cours: [
    { k: 'def', t: 'Les conditions de la concurrence parfaite', c:
      '<ul><li><b>Atomicité</b> : de nombreux acheteurs et vendeurs, aucun n’étant assez gros pour ' +
      'influencer le prix.</li>' +
      '<li><b>Homogénéité</b> du produit : les biens échangés sont identiques.</li>' +
      '<li><b>Libre entrée et sortie</b> sur le marché.</li>' +
      '<li><b>Transparence</b> de l’information : tous connaissent les prix et les qualités.</li>' +
      '<li><b>Libre circulation</b> des facteurs de production.</li></ul>' +
      '<p>Sur un tel marché, les agents sont <b>preneurs de prix</b> : ils subissent le prix, ils ne le fixent pas.</p>' },
    { k: 'prop', t: 'Offre, demande, équilibre', c:
      '<p>La courbe de <b>demande</b> est <b>décroissante</b> : plus le prix est élevé, moins on achète. ' +
      'La courbe d’<b>offre</b> est <b>croissante</b> : plus le prix est élevé, plus on produit.</p>' +
      '<p>Le <b>prix d’équilibre</b> est celui qui égalise les quantités offertes et demandées.</p>' +
      '<ul><li>Prix <b>au-dessus</b> de l’équilibre → offre excédentaire, le prix baisse.</li>' +
      '<li>Prix <b>en dessous</b> → demande excédentaire, pénurie, le prix monte.</li></ul>' },
    { k: 'def', t: 'Les surplus', c:
      '<p>Le <b>surplus du consommateur</b> est la différence entre ce qu’il était prêt à payer ' +
      'et ce qu’il paie réellement.</p>' +
      '<p>Le <b>surplus du producteur</b> est la différence entre le prix reçu et le prix minimal ' +
      'auquel il aurait accepté de vendre.</p>' +
      '<p>Leur somme mesure le <b>gain à l’échange</b> : c’est l’argument central en faveur du marché.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Distinguer <b>déplacement le long</b> de la courbe (le prix change) et ' +
      '<b>déplacement de la courbe</b> (autre chose change : revenu, goûts, coûts, nombre d’acteurs). ' +
      'C’est l’erreur la plus sanctionnée du chapitre.</li>' +
      '<li>Un choc d’offre positif fait <b>baisser</b> le prix et <b>augmenter</b> les quantités.</li>' +
      '<li>Un choc de demande positif fait <b>monter</b> le prix <b>et</b> les quantités.</li></ul>' }
  ]
},
{
  id: 'ses-imparfait', bloc: 'ses-eco', titre: 'Les marchés imparfaitement concurrentiels',
  resume: 'Monopole, oligopole, pouvoir de marché.',
  capacites: [
    'Comprendre les principales sources du pouvoir de marché : concentration, barrières à l’entrée, différenciation.',
    'Comprendre les caractéristiques du monopole et de l’oligopole.',
    'Comprendre comment le pouvoir de marché permet de fixer un prix supérieur au coût marginal.',
    'Connaître le rôle de la politique de la concurrence.'
  ],
  cours: [
    { k: 'def', t: 'Le pouvoir de marché', c:
      '<p>Une entreprise a du <b>pouvoir de marché</b> quand elle peut fixer un prix supérieur ' +
      'à celui qui prévaudrait en concurrence, sans perdre tous ses clients.</p>' +
      '<p>Trois sources principales :</p>' +
      '<ul><li>la <b>concentration</b> : peu d’offreurs sur le marché ;</li>' +
      '<li>les <b>barrières à l’entrée</b> : coûts fixes élevés, brevets, réglementation, réputation ;</li>' +
      '<li>la <b>différenciation</b> du produit : marque, qualité perçue, innovation.</li></ul>' },
    { k: 'prop', t: 'Monopole et oligopole', c:
      '<ul><li><b>Monopole</b> : un seul offreur. Il fixe le prix, mais reste contraint par la demande.</li>' +
      '<li><b>Oligopole</b> : quelques offreurs, dont les décisions sont <b>interdépendantes</b>. ' +
      'Chacun doit anticiper la réaction des autres.</li></ul>' +
      '<p>D’où deux issues possibles en oligopole : la <b>guerre des prix</b>, qui profite au consommateur, ' +
      'ou l’<b>entente</b>, illégale, qui lui nuit.</p>' },
    { k: 'prop', t: 'La politique de la concurrence', c:
      '<p>Elle sanctionne les <b>ententes</b> et les <b>abus de position dominante</b>, et contrôle ' +
      'les <b>concentrations</b>, c’est-à-dire les fusions et acquisitions.</p>' +
      '<p>Objectif : préserver le surplus du consommateur et l’incitation à innover. ' +
      'Être en monopole n’est pas illégal en soi ; en <b>abuser</b> l’est.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le monopole ne fixe pas un prix infini : il reste limité par la <b>demande</b>. ' +
      'Trop cher, il ne vend plus.</li>' +
      '<li>L’interdépendance est le mot clé de l’oligopole : c’est ce qui le distingue des autres structures.</li>' +
      '<li>Un monopole peut être <b>naturel</b> si les coûts fixes sont si élevés qu’un seul producteur ' +
      'est efficace : les réseaux ferroviaires ou électriques.</li></ul>' }
  ]
},
{
  id: 'ses-defaillances', bloc: 'ses-eco', titre: 'Les défaillances du marché',
  resume: 'Externalités, biens collectifs, asymétries d’information.',
  capacites: [
    'Comprendre les effets externes, positifs et négatifs, et les moyens d’y remédier.',
    'Comprendre ce qu’est un bien collectif et pourquoi le marché ne le produit pas spontanément.',
    'Comprendre les asymétries d’information : sélection adverse et aléa moral.',
    'Connaître les principaux instruments de l’action publique face à ces défaillances.'
  ],
  cours: [
    { k: 'def', t: 'Les externalités', c:
      '<p>Une <b>externalité</b> est l’effet d’une activité sur un tiers, <b>sans compensation monétaire</b>.</p>' +
      '<ul><li><b>Négative</b> : pollution d’une usine. Le coût social dépasse le coût privé, ' +
      'donc le marché produit <b>trop</b>.</li>' +
      '<li><b>Positive</b> : vaccination, recherche, éducation. Le bénéfice social dépasse le bénéfice privé, ' +
      'donc le marché produit <b>trop peu</b>.</li></ul>' +
      '<p>Remèdes : <b>taxe</b> (principe pollueur-payeur), <b>subvention</b>, <b>réglementation</b>, ' +
      'ou <b>marché de quotas</b> d’émission.</p>' },
    { k: 'def', t: 'Les biens collectifs', c:
      '<p>Un bien collectif pur est <b>non rival</b> (ma consommation ne réduit pas celle des autres) ' +
      'et <b>non excluable</b> (on ne peut empêcher personne d’en profiter).</p>' +
      '<p>Exemples : l’éclairage public, la défense nationale, un phare.</p>' +
      '<p>D’où le problème du <b>passager clandestin</b> : chacun a intérêt à profiter sans payer, ' +
      'donc le marché ne finance pas ces biens. C’est pourquoi ils relèvent de l’action publique.</p>' },
    { k: 'def', t: 'Les asymétries d’information', c:
      '<ul><li><b>Sélection adverse</b> : l’asymétrie existe <b>avant</b> le contrat. ' +
      'Le vendeur d’une voiture d’occasion connaît son état, pas l’acheteur. Les bonnes voitures ' +
      'quittent le marché : c’est le « marché des tacots » d’Akerlof.</li>' +
      '<li><b>Aléa moral</b> : l’asymétrie apparaît <b>après</b> le contrat. Bien assuré, ' +
      'on prend plus de risques.</li></ul>' +
      '<p>Remèdes : <b>signaux</b> et <b>labels</b>, garanties, franchises, contrôles.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Retenir la chronologie : sélection adverse <b>avant</b> le contrat, aléa moral <b>après</b>. ' +
      'C’est le moyen le plus sûr de ne pas les confondre.</li>' +
      '<li>Une externalité suppose l’<b>absence de compensation monétaire</b> : si l’on paie, ' +
      'ce n’est plus une externalité.</li>' +
      '<li>Non rival et non excluable : les deux critères sont nécessaires pour un bien collectif pur.</li></ul>' }
  ]
},
{
  id: 'ses-financement', bloc: 'ses-eco', titre: 'Comment les agents se financent-ils ?',
  resume: 'Autofinancement, crédit, marchés, taux d’intérêt.',
  capacites: [
    'Distinguer les agents à capacité et à besoin de financement.',
    'Distinguer financement interne et externe, direct et indirect.',
    'Comprendre le rôle du taux d’intérêt et la distinction entre taux nominal et taux réel.',
    'Comprendre le rôle des banques dans la création monétaire.'
  ],
  cours: [
    { k: 'prop', t: 'Qui finance qui', c:
      '<p>Les <b>ménages</b> ont en général une <b>capacité</b> de financement : ils épargnent. ' +
      'Les <b>entreprises</b> et les <b>administrations publiques</b> ont le plus souvent un ' +
      '<b>besoin</b> de financement.</p>' +
      '<ul><li><b>Financement interne</b> : l’autofinancement, par les bénéfices non distribués.</li>' +
      '<li><b>Financement externe direct</b> : sur les marchés, par émission d’actions ou d’obligations.</li>' +
      '<li><b>Financement externe indirect</b> : par le crédit bancaire, la banque s’intercalant ' +
      'entre prêteurs et emprunteurs.</li></ul>' },
    { k: 'def', t: 'Action et obligation', c:
      '<ul><li>Une <b>action</b> est un titre de <b>propriété</b> : elle donne droit à un dividende, ' +
      'variable, et à un droit de vote. Le risque est élevé.</li>' +
      '<li>Une <b>obligation</b> est un titre de <b>créance</b> : elle donne droit à un intérêt, ' +
      'en général fixe, et au remboursement. Le risque est plus faible.</li></ul>' },
    { k: 'def', t: 'Taux nominal et taux réel', c:
      '<p>C’est l’un des objectifs quantitatifs explicites du programme :</p>' +
      form('taux réel ≈ taux nominal − taux d’inflation', 'approximation suffisante au lycée') +
      '<p>Un taux nominal de 3 % avec une inflation de 2 % donne un taux réel d’environ <b>1 %</b>. ' +
      'Si l’inflation dépasse le taux nominal, le taux réel devient <b>négatif</b> : ' +
      'le prêteur perd du pouvoir d’achat.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>« Les crédits font les dépôts » : une banque crée de la monnaie en accordant un crédit. ' +
      'Elle ne se contente pas de prêter l’épargne existante.</li>' +
      '<li>Action = propriété · obligation = créance. Ne jamais les confondre.</li>' +
      '<li>Toujours préciser <b>nominal</b> ou <b>réel</b> quand on parle d’un taux : ' +
      'c’est ce que le correcteur vérifie.</li></ul>' }
  ]
},
{
  id: 'ses-socialisation', bloc: 'ses-socio', titre: 'La socialisation',
  resume: 'Comment elle explique les différences de comportement.',
  capacites: [
    'Comprendre le processus de socialisation, primaire et secondaire.',
    'Connaître les principales instances de socialisation.',
    'Comprendre que la socialisation est différenciée selon le milieu social et le genre.',
    'Comprendre les effets de la socialisation sur les trajectoires individuelles.'
  ],
  cours: [
    { k: 'def', t: 'Ce qu’est la socialisation', c:
      '<p>C’est le processus par lequel un individu intériorise les <b>normes</b>, les <b>valeurs</b> ' +
      'et les <b>rôles</b> de son groupe, et construit ainsi son identité sociale.</p>' +
      '<ul><li>La socialisation <b>primaire</b>, dans l’enfance, est la plus durable. ' +
      'Instances principales : la famille, l’école, les pairs, les médias.</li>' +
      '<li>La socialisation <b>secondaire</b>, à l’âge adulte, se fait notamment par le travail, ' +
      'le couple, les associations. Elle peut prolonger ou <b>reconfigurer</b> la première.</li></ul>' },
    { k: 'prop', t: 'Une socialisation différenciée', c:
      '<p>Le point central du chapitre : on n’est pas socialisé de la même façon selon son ' +
      '<b>milieu social</b> et selon son <b>genre</b>.</p>' +
      '<p>Les pratiques éducatives, les loisirs proposés, les attentes scolaires diffèrent. ' +
      'Ces différences contribuent à reproduire les positions sociales, sans les déterminer entièrement.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais présenter la socialisation comme un <b>déterminisme absolu</b> : ' +
      'elle rend certains comportements plus probables, elle ne les impose pas.</li>' +
      '<li>Distinguer <b>norme</b> (règle de comportement) et <b>valeur</b> (idéal auquel on adhère). ' +
      'Les normes découlent des valeurs.</li>' +
      '<li>Toujours illustrer par une donnée chiffrée : c’est ce qui distingue la sociologie ' +
      'de l’opinion personnelle.</li></ul>' }
  ]
},
{
  id: 'ses-liens', bloc: 'ses-socio', titre: 'Les liens sociaux',
  resume: 'Comment ils se construisent et évoluent.',
  capacites: [
    'Connaître les différents types de liens sociaux.',
    'Comprendre la distinction entre solidarité mécanique et solidarité organique.',
    'Comprendre les évolutions du lien social et les processus d’intégration.',
    'Comprendre ce qu’est la disqualification sociale.'
  ],
  cours: [
    { k: 'def', t: 'Durkheim : deux formes de solidarité', c:
      '<ul><li><b>Solidarité mécanique</b> : dans les sociétés traditionnelles, les individus se ressemblent ' +
      'et partagent une conscience collective forte. La cohésion vient de la <b>similitude</b>.</li>' +
      '<li><b>Solidarité organique</b> : dans les sociétés modernes, la division du travail rend les individus ' +
      'différents et <b>interdépendants</b>. La cohésion vient de la <b>complémentarité</b>.</li></ul>' },
    { k: 'prop', t: 'Les instances d’intégration', c:
      '<p>Quatre grandes instances relient l’individu à la société : la <b>famille</b>, ' +
      'l’<b>école</b>, le <b>travail</b> et la <b>protection sociale</b>.</p>' +
      '<p>Leur affaiblissement fragilise le lien social. Le chômage de longue durée, par exemple, ' +
      'ne prive pas seulement d’un revenu : il prive d’un statut et de relations.</p>' +
      '<p>La <b>disqualification sociale</b> désigne ce processus par lequel une personne perd ' +
      'progressivement sa place reconnue dans la société.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Mécanique = similitude · organique = complémentarité. Le vocabulaire de Durkheim ' +
      'est contre-intuitif : « organique » désigne les sociétés <b>modernes</b>.</li>' +
      '<li>Intégration et cohésion ne sont pas synonymes : l’intégration concerne l’individu ' +
      'dans le groupe, la cohésion concerne la société entière.</li></ul>' }
  ]
},
{
  id: 'ses-deviance', bloc: 'ses-socio', titre: 'Les processus qui contribuent à la déviance',
  resume: 'Norme, déviance, étiquetage, mesure de la délinquance.',
  capacites: [
    'Distinguer normes sociales et normes juridiques, déviance et délinquance.',
    'Comprendre que la déviance est relative et construite socialement.',
    'Comprendre les processus d’étiquetage et de stigmatisation.',
    'Connaître les difficultés de la mesure de la délinquance.'
  ],
  cours: [
    { k: 'def', t: 'Déviance et délinquance', c:
      '<p>Est <b>déviant</b> un comportement qui transgresse une <b>norme sociale</b> et suscite ' +
      'une réaction de réprobation. Est <b>délinquant</b> un comportement qui transgresse une ' +
      '<b>norme juridique</b>, donc la loi.</p>' +
      '<p>Toute délinquance est une déviance, mais l’inverse est faux : arriver systématiquement ' +
      'en retard est déviant sans être délinquant.</p>' },
    { k: 'prop', t: 'La déviance est relative', c:
      '<p>Un même comportement peut être déviant ici et non ailleurs, aujourd’hui et non hier. ' +
      'La déviance n’est pas une propriété de l’acte, mais le <b>produit d’une réaction sociale</b>.</p>' +
      '<p>C’est la thèse de l’<b>étiquetage</b> de Howard Becker : c’est le groupe qui, en désignant ' +
      'un comportement comme déviant, fabrique le déviant. L’étiquette peut ensuite enfermer la personne ' +
      'dans une <b>carrière déviante</b>.</p>' },
    { k: 'prop', t: 'Mesurer la délinquance', c:
      '<p>Trois instruments, et trois limites :</p>' +
      '<ul><li>les <b>statistiques policières</b> dépendent de l’activité des services et des dépôts de plainte ;</li>' +
      '<li>les <b>statistiques judiciaires</b> ne comptent que les affaires jugées ;</li>' +
      '<li>les <b>enquêtes de victimation</b>, qui interrogent les personnes, révèlent le ' +
      '<b>chiffre noir</b> : les faits non déclarés.</li></ul>' +
      '<p>Une hausse des chiffres peut donc traduire une hausse des faits, ou simplement une hausse ' +
      'des plaintes ou des contrôles.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le <b>chiffre noir</b> est l’argument clé sur la mesure : le citer montre ' +
      'que l’on comprend la construction des données.</li>' +
      '<li>Becker et l’étiquetage : « le déviant est celui à qui l’étiquette a été appliquée avec succès ».</li></ul>' }
  ]
},
{
  id: 'ses-opinion', bloc: 'ses-socio', titre: 'L’opinion publique',
  resume: 'Comment elle se forme et s’exprime.',
  capacites: [
    'Comprendre comment se construit l’opinion publique.',
    'Comprendre le rôle et les limites des sondages.',
    'Comprendre les critiques adressées à la notion d’opinion publique.',
    'Connaître les principes de la représentativité d’un échantillon.'
  ],
  cours: [
    { k: 'prop', t: 'Les sondages et leurs limites', c:
      '<p>Un sondage interroge un <b>échantillon</b> censé représenter une population. ' +
      'Deux méthodes : l’échantillon <b>aléatoire</b> (tirage au sort) et la méthode des <b>quotas</b> ' +
      '(on reproduit la structure de la population).</p>' +
      '<p>Les limites tiennent surtout à la <b>formulation</b> des questions, à l’ordre dans lequel ' +
      'elles sont posées, aux non-réponses, et au fait que les personnes interrogées se forgent parfois ' +
      'une opinion <b>au moment même</b> où on la leur demande.</p>' },
    { k: 'prop', t: 'La critique de Bourdieu', c:
      '<p>Dans une conférence de 1972, Bourdieu avance que « l’opinion publique n’existe pas », ' +
      'en s’appuyant sur trois postulats qu’il juge infondés :</p>' +
      '<ul><li>tout le monde peut avoir une opinion sur toute question ;</li>' +
      '<li>toutes les opinions se valent, et peuvent être additionnées ;</li>' +
      '<li>il y a consensus sur les questions qui méritent d’être posées.</li></ul>' +
      '<p>La critique ne dit pas que les sondages sont faux : elle dit qu’ils <b>fabriquent</b> ' +
      'en partie ce qu’ils prétendent mesurer.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Un échantillon de 1000 personnes bien construit vaut mieux qu’un sondage en ligne ' +
      'à 100 000 répondants auto-sélectionnés : c’est la <b>représentativité</b> qui compte, pas la taille.</li>' +
      '<li>Toujours vérifier la <b>marge d’erreur</b> avant de commenter un écart de deux points.</li></ul>' }
  ]
},
{
  id: 'ses-protection', bloc: 'ses-croises', titre: 'Assurance et protection sociale',
  resume: 'La gestion collective des risques.',
  capacites: [
    'Comprendre la notion de risque et les principes de l’assurance.',
    'Distinguer logique d’assurance et logique d’assistance.',
    'Comprendre le rôle de la protection sociale dans la gestion des risques.',
    'Comprendre les effets de l’assurance sur les comportements : aléa moral, sélection adverse.'
  ],
  cours: [
    { k: 'def', t: 'Mutualiser un risque', c:
      '<p>Assurer, c’est <b>mutualiser</b> : beaucoup cotisent, peu sont indemnisés, et le risque ' +
      'individuel devient supportable collectivement.</p>' +
      '<ul><li><b>Logique d’assurance</b> : on cotise, on est couvert. Les prestations dépendent ' +
      'des cotisations versées.</li>' +
      '<li><b>Logique d’assistance</b> : la solidarité nationale verse une prestation sous condition ' +
      'de ressources, sans cotisation préalable.</li></ul>' +
      '<p>En France, la protection sociale combine les deux.</p>' },
    { k: 'prop', t: 'Les effets sur les comportements', c:
      '<p>Le chapitre relie explicitement l’assurance aux asymétries d’information :</p>' +
      '<ul><li><b>Aléa moral</b> : une fois assuré, on prend davantage de risques ou l’on consomme plus. ' +
      'D’où les <b>franchises</b> et les tickets modérateurs.</li>' +
      '<li><b>Sélection adverse</b> : ce sont les plus exposés au risque qui s’assurent le plus. ' +
      'D’où l’intérêt d’une assurance <b>obligatoire</b>, qui force la mutualisation.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le caractère <b>obligatoire</b> de la Sécurité sociale est la réponse directe ' +
      'à la sélection adverse. C’est l’argument le plus solide du chapitre.</li>' +
      '<li>Assurance ≠ assistance : la première repose sur la cotisation, la seconde sur la solidarité.</li></ul>' }
  ]
},
{
  id: 'ses-entreprise', bloc: 'ses-croises', titre: 'Organisation et gouvernance des entreprises',
  resume: 'Hiérarchie, coordination, parties prenantes.',
  capacites: [
    'Comprendre que l’entreprise est un lieu de relations sociales entre acteurs aux intérêts distincts.',
    'Comprendre les modes de coordination : hiérarchie, marché, coopération.',
    'Connaître les principales parties prenantes et leurs intérêts.',
    'Comprendre les enjeux de la gouvernance d’entreprise.'
  ],
  cours: [
    { k: 'prop', t: 'L’entreprise, une organisation', c:
      '<p>Une entreprise n’est pas seulement une fonction de production : c’est une <b>organisation</b> ' +
      'où se rencontrent des acteurs aux intérêts en partie divergents.</p>' +
      '<p>Les <b>parties prenantes</b> citées par le programme : les <b>salariés</b>, les <b>managers</b>, ' +
      'les <b>propriétaires et actionnaires</b>, et les <b>partenaires d’une coopérative</b>.</p>' },
    { k: 'def', t: 'Coordonner l’activité', c:
      '<ul><li>par la <b>hiérarchie</b> : l’autorité tranche et donne des ordres ;</li>' +
      '<li>par le <b>marché</b> : on achète à l’extérieur plutôt que de produire soi-même ;</li>' +
      '<li>par la <b>coopération</b> : la coordination vient de l’ajustement mutuel, ' +
      'comme dans une coopérative où chaque associé a une voix.</li></ul>' +
      '<p>Le choix entre produire et acheter dépend des <b>coûts de transaction</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le conflit d’intérêts entre <b>actionnaires</b> (rentabilité à court terme) ' +
      'et <b>salariés</b> (emploi, salaires) est l’exemple attendu de la gouvernance.</li>' +
      '<li>Dans une coopérative, le principe est « une personne, une voix », et non ' +
      '« une action, une voix » : c’est ce qui change tout.</li></ul>' }
  ]
},
{
  id: 'ses-quanti', bloc: 'ses-outils', titre: 'Les outils quantitatifs',
  resume: 'Pourcentages, taux de variation, indices, moyennes.',
  capacites: [
    'Calculer, lire et interpréter une proportion et un pourcentage de répartition.',
    'Calculer, lire et interpréter un taux de variation, un taux de variation cumulé, un coefficient multiplicateur et un indice simple.',
    'Calculer, lire et interpréter une moyenne arithmétique simple et pondérée.',
    'Lire et interpréter un indice synthétique, une médiane, un tableau à double entrée.',
    'Distinguer valeur nominale et valeur réelle, notamment pour un taux d’intérêt.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ces outils sont listés à part dans le programme, mais ils sont évalués dans <b>toutes</b> ' +
      'les questions. Une erreur de calcul de taux de variation coûte des points en économie ' +
      'comme en sociologie.</p>' },
    { k: 'def', t: 'Taux de variation et coefficient multiplicateur', c:
      formM('TV = frac{V_A - V_D}{V_D} × 100', 'en pourcentage · VD = valeur de départ, VA = valeur d’arrivée') +
      formM('CM = frac{V_A}{V_D} = 1 + frac{TV}{100}', 'coefficient multiplicateur') +
      '<p>Une hausse de 20 % correspond à un coefficient de 1,2. Une baisse de 20 % correspond à 0,8.</p>' },
    { k: 'def', t: 'Taux de variation cumulé', c:
      '<p>Les taux de variation <b>ne s’additionnent pas</b> : on multiplie les coefficients.</p>' +
      formM('CM_{global} = CM_1 × CM_2', 'puis on revient au taux global') +
      '<p>Une hausse de 10 % suivie d’une baisse de 10 % donne 1,10 × 0,90 = 0,99, ' +
      'soit une baisse de <b>1 %</b>, et non un retour au point de départ.</p>' },
    { k: 'def', t: 'Indices, moyennes, médiane', c:
      formM('@Indice = frac{V_A}{V_D} × 100', 'base 100 à la date de départ') +
      '<p>Un indice de 130 signifie une hausse de 30 % depuis la base.</p>' +
      '<p>La <b>moyenne pondérée</b> tient compte des effectifs de chaque groupe. ' +
      'La <b>médiane</b> partage la population en deux parts égales : elle n’est pas sensible ' +
      'aux valeurs extrêmes, contrairement à la moyenne. Sur les revenus, la médiane est donc ' +
      'plus parlante que la moyenne.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Distinguer une variation <b>en points</b> et une variation <b>en pourcentage</b> : ' +
      'passer de 10 % à 12 %, c’est +2 <b>points</b>, mais +20 <b>%</b>. C’est l’erreur classique.</li>' +
      '<li>Toujours faire une phrase d’interprétation complète : « en France, entre telle et telle date, ' +
      'telle grandeur a augmenté de tant ».</li>' +
      '<li>Ne jamais additionner des taux de variation successifs : on multiplie les coefficients.</li></ul>' }
  ]
}
];

CHAPITRES_SES.forEach(c => {
  c.gens = [];
  c.matiere = 'ses';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
