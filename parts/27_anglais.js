/* =========================================================================
   MATIÈRE : anglais, LVA, première générale.

   ATTENTION : le programme change précisément cette année.
   Les programmes de langues vivantes ÉTRANGÈRES publiés au BO n°22 du
   29 mai 2025 s'appliquent à TOUS les niveaux du lycée général et
   technologique À COMPTER DE LA RENTRÉE 2026-2027. Le programme de 2019
   (« Gestes fondateurs et mondes en mouvement », 8 axes) est caduc pour
   les langues étrangères : éduscol le désigne comme « l'ancien programme ».

   Le nouveau programme est propre à chaque langue. Celui d'anglais donne,
   pour la classe de première, SIX axes, dont le sixième porte sur une aire
   géographique précise. Cinq axes sur six doivent être traités dans
   l'année, dont obligatoirement l'axe 6.

   Niveaux visés en fin de première : LVA B1+, LVB B1, LVC A2.
   Horaire : 4 h 30 hebdomadaires pour LVA + LVB en première générale.
   ========================================================================= */

MAT['anglais'].pret = true;

BLOCS.push(
  { id: 'en-axes',   nom: 'Les six axes culturels',  matiere: 'anglais' },
  { id: 'en-langue', nom: 'La langue',               matiere: 'anglais' },
  { id: 'en-comp',   nom: 'Les activités langagières', matiere: 'anglais' }
);

/* bloc « objets d'étude » d'un axe */
function objets(liste){
  return { k: 'cas', t: 'Les objets d’étude proposés par le programme', c:
    '<p>Le professeur en choisit au moins un. Ce sont eux qui donnent les documents étudiés en classe.</p><ul>' +
    liste.map(o => '<li>' + o + '</li>').join('') + '</ul>' };
}
/* bloc de lexique */
function lexique(titre, b1, plus){
  return { k: 'def', t: 'Lexique · ' + titre, c:
    '<p><b>Niveau B1</b> · ' + b1 + '</p>' +
    (plus ? '<p><b>Niveau B1+</b> · ' + plus + '</p>' : '') +
    '<p class="tiny">Ce lexique est celui du programme officiel, rattaché à cet axe.</p>' };
}

