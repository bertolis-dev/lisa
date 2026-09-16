/* =========================================================================
   Générateurs d'exercices d'enseignement moral et civique.
   Notions, textes de référence, institutions, contresens classiques.
   Plus un débat argumenté au barème auto-évalué.
   ========================================================================= */

/* ---------- les textes de référence ---------- */
const TEXTES_EMC = [
  { t: 'La loi de séparation des Églises et de l’État', d: '9 décembre 1905', ch: 'emc-laicite',
    e: 'Elle garantit la liberté de conscience et le libre exercice des cultes, et pose que la République ' +
       'ne reconnaît, ne salarie ni ne subventionne aucun culte.' },
  { t: 'La loi Pleven contre le racisme', d: '1er juillet 1972', ch: 'emc-racisme',
    e: 'Elle réprime la provocation à la haine raciale, la diffamation et l’injure à caractère raciste.' },
  { t: 'La loi Gayssot', d: '13 juillet 1990', ch: 'emc-racisme',
    e: 'Elle réprime la contestation des crimes contre l’humanité, dont la négation de la Shoah.' },
  { t: 'La décision reconnaissant la valeur constitutionnelle de la fraternité', d: '6 juillet 2018', ch: 'emc-solidarite',
    e: 'Décision du Conseil constitutionnel. La fraternité cesse d’être un simple idéal moral ' +
       'pour devenir un principe invocable devant un juge.' },
  { t: 'Les premières lois de décentralisation', d: '1982', ch: 'emc-indivisibilite',
    e: 'Elles transfèrent certaines compétences de l’État aux collectivités territoriales.' },
  { t: 'Le Livre blanc sur la défense et la sécurité nationale', d: '2008', ch: 'emc-defense',
    e: 'Il introduit la notion élargie de « sécurité nationale », au-delà de la seule défense militaire.' },
  { t: 'Le droit de vote et d’éligibilité des femmes', d: '1944', ch: 'emc-egalite',
    e: 'Les Françaises votent pour la première fois en 1945.' },
  { t: 'La loi Veil sur l’interruption volontaire de grossesse', d: '1975', ch: 'emc-egalite',
    e: 'La liberté d’y recourir est entrée dans la Constitution en 2024.' },
  { t: 'L’interdiction des signes religieux ostensibles à l’école publique', d: '2004', ch: 'emc-laicite',
    e: 'Elle concerne les élèves des écoles, collèges et lycées publics.' },
  { t: 'L’extension de la répression aux propos sexistes, homophobes et handiphobes', d: '30 décembre 2004', ch: 'emc-racisme',
    e: 'Cette loi élargit le champ de la répression au-delà du seul critère racial.' }
];

G('emc-debat', 'emc-textes', 'Les textes de référence', 'ent', function(){
  const x = R.pick(TEXTES_EMC);
  const dates = R.shuffle([x.d].concat(autres(TEXTES_EMC.map(y => y.d), x.d, 3)));
  return {
    enonce: '<p>De quand date ce texte ou cette décision ?</p>' +
            '<div class="form">' + x.t + '</div>',
    qcm: { options: dates, bon: dates.indexOf(x.d) },
    etapes: ['<b>' + x.d + '</b> · ' + x.t + '.', x.e,
             'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ». ' +
               'Citer un texte précis est ce qui distingue une copie d’EMC d’une discussion de café.']
  };
});

G('emc-debat', 'emc-textes-sens', 'Que dit ce texte ?', 'app', function(){
  const x = R.pick(TEXTES_EMC);
  const titres = R.shuffle([x.t].concat(autres(TEXTES_EMC.map(y => y.t), x.t, 3)));
  return {
    enonce: '<p>Quel texte correspond à cette description ?</p>' +
            '<div class="form">' + x.e + '</div>',
    qcm: { options: titres, bon: titres.indexOf(x.t) },
    etapes: ['Il s’agit de : <b>' + x.t + '</b> (' + x.d + ').',
             'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ».']
  };
});

