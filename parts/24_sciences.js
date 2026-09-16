/* =========================================================================
   MATIÈRE : enseignement scientifique, première générale.

   Programme : BO n°25 du 22 juin 2023 (et non la version de 2019).
   Inchangé pour 2026-2027 côté sciences.

   Nouveauté 2026-2027 : un module de mathématiques de 1 h 30 est intégré
   à l'enseignement scientifique (arrêté du 26 février 2026, NOR
   MENE2602916A, BO n°14 du 2 avril 2026), mais UNIQUEMENT pour les élèves
   qui ne suivent pas la spécialité mathématiques. Dans l'application, ce
   module est la matière « Maths (enseignement scientifique) ».

   Cinq parties : une longue histoire de la matière · le Soleil, notre
   source d'énergie · la Terre, un astre singulier · son, musique et
   audition · projet expérimental et numérique.
   ========================================================================= */

MAT['sciences'].pret = true;

BLOCS.push(
  { id: 'sci-matiere', nom: 'Une longue histoire de la matière', matiere: 'sciences' },
  { id: 'sci-soleil',  nom: 'Le Soleil, notre source d’énergie', matiere: 'sciences' },
  { id: 'sci-terre',   nom: 'La Terre, un astre singulier',      matiere: 'sciences' },
  { id: 'sci-son',     nom: 'Son, musique et audition',          matiere: 'sciences' },
  { id: 'sci-projet',  nom: 'Projet expérimental et numérique',  matiere: 'sciences' }
);

/* notation d'un noyau : A en haut, Z en bas, devant le symbole */
function nuc(a, z, s){
  return '<span class="nuc"><span class="az"><i>' + a + '</i><i>' + z + '</i></span>' + s + '</span>';
}
/* encadré de formule */
function form(f, leg){
  return '<div class="form">' + f + (leg ? '<span class="form-leg">' + leg + '</span>' : '') + '</div>';
}

