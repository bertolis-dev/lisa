/* =========================================================================
   MATIÈRE : enseignement moral et civique, première générale.

   Programme NEUF : arrêté du 29 mai 2024, BO n°24 du 13 juin 2024
   (NOR MENE2413934A). Entrée en vigueur progressive au lycée :
   seconde à la rentrée 2024, PREMIÈRE à la rentrée 2025-2026,
   terminale à la rentrée 2026-2027.
   C'est donc bien ce programme qui s'applique en première en 2026-2027,
   et non celui de 2019.

   Classe de première : « Cohésion et diversité dans une société
   démocratique », deux parties de 9 heures chacune en voies générale
   et technologique.
   ========================================================================= */

MAT['emc'].pret = true;

BLOCS.push(
  { id: 'emc-valeurs', nom: 'Les valeurs de la République et la cohésion sociale', matiere: 'emc' },
  { id: 'emc-nation',  nom: 'La République et la Nation',                          matiere: 'emc' },
  { id: 'emc-method',  nom: 'La démarche de l’EMC',                                matiere: 'emc' }
);

const CHAPITRES_EMC = [

/* ================= PARTIE 1 ================= */
{
  id: 'emc-solidarite', bloc: 'emc-valeurs', titre: 'Solidarité et fraternité',
  resume: 'La Nation porteuse d’un projet social.',
  capacites: [
    'Étudier la notion de solidarité à différentes échelles, dans ses conditions formelles et ses modalités concrètes.',
    'Distinguer logique d’assurance et logique d’assistance, contributions obligatoires et dons volontaires.',
    'Expliquer en quoi les inégalités économiques et sociales peuvent menacer la cohésion sociale et la démocratie.',
    'Analyser la reconnaissance de la valeur constitutionnelle du principe de fraternité.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La devise de la République place la <b>fraternité</b> à côté de la liberté et de l’égalité. ' +
      'Ce chapitre montre qu’il ne s’agit pas d’un mot décoratif : c’est un principe qui a une ' +
      '<b>valeur juridique</b> et des traductions concrètes, de l’impôt au don du sang.</p>' },
    { k: 'prop', t: 'Ce que dit le programme', c:
      '<ul><li>La devise de la République et l’article premier de la Constitution indiquent que la Nation ' +
      'est porteuse d’un <b>projet social</b> : lutter contre toutes les formes d’inégalité, et tisser ' +
      'des liens étroits de solidarité entre les citoyens.</li>' +
      '<li>Les <b>inégalités économiques et sociales</b> peuvent présenter un danger pour la cohésion sociale ' +
      'et pour la démocratie elle-même.</li></ul>' },
    { k: 'def', t: 'Assurance ou assistance ?', c:
      '<p>Deux logiques différentes, souvent confondues :</p>' +
      '<ul><li><b>Assurance</b> : on cotise, et l’on est couvert en cas de risque. ' +
      'C’est la logique de la Sécurité sociale, de l’assurance chômage, de la retraite.</li>' +
      '<li><b>Assistance</b> : la solidarité nationale aide sans contrepartie de cotisation, ' +
      'au titre de la situation de la personne. C’est la logique du RSA, des fonds sociaux à destination des élèves.</li></ul>' +
      '<p>À cela s’ajoutent les <b>dons volontaires</b>, comme le don du sang, qui relèvent d’une solidarité choisie.</p>' },
    { k: 'reperes', t: 'La décision qui a tout changé', c:
      '<ul class="dates">' +
      '<li><b>6 juillet 2018</b> <span>le Conseil constitutionnel reconnaît la <b>valeur constitutionnelle ' +
      'du principe de fraternité</b></span></li></ul>' +
      '<p>Jusque-là, la fraternité était vue comme un idéal moral. Depuis cette décision, c’est un principe ' +
      'dont on peut se réclamer devant un juge. C’est le point de passage obligé du chapitre.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Citer la décision du <b>6 juillet 2018</b> montre immédiatement que le chapitre est maîtrisé.</li>' +
      '<li>Ne pas confondre <b>égalité</b> et <b>solidarité</b> : l’égalité est un principe de droit, ' +
      'la solidarité un mécanisme de redistribution.</li>' +
      '<li>L’exemple attendu par le programme : le financement de l’école publique et les fonds sociaux ' +
      'destinés aux élèves. C’est concret, et c’est vous.</li></ul>' }
  ]
},
{
  id: 'emc-egalite', bloc: 'emc-valeurs', titre: 'Égalité femmes-hommes',
  resume: 'Un principe qui transforme la société, non sans résistances.',
  capacites: [
    'Mettre en regard l’évolution juridique et les données statistiques sur la place des femmes.',
    'Analyser les causes historiques des inégalités : stéréotypes et préjugés.',
    'Étudier la représentation genrée des formations et des professions, et les actions pour la dépasser.',
    'Montrer que les violences sexistes et sexuelles portent atteinte à la cohésion d’une société démocratique.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme choisit une formulation précise : l’égalité femmes-hommes « illustre la manière dont ' +
      'un principe, objet de mobilisations et de politiques volontaristes, <b>transforme progressivement ' +
      'la société, tout en se heurtant à diverses formes de résistance</b> ».</p>' +
      '<p>Les deux moitiés comptent : la transformation <b>et</b> les résistances.</p>' },
    { k: 'reperes', t: 'Les étapes juridiques', c:
      '<ul class="dates">' +
      '<li><b>1944</b> <span>droit de vote et d’éligibilité des femmes</span></li>' +
      '<li><b>1965</b> <span>les femmes mariées peuvent travailler et ouvrir un compte sans l’accord du mari</span></li>' +
      '<li><b>1972</b> <span>principe « à travail égal, salaire égal » inscrit dans la loi</span></li>' +
      '<li><b>1975</b> <span>loi Veil sur l’interruption volontaire de grossesse</span></li>' +
      '<li><b>2000</b> <span>loi sur la parité en politique</span></li>' +
      '<li><b>2024</b> <span>la liberté de recourir à l’IVG entre dans la Constitution</span></li></ul>' },
    { k: 'prop', t: 'Le droit ne suffit pas', c:
      '<p>Le programme demande de <b>mettre en regard</b> deux séries de données : les textes juridiques, ' +
      'et les statistiques réelles sur la vie quotidienne, l’univers professionnel et la vie politique.</p>' +
      '<p>L’écart entre les deux est précisément l’objet du chapitre. Il s’explique par les ' +
      '<b>stéréotypes et les préjugés</b>, qui orientent notamment les choix de formation ' +
      'et la représentation genrée des métiers.</p>' },
    { k: 'prop', t: 'Violences sexistes et sexuelles', c:
      '<p>En lien avec l’éducation à la vie affective, relationnelle et sexuelle, le programme demande de montrer ' +
      'que ces violences <b>portent atteinte à la cohésion d’une société démocratique</b> : ' +
      'elles ne sont pas seulement des atteintes individuelles.</p>' +
      '<p>Il demande aussi d’étudier les actions menées pour lutter contre.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Toujours associer une <b>avancée juridique</b> et une <b>donnée chiffrée</b> : ' +
      'c’est exactement la démarche demandée.</li>' +
      '<li>La représentation genrée des formations est l’exemple le plus proche de vous : ' +
      'la part des filles en spécialité mathématiques ou en NSI se discute très bien.</li>' +
      '<li>Le mot « résistance » est dans le programme : ne pas raconter une marche linéaire vers le progrès.</li></ul>' }
  ]
},
{
  id: 'emc-discriminations', bloc: 'emc-valeurs', titre: 'Discriminations et société inclusive',
  resume: 'Du principe d’égalité à la société inclusive.',
  capacites: [
    'Distinguer la définition juridique des discriminations et la manière dont elles sont ressenties.',
    'Examiner les moyens mis en œuvre par l’État pour mesurer les discriminations.',
    'Étudier l’action d’une institution ou d’une association luttant contre les discriminations.',
    'Aborder la question du traitement médiatique des minorités.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le mot « discrimination » est employé partout, souvent à tort. Ce chapitre apprend à distinguer ' +
      'ce qui est <b>juridiquement</b> une discrimination de ce qui est <b>ressenti</b> comme tel. ' +
      'Cette distinction est explicitement demandée par le programme.</p>' },
    { k: 'def', t: 'La définition juridique', c:
      '<p>Une discrimination, au sens du <b>Code pénal, articles 225-1 et suivants</b>, est un traitement ' +
      'défavorable appliqué à une personne en raison d’un <b>critère interdit par la loi</b>.</p>' +
      '<p>Trois éléments doivent être réunis : un <b>traitement défavorable</b>, un <b>critère prohibé</b> ' +
      '(origine, sexe, handicap, âge, religion, orientation sexuelle, état de santé, etc.), ' +
      'et un <b>domaine visé</b> par la loi, comme l’emploi, le logement ou l’accès à un service.</p>' +
      '<p>Sans ces trois éléments, il peut y avoir injustice, mais pas discrimination au sens juridique.</p>' },
    { k: 'prop', t: 'La société inclusive', c:
      '<p>Le programme lie explicitement la lutte contre les discriminations aux principes d’<b>égalité</b> ' +
      'et de <b>fraternité</b>.</p>' +
      '<p>La conception d’une <b>société inclusive</b>, tournée vers les personnes en situation de handicap, ' +
      'y ajoute un <b>impératif de solidarité</b>. Il ne s’agit plus seulement de ne pas exclure, ' +
      'mais d’adapter la société pour permettre la participation de tous.</p>' },
    { k: 'def', t: 'Les institutions à connaître', c:
      '<ul><li><b>Le Défenseur des droits</b> : autorité constitutionnelle indépendante, saisissable ' +
      'gratuitement par toute personne s’estimant discriminée.</li>' +
      '<li><b>La Dilcrah</b> : délégation interministérielle à la lutte contre le racisme, l’antisémitisme ' +
      'et la haine anti-LGBT.</li>' +
      '<li><b>La CNCDH</b> : commission nationale consultative des droits de l’homme, qui publie ' +
      'un rapport annuel sur le racisme.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Citer l’<b>article 225-1 du Code pénal</b> ancre la réponse dans le droit, ' +
      'et c’est ce que le programme demande.</li>' +
      '<li>Mesurer les discriminations est difficile en France : les statistiques ethniques y sont interdites. ' +
      'On procède par <b>testing</b> et par enquêtes de victimation. Le dire montre une vraie compréhension.</li>' +
      '<li>Sur le traitement médiatique des minorités, le programme fait un lien explicite avec ' +
      'l’éducation aux médias et à l’information.</li></ul>' }
  ]
},
{
  id: 'emc-racisme', bloc: 'emc-valeurs', titre: 'Racisme, antisémitisme et haines',
  resume: 'Ce que la loi punit, et pourquoi.',
  capacites: [
    'Identifier les agissements discriminatoires : paroles, violences, harcèlement.',
    'Réfléchir aux objectifs et aux contours des normes juridiques qui les punissent.',
    'Connaître les grandes lois de lutte contre le racisme et les discriminations.',
    'Expliquer en quoi ces agissements portent atteinte à la cohésion d’une société démocratique.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme énumère précisément : le <b>racisme</b>, l’<b>antisémitisme</b>, l’<b>antitsiganisme</b>, ' +
      'la <b>xénophobie</b> et la <b>haine anti-LGBT</b>. Tous portent atteinte à la cohésion d’une société ' +
      'démocratique, et tous sont <b>punis par la loi</b>.</p>' +
      '<p>La question de fond du chapitre : jusqu’où la liberté d’expression peut-elle aller ?</p>' },
    { k: 'reperes', t: 'Les trois lois du programme', c:
      '<ul class="dates">' +
      '<li><b>1er juillet 1972</b> <span>loi <b>Pleven</b> : réprime la provocation à la haine raciale, ' +
      'la diffamation et l’injure à caractère raciste</span></li>' +
      '<li><b>13 juillet 1990</b> <span>loi <b>Gayssot</b> : réprime la contestation des crimes contre ' +
      'l’humanité, dont la négation de la Shoah</span></li>' +
      '<li><b>30 décembre 2004</b> <span>étend la répression aux propos discriminatoires fondés sur le sexe, ' +
      'l’orientation sexuelle ou le handicap, et crée la Halde</span></li></ul>' },
    { k: 'prop', t: 'Liberté d’expression et limites', c:
      '<p>La liberté d’expression est un principe fondamental, mais elle n’est pas absolue. ' +
      'Le droit français distingue :</p>' +
      '<ul><li>l’<b>opinion</b>, libre, même choquante ;</li>' +
      '<li>l’<b>injure</b> et la <b>diffamation</b> à caractère raciste, punies ;</li>' +
      '<li>la <b>provocation à la haine</b> ou à la violence, punie plus sévèrement ;</li>' +
      '<li>la <b>contestation de crimes contre l’humanité</b>, punie depuis 1990.</li></ul>' +
      '<p>Le racisme n’est donc pas une opinion au sens juridique : c’est un <b>délit</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Retenir les trois lois par leur <b>nom</b> et leur <b>date</b> : Pleven 1972, Gayssot 1990, et 2004. ' +
      'Elles sont nommément au programme.</li>' +
      '<li>La formule qui fait mouche : « le racisme n’est pas une opinion, c’est un délit ».</li>' +
      '<li>Le harcèlement, y compris en ligne, entre dans ce champ. Le relier au quotidien est attendu.</li></ul>' }
  ]
},
{
  id: 'emc-laicite', bloc: 'emc-valeurs', titre: 'Pluralisme et laïcité',
  resume: 'Rendre possible la coexistence pacifique.',
  capacites: [
    'Expliquer que la laïcité vise à rendre possible la coexistence pacifique d’individus aux options différentes.',
    'Montrer l’importance de l’autorité arbitrale de l’État, notamment dans la police des cultes.',
    'Expliquer que l’État crée ainsi les conditions de la coexistence et du pluralisme.',
    'Connaître la position de la Cour européenne des droits de l’Homme sur les restrictions possibles.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La formulation du programme est très précise, et elle est souvent mal comprise : ' +
      '« le principe de la laïcité vise à <b>rendre possible la coexistence pacifique</b> d’individus ' +
      'et de groupes dont les options philosophiques ou religieuses <b>restent différentes</b> ».</p>' +
      '<p>La laïcité ne demande donc pas d’effacer les convictions : elle organise leur coexistence.</p>' },
    { k: 'reperes', t: 'Les textes de référence', c:
      '<ul class="dates">' +
      '<li><b>1882 et 1886</b> <span>lois scolaires : laïcité des programmes puis des personnels</span></li>' +
      '<li><b>9 décembre 1905</b> <span>loi de séparation des Églises et de l’État</span></li>' +
      '<li><b>1905, art. 1</b> <span>la République assure la liberté de conscience et garantit ' +
      'le libre exercice des cultes</span></li>' +
      '<li><b>1905, art. 2</b> <span>la République ne reconnaît, ne salarie ni ne subventionne aucun culte</span></li>' +
      '<li><b>1905, art. 27 et 28</b> <span>la police des cultes : l’État arbitre, et interdit les signes ' +
      'religieux sur les monuments publics</span></li>' +
      '<li><b>2004</b> <span>interdiction des signes religieux ostensibles à l’école publique</span></li></ul>' },
    { k: 'prop', t: 'L’État arbitre', c:
      '<p>Le programme insiste sur l’<b>autorité arbitrale de l’État</b>, illustrée par la <b>police des cultes</b> ' +
      '(articles 27 et 28 de la loi de 1905). L’État ne prend pas parti entre les convictions : ' +
      'il fixe le cadre qui permet à toutes de coexister.</p>' +
      '<p>La <b>Cour européenne des droits de l’Homme</b> reconnaît que des <b>restrictions</b> à la liberté ' +
      'de manifester sa religion ou ses convictions <b>sont possibles</b>, dès lors qu’elles sont prévues par la loi ' +
      'et nécessaires dans une société démocratique.</p>' },
    { k: 'piege', t: 'Les contresens à éviter', c:
      '<ul><li>La laïcité <b>n’interdit pas</b> les religions : elle garantit la liberté de conscience ' +
      'et le libre exercice des cultes.</li>' +
      '<li>Elle ne s’applique pas de la même manière partout : les <b>agents publics</b> sont tenus ' +
      'à la neutralité, les <b>usagers</b> sont libres, sauf règles particulières comme à l’école publique.</li>' +
      '<li>Ce n’est pas un principe contre les croyants, c’est un principe qui protège aussi la liberté de croire.</li></ul>' }
  ]
},

