/* =========================================================================
   Générateurs d'exercices d'anglais.
   La grammaire et le lexique se corrigent automatiquement. Les réponses en
   saisie libre acceptent les variantes usuelles (type de champ « texte »).
   ========================================================================= */

/* ---------- verbes irréguliers ---------- */
const IRREGULIERS = [
  ['be', 'was/were', 'been', 'être', ['was', 'were', 'was / were']],
  ['become', 'became', 'become', 'devenir'],
  ['begin', 'began', 'begun', 'commencer'],
  ['break', 'broke', 'broken', 'casser'],
  ['bring', 'brought', 'brought', 'apporter'],
  ['build', 'built', 'built', 'construire'],
  ['buy', 'bought', 'bought', 'acheter'],
  ['catch', 'caught', 'caught', 'attraper'],
  ['choose', 'chose', 'chosen', 'choisir'],
  ['come', 'came', 'come', 'venir'],
  ['do', 'did', 'done', 'faire'],
  ['draw', 'drew', 'drawn', 'dessiner'],
  ['drink', 'drank', 'drunk', 'boire'],
  ['drive', 'drove', 'driven', 'conduire'],
  ['eat', 'ate', 'eaten', 'manger'],
  ['fall', 'fell', 'fallen', 'tomber'],
  ['feel', 'felt', 'felt', 'ressentir'],
  ['fight', 'fought', 'fought', 'combattre'],
  ['find', 'found', 'found', 'trouver'],
  ['forget', 'forgot', 'forgotten', 'oublier'],
  ['get', 'got', 'got', 'obtenir', null, ['gotten']],
  ['give', 'gave', 'given', 'donner'],
  ['go', 'went', 'gone', 'aller'],
  ['grow', 'grew', 'grown', 'grandir'],
  ['hear', 'heard', 'heard', 'entendre'],
  ['hold', 'held', 'held', 'tenir'],
  ['keep', 'kept', 'kept', 'garder'],
  ['know', 'knew', 'known', 'savoir'],
  ['lead', 'led', 'led', 'mener'],
  ['leave', 'left', 'left', 'partir, laisser'],
  ['lose', 'lost', 'lost', 'perdre'],
  ['make', 'made', 'made', 'fabriquer'],
  ['mean', 'meant', 'meant', 'signifier'],
  ['meet', 'met', 'met', 'rencontrer'],
  ['pay', 'paid', 'paid', 'payer'],
  ['read', 'read', 'read', 'lire'],
  ['rise', 'rose', 'risen', 's’élever'],
  ['run', 'ran', 'run', 'courir'],
  ['say', 'said', 'said', 'dire'],
  ['see', 'saw', 'seen', 'voir'],
  ['seek', 'sought', 'sought', 'chercher'],
  ['sell', 'sold', 'sold', 'vendre'],
  ['send', 'sent', 'sent', 'envoyer'],
  ['show', 'showed', 'shown', 'montrer'],
  ['sing', 'sang', 'sung', 'chanter'],
  ['sit', 'sat', 'sat', 's’asseoir'],
  ['speak', 'spoke', 'spoken', 'parler'],
  ['spend', 'spent', 'spent', 'dépenser, passer du temps'],
  ['stand', 'stood', 'stood', 'se tenir debout'],
  ['take', 'took', 'taken', 'prendre'],
  ['teach', 'taught', 'taught', 'enseigner'],
  ['tell', 'told', 'told', 'raconter'],
  ['think', 'thought', 'thought', 'penser'],
  ['throw', 'threw', 'thrown', 'jeter'],
  ['understand', 'understood', 'understood', 'comprendre'],
  ['wear', 'wore', 'worn', 'porter un vêtement'],
  ['win', 'won', 'won', 'gagner'],
  ['write', 'wrote', 'written', 'écrire']
];

G('en-temps', 'en-irreguliers', 'Les verbes irréguliers', 'app', function(){
  const v = R.pick(IRREGULIERS);
  return {
    enonce: '<p>Donne le <b>prétérit</b> et le <b>participe passé</b> de ce verbe.</p>' +
            '<div class="form"><b>' + v[0] + '</b><span class="form-leg">' + v[3] + '</span></div>',
    champs: [
      { type: 'texte', label: 'Prétérit', bon: v[1], alt: v[4] || [] },
      { type: 'texte', label: 'Participe passé', bon: v[2], alt: v[5] || [] }
    ],
    etapes: [
      '<b>' + v[0] + ' · ' + v[1] + ' · ' + v[2] + '</b> · ' + v[3] + '.',
      'Un verbe irrégulier s’apprend toujours par <b>trois</b> : base verbale, prétérit, participe passé. ' +
        'Deux sur trois ne suffit pas, car le participe passé sert au present perfect, au past perfect et au passif.',
      v[1] === v[2] ? 'Ici le prétérit et le participe passé sont <b>identiques</b> : c’est le cas le plus fréquent.'
                    : 'Ici le prétérit et le participe passé sont <b>différents</b> : c’est là que se font les erreurs.'
    ]
  };
});

G('en-temps', 'en-irreguliers-sens', 'Reconnaître un verbe irrégulier', 'app', function(){
  const v = R.pick(IRREGULIERS);
  const sens = IRREGULIERS.map(x => x[3]);
  return {
    enonce: '<p>Que signifie le verbe <b>' + v[0] + '</b> ?</p>',
    qcm: qcm4(v[3], sens),
    etapes: ['<b>' + v[0] + '</b> signifie « ' + v[3] + ' ».',
             'Formes complètes : ' + v[0] + ' · ' + v[1] + ' · ' + v[2] + '.']
  };
});