const CHAPITRES_SCI = [

/* ================= 1. UNE LONGUE HISTOIRE DE LA MATIÈRE ================= */
{
  id: 'sci-elements', bloc: 'sci-matiere',
  titre: 'Les éléments chimiques',
  resume: '1.1 Du seul hydrogène à la centaine d’éléments.',
  capacites: [
    'Produire et analyser des représentations graphiques de l’abondance des éléments chimiques dans l’Univers, la Terre et les êtres vivants.',
    'L’équation d’une réaction nucléaire stellaire étant fournie, reconnaître s’il s’agit d’une fusion ou d’une fission.',
    'Calculer le nombre de noyaux restants au bout de n demi-vies.',
    'Utiliser une représentation graphique pour déterminer une demi-vie.',
    'Utiliser une décroissance radioactive pour une datation.',
    'Expliquer l’utilisation de noyaux radioactifs dans un contexte médical et citer des précautions.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Toute la matière vient de l’hydrogène. Ce chapitre explique comment on passe d’un seul élément à la centaine ' +
      'd’éléments stables qui composent les étoiles, la Terre et ton corps.</p>' +
      '<p class="tiny">À savoir : depuis 2026, un module de mathématiques de 1 h 30 s’ajoute à l’enseignement scientifique, ' +
      'mais seulement pour les élèves <b>sans</b> spécialité mathématiques. Il figure dans l’application comme une matière à part.</p>' },
    { k: 'prop', t: 'D’où viennent les éléments', c:
      '<ul><li>Les noyaux des éléments stables se forment par <b>réactions nucléaires dans les étoiles</b>, ' +
      'à partir de l’hydrogène initial.</li>' +
      '<li>L’Univers connu est fait surtout d’<b>hydrogène et d’hélium</b>.</li>' +
      '<li>La <b>Terre</b> est surtout constituée d’oxygène, d’hydrogène, de fer, de silicium et de magnésium.</li>' +
      '<li>Les <b>êtres vivants</b> sont surtout faits de carbone, d’hydrogène, d’oxygène et d’azote.</li></ul>' +
      '<p>Trois compositions très différentes : c’est exactement ce que demande le programme de savoir comparer.</p>' },
    { k: 'def', t: 'Fusion ou fission ?', c:
      '<p><b>Fusion</b> : des noyaux légers s’assemblent en un noyau plus lourd. C’est ce qui se passe dans les étoiles.</p>' +
      form(nuc(2, 1, 'H') + ' + ' + nuc(3, 1, 'H') + ' → ' + nuc(4, 2, 'He') + ' + ' + nuc(1, 0, 'n'),
           'deux petits noyaux donnent un plus gros') +
      '<p><b>Fission</b> : un noyau lourd se casse en noyaux plus légers. C’est ce qui se passe dans une centrale nucléaire.</p>' +
      form(nuc(235, 92, 'U') + ' + ' + nuc(1, 0, 'n') + ' → ' + nuc(94, 38, 'Sr') + ' + ' + nuc(140, 54, 'Xe') + ' + 2 ' + nuc(1, 0, 'n'),
           'un gros noyau se casse en plusieurs') +
      '<p>Dans les deux cas, <b>A et Z se conservent</b> : la somme des nombres du haut est la même des deux côtés, ' +
      'et celle des nombres du bas aussi.</p>' },
    { k: 'def', t: 'La radioactivité et la demi-vie', c:
      '<p>Certains noyaux sont <b>instables</b> et se désintègrent. L’instant où un noyau donné se désintègre est ' +
      '<b>aléatoire</b> : on ne peut rien prévoir pour un noyau seul, seulement pour une grande population.</p>' +
      '<p>La <b>demi-vie</b> est la durée au bout de laquelle la moitié des noyaux présents se sont désintégrés. ' +
      'Elle est caractéristique du noyau.</p>' +
      form('N = N<sub>0</sub> × (1/2)<sup>n</sup>', 'nombre de noyaux restants après n demi-vies') +
      '<p>Après 1 demi-vie il reste la moitié · après 2, le quart · après 3, le huitième. ' +
      'C’est une <b>suite géométrique</b> de raison 1/2, donc une décroissance exponentielle.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Pour dater : chercher combien de fois il faut diviser par 2 pour tomber sur la fraction restante. ' +
      'Il reste 1/8 ? Alors 3 demi-vies se sont écoulées.</li>' +
      '<li>Une demi-vie ne dépend ni de la température, ni de la pression, ni de la quantité : ' +
      'c’est une propriété du noyau seul.</li>' +
      '<li>En médecine, on utilise des noyaux à <b>demi-vie courte</b> pour l’imagerie, afin que l’activité disparaisse vite. ' +
      'Précautions : blindage, distance, durée d’exposition limitée.</li></ul>' }
  ]
},
{
  id: 'sci-cristaux', bloc: 'sci-matiere',
  titre: 'Des édifices ordonnés : les cristaux',
  resume: '1.2 De la maille au minéral et à la roche.',
  capacites: [
    'Utiliser une représentation en trois dimensions du cristal de chlorure de sodium.',
    'Relier l’organisation de la maille au niveau microscopique à la structure du cristal au niveau macroscopique.',
    'Distinguer, en matière d’échelle et d’organisation spatiale, atome ou molécule, maille, cristal, minéral, roche.',
    'Identifier des structures cristallines sur un échantillon, sur une image, et chez les êtres vivants.',
    'Mettre en relation la structure amorphe ou cristalline d’une roche et les conditions de son refroidissement.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Le sel, le quartz, un os, un calcul rénal : ce sont tous des empilements réguliers. Ce chapitre montre comment ' +
      'une organisation <b>microscopique</b> explique des propriétés <b>macroscopiques</b>, à commencer par la masse volumique.</p>' },
    { k: 'def', t: 'Les mots, du plus petit au plus grand', c:
      '<ul><li><b>Atome ou ion</b> : l’entité de base, de l’ordre de 10<sup>-10</sup> m.</li>' +
      '<li><b>Maille</b> : le plus petit motif qui, répété, reconstruit tout le cristal.</li>' +
      '<li><b>Cristal</b> : l’empilement régulier de ces mailles.</li>' +
      '<li><b>Minéral</b> : une espèce définie par sa composition chimique <b>et</b> son organisation cristalline.</li>' +
      '<li><b>Roche</b> : l’association de cristaux d’un même minéral ou de plusieurs minéraux.</li></ul>' +
      '<p>Un même composé peut cristalliser sous <b>plusieurs structures</b> : même formule chimique, minéraux différents.</p>' },
    { k: 'prop', t: 'De la maille à la masse volumique', c:
      '<p>Connaître la maille, c’est pouvoir calculer la masse volumique du cristal :</p>' +
      form('ρ = m<sub>maille</sub> / V<sub>maille</sub>', 'masse des entités de la maille divisée par son volume') +
      '<p>Pour une maille cubique d’arête <i>a</i>, le volume vaut <i>a</i><sup>3</sup>. ' +
      'C’est le lien que le programme demande d’établir entre le microscopique et le macroscopique.</p>' },
    { k: 'prop', t: 'Cristallin ou amorphe', c:
      '<p>Dans un solide <b>amorphe</b>, l’empilement se fait <b>sans ordre géométrique</b>. Le verre en est l’exemple type.</p>' +
      '<p>La différence vient de la <b>vitesse de refroidissement</b> :</p>' +
      '<ul><li>refroidissement <b>lent</b> → les atomes ont le temps de s’organiser → structure <b>cristalline</b>, ' +
      'gros cristaux visibles ;</li>' +
      '<li>refroidissement <b>très rapide</b> → ils sont figés en désordre → structure <b>amorphe</b>, du verre. ' +
      'Certaines roches volcaniques en contiennent.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Devant une roche volcanique, la question est toujours la même : <b>a-t-elle refroidi vite ou lentement ?</b> ' +
      'La taille des cristaux répond.</li>' +
      '<li>Des cristaux existent aussi chez les vivants : coquilles, squelettes, calculs rénaux. Le programme le demande explicitement.</li>' +
      '<li>Attention à l’échelle : une maille mesure quelques dixièmes de nanomètre, une roche des centimètres. ' +
      'Huit ordres de grandeur les séparent.</li></ul>' }
  ]
},
{
  id: 'sci-cellule', bloc: 'sci-matiere',
  titre: 'Une structure complexe : la cellule vivante',
  resume: '1.3 L’unité fondamentale du vivant.',
  capacites: [
    'Analyser et interpréter des documents historiques relatifs à la théorie cellulaire.',
    'Situer les ordres de grandeur : atome, molécule, organite, cellule, organisme.',
    'Relier l’échelle de la cellule, de ses organites et des molécules qui la constituent.',
    'Mettre en évidence des échanges au travers de la membrane plasmique.',
    'Discuter du statut des virus : vivants ou non vivants.',
    'Relier la présence de molécules exogènes au bon fonctionnement cellulaire ou à des dysfonctionnements.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Après l’atome et le cristal, la cellule est le degré suivant d’organisation de la matière. ' +
      'C’est aussi la frontière entre le <b>vivant</b> et le <b>non-vivant</b>, et cette frontière est moins nette qu’on croit : ' +
      'le cas des virus est au programme.</p>' },
    { k: 'prop', t: 'La théorie cellulaire, une histoire d’instruments', c:
      '<ul><li>L’unité cellulaire est découverte grâce à l’invention du <b>microscope optique</b>.</li>' +
      '<li>L’observation de structures semblables chez de très nombreux organismes conduit à énoncer le concept général ' +
      'de cellule, puis la <b>théorie cellulaire</b>.</li>' +
      '<li>Le <b>microscope électronique</b>, bien plus récent, permet d’explorer l’intérieur de la cellule et de relier ' +
      'l’échelle moléculaire à l’échelle cellulaire.</li></ul>' +
      '<p>Le savoir scientifique progresse ici au rythme des instruments : c’est l’un des messages du programme.</p>' },
    { k: 'def', t: 'Les ordres de grandeur à connaître', c:
      '<ul class="dates">' +
      '<li><b>10<sup>-10</sup> m</b> <span>un atome</span></li>' +
      '<li><b>10<sup>-9</sup> m</b> <span>une molécule, un nanomètre</span></li>' +
      '<li><b>10<sup>-7</sup> à 10<sup>-6</sup> m</b> <span>un organite, un virus</span></li>' +
      '<li><b>10<sup>-5</sup> m</b> <span>une cellule, quelques dizaines de micromètres</span></li>' +
      '<li><b>1 m</b> <span>un organisme</span></li></ul>' +
      '<p>Du nanomètre à l’atome, du micromètre à la cellule : ce sont ces repères que les exercices vérifient.</p>' },
    { k: 'prop', t: 'La cellule, un milieu séparé mais ouvert', c:
      '<p>La cellule est un <b>milieu réactionnel aqueux</b>, séparé de l’extérieur par la <b>membrane plasmique</b>.</p>' +
      '<p>Son fonctionnement exige un <b>apport d’énergie</b> : elle est donc en interaction permanente avec son environnement, ' +
      'avec lequel elle réalise de nombreux échanges à travers cette membrane.</p>' +
      '<p>Des molécules venues de l’extérieur peuvent être nécessaires au bon fonctionnement, ou au contraire le perturber : ' +
      'alcool, solvants, métaux lourds, composés de la cigarette.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Le <b>statut des virus</b> est une question de cours, pas d’opinion : un virus n’a ni cellule, ni métabolisme, ' +
      'ni reproduction autonome. Il a en revanche un matériel génétique et il évolue. La réponse attendue est une discussion, ' +
      'pas un oui ou un non.</li>' +
      '<li>« Séparé mais ouvert » résume la membrane en trois mots. La formule vaut mieux qu’un long paragraphe.</li></ul>' }
  ]
},