const CHAPITRES_EN = [

/* ================= LES SIX AXES ================= */
{
  id: 'en-a1-identites', bloc: 'en-axes', titre: 'Identités et échanges',
  resume: 'Axe 1. Migrations, frontières, construction des identités.',
  capacites: [
    'Comprendre comment les identités se construisent en dépit des frontières ou grâce à elles.',
    'Analyser les bénéfices réciproques des flux migratoires pour les terres d’accueil anglophones et leurs nouveaux arrivants.',
    'Mobiliser le lexique des migrations et du multiculturalisme.',
    'Exprimer un point de vue nuancé sur une question de société.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Les questions de l’axe', c:
      '<p>Le programme pose deux questions, et c’est autour d’elles que se construisent les séquences :</p>' +
      '<p><i>Quels bénéfices réciproques les terres d’accueil anglophones et leurs nouveaux arrivants ont-ils tirés ' +
      'des flux migratoires successifs ? Comment les identités se construisent-elles en dépit des frontières ' +
      'ou grâce à elles ?</i></p>' +
      '<p>Le mot qui compte est <b>réciproques</b> : on attend une analyse dans les deux sens, pas seulement ' +
      'ce que le pays d’accueil apporte.</p>' },
    objets([
      'Migrations et politiques d’accueil : le cas du Canada',
      'La <i>Windrush generation</i> et sa contribution à la société du Royaume-Uni',
      'Les frontières, lieux d’échanges ?',
      'La construction de l’identité : le cas de la frontière entre l’Irlande et l’Irlande du Nord'
    ]),
    lexique('Multiculturalisme et migrations',
      'to grant citizenship, naturalisation, resident, skilled, foreign-born, native-born, family sponsorship, ' +
      'to access healthcare, to be eligible, landing cards, descendants, to process a claim, lasting contribution, detention centre',
      'asylum-seekers, point-management system, post-arrival assistance, to fit criteria, language proficiency, ' +
      'low-wage labourers, to enhance cultural diversity, US-bound migrants, armed checkpoints, watchtowers, to smuggle, deportation schemes'),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Sur cet axe, on attend du <b>concret</b> : un pays, une date, un groupe précis. ' +
      'La <i>Windrush generation</i> vaut mieux qu’un discours général sur l’immigration.</li>' +
      '<li>Les expressions <i>push and pull factors</i> structurent presque toute analyse de migration : ' +
      'ce qui pousse au départ, ce qui attire à l’arrivée.</li>' +
      '<li>Attention au faux ami : <i>to demand</i> veut dire exiger, pas demander.</li></ul>' }
  ]
},
{
  id: 'en-a2-diversite', bloc: 'en-axes', titre: 'Diversité et inclusion',
  resume: 'Axe 2. Minorités, institutions, discriminations.',
  capacites: [
    'Analyser le rôle des institutions politiques et judiciaires dans la représentativité des minorités.',
    'Expliquer comment les pratiques sociales, économiques et culturelles influent sur les discriminations.',
    'Mobiliser le lexique de la mobilité sociale et de la discrimination.',
    'Argumenter en confrontant des points de vue.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Les questions de l’axe', c:
      '<p><i>Quel rôle les institutions politiques et judiciaires jouent-elles dans la représentativité ' +
      'et l’affirmation des minorités au sein des sociétés ? Comment les pratiques sociales, économiques ' +
      'et culturelles influent-elles sur les discriminations ?</i></p>' +
      '<p>L’axe demande donc de regarder <b>deux niveaux</b> : le droit et les institutions d’un côté, ' +
      'les pratiques quotidiennes de l’autre.</p>' },
    objets([
      'Logement et mixité sociale',
      'La Cour suprême des États-Unis : matrice d’inclusion et d’exclusion',
      'Mobilité sociale et discrimination positive dans les aires anglophones',
      'Représentation politique des Peuples premiers : intégration ou appropriation ?'
    ]),
    lexique('Mobilité sociale et discrimination',
      'to shape a better future, to seek new opportunities, societal stratification, routes to mobility, upward mobility, ' +
      'to perpetuate discrimination, to desegregate, over- and underrepresented, to deny access to, housing policies',
      'to pave the way for, hierarchical caste system, to ensure equal opportunities, to be on an equal footing, ' +
      'political manoeuvring, to bar someone from doing something, to wipe out a right'),
    lexique('La Cour suprême',
      'a Justice, a legal precedent, a litigant, the law of the land, to file a lawsuit, to be on the bench, ' +
      'to overturn a law, to violate the law',
      'a race-blind stance, a dissenting vote, a class-action lawsuit, an ideological leaning, to fill a vacancy, to infringe the law, law-abiding'),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La Cour suprême est l’exemple le plus payant : elle a servi tour à tour à exclure et à inclure. ' +
      'Cette <b>ambivalence</b> est exactement ce que le programme appelle « matrice d’inclusion et d’exclusion ».</li>' +
      '<li><i>Affirmative action</i> se traduit par discrimination positive : attention, l’expression anglaise n’est pas négative.</li>' +
      '<li>Nuancer rapporte : <i>on the one hand… on the other hand</i>, <i>however</i>, <i>nevertheless</i>.</li></ul>' }
  ]
},
{
  id: 'en-a3-art', bloc: 'en-axes', titre: 'Art et pouvoir',
  resume: 'Axe 3. L’art qui sert le pouvoir ou le conteste.',
  capacites: [
    'Analyser comment l’expression artistique peut représenter le pouvoir, le renforcer ou le remettre en cause.',
    'Décrire et interpréter une image : peinture, photographie, caricature.',
    'Mobiliser le lexique de la représentation et de l’engagement.',
    'Justifier une interprétation en s’appuyant sur des éléments précis du document.'
  ],
  cours: [
    { k: 'pourquoi', t: 'La question de l’axe', c:
      '<p><i>Comment l’expression artistique, quelles qu’en soient les formes, peut-elle représenter le pouvoir ' +
      'institutionnel, le renforcer ou au contraire le remettre en cause ?</i></p>' +
      '<p>Trois verbes, donc trois postures possibles de l’art face au pouvoir : <b>représenter</b>, ' +
      '<b>renforcer</b>, <b>remettre en cause</b>. Un bon devoir en montre au moins deux.</p>' },
    objets([
      'L’art, les artistes et le pouvoir',
      'L’art comme vecteur de résistance ou de reconnaissance',
      'S’engager dans la presse et les médias : dessins, caricatures et photojournalisme',
      'Mise en scène et représentation du pouvoir politique dans le cinéma et les séries de fiction'
    ]),
    lexique('Les représentations du pouvoir',
      'well-informed, to subvert, to disrupt, to challenge conventional images, iconic paintings, symbolic of, ' +
      'to document, to convey a message, to expose injustice',
      'through a lens, to debunk, to chronicle, visual rendition, to heighten public awareness, to portray, portraiture, to espouse views'),
    lexique('Art et engagement',
      'to embrace an idea, to receive public support, public patronage, a political subtext, to witness, to testify, ' +
      'impactful, a photograph, iconography, non-violent resistance',
      'exhibition curator, to capture a feeling, out in the field, to immerse viewers, archives, Depression-era paintings, a sense of resilience'),
    { k: 'meth', t: 'Décrire une image en anglais', c:
      '<p>Le vocabulaire de la localisation est attendu et se note :</p>' +
      '<ul><li><i>in the foreground</i> au premier plan · <i>in the background</i> à l’arrière-plan</li>' +
      '<li><i>in the top left-hand corner</i> en haut à gauche · <i>at the bottom right</i> en bas à droite</li>' +
      '<li><i>on the left-hand side</i> sur la gauche · <i>in the centre</i> au centre</li></ul>' +
      '<p>Puis on interprète : <i>this picture conveys…</i>, <i>the artist seems to suggest…</i>, ' +
      '<i>it may be seen as a criticism of…</i></p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais s’arrêter à la description : la question porte sur le <b>rapport au pouvoir</b>. ' +
      'Décrire sans interpréter ne rapporte presque rien.</li>' +
      '<li>Modaliser l’interprétation : <i>it might suggest</i>, <i>it could be interpreted as</i>. ' +
      'C’est aussi un moyen de montrer qu’on maîtrise les modaux.</li></ul>' }
  ]
},
{
  id: 'en-a4-innovations', bloc: 'en-axes', titre: 'Innovations scientifiques et responsabilité',
  resume: 'Axe 4. Concilier éthique et progrès.',
  capacites: [
    'Discuter la conciliation entre éthique et progrès scientifique.',
    'Évaluer si les découvertes vont dans le sens du respect de l’être humain et de son environnement.',
    'Mobiliser le lexique des innovations, de la conquête spatiale et des énergies.',
    'Construire une argumentation équilibrée sur une question controversée.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Les questions de l’axe', c:
      '<p><i>Comment concilier éthique et progrès scientifique ? Toutes les découvertes scientifiques ' +
      'et technologiques vont-elles dans le sens d’une amélioration du respect de l’être humain ' +
      'et de son environnement ?</i></p>' +
      '<p>La seconde question appelle une réponse <b>nuancée</b> : la réponse attendue n’est ni « oui » ni « non ».</p>' },
    objets([
      'À qui appartient l’espace ?',
      'Énergies d’hier et de demain : l’exemple de l’Écosse',
      'La science et la quête de l’homme parfait',
      'Révolutions industrielles, technologiques, numériques et contre-révolutions'
    ]),
    lexique('Innovations scientifiques',
      'billionaire entrepreneurs, offshore windfarms, to decarbonise, advances, knock-on effect, to upgrade, ' +
      'tech-savvy, gene-therapy, clinical applications, human, humane',
      'to leverage the private sector, to be worth the cost, a deterrent, binding agreements, to uphold, ' +
      'eugenics, a saviour-sibling, bioethicists, human enhancement'),
    lexique('La conquête spatiale et les énergies',
      'aerospace engineering, commercial space travel, space tourism, reusable rockets, space debris, ' +
      'to modernise the energy grid, sustainable power, fossil fuels, to work at full capacity, nuclear waste',
      'space junkyard, state-backed, to dock, unmanned missions, a launch window, satellite-based data, ' +
      'fracking, a dam, sky-high energy costs, to soar, to skyrocket, to plummet, nuclear fission reactors'),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Piège de vocabulaire signalé par le programme : <i>human</i> signifie humain au sens de l’espèce, ' +
      '<i>humane</i> signifie humain au sens de bienveillant. Les deux sont au programme, et on les confond souvent.</li>' +
      '<li>Les verbes de variation sont très rentables : <i>to soar</i> et <i>to skyrocket</i> pour monter en flèche, ' +
      '<i>to plummet</i> pour chuter.</li>' +
      '<li>Sur une question éthique, annoncer la nuance dès le début : <i>while… it remains true that…</i></li></ul>' }
  ]
},
{
  id: 'en-a5-nature', bloc: 'en-axes', titre: 'L’être humain et la nature',
  resume: 'Axe 5. Préserver, exploiter, s’adapter.',
  capacites: [
    'Analyser comment l’être humain peut vivre en harmonie avec la nature.',
    'Expliquer ce qui est mis en place pour préserver l’environnement, l’exploiter et s’y adapter.',
    'Mobiliser le lexique de la nature et de la préservation.',
    'Rendre compte d’un document sur une question environnementale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Les questions de l’axe', c:
      '<p><i>Comment l’être humain peut-il vivre en harmonie avec la nature ? Que met-il en place pour préserver ' +
      'son environnement, l’exploiter, mais aussi s’y adapter ? Comment les sociétés de l’aire anglophone ' +
      's’emparent-elles de ces enjeux ?</i></p>' +
      '<p>Trois verbes à distinguer : <b>préserver</b>, <b>exploiter</b>, <b>s’adapter</b>. ' +
      'Ce ne sont pas des synonymes, et un devoir qui les confond perd le fil.</p>' },
    objets([
      'Les parcs nationaux, outils de préservation de la nature',
      'Vivre avec et vivre de la nature',
      'L’homme face à la nature et aux évènements météorologiques',
      'La sacralisation de la nature dans l’art et dans la fiction'
    ]),
    lexique('La nature',
      'the safeguard of wildlife, the decline of wildlife, healthy habitats, native species, endangered species, ' +
      'to foster, natural sanctuaries, preservationist obligations',
      'preserved havens, peatlands, wetlands, to fall short of, land trusts, cruelty-free and eco-friendly products, worshipping, to alleviate'),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Les parcs nationaux américains sont l’exemple parfait, parce qu’ils contiennent eux-mêmes la tension : ' +
      'ils préservent la nature <b>et</b> attirent des millions de visiteurs.</li>' +
      '<li><i>Wildlife</i> est indénombrable : jamais de <i>s</i>, jamais de <i>a</i>.</li>' +
      '<li>Pour l’adaptation, penser aux évènements extrêmes : <i>hurricanes, wildfires, floods, droughts</i>.</li></ul>' }
  ]
},
{
  id: 'en-a6-ameriques', bloc: 'en-axes', titre: 'Les aires anglophones américaines',
  resume: 'Axe 6, obligatoire. Le continent américain anglophone.',
  capacites: [
    'Analyser les influences réciproques qui engendrent une perméabilité culturelle autour du continent américain.',
    'Situer les aires anglophones américaines et en connaître les repères culturels.',
    'Comparer deux territoires ou deux villes de cette aire.',
    'Élargir sa vision des aires anglophones au-delà des États-Unis et du Royaume-Uni.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Pourquoi cet axe est obligatoire', c:
      '<p>Le sixième axe est <b>spécifique à une aire géographique</b>, et il change à chaque niveau : ' +
      'le Commonwealth en seconde, les <b>aires anglophones américaines</b> en première, ' +
      'le Royaume-Uni et ses nations en terminale.</p>' +
      '<p>Le programme impose de traiter <b>cinq axes sur six dans l’année, dont obligatoirement l’axe 6</b>. ' +
      'C’est donc le seul axe dont tu es sûre qu’il sera étudié.</p>' +
      '<p>Sa question : <i>Quelles sont les influences réciproques qui engendrent une perméabilité culturelle, ' +
      'parfois inégale, autour du continent américain ?</i></p>' },
    objets([
      'Les Caraïbes dans les Amériques et le monde',
      'Porto Rico : le 51e État ?',
      'Le pôle d’attraction nord-américain',
      'Vancouver et Seattle : regards croisés'
    ]),
    { k: 'prop', t: 'Ce que « aires anglophones américaines » recouvre', c:
      '<ul><li>Les <b>États-Unis</b>, mais vus autrement que par le seul prisme habituel.</li>' +
      '<li>Le <b>Canada</b> anglophone, et sa relation avec son voisin du sud.</li>' +
      '<li>Les <b>Caraïbes</b> anglophones : Jamaïque, Trinité-et-Tobago, Barbade, Guyana.</li>' +
      '<li>Les <b>territoires</b> au statut particulier, dont Porto Rico, espagnol et américain à la fois.</li></ul>' +
      '<p>C’est précisément ce que le programme appelle « des pans culturels parfois méconnus ».</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le mot clé est <b>réciproque</b> : les influences vont dans les deux sens. ' +
      'La musique caribéenne a transformé la musique américaine autant que l’inverse.</li>' +
      '<li>« Perméabilité <b>parfois inégale</b> » : le programme reconnaît lui-même un déséquilibre. ' +
      'Le relever est une bonne façon de nuancer.</li>' +
      '<li>Porto Rico est le cas qui fait réfléchir : ses habitants sont citoyens américains, ' +
      'mais ne votent pas à la présidentielle depuis l’île.</li></ul>' }
  ]
},