/* ---------- prétérit ou present perfect ---------- */
const TEMPS_MARQUEURS = [
  { p: 'She ___ to London last summer.', b: 'went', bad: 'has gone', t: 'Prétérit',
    m: 'last summer', e: '« last summer » est un repère passé daté et coupé du présent : le prétérit s’impose.' },
  { p: 'I ___ him three years ago.', b: 'met', bad: 'have met', t: 'Prétérit',
    m: 'ago', e: '« ago » impose toujours le prétérit : il situe le fait dans un passé révolu.' },
  { p: 'They ___ the Windrush exhibition yesterday.', b: 'visited', bad: 'have visited', t: 'Prétérit',
    m: 'yesterday', e: '« yesterday » est daté : prétérit obligatoire.' },
  { p: 'We ___ in this city since 2019.', b: 'have lived', bad: 'live', t: 'Present perfect',
    m: 'since', e: '« since » relie le passé au présent : present perfect obligatoire. Jamais le présent.' },
  { p: 'She ___ English for five years.', b: 'has studied', bad: 'studies', t: 'Present perfect',
    m: 'for', e: '« for » + durée qui continue jusqu’à maintenant : present perfect, jamais le présent.' },
  { p: 'I ___ never ___ to Canada.', b: 'have been', bad: 'was', t: 'Present perfect',
    m: 'never', e: '« never » dresse un bilan qui vaut aujourd’hui : present perfect.' },
  { p: 'The Supreme Court ___ that law in 1954.', b: 'overturned', bad: 'has overturned', t: 'Prétérit',
    m: 'in 1954', e: 'Une date précise dans le passé impose le prétérit.' },
  { p: 'He ___ just ___ his essay.', b: 'has finished', bad: 'finished', t: 'Present perfect',
    m: 'just', e: '« just » marque un fait tout récent dont le résultat compte maintenant : present perfect.' }
];

G('en-temps', 'en-preterit-perfect', 'Prétérit ou present perfect ?', 'ent', function(){
  const x = R.pick(TEMPS_MARQUEURS);
  const opts = R.shuffle([x.b, x.bad]);
  return {
    enonce: '<p>Complète cette phrase avec la forme correcte.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    champs: [
      { type: 'choix', label: 'Forme correcte', options: opts, bon: opts.indexOf(x.b) },
      { type: 'choix', label: 'Temps employé', options: ['Prétérit', 'Present perfect'],
        bon: x.t === 'Prétérit' ? 0 : 1 }
    ],
    etapes: [
      'Réponse : <b>' + x.b + '</b>, au <b>' + x.t.toLowerCase() + '</b>.',
      'Le marqueur décisif est « <b>' + x.m + '</b> ». ' + x.e,
      'La règle générale : le <b>prétérit</b> raconte un fait coupé du présent, le <b>present perfect</b> relie ' +
        'le passé au présent. Cherche toujours le marqueur avant de choisir.'
    ]
  };
});

/* ---------- les hypothèses ---------- */
const HYPOTHESES = [
  { p: 'If it ___ tomorrow, we will cancel the trip.', b: 'rains', t: 'Type 1 : hypothèse réelle',
    e: 'Présent dans la subordonnée, futur dans la principale. Jamais « will » après « if ».',
    d: ['rains', 'will rain', 'rained', 'would rain'] },
  { p: 'If I ___ more time, I would visit the museum.', b: 'had', t: 'Type 2 : irréel du présent',
    e: 'Prétérit modal dans la subordonnée, « would » + base verbale dans la principale.',
    d: ['had', 'have', 'would have', 'will have'] },
  { p: 'If she had known, she ___ come.', b: 'would have', t: 'Type 3 : irréel du passé',
    e: 'Past perfect dans la subordonnée, « would have » + participe passé dans la principale.',
    d: ['would have', 'would', 'will have', 'had'] },
  { p: 'If they ___ harder, they would pass the exam.', b: 'worked', t: 'Type 2 : irréel du présent',
    e: 'Le prétérit après « if » n’exprime pas le passé, mais l’irréel du présent.',
    d: ['worked', 'work', 'will work', 'would work'] },
  { p: 'If you ___ the book, you will understand the film.', b: 'read', t: 'Type 1 : hypothèse réelle',
    e: 'Présent après « if », futur dans la principale.',
    d: ['read', 'will read', 'would read', 'had read'] },
  { p: 'If we had left earlier, we ___ missed the train.', b: 'would not have', t: 'Type 3 : irréel du passé',
    e: 'On regrette un fait passé : « would have » + participe passé, ici à la forme négative.',
    d: ['would not have', 'would not', 'will not have', 'had not'] }
];

G('en-modaux', 'en-hypothese', 'Les hypothèses avec if', 'ent', function(){
  const x = R.pick(HYPOTHESES);
  const opts = R.shuffle(x.d.slice());
  const types = ['Type 1 : hypothèse réelle', 'Type 2 : irréel du présent', 'Type 3 : irréel du passé'];
  return {
    enonce: '<p>Complète cette phrase, puis indique de quel type d’hypothèse il s’agit.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    champs: [
      { type: 'choix', label: 'Forme correcte', options: opts, bon: opts.indexOf(x.b) },
      { type: 'choix', label: 'Type d’hypothèse', options: types, bon: types.indexOf(x.t) }
    ],
    etapes: [
      'Réponse : <b>' + x.b + '</b>. C’est un <b>' + x.t.toLowerCase() + '</b>.',
      x.e,
      'Les trois schémas : <b>if + présent → will</b> · <b>if + prétérit → would</b> · ' +
        '<b>if + past perfect → would have</b>. Aucun « will » ne suit jamais « if ».'
    ]
  };
});

/* ---------- wish ---------- */
const WISH = [
  { p: 'I wish I ___ the answer.', b: 'knew', q: 'présent', e: 'Regret sur le présent : wish + prétérit modal. Je ne connais pas la réponse.',
    d: ['knew', 'know', 'had known', 'would know'] },
  { p: 'She wishes she ___ to the meeting yesterday.', b: 'had gone', q: 'passé',
    e: 'Regret sur un fait passé : wish + past perfect. Elle n’y est pas allée.',
    d: ['had gone', 'went', 'goes', 'would go'] },
  { p: 'He wishes he ___ taller.', b: 'were', q: 'présent',
    e: 'Regret sur le présent. Le programme mentionne explicitement « he wishes he were » : ' +
       'le subjonctif « were » s’emploie à toutes les personnes.',
    d: ['were', 'is', 'had been', 'would be'] },
  { p: 'They wish they ___ that mistake.', b: 'had not made', q: 'passé',
    e: 'Regret sur un fait passé : wish + past perfect, ici à la forme négative.',
    d: ['had not made', 'did not make', 'do not make', 'would not make'] }
];