/* ================= 2. LE SOLEIL ================= */
{
  id: 'sci-rayonnement', bloc: 'sci-soleil',
  titre: 'Le rayonnement solaire',
  resume: '2.1 Corps noir, loi de Wien, loi de Stefan.',
  capacites: [
    'À partir du spectre d’émission du corps noir, déterminer la longueur d’onde d’émission maximale.',
    'Appliquer la loi de Wien pour déterminer la température de surface d’un objet assimilé à un corps noir.',
    'Sur un schéma, identifier les configurations pour lesquelles la puissance reçue par une surface est maximale ou minimale.',
    'Analyser, représenter graphiquement des données de températures et calculer des moyennes temporelles.',
    'Étudier des effets liés à l’exposition des êtres humains au rayonnement solaire.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Deux lois, deux calculs, et on connaît la température de surface d’une étoile qu’on ne touchera jamais. ' +
      'C’est le chapitre le plus calculatoire de l’année, et le plus rentable en devoir.</p>' },
    { k: 'def', t: 'La loi de Wien', c:
      '<p>Le spectre du rayonnement émis par la surface d’une étoile ne dépend que de sa <b>température</b>. ' +
      'La longueur d’onde du maximum d’émission est <b>inversement proportionnelle</b> à la température :</p>' +
      form('λ<sub>max</sub> × T = 2,90 × 10<sup>-3</sup> m·K', 'λ en mètres, T en kelvins') +
      '<p>Plus un corps est chaud, plus il émet vers le <b>bleu</b> ; plus il est froid, plus il émet vers le <b>rouge</b>. ' +
      'C’est pour cela que les étoiles bleues sont les plus chaudes.</p>' },
    { k: 'def', t: 'La loi de Stefan', c:
      '<p>La puissance émise par unité de surface est proportionnelle à la puissance <b>quatrième</b> de la température :</p>' +
      form('P / S = σ × T<sup>4</sup>&nbsp;&nbsp;avec σ = 5,67 × 10<sup>-8</sup> W·m<sup>-2</sup>·K<sup>-4</sup>',
           'doubler la température multiplie la puissance par 16') +
      '<p>C’est la loi qui explique pourquoi une petite différence de température change énormément l’énergie rayonnée.</p>' },
    { k: 'prop', t: 'Pourquoi il fait plus chaud à midi qu’au lever du soleil', c:
      '<p>La puissance reçue par une surface plane est proportionnelle à son aire, et dépend de l’<b>angle</b> ' +
      'entre la direction du Soleil et la normale à la surface.</p>' +
      '<ul><li>Rayons <b>perpendiculaires</b> à la surface → puissance reçue <b>maximale</b>.</li>' +
      '<li>Rayons <b>rasants</b> → la même énergie s’étale sur une plus grande surface → puissance par mètre carré <b>minimale</b>.</li></ul>' +
      '<p>Ce seul mécanisme explique trois choses : la variation <b>journalière</b> (l’heure), la variation <b>saisonnière</b> ' +
      '(le moment de l’année) et la <b>zonation climatique</b> (la latitude).</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Toujours convertir en <b>kelvins</b> : T(K) = θ(°C) + 273. Une loi de Wien appliquée en degrés Celsius est fausse.</li>' +
      '<li>Et en <b>mètres</b> pour la longueur d’onde : 500 nm = 500 × 10<sup>-9</sup> m.</li>' +
      '<li>Ordre de grandeur à retenir : le Soleil a une température de surface d’environ <b>5 800 K</b>, ' +
      'et son maximum d’émission tombe dans le <b>visible</b>, vers 500 nm. Ce n’est pas un hasard : notre œil s’y est adapté.</li></ul>' }
  ]
},
{
  id: 'sci-bilan', bloc: 'sci-soleil',
  titre: 'Le bilan radiatif terrestre',
  resume: '2.2 Albédo, effet de serre, équilibre dynamique.',
  capacites: [
    'Calculer la proportion de la puissance émise par le Soleil qui atteint la Terre.',
    'L’albédo terrestre étant donné, déterminer la puissance totale reçue par la surface terrestre.',
    'Commenter la courbe d’absorption de l’atmosphère terrestre en fonction de la longueur d’onde.',
    'Représenter sur un schéma les rayonnements reçus et émis par le sol.',
    'Expliquer qualitativement l’influence de l’albédo et de l’effet de serre sur la température terrestre moyenne.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>C’est le chapitre qui fonde tout le programme de terminale sur le climat. Comprendre l’équilibre <b>maintenant</b>, ' +
      'c’est pouvoir comprendre sa perturbation l’an prochain.</p>' },
    { k: 'def', t: 'L’albédo', c:
      '<p>L’<b>albédo</b> est la fraction de la puissance reçue qui est <b>diffusée vers l’espace</b> sans être absorbée. ' +
      'L’albédo terrestre moyen vaut environ <b>0,30</b>.</p>' +
      form('P<sub>absorbée</sub> = (1 - a) × P<sub>reçue</sub>', 'ce qui n’est pas renvoyé est absorbé') +
      '<p>La neige et la glace ont un albédo élevé, proche de 0,8 : elles renvoient presque tout. ' +
      'L’océan a un albédo faible, proche de 0,1 : il absorbe presque tout. D’où l’enjeu de la fonte des glaces.</p>' },
    { k: 'prop', t: 'L’effet de serre', c:
      '<p>La surface terrestre émet un rayonnement <b>infrarouge</b>, dont la puissance par unité de surface augmente ' +
      'avec la température.</p>' +
      '<p>Une partie de ce rayonnement est <b>absorbée par l’atmosphère</b>, qui émet à son tour de l’infrarouge, ' +
      'vers l’espace <b>et vers le sol</b>. C’est l’effet de serre.</p>' +
      '<p>Le point clé, explicitement au programme : la puissance reçue par le sol est la <b>somme</b> de celle reçue du Soleil ' +
      'et de celle reçue de l’atmosphère, et ces deux-là sont du <b>même ordre de grandeur</b>.</p>' },
    { k: 'def', t: 'L’équilibre dynamique', c:
      '<p>L’équilibre est atteint quand la surface terrestre <b>reçoit</b> en moyenne autant de puissance qu’elle en <b>émet</b>. ' +
      'La température moyenne est alors constante.</p>' +
      '<p>On le dit <b>dynamique</b> parce que rien ne s’arrête : les échanges continuent, ce sont les deux totaux qui s’égalisent.</p>' +
      '<ul><li>Albédo qui augmente → moins d’énergie absorbée → la température baisse.</li>' +
      '<li>Effet de serre qui augmente → plus d’infrarouge renvoyé vers le sol → la température monte.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La Terre intercepte le rayonnement solaire sur un <b>disque</b> de surface πR², mais elle rayonne ' +
      'depuis toute sa <b>sphère</b>, de surface 4πR². Ce facteur 4 est l’erreur classique du chapitre.</li>' +
      '<li>L’effet de serre n’est pas une anomalie : sans lui, la température moyenne serait d’environ -18 °C au lieu de 15 °C. ' +
      'C’est son <b>renforcement</b> qui pose problème.</li>' +
      '<li>Sur un schéma, toujours distinguer les flèches <b>visibles</b> venant du Soleil des flèches <b>infrarouges</b> ' +
      'émises par le sol et l’atmosphère.</li></ul>' }
  ]
},
{
  id: 'sci-photosynthese', bloc: 'sci-soleil',
  titre: 'Photosynthèse et énergie des êtres vivants',
  resume: '2.3 De l’énergie solaire à l’assiette.',
  capacites: [
    'Recenser, extraire et organiser des informations pour prendre conscience de l’importance planétaire de la photosynthèse.',
    'Utiliser des données quantitatives sur l’apport énergétique d’aliments dans un bilan d’énergie correspondant à des activités variées.',
    'Mettre en évidence des aspects qualitatifs de l’équilibre alimentaire.',
    'Relier des déséquilibres alimentaires à la prévalence de la dénutrition, des maladies cardiovasculaires, des diabètes ou de l’obésité.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Une infime partie de l’énergie solaire reçue par la Terre est captée par les organismes chlorophylliens. ' +
      'Cette fraction minuscule nourrit <b>presque toute la vie</b> de la planète, et alimente ton propre corps.</p>' },
    { k: 'prop', t: 'La photosynthèse', c:
      '<p>Les organismes chlorophylliens utilisent l’énergie solaire pour synthétiser de la <b>matière organique</b> ' +
      'à partir de <b>matière minérale</b> : eau, ions, dioxyde de carbone.</p>' +
      form('matière minérale + énergie lumineuse → matière organique + dioxygène',
           'la photosynthèse permet la nutrition de presque toutes les formes de vie') +
      '<p>Ces molécules organiques peuvent ensuite être transformées pour <b>libérer l’énergie</b> nécessaire ' +
      'au fonctionnement des êtres vivants. L’alimentation apporte ces molécules.</p>' },
    { k: 'meth', t: 'Faire un bilan énergétique', c:
      '<p>Le principe est une simple comparaison entre ce qui entre et ce qui sort :</p>' +
      form('bilan = énergie apportée par les aliments - énergie dépensée',
           'en kilojoules (kJ) ou en kilocalories (kcal)') +
      '<ul><li>Bilan <b>positif</b> durable → stockage, prise de masse.</li>' +
      '<li>Bilan <b>négatif</b> durable → puisage dans les réserves, perte de masse.</li></ul>' +
      '<p>Conversion utile : <b>1 kcal ≈ 4,18 kJ</b>.</p>' },
    { k: 'prop', t: 'L’équilibre alimentaire', c:
      '<p>L’équilibre n’est pas seulement quantitatif. Il est aussi <b>qualitatif</b> : il faut des glucides, des lipides, ' +
      'des protéines, des vitamines, des minéraux, dans de bonnes proportions.</p>' +
      '<p>Le programme demande de relier les déséquilibres à des problèmes de santé à l’échelle mondiale : ' +
      '<b>dénutrition</b>, <b>maladies cardiovasculaires</b>, <b>diabètes</b>, <b>obésité</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais écrire que la photosynthèse « fabrique de l’énergie » : elle <b>convertit</b> l’énergie lumineuse ' +
      'en énergie chimique. L’énergie ne se crée pas.</li>' +
      '<li>Un bilan énergétique se fait toujours dans la <b>même unité</b> : convertir avant de soustraire.</li>' +
      '<li>Le déclin du <b>phytoplancton</b> est l’exemple attendu pour discuter de l’importance planétaire de la photosynthèse.</li></ul>' }
  ]
},
{
  id: 'sci-energies', bloc: 'sci-soleil',
  titre: 'Les sources d’énergie',
  resume: '2.4 Renouvelable ou non, et pourquoi.',
  capacites: [
    'Citer quelques sources d’énergie renouvelables et non renouvelables.',
    'Étudier des atouts et des limites liés à l’utilisation de ces sources.',
    'À partir de l’étude d’un combustible fossile ou d’une roche, débattre de l’origine biologique ou non des matériaux analysés.',
    'Comparer différents pouvoirs calorifiques par unité de masse suivant la nature de la biomasse.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Presque toute l’énergie que nous utilisons vient du Soleil, directement ou indirectement, ' +
      'y compris le pétrole. Ce chapitre donne les mots justes pour en débattre sans dire de bêtises.</p>' },
    { k: 'def', t: 'Renouvelable ou non : le vrai critère', c:
      '<p>Le critère du programme n’est pas « propre » ou « sale », c’est une <b>comparaison de durées</b> :</p>' +
      form('durée de formation de la source &nbsp;contre&nbsp; durée prévisible d’épuisement',
           'formation lente et épuisement rapide = non renouvelable') +
      '<ul><li><b>Non renouvelables</b> : les combustibles fossiles, formés il y a plusieurs dizaines à plusieurs centaines ' +
      'de millions d’années, et consommés en quelques siècles.</li>' +
      '<li><b>Renouvelables</b> : la biomasse, le vent, le rayonnement solaire, l’eau, qui se reconstituent ' +
      'à l’échelle de temps humaine.</li></ul>' },
    { k: 'prop', t: 'L’origine solaire, directe ou indirecte', c:
      '<ul><li><b>Directement solaire</b> : le photovoltaïque, le solaire thermique.</li>' +
      '<li><b>Indirectement solaire</b> : le vent (dû aux différences de température), l’hydraulique (le cycle de l’eau), ' +
      'la biomasse (la photosynthèse), et même les <b>combustibles fossiles</b>, formés à partir de matière organique ' +
      'produite par photosynthèse.</li>' +
      '<li><b>Non solaire</b> : la géothermie (chaleur interne de la Terre), les marées (attraction de la Lune), ' +
      'le nucléaire (noyaux lourds).</li></ul>' +
      '<p>Cette distinction est très souvent demandée telle quelle en devoir.</p>' },
    { k: 'def', t: 'Le pouvoir calorifique', c:
      '<p>C’est l’énergie libérée par la combustion d’un kilogramme de combustible, en mégajoules par kilogramme.</p>' +
      form('E = m × PC', 'énergie libérée = masse × pouvoir calorifique') +
      '<p>La biomasse fournit de l’énergie principalement par <b>combustion</b> ou par <b>fermentation</b>.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>« Énergie propre » est un terme du langage courant, pas un terme scientifique. ' +
      'Le programme demande explicitement d’en faire l’<b>analyse critique</b>.</li>' +
      '<li>Le pétrole est d’origine solaire : c’est contre-intuitif, et c’est exactement pour cela que c’est demandé.</li>' +
      '<li>Une source renouvelable n’est pas sans impact : emprise au sol, matériaux, intermittence. ' +
      'Le programme demande « atouts <b>et</b> limites ».</li></ul>' }
  ]
},

