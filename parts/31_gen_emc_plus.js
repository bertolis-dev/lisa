/* =========================================================================
   EMC : compléments d'exercices pour les chapitres qui en manquaient.
   ========================================================================= */

/* ---------- égalité femmes-hommes : les étapes juridiques ---------- */
const EGALITE_DATES = [
  { d: '1944', e: 'Les femmes obtiennent le droit de vote et d’éligibilité',
    p: 'Elles votent pour la première fois en 1945. La France est en retard sur beaucoup de démocraties.' },
  { d: '1965', e: 'Les femmes mariées peuvent travailler et ouvrir un compte bancaire sans l’accord de leur mari',
    p: 'Jusque-là, le Code civil de 1804 plaçait la femme mariée sous l’autorité de son époux.' },
  { d: '1972', e: 'Le principe « à travail égal, salaire égal » est inscrit dans la loi',
    p: 'Le principe est posé, mais les écarts de rémunération persistent : c’est l’écart entre le droit et les faits.' },
  { d: '1975', e: 'La loi Veil dépénalise l’interruption volontaire de grossesse',
    p: 'La liberté d’y recourir est entrée dans la Constitution en 2024.' },
  { d: '2000', e: 'La loi sur la parité impose l’égal accès aux mandats électoraux',
    p: 'Elle illustre ce que le programme appelle une « politique volontariste ».' },
  { d: '2024', e: 'La liberté de recourir à l’IVG entre dans la Constitution',
    p: 'La France est le premier pays à l’inscrire explicitement dans sa Constitution.' }
];

G('emc-egalite', 'emc-egalite-dates', 'Les étapes de l’égalité', 'app', function(){
  const x = R.pick(EGALITE_DATES);
  return {
    enonce: '<p>En quelle année cette avancée a-t-elle eu lieu ?</p>' + cit(x.e),
    qcm: qcm4(x.d, EGALITE_DATES.map(y => y.d)),
    etapes: ['<b>' + x.d + '</b> · ' + x.e + '.', x.p,
             'Le programme demande de <b>mettre en regard</b> l’évolution juridique et les données statistiques : ' +
               'une date seule ne suffit pas, il faut la confronter aux faits.']
  };
});

G('emc-egalite', 'emc-egalite-sens', 'Ce que change chaque loi', 'ent', function(){
  const x = R.pick(EGALITE_DATES);
  const faits = R.shuffle([x.e].concat(autres(EGALITE_DATES.map(y => y.e), x.e, 3)));
  return {
    enonce: '<p>Que s’est-il passé en <b>' + x.d + '</b> en matière d’égalité entre les femmes et les hommes ?</p>',
    qcm: { options: faits, bon: faits.indexOf(x.e) },
    etapes: ['<b>' + x.d + '</b> : ' + x.e + '.', x.p,
             'Le programme insiste : ce principe « transforme progressivement la société, ' +
               'tout en se heurtant à diverses formes de résistance ». Les deux moitiés comptent.']
  };
});

/* ---------- racisme : ce que la loi distingue ---------- */
const EXPRESSION_EMC = [
  { p: 'Exprimer publiquement une opinion politique minoritaire, même choquante.', t: 'Protégé par la liberté d’expression',
    e: 'L’opinion est libre, y compris lorsqu’elle dérange. C’est le principe de base.' },
  { p: 'Insulter une personne en raison de son origine.', t: 'Puni par la loi',
    e: 'L’injure à caractère raciste est réprimée, notamment depuis la loi Pleven du 1er juillet 1972.' },
  { p: 'Appeler publiquement à la violence contre un groupe en raison de sa religion.', t: 'Puni par la loi',
    e: 'C’est la provocation à la haine ou à la violence, réprimée plus sévèrement que l’injure.' },
  { p: 'Nier publiquement l’existence de la Shoah.', t: 'Puni par la loi',
    e: 'C’est la contestation d’un crime contre l’humanité, réprimée par la loi Gayssot du 13 juillet 1990.' },
  { p: 'Critiquer une religion ou ses dogmes.', t: 'Protégé par la liberté d’expression',
    e: 'La critique des idées et des croyances est libre. Ce qui est puni, c’est l’attaque contre les <b>personnes</b> ' +
       'en raison de leur appartenance.' },
  { p: 'Harceler en ligne une personne en raison de son orientation sexuelle.', t: 'Puni par la loi',
    e: 'La loi du 30 décembre 2004 a étendu la répression aux propos fondés sur le sexe, ' +
       'l’orientation sexuelle et le handicap.' }
];

G('emc-racisme', 'emc-expression', 'Liberté d’expression : où est la limite ?', 'ent', function(){
  const x = R.pick(EXPRESSION_EMC);
  const noms = ['Protégé par la liberté d’expression', 'Puni par la loi'];
  return {
    enonce: '<p>Ce comportement relève-t-il de la liberté d’expression, ou est-il puni par la loi ?</p>' + cit(x.p),
    qcm: { options: noms.slice(), bon: noms.indexOf(x.t) },
    etapes: [
      'Réponse : <b>' + x.t.toLowerCase() + '</b>.', x.e,
      'La ligne de partage : on peut <b>critiquer des idées</b>, on ne peut pas <b>attaquer des personnes</b> ' +
        'en raison de ce qu’elles sont. Le racisme n’est pas une opinion, c’est un délit.'
    ]
  };
});

/* ---------- une synthèse de niveau devoir ---------- */
G('emc-debat', 'emc-synthese', 'Situer une notion complètement', 'ds', function(){
  const x = R.pick(NOTIONS_EMC);
  const parties = ['Les valeurs de la République et la cohésion sociale', 'La République et la Nation'];
  const bloc = CHAP[x.ch].bloc === 'emc-valeurs' ? parties[0] : parties[1];
  const titres = R.shuffle([CHAP[x.ch].titre].concat(
    autres(CHAPITRES.filter(c => c.matiere === 'emc').map(c => c.titre), CHAP[x.ch].titre, 3)));
  const defs = R.shuffle([x.d].concat(autres(NOTIONS_EMC.map(y => y.d), x.d, 3)));
  return {
    enonce: '<p>Situe cette notion dans le programme, comme on te le demandera en devoir.</p>' +
            '<div class="form"><b>' + x.n + '</b></div>' +
            '<p class="tiny">Trois réponses : sa définition, son chapitre, et la partie du programme dont elle relève.</p>',
    champs: [
      { type: 'choix', label: 'Définition', options: defs, bon: defs.indexOf(x.d) },
      { type: 'choix', label: 'Chapitre', options: titres, bon: titres.indexOf(CHAP[x.ch].titre) },
      { type: 'choix', label: 'Partie du programme', options: parties.slice(), bon: parties.indexOf(bloc) }
    ],
    etapes: [
      '<b>' + x.n + '</b> : ' + x.d + '.',
      'Chapitre : <b>' + CHAP[x.ch].titre + '</b>, dans la partie « ' + bloc + ' ».',
      'Le programme de première s’intitule « Cohésion et diversité dans une société démocratique » ' +
        'et comporte deux parties de neuf heures chacune.'
    ]
  };
});