G('en-modaux', 'en-wish', 'Le souhait et le regret', 'ent', function(){
  const x = R.pick(WISH);
  const opts = R.shuffle(x.d.slice());
  return {
    enonce: '<p>Complète cette phrase de regret.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    champs: [
      { type: 'choix', label: 'Forme correcte', options: opts, bon: opts.indexOf(x.b) },
      { type: 'choix', label: 'Le regret porte sur…', options: ['le présent', 'le passé'],
        bon: x.q === 'présent' ? 0 : 1 }
    ],
    etapes: [
      'Réponse : <b>' + x.b + '</b>. Le regret porte sur le <b>' + x.q + '</b>.',
      x.e,
      'À retenir : <b>wish + prétérit</b> pour un regret sur le présent · ' +
        '<b>wish + past perfect</b> pour un regret sur le passé.'
    ]
  };
});

/* ---------- les modaux ---------- */
const MODAUX = [
  { p: 'You ___ smoke here, it is strictly forbidden.', b: 'mustn’t', v: 'Interdiction',
    e: '« mustn’t » exprime l’interdiction. Attention : « don’t have to » signifierait « ce n’est pas obligatoire », ce qui est l’inverse.' },
  { p: 'You ___ come if you don’t want to, it is optional.', b: 'don’t have to', v: 'Absence d’obligation',
    e: '« don’t have to » signifie que ce n’est pas obligatoire. C’est le piège classique face à « mustn’t ».' },
  { p: 'She ___ speak three languages fluently.', b: 'can', v: 'Capacité',
    e: '« can » exprime la capacité au présent. Au passé, on emploierait « could » ou « was able to ».' },
  { p: 'You ___ see a doctor, you look really pale.', b: 'should', v: 'Conseil',
    e: '« should » et « ought to » expriment le conseil et le devoir moral.' },
  { p: 'He ___ be tired, he has been working all night.', b: 'must', v: 'Quasi-certitude',
    e: '« must » exprime aussi la déduction quasi certaine, et pas seulement l’obligation.' },
  { p: 'It ___ rain later, the sky is getting dark.', b: 'might', v: 'Possibilité',
    e: '« may » et « might » expriment la possibilité. « might » marque une probabilité un peu plus faible.' },
  { p: 'That ___ be true, it contradicts all the evidence.', b: 'can’t', v: 'Impossibilité',
    e: '« can’t » exprime l’impossibilité selon l’énonciateur. C’est le contraire de « must » en déduction.' },
  { p: 'Students ___ wear a uniform in this school, it is a rule.', b: 'have to', v: 'Obligation',
    e: '« have to » marque une contrainte extérieure, alors que « must » vient de l’énonciateur lui-même.' }
];
const VAL_MODAUX = ['Capacité', 'Conseil', 'Obligation', 'Interdiction', 'Absence d’obligation',
                    'Possibilité', 'Quasi-certitude', 'Impossibilité'];

G('en-modaux', 'en-valeur-modal', 'La valeur des modaux', 'ent', function(){
  const x = R.pick(MODAUX);
  const formes = R.shuffle([x.b].concat(autres(MODAUX.map(y => y.b), x.b, 3)));
  return {
    enonce: '<p>Complète cette phrase, puis donne la valeur du modal employé.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    champs: [
      { type: 'choix', label: 'Modal correct', options: formes, bon: formes.indexOf(x.b) },
      { type: 'choix', label: 'Valeur exprimée', options: VAL_MODAUX.slice(), bon: VAL_MODAUX.indexOf(x.v) }
    ],
    etapes: [
      'Réponse : <b>' + x.b + '</b>, qui exprime ici : <b>' + x.v.toLowerCase() + '</b>.',
      x.e,
      'Le couple à ne jamais confondre : <b>mustn’t</b> = c’est interdit · ' +
        '<b>don’t have to</b> = ce n’est pas obligatoire.'
    ]
  };
});

/* ---------- la voix passive ---------- */
const PASSIF = [
  { a: 'Shakespeare wrote this play.', p: 'This play was written by Shakespeare.', t: 'prétérit' },
  { a: 'They built the bridge in 1890.', p: 'The bridge was built in 1890.', t: 'prétérit' },
  { a: 'The government passed the law.', p: 'The law was passed by the government.', t: 'prétérit' },
  { a: 'Someone stole my bike.', p: 'My bike was stolen.', t: 'prétérit' },
  { a: 'They publish the magazine every month.', p: 'The magazine is published every month.', t: 'présent' },
  { a: 'People speak English all over the world.', p: 'English is spoken all over the world.', t: 'présent' },
  { a: 'The Supreme Court has overturned the decision.', p: 'The decision has been overturned by the Supreme Court.', t: 'present perfect' }
];

G('en-temps', 'en-passif', 'La voix passive', 'ent', function(){
  const x = R.pick(PASSIF);
  const sansPoint = x.p.replace(/\.$/, '');
  return {
    enonce: '<p>Mets cette phrase à la <b>voix passive</b>.</p>' +
            '<div class="form">' + x.a + '</div>' +
            '<p class="tiny">Écris la phrase complète. La ponctuation finale et les majuscules ne sont pas comptées.</p>',
    champs: [{ type: 'texte', label: 'Voix passive', bon: x.p, alt: [sansPoint] }],
    etapes: [
      'Réponse : <b>' + x.p + '</b>',
      'Méthode : le <b>complément d’objet</b> de la phrase active devient le <b>sujet</b> de la phrase passive.',
      'Formation : <b>be</b> conjugué au même temps que le verbe actif (ici le ' + x.t + ') + <b>participe passé</b>.',
      'L’agent n’est introduit par <i>by</i> que s’il apporte une information utile. ' +
        'On l’omet souvent quand il est inconnu ou évident.'
    ]
  };
});