/* ================= 3. LA TERRE ================= */
{
  id: 'sci-forme', bloc: 'sci-terre',
  titre: 'La forme de la Terre',
  resume: '3.1 Ératosthène, triangulation, coordonnées.',
  capacites: [
    'Donner des preuves de la rotondité de la Terre, de l’Antiquité à nos jours.',
    'Calculer la longueur du méridien terrestre par la méthode d’Ératosthène.',
    'Expliquer la méthode de triangulation utilisée par Delambre et Méchain.',
    'Calculer le rayon de la Terre à partir de la longueur du méridien.',
    'Calculer la distance à l’horizon à partir du rayon de la Terre.',
    'Comparer les longueurs de différents chemins reliant deux points à la surface de la Terre.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Vers 200 avant notre ère, avec un bâton et une mesure de distance, Ératosthène a trouvé la taille de la Terre ' +
      'à quelques pour cent près. C’est la plus belle démonstration du programme, et elle se calcule en trois lignes.</p>' },
    { k: 'meth', t: 'La méthode d’Ératosthène', c:
      '<p>Deux villes sur le <b>même méridien</b>, séparées par une distance <i>d</i>. Le même jour à midi, le Soleil est ' +
      'à la verticale dans l’une, et fait un angle α avec la verticale dans l’autre.</p>' +
      '<p>L’angle α est alors aussi l’angle au centre entre les deux villes. Un simple rapport de proportionnalité donne :</p>' +
      form('L / 360° = d / α&nbsp;&nbsp;donc&nbsp;&nbsp;L = d × 360 / α', 'L = longueur du méridien, α en degrés') +
      '<p>Ératosthène avait trouvé α ≈ 7,2° entre Syène et Alexandrie, distantes d’environ 800 km. ' +
      'Cela donne 800 × 360 / 7,2 = <b>40 000 km</b>. La valeur réelle est d’environ 40 008 km.</p>' },
    { k: 'prop', t: 'Du méridien au rayon, et à l’horizon', c:
      '<p>Le méridien est un grand cercle, donc :</p>' +
      form('R = L / (2π)', 'environ 6 371 km pour la Terre') +
      '<p>La distance à l’horizon, pour un observateur à la hauteur <i>h</i>, se trouve par le <b>théorème de Pythagore</b> ' +
      'dans le triangle rectangle formé par le centre de la Terre, l’observateur et le point d’horizon :</p>' +
      form('d = √((R + h)² - R²) ≈ √(2 R h)', 'valable tant que h est très petit devant R') },
    { k: 'def', t: 'Se repérer sur la sphère', c:
      '<p>Un point de la surface se repère par deux <b>coordonnées angulaires</b>, la <b>latitude</b> et la <b>longitude</b>, ' +
      'et par son <b>altitude</b> par rapport à un niveau de référence.</p>' +
      '<p>Le plus court chemin entre deux points de la sphère est l’<b>arc du grand cercle</b> qui les relie. ' +
      'C’est pour cela que les avions semblent faire des détours sur une carte plate : ils ne font pas de détour du tout.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Dans Ératosthène, le piège est de croire qu’il faut une mesure compliquée. Il n’y a qu’une <b>proportionnalité</b> : ' +
      'l’angle est à 360° ce que la distance est au méridien complet.</li>' +
      '<li>Les preuves de rotondité à citer : l’ombre circulaire de la Terre sur la Lune lors d’une éclipse, ' +
      'la disparition progressive d’un navire par le bas à l’horizon, la variation de la hauteur des étoiles selon la latitude, ' +
      'et aujourd’hui les photographies satellitaires.</li>' +
      '<li>La <b>triangulation</b> de Delambre et Méchain mesure de proche en proche, par une chaîne de triangles dont on ne mesure ' +
      'que des angles et une seule longueur de base. C’est ainsi qu’a été défini le mètre.</li></ul>' }
  ]
},
{
  id: 'sci-age', bloc: 'sci-terre',
  titre: 'L’histoire de l’âge de la Terre',
  resume: '3.2 Une controverse résolue par la radioactivité.',
  capacites: [
    'Interpréter des documents présentant les arguments historiques utilisés pour comprendre l’âge de la Terre.',
    'Identifier diverses théories impliquées dans la controverse scientifique de l’âge de la Terre.',
    'Situer l’ordre de grandeur de l’âge de la Terre.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Ce chapitre ne sert pas à retenir un nombre, mais à comprendre <b>comment une controverse scientifique se tranche</b>. ' +
      'Pendant deux siècles, des savants sérieux ont donné des réponses fausses avec des méthodes honnêtes.</p>' },
    { k: 'prop', t: 'Quatre familles d’arguments', c:
      '<ul><li><b>Le temps de refroidissement</b> : Buffon chauffe des boulets et mesure leur refroidissement ; ' +
      'Kelvin calcule à partir de la chaleur interne. Tous deux trouvent bien trop peu, car ils ignoraient la radioactivité, ' +
      'source de chaleur interne.</li>' +
      '<li><b>Les empilements sédimentaires</b> : estimer la durée de dépôt des couches.</li>' +
      '<li><b>L’évolution biologique</b> : Darwin juge qu’il faut énormément de temps pour produire la diversité observée.</li>' +
      '<li><b>La radioactivité</b> : à partir de Rutherford, la datation des minéraux tranche définitivement la question.</li></ul>' },
    { k: 'def', t: 'La valeur actuelle', c:
      '<p>Grâce aux noyaux radioactifs contenus dans les minéraux des roches, l’âge de la Terre est aujourd’hui ' +
      'déterminé précisément :</p>' +
      form('4,57 × 10<sup>9</sup> ans', 'soit environ 4,57 milliards d’années') +
      '<p>La datation des <b>météorites</b>, formées en même temps que le système solaire et non remaniées depuis, ' +
      'permet de préciser cette valeur.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Expliquer <b>pourquoi Kelvin s’est trompé</b> vaut plus de points que de citer sa valeur : ' +
      'il ignorait une source de chaleur, la radioactivité, découverte après lui.</li>' +
      '<li>Le message du chapitre : une théorie peut être « discutée, amendée et même réfutée ». ' +
      'C’est ce qui distingue un savoir scientifique d’une croyance.</li>' +
      '<li>Retenir l’ordre de grandeur : <b>4,5 milliards d’années</b>, soit 10<sup>9</sup>, ' +
      'à comparer à 10<sup>2</sup> pour une vie humaine.</li></ul>' }
  ]
},
{
  id: 'sci-univers', bloc: 'sci-terre',
  titre: 'La Terre dans l’Univers',
  resume: '3.3 Héliocentrisme, la Lune, l’eau liquide.',
  capacites: [
    'Interpréter des documents présentant des arguments historiques pour discuter la théorie héliocentrique.',
    'Interpréter l’aspect de la Lune dans le ciel en fonction de sa position par rapport à la Terre et au Soleil.',
    'Étudier des données actuelles sur les exoplanètes en lien avec la zone d’habitabilité.',
    'Décrire la répartition de l’eau douce dans le monde.',
    'Estimer le volume d’une réserve d’eau douce à partir de données fournies.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>La Terre est singulière parce qu’elle a de l’<b>eau liquide</b> en surface. Ce chapitre explique pourquoi, ' +
      'et raconte la controverse qui a déplacé la Terre du centre du monde.</p>' },
    { k: 'prop', t: 'Du géocentrisme à l’héliocentrisme', c:
      '<p>Observée dans un référentiel fixe par rapport aux étoiles, la Terre parcourt une trajectoire <b>quasi circulaire</b> ' +
      'autour du Soleil.</p>' +
      '<p>Le passage d’une conception <b>géocentrique</b> (la Terre au centre) à une conception <b>héliocentrique</b> ' +
      '(le Soleil au centre) est l’une des controverses majeures de l’histoire des sciences. ' +
      'Les noms au programme : Ptolémée, Copernic, Tycho Brahe, Kepler, Galilée, Newton.</p>' },
    { k: 'prop', t: 'La Lune', c:
      '<p>Dans le référentiel géocentrique, la Lune décrit une trajectoire quasi circulaire autour de la Terre. ' +
      'Son aspect varie au cours de ce mouvement : ce sont les <b>phases</b>.</p>' +
      '<p>La Lune tourne aussi sur elle-même, dans le même temps qu’elle fait le tour de la Terre : ' +
      'elle nous présente donc <b>toujours la même face</b>.</p>' +
      '<p>Point essentiel : les phases ne sont <b>pas</b> l’ombre de la Terre. Elles viennent de la portion de la moitié éclairée ' +
      'de la Lune que nous voyons depuis la Terre.</p>' },
    { k: 'prop', t: 'L’eau liquide et sa répartition', c:
      '<p>Trois conditions permettent à la Terre de conserver de l’eau liquide en surface : la <b>puissance lumineuse</b> ' +
      'émise par le Soleil, la <b>distance</b> au Soleil, et la <b>gravité</b> de la Terre, qui retient son atmosphère.</p>' +
      '<p>L’eau est très inégalement répartie, dans l’espace comme dans le temps. Les ordres de grandeur à retenir :</p>' +
      '<ul class="dates">' +
      '<li><b>≈ 97 %</b> <span>de l’eau de la planète est salée</span></li>' +
      '<li><b>≈ 3 %</b> <span>est douce, dont l’essentiel en glaciers et en eaux souterraines</span></li>' +
      '<li><b>&lt; 1 %</b> <span>de l’eau douce est directement accessible et potable</span></li></ul>' +
      '<p>La gestion et la protection des ressources hydriques sont un enjeu majeur pour l’humanité.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>La <b>zone d’habitabilité</b> est l’intervalle de distances à une étoile où l’eau liquide peut exister ' +
      'en surface. C’est le critère utilisé pour trier les exoplanètes.</li>' +
      '<li>Distinguer soigneusement <b>phase</b> de la Lune et <b>éclipse</b> : la première est permanente et cyclique, ' +
      'la seconde est rare et due à un alignement.</li>' +
      '<li>Sur l’influence de la Lune, le programme demande explicitement de <b>distinguer les arguments scientifiques ' +
      'des croyances</b>.</li></ul>' }
  ]
},

