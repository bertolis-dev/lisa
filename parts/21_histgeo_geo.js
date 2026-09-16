/* =========================================================================
   Histoire-géographie, suite : les 4 thèmes de géographie et les chapitres
   de méthode. Même source officielle que 20_histgeo.js.
   ========================================================================= */

CHAPITRES_HG.push(

/* ================= GÉOGRAPHIE ================= */
{
  id: 'hg-g1-metropolisation', bloc: 'hg-geographie',
  titre: 'La métropolisation : un processus mondial différencié',
  resume: 'Thème 1. Les villes concentrent hommes, activités et pouvoir.',
  capacites: [
    'Expliquer le poids croissant des métropoles à l’échelle mondiale.',
    'Montrer que les métropoles sont inégalement attractives et n’exercent pas la même influence.',
    'Analyser les recompositions internes des métropoles : étalement urbain, nouveaux centres, inégalités.',
    'Étudier la France : la métropolisation et ses effets.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Depuis 2007, plus de la moitié de la population mondiale vit en ville, et cette part continue de progresser. ' +
      'Comprendre la métropolisation, c’est comprendre <b>où se décide le monde</b>, et pourquoi certaines villes comptent ' +
      'plus que des États entiers.</p>' },
    { k: 'def', t: 'Les notions du thème', c:
      '<ul><li><b>Urbanisation</b> : la part croissante de la population qui vit en ville.</li>' +
      '<li><b>Métropolisation</b> : la concentration des <b>populations</b>, des <b>activités</b> et surtout ' +
      'des <b>fonctions de commandement</b> dans quelques grandes villes.</li>' +
      '<li><b>Métropole</b> : une ville qui concentre ces fonctions et rayonne au-delà de son territoire.</li>' +
      '<li><b>Centralité</b> : la capacité d’un lieu à polariser, à attirer.</li>' +
      '<li><b>Ville primatiale</b> : une ville très supérieure à toutes les autres du pays, comme Paris en France.</li>' +
      '<li><b>Étalement urbain</b> : l’extension spatiale de la ville vers ses périphéries.</li></ul>' },
    { k: 'prop', t: 'Les deux questions du programme', c:
      '<p><b>1. Les villes à l’échelle mondiale : le poids croissant des métropoles.</b><br>' +
      'L’urbanisation s’accompagne d’une métropolisation. Les métropoles concentrent ce qui commande : ' +
      'sièges sociaux, bourses, universités, médias, institutions internationales.</p>' +
      '<p><b>2. Des métropoles inégales et en mutation.</b><br>' +
      'Elles partagent des attributs visibles (quartier d’affaires, équipement culturel de premier plan, ' +
      'nœud de transports majeur, institution de recherche et d’innovation), mais elles sont très diverses ' +
      'et inégalement attractives.</p>' +
      '<p>À l’échelle locale, l’étalement urbain et l’apparition de <b>nouveaux centres fonctionnels</b>, ' +
      'dans la ville-centre comme dans les périphéries, recomposent l’espace et <b>accentuent les inégalités</b> ' +
      'à l’intérieur même des métropoles.</p>' },
    { k: 'cas', t: 'Les études de cas du programme', c:
      '<ul><li>La métropolisation au Brésil : dynamiques et contrastes.</li>' +
      '<li>Londres : une métropole de rang mondial.</li>' +
      '<li>Mumbai : une métropole fragmentée.</li>' +
      '<li>La mégalopole du Nord-Est des États-Unis, de Boston à Washington : des synergies métropolitaines.</li></ul>' +
      '<p class="tiny">Le professeur en choisit une. C’est elle qui fournira tes exemples précis.</p>' },
    { k: 'meth', t: 'La question sur la France', c:
      '<p><b>La France : la métropolisation et ses effets.</b></p>' +
      '<ul><li>La métropolisation <b>renforce le poids de Paris</b>, ville primatiale.</li>' +
      '<li>Les <b>métropoles régionales</b>, métropolitaines et ultramarines, gagnent en importance et en attractivité, ' +
      'mais de façon différenciée, et se livrent une concurrence croissante.</li>' +
      '<li>Le rôle des <b>villes petites et moyennes</b> évolue : certaines sont mises à l’écart, avec dévitalisation ' +
      'de leur centre-ville ; d’autres connaissent un renouveau, porté par une dynamique économique locale ' +
      'et la valorisation du cadre de vie.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais confondre <b>urbanisation</b> (plus de citadins) et <b>métropolisation</b> ' +
      '(concentration du pouvoir dans quelques villes). C’est la première chose que vérifie un correcteur.</li>' +
      '<li>Toujours raisonner à <b>plusieurs échelles</b> : le monde, le pays, l’intérieur de la ville. ' +
      'Le même processus y produit des effets différents.</li>' +
      '<li>La métropolisation crée des inégalités <b>entre</b> les villes et <b>à l’intérieur</b> des villes. ' +
      'Les deux, pas une seule.</li></ul>' }
  ]
},
{
  id: 'hg-g2-production', bloc: 'hg-geographie',
  titre: 'Espaces et acteurs de la production',
  resume: 'Thème 2. Une diversification des lieux et des acteurs.',
  capacites: [
    'Montrer la diversité croissante des espaces de production dans le monde.',
    'Expliquer la métropolisation et la littoralisation des espaces productifs et l’accroissement des flux.',
    'Analyser l’organisation des chaînes de valeur ajoutée et le rôle des acteurs, publics comme privés.',
    'Étudier la France : les systèmes productifs entre valorisation locale et intégration européenne et mondiale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ton téléphone est conçu dans un pays, ses composants fabriqués dans plusieurs autres, assemblé ailleurs encore, ' +
      'et vendu partout. Ce thème explique <b>comment on en est arrivé là</b>, et qui décide de la localisation des usines.</p>' },
    { k: 'def', t: 'Les notions du thème', c:
      '<ul><li><b>Espace productif</b> : un espace aménagé et organisé pour produire des biens ou des services.</li>' +
      '<li><b>Système productif</b> : l’ensemble des acteurs, des lieux et des relations qui concourent à une production.</li>' +
      '<li><b>Chaîne de la valeur ajoutée</b> : la suite des étapes qui, de la conception à la vente, ajoutent chacune ' +
      'de la valeur au produit. Elles sont réparties entre plusieurs territoires.</li>' +
      '<li><b>Entreprise multinationale</b> : une entreprise implantée dans plusieurs pays, qui organise ces chaînes.</li>' +
      '<li><b>Flux</b> : les circulations de marchandises, de capitaux, d’informations, de personnes.</li>' +
      '<li><b>Littoralisation</b> : la concentration des activités productives sur les littoraux, au contact des grands ports.</li></ul>' },
    { k: 'prop', t: 'Les deux questions du programme', c:
      '<p><b>1. Les espaces de production dans le monde : une diversité croissante.</b><br>' +
      'Les espaces productifs majeurs sont divers et plus ou moins spécialisés. Ils sont de plus en plus nombreux, ' +
      'interconnectés, et se concentrent surtout <b>dans les métropoles et sur les littoraux</b>. ' +
      'Il ne faut pas oublier les <b>services</b>, qui produisent aussi de la richesse.</p>' +
      '<p><b>2. Métropolisation, littoralisation des espaces productifs et accroissement des flux.</b><br>' +
      'La production s’organise en <b>chaînes de valeur ajoutée</b> à différentes échelles, ce qui multiplie ' +
      'les flux matériels et immatériels.</p>' +
      '<p>Les chaînes sont largement organisées par les <b>entreprises internationales</b>, mais l’implantation des unités ' +
      'dépend aussi d’<b>autres acteurs, notamment publics</b>, des savoir-faire, des coûts de main-d’œuvre et des atouts ' +
      'des territoires, <b>mis en concurrence</b>. L’<b>économie numérique</b> élargit encore la diversité des espaces ' +
      'et des acteurs.</p>' },
    { k: 'cas', t: 'Les études de cas du programme', c:
      '<ul><li>Les espaces des industries aéronautique et aérospatiale européennes : une production en réseau.</li>' +
      '<li>Singapour : l’articulation de la finance, de la production et des flux.</li>' +
      '<li>Les investissements chinois en Afrique : la recomposition des acteurs et des espaces de la production ' +
      'aux échelles régionale et mondiale.</li>' +
      '<li>La Silicon Valley : un espace productif intégré de l’échelle locale à l’échelle mondiale.</li></ul>' },
    { k: 'meth', t: 'La question sur la France', c:
      '<p><b>La France : les systèmes productifs entre valorisation locale et intégration européenne et mondiale.</b></p>' +
      '<p>L’étude porte sur la France <b>Outre-mer inclus</b>. Elle met en avant les lieux et les acteurs de la production ' +
      'à l’échelle nationale, en soulignant l’articulation entre la <b>valorisation locale</b> (savoir-faire, terroirs, ' +
      'pôles de compétitivité) et l’<b>intégration européenne et mondiale</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le mot que le correcteur attend est <b>acteurs</b> : entreprises, États, collectivités, salariés, consommateurs. ' +
      'Une copie qui ne parle que d’entreprises est incomplète.</li>' +
      '<li>Ne pas réduire la production à l’industrie : les <b>services</b> sont explicitement dans le programme.</li>' +
      '<li>Penser l’Outre-mer quand on traite la France : c’est écrit dans le texte officiel, et presque toujours oublié.</li></ul>' }
  ]
},
{
  id: 'hg-g3-ruraux', bloc: 'hg-geographie',
  titre: 'Les espaces ruraux : multifonctionnalité ou fragmentation ?',
  resume: 'Thème 3. Des campagnes qui ne sont plus seulement agricoles.',
  capacites: [
    'Analyser la fragmentation des espaces ruraux.',
    'Expliquer l’affirmation des fonctions non agricoles et les conflits d’usages.',
    'Montrer la diminution de la part des agriculteurs et le maintien du rôle structurant de l’agriculture dans certains espaces.',
    'Étudier la France : des espaces ruraux multifonctionnels, entre initiatives locales et politiques européennes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le titre du thème est une <b>question</b>, et c’est voulu : les campagnes se diversifient, ce qui les enrichit ' +
      'et les fragilise en même temps. Un devoir doit trancher, ou montrer que les deux cohabitent.</p>' },
    { k: 'def', t: 'Les notions du thème', c:
      '<ul><li><b>Espace rural</b> : un espace de faible densité, où les paysages agricoles et naturels dominent.</li>' +
      '<li><b>Multifonctionnalité</b> : le fait qu’un même espace remplisse plusieurs fonctions : agricole, résidentielle, ' +
      'industrielle, environnementale, touristique.</li>' +
      '<li><b>Fragmentation</b> : la division d’un espace en portions aux dynamiques opposées, certaines attractives, ' +
      'd’autres à l’écart.</li>' +
      '<li><b>Périurbanisation</b> : l’installation de citadins dans les campagnes proches des villes.</li>' +
      '<li><b>Conflit d’usage</b> : une opposition entre acteurs qui veulent utiliser le même espace différemment.</li>' +
      '<li><b>Ruralité</b> : les manières de vivre et les représentations associées à ces espaces.</li></ul>' },
    { k: 'prop', t: 'Les deux questions du programme', c:
      '<p><b>1. La fragmentation des espaces ruraux.</b><br>' +
      'Les campagnes du monde connaissent un paradoxe : des liens de plus en plus étroits avec les villes, ' +
      'et en même temps l’affirmation de <b>spécificités rurales</b>, paysagères, économiques, socio-culturelles. ' +
      'Cela produit des dynamiques contrastées : valorisation, mise à l’écart, ou protection de la nature et du patrimoine.</p>' +
      '<p>La part des agriculteurs <b>diminue</b> partout dans les populations rurales. L’agriculture reste pourtant ' +
      '<b>structurante</b> pour certains espaces, avec des débouchés de plus en plus variés, alimentaires et non alimentaires.</p>' +
      '<p><b>2. Affirmation des fonctions non agricoles et conflits d’usages.</b><br>' +
      'La multifonctionnalité s’affirme de manière <b>inégale</b> selon les régions du monde. Elle diversifie ces espaces ' +
      'et les fragilise. D’où une <b>conflictualité accrue</b>, notamment autour du foncier : accaparement des terres, ' +
      'conflits d’usage. Se pose alors la question de leur <b>dépendance aux espaces urbains</b>.</p>' },
    { k: 'cas', t: 'Les études de cas du programme', c:
      '<ul><li>Les mutations des espaces ruraux de Toscane.</li>' +
      '<li>Les transformations paysagères des espaces ruraux d’une région française, métropolitaine ou ultramarine.</li>' +
      '<li>Mutations agricoles et recomposition des espaces ruraux en Inde.</li>' +
      '<li>Les espaces ruraux canadiens : une multifonctionnalité marquée.</li></ul>' },
    { k: 'meth', t: 'La question sur la France', c:
      '<p><b>La France : des espaces ruraux multifonctionnels, entre initiatives locales et politiques européennes.</b></p>' +
      '<ul><li>Mutation des systèmes agricoles et diversification des fonctions productives.</li>' +
      '<li>Pression urbaine croissante et liens accrus avec les espaces urbains.</li>' +
      '<li>Entre vieillissement et renouveau des populations rurales : des dynamiques démographiques ' +
      'et résidentielles diversifiées.</li></ul>' +
      '<p>Ces mutations posent des <b>enjeux d’aménagement</b> : soutien de l’agriculture, équipement numérique, télétravail, ' +
      'protection de l’environnement, maintien et réorganisation des services publics. Elles mobilisent des acteurs ' +
      '<b>à toutes les échelles</b>, du développement local aux politiques nationales et européennes.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>« Rural » n’est pas « agricole ». Les agriculteurs sont désormais <b>minoritaires</b> dans les campagnes : ' +
      'c’est le point de départ de tout le thème.</li>' +
      '<li>Un <b>conflit d’usage</b> est l’exemple le plus efficace : il met en scène des acteurs qui s’opposent, ' +
      'et c’est exactement ce que la géographie demande d’analyser.</li>' +
      '<li>Le titre est une question : une conclusion qui répond « les deux, selon les espaces » est une bonne conclusion, ' +
      'à condition de le démontrer.</li></ul>' }
  ]
},
{
  id: 'hg-g4-chine', bloc: 'hg-geographie',
  titre: 'La Chine : des recompositions spatiales multiples',
  resume: 'Thème 4 conclusif. Tout le programme appliqué à un pays.',
  capacites: [
    'Analyser le développement de la Chine et les inégalités qu’il produit.',
    'Étudier des ressources et des environnements sous pression.',
    'Expliquer les recompositions spatiales : urbanisation, littoralisation, mutations des espaces ruraux.',
    'Mobiliser les acquis des trois premiers thèmes sur une seule aire géographique.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le <b>thème conclusif</b> : il ne présente pas de notion nouvelle, il applique à un seul pays ' +
      'tout ce que tu as appris sur la métropolisation, la production et les espaces ruraux.</p>' +
      '<p>C’est aussi le thème le plus rentable en devoir : tes exemples chinois peuvent servir à traiter ' +
      'presque n’importe quel sujet de géographie de l’année.</p>' },
    { k: 'prop', t: 'Les trois questions du programme', c:
      '<p><b>1. Développement et inégalités.</b><br>' +
      'Une croissance spectaculaire, mais des écarts considérables entre littoral et intérieur, entre villes et campagnes, ' +
      'entre catégories sociales.</p>' +
      '<p><b>2. Des ressources et des environnements sous pression.</b><br>' +
      'Surexploitation des ressources, pollution de l’air et de l’eau, transition énergétique engagée ' +
      'mais dépendance persistante au charbon.</p>' +
      '<p><b>3. Recompositions spatiales : urbanisation, littoralisation, mutations des espaces ruraux.</b><br>' +
      'Migrations massives des campagnes vers les villes, croissance des métropoles, concentration des activités ' +
      'sur la façade maritime, transformation profonde des campagnes.</p>' },
    { k: 'def', t: 'Le mot clé : paradoxe', c:
      '<p>Le programme le dit explicitement : la Chine est un pays où les évolutions démographiques et les transitions, ' +
      'urbaine, environnementale, énergétique, <b>engendrent de nombreux paradoxes</b>.</p>' +
      '<ul><li>Deuxième puissance économique du monde, et de fortes inégalités internes.</li>' +
      '<li>Premier émetteur mondial de gaz à effet de serre, et premier investisseur dans les énergies renouvelables.</li>' +
      '<li>Une urbanisation fulgurante, et des campagnes qui se vident tout en restant peuplées de centaines de millions ' +
      'de personnes.</li></ul>' +
      '<p>Construire un devoir autour de ces paradoxes est la meilleure manière de traiter le thème.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Raisonner toujours en <b>opposition littoral / intérieur</b> : c’est la clé de lecture du territoire chinois, ' +
      'et elle se dessine très bien sur un croquis.</li>' +
      '<li>La politique de l’enfant unique, puis son abandon, explique une partie du vieillissement : ' +
      'un exemple précis vaut mieux qu’une généralité sur la démographie.</li>' +
      '<li>Comme c’est le thème conclusif, un correcteur apprécie les <b>renvois aux thèmes précédents</b> : ' +
      'Shanghai comme métropole, le delta de la rivière des Perles comme espace productif.</li></ul>' }
  ]
},