/* ---------- discours rapporté ---------- */
const RAPPORTE = [
  { d: '"I am tired," she said.', r: 'She said she was tired.', c: 'présent → prétérit' },
  { d: '"We will come tomorrow," they said.', r: 'They said they would come the next day.',
    c: 'will → would, et tomorrow → the next day' },
  { d: '"I can help you," he said.', r: 'He said he could help me.', c: 'can → could, et you → me' },
  { d: '"I saw her yesterday," he said.', r: 'He said he had seen her the day before.',
    c: 'prétérit → past perfect, et yesterday → the day before' },
  { d: '"I am working now," she said.', r: 'She said she was working then.',
    c: 'présent be+ing → prétérit be+ing, et now → then' },
  { d: '"We must leave," they said.', r: 'They said they had to leave.', c: 'must → had to' }
];

G('en-phrase', 'en-rapporte', 'Le discours rapporté', 'ent', function(){
  const x = R.pick(RAPPORTE);
  const sansPoint = x.r.replace(/\.$/, '');
  const sansThat = x.r.replace(' said ', ' said that ');
  return {
    enonce: '<p>Transpose cette phrase au <b>discours rapporté</b>.</p>' +
            '<div class="form">' + x.d + '</div>' +
            '<p class="tiny">Écris la phrase complète. « that » est facultatif.</p>',
    champs: [{ type: 'texte', label: 'Discours rapporté', bon: x.r,
               alt: [sansPoint, sansThat, sansThat.replace(/\.$/, '')] }],
    etapes: [
      'Réponse : <b>' + x.r + '</b>',
      'Changement opéré ici : <b>' + x.c + '</b>.',
      'Quand le verbe introducteur est au passé, tout <b>recule d’un cran</b> : présent → prétérit, ' +
        'prétérit → past perfect, will → would, can → could, must → had to.',
      'Les repères bougent aussi : now → then · today → that day · yesterday → the day before · ' +
        'tomorrow → the next day · here → there · this → that.'
    ]
  };
});

/* ---------- questions indirectes ---------- */
const INDIRECTES = [
  { d: 'Where does she live?', r: 'I wonder where she lives.',
    e: 'Plus d’auxiliaire « does » et plus d’inversion : on remet l’ordre de la phrase affirmative.' },
  { d: 'Is he coming?', r: 'I wonder if he is coming.',
    e: 'Sans mot interrogatif, on introduit par « if » ou « whether », et on supprime l’inversion.' },
  { d: 'What time did the film start?', r: 'I wonder what time the film started.',
    e: 'L’auxiliaire « did » disparaît, et le verbe porte lui-même le prétérit.' },
  { d: 'Why are they leaving?', r: 'I wonder why they are leaving.',
    e: 'On garde le mot interrogatif, mais on rétablit l’ordre sujet + verbe.' },
  { d: 'Can she speak Spanish?', r: 'I wonder if she can speak Spanish.',
    e: 'Question fermée : « if » ou « whether », puis sujet + modal.' }
];

G('en-phrase', 'en-indirecte', 'Les questions indirectes', 'ent', function(){
  const x = R.pick(INDIRECTES);
  return {
    enonce: '<p>Transforme cette question en <b>question indirecte</b>, en commençant par « I wonder ».</p>' +
            '<div class="form">' + x.d + '</div>',
    champs: [{ type: 'texte', label: 'Question indirecte', bon: x.r,
               alt: [x.r.replace(/\.$/, ''), x.r.replace(' if ', ' whether '),
                     x.r.replace(' if ', ' whether ').replace(/\.$/, '')] }],
    etapes: [
      'Réponse : <b>' + x.r + '</b>',
      x.e,
      'Les trois réflexes : plus d’<b>inversion</b>, plus d’auxiliaire <b>do / does / did</b>, ' +
        'plus de <b>point d’interrogation</b>.'
    ]
  };
});

/* ---------- comparatifs ---------- */
G('en-gn', 'en-comparatif', 'Comparatifs et superlatifs', 'app', function(){
  const adj = [
    { a: 'big', c: 'bigger', s: 'the biggest', t: 'court' },
    { a: 'happy', c: 'happier', s: 'the happiest', t: 'court en -y' },
    { a: 'easy', c: 'easier', s: 'the easiest', t: 'court en -y' },
    { a: 'expensive', c: 'more expensive', s: 'the most expensive', t: 'long' },
    { a: 'interesting', c: 'more interesting', s: 'the most interesting', t: 'long' },
    { a: 'important', c: 'more important', s: 'the most important', t: 'long' },
    { a: 'good', c: 'better', s: 'the best', t: 'irrégulier' },
    { a: 'bad', c: 'worse', s: 'the worst', t: 'irrégulier' },
    { a: 'hot', c: 'hotter', s: 'the hottest', t: 'court' },
    { a: 'famous', c: 'more famous', s: 'the most famous', t: 'long' }
  ];
  const x = R.pick(adj);
  return {
    enonce: '<p>Donne le <b>comparatif de supériorité</b> et le <b>superlatif</b> de cet adjectif.</p>' +
            '<div class="form"><b>' + x.a + '</b></div>',
    champs: [
      { type: 'texte', label: 'Comparatif', bon: x.c },
      { type: 'texte', label: 'Superlatif', bon: x.s, alt: [x.s.replace('the ', '')] }
    ],
    etapes: [
      '<b>' + x.a + ' → ' + x.c + ' → ' + x.s + '</b>. C’est un adjectif <b>' + x.t + '</b>.',
      'Adjectif <b>court</b> : -er et the -est. Adjectif <b>long</b> : more et the most. ' +
        'Un adjectif de deux syllabes terminé par -y est traité comme court, et le y devient i.',
      'Les irréguliers à connaître : good → better → the best · bad → worse → the worst · ' +
        'far → farther ou further → the farthest ou the furthest.'
    ]
  };
});