/* ================= PARTIE 2 ================= */
{
  id: 'emc-indivisibilite', bloc: 'emc-nation', titre: 'Indivisibilité et décentralisation',
  resume: 'L’unité de la Nation et la diversité des territoires.',
  capacites: [
    'Expliquer l’équilibre assuré par la Constitution entre unité de la Nation et diversité des territoires.',
    'Étudier le statut et l’organisation des collectivités territoriales.',
    'Expliquer la décentralisation et le transfert de compétences préalablement étatiques.',
    'Étudier le statut des territoires ultramarins pour définir le principe d’indivisibilité.',
    'Faire le lien entre unité du territoire et reconnaissance de la diversité, à partir des langues régionales.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La Constitution dispose que la République est « <b>indivisible</b> » et que « son organisation ' +
      'est <b>décentralisée</b> ». Les deux mots sont dans la même phrase, et ils tirent en sens contraire. ' +
      'Tout le chapitre consiste à comprendre cet <b>équilibre</b>.</p>' },
    { k: 'reperes', t: 'Les repères', c:
      '<ul class="dates">' +
      '<li><b>1982</b> <span>premières lois de décentralisation : transfert de compétences de l’État ' +
      'aux collectivités territoriales</span></li>' +
      '<li><b>2003</b> <span>révision constitutionnelle : « son organisation est décentralisée » ' +
      'entre dans l’article premier</span></li>' +
      '<li><b>art. 75-1</b> <span>les langues régionales appartiennent au « patrimoine de la France »</span></li></ul>' },
    { k: 'prop', t: 'Qui fait quoi ?', c:
      '<p>La décentralisation a transféré des compétences, en particulier dans les domaines cités par le programme : ' +
      'l’éducation, la santé et le travail.</p>' +
      '<ul><li><b>La commune</b> : écoles primaires, urbanisme, état civil.</li>' +
      '<li><b>Le département</b> : collèges, action sociale, routes départementales.</li>' +
      '<li><b>La région</b> : <b>lycées</b>, formation professionnelle, transports, développement économique.</li>' +
      '<li><b>L’État</b> : conserve les programmes, les diplômes et les personnels enseignants.</li></ul>' +
      '<p>Ton lycée est donc construit et entretenu par la région, mais ton professeur est payé par l’État. ' +
      'C’est l’exemple le plus parlant du partage.</p>' },
    { k: 'prop', t: 'Les territoires ultramarins', c:
      '<p>Leurs statuts ont <b>évolué</b> et sont <b>divers</b> : départements et régions d’outre-mer, ' +
      'collectivités à statut particulier, Nouvelle-Calédonie au statut propre.</p>' +
      '<p>Cette diversité de statuts, au sein d’une République indivisible, est justement ce que le programme ' +
      'demande d’utiliser « pour définir le principe d’indivisibilité ».</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Décentralisation n’est pas fédéralisme : les collectivités exercent des compétences, ' +
      'mais elles ne font pas la loi.</li>' +
      '<li>L’article 75-1 sur les langues régionales est l’exemple parfait de l’équilibre : ' +
      'la diversité est reconnue comme <b>patrimoine commun</b>, donc comme facteur d’unité.</li>' +
      '<li>Parler de son propre lycée et de sa région est toujours bien vu en EMC.</li></ul>' }
  ]
},
{
  id: 'emc-nationalite', bloc: 'emc-nation', titre: 'Nationalité et citoyenneté',
  resume: 'Une communauté nationale ouverte.',
  capacites: [
    'Examiner les diverses procédures par lesquelles s’acquiert la nationalité française.',
    'Distinguer le droit du sang et le droit du sol.',
    'Présenter les droits afférents à la citoyenneté européenne.',
    'Mettre en lumière des personnalités d’origine étrangère ayant joué un rôle significatif dans l’histoire nationale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme emploie une expression forte : dans la République française, la communauté nationale ' +
      'est une <b>communauté ouverte</b>. Elle l’est parce qu’on peut <b>acquérir</b> la nationalité, ' +
      'et parce qu’il existe une <b>citoyenneté européenne</b> qui s’y ajoute.</p>' },
    { k: 'def', t: 'Droit du sang et droit du sol', c:
      '<ul><li><b>Droit du sang</b> : est français l’enfant dont au moins un parent est français, ' +
      'quel que soit son lieu de naissance.</li>' +
      '<li><b>Droit du sol</b> : est français, sous conditions de naissance et de résidence en France, ' +
      'l’enfant né en France de parents étrangers.</li></ul>' +
      '<p>Le droit français combine les deux. Les autres voies d’acquisition sont la <b>naturalisation</b> ' +
      '(décision de l’administration, sous conditions de résidence, d’intégration et de connaissance de la langue) ' +
      'et le <b>mariage</b> avec un ressortissant français, sous conditions de délai.</p>' },
    { k: 'def', t: 'Nationalité, citoyenneté : ce n’est pas la même chose', c:
      '<p>La <b>nationalité</b> est un lien juridique d’appartenance à un État. ' +
      'La <b>citoyenneté</b> est l’ensemble des droits politiques qui en découlent : voter, être élu, ' +
      'accéder aux emplois publics.</p>' +
      '<p>Un mineur français a la nationalité sans exercer encore la citoyenneté politique. ' +
      'Un citoyen européen résidant en France vote aux élections municipales et européennes, ' +
      'mais pas aux élections nationales.</p>' },
    { k: 'prop', t: 'La citoyenneté européenne', c:
      '<p>Elle s’ajoute à la citoyenneté nationale, sans la remplacer. Elle donne notamment :</p>' +
      '<ul><li>la <b>libre circulation</b> et le droit de séjour dans l’Union ;</li>' +
      '<li>le droit de <b>voter et d’être élu</b> aux élections municipales et européennes dans l’État de résidence ;</li>' +
      '<li>la <b>protection diplomatique</b> par tout État membre hors de l’Union ;</li>' +
      '<li>le droit de pétition devant le Parlement européen et de saisine du Médiateur européen.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Distinguer nettement <b>nationalité</b> et <b>citoyenneté</b> : c’est la distinction ' +
      'que le correcteur cherche en premier.</li>' +
      '<li>Le programme renvoie au recueil <b>Portraits de France</b> pour trouver des personnalités ' +
      'd’origine étrangère ayant marqué l’histoire nationale : un exemple nommé vaut mieux qu’une généralité.</li>' +
      '<li>La citoyenneté européenne <b>s’ajoute</b>, elle ne remplace pas. Le dire évite un contresens fréquent.</li></ul>' }
  ]
},
{
  id: 'emc-memoire', bloc: 'emc-nation', titre: 'Mémoire et patriotisme constitutionnel',
  resume: 'Ce que la Nation choisit de commémorer.',
  capacites: [
    'Saisir les enjeux mémoriels à partir d’un personnage, d’un lieu, d’un monument ou d’un évènement.',
    'Clarifier le sens des commémorations et discuter la notion de « devoir de mémoire ».',
    'Expliquer en quoi les questions mémorielles peuvent être ferment d’unité ou champ d’affrontements.',
    'Expliquer l’idée de patriotisme constitutionnel.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme dit les choses sans détour : les questions mémorielles constituent ' +
      '« <b>tantôt le ferment de son unité, tantôt un champ d’affrontements idéologiques et politiques</b> ».</p>' +
      '<p>Une commémoration n’est donc jamais neutre : elle résulte d’un choix, et ce choix peut être discuté.</p>' },
    { k: 'def', t: 'Histoire et mémoire', c:
      '<ul><li>L’<b>histoire</b> est une discipline scientifique : elle établit des faits à partir de sources, ' +
      'avec une méthode, et elle se corrige.</li>' +
      '<li>La <b>mémoire</b> est un rapport vécu et affectif au passé, porté par des groupes. ' +
      'Elle est plurielle, sélective, et légitime en tant que telle.</li></ul>' +
      '<p>Confondre les deux est l’erreur classique. Une mémoire n’est pas fausse parce qu’elle est partielle : ' +
      'elle n’a simplement pas le même statut qu’un savoir historique.</p>' },
    { k: 'def', t: 'Le patriotisme constitutionnel', c:
      '<p>Le programme en donne la définition : c’est l’idée qui « exprime l’<b>attachement des citoyens ' +
      'aux principes fondateurs</b> de la République et de la démocratie françaises, ainsi que le souci ' +
      'de les voir respectés et de mieux en mieux réalisés ».</p>' +
      '<p>On est donc attaché à des <b>principes</b> plutôt qu’à une origine ou à une appartenance. ' +
      'C’est une forme d’attachement ouverte, compatible avec la diversité des origines.</p>' },
    { k: 'reperes', t: 'Quelques dates de commémoration', c:
      '<ul class="dates">' +
      '<li><b>14 juillet</b> <span>fête nationale</span></li>' +
      '<li><b>8 mai</b> <span>victoire de 1945</span></li>' +
      '<li><b>11 novembre</b> <span>armistice de 1918, et hommage à tous les morts pour la France</span></li>' +
      '<li><b>10 mai</b> <span>journée de commémoration de l’abolition de l’esclavage</span></li>' +
      '<li><b>27 janvier</b> <span>journée de la mémoire des génocides et de la prévention des crimes contre l’humanité</span></li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La notion de « devoir de mémoire » est à <b>discuter</b>, pas à réciter : ' +
      'le programme emploie le verbe « discuter ».</li>' +
      '<li>Choisir un exemple <b>local</b> fonctionne très bien : le monument aux morts de la commune, ' +
      'le nom d’une rue, une plaque au lycée.</li>' +
      '<li>Le patriotisme constitutionnel est un attachement <b>aux principes</b> : ' +
      'c’est ce qui le distingue du nationalisme.</li></ul>' }
  ]
},
{
  id: 'emc-defense', bloc: 'emc-nation', titre: 'Défense et sécurité nationale',
  resume: 'Des enjeux renouvelés dans un monde interdépendant.',
  capacites: [
    'Comprendre ce que recouvre la notion de « sécurité nationale » introduite par le Livre blanc de 2008.',
    'Articuler cette notion aux perspectives d’une défense européenne.',
    'Préciser les modalités et les enjeux des « guerres hybrides ».',
    'Connaître les dispositifs d’engagement : service national universel, service militaire volontaire, cadets de la République, classes de défense.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le programme relie la défense à la cohésion : « la communauté nationale se matérialise aussi ' +
      'par l’existence d’une <b>défense nationale</b> ». Celle-ci est confrontée à des <b>enjeux renouvelés</b>, ' +
      'terrorisme et cybersécurité notamment, dans un monde de plus en plus interdépendant.</p>' },
    { k: 'def', t: 'De la défense à la sécurité nationale', c:
      '<p>Le <b>Livre blanc sur la défense et la sécurité nationale de 2008</b> a introduit un élargissement : ' +
      'on ne parle plus seulement de défense militaire, mais de <b>sécurité nationale</b>.</p>' +
      '<p>Cette notion englobe la défense militaire, la sécurité intérieure, la sécurité civile, ' +
      'la sécurité économique, la cybersécurité et la résilience de la société face aux crises.</p>' },
    { k: 'def', t: 'Les guerres hybrides', c:
      '<p>Une guerre hybride combine des moyens <b>militaires et non militaires</b>, souvent sans déclaration ' +
      'de guerre et sans attribution claire :</p>' +
      '<ul><li>cyberattaques contre des infrastructures ou des institutions ;</li>' +
      '<li>désinformation et manipulation de l’information ;</li>' +
      '<li>pressions économiques et énergétiques ;</li>' +
      '<li>forces sans insigne, ou groupes intermédiaires.</li></ul>' +
      '<p>Le programme fait ici un lien explicite avec l’<b>éducation aux médias et à l’information</b> : ' +
      'savoir vérifier une information devient un enjeu de défense.</p>' },
    { k: 'prop', t: 'Les dispositifs d’engagement', c:
      '<p>Le programme cite nommément : le <b>service national universel</b>, dont un objectif est de renforcer ' +
      'l’engagement des jeunes et la cohésion nationale, le <b>service militaire volontaire</b>, ' +
      'les <b>cadets de la République</b>, les <b>classes de défense et de sécurité globales</b>, ' +
      'et les <b>classes et lycées engagés</b>.</p>' +
      '<p>S’y ajoutent, pour tout citoyen, la <b>journée défense et citoyenneté</b> et la possibilité ' +
      'de s’engager dans la <b>réserve</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La notion clé est l’<b>élargissement</b> : de la défense militaire à la sécurité nationale, ' +
      'qui inclut le civil, le numérique et l’économique.</li>' +
      '<li>La <b>défense européenne</b> est explicitement au programme : ne pas raisonner seulement ' +
      'à l’échelle française.</li>' +
      '<li>Une cyberattaque n’est pas une anecdote technique : c’est une atteinte possible à la sécurité nationale.</li></ul>' }
  ]
},