/* ---------- les notions ---------- */
const NOTIONS_EMC = [
  { n: 'La solidarité par assurance', d: 'un système où l’on cotise et où l’on est couvert en cas de risque', ch: 'emc-solidarite' },
  { n: 'La solidarité par assistance', d: 'une aide accordée au titre de la situation de la personne, sans contrepartie de cotisation', ch: 'emc-solidarite' },
  { n: 'La fraternité', d: 'un principe de la devise républicaine, reconnu comme ayant valeur constitutionnelle en 2018', ch: 'emc-solidarite' },
  { n: 'La discrimination', d: 'un traitement défavorable fondé sur un critère interdit par la loi, dans un domaine visé par elle', ch: 'emc-discriminations' },
  { n: 'La société inclusive', d: 'une société adaptée pour permettre la participation de tous, notamment des personnes en situation de handicap', ch: 'emc-discriminations' },
  { n: 'La laïcité', d: 'le principe qui rend possible la coexistence pacifique d’individus dont les options philosophiques ou religieuses restent différentes', ch: 'emc-laicite' },
  { n: 'Le pluralisme', d: 'la coexistence reconnue d’opinions et de convictions différentes au sein d’une même société', ch: 'emc-laicite' },
  { n: 'L’indivisibilité de la République', d: 'le principe selon lequel la loi et la souveraineté sont les mêmes sur tout le territoire', ch: 'emc-indivisibilite' },
  { n: 'La décentralisation', d: 'le transfert de certaines compétences de l’État vers les collectivités territoriales', ch: 'emc-indivisibilite' },
  { n: 'Le droit du sol', d: 'l’attribution de la nationalité en raison de la naissance sur le territoire, sous conditions', ch: 'emc-nationalite' },
  { n: 'Le droit du sang', d: 'l’attribution de la nationalité en raison de la nationalité d’au moins un des parents', ch: 'emc-nationalite' },
  { n: 'La naturalisation', d: 'l’acquisition de la nationalité par décision de l’administration, sous conditions de résidence et d’intégration', ch: 'emc-nationalite' },
  { n: 'La citoyenneté', d: 'l’ensemble des droits politiques découlant de la nationalité : voter, être élu, accéder aux emplois publics', ch: 'emc-nationalite' },
  { n: 'Le patriotisme constitutionnel', d: 'l’attachement des citoyens aux principes fondateurs de la République plutôt qu’à une origine', ch: 'emc-memoire' },
  { n: 'La mémoire', d: 'un rapport vécu et affectif au passé, porté par des groupes, plurielle et sélective', ch: 'emc-memoire' },
  { n: 'La sécurité nationale', d: 'une notion élargie englobant défense militaire, sécurité intérieure, cybersécurité et résilience de la société', ch: 'emc-defense' },
  { n: 'La guerre hybride', d: 'un conflit combinant moyens militaires et non militaires, souvent sans déclaration ni attribution claire', ch: 'emc-defense' }
];

G('emc-debat', 'emc-notions', 'Les notions du programme', 'app', function(){
  const x = R.pick(NOTIONS_EMC);
  return {
    enonce: '<p>Quelle notion du programme désigne <b>' + x.d + '</b> ?</p>',
    qcm: qcm4(x.n, NOTIONS_EMC.map(y => y.n)),
    etapes: ['C’est <b>' + x.n.toLowerCase() + '</b> : ' + x.d + '.',
             'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ».']
  };
});

/* une révision de notions propre à chaque chapitre qui en compte assez */
['emc-solidarite', 'emc-discriminations', 'emc-laicite', 'emc-indivisibilite',
 'emc-nationalite', 'emc-memoire', 'emc-defense'].forEach(function(ch){
  G(ch, ch + '-notions', 'Les notions du chapitre', 'app', function(){
    const locales = NOTIONS_EMC.filter(y => y.ch === ch);
    const x = R.pick(locales);
    return {
      enonce: '<p>Quelle notion de ce chapitre désigne <b>' + x.d + '</b> ?</p>',
      qcm: qcm4(x.n, NOTIONS_EMC.map(y => y.n)),
      etapes: [
        'C’est <b>' + x.n.toLowerCase() + '</b>.',
        locales.length > 1
          ? 'Les autres notions du chapitre : ' + locales.filter(y => y !== x).map(y => y.n.toLowerCase()).join(' · ') + '.'
          : 'C’est la notion centrale de ce chapitre.'
      ]
    };
  });
});