/* ---------- quantifieurs et distributifs ---------- */
const QUANTIFIEURS = [
  { p: 'She has ___ friends here, so she often feels lonely.', b: 'few', v: 'peu de, sens négatif',
    e: '« few » sans article a un sens négatif : presque pas. Le contexte « feels lonely » le confirme.',
    d: ['few', 'a few', 'little', 'a little'] },
  { p: 'Don’t worry, I have ___ friends in London who can help.', b: 'a few', v: 'quelques, sens positif',
    e: '« a few » a un sens positif : il y en a quelques-uns. L’article change entièrement le sens.',
    d: ['a few', 'few', 'a little', 'little'] },
  { p: 'We still have ___ time before the train leaves.', b: 'a little', v: 'un peu de, sens positif',
    e: '« a little » accompagne un indénombrable et a un sens positif : il en reste un peu.',
    d: ['a little', 'little', 'a few', 'few'] },
  { p: 'There is ___ hope of finding them alive.', b: 'little', v: 'peu de, sens négatif',
    e: '« little » sans article accompagne un indénombrable et a un sens négatif.',
    d: ['little', 'a little', 'few', 'a few'] },
  { p: 'How ___ students are there in your class?', b: 'many', v: 'dénombrable',
    e: '« many » accompagne les dénombrables, « much » les indénombrables.',
    d: ['many', 'much', 'few', 'little'] },
  { p: '___ answers are correct, you can choose either.', b: 'Both', v: 'les deux ensemble',
    e: '« both » désigne les deux pris ensemble.',
    d: ['Both', 'Either', 'Every', 'Each'] },
  { p: '___ student received a personal letter.', b: 'Each', v: 'chaque, un par un',
    e: '« each » envisage les éléments un par un, « every » les voit comme un ensemble.',
    d: ['Each', 'Both', 'Either', 'All'] }
];

G('en-gn', 'en-quantifieurs', 'Quantifieurs et distributifs', 'ent', function(){
  const x = R.pick(QUANTIFIEURS);
  const opts = R.shuffle(x.d.slice());
  return {
    enonce: '<p>Complète cette phrase.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: [
      'Réponse : <b>' + x.b + '</b> · ' + x.v + '.',
      x.e,
      'À retenir : <b>a few</b> et <b>a little</b> sont positifs, <b>few</b> et <b>little</b> sont négatifs. ' +
        'L’article fait basculer le sens.'
    ]
  };
});

/* ---------- pronoms relatifs ---------- */
const RELATIFS = [
  { p: 'The woman ___ wrote this article is a journalist.', b: 'who',
    e: '« who » est sujet du verbe « wrote » et renvoie à une personne.' },
  { p: 'The artist ___ work was censored left the country.', b: 'whose',
    e: '« whose » exprime l’appartenance : c’est le travail DE l’artiste.' },
  { p: 'The book ___ I read last week was fascinating.', b: 'which',
    e: '« which » renvoie à une chose et est complément. Ici, il pourrait même être effacé.' },
  { p: 'The man ___ I met at the conference is a bioethicist.', b: 'whom',
    e: '« whom » est complément et renvoie à une personne. C’est la forme soutenue, au programme en B1+.' },
  { p: 'The city ___ he was born has changed a lot.', b: 'where',
    e: '« where » renvoie à un lieu.' },
  { p: 'The year ___ the law was passed was 1972.', b: 'when',
    e: '« when » renvoie à un moment.' }
];

G('en-phrase', 'en-relatifs', 'Les pronoms relatifs', 'ent', function(){
  const x = R.pick(RELATIFS);
  const noms = ['who', 'whom', 'whose', 'which', 'where', 'when'];
  return {
    enonce: '<p>Complète avec le pronom relatif qui convient.</p>' +
            '<div class="form">' + x.p.replace('___', '<b>___</b>') + '</div>',
    qcm: { options: noms.slice(), bon: noms.indexOf(x.b) },
    etapes: [
      'Réponse : <b>' + x.b + '</b>.', x.e,
      'Le repère : <b>who</b> sujet pour une personne · <b>whom</b> complément pour une personne · ' +
        '<b>which</b> pour une chose · <b>whose</b> pour l’appartenance · <b>where</b> pour un lieu · ' +
        '<b>when</b> pour un moment.'
    ]
  };
});

/* ---------- connecteurs ---------- */
const CONNECTEURS = [
  { r: 'ajouter une idée', b: 'moreover', d: ['moreover', 'however', 'for instance', 'consequently'] },
  { r: 'opposer deux idées', b: 'however', d: ['however', 'moreover', 'therefore', 'namely'] },
  { r: 'donner un exemple', b: 'for instance', d: ['for instance', 'nevertheless', 'as a result', 'besides'] },
  { r: 'exprimer une conséquence', b: 'as a result', d: ['as a result', 'on the contrary', 'such as', 'furthermore'] },
  { r: 'conclure', b: 'to sum up', d: ['to sum up', 'for example', 'whereas', 'in addition'] },
  { r: 'marquer une concession', b: 'nevertheless', d: ['nevertheless', 'thus', 'namely', 'moreover'] },
  { r: 'dire « finalement »', b: 'eventually', d: ['eventually', 'actually', 'possibly', 'currently'] },
  { r: 'dire « en fait »', b: 'actually', d: ['actually', 'eventually', 'finally', 'presently'] }
];

G('en-phrase', 'en-connecteurs', 'Les connecteurs logiques', 'app', function(){
  const x = R.pick(CONNECTEURS);
  const opts = R.shuffle(x.d.slice());
  return {
    enonce: '<p>Quel connecteur emploie-t-on pour <b>' + x.r + '</b> ?</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: [
      'Réponse : <b>' + x.b + '</b>.',
      'Deux faux amis à ne jamais confondre : <b>eventually</b> signifie « finalement », ' +
        'et <b>actually</b> signifie « en fait », pas « actuellement ».',
      'Un connecteur en tête de paragraphe rend la structure visible immédiatement : c’est rentable en devoir.'
    ]
  };
});