/* ================= MÉTHODE ================= */
{
  id: 'emc-debat', bloc: 'emc-method', titre: 'Le débat argumenté',
  resume: 'La méthode propre à l’EMC.',
  capacites: [
    'Participer à un débat pour résoudre des conflits ou prendre des décisions.',
    'Écouter, observer, réfléchir avec discernement et esprit critique.',
    'Exprimer ce que l’on ressent et faire preuve d’empathie.',
    'S’impliquer dans un projet collectif et coopérer.',
    'Distinguer un argument d’une opinion, et appuyer son propos sur des faits et des textes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Les quatre dimensions de l’EMC', c:
      '<p>Le programme construit les compétences civiques à travers quatre dimensions, reprises du ' +
      '<b>cadre de référence des compétences pour une culture de la démocratie</b> du Conseil de l’Europe :</p>' +
      '<ul><li>les <b>valeurs</b> : liberté, égalité, fraternité et laïcité, solidarité, égalité entre femmes ' +
      'et hommes, refus de toutes les discriminations, respect de la dignité humaine, État de droit ;</li>' +
      '<li>les <b>connaissances</b> : citoyenneté et institutions, règle et droit, défense et sécurité, ' +
      'développement durable, information et médias ;</li>' +
      '<li>les <b>attitudes</b> : respect d’autrui, respect de soi, prise d’initiative, esprit civique, ' +
      'engagement et sens des responsabilités ;</li>' +
      '<li>les <b>aptitudes</b> : écoute et observation, réflexion et discernement, esprit critique, ' +
      'empathie, coopération, participation au débat.</li></ul>' },
    { k: 'meth', t: 'Préparer un débat réglé', c:
      '<ul><li>1. <b>Cerner la question</b> : de quoi débat-on exactement ? Une question mal posée ' +
      'produit un débat qui tourne en rond.</li>' +
      '<li>2. <b>Définir les termes</b> : beaucoup de désaccords ne sont que des malentendus de vocabulaire.</li>' +
      '<li>3. <b>Rassembler des faits</b> : données chiffrées, textes de loi, décisions de justice, ' +
      'exemples précis. Un débat d’EMC n’est pas un échange d’impressions.</li>' +
      '<li>4. <b>Préparer les deux camps</b> : savoir défendre la position adverse est le meilleur moyen ' +
      'de solidifier la sienne.</li>' +
      '<li>5. <b>Prévoir les rôles</b> : président de séance, secrétaire, intervenants.</li></ul>' },
    { k: 'def', t: 'Argument, opinion, fait', c:
      '<ul><li>Un <b>fait</b> est vérifiable : « la loi Gayssot date de 1990 ».</li>' +
      '<li>Une <b>opinion</b> exprime un point de vue : « cette loi est trop restrictive ».</li>' +
      '<li>Un <b>argument</b> relie une opinion à un fait par un raisonnement : ' +
      '« cette loi restreint la liberté d’expression, car elle punit la contestation de faits historiques établis ; ' +
      'ses défenseurs répondent que la négation d’un génocide est une atteinte à la dignité des victimes ».</li></ul>' +
      '<p>Seul l’argument fait avancer un débat.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Citer un <b>texte</b> précis change tout : article du Code pénal, article de la Constitution, ' +
      'date d’une loi, décision du Conseil constitutionnel.</li>' +
      '<li>Reformuler l’argument adverse avant d’y répondre est la marque d’une vraie écoute, ' +
      'et c’est une aptitude explicitement au programme.</li>' +
      '<li>Ne jamais confondre <b>convaincre</b> et <b>avoir raison plus fort</b> : ' +
      'le ton compte autant que le contenu en EMC.</li>' +
      '<li>Les dispositifs de participation de votre lycée, comme le <b>CVL</b> et les <b>écodélégués</b>, ' +
      'sont des exemples d’engagement à citer.</li></ul>' }
  ]
}
];

CHAPITRES_EMC.forEach(c => {
  c.gens = [];
  c.matiere = 'emc';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