/* ================= 4. SON, MUSIQUE ET AUDITION ================= */
{
  id: 'sci-son', bloc: 'sci-son',
  titre: 'Son et musique',
  resume: '4.1 Fondamentale, harmoniques, octave, décibels.',
  capacites: [
    'Utiliser un logiciel permettant de visualiser le spectre d’un son.',
    'Utiliser l’échelle logarithmique de niveau d’intensité sonore pour relier l’intensité au niveau d’intensité sonore.',
    'Relier qualitativement la fréquence fondamentale du signal émis aux caractéristiques d’une corde vibrante.',
    'Identifier deux notes à l’octave à l’aide de leur spectre.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Pourquoi deux notes séparées d’une octave portent-elles le même nom ? Pourquoi une corde plus courte sonne-t-elle ' +
      'plus aigu ? Ce chapitre répond par des rapports de nombres, et c’est ce qui le rend calculable.</p>' },
    { k: 'def', t: 'Son pur, son composé, harmoniques', c:
      '<ul><li>Un <b>son pur</b> correspond à un signal <b>sinusoïdal</b> : une seule fréquence.</li>' +
      '<li>Un <b>son composé</b> est périodique de fréquence <i>f</i>. Il se décompose en une somme de signaux sinusoïdaux ' +
      'de fréquences <b>multiples entiers</b> de <i>f</i>.</li>' +
      '<li><i>f</i> est la <b>fréquence fondamentale</b> ; les autres sont les <b>harmoniques</b>.</li></ul>' +
      form('f<sub>n</sub> = n × f<sub>1</sub>', 'la 3e harmonique vaut trois fois la fondamentale') +
      '<p>C’est la répartition des harmoniques qui fait qu’un piano et un violon jouant la même note ne sonnent pas pareil : ' +
      'c’est le <b>timbre</b>.</p>' },
    { k: 'def', t: 'Intervalles et octave', c:
      '<p>En musique, un <b>intervalle</b> entre deux sons est défini par le <b>rapport de leurs fréquences fondamentales</b>, ' +
      'et non par leur différence.</p>' +
      '<p>Deux sons dont les fréquences sont dans le rapport <b>2 pour 1</b> correspondent à la <b>même note</b>, ' +
      'à deux hauteurs différentes. L’intervalle qui les sépare est l’<b>octave</b>.</p>' +
      form('f<sub>octave</sub> = 2 × f&nbsp;&nbsp;·&nbsp;&nbsp;quinte = 3/2&nbsp;·&nbsp;quarte = 4/3',
           'une gamme est une suite finie de notes réparties sur une octave') },
    { k: 'prop', t: 'La corde vibrante', c:
      '<p>La fréquence fondamentale d’une corde tendue ne dépend que de ses caractéristiques :</p>' +
      '<ul><li>corde plus <b>courte</b> → son plus <b>aigu</b> ;</li>' +
      '<li>corde plus <b>tendue</b> → son plus <b>aigu</b> ;</li>' +
      '<li>corde plus <b>lourde</b> par unité de longueur → son plus <b>grave</b>.</li></ul>' +
      '<p>Dans un instrument à vent, un phénomène analogue se produit par vibration de l’air dans un tuyau.</p>' },
    { k: 'def', t: 'Le niveau d’intensité sonore', c:
      '<p>L’intensité sonore est la puissance transportée par unité de surface, en W·m<sup>-2</sup>. ' +
      'L’oreille couvrant une gamme énorme, on utilise une échelle <b>logarithmique</b>, en décibels :</p>' +
      form('L = 10 × log(I / I<sub>0</sub>)&nbsp;&nbsp;avec I<sub>0</sub> = 1,0 × 10<sup>-12</sup> W·m<sup>-2</sup>',
           'I0 est le seuil d’audibilité') +
      '<p>Conséquences à retenir :</p>' +
      '<ul><li>intensité <b>multipliée par 10</b> → niveau <b>+ 10 dB</b> ;</li>' +
      '<li>intensité <b>doublée</b> → niveau <b>+ 3 dB</b> environ ;</li>' +
      '<li>deux sources identiques ensemble → + 3 dB, et non le double du niveau.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Les décibels <b>ne s’additionnent pas</b> : 60 dB + 60 dB ne font pas 120 dB, mais 63 dB. ' +
      'C’est l’erreur la plus fréquente du chapitre.</li>' +
      '<li>Un intervalle musical est un <b>rapport</b>, jamais une différence. Deux octaves au-dessus, c’est ×4, pas ×3.</li>' +
      '<li>Sur un spectre, la fondamentale est la <b>première</b> raie, pas la plus haute : la plus intense peut être une harmonique.</li></ul>' }
  ]
},
{
  id: 'sci-numerisation', bloc: 'sci-son',
  titre: 'Le son, une information à coder',
  resume: '4.2 Échantillonnage, quantification, compression.',
  capacites: [
    'Justifier le choix des paramètres de numérisation d’un son.',
    'Estimer la taille d’un fichier audio.',
    'Calculer un taux de compression.',
    'Comparer des caractéristiques de fichiers audio compressés.',
    'Discuter des échanges de fichiers numériques audio et vidéo d’un point de vue énergétique.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Tout le son que tu écoutes est une suite de nombres. Ce chapitre explique comment on passe d’une vibration ' +
      'continue de l’air à un fichier, et pourquoi ce fichier pèse ce qu’il pèse.</p>' },
    { k: 'def', t: 'Les deux opérations de la numérisation', c:
      '<p>Numériser, c’est <b>discrétiser</b> le signal analogique, en deux temps :</p>' +
      '<ul><li>l’<b>échantillonnage</b> découpe le temps : on relève la valeur du signal à intervalles réguliers. ' +
      'La <b>fréquence d’échantillonnage</b> <i>f<sub>e</sub></i>, en hertz, dit combien de mesures par seconde.</li>' +
      '<li>la <b>quantification</b> découpe l’amplitude : chaque valeur relevée est arrondie et codée sur un nombre ' +
      'de <b>bits</b> <i>q</i>. Avec q bits, on dispose de 2<sup>q</sup> niveaux.</li></ul>' +
      '<p>Plus <i>f<sub>e</sub></i> est élevée et plus <i>q</i> est grand, plus la numérisation est fidèle, ' +
      '<b>mais plus le fichier est gros</b>. Tout le chapitre tient dans ce compromis.</p>' },
    { k: 'meth', t: 'Calculer la taille d’un fichier audio', c:
      form('taille = f<sub>e</sub> × q × durée × nombre de voies',
           'en bits, si fe est en Hz, q en bits et la durée en secondes') +
      '<p>Exemple, la qualité d’un CD : <i>f<sub>e</sub></i> = 44 100 Hz, <i>q</i> = 16 bits, 2 voies (stéréo).</p>' +
      '<p>Pour une seconde : 44 100 × 16 × 1 × 2 = 1 411 200 bits, soit environ <b>1,4 Mbit</b> par seconde, ' +
      'ou 176 kilooctets. Un octet vaut 8 bits.</p>' },
    { k: 'def', t: 'La compression', c:
      '<p>Comprimer, c’est diminuer la taille d’un fichier pour faciliter son stockage et sa transmission.</p>' +
      form('taux de compression = (1 - taille comprimée / taille initiale) × 100',
           'en pourcentage de réduction') +
      '<p>Les techniques propres au son sont dites <b>avec perte d’information</b> : elles éliminent les informations ' +
      'sonores auxquelles l’oreille est peu sensible. Le son n’est donc pas identique à l’original, ' +
      'mais la différence est peu perceptible.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Vérifier les <b>unités</b> avant de conclure : la formule donne des <b>bits</b>. ' +
      'Pour des octets, diviser par 8. Pour des mégaoctets, diviser encore par 10<sup>6</sup>.</li>' +
      '<li>Doubler la fréquence d’échantillonnage <b>double</b> la taille du fichier : la relation est proportionnelle. ' +
      'Ajouter un bit de quantification ajoute 1/q de taille, mais <b>double</b> le nombre de niveaux.</li>' +
      '<li>Le programme demande de discuter l’aspect <b>énergétique</b> : stocker et transmettre ces quantités énormes ' +
      'de données consomme de l’électricité, dans les centres de données et les réseaux.</li></ul>' }
  ]
},
{
  id: 'sci-audition', bloc: 'sci-son',
  titre: 'Entendre et protéger son audition',
  resume: '4.3 L’oreille, les cellules ciliées, les risques.',
  capacites: [
    'Relier l’organisation de l’oreille externe et de l’oreille moyenne à la réception et à la transmission de la vibration sonore.',
    'Analyser des anomalies et des pathologies auditives.',
    'Interpréter des données de microscopie sur les cellules ciliées et la fragilité du système auditif.',
    'Interpréter des données d’imagerie cérébrale relatives au traitement de l’information sonore.',
    'Relier l’intensité du son et la durée d’écoute au risque encouru par l’oreille interne.',
    'Mesurer le niveau d’intensité sonore perçu en fonction de la distance à la source, avec ou sans protection.'
  ],
  cours: [
    { k: 'pourquoi', t: 'À quoi ça sert ?', c:
      '<p>Les cellules ciliées sont en <b>quantité limitée</b> et ne se régénèrent pas. Ce chapitre est le seul du programme ' +
      'dont la leçon se applique directement à ta soirée de samedi.</p>' },
    { k: 'prop', t: 'Le trajet du son dans l’oreille', c:
      '<ul><li>L’<b>oreille externe</b> canalise les sons du milieu extérieur vers le <b>tympan</b>.</li>' +
      '<li>Cette membrane vibrante transmet les vibrations jusqu’à l’oreille interne par l’intermédiaire ' +
      'de l’<b>oreille moyenne</b>, dont les osselets amplifient le mouvement.</li>' +
      '<li>Dans l’<b>oreille interne</b>, les <b>cellules ciliées</b> traduisent les vibrations reçues en un ' +
      '<b>message nerveux</b>, qui se propage vers des aires cérébrales spécialisées.</li>' +
      '<li>Certaines de ces aires permettent, <b>après apprentissage</b>, l’interprétation de l’univers sonore : ' +
      'parole, voix, musique.</li></ul>' +
      '<p>Vibration mécanique, puis message nerveux, puis interprétation : trois étapes, trois natures différentes.</p>' },
    { k: 'def', t: 'Ce que l’oreille humaine perçoit', c:
      '<p>L’être humain ne perçoit que les sons situés dans une gamme de fréquences comprise entre ' +
      '<b>20 Hz et 20 000 Hz</b>, et au-dessus d’une intensité seuil.</p>' +
      '<p>Cette perception <b>varie selon l’âge et l’état auditif</b> : les fréquences aiguës sont les premières perdues.</p>' },
    { k: 'prop', t: 'Le risque, une affaire d’intensité ET de durée', c:
      '<p>Au-delà de <b>80 dB</b>, un son peut devenir nocif, selon son intensité <b>et</b> sa durée d’écoute. ' +
      'Les deux comptent : c’est le point du programme.</p>' +
      '<p>Les cellules ciliées, en quantité limitée, sont fragiles et facilement endommagées par des sons trop intenses. ' +
      'Les dégâts peuvent être <b>irréversibles</b> : acouphènes, perte auditive, voire surdité.</p>' +
      '<p>Des mesures d’atténuation du bruit et des dispositifs individuels de protection existent, et les technologies ' +
      'de protection comme d’appareillage ne cessent d’évoluer.</p>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Ne jamais parler seulement de l’intensité : la réponse attendue associe toujours <b>intensité et durée</b>.</li>' +
      '<li>Le caractère <b>irréversible</b> des dégâts est la notion clé. Les cellules ciliées ne se remplacent pas.</li>' +
      '<li>S’éloigner de la source est la protection la plus simple : l’intensité diminue rapidement avec la distance.</li></ul>' }
  ]
},