/* ================= LA LANGUE ================= */
{
  id: 'en-temps', bloc: 'en-langue', titre: 'Les temps',
  resume: 'Prétérit, present perfect, past perfect, be+ing.',
  capacites: [
    'Maîtriser les conjugaisons et l’usage des temps du passé : verbes réguliers et irréguliers au prétérit, prétérit be+ing, past perfect.',
    'Effectuer des choix entre les temps : présent simple et be+ing, prétérit simple et be+ing, present perfect, past perfect.',
    'Exprimer l’habitude dans le passé et le futur dans le passé.',
    'Employer la voix passive.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le point de grammaire qui coûte le plus de points, parce qu’il revient dans chaque phrase. ' +
      'Un contresens de temps change le sens, pas seulement la forme.</p>' },
    { k: 'prop', t: 'Prétérit ou present perfect ?', c:
      '<p>La règle est simple et sans exception : le <b>prétérit</b> raconte un fait <b>coupé du présent</b>, ' +
      'le <b>present perfect</b> relie le passé au présent.</p>' +
      '<ul><li>Prétérit avec un repère passé daté : <i>yesterday, last week, in 1990, two years ago, when I was ten</i>.</li>' +
      '<li>Present perfect avec un lien au présent : <i>since, for, already, yet, ever, never, just, so far, recently</i>.</li></ul>' +
      '<p><i>I saw her yesterday.</i> Fini, daté. · <i>I have seen her three times.</i> Bilan qui compte aujourd’hui.</p>' +
      '<p><b>Piège majeur :</b> <i>since</i> et <i>for</i> imposent le present perfect, jamais le présent. ' +
      'On dit <i>I have lived here for five years</i>, et non « I live here since five years ».</p>' },
    { k: 'prop', t: 'Le past perfect', c:
      '<p>Le past perfect (<i>had</i> + participe passé) exprime un fait <b>antérieur à un autre fait passé</b>. ' +
      'C’est le passé du passé.</p>' +
      '<p><i>When I arrived, she <b>had</b> already <b>left</b>.</i> Elle est partie avant mon arrivée.</p>' +
      '<p>Sans lui, l’ordre des évènements devient ambigu : c’est pour cela que le programme l’exige au niveau B1.</p>' },
    { k: 'prop', t: 'Simple ou be+ing ?', c:
      '<ul><li><b>Simple</b> : un fait, une habitude, une vérité générale. <i>She works in London.</i></li>' +
      '<li><b>be+ing</b> : une action en cours, temporaire, ou un commentaire de la situation. ' +
      '<i>She is working on a new project.</i></li></ul>' +
      '<p>Les verbes d’état ne se mettent normalement pas en be+ing : <i>know, believe, understand, want, like, ' +
      'belong, seem</i>. On ne dit pas « I am knowing ».</p>' },
    { k: 'prop', t: 'La voix passive', c:
      '<p>Formation : <b>be</b> au temps voulu + <b>participe passé</b>. L’agent, s’il est mentionné, arrive avec <i>by</i>.</p>' +
      '<p><i>Shakespeare wrote this play.</i> → <i>This play <b>was written</b> by Shakespeare.</i></p>' +
      '<p>On l’emploie surtout quand l’agent est inconnu, évident ou sans importance : ' +
      '<i>The law was passed in 1972.</i></p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Chercher le <b>marqueur de temps</b> avant de choisir : <i>ago</i> impose le prétérit, ' +
      '<i>since</i> impose le present perfect. La moitié des erreurs disparaît ainsi.</li>' +
      '<li>Le prétérit des verbes irréguliers s’apprend par trois : base, prétérit, participe passé. ' +
      'Deux sur trois ne suffit pas.</li>' +
      '<li><i>Used to</i> exprime une habitude passée qui n’a plus cours : <i>I used to play the piano.</i></li></ul>' }
  ]
},
{
  id: 'en-modaux', bloc: 'en-langue', titre: 'Modaux, hypothèse et regret',
  resume: 'Capacité, obligation, conseil, if-clauses, wish.',
  capacites: [
    'Employer les auxiliaires de modalité et les formes lexicalisées : might, would, ought to, be able to, be allowed to.',
    'Employer les modaux pour exprimer la capacité, l’obligation et le devoir moral.',
    'Exprimer une hypothèse avec le présent et le futur, puis avec le prétérit modal.',
    'Exprimer le souhait et le regret : prétérit modal après wish pour le présent, past perfect après wish pour le passé.',
    'Employer les réponses courtes par auxiliaire et les tags.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Les modaux ne disent pas ce qui est, mais ce que le locuteur en <b>pense</b> : possible, obligatoire, ' +
      'souhaitable, probable. C’est l’outil de la nuance, donc celui qui fait la différence à l’oral comme à l’écrit.</p>' },
    { k: 'def', t: 'Les valeurs des modaux', c:
      '<ul><li><b>Capacité</b> : <i>can</i>, <i>could</i>, <i>be able to</i>.</li>' +
      '<li><b>Permission</b> : <i>may</i>, <i>can</i>, <i>be allowed to</i>.</li>' +
      '<li><b>Obligation</b> : <i>must</i> (l’énonciateur impose), <i>have to</i> (la contrainte est extérieure).</li>' +
      '<li><b>Interdiction</b> : <i>mustn’t</i>. Attention, <i>don’t have to</i> signifie « ce n’est pas obligatoire », ' +
      'ce qui est l’inverse.</li>' +
      '<li><b>Conseil, devoir moral</b> : <i>should</i>, <i>ought to</i>.</li>' +
      '<li><b>Probabilité</b> : <i>must</i> (quasi certain), <i>may</i> et <i>might</i> (possible), ' +
      '<i>can’t</i> (impossible selon l’énonciateur).</li></ul>' +
      '<p>Un modal ne prend jamais de <i>s</i> à la troisième personne et est suivi de la base verbale.</p>' },
    { k: 'prop', t: 'Les trois hypothèses', c:
      '<ul><li><b>Type 1, réel</b> : <i>If she <b>goes</b> to San Francisco, she <b>will visit</b> the Golden Gate Bridge.</i> ' +
      'Présent dans la subordonnée, futur dans la principale.</li>' +
      '<li><b>Type 2, irréel du présent</b> : <i>If I <b>went</b> to London, I <b>would visit</b> the Victoria and Albert Museum.</i> ' +
      'Prétérit modal, puis <i>would</i> + base verbale.</li>' +
      '<li><b>Type 3, irréel du passé</b> : <i>If she <b>had known</b>, she <b>would have come</b>.</i> ' +
      'Past perfect, puis <i>would have</i> + participe passé.</li></ul>' +
      '<p><b>Jamais de <i>will</i> après <i>if</i></b> dans une hypothèse. C’est la faute la plus fréquente.</p>' +
      '<p>Au niveau B1+, l’inversion remplace <i>if</i> : <i>Had she known, she would have come.</i></p>' },
    { k: 'prop', t: 'Souhait et regret avec wish', c:
      '<ul><li>Regret sur le <b>présent</b> : <i>wish</i> + <b>prétérit modal</b>. ' +
      '<i>I wish I <b>knew</b> the answer.</i> Je ne la connais pas.</li>' +
      '<li>Regret sur le <b>passé</b> : <i>wish</i> + <b>past perfect</b>. ' +
      '<i>I wish I <b>had listened</b> to her.</i> Je ne l’ai pas écoutée.</li></ul>' +
      '<p>Le programme mentionne aussi <i>he wishes he <b>were</b></i> : le subjonctif <i>were</i> à toutes les personnes.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Retenir le couple qui piège tout le monde : <i>mustn’t</i> = interdiction · ' +
      '<i>don’t have to</i> = absence d’obligation.</li>' +
      '<li>Les <b>tags</b> reprennent l’auxiliaire et inversent la polarité : <i>She is French, <b>isn’t she</b>?</i> · ' +
      '<i>You didn’t know, <b>did you</b>?</i></li>' +
      '<li>Un modal bien placé dans une copie vaut une phrase complexe : <i>this might suggest that…</i></li></ul>' }
  ]
},
{
  id: 'en-gn', bloc: 'en-langue', titre: 'Le groupe nominal',
  resume: 'Quantifieurs, comparatifs, noms composés.',
  capacites: [
    'Mobiliser les comparatifs et les superlatifs, courts, longs et irréguliers.',
    'Employer les déterminants distributifs : both, either, every, each.',
    'Employer les quantifieurs a few et few, a little et little.',
    'Construire des adjectifs composés et des groupes nominaux complexes.',
    'Maîtriser la formation et l’utilisation du gérondif en position sujet et objet.'
  ],
  cours: [
    { k: 'prop', t: 'Comparatifs et superlatifs', c:
      '<ul><li>Adjectif <b>court</b>, une syllabe ou deux se terminant par <i>-y</i> : ' +
      '<i>-er</i> et <i>the -est</i>. <i>big → bigger → the biggest</i> · <i>happy → happier → the happiest</i>.</li>' +
      '<li>Adjectif <b>long</b> : <i>more</i> et <i>the most</i>. ' +
      '<i>expensive → more expensive → the most expensive</i>.</li>' +
      '<li><b>Irréguliers</b> à connaître : <i>good → better → the best</i> · <i>bad → worse → the worst</i> · ' +
      '<i>far → farther/further → the farthest/the furthest</i>.</li></ul>' +
      '<p>Égalité : <i>as … as</i>. Comparatif de proportion : <i>twice as much</i>, <i>three times as many</i>.</p>' },
    { k: 'prop', t: 'Les quantifieurs qui changent de sens', c:
      '<p>Ici, l’article change tout :</p>' +
      '<ul><li><i><b>a few</b> friends</i> : quelques amis. Sens <b>positif</b>, il y en a.</li>' +
      '<li><i><b>few</b> friends</i> : peu d’amis. Sens <b>négatif</b>, presque pas.</li>' +
      '<li><i><b>a little</b> time</i> : un peu de temps, il y en a. · <i><b>little</b> time</i> : peu de temps.</li></ul>' +
      '<p><i>Few</i> et <i>a few</i> accompagnent les <b>dénombrables</b>, <i>little</i> et <i>a little</i> ' +
      'les <b>indénombrables</b>. Même partage pour <i>many</i> et <i>much</i>.</p>' },
    { k: 'prop', t: 'Les distributifs', c:
      '<ul><li><i><b>both</b></i> : les deux ensemble. <i>Both answers are correct.</i></li>' +
      '<li><i><b>either</b></i> : l’un ou l’autre. <i>You can take either road.</i></li>' +
      '<li><i><b>every</b></i> : chaque, vu comme un ensemble. <i>Every student must attend.</i></li>' +
      '<li><i><b>each</b></i> : chaque, pris un par un. <i>Each student received a book.</i></li></ul>' },
    { k: 'prop', t: 'Adjectifs composés et groupes nominaux', c:
      '<p>Un adjectif composé est <b>invariable</b> et prend un trait d’union : ' +
      '<i>a black-haired man</i> · <i>a ten-minute break</i> · <i>a five-year-old child</i>. ' +
      'Jamais de <i>s</i> : on dit <i>a ten-minute break</i>, pas « a ten-minutes break ».</p>' +
      '<p>Les assemblages du programme : <b>NN</b> (<i>a teacup</i>) · <b>N+N</b> (<i>Home Secretary</i>) · ' +
      '<b>N of N</b> (<i>a cup of tea</i>) · <b>N’s N</b> (<i>a children’s book</i>, <i>a day’s work</i>).</p>' +
      '<p>Dans un nom composé, c’est le <b>dernier</b> mot qui porte le sens principal : ' +
      '<i>a school bus</i> est un bus, <i>a bus school</i> serait une école.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le gérondif s’emploie en sujet : <i><b>Travelling</b> broadens the mind.</i> ' +
      'Et après une préposition : <i>She is good <b>at speaking</b> in public.</i></li>' +
      '<li>Indénombrables classiques, jamais au pluriel : <i>information, advice, news, knowledge, research, ' +
      'furniture, luggage, wildlife</i>.</li></ul>' }
  ]
},
{
  id: 'en-phrase', bloc: 'en-langue', titre: 'La phrase et son organisation',
  resume: 'Relatives, discours rapporté, connecteurs.',
  capacites: [
    'Employer les propositions subordonnées relatives et circonstancielles.',
    'Passer du discours direct au discours rapporté et inversement.',
    'Employer les questions indirectes.',
    'Employer une gamme étendue de connecteurs logiques.',
    'Exprimer l’intensité et l’emphase.'
  ],
  cours: [
    { k: 'prop', t: 'Les pronoms relatifs', c:
      '<ul><li><i><b>who</b></i> : sujet, pour une personne. <i>The woman <b>who</b> wrote this book.</i></li>' +
      '<li><i><b>whom</b></i> : complément, pour une personne, soutenu. <i>The man <b>whom</b> I met.</i></li>' +
      '<li><i><b>which</b></i> : pour une chose. <i>The book <b>which</b> I read.</i></li>' +
      '<li><i><b>that</b></i> : personne ou chose, dans une relative déterminative seulement.</li>' +
      '<li><i><b>whose</b></i> : exprime l’<b>appartenance</b>. <i>The artist <b>whose</b> work was censored.</i></li></ul>' +
      '<p>Le pronom relatif complément peut s’effacer : <i>The book (that) I read</i>. ' +
      'Le pronom relatif <b>sujet</b>, jamais.</p>' },
    { k: 'prop', t: 'Le discours rapporté', c:
      '<p>Quand le verbe introducteur est au passé, tout <b>recule d’un cran</b> :</p>' +
      '<ul><li>présent → prétérit · prétérit → past perfect · <i>will</i> → <i>would</i> · ' +
      '<i>can</i> → <i>could</i> · <i>must</i> → <i>had to</i></li>' +
      '<li>Les repères bougent aussi : <i>now → then</i> · <i>today → that day</i> · ' +
      '<i>yesterday → the day before</i> · <i>tomorrow → the next day</i> · <i>here → there</i> · <i>this → that</i></li></ul>' +
      '<p><i>"I am tired," she said.</i> → <i>She said (that) she <b>was</b> tired.</i></p>' +
      '<p><i>"I will come tomorrow," he said.</i> → <i>He said he <b>would</b> come <b>the next day</b>.</i></p>' +
      '<p>Verbes introducteurs : <i>say</i> (sans complément), <i>tell</i> (avec complément : <i>tell <b>me</b></i>), ' +
      '<i>ask</i>, <i>answer</i>, <i>explain</i>, <i>admit</i>.</p>' },
    { k: 'prop', t: 'Les questions indirectes', c:
      '<p>Dans une question indirecte, on <b>remet l’ordre de la phrase affirmative</b> : plus d’inversion, ' +
      'plus d’auxiliaire <i>do</i>, plus de point d’interrogation.</p>' +
      '<p><i>Where does she live?</i> → <i>I wonder <b>where she lives</b>.</i></p>' +
      '<p><i>Is he coming?</i> → <i>I wonder <b>if he is coming</b>.</i> Sans mot interrogatif, on emploie <i>if</i> ou <i>whether</i>.</p>' },
    { k: 'def', t: 'Les connecteurs à avoir en réserve', c:
      '<ul><li><b>Ajouter</b> : <i>moreover, besides, furthermore, in addition</i></li>' +
      '<li><b>Opposer</b> : <i>however, nevertheless, yet, on the contrary, on the one hand… on the other hand</i></li>' +
      '<li><b>Illustrer</b> : <i>for instance, such as, like, namely</i></li>' +
      '<li><b>Conclure une cause</b> : <i>consequently, as a result, therefore, thus</i></li>' +
      '<li><b>Chronologie</b> : <i>first, afterwards, then, eventually, finally</i></li></ul>' +
      '<p>Faux ami classique : <i>eventually</i> signifie <b>finalement</b>, pas éventuellement.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>L’emphase par l’auxiliaire est très rentable : <i>I <b>do</b> like this painting.</i> · ' +
      '<i>She <b>did</b> visit the museum.</i></li>' +
      '<li>L’exclamative : <i><b>How</b> courageous they were!</i> avec un adjectif, ' +
      '<i><b>What</b> an ordeal it must have been!</i> avec un nom.</li>' +
      '<li>Un connecteur en tête de paragraphe structure la copie et se voit immédiatement.</li></ul>' }
  ]
},
{
  id: 'en-phono', bloc: 'en-langue', titre: 'Phonologie et accentuation',
  resume: 'Accent de mot, intonation, sons difficiles.',
  capacites: [
    'Recourir de façon systématique aux schémas intonatifs.',
    'Mobiliser des connaissances phonologiques : lettres muettes, /h/, voyelles courtes et longues, diphtongues.',
    'Marquer l’emphase ou souligner les mots-clés.',
    'Connaître quelques règles d’accentuation du mot selon sa composition.',
    'S’appuyer sur les accents pour déterminer l’origine du locuteur et le contexte d’énonciation.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>À l’oral, un mot mal accentué peut devenir incompréhensible, même si tous les sons sont justes. ' +
      'L’accent de mot est plus important que la prononciation exacte de chaque voyelle.</p>' },
    { k: 'prop', t: 'Quelques règles d’accentuation', c:
      '<ul><li>Les mots de <b>deux syllabes</b> : les noms et adjectifs s’accentuent plutôt sur la première ' +
      '(<i>‘present</i>, <i>‘record</i>), les verbes sur la seconde (<i>to pre’sent</i>, <i>to re’cord</i>).</li>' +
      '<li>Les mots en <b>-ion, -ic, -ical, -ity</b> s’accentuent sur la syllabe qui précède le suffixe : ' +
      '<i>edu’cation</i>, <i>scien’tific</i>, <i>respons’ibility</i>.</li>' +
      '<li>Le suffixe <b>-ate</b> se prononce /ɪt/ ou /eɪt/ selon l’accentuation : ' +
      '<i>a ‘graduate</i> se dit /ɪt/, <i>to gradu’ate</i> se dit /eɪt/.</li></ul>' },
    { k: 'prop', t: 'Les pièges de prononciation', c:
      '<ul><li>Les <b>lettres muettes</b> : le <i>l</i> de <i>calm</i>, <i>walk</i>, <i>half</i> ; ' +
      'le <i>k</i> de <i>know</i> ; le <i>b</i> de <i>climb</i> ; le <i>w</i> de <i>answer</i>.</li>' +
      '<li>Le <b>/h/</b> se prononce en anglais : <i>house</i>, <i>behind</i>. C’est une difficulté française classique.</li>' +
      '<li><b>Voyelles courtes et longues</b> : <i>ship</i> et <i>sheep</i>, <i>full</i> et <i>fool</i> ' +
      'ne veulent pas dire la même chose.</li>' +
      '<li>Les <b>affriquées</b> /tʃ/ comme dans <i>church</i> et /dʒ/ comme dans <i>judge</i>.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>À l’oral, ralentir et bien accentuer vaut mieux que parler vite et plat.</li>' +
      '<li>Les accents régionaux (américain, indien, australien) sont au programme : ' +
      'savoir les repérer sert en compréhension de l’oral.</li>' +
      '<li>L’intonation montante en fin de question fermée, descendante en fin de question ouverte.</li></ul>' }
  ]
},

