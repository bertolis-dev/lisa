/* =========================================================================
   MATIÈRE : histoire-géographie, première générale.

   Programme : arrêté du 17 janvier 2019, BO spécial n°1 du 22 janvier 2019,
   annexe 2. Inchangé pour 2026-2027 : les arrêtés du 26 février 2026
   (BO n°14 du 2 avril 2026) ne réécrivent que les mathématiques.

   Histoire (48 h) : « Nations, empires, nationalités
   (de 1789 aux lendemains de la Première Guerre mondiale) », 4 thèmes.
   Géographie (48 h) : « Les dynamiques d’un monde en recomposition »,
   3 thèmes plus un thème conclusif.

   Les intitulés de thèmes, de chapitres, les points de passage et
   d’ouverture, les questions et les études de cas sont ceux du texte
   officiel, repris mot pour mot.
   ========================================================================= */

MAT['histgeo'].pret = true;

BLOCS.push(
  { id: 'hg-histoire',   nom: 'Histoire : nations, empires, nationalités', matiere: 'histgeo' },
  { id: 'hg-geographie', nom: 'Géographie : un monde en recomposition',    matiere: 'histgeo' },
  { id: 'hg-methode',    nom: 'Méthodes et repères',                       matiere: 'histgeo' }
);

/* bloc « points de passage et d’ouverture », toujours formé pareil */
function ppo(liste){
  return { k: 'ppo', t: 'Les points de passage et d’ouverture du programme', c:
    '<p>Ce sont les moments que le professeur travaille en détail, et sur lesquels tombent les analyses de document. ' +
    'Il faut savoir les raconter précisément.</p><ul>' +
    liste.map(x => '<li>' + x + '</li>').join('') + '</ul>' };
}
/* bloc « repères » : une liste de dates */
function reperes(liste){
  return { k: 'reperes', t: 'Les dates à savoir sans hésiter', c:
    '<ul class="dates">' + liste.map(d => '<li><b>' + d[0] + '</b> <span>' + d[1] + '</span></li>').join('') + '</ul>' };
}