/* ================= 5. PROJET ================= */
{
  id: 'sci-projet', bloc: 'sci-projet',
  titre: 'Projet expérimental et numérique',
  resume: '5. Mesurer, traiter les données, critiquer.',
  capacites: [
    'Mettre en œuvre une démarche scientifique expérimentale.',
    'Utiliser des capteurs et des logiciels, ou des données expérimentales mises à disposition par des scientifiques.',
    'Traiter et représenter des données de mesure.',
    'Porter une analyse critique sur les résultats obtenus.'
  ],
  cours: [
    { k: 'pourquoi', t: 'Ce que c’est', c:
      '<p>C’est la cinquième partie du programme, et la seule qui ne soit pas une liste de savoirs. Elle s’articule autour ' +
      'de la <b>mesure</b> et des <b>données</b> qu’elle produit, qui sont au cœur des sciences expérimentales.</p>' +
      '<p>L’objectif est de te confronter à une vraie démarche : utiliser du matériel ou des données réelles, ' +
      'puis porter un regard <b>critique</b> sur ce que tu obtiens.</p>' },
    { k: 'meth', t: 'La démarche, étape par étape', c:
      '<ul><li>1. <b>Une question</b> précise, à laquelle une mesure peut répondre.</li>' +
      '<li>2. Une <b>hypothèse</b>, formulée de manière testable.</li>' +
      '<li>3. Un <b>protocole</b> : ce que l’on mesure, avec quoi, combien de fois, et surtout ce que l’on ' +
      '<b>fait varier</b> et ce que l’on <b>garde constant</b>.</li>' +
      '<li>4. Les <b>mesures</b>, répétées, consignées avec leurs unités.</li>' +
      '<li>5. Le <b>traitement</b> : moyenne, graphique, tendance.</li>' +
      '<li>6. L’<b>analyse critique</b> : l’hypothèse est-elle validée ? Quelles sont les sources d’erreur ? ' +
      'Quelles sont les limites du dispositif ?</li></ul>' },
    { k: 'def', t: 'Les mots de la mesure', c:
      '<ul><li>Une <b>mesure unique ne vaut rien</b> : on répète, et on prend la <b>moyenne</b>.</li>' +
      '<li>La <b>dispersion</b> des mesures renseigne sur leur fiabilité.</li>' +
      '<li>Un résultat s’écrit toujours avec son <b>unité</b> et un nombre de chiffres significatifs cohérent ' +
      'avec la précision de l’appareil.</li>' +
      '<li>Le <b>témoin</b> est l’expérience de référence, où le facteur testé est absent. Sans témoin, on ne conclut rien.</li></ul>' },
    { k: 'astuce', t: 'Les astuces qui font gagner des points', c:
      '<ul><li>Un protocole valable ne fait varier <b>qu’un seul facteur</b> à la fois. Tout le reste est maintenu constant. ' +
      'C’est le critère que le correcteur cherche en premier.</li>' +
      '<li>L’analyse critique n’est pas facultative : elle est dans le titre même de la partie du programme.</li>' +
      '<li>Un écart entre la mesure et la valeur attendue n’est pas un échec : il faut l’<b>expliquer</b>. ' +
      'C’est même là que se gagnent les points.</li></ul>' }
  ]
}
];

CHAPITRES_SCI.forEach(c => {
  c.gens = [];
  c.matiere = 'sciences';
  c.classe = 'premiere';
  CHAPITRES.push(c);
  CHAP[c.id] = c;
});
