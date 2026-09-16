/* =========================================================================
   SPÉCIALITÉ NUMÉRIQUE ET SCIENCES INFORMATIQUES, première générale.

   Programme : BO spécial n°1 du 22 janvier 2019, inchangé pour 2026-2027.

   Huit parties : histoire de l'informatique · représentation des données,
   types et valeurs de base · représentation des données, types construits
   traitement de données en tables · interactions entre l'homme et la
   machine sur le Web · architectures matérielles et systèmes d'exploitation
   langages et programmation · algorithmique.
   ========================================================================= */

MAT['nsi'].pret = true;

BLOCS.push(
  { id: 'nsi-donnees', nom: 'Représentation des données', matiere: 'nsi' },
  { id: 'nsi-machine', nom: 'Machines, réseaux et Web',   matiere: 'nsi' },
  { id: 'nsi-prog',    nom: 'Langages et algorithmique',  matiere: 'nsi' }
);

/* bloc de code Python */
function code(src, leg){
  return '<pre class="code">' + src + '</pre>' +
         (leg ? '<p class="tiny">' + leg + '</p>' : '');
}

const CHAPITRES_NSI = [
{
  id: 'nsi-binaire', bloc: 'nsi-donnees', titre: 'Écriture binaire et entiers',
  resume: 'Base 2, base 16, entiers relatifs, débordement.',
  capacites: [
    'Passer de la représentation décimale à la représentation binaire d’un entier, et inversement.',
    'Évaluer le nombre de bits nécessaires à l’écriture en base 2 d’un entier.',
    'Utiliser la représentation hexadécimale.',
    'Évaluer le nombre d’entiers représentables sur n bits.',
    'Comprendre le principe du complément à deux pour les entiers relatifs.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Une machine ne connaît que deux états. Tout le reste, nombres, textes, images, sons, ' +
      'n’est qu’une <b>convention</b> de codage par-dessus ces deux états. Ce chapitre pose ces conventions.</p>' },
    { k: 'meth', t: 'Convertir en binaire', c:
      '<p><b>Décimal vers binaire</b> : on divise par 2 en notant les restes, puis on les lit <b>de bas en haut</b>.</p>' +
      '<p><b>Binaire vers décimal</b> : on additionne les puissances de 2 correspondant aux bits à 1.</p>' +
      form('1011_2 = 1×8 + 0×4 + 1×2 + 1×1 = 11_{10}', 'les poids sont 1, 2, 4, 8, 16, 32, 64, 128…') },
    { k: 'prop', t: 'Combien de valeurs sur n bits ?', c:
      form('2^{n} @valeurs @differentes', 'de 0 à 2ⁿ - 1 pour des entiers positifs') +
      '<ul class="dates">' +
      '<li><b>4 bits</b> <span>16 valeurs, de 0 à 15</span></li>' +
      '<li><b>8 bits</b> <span>256 valeurs, de 0 à 255 · c’est un octet</span></li>' +
      '<li><b>16 bits</b> <span>65 536 valeurs</span></li>' +
      '<li><b>32 bits</b> <span>environ 4,3 milliards</span></li></ul>' +
      '<p>Sur n bits en <b>complément à deux</b>, on représente les entiers relatifs de -2<sup>n-1</sup> ' +
      'à 2<sup>n-1</sup> - 1. Sur 8 bits : de -128 à 127.</p>' },
    { k: 'def', t: 'L’hexadécimal', c:
      '<p>Base 16, avec les chiffres 0 à 9 puis A à F pour 10 à 15. Son intérêt : ' +
      '<b>un chiffre hexadécimal vaut exactement quatre bits</b>, ce qui rend la conversion immédiate.</p>' +
      '<ul class="dates">' +
      '<li><b>A</b> <span>10, soit 1010</span></li><li><b>B</b> <span>11, soit 1011</span></li>' +
      '<li><b>C</b> <span>12, soit 1100</span></li><li><b>D</b> <span>13, soit 1101</span></li>' +
      '<li><b>E</b> <span>14, soit 1110</span></li><li><b>F</b> <span>15, soit 1111</span></li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Retenir les puissances de 2 jusqu’à 1024 : elles reviennent partout.</li>' +
      '<li>Un <b>débordement</b> survient quand le résultat dépasse ce que le nombre de bits permet ' +
      'de représenter. Sur 8 bits non signés, 255 + 1 redonne 0.</li>' +
      '<li>Pour convertir binaire → hexadécimal, grouper les bits par <b>quatre</b> en partant de la droite.</li></ul>' }
  ]
},
{
  id: 'nsi-types', bloc: 'nsi-donnees', titre: 'Types de base et types construits',
  resume: 'Booléens, flottants, texte, tuples, listes, dictionnaires.',
  capacites: [
    'Utiliser les opérateurs booléens et dresser une table de vérité.',
    'Comprendre les limites de la représentation des nombres flottants.',
    'Distinguer les principaux encodages de caractères.',
    'Construire et manipuler des p-uplets, des tableaux et des dictionnaires.',
    'Itérer sur les éléments d’une structure de données.'
  ],
  cours: [
    { k: 'def', t: 'Les opérateurs booléens', c:
      '<p>Trois opérateurs, et leurs tables de vérité :</p>' +
      '<ul><li><b>non</b> (<code>not</code>) : inverse la valeur.</li>' +
      '<li><b>et</b> (<code>and</code>) : vrai seulement si les <b>deux</b> sont vrais.</li>' +
      '<li><b>ou</b> (<code>or</code>) : vrai si <b>au moins un</b> est vrai. C’est un ou <b>inclusif</b>.</li></ul>' +
      '<p>Les lois de De Morgan sont au programme :</p>' +
      form('@non(A @et B) = (@non A) @ou (@non B)', 'et symétriquement pour le ou') },
    { k: 'piege', t: 'Les flottants ne sont pas les réels', c:
      '<p>Un nombre à virgule est stocké en base 2, avec un nombre fini de bits. Beaucoup de décimaux ' +
      'n’ont pas d’écriture binaire finie, exactement comme 1/3 n’a pas d’écriture décimale finie.</p>' +
      code('>>> 0.1 + 0.2\n0.30000000000000004\n>>> 0.1 + 0.2 == 0.3\nFalse',
           'Conséquence : on ne teste jamais l’égalité de deux flottants. On compare à une tolérance près.') },
    { k: 'def', t: 'Les types construits', c:
      '<ul><li><b>Tuple</b> (p-uplet) : <code>(1, 2, 3)</code>, ordonné et <b>non modifiable</b>.</li>' +
      '<li><b>Liste</b> (tableau) : <code>[1, 2, 3]</code>, ordonnée et <b>modifiable</b>. ' +
      'Indices de 0 à n-1.</li>' +
      '<li><b>Dictionnaire</b> : <code>{"nom": "Lisa", "age": 16}</code>, ensemble de couples ' +
      '<b>clé-valeur</b>, accès direct par la clé.</li></ul>' +
      code('t = [4, 8, 15, 16]\nt[0]        # 4, le premier\nt[-1]       # 16, le dernier\nt[1:3]      # [8, 15], la borne de droite est exclue\nlen(t)      # 4',
           'La tranche t[a:b] contient les indices a à b-1.') },
    { k: 'prop', t: 'Le codage des caractères', c:
      '<ul><li><b>ASCII</b> : 7 bits, 128 caractères. Suffisant pour l’anglais, pas pour les accents.</li>' +
      '<li><b>Latin-1</b> : 8 bits, 256 caractères, ajoute les caractères d’Europe occidentale.</li>' +
      '<li><b>Unicode et UTF-8</b> : codage à nombre d’octets variable, de 1 à 4, ' +
      'qui couvre tous les systèmes d’écriture. C’est le standard du Web.</li></ul>' +
      '<p>En UTF-8, un caractère ASCII tient toujours sur <b>un</b> octet : le codage est compatible avec l’existant.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Une liste est <b>mutable</b>, un tuple ne l’est pas. C’est la question de cours la plus posée.</li>' +
      '<li>Dans un dictionnaire, on accède par <b>clé</b>, pas par position : l’ordre n’est pas le sujet.</li>' +
      '<li>Ne jamais écrire <code>if x == 0.3</code> avec des flottants.</li></ul>' }
  ]
},
{
  id: 'nsi-tables', bloc: 'nsi-donnees', titre: 'Traitement de données en tables',
  resume: 'CSV, recherche, tri, fusion de tables.',
  capacites: [
    'Importer une table depuis un fichier au format CSV.',
    'Rechercher les lignes d’une table qui vérifient une condition.',
    'Trier une table selon une colonne.',
    'Fusionner deux tables ayant un attribut commun.',
    'Interroger la validité et la provenance des données.'
  ],
  cours: [
    { k: 'def', t: 'Ce qu’est une table', c:
      '<p>Une table est une collection de <b>lignes</b> (les enregistrements) partageant les mêmes ' +
      '<b>colonnes</b> (les descripteurs, ou attributs).</p>' +
      '<p>Le format <b>CSV</b> stocke une table en texte : une ligne par enregistrement, ' +
      'des valeurs séparées par des virgules ou des points-virgules. La première ligne donne ' +
      'en général les noms des colonnes.</p>' +
      code('nom;matiere;note\nLisa;maths;17\nSami;physique;14\nJade;maths;19') },
    { k: 'prop', t: 'En Python, une table est une liste de dictionnaires', c:
      code('table = [\n    {"nom": "Lisa", "matiere": "maths", "note": 17},\n' +
           '    {"nom": "Sami", "matiere": "physique", "note": 14},\n' +
           '    {"nom": "Jade", "matiere": "maths", "note": 19}\n]\n\n' +
           '# recherche : les lignes qui vérifient une condition\nmatheux = [l for l in table if l["matiere"] == "maths"]\n\n' +
           '# tri selon une colonne, du plus grand au plus petit\nclasse = sorted(table, key=lambda l: l["note"], reverse=True)') },
    { k: 'meth', t: 'Fusionner deux tables', c:
      '<p>Fusionner, c’est rapprocher deux tables par un <b>attribut commun</b>, souvent un identifiant. ' +
      'Chaque ligne de la première est complétée par les informations de la seconde qui partagent la même clé.</p>' +
      '<p>Le piège : si la clé n’est pas unique, une ligne peut être <b>dupliquée</b>. ' +
      'Une bonne clé identifie une ligne et une seule.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Les valeurs lues dans un CSV sont des <b>chaînes de caractères</b> : ' +
      'il faut convertir avant tout calcul, avec <code>int()</code> ou <code>float()</code>.</li>' +
      '<li>Le programme demande d’interroger la <b>provenance</b> et la <b>validité</b> des données : ' +
      'qui les a produites, quand, et avec quelle méthode.</li>' +
      '<li><code>sorted()</code> renvoie une nouvelle liste ; <code>.sort()</code> modifie la liste en place.</li></ul>' }
  ]
},
{
  id: 'nsi-machine', bloc: 'nsi-machine', titre: 'Architecture et système',
  resume: 'Modèle de von Neumann, processeur, système, commandes.',
  capacites: [
    'Distinguer les rôles du processeur, de la mémoire vive et des mémoires de stockage.',
    'Identifier les principaux composants d’une architecture de von Neumann.',
    'Décrire le rôle d’un système d’exploitation.',
    'Utiliser les commandes de base en ligne de commande.',
    'Décrire le principe du transfert de données par paquets dans un réseau.'
  ],
  cours: [
    { k: 'def', t: 'Le modèle de von Neumann', c:
      '<ul><li>l’<b>unité de contrôle</b>, qui séquence les instructions ;</li>' +
      '<li>l’<b>unité arithmétique et logique</b>, qui effectue les calculs ;</li>' +
      '<li>la <b>mémoire</b>, qui contient à la fois les données <b>et</b> le programme ;</li>' +
      '<li>les <b>dispositifs d’entrée et de sortie</b>.</li></ul>' +
      '<p>L’idée décisive du modèle : le programme est stocké <b>dans la même mémoire</b> que les données. ' +
      'C’est ce qui rend une machine universelle plutôt que spécialisée.</p>' },
    { k: 'prop', t: 'Mémoire vive et stockage', c:
      '<ul><li>La <b>mémoire vive</b> (RAM) est rapide mais <b>volatile</b> : son contenu disparaît ' +
      'à l’extinction.</li>' +
      '<li>Les <b>mémoires de stockage</b> (disque dur, SSD) sont plus lentes mais <b>persistantes</b>.</li></ul>' +
      '<p>Ordres de grandeur : 1 ko = 10<sup>3</sup> octets · 1 Mo = 10<sup>6</sup> · 1 Go = 10<sup>9</sup> · ' +
      '1 To = 10<sup>12</sup>.</p>' },
    { k: 'def', t: 'Le système d’exploitation', c:
      '<p>Il fait l’interface entre le matériel et les programmes. Ses rôles : gérer les <b>processus</b>, ' +
      'la <b>mémoire</b>, les <b>fichiers</b>, les <b>périphériques</b> et les <b>droits</b> des utilisateurs.</p>' +
      code('pwd          # où suis-je ?\nls           # lister le contenu du répertoire\ncd dossier   # se déplacer\nmkdir nom    # créer un répertoire\nrm fichier   # supprimer',
           'Les commandes de base attendues au programme.') },
    { k: 'prop', t: 'Les réseaux', c:
      '<p>Les données circulent découpées en <b>paquets</b>, qui peuvent emprunter des routes différentes ' +
      'et arriver dans le désordre : le destinataire les réassemble.</p>' +
      '<p>Avantages : on utilise mieux les liaisons, et une panne locale n’interrompt pas la communication, ' +
      'car les paquets sont réacheminés autrement.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La caractéristique du modèle de von Neumann à citer : <b>programme et données ' +
      'dans la même mémoire</b>.</li>' +
      '<li>RAM = volatile et rapide · stockage = persistant et lent. Ne pas les confondre.</li>' +
      '<li>Le découpage en paquets explique la <b>robustesse</b> d’Internet, pas sa vitesse.</li></ul>' }
  ]
},
{
  id: 'nsi-web', bloc: 'nsi-machine', titre: 'Le Web et l’interaction',
  resume: 'HTML, CSS, requêtes, client et serveur.',
  capacites: [
    'Distinguer le rôle du client et celui du serveur.',
    'Distinguer les requêtes GET et POST.',
    'Identifier les éléments de base d’une page HTML et le rôle du CSS.',
    'Analyser le fonctionnement d’un formulaire.',
    'Identifier les principaux risques liés à la navigation.'
  ],
  cours: [
    { k: 'def', t: 'Client et serveur', c:
      '<p>Le <b>client</b>, c’est ton navigateur : il envoie une requête. Le <b>serveur</b> la reçoit, ' +
      'la traite et renvoie une réponse. Le calcul peut se faire des deux côtés :</p>' +
      '<ul><li>côté <b>client</b> : JavaScript, exécuté dans le navigateur ;</li>' +
      '<li>côté <b>serveur</b> : le traitement est fait avant l’envoi de la page.</li></ul>' },
    { k: 'prop', t: 'GET et POST', c:
      '<ul><li><b>GET</b> : les paramètres sont visibles <b>dans l’URL</b>, après un point d’interrogation. ' +
      'La requête peut être mise en favori, partagée, mise en cache. À réserver aux consultations.</li>' +
      '<li><b>POST</b> : les paramètres sont dans le <b>corps</b> de la requête, donc pas visibles dans l’URL. ' +
      'À employer pour envoyer des données, notamment un mot de passe.</li></ul>' +
      '<p>Attention : POST n’est pas chiffré pour autant. C’est <b>HTTPS</b> qui chiffre, pas la méthode.</p>' },
    { k: 'def', t: 'HTML et CSS', c:
      '<p><b>HTML</b> décrit la <b>structure</b> et le contenu. <b>CSS</b> décrit la <b>présentation</b>.</p>' +
      code('&lt;h1&gt;Un titre&lt;/h1&gt;\n&lt;p&gt;Un paragraphe avec un &lt;a href="page.html"&gt;lien&lt;/a&gt;.&lt;/p&gt;\n' +
           '&lt;ul&gt;&lt;li&gt;un élément de liste&lt;/li&gt;&lt;/ul&gt;') },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Question de cours classique : <b>pourquoi POST plutôt que GET</b> pour un mot de passe ? ' +
      'Parce que GET l’écrirait dans l’URL, l’historique et les journaux du serveur.</li>' +
      '<li>Séparer le fond (HTML) de la forme (CSS) est le principe à citer.</li>' +
      '<li>Ne jamais faire confiance aux données envoyées par un client : elles peuvent être falsifiées.</li></ul>' }
  ]
},
{
  id: 'nsi-python', bloc: 'nsi-prog', titre: 'Langages et programmation',
  resume: 'Variables, fonctions, boucles, spécification, tests.',
  capacites: [
    'Écrire et utiliser une fonction avec des paramètres et une valeur de retour.',
    'Distinguer variable locale et variable globale.',
    'Utiliser les instructions conditionnelles et les boucles bornées et non bornées.',
    'Spécifier une fonction et écrire des tests pour la valider.',
    'Repérer et corriger une erreur de programmation.'
  ],
  cours: [
    { k: 'def', t: 'Une fonction bien écrite', c:
      code('def maximum(tab):\n' +
           '    """Renvoie le plus grand élément de tab.\n' +
           '    Précondition : tab est une liste non vide de nombres."""\n' +
           '    m = tab[0]\n' +
           '    for x in tab:\n' +
           '        if x > m:\n' +
           '            m = x\n' +
           '    return m',
           'La docstring est la spécification : ce que la fonction fait, et ce qu’elle exige de ses arguments.') },
    { k: 'prop', t: 'Les deux sortes de boucles', c:
      '<ul><li><b>Boucle bornée</b> (<code>for</code>) : on connaît à l’avance le nombre de tours.</li>' +
      '<li><b>Boucle non bornée</b> (<code>while</code>) : on répète tant qu’une condition est vraie. ' +
      'Il faut garantir que la condition finira par devenir fausse, sinon la boucle est infinie.</li></ul>' +
      code('for i in range(5):     # i vaut 0, 1, 2, 3, 4 : jamais 5\n    print(i)\n\n' +
           'n = 100\nwhile n > 1:          # on divise jusqu’à atteindre 1\n    n = n // 2') },
    { k: 'meth', t: 'Tester une fonction', c:
      '<p>Un programme n’est pas correct parce qu’il s’exécute : il faut le <b>tester</b>.</p>' +
      code('assert maximum([3, 7, 2]) == 7\nassert maximum([5]) == 5\nassert maximum([-4, -9]) == -4',
           'On teste le cas ordinaire, le cas limite, et les valeurs négatives.') },
    { k: 'piege', t: 'Les erreurs classiques', c:
      '<ul><li><code>range(5)</code> donne 0, 1, 2, 3, 4, <b>jamais 5</b>.</li>' +
      '<li>Confondre <code>=</code> (affectation) et <code>==</code> (comparaison).</li>' +
      '<li>Oublier le <code>return</code> : la fonction renvoie alors <code>None</code>.</li>' +
      '<li>Modifier une liste pendant qu’on la parcourt.</li>' +
      '<li>Une variable définie dans une fonction est <b>locale</b> : elle n’existe pas à l’extérieur.</li></ul>' }
  ]
},
{
  id: 'nsi-algo', bloc: 'nsi-prog', titre: 'Algorithmique',
  resume: 'Recherche, tri, coût, terminaison.',
  capacites: [
    'Écrire un algorithme de recherche séquentielle et de recherche dichotomique.',
    'Écrire un algorithme de tri par insertion ou par sélection.',
    'Comparer le coût de ces algorithmes.',
    'Justifier la terminaison d’un algorithme par un variant de boucle.',
    'Mettre en œuvre un algorithme glouton sur un exemple simple.'
  ],
  cours: [
    { k: 'prop', t: 'Chercher dans un tableau', c:
      '<p><b>Recherche séquentielle</b> : on parcourt du début à la fin. Coût <b>linéaire</b> : ' +
      'au pire n comparaisons.</p>' +
      '<p><b>Recherche dichotomique</b> : uniquement dans un tableau <b>trié</b>. On compare au milieu ' +
      'et on élimine la moitié à chaque étape. Coût <b>logarithmique</b> : environ log₂(n) comparaisons.</p>' +
      form('n = 1000 → environ 10 comparaisons &nbsp;·&nbsp; n = 1 000 000 → environ 20',
           'chaque doublement de la taille ne coûte qu’une comparaison de plus') },
    { k: 'def', t: 'Les tris du programme', c:
      '<p><b>Tri par sélection</b> : on cherche le minimum du reste et on le place. ' +
      '<b>Tri par insertion</b> : on insère chaque élément à sa place dans la partie déjà triée.</p>' +
      '<p>Les deux ont un coût <b>quadratique</b> : de l’ordre de n² opérations. ' +
      'Doubler la taille multiplie le temps par environ 4.</p>' +
      code('def tri_selection(t):\n' +
           '    for i in range(len(t)):\n' +
           '        mini = i\n' +
           '        for j in range(i + 1, len(t)):\n' +
           '            if t[j] < t[mini]:\n' +
           '                mini = j\n' +
           '        t[i], t[mini] = t[mini], t[i]\n' +
           '    return t') },
    { k: 'def', t: 'Terminaison et invariant', c:
      '<p>Un <b>variant de boucle</b> est une quantité entière positive qui <b>décroît strictement</b> ' +
      'à chaque tour. Puisqu’elle ne peut pas décroître indéfiniment en restant positive, la boucle termine.</p>' +
      '<p>Un <b>invariant</b> est une propriété vraie avant la boucle, conservée à chaque tour, ' +
      'et qui donne la correction du résultat à la sortie.</p>' },
    { k: 'prop', t: 'Les algorithmes gloutons', c:
      '<p>Un algorithme <b>glouton</b> fait, à chaque étape, le choix qui paraît le meilleur ' +
      'sur le moment, sans jamais revenir en arrière.</p>' +
      '<p>Exemple : rendre la monnaie en prenant toujours la plus grosse pièce possible. ' +
      'Avec le système européen, cela donne le nombre minimal de pièces. ' +
      'Avec d’autres systèmes, <b>non</b> : un glouton n’est pas toujours optimal, et c’est le point du cours.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La dichotomie exige un tableau <b>trié</b>. L’oublier invalide toute la réponse.</li>' +
      '<li>Comparer des coûts, c’est comparer des <b>ordres de grandeur</b> : linéaire, logarithmique, ' +
      'quadratique. Pas des durées en secondes.</li>' +
      '<li>Pour justifier la terminaison, exhiber le variant. Pour la correction, exhiber l’invariant.</li></ul>' }
  ]
},
{
  id: 'nsi-histoire', bloc: 'nsi-machine', titre: 'Histoire de l’informatique',
  resume: 'Les étapes et les figures à connaître.',
  capacites: [
    'Situer dans le temps les principales étapes de l’informatique.',
    'Associer une innovation à son contexte et à ses conséquences.',
    'Identifier les principales figures de l’histoire de la discipline.'
  ],
  cours: [
    { k: 'reperes', t: 'Les repères', c:
      '<ul class="dates">' +
      '<li><b>1642</b> <span>Pascal construit la Pascaline, machine à additionner</span></li>' +
      '<li><b>1801</b> <span>métier à tisser de Jacquard, programmé par cartes perforées</span></li>' +
      '<li><b>1843</b> <span>Ada Lovelace écrit ce que l’on considère comme le premier algorithme ' +
      'destiné à une machine</span></li>' +
      '<li><b>1936</b> <span>Alan Turing définit la machine de Turing et la notion de calculabilité</span></li>' +
      '<li><b>1945</b> <span>architecture de von Neumann : programme enregistré en mémoire</span></li>' +
      '<li><b>1947</b> <span>invention du transistor</span></li>' +
      '<li><b>1969</b> <span>Arpanet, ancêtre d’Internet</span></li>' +
      '<li><b>1971</b> <span>premier microprocesseur</span></li>' +
      '<li><b>1989-1991</b> <span>Tim Berners-Lee invente le Web au CERN</span></li>' +
      '<li><b>1991</b> <span>premier noyau Linux, par Linus Torvalds</span></li></ul>' },
    { k: 'piege', t: 'Ne pas confondre', c:
      '<p><b>Internet</b> est le réseau physique et ses protocoles, né à la fin des années 1960. ' +
      '<b>Le Web</b> est un service qui fonctionne sur ce réseau, inventé vingt ans plus tard.</p>' +
      '<p>Dire que Tim Berners-Lee a inventé Internet est une erreur fréquente et sanctionnée.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La loi de Moore n’est pas une loi physique : c’est un <b>constat empirique</b> ' +
      'sur le doublement du nombre de transistors, et elle ralentit aujourd’hui.</li>' +
      '<li>Relier chaque innovation à sa <b>conséquence</b> : le transistor rend les machines ' +
      'petites et fiables, le microprocesseur les rend personnelles.</li></ul>' }
  ]
}
];

CHAPITRES_NSI.forEach(c => {
  c.gens = [];
  c.matiere = 'nsi';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