/* ---------- phrasal verbs ---------- */
const PHRASAL = [
  { v: 'to give up', s: 'abandonner, renoncer' },
  { v: 'to look forward to', s: 'attendre avec impatience' },
  { v: 'to get by', s: 'se débrouiller, s’en sortir' },
  { v: 'to cheer up', s: 'remonter le moral' },
  { v: 'to figure out', s: 'comprendre, résoudre' },
  { v: 'to carry out', s: 'mener à bien, réaliser' },
  { v: 'to point out', s: 'souligner, faire remarquer' },
  { v: 'to bring about', s: 'provoquer, entraîner' },
  { v: 'to look into', s: 'examiner, enquêter sur' },
  { v: 'to put up with', s: 'supporter, tolérer' },
  { v: 'to come up with', s: 'trouver une idée, proposer' },
  { v: 'to turn down', s: 'refuser, rejeter' }
];

G('en-phrase', 'en-phrasal', 'Les phrasal verbs', 'app', function(){
  const x = R.pick(PHRASAL);
  return {
    enonce: '<p>Que signifie ce verbe à particule ?</p>' +
            '<div class="form"><b>' + x.v + '</b></div>',
    qcm: qcm4(x.s, PHRASAL.map(y => y.s)),
    etapes: [
      '<b>' + x.v + '</b> signifie « ' + x.s + ' ».',
      'Un phrasal verb a un sens que l’on ne devine pas à partir du verbe seul : il s’apprend en bloc.',
      'Le programme en attend « quelques-uns » au niveau B1 et « un large répertoire » au niveau B1+.'
    ]
  };
});

/* ---------- lexique des axes ---------- */
const LEXIQUE_EN = [
  { m: 'to grant citizenship', s: 'accorder la nationalité', ch: 'en-a1-identites' },
  { m: 'foreign-born', s: 'né à l’étranger', ch: 'en-a1-identites' },
  { m: 'asylum-seekers', s: 'demandeurs d’asile', ch: 'en-a1-identites' },
  { m: 'a lasting contribution', s: 'un apport durable', ch: 'en-a1-identites' },
  { m: 'push and pull factors', s: 'facteurs de départ et d’attraction', ch: 'en-a1-identites' },
  { m: 'upward mobility', s: 'ascension sociale', ch: 'en-a2-diversite' },
  { m: 'to perpetuate discrimination', s: 'perpétuer la discrimination', ch: 'en-a2-diversite' },
  { m: 'to overturn a law', s: 'annuler une loi', ch: 'en-a2-diversite' },
  { m: 'a dissenting vote', s: 'une opinion dissidente', ch: 'en-a2-diversite' },
  { m: 'to file a lawsuit', s: 'intenter un procès', ch: 'en-a2-diversite' },
  { m: 'to convey a message', s: 'transmettre un message', ch: 'en-a3-art' },
  { m: 'to expose injustice', s: 'dénoncer l’injustice', ch: 'en-a3-art' },
  { m: 'to debunk', s: 'démystifier, démonter une idée reçue', ch: 'en-a3-art' },
  { m: 'to portray', s: 'représenter, dépeindre', ch: 'en-a3-art' },
  { m: 'a knock-on effect', s: 'un effet en cascade', ch: 'en-a4-innovations' },
  { m: 'a deterrent', s: 'un moyen de dissuasion', ch: 'en-a4-innovations' },
  { m: 'to skyrocket', s: 'monter en flèche', ch: 'en-a4-innovations' },
  { m: 'to plummet', s: 'chuter brutalement', ch: 'en-a4-innovations' },
  { m: 'fossil fuels', s: 'les énergies fossiles', ch: 'en-a4-innovations' },
  { m: 'endangered species', s: 'espèces menacées', ch: 'en-a5-nature' },
  { m: 'wetlands', s: 'zones humides', ch: 'en-a5-nature' },
  { m: 'to alleviate', s: 'atténuer, soulager', ch: 'en-a5-nature' },
  { m: 'healthy habitats', s: 'des milieux naturels préservés', ch: 'en-a5-nature' },
  { m: 'to fall short of', s: 'ne pas être à la hauteur de', ch: 'en-a5-nature' }
];

['en-a1-identites', 'en-a2-diversite', 'en-a3-art', 'en-a4-innovations', 'en-a5-nature'].forEach(function(ch){
  G(ch, ch + '-lexique', 'Le lexique de l’axe', 'app', function(){
    const locaux = LEXIQUE_EN.filter(y => y.ch === ch);
    const x = R.pick(locaux);
    return {
      enonce: '<p>Que signifie cette expression, tirée du lexique officiel de l’axe ?</p>' +
              '<div class="form"><b>' + x.m + '</b></div>',
      qcm: qcm4(x.s, LEXIQUE_EN.map(y => y.s)),
      etapes: [
        '<b>' + x.m + '</b> signifie « ' + x.s + ' ».',
        'Ce lexique figure au programme officiel pour cet axe : le réutiliser en devoir est ce que le professeur cherche en priorité.'
      ]
    };
  });
});

/* ---------- les axes et le programme ---------- */
const AXES_EN = [
  { n: 'Identités et échanges', ch: 'en-a1-identites',
    o: ['Migrations et politiques d’accueil : le cas du Canada',
        'La Windrush generation et sa contribution à la société du Royaume-Uni',
        'Les frontières, lieux d’échanges ?'] },
  { n: 'Diversité et inclusion', ch: 'en-a2-diversite',
    o: ['Logement et mixité sociale', 'La Cour suprême des États-Unis : matrice d’inclusion et d’exclusion',
        'Représentation politique des Peuples premiers : intégration ou appropriation ?'] },
  { n: 'Art et pouvoir', ch: 'en-a3-art',
    o: ['L’art comme vecteur de résistance ou de reconnaissance',
        'S’engager dans la presse et les médias : dessins, caricatures et photojournalisme'] },
  { n: 'Innovations scientifiques et responsabilité', ch: 'en-a4-innovations',
    o: ['À qui appartient l’espace ?', 'Énergies d’hier et de demain : l’exemple de l’Écosse',
        'La science et la quête de l’homme parfait'] },
  { n: 'L’être humain et la nature', ch: 'en-a5-nature',
    o: ['Les parcs nationaux, outils de préservation de la nature',
        'L’homme face à la nature et aux évènements météorologiques',
        'La sacralisation de la nature dans l’art et dans la fiction'] },
  { n: 'Les aires anglophones américaines', ch: 'en-a6-ameriques',
    o: ['Les Caraïbes dans les Amériques et le monde', 'Porto Rico : le 51e État ?',
        'Vancouver et Seattle : regards croisés'] }
];