/* ---------- les institutions ---------- */
const INSTITUTIONS_EMC = [
  { n: 'Le Défenseur des droits', r: 'autorité constitutionnelle indépendante que toute personne peut saisir gratuitement si elle s’estime discriminée' },
  { n: 'Le Conseil constitutionnel', r: 'institution qui contrôle la conformité des lois à la Constitution, et qui a reconnu la valeur constitutionnelle de la fraternité en 2018' },
  { n: 'La Dilcrah', r: 'délégation interministérielle chargée de la lutte contre le racisme, l’antisémitisme et la haine anti-LGBT' },
  { n: 'La CNCDH', r: 'commission consultative des droits de l’homme, qui publie un rapport annuel sur le racisme' },
  { n: 'La Cour européenne des droits de l’Homme', r: 'juridiction qui admet que des restrictions à la liberté de manifester sa religion soient possibles' },
  { n: 'La région', r: 'collectivité territoriale compétente pour les lycées, la formation professionnelle et les transports' },
  { n: 'Le département', r: 'collectivité territoriale compétente pour les collèges et l’action sociale' },
  { n: 'La commune', r: 'collectivité territoriale compétente pour les écoles primaires, l’urbanisme et l’état civil' }
];

G('emc-indivisibilite', 'emc-institutions', 'Qui fait quoi ?', 'ent', function(){
  const x = R.pick(INSTITUTIONS_EMC);
  return {
    enonce: '<p>Quelle institution ou collectivité correspond à cette description ?</p>' +
            '<div class="form">' + x.r + '</div>',
    qcm: qcm4(x.n, INSTITUTIONS_EMC.map(y => y.n)),
    etapes: ['Réponse : <b>' + x.n + '</b>.',
             'Le partage des compétences le plus parlant : la <b>région</b> construit et entretient ton lycée, ' +
               'mais l’<b>État</b> fixe les programmes et paie les professeurs.']
  };
});