const CHAPITRES_HG = [

/* ================= HISTOIRE · THÈME 1 ================= */
{
  id: 'hg-h1-revolution', bloc: 'hg-histoire',
  titre: 'La Révolution française et l’Empire',
  resume: 'Thème 1, chapitre 1. Une nouvelle conception de la nation.',
  capacites: [
    'Mesurer l’ampleur de la rupture révolutionnaire avec l’Ancien Régime.',
    'Expliquer les grands principes de la modernité politique formulés dans la Déclaration des droits de l’homme et du citoyen.',
    'Analyser les conflits et les débats de la période, jusqu’à la Terreur.',
    'Montrer comment Napoléon établit un ordre autoritaire qui conserve certains principes de la Révolution.',
    'Expliquer la diffusion de ces principes en Europe et la fragilité de l’empire napoléonien.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le chapitre qui ouvre le programme, et il commande tout le reste. Tout ce que tu étudieras ensuite, ' +
      'de 1815 à 1918, se joue autour d’une question posée en 1789 : <b>qui détient la souveraineté ?</b></p>' +
      '<p>La France passe de la souveraineté du roi à la <b>souveraineté de la nation</b>. Elle mettra ensuite un siècle ' +
      'à trouver un régime stable.</p>' },
    reperes([
      ['1789', 'Réunion des États généraux, prise de la Bastille le 14 juillet, Déclaration des droits de l’homme et du citoyen le 26 août'],
      ['1792', 'Chute de la monarchie, proclamation de la République'],
      ['1793', 'Exécution de Louis XVI le 21 janvier, la Terreur'],
      ['1799', 'Coup d’État de Bonaparte, le Consulat'],
      ['1804', 'Le Code civil ; Napoléon empereur'],
      ['1815', 'Waterloo, chute de l’Empire']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>La Déclaration de 1789 formule les <b>principes de la modernité politique</b> : liberté, égalité devant la loi, ' +
      'propriété, souveraineté nationale.</li>' +
      '<li>La Révolution veut <b>unir la nation</b> autour de ces principes, mais elle est traversée de conflits : ' +
      'la Révolution et l’Église, la guerre contre l’Europe, la Terreur, les représentants de la nation face aux sans-culottes.</li>' +
      '<li>Napoléon installe un <b>ordre politique autoritaire</b> qui conserve pourtant des acquis : égalité devant la loi, ' +
      'Code civil, administration centralisée.</li>' +
      '<li>Les armées françaises <b>diffusent ces principes en Europe</b>, mais suscitent en retour des <b>sentiments nationaux</b> ' +
      'qui se retournent contre l’Empire.</li>' +
      '<li>De la <b>nation en armes</b> de 1792 à la <b>Grande Armée</b> : la guerre change de nature.</li></ul>' },
    ppo([
      'Madame Roland, une femme en révolution.',
      'Décembre 1792 et janvier 1793 : procès et mort de Louis XVI.',
      '1804 : le Code civil permet l’égalité devant la loi et connaît un rayonnement européen.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais écrire « la Révolution » comme un bloc : elle a des <b>phases</b>, et des acteurs qui s’opposent.</li>' +
      '<li>Le Code civil est l’exemple parfait pour montrer la <b>continuité</b> entre Révolution et Empire : ' +
      'il garde l’égalité devant la loi et supprime l’égalité politique.</li>' +
      '<li>Une copie qui cite la DDHC de 1789 et une mesure de 1804 montre en deux phrases qu’elle a compris le chapitre.</li></ul>' }
  ]
},
{
  id: 'hg-h1-restauration', bloc: 'hg-histoire',
  titre: 'L’Europe entre restauration et révolution',
  resume: 'Thème 1, chapitre 2. 1814-1848 : refermer la Révolution ?',
  capacites: [
    'Expliquer la volonté de clore la Révolution et la restauration de l’ordre monarchique européen.',
    'Analyser l’œuvre du congrès de Vienne et sa fragilité.',
    'Comparer les deux expériences de monarchie constitutionnelle en France.',
    'Expliquer l’essor du mouvement des nationalités et la circulation des idées politiques.',
    'Situer les deux poussées révolutionnaires de 1830 et 1848 en France et en Europe.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce chapitre explique pourquoi la Révolution <b>ne se referme pas</b>. Les souverains européens tentent de revenir ' +
      'à l’ordre ancien ; les peuples, eux, ont retenu l’idée de nation.</p>' +
      '<p>C’est ici que naît le <b>principe des nationalités</b>, le fil rouge de tout le programme d’histoire.</p>' },
    reperes([
      ['1814', 'Première Restauration, la Charte'],
      ['1815', 'Le congrès de Vienne redessine l’Europe'],
      ['1822', 'Le massacre de Chios'],
      ['1830', 'Les Trois Glorieuses, la monarchie de Juillet'],
      ['1848', 'Le « printemps des peuples » en Europe']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>Deux expériences françaises de <b>monarchie constitutionnelle</b> : la Charte de 1814, puis la Charte révisée de 1830. ' +
      'Le roi accepte une constitution, mais le suffrage reste censitaire.</li>' +
      '<li>Le congrès de Vienne veut bâtir une <b>paix durable</b> en renouvelant les règles de la diplomatie. ' +
      'Il redessine la carte sans tenir compte des peuples.</li>' +
      '<li>Le <b>mouvement des nationalités</b> remet en cause cet ordre : les peuples réclament un État qui corresponde à leur nation.</li>' +
      '<li>Les hommes et les idées circulent : écrits, discours, sociétés parfois secrètes, comme la <b>Jeune-Italie</b> de Mazzini.</li>' +
      '<li>Deux poussées révolutionnaires, <b>1830</b> et <b>1848</b>, se propagent de la France à l’Europe.</li></ul>' },
    ppo([
      '1815 : Metternich et le congrès de Vienne.',
      '1822 : le massacre de Chios.',
      '1830 : les Trois Glorieuses.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Opposer clairement <b>deux logiques</b> : celle des souverains, l’équilibre entre États ; celle des peuples, ' +
      'le droit des nations. Tout le chapitre tient dans cette tension.</li>' +
      '<li>Le tableau de Delacroix sur Chios est un document classique : il montre que l’opinion publique ' +
      'devient un acteur politique.</li>' +
      '<li>Attention à ne pas confondre <b>Restauration</b> (1814-1830) et <b>monarchie de Juillet</b> (1830-1848).</li></ul>' }
  ]
},

/* ================= HISTOIRE · THÈME 2 ================= */
{
  id: 'hg-h2-democratie', bloc: 'hg-histoire',
  titre: 'La difficile entrée dans l’âge démocratique',
  resume: 'Thème 2, chapitre 1. La Deuxième République et le Second Empire.',
  capacites: [
    'Montrer que le suffrage universel masculin de 1848 ne tranche pas la question du régime.',
    'Expliquer les affirmations fondatrices de 1848 et l’échec du projet républicain.',
    'Caractériser le Second Empire comme régime autoritaire appuyé sur le suffrage universel masculin.',
    'Analyser les oppositions au Second Empire et la répression exercée.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>1848 donne le droit de vote à tous les hommes. Quatre ans plus tard, ce même suffrage porte au pouvoir ' +
      'un empereur. Ce chapitre explique ce paradoxe : <b>la démocratie ne se réduit pas au vote</b>.</p>' },
    reperes([
      ['février 1848', 'Révolution, proclamation de la Deuxième République'],
      ['mars 1848', 'Suffrage universel masculin'],
      ['27 avril 1848', 'Abolition de l’esclavage dans les colonies françaises'],
      ['juin 1848', 'Journées de juin, répression de l’insurrection ouvrière'],
      ['2 décembre 1851', 'Coup d’État de Louis-Napoléon Bonaparte'],
      ['1852', 'Proclamation du Second Empire']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>1848 apporte des <b>affirmations fondatrices</b> : suffrage universel masculin, abolition de l’esclavage, ' +
      'droit au travail un temps proclamé.</li>' +
      '<li>Le projet républicain <b>échoue</b> devant les tensions : conservateurs contre républicains, villes contre campagnes, ' +
      'bourgeois contre ouvriers.</li>' +
      '<li>Le Second Empire est un <b>régime autoritaire</b> qui s’appuie sur le suffrage universel masculin, ' +
      'le renforcement de l’État et la prospérité économique, et qui mène une politique de grandeur nationale.</li>' +
      '<li>Il rencontre des <b>oppositions</b> et les réprime : Victor Hugo et Edgar Quinet sont proscrits.</li></ul>' },
    ppo([
      'Alphonse de Lamartine en 1848.',
      'George Sand, femme de lettres engagée en politique.',
      'Louis-Napoléon Bonaparte, premier président de la République.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le suffrage universel de 1848 est <b>masculin</b> : l’oublier coûte cher, et le préciser montre de la rigueur.</li>' +
      '<li>Le plébiscite est l’outil clé du Second Empire : un vote qui donne l’apparence démocratique à un pouvoir personnel.</li>' +
      '<li>Bien distinguer les <b>trois moments</b> : février 1848 l’espoir, juin 1848 la fracture, décembre 1851 le basculement.</li></ul>' }
  ]
},
{
  id: 'hg-h2-industrialisation', bloc: 'hg-histoire',
  titre: 'L’industrialisation et les transformations de la France',
  resume: 'Thème 2, chapitre 2. Mutations économiques et sociales.',
  capacites: [
    'Analyser les transformations des modes de production : mécanisation, essor du salariat.',
    'Expliquer la modernisation encouragée par le Second Empire.',
    'Mesurer l’importance du monde rural et les débuts de l’exode rural.',
    'Expliquer l’importance politique de la question sociale.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce chapitre montre comment la France change de visage : usines, chemins de fer, villes qui s’étendent. ' +
      'Et comment une question neuve surgit, qui va dominer la politique pendant un siècle : ' +
      'la <b>question sociale</b>, celle de la condition ouvrière.</p>' },
    reperes([
      ['années 1840-1870', 'Essor du chemin de fer et de l’industrie'],
      ['1853-1870', 'Paris haussmannien, transformation de la capitale'],
      ['25 mai 1864', 'La loi Ollivier reconnaît le droit de grève'],
      ['1884', 'Loi Waldeck-Rousseau autorisant les syndicats']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>Les <b>modes de production</b> changent : mécanisation, concentration des ateliers, essor du <b>salariat</b>.</li>' +
      '<li>Le Second Empire <b>encourage la modernisation</b> : crédit, chemins de fer, grands travaux urbains, libre-échange.</li>' +
      '<li>La France reste pourtant <b>largement rurale</b> ; l’exode rural commence, mais il est lent.</li>' +
      '<li>La <b>question sociale</b> devient politique : conditions de travail, salaires, logement ouvrier, droit de s’organiser.</li></ul>' },
    ppo([
      'Paris haussmannien : la transformation d’une ville.',
      'Les frères Pereire, acteurs de la modernisation économique.',
      '25 mai 1864 : le droit de grève répond à l’une des attentes du mouvement ouvrier.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La France s’industrialise <b>plus lentement</b> que l’Angleterre ou l’Allemagne, et reste rurale plus longtemps. ' +
      'Le dire évite le contresens le plus fréquent.</li>' +
      '<li>Le droit de grève est reconnu en 1864, mais le syndicat reste interdit jusqu’en 1884 : ' +
      'deux dates, deux étapes distinctes.</li>' +
      '<li>Haussmann est l’exemple à tout faire : modernisation, hygiène, spéculation, et maintien de l’ordre.</li></ul>' }
  ]
},
{
  id: 'hg-h2-nations', bloc: 'hg-histoire',
  titre: 'La France et la construction de nouveaux États',
  resume: 'Thème 2, chapitre 3. Unités italienne et allemande.',
  capacites: [
    'Expliquer le rôle de la France dans la construction des unités italienne et allemande.',
    'Montrer que ces unifications sont menées par des régimes monarchiques appuyés sur la guerre et la diplomatie.',
    'Analyser la guerre de 1870 et ses conséquences pour la France et pour l’Allemagne.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le principe des nationalités, né en 1848, devient réalité entre 1859 et 1871 : deux grands États naissent au centre ' +
      'de l’Europe. Ce ne sont pas les peuples qui les font, ce sont des <b>monarchies</b>, par la guerre et la diplomatie.</p>' +
      '<p>Et la France, qui a aidé l’unité italienne, est écrasée par l’unité allemande.</p>' },
    reperes([
      ['1859', 'Campagne d’Italie, victoires de Magenta et Solférino'],
      ['1860', 'Rattachement de Nice et de la Savoie à la France'],
      ['1861', 'Proclamation du royaume d’Italie'],
      ['1870', 'Guerre franco-prussienne, défaite de Sedan, chute du Second Empire le 4 septembre'],
      ['18 janvier 1871', 'Proclamation de l’Empire allemand dans la galerie des Glaces, à Versailles'],
      ['1871', 'Traité de Francfort, perte de l’Alsace et d’une partie de la Lorraine']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>Le Second Empire <b>participe à la marche vers l’unité italienne</b>, contre l’Autriche, et reçoit en échange ' +
      'Nice et la Savoie.</li>' +
      '<li>La <b>guerre de 1870</b> entraîne la chute du Second Empire et permet l’unité allemande, proclamée à Versailles.</li>' +
      '<li>Ces unités sont l’œuvre de <b>Cavour</b> en Italie et de <b>Bismarck</b> en Prusse : ' +
      'des hommes d’État, pas des révolutionnaires.</li></ul>' },
    ppo([
      'Le rattachement de Nice et de la Savoie à la France.',
      '1871 : Bismarck et la proclamation du Reich.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le lieu de la proclamation du Reich, <b>la galerie des Glaces à Versailles</b>, n’est pas un détail : ' +
      'c’est une humiliation voulue, et la source d’un ressentiment qui pèsera jusqu’en 1914.</li>' +
      '<li>Retenir la formule : les nations se font <b>par en haut</b>, par la guerre et la diplomatie, ' +
      'et non par le soulèvement des peuples.</li></ul>' }
  ]
},

/* ================= HISTOIRE · THÈME 3 ================= */
{
  id: 'hg-h3-republique', bloc: 'hg-histoire',
  titre: 'La mise en œuvre du projet républicain',
  resume: 'Thème 3, chapitre 1. Enraciner la République.',
  capacites: [
    'Expliquer l’instauration de la République et de la démocratie parlementaire entre 1870 et 1875.',
    'Présenter l’affirmation des libertés fondamentales.',
    'Analyser le projet d’unification de la nation autour des valeurs de 1789 et ses modalités.',
    'Identifier les oppositions rencontrées par la République, dont l’antisémitisme lors de l’affaire Dreyfus.',
    'Expliquer le refus du droit de vote des femmes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La République qui naît en 1870 est la <b>troisième</b>. Les deux premières ont duré quatre et douze ans. ' +
      'Celle-ci tiendra soixante-dix ans. Ce chapitre explique <b>comment un régime s’enracine</b> : par les lois, ' +
      'par l’école, par les symboles.</p>' },
    reperes([
      ['4 septembre 1870', 'Proclamation de la République'],
      ['1875', 'Lois constitutionnelles fondant la Troisième République'],
      ['1881-1882', 'Lois Ferry : école gratuite, laïque et obligatoire'],
      ['1881', 'Liberté de la presse et de réunion'],
      ['1884', 'Liberté syndicale'],
      ['1894-1906', 'Affaire Dreyfus'],
      ['9 décembre 1905', 'Loi de séparation des Églises et de l’État']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>1870-1875 : l’instauration de la République et d’une <b>démocratie parlementaire</b>, ' +
      'après une longue hésitation entre monarchie et république.</li>' +
      '<li>Des <b>libertés fondamentales</b> sont affirmées : presse, réunion, association, syndicat.</li>' +
      '<li>La République veut <b>unifier la nation</b> autour des valeurs de 1789, par les symboles (Marianne, 14 juillet, Marseillaise) ' +
      'et par les lois scolaires.</li>' +
      '<li>Elle se heurte à des <b>oppositions</b> : courants révolutionnaires, refus de la laïcité par l’Église catholique, ' +
      'structuration de l’antisémitisme autour de l’<b>affaire Dreyfus</b>, nationalisme.</li>' +
      '<li>Le <b>droit de vote des femmes est refusé</b>, alors même que la République se dit universelle.</li></ul>' },
    ppo([
      '1871 : Louise Michel pendant la Commune de Paris.',
      '1885 : les funérailles nationales de Victor Hugo.',
      '1905 : la loi de séparation des Églises et de l’État, débats et mise en œuvre.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le refus du vote des femmes est un point du programme : le mentionner nuance utilement ' +
      'l’idée d’une République « universelle ».</li>' +
      '<li>L’affaire Dreyfus n’est pas qu’une erreur judiciaire : elle révèle un antisémitisme organisé ' +
      'et fait naître la figure de l’<b>intellectuel</b> engagé.</li>' +
      '<li>1905 sépare les Églises et l’État : elle ne « supprime » pas la religion, elle garantit la liberté de conscience.</li></ul>' }
  ]
},
{
  id: 'hg-h3-societe', bloc: 'hg-histoire',
  titre: 'Permanences et mutations de la société française',
  resume: 'Thème 3, chapitre 2. Une France industrielle et rurale.',
  capacites: [
    'Analyser l’industrialisation et les progrès techniques jusqu’en 1914.',
    'Expliquer la question ouvrière et le mouvement ouvrier.',
    'Étudier l’immigration et la place des étrangers.',
    'Mesurer l’importance du monde rural et ses difficultés.',
    'Analyser l’évolution de la place des femmes.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le mot clé du chapitre est dans son titre : <b>permanences ET mutations</b>. La France de 1900 est à la fois ' +
      'le pays des expositions universelles et de l’électricité, et un pays où la moitié des habitants vivent encore à la campagne.</p>' +
      '<p>Un devoir qui ne montre que la modernité passe à côté du sujet.</p>' },
    reperes([
      ['1889', 'Exposition universelle de Paris, la tour Eiffel'],
      ['1er mai 1891', 'Fusillade de Fourmies'],
      ['1900', 'Exposition universelle, le métro parisien'],
      ['1906', 'Repos hebdomadaire obligatoire'],
      ['1914', 'La France reste peuplée à environ la moitié de ruraux']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li><b>Industrialisation et progrès techniques</b> : électricité, automobile, chimie, grands magasins.</li>' +
      '<li>La <b>question ouvrière</b> et la structuration du mouvement ouvrier : syndicats, grèves, socialisme.</li>' +
      '<li>L’<b>immigration</b> se développe, surtout belge, italienne et polonaise, et suscite des tensions.</li>' +
      '<li>Le <b>monde rural</b> reste central et connaît ses propres difficultés : crises agricoles, exode.</li>' +
      '<li>La <b>place des femmes</b> évolue : travail à l’usine et au magasin, accès progressif aux études, ' +
      'sans droits politiques.</li></ul>' },
    ppo([
      '1891 : la fusillade de Fourmies du 1er mai.',
      'Les expositions universelles de 1889 et 1900.',
      'Le Creusot et la famille Schneider.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le Creusot est l’exemple modèle du <b>paternalisme industriel</b> : l’usine loge, soigne et surveille l’ouvrier.</li>' +
      '<li>Les expositions universelles servent à montrer la puissance industrielle <b>et</b> l’empire colonial : ' +
      'elles relient ce chapitre au suivant.</li>' +
      '<li>Attention au contresens : la France de 1914 n’est <b>pas</b> un pays majoritairement urbain.</li></ul>' }
  ]
},
{
  id: 'hg-h3-colonies', bloc: 'hg-histoire',
  titre: 'Métropole et colonies',
  resume: 'Thème 3, chapitre 3. L’empire colonial de la Troisième République.',
  capacites: [
    'Analyser l’expansion coloniale française : acteurs, motivations, territoires.',
    'Présenter les débats suscités par la politique coloniale.',
    'Expliquer les chocs entre puissances occasionnés par cette expansion.',
    'Étudier le cas particulier de l’Algérie, conquise de 1830 à 1847 et organisée en départements français en 1848.',
    'Analyser le fonctionnement des sociétés coloniales : affrontements, résistances, violences, négociations, contacts et échanges.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La même République qui proclame les droits de l’homme conquiert un empire et y institue l’inégalité. ' +
      'Ce chapitre demande de tenir les <b>deux faits ensemble</b>, sans anachronisme et sans complaisance.</p>' },
    reperes([
      ['1830-1847', 'Conquête de l’Algérie'],
      ['1848', 'L’Algérie est organisée en départements français'],
      ['1881', 'Protectorat français sur la Tunisie'],
      ['1885', 'Débat Ferry contre Clemenceau à la Chambre sur la colonisation'],
      ['1887', 'Le code de l’indigénat algérien est généralisé aux colonies françaises'],
      ['1898', 'Crise de Fachoda, face à face franco-britannique']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>L’<b>expansion coloniale</b> a des acteurs (militaires, missionnaires, explorateurs, négociants) ' +
      'et des motivations mêlées : économiques, stratégiques, de prestige, et une prétendue « mission civilisatrice ».</li>' +
      '<li>Elle suscite des <b>débats</b> en métropole, entre Jules Ferry qui la défend et Georges Clemenceau qui la dénonce ' +
      'au nom des droits de l’homme.</li>' +
      '<li>Elle provoque des <b>chocs entre puissances</b>, dont Fachoda est le meilleur exemple.</li>' +
      '<li>L’<b>Algérie</b> est un cas particulier : des départements français, mais une population majoritairement privée ' +
      'de la citoyenneté.</li>' +
      '<li>Les <b>sociétés coloniales</b> mêlent affrontements, résistances, violences, négociations, contacts et échanges.</li></ul>' },
    ppo([
      '1887 : le code de l’indigénat algérien est généralisé à toutes les colonies françaises.',
      '1898 : Fachoda, le choc des impérialismes.',
      'Saigon, ville coloniale.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le <b>code de l’indigénat</b> est la preuve juridique de l’inégalité : des sujets, non des citoyens. ' +
      'C’est l’argument le plus solide du chapitre.</li>' +
      '<li>Toujours montrer que les colonisés sont des <b>acteurs</b> : ils résistent, négocient, s’adaptent. ' +
      'Une copie qui les présente en simples victimes passives est incomplète.</li>' +
      '<li>Le débat Ferry contre Clemenceau de 1885 est le document type de ce chapitre.</li></ul>' }
  ]
},

/* ================= HISTOIRE · THÈME 4 ================= */
{
  id: 'hg-h4-embrasement', bloc: 'hg-histoire',
  titre: 'Un embrasement mondial et ses grandes étapes',
  resume: 'Thème 4, chapitre 1. Les phases et les formes de la guerre.',
  capacites: [
    'Présenter les motivations et les buts de guerre des belligérants.',
    'Expliquer l’extension progressive du conflit et ses grandes étapes.',
    'Analyser l’échec de la guerre de mouvement et le passage à la guerre de position.',
    'Montrer l’implication des empires coloniaux britannique et français.',
    'Expliquer la désintégration de l’empire russe.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le titre du thème donne la thèse : la Première Guerre mondiale est le <b>« suicide de l’Europe »</b>. ' +
      'Ce premier chapitre est celui des faits militaires. Il faut le connaître pour pouvoir, ensuite, expliquer les sociétés ' +
      'et la sortie de guerre.</p>' },
    reperes([
      ['28 juin 1914', 'Attentat de Sarajevo'],
      ['août-septembre 1914', 'Tannenberg et la Marne, échec de la guerre de mouvement'],
      ['1915', 'Offensive des Dardanelles'],
      ['1916', 'Verdun et la Somme, les grandes batailles d’usure'],
      ['1917', 'Révolutions russes, entrée en guerre des États-Unis'],
      ['mars 1918', 'Dernière offensive allemande'],
      ['11 novembre 1918', 'Armistice de Rethondes']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>Les <b>buts de guerre</b> diffèrent : récupérer l’Alsace-Lorraine, dominer l’Europe centrale, ' +
      'défendre ou démanteler des empires.</li>' +
      '<li>Trois formes de guerre : <b>terrestre, navale et aérienne</b>. La guerre devient technique et industrielle.</li>' +
      '<li>La <b>guerre de mouvement</b> échoue dès l’automne 1914 ; commence la <b>guerre de position</b>, ' +
      'celle des tranchées.</li>' +
      '<li>Les <b>empires coloniaux</b> britannique et français fournissent soldats et travailleurs : le conflit devient mondial.</li>' +
      '<li>L’<b>empire russe se désintègre</b> : la guerre provoque les révolutions de 1917 et la sortie de la Russie du conflit.</li></ul>' },
    ppo([
      'Août et septembre 1914 : Tannenberg et la Marne.',
      '1915 : l’offensive des Dardanelles.',
      '1916 : la bataille de la Somme.',
      'Mars 1918 : la dernière offensive allemande.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le programme retient <b>la Somme</b>, pas seulement Verdun : pense à la citer, c’est un point de passage officiel.</li>' +
      '<li>Expliquer <b>pourquoi</b> la guerre de mouvement échoue (puissance de feu défensive, mitrailleuse, artillerie) ' +
      'vaut mieux que de raconter la bataille.</li>' +
      '<li>Le mot « mondial » se justifie par les empires coloniaux et par l’entrée des États-Unis, pas seulement par l’Europe.</li></ul>' }
  ]
},
{
  id: 'hg-h4-societes', bloc: 'hg-histoire',
  titre: 'Les sociétés en guerre',
  resume: 'Thème 4, chapitre 2. Des civils acteurs et victimes.',
  capacites: [
    'Analyser les dimensions économique, industrielle et scientifique de la guerre.',
    'Expliquer les conséquences de la mobilisation des civils, notamment pour la place des femmes.',
    'Étudier le génocide des Arméniens, depuis les massacres de 1894-1896 jusqu’à son déroulement dans le conflit mondial.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce chapitre fait entrer les <b>civils</b> dans la guerre. Ils produisent, ils souffrent, ils se révoltent, ' +
      'et certains sont exterminés. C’est ici que se joue la notion de <b>guerre totale</b>.</p>' },
    reperes([
      ['1894-1896', 'Massacres des Arméniens dans l’Empire ottoman'],
      ['1915', 'Génocide des Arméniens'],
      ['24 mai 1915', 'Déclaration de la Triple Entente sur les « crimes contre l’humanité et la civilisation »'],
      ['1917', 'Grèves en France et mutineries au front'],
      ['1914-1918', 'Les femmes remplacent les hommes dans les usines et les champs']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>La guerre est <b>économique, industrielle et scientifique</b> : usines converties, emprunts, ' +
      'inventions mises au service du front.</li>' +
      '<li>La <b>mobilisation des civils</b> a des conséquences durables, notamment sur la <b>place des femmes</b> ' +
      'dans la société.</li>' +
      '<li>Le <b>génocide des Arméniens</b> s’inscrit dans une histoire plus longue, commencée avec les massacres ' +
      'de 1894-1896, et s’accomplit à la faveur du conflit mondial.</li>' +
      '<li>Les sociétés se <b>fatiguent</b> : les grèves de 1917 montrent que le consentement à la guerre s’use.</li></ul>' },
    ppo([
      'Marie Curie dans la guerre.',
      '24 mai 1915 : la déclaration de la Triple Entente à propos des « crimes contre l’humanité et la civilisation » ' +
        'perpétrés contre les Arméniens de l’Empire ottoman.',
      'Les grèves de l’année 1917.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La déclaration du 24 mai 1915 est la <b>première apparition</b> de l’expression « crimes contre l’humanité » ' +
      'dans un texte international. C’est ce qui en fait un point de passage.</li>' +
      '<li>Sur les femmes, nuancer : leur rôle s’élargit pendant la guerre, mais l’après-guerre ramène beaucoup d’entre elles ' +
      'au foyer, et la France ne leur accorde pas le droit de vote.</li>' +
      '<li>Marie Curie et ses voitures radiologiques : un exemple qui relie science, guerre et place des femmes en une phrase.</li></ul>' }
  ]
},
{
  id: 'hg-h4-sortir', bloc: 'hg-histoire',
  titre: 'Sortir de la guerre',
  resume: 'Thème 4, chapitre 3. Construire un ordre des nations démocratiques.',
  capacites: [
    'Présenter le bilan humain et matériel de la guerre.',
    'Expliquer les principes formulés par le président Wilson et la fondation de la Société des Nations.',
    'Analyser les traités de paix et la fin des empires multinationaux européens.',
    'Étudier les interventions étrangères et la guerre civile en Russie jusqu’en 1922.',
    'Analyser les enjeux de mémoire de la Grande Guerre.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Dernier chapitre du programme, et il le referme : l’Europe de 1920 est celle des <b>nations</b>, ' +
      'les empires ont disparu. Le principe apparu en 1815 et revendiqué en 1848 a triomphé, au prix de dix millions de morts.</p>' +
      '<p>Mais cette paix est fragile, et c’est par elle que commencera le programme de terminale.</p>' },
    reperes([
      ['janvier 1918', 'Les quatorze points du président Wilson'],
      ['1919', 'Traité de Versailles, signé le 28 juin'],
      ['1919-1923', 'Les traités de paix redessinent l’Europe'],
      ['1920', 'Le soldat inconnu ; création de la Société des Nations'],
      ['1922', 'Le passeport Nansen et le statut des apatrides ; fin de la guerre civile russe']
    ]),
    { k: 'prop', t: 'Les idées directrices du chapitre', c:
      '<ul><li>Le <b>bilan</b> est humain et matériel : près de dix millions de morts, des régions dévastées, ' +
      'des économies ruinées, une génération marquée.</li>' +
      '<li>Wilson formule des <b>principes</b> : droit des peuples à disposer d’eux-mêmes, diplomatie ouverte, ' +
      'et une organisation internationale, la <b>Société des Nations</b>.</li>' +
      '<li>Les <b>traités de paix</b> font disparaître les empires multinationaux : allemand, austro-hongrois, ' +
      'ottoman, russe. De nouveaux États apparaissent.</li>' +
      '<li>En Russie, la guerre se prolonge en <b>guerre civile</b>, avec interventions étrangères, jusqu’en 1922.</li>' +
      '<li>La <b>mémoire</b> de la guerre devient un enjeu, pour les États comme pour les familles : ' +
      'monuments aux morts, commémorations, anciens combattants.</li></ul>' },
    ppo([
      '1919-1923 : les traités de paix.',
      '1920 : le soldat inconnu et les enjeux mémoriels.',
      '1922 : le passeport Nansen et le statut des apatrides.'
    ]),
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Montrer que le principe des nationalités est <b>appliqué de façon inégale</b> : il sert les vainqueurs, ' +
      'et laisse des minorités mécontentes partout. C’est l’argument qui fait la bonne copie.</li>' +
      '<li>Le passeport Nansen invente une catégorie neuve : l’<b>apatride</b>. La paix produit des sans-État.</li>' +
      '<li>Les États-Unis n’entrent jamais dans la Société des Nations qu’ils ont inspirée : ' +
      'un paradoxe à citer pour expliquer sa faiblesse.</li></ul>' }
  ]
}
];