G('en-a6-ameriques', 'en-axes-objets', 'Relier un objet d’étude à son axe', 'app', function(){
  const a = R.pick(AXES_EN);
  const o = R.pick(a.o);
  return {
    enonce: '<p>À quel axe du programme de première se rattache cet objet d’étude ?</p>' +
            '<div class="form">' + o + '</div>',
    qcm: qcm4(a.n, AXES_EN.map(x => x.n)),
    etapes: [
      'Cet objet d’étude relève de l’axe <b>' + a.n + '</b>.',
      'Le programme impose de traiter <b>cinq axes sur six</b> dans l’année, ' +
        'dont obligatoirement l’<b>axe 6, les aires anglophones américaines</b>.'
    ]
  };
});

const PROG_EN = [
  { q: 'Combien d’axes le programme d’anglais de première comporte-t-il ?', b: 'Six',
    v: ['Quatre', 'Cinq', 'Six', 'Huit'] },
  { q: 'Combien d’axes doivent être traités dans l’année en voie générale ?', b: 'Cinq sur six, dont obligatoirement l’axe 6',
    v: ['Les six', 'Cinq sur six, dont obligatoirement l’axe 6', 'Trois au minimum', 'Quatre au choix'] },
  { q: 'Sur quelle aire géographique porte l’axe 6 en classe de première ?', b: 'Les aires anglophones américaines',
    v: ['Les aires anglophones américaines', 'Les pays du Commonwealth',
        'Le Royaume-Uni et ses nations', 'L’Australie et la Nouvelle-Zélande'] },
  { q: 'Quel niveau du CECRL est visé en fin de première en LVA ?', b: 'B1+',
    v: ['A2+', 'B1', 'B1+', 'B2'] },
  { q: 'Quel niveau est visé en fin de terminale en LVA ?', b: 'B2',
    v: ['B1', 'B1+', 'B2', 'C1'] },
  { q: 'Que signifie le signe « + » accolé à un niveau du CECRL ?', b: 'Le niveau supérieur est atteint dans au moins une des activités langagières',
    v: ['Le niveau supérieur est atteint dans au moins une des activités langagières',
        'Le niveau est dépassé dans toutes les activités', 'Le niveau est en cours d’acquisition',
        'Le niveau correspond à une option facultative'] },
  { q: 'Quel est l’horaire hebdomadaire de LVA et LVB en première générale ?', b: '4 h 30',
    v: ['3 h', '4 h', '4 h 30', '5 h 30'] }
];

G('en-comprehension', 'en-programme', 'Le programme et les niveaux', 'app', function(){
  const x = R.pick(PROG_EN);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Progression du lycée en LVA : seconde B1+, première B1+, terminale B2. ' +
               'En LVB : seconde A2+, première B1, terminale B1.']
  };
});

/* ---------- erreurs classiques ---------- */
const FAUTES_EN = [
  { f: 'She go to school every day.', c: 'She goes to school every day.',
    e: 'Le -s de la troisième personne du singulier au présent simple.' },
  { f: 'I live here since 2019.', c: 'I have lived here since 2019.',
    e: '« since » impose le present perfect, jamais le présent.' },
  { f: 'If it will rain, we will stay home.', c: 'If it rains, we will stay home.',
    e: 'Jamais « will » après « if » dans une hypothèse : présent après if, futur dans la principale.' },
  { f: 'They are very interesteds by this topic.', c: 'They are very interested in this topic.',
    e: 'Les adjectifs anglais sont invariables, et l’on dit « interested in », pas « interested by ».' },
  { f: 'He gave me an advice.', c: 'He gave me some advice.',
    e: '« advice » est indénombrable : ni article « an », ni pluriel.' },
  { f: 'I have 17 years old.', c: 'I am 17 years old.',
    e: 'L’âge s’exprime avec « be », pas avec « have ».' },
  { f: 'She explained me the rule.', c: 'She explained the rule to me.',
    e: '« explain » se construit avec « to » devant la personne.' },
  { f: 'It depends of the context.', c: 'It depends on the context.',
    e: '« to depend » se construit avec « on ».' }
];

G('en-expression', 'en-fautes', 'Corriger l’erreur', 'ent', function(){
  const x = R.pick(FAUTES_EN);
  const opts = R.shuffle([x.c].concat(autres(FAUTES_EN.map(y => y.c), x.c, 3)));
  return {
    enonce: '<p>Cette phrase contient une erreur. Quelle est la version correcte ?</p>' +
            '<div class="form">' + x.f + '</div>',
    qcm: { options: opts, bon: opts.indexOf(x.c) },
    etapes: ['Version correcte : <b>' + x.c + '</b>', x.e,
             'Ces erreurs reviennent dans presque toutes les copies : les connaître, c’est gagner des points sans effort.']
  };
});

/* ---------- accentuation ---------- */
const ACCENTS_EN = [
  { m: 'education', a: 3, n: 4, e: 'Les mots en -ion s’accentuent sur la syllabe qui précède le suffixe : e-du-CA-tion.' },
  { m: 'scientific', a: 3, n: 4, e: 'Les mots en -ic s’accentuent sur la syllabe qui précède le suffixe : sci-en-TI-fic.' },
  { m: 'photograph', a: 1, n: 3, e: 'PHO-to-graph, accent sur la première syllabe.' },
  { m: 'photography', a: 2, n: 4, e: 'pho-TO-gra-phy : l’ajout du suffixe -y déplace l’accent.' },
  { m: 'responsibility', a: 4, n: 6, e: 'Les mots en -ity s’accentuent sur la syllabe qui précède le suffixe : res-pon-si-BI-li-ty.' },
  { m: 'political', a: 2, n: 4, e: 'Les mots en -ical s’accentuent sur la syllabe qui précède le suffixe : po-LI-ti-cal.' }
];