/* ---------- vrai ou faux ---------- */
const VF_EMC = [
  { a: 'La laïcité interdit aux élèves d’avoir des convictions religieuses.', v: false, ch: 'emc-laicite',
    e: 'Elle garantit au contraire la <b>liberté de conscience</b> et le libre exercice des cultes. ' +
       'Ce qui est encadré à l’école publique, ce sont les signes religieux ostensibles, depuis 2004.' },
  { a: 'La loi de 1905 dispose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte.', v: true, ch: 'emc-laicite',
    e: 'C’est l’article 2. L’article premier, lui, garantit la liberté de conscience et le libre exercice des cultes.' },
  { a: 'Les agents publics et les usagers du service public sont soumis aux mêmes obligations de neutralité.', v: false, ch: 'emc-laicite',
    e: 'Les <b>agents</b> sont tenus à la neutralité. Les <b>usagers</b> sont libres, sauf règles particulières ' +
       'comme celles qui s’appliquent aux élèves de l’école publique.' },
  { a: 'Le principe de fraternité a valeur constitutionnelle.', v: true, ch: 'emc-solidarite',
    e: 'Depuis la décision du Conseil constitutionnel du 6 juillet 2018. Auparavant, on y voyait un simple idéal moral.' },
  { a: 'Toute injustice ressentie constitue juridiquement une discrimination.', v: false, ch: 'emc-discriminations',
    e: 'Il faut trois éléments : un traitement défavorable, un <b>critère interdit par la loi</b>, ' +
       'et un domaine visé par elle. Le programme demande justement de distinguer le droit et le ressenti.' },
  { a: 'Le racisme est une opinion protégée par la liberté d’expression.', v: false, ch: 'emc-racisme',
    e: 'L’injure, la diffamation raciste et la provocation à la haine sont des <b>délits</b>, ' +
       'réprimés notamment par la loi Pleven de 1972.' },
  { a: 'La décentralisation permet aux collectivités territoriales de voter leurs propres lois.', v: false, ch: 'emc-indivisibilite',
    e: 'Elle transfère des <b>compétences</b>, pas le pouvoir législatif. La République reste <b>indivisible</b> : ' +
       'la loi est la même partout. Ce n’est pas du fédéralisme.' },
  { a: 'Les langues régionales sont reconnues par la Constitution comme appartenant au patrimoine de la France.', v: true, ch: 'emc-indivisibilite',
    e: 'C’est l’article 75-1. Il illustre l’équilibre entre unité du territoire et reconnaissance de sa diversité.' },
  { a: 'Nationalité et citoyenneté sont deux mots pour la même chose.', v: false, ch: 'emc-nationalite',
    e: 'La <b>nationalité</b> est un lien juridique d’appartenance à un État ; la <b>citoyenneté</b> ' +
       'est l’ensemble des droits politiques qui en découlent. Un mineur français a l’une sans exercer l’autre.' },
  { a: 'Un citoyen européen résidant en France peut voter aux élections municipales.', v: true, ch: 'emc-nationalite',
    e: 'La citoyenneté européenne donne le droit de voter et d’être élu aux élections municipales ' +
       'et européennes dans l’État de résidence, mais pas aux élections nationales.' },
  { a: 'La citoyenneté européenne remplace la citoyenneté nationale.', v: false, ch: 'emc-nationalite',
    e: 'Elle <b>s’ajoute</b> à elle. C’est un contresens fréquent.' },
  { a: 'Histoire et mémoire sont deux approches du passé de même nature.', v: false, ch: 'emc-memoire',
    e: 'L’<b>histoire</b> est une discipline scientifique qui établit des faits par une méthode. ' +
       'La <b>mémoire</b> est un rapport vécu et affectif, plurielle et sélective.' },
  { a: 'La notion de sécurité nationale dépasse le seul domaine militaire.', v: true, ch: 'emc-defense',
    e: 'Introduite par le Livre blanc de 2008, elle englobe la sécurité intérieure, civile, économique, ' +
       'la cybersécurité et la résilience de la société.' },
  { a: 'L’égalité femmes-hommes a progressé de façon continue, sans résistances.', v: false, ch: 'emc-egalite',
    e: 'Le programme dit le contraire : le principe transforme progressivement la société ' +
       '« tout en se heurtant à diverses formes de résistance ».' }
];

G('emc-debat', 'emc-vf', 'Vrai ou faux : les contresens classiques', 'ent', function(){
  const x = R.pick(VF_EMC);
  return {
    enonce: '<p>Cette affirmation est-elle exacte ?</p>' + cit(x.a),
    qcm: { options: ['Vrai', 'Faux'], bon: x.v ? 0 : 1 },
    etapes: [
      x.v ? 'C’est <b>exact</b>.' : 'C’est <b>faux</b>.', x.e,
      'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ».'
    ]
  };
});

['emc-laicite', 'emc-nationalite', 'emc-indivisibilite', 'emc-racisme'].forEach(function(ch){
  G(ch, ch + '-vf', 'Vrai ou faux', 'ent', function(){
    const x = R.pick(VF_EMC.filter(y => y.ch === ch));
    return {
      enonce: '<p>Cette affirmation est-elle exacte ?</p>' + cit(x.a),
      qcm: { options: ['Vrai', 'Faux'], bon: x.v ? 0 : 1 },
      etapes: [x.v ? 'C’est <b>exact</b>.' : 'C’est <b>faux</b>.', x.e]
    };
  });
});

/* ---------- argument, opinion, fait ---------- */
const ARG_EMC = [
  { p: 'La loi Gayssot date de 1990.', t: 'Un fait',
    e: 'C’est vérifiable : cela se contrôle dans un texte officiel.' },
  { p: 'Cette loi va trop loin.', t: 'Une opinion',
    e: 'C’est un point de vue, qui n’est ni vrai ni faux en soi. Il n’a de valeur en débat que s’il est argumenté.' },
  { p: 'Cette loi restreint la liberté d’expression, car elle punit la contestation de faits historiques établis par la justice internationale.', t: 'Un argument',
    e: 'Une opinion reliée à un fait par un raisonnement : c’est ce qui fait avancer un débat.' },
  { p: 'En France, les statistiques ethniques sont interdites.', t: 'Un fait',
    e: 'Vérifiable dans le droit français. C’est d’ailleurs ce qui rend la mesure des discriminations difficile.' },
  { p: 'Mesurer les discriminations est nécessaire, puisque sans données on ne peut évaluer l’efficacité des politiques menées contre elles.', t: 'Un argument',
    e: 'Une position défendue par un raisonnement explicite.' },
  { p: 'Je trouve que la laïcité est mal comprise aujourd’hui.', t: 'Une opinion',
    e: 'Aucun fait ni raisonnement ne vient encore l’étayer : c’est un point de départ, pas une conclusion.' }
];