/* ================= MÉTHODES ET REPÈRES ================= */
{
  id: 'hg-reperes', bloc: 'hg-methode',
  titre: 'Chronologie et repères',
  resume: 'Le fil de 1789 à 1922, régime par régime.',
  capacites: [
    'Identifier et nommer les périodes historiques, les continuités et les ruptures chronologiques.',
    'Identifier et expliciter les dates et les acteurs clés des grands événements.',
    'Mettre en relation des faits de natures, de périodes et de localisations différentes.',
    'Utiliser l’échelle appropriée pour étudier un phénomène.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Une date fausse dans une copie décrédibilise tout le reste. Une date juste, bien placée, fait le contraire : ' +
      'elle prouve que tu maîtrises le contexte.</p>' +
      '<p>Le programme demande explicitement de <b>connaître et se repérer</b> : c’est la première des capacités travaillées.</p>' },
    { k: 'prop', t: 'Les régimes politiques français, dans l’ordre', c:
      '<ul class="dates">' +
      '<li><b>1789-1792</b> <span>Monarchie constitutionnelle</span></li>' +
      '<li><b>1792-1804</b> <span>Première République : Convention, Directoire, Consulat</span></li>' +
      '<li><b>1804-1814</b> <span>Premier Empire, Napoléon Ier</span></li>' +
      '<li><b>1814-1830</b> <span>Restauration : Louis XVIII, puis Charles X</span></li>' +
      '<li><b>1830-1848</b> <span>Monarchie de Juillet, Louis-Philippe</span></li>' +
      '<li><b>1848-1852</b> <span>Deuxième République</span></li>' +
      '<li><b>1852-1870</b> <span>Second Empire, Napoléon III</span></li>' +
      '<li><b>1870-1940</b> <span>Troisième République</span></li></ul>' +
      '<p>Sept régimes en quatre-vingts ans : c’est cette instabilité que raconte le programme d’histoire.</p>' },
    reperes([
      ['1789', 'Révolution française, Déclaration des droits de l’homme et du citoyen'],
      ['1804', 'Code civil ; Napoléon empereur'],
      ['1815', 'Congrès de Vienne'],
      ['1830', 'Trois Glorieuses ; début de la conquête de l’Algérie'],
      ['1848', 'Printemps des peuples ; suffrage universel masculin ; abolition de l’esclavage'],
      ['1852', 'Second Empire'],
      ['1870', 'Défaite de Sedan, proclamation de la République le 4 septembre'],
      ['1871', 'Commune de Paris ; proclamation de l’Empire allemand'],
      ['1875', 'Lois constitutionnelles de la Troisième République'],
      ['1881-1882', 'Lois Ferry sur l’école'],
      ['1894-1906', 'Affaire Dreyfus'],
      ['1905', 'Séparation des Églises et de l’État'],
      ['1914-1918', 'Première Guerre mondiale'],
      ['1919', 'Traité de Versailles'],
      ['1920', 'Société des Nations ; le soldat inconnu']
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Apprendre les dates <b>par régime</b>, pas en liste : le cerveau retient une histoire, pas un tableau.</li>' +
      '<li>Retenir les <b>couples</b> : 1848 et le suffrage universel masculin, 1871 et Versailles, 1905 et la laïcité. ' +
      'Une date seule s’oublie, une date avec son sens reste.</li>' +
      '<li>En géographie, le repère est <b>spatial</b> : savoir placer Londres, Mumbai, Shanghai, la Silicon Valley, ' +
      'la mégalopole du Nord-Est américain.</li></ul>' }
  ]
},
{
  id: 'hg-m-composition', bloc: 'hg-methode',
  titre: 'La composition',
  resume: 'Répondre à une question problématisée, en devoir.',
  capacites: [
    'S’approprier un questionnement historique ou géographique.',
    'Construire une argumentation historique ou géographique.',
    'Utiliser les notions et le lexique acquis à bon escient.',
    'Justifier des choix, une interprétation, une production.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’exercice', c:
      '<p>Le programme nomme trois exercices travaillés tout au long du lycée : la <b>composition</b>, ' +
      'l’<b>analyse critique de document(s)</b> et la <b>réalisation d’un croquis</b>.</p>' +
      '<p>En première, l’histoire-géographie est évaluée en <b>contrôle continu</b> : ce sont les devoirs faits en classe ' +
      'qui comptent. La composition y est posée le plus souvent sous la forme d’une <b>question problématisée</b>.</p>' },
    { k: 'meth', t: 'La méthode, étape par étape', c:
      '<ul><li>1. <b>Analyser le sujet</b> : souligner les mots clés, et repérer les <b>bornes</b>. ' +
      'Un sujet d’histoire a toujours des bornes chronologiques, un sujet de géographie des bornes spatiales.</li>' +
      '<li>2. <b>Problématiser</b> : transformer le sujet en une question qui mérite une réponse construite.</li>' +
      '<li>3. <b>Mobiliser</b> : noter au brouillon tout ce qui vient, dates, acteurs, notions, exemples, puis trier.</li>' +
      '<li>4. <b>Bâtir le plan</b> : deux ou trois parties, chacune répondant à un aspect de la problématique.</li>' +
      '<li>5. <b>Rédiger</b> entièrement, en sautant une ligne entre les parties.</li></ul>' },
    { k: 'prop', t: 'Les trois plans possibles', c:
      '<ul><li><b>Chronologique</b> : des étapes qui se succèdent. Le plus naturel en histoire, à condition ' +
      'que chaque étape marque une vraie rupture.</li>' +
      '<li><b>Thématique</b> : politique, économique, social, culturel. Utile, mais attention au catalogue.</li>' +
      '<li><b>Analytique ou dialectique</b> : constat, puis limites, puis dépassement. Le plus exigeant, ' +
      'et celui qui rapporte le plus quand il est maîtrisé.</li></ul>' +
      '<p>En géographie, on ajoute souvent un plan <b>multiscalaire</b> : du mondial au local.</p>' },
    { k: 'meth', t: 'L’introduction et la conclusion', c:
      '<p><b>Introduction</b> en quatre temps : une <b>accroche</b> (un fait, une date, un chiffre) · ' +
      'la <b>définition des termes</b> du sujet · la <b>problématique</b> · l’<b>annonce du plan</b>.</p>' +
      '<p><b>Conclusion</b> en deux temps : la <b>réponse</b> à la problématique, puis une <b>ouverture</b> ' +
      'vers un autre espace, une autre période ou l’actualité.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Chaque paragraphe suit le même mouvement : une <b>idée</b>, un ou deux <b>exemples précis</b>, ' +
      'une phrase de <b>bilan</b>. Sans exemple, l’idée ne vaut rien.</li>' +
      '<li>Employer les <b>notions du programme</b> à bon escient : métropolisation, multifonctionnalité, ' +
      'chaîne de valeur ajoutée. C’est une capacité explicitement évaluée.</li>' +
      '<li>Les <b>bornes</b> du sujet se respectent : raconter 1789 dans un sujet qui commence en 1848 fait perdre du temps ' +
      'et des points.</li>' +
      '<li>Garder dix minutes pour <b>relire</b>. Les dates fausses se repèrent à la relecture.</li></ul>' }
  ]
},
{
  id: 'hg-m-document', bloc: 'hg-methode',
  titre: 'L’analyse critique de document',
  resume: 'Interroger un document, pas le paraphraser.',
  capacites: [
    'Procéder à l’analyse critique d’un document selon une approche historique ou géographique.',
    'Savoir lire, comprendre et apprécier une carte, un croquis, un document iconographique, une série statistique.',
    'Mettre un événement ou une figure en perspective.',
    'Confronter le savoir acquis avec ce qui est lu.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’exercice', c:
      '<p>Le mot qui compte dans l’intitulé est <b>critique</b>. On ne demande pas de raconter ce que dit le document, ' +
      'mais de dire <b>ce qu’il vaut</b> : qui parle, pour qui, pourquoi, et ce qu’il tait.</p>' +
      '<p>C’est l’exercice dans lequel se jouent les points de passage et d’ouverture du programme d’histoire.</p>' },
    { k: 'meth', t: 'La méthode, étape par étape', c:
      '<ul><li>1. <b>Identifier</b> : nature du document, auteur, date, destinataire, contexte. ' +
      'Chacun de ces éléments est une information, pas une formalité.</li>' +
      '<li>2. <b>Comprendre</b> : de quoi parle-t-il, quelle est sa thèse, comment est-il construit ?</li>' +
      '<li>3. <b>Expliquer</b> : relier chaque passage cité à des connaissances précises, tirées du cours.</li>' +
      '<li>4. <b>Critiquer</b> : quel est le point de vue de l’auteur ? Quels sont ses intérêts ? ' +
      'Qu’est-ce qui est omis, déformé, exagéré ? Quelle est la portée du document, et ses limites ?</li></ul>' },
    { k: 'prop', t: 'Ce que « critiquer » veut dire', c:
      '<p>Critiquer, ce n’est pas dire que le document est mauvais. C’est répondre à trois questions :</p>' +
      '<ul><li><b>Qui parle, et d’où ?</b> Un discours de Jules Ferry sur la colonisation n’est pas un témoignage neutre.</li>' +
      '<li><b>Que dit-il et que tait-il ?</b> Les silences d’un document sont souvent plus parlants que son contenu.</li>' +
      '<li><b>Que vaut-il comme source ?</b> Ce qu’il permet de savoir, et ce qu’il ne permet pas.</li></ul>' },
    { k: 'piege', t: 'Les erreurs à éviter', c:
      '<ul><li>La <b>paraphrase</b> : recopier le document en le reformulant. C’est l’erreur la plus sanctionnée.</li>' +
      '<li>Le <b>hors-sujet du cours</b> : réciter le chapitre sans jamais revenir au document.</li>' +
      '<li>L’<b>anachronisme</b> : juger les acteurs du passé avec les valeurs d’aujourd’hui, au lieu de les expliquer.</li>' +
      '<li>Oublier la <b>consigne</b> : elle oriente l’analyse et doit structurer le plan.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Alterner sans arrêt <b>citation courte, entre guillemets</b> et <b>explication</b> tirée du cours. ' +
      'C’est le rythme attendu.</li>' +
      '<li>La <b>date</b> du document est presque toujours exploitable : que se passe-t-il cette année-là ?</li>' +
      '<li>Un paragraphe entier sans citation est un paragraphe qui a quitté le document.</li></ul>' }
  ]
},
{
  id: 'hg-m-croquis', bloc: 'hg-methode',
  titre: 'Le croquis et la production graphique',
  resume: 'Transposer un texte en croquis, construire une légende.',
  capacites: [
    'Transposer un texte en croquis.',
    'Réaliser des productions graphiques et cartographiques dans le cadre d’une analyse.',
    'Nommer et localiser les grands repères géographiques et les principaux processus étudiés.',
    'Justifier des choix et une production.'
  ],
  cours: [
    { k: 'pourquoi', t: 'L’exercice', c:
      '<p>Le programme le dit : « <b>le croquis est l’aboutissement d’un travail de description, d’analyse et de synthèse</b> ». ' +
      'Ce n’est pas un dessin décoratif, c’est une démonstration.</p>' +
      '<p>Les capacités travaillées incluent explicitement <b>transposer un texte en croquis</b> : ' +
      'un exercice très fréquent en devoir de première.</p>' },
    { k: 'meth', t: 'La méthode, étape par étape', c:
      '<ul><li>1. <b>Lire le sujet</b> et repérer les informations cartographiables dans le texte : ' +
      'des lieux, des flux, des dynamiques.</li>' +
      '<li>2. <b>Construire la légende d’abord</b>, jamais le croquis. La légende est le plan du devoir.</li>' +
      '<li>3. <b>Organiser la légende en deux ou trois parties titrées</b>, qui répondent au sujet.</li>' +
      '<li>4. <b>Reporter</b> sur le fond de carte, proprement, au crayon de couleur.</li>' +
      '<li>5. <b>Nommer</b> : titre du croquis, noms des lieux essentiels, orientation.</li></ul>' },
    { k: 'prop', t: 'Le langage cartographique', c:
      '<ul><li><b>Surfaces</b> (aplats de couleur) : des espaces, des zones, des ensembles régionaux.</li>' +
      '<li><b>Points</b> (cercles, carrés) : des villes, des ports, des sites. La taille indique l’importance.</li>' +
      '<li><b>Lignes et flèches</b> : des flux, des axes, des limites. L’épaisseur indique l’intensité.</li></ul>' +
      '<p>Les couleurs ont un sens conventionnel : le <b>rouge</b> pour ce qui est dynamique ou dense, ' +
      'le <b>bleu</b> pour les flux et les espaces maritimes, le <b>vert</b> pour l’agricole et l’environnemental, ' +
      'le <b>jaune</b> ou l’orange pour les intermédiaires.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une légende <b>organisée et titrée</b> vaut plus de points qu’un croquis très colorié : ' +
      'c’est elle qui montre le raisonnement.</li>' +
      '<li>Un croquis <b>sans titre</b> perd des points automatiquement. C’est la faute la plus bête de l’exercice.</li>' +
      '<li>Mieux vaut <b>peu de figurés, bien choisis</b>, qu’une carte surchargée et illisible.</li>' +
      '<li>Le <b>schéma</b> est une version simplifiée, dessinée à main levée : très utile pour illustrer ' +
      'un paragraphe de composition en deux minutes.</li></ul>' }
  ]
}
);

CHAPITRES_HG.forEach(c => {
  c.gens = [];
  c.matiere = 'histgeo';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