G('en-phono', 'en-accent', 'L’accent de mot', 'ent', function(){
  const x = R.pick(ACCENTS_EN);
  return {
    enonce: '<p>Sur quelle syllabe tombe l’accent principal de ce mot ?</p>' +
            '<div class="form"><b>' + x.m + '</b><span class="form-leg">le mot compte ' + x.n + ' syllabes</span></div>',
    champs: [{ type: 'num', label: 'Numéro de la syllabe accentuée', bon: x.a, tol: 0 }],
    etapes: [
      'L’accent tombe sur la <b>syllabe ' + x.a + '</b>.', x.e,
      'Les règles utiles : les suffixes <b>-ion, -ic, -ical, -ity</b> attirent l’accent sur la syllabe ' +
        'qui les <b>précède</b>. Un mot mal accentué peut devenir incompréhensible, même bien prononcé.'
    ]
  };
});

/* ---------- exercices rédigés ---------- */

D('en-expression', 'en-essay', 'Rédiger un texte argumenté', function(){
  const sujets = [
    { s: 'Do national parks really protect nature, or do they turn it into a tourist product?', a: 'en-a5-nature' },
    { s: 'Has migration made the anglophone world richer? Discuss.', a: 'en-a1-identites' },
    { s: 'Can art change the way people see power?', a: 'en-a3-art' },
    { s: 'Should scientific progress always be allowed?', a: 'en-a4-innovations' },
    { s: 'Are courts better than parliaments at protecting minorities?', a: 'en-a2-diversite' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Essay question</b>, en lien avec l’axe « ' + CHAP[x.a].titre + ' » :</p>' +
            '<div class="form">' + x.s + '</div>' +
            '<p>Rédige sur ton cahier un texte argumenté d’environ <b>150 à 180 mots</b>.</p>',
    aide: 'Introduction courte, deux ou trois paragraphes portant chacun une idée et un exemple précis, ' +
          'puis une conclusion nuancée. Réutilise le lexique de l’axe.',
    bareme: [
      { pts: 2, d: '<b>Introduction</b> : la question est reformulée et l’angle annoncé, en deux phrases maximum. ' +
                   'Pas de « In this essay I will talk about ».' },
      { pts: 3, d: '<b>Un paragraphe = une idée</b>, annoncée dès la première phrase, puis développée. ' +
                   'Deux ou trois paragraphes.' },
      { pts: 3, d: '<b>Exemples précis</b> tirés de l’axe étudié : un pays, une œuvre, une loi, un évènement nommé. ' +
                   'Un exemple général ne compte pas.' },
      { pts: 2, d: '<b>Lexique de l’axe</b> réutilisé, au moins trois expressions du programme.' },
      { pts: 2, d: '<b>Connecteurs</b> variés et bien placés : however, moreover, as a result, on the other hand.' },
      { pts: 3, d: '<b>Variété des structures</b> : au moins une subordonnée relative, un modal, ' +
                   'et une hypothèse ou un comparatif.' },
      { pts: 3, d: '<b>Correction de la langue</b> : les -s de troisième personne, les temps, ' +
                   'les adjectifs invariables, les prépositions après les verbes.' },
      { pts: 2, d: '<b>Conclusion nuancée</b> qui répond vraiment à la question, sans répéter l’introduction.' },
      { pts: 0, d: '<span class="tiny">Zéro point, mais vérifie-le : as-tu employé un seul « will » après « if » ? ' +
                   'Si oui, corrige-le.</span>' }
    ]
  };
});

D('en-expression', 'en-oral', 'Préparer une prise de parole en continu', function(){
  const a = R.pick(AXES_EN);
  return {
    enonce: '<p>Tu dois présenter en anglais, pendant <b>deux à trois minutes</b>, une réflexion ' +
            'sur l’axe suivant :</p>' +
            '<div class="form">' + a.n + '</div>' +
            '<p>Prépare ta prise de parole au brouillon, puis dis-la à voix haute en te chronométrant.</p>',
    aide: 'Ne rédige pas : note des mots clés. Un oral lu s’entend immédiatement. ' +
          'Structure : annonce, deux idées avec exemples, conclusion.',
    bareme: [
      { pts: 2, d: '<b>Annonce</b> claire du sujet et de l’angle : <i>I would like to focus on…</i>' },
      { pts: 3, d: '<b>Deux idées distinctes</b>, chacune illustrée par un <b>exemple concret</b> ' +
                   'tiré des objets d’étude de l’axe.' },
      { pts: 2, d: '<b>Lexique de l’axe</b> employé naturellement, pas plaqué.' },
      { pts: 2, d: '<b>Nuance</b> : au moins un modal ou une formule de nuance ' +
                   '(<i>it might suggest</i>, <i>to a certain extent</i>).' },
      { pts: 2, d: '<b>Conclusion</b> qui ouvre ou qui tranche, pas une simple répétition.' },
      { pts: 3, d: '<b>Fluidité</b> : pas de lecture, des pauses au bon endroit, ' +
                   'et une reformulation plutôt qu’un blocage en cas de mot manquant.' },
      { pts: 3, d: '<b>Prononciation</b> : accent de mot respecté sur les mots longs, ' +
                   '/h/ prononcé, voyelles longues et courtes distinguées.' },
      { pts: 2, d: '<b>Durée</b> tenue : entre deux et trois minutes, chronomètre à l’appui.' },
      { pts: 1, d: '<b>Intonation</b> : montante en fin de question fermée, descendante en fin d’affirmation.' }
    ]
  };
});