G('emc-debat', 'emc-argument', 'Fait, opinion ou argument ?', 'app', function(){
  const x = R.pick(ARG_EMC);
  const noms = ['Un fait', 'Une opinion', 'Un argument'];
  return {
    enonce: '<p>Dans un débat, comment qualifier cette intervention ?</p>' + cit(x.p),
    qcm: { options: noms.slice(), bon: noms.indexOf(x.t) },
    etapes: [
      'C’est <b>' + x.t.toLowerCase() + '</b>.', x.e,
      'Un <b>fait</b> se vérifie · une <b>opinion</b> exprime un point de vue · ' +
        'un <b>argument</b> relie l’un à l’autre par un raisonnement. Seul l’argument fait avancer un débat.'
    ]
  };
});

/* ---------- le programme lui-même ---------- */
const PROG_EMC = [
  { q: 'Quel est le thème du programme d’EMC en classe de première ?', b: 'Cohésion et diversité dans une société démocratique',
    v: ['Cohésion et diversité dans une société démocratique', 'La vie démocratique : débat, délibération et prise de décision',
        'Liberté, égalité, fraternité', 'La République et ses institutions'] },
  { q: 'Quelles sont les deux parties du programme de première ?', b: 'Les valeurs et principes de la République à l’épreuve de la cohésion sociale, et la République et la Nation',
    v: ['Les valeurs et principes de la République à l’épreuve de la cohésion sociale, et la République et la Nation',
        'La laïcité et la citoyenneté', 'Les libertés et les devoirs', 'La démocratie et la défense'] },
  { q: 'D’où viennent les quatre dimensions des compétences travaillées en EMC ?', b: 'Du cadre de référence des compétences pour une culture de la démocratie du Conseil de l’Europe',
    v: ['Du cadre de référence des compétences pour une culture de la démocratie du Conseil de l’Europe',
        'Du socle commun de l’école obligatoire', 'De la Déclaration des droits de l’homme et du citoyen',
        'Du Code de l’éducation'] },
  { q: 'Quelles sont ces quatre dimensions ?', b: 'Valeurs, connaissances, attitudes et aptitudes',
    v: ['Valeurs, connaissances, attitudes et aptitudes', 'Savoirs, savoir-faire, savoir-être et savoir-vivre',
        'Liberté, égalité, fraternité et laïcité', 'Lire, écrire, compter et débattre'] },
  { q: 'Quel est le thème du programme d’EMC en classe terminale ?', b: 'La vie démocratique : débat, délibération et prise de décision',
    v: ['La vie démocratique : débat, délibération et prise de décision', 'Cohésion et diversité dans une société démocratique',
        'La défense et la sécurité nationale', 'Les institutions européennes'] }
];

G('emc-debat', 'emc-programme', 'Le programme d’EMC', 'app', function(){
  const x = R.pick(PROG_EMC);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le programme de première est issu de l’arrêté du 29 mai 2024, ' +
               'appliqué en première depuis la rentrée 2025-2026.']
  };
});