/* ================= LES ACTIVITÉS LANGAGIÈRES ================= */
{
  id: 'en-comprehension', bloc: 'en-comp', titre: 'Compréhension de l’oral et de l’écrit',
  resume: 'Repérer, relier, accéder à l’implicite.',
  capacites: [
    'Accéder au sens explicite d’un document en mettant en lien différents indices.',
    'Percevoir le contexte et la situation d’énonciation pour accéder à l’implicite.',
    'Classer, trier, hiérarchiser, comparer, différencier des informations.',
    'Confronter des interprétations et prendre conscience de points de vue.',
    'Structurer une prise de notes, par exemple par une carte mentale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Le niveau attendu en fin de première', c:
      '<p>En LVA, le niveau visé en fin de première est <b>B1+</b> : le « + » signifie que le niveau supérieur ' +
      'est atteint dans au moins une des activités langagières.</p>' +
      '<p>La progression du lycée : seconde B1+, première B1+, terminale <b>B2</b>. ' +
      'En LVB : seconde A2+, première B1, terminale B1.</p>' },
    { k: 'meth', t: 'Écouter un document', c:
      '<ul><li>1. Avant l’écoute, lire la consigne : elle donne le <b>projet d’écoute</b>, donc ce qu’il faut chercher.</li>' +
      '<li>2. Première écoute : repérer la <b>situation</b>. Qui parle ? À qui ? Où ? Quand ? Quel type de document ?</li>' +
      '<li>3. Deuxième écoute : noter les <b>mots porteurs de sens</b>, pas des phrases. Chiffres, noms propres, verbes.</li>' +
      '<li>4. Troisième écoute : vérifier et compléter.</li>' +
      '<li>5. Ne jamais rester bloquée sur un mot inconnu : le sens se reconstruit par le contexte.</li></ul>' },
    { k: 'meth', t: 'Lire un texte', c:
      '<ul><li>Commencer par le <b>paratexte</b> : titre, source, date, auteur, illustration. Cela donne déjà beaucoup.</li>' +
      '<li>Repérer les <b>mots transparents</b> et les mots répétés : ils donnent le thème.</li>' +
      '<li>Distinguer les <b>faits</b> des <b>opinions</b> : les modaux et les adjectifs évaluatifs signalent le point de vue.</li>' +
      '<li>Pour l’implicite, chercher l’ironie, les sous-entendus, ce qui n’est pas dit.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Rendre compte en anglais avec ses <b>propres mots</b> : recopier des phrases entières du texte ' +
      'ne prouve pas la compréhension.</li>' +
      '<li>Les verbes utiles : <i>the document deals with, it highlights, it points out, it suggests, ' +
      'the author argues that</i>.</li>' +
      '<li>Une prise de notes en carte mentale est explicitement au programme, et fait gagner du temps.</li></ul>' }
  ]
},
{
  id: 'en-expression', bloc: 'en-comp', titre: 'Expression orale et écrite',
  resume: 'Prendre la parole, argumenter, écrire.',
  capacites: [
    'Exprimer un avis de façon structurée et le justifier, chercher à convaincre.',
    'Rendre compte et argumenter à partir d’informations recueillies.',
    'Produire à l’écrit ou à l’oral en s’adaptant à un contexte donné.',
    'Réagir, commenter, plaider, répondre.',
    'Gagner en justesse et en aisance linguistique, vers une expression libre, créative et nuancée.'
  ],
  cours: [
    { k: 'meth', t: 'Structurer une prise de parole', c:
      '<ul><li><b>Annoncer</b> : <i>I would like to focus on…</i> · <i>This document raises the question of…</i></li>' +
      '<li><b>Développer</b> : une idée, un exemple, une conséquence. Toujours dans cet ordre.</li>' +
      '<li><b>Nuancer</b> : <i>however</i>, <i>nevertheless</i>, <i>to a certain extent</i>, <i>it depends on…</i></li>' +
      '<li><b>Conclure</b> : <i>all in all</i>, <i>to sum up</i>, <i>this leads me to think that…</i></li></ul>' +
      '<p>Deux minutes bien structurées valent mieux que cinq minutes décousues.</p>' },
    { k: 'meth', t: 'Écrire un texte argumenté', c:
      '<ul><li><b>Introduction</b> : reformuler la question, annoncer l’angle.</li>' +
      '<li><b>Un paragraphe = une idée</b>, appuyée sur un exemple précis tiré des axes étudiés.</li>' +
      '<li><b>Connecteurs</b> en tête de paragraphe : la structure doit se voir.</li>' +
      '<li><b>Conclusion</b> : répondre, sans répéter mot pour mot.</li></ul>' },
    { k: 'piege', t: 'Les erreurs qui coûtent cher', c:
      '<ul><li>Oublier le <b>-s</b> à la troisième personne du singulier au présent simple.</li>' +
      '<li>Mettre <i>will</i> après <i>if</i> dans une hypothèse.</li>' +
      '<li>Employer un présent avec <i>since</i> ou <i>for</i> au lieu du present perfect.</li>' +
      '<li>Mettre un <i>s</i> à un adjectif : les adjectifs anglais sont <b>invariables</b>.</li>' +
      '<li>Traduire mot à mot une structure française. Mieux vaut une phrase simple et juste.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Réutiliser le <b>lexique de l’axe</b> étudié : c’est ce que le professeur cherche en priorité.</li>' +
      '<li>Varier les structures : une subordonnée relative, une hypothèse, un modal. ' +
      'Trois phrases variées valent mieux que dix phrases plates.</li>' +
      '<li>Se relire en cherchant <b>une seule chose à la fois</b> : d’abord les -s, puis les temps, puis les prépositions.</li></ul>' }
  ]
}
];

CHAPITRES_EN.forEach(c => {
  c.gens = [];
  c.matiere = 'anglais';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