/* ---------- exercice rédigé ---------- */
D('emc-debat', 'emc-preparer-debat', 'Préparer un débat argumenté', function(){
  const sujets = [
    { s: 'Faut-il autoriser les statistiques ethniques pour mieux mesurer les discriminations ?',
      ch: 'emc-discriminations',
      p: 'article 225-1 du Code pénal · action du Défenseur des droits · méthode du testing',
      c: 'sans données, on ne peut pas évaluer les politiques publiques',
      o: 'le risque d’assigner les personnes à une origine, contraire à l’universalisme républicain' },
    { s: 'La laïcité protège-t-elle la liberté de croire, ou la restreint-elle ?',
      ch: 'emc-laicite',
      p: 'loi de 1905, articles 1, 2, 27 et 28 · loi de 2004 · jurisprudence de la Cour européenne des droits de l’Homme',
      c: 'elle garantit la liberté de conscience et le libre exercice des cultes',
      o: 'certaines restrictions existent, et elles sont vécues comme des limitations' },
    { s: 'La décentralisation menace-t-elle l’indivisibilité de la République ?',
      ch: 'emc-indivisibilite',
      p: 'article premier de la Constitution · lois de 1982 · article 75-1 · statuts ultramarins',
      c: 'elle rapproche la décision du citoyen et reconnaît la diversité des territoires',
      o: 'elle peut créer des écarts entre territoires, alors que la loi doit être la même partout' },
    { s: 'Le devoir de mémoire est-il une obligation ou un choix ?',
      ch: 'emc-memoire',
      p: 'journées du 10 mai et du 27 janvier · distinction entre histoire et mémoire · patriotisme constitutionnel',
      c: 'commémorer construit une conscience commune et prévient la répétition',
      o: 'imposer une mémoire officielle peut figer le passé et entrer en concurrence avec le travail des historiens' },
    { s: 'Les inégalités économiques menacent-elles la démocratie elle-même ?',
      ch: 'emc-solidarite',
      p: 'décision du 6 juillet 2018 sur la fraternité · logiques d’assurance et d’assistance · action de l’Agence nationale de la cohésion des territoires',
      c: 'le programme affirme que ces inégalités peuvent présenter un danger pour la cohésion sociale et la démocratie',
      o: 'la démocratie dispose de mécanismes de redistribution qui corrigent en partie ces écarts' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet de débat</b>, en lien avec le chapitre « ' + CHAP[x.ch].titre + ' » :</p>' +
            '<div class="form">' + x.s + '</div>' +
            '<p>Sur ton cahier, prépare ce débat : définis les termes, rassemble les faits, ' +
            'puis construis <b>les deux positions</b>, celle que tu défends et celle que tu combats.</p>',
    aide: 'En EMC, un bon débat s’appuie sur des <b>textes</b> et des <b>faits</b>, pas sur des impressions. ' +
          'Pistes à mobiliser ici : ' + x.p + '.',
    bareme: [
      { pts: 2, d: '<b>Définition des termes</b> du sujet. Beaucoup de désaccords ne sont que ' +
                   'des malentendus de vocabulaire : commencer par là est toujours payant.' },
      { pts: 3, d: '<b>Au moins deux faits précis</b> mobilisés : un texte de loi avec sa date, ' +
                   'une décision de justice, une institution, un chiffre. Pistes : ' + x.p + '.' },
      { pts: 3, d: '<b>Arguments pour</b>, construits et non énumérés. Par exemple : ' + x.c + '.' },
      { pts: 3, d: '<b>Arguments contre</b>, présentés honnêtement et non caricaturés. Par exemple : ' + x.o + '.' },
      { pts: 2, d: '<b>Distinction fait / opinion / argument</b> visible : chaque opinion avancée ' +
                   'est reliée à un fait par un raisonnement.' },
      { pts: 2, d: '<b>Lien aux valeurs de la République</b> : liberté, égalité, fraternité, laïcité, ' +
                   'dignité humaine, État de droit. Le sujet est rattaché explicitement à l’une d’elles.' },
      { pts: 2, d: '<b>Position personnelle</b> assumée en conclusion, et <b>justifiée</b>. ' +
                   'Ne pas conclure est aussi une faute.' },
      { pts: 2, d: '<b>Reformulation de la position adverse</b> avant d’y répondre : ' +
                   'c’est une aptitude explicitement au programme, et la marque d’une vraie écoute.' },
      { pts: 1, d: '<b>Ton</b> du débat : on cherche à convaincre, pas à écraser. ' +
                   'En EMC, la manière compte autant que le contenu.' }
    ]
  };
});
