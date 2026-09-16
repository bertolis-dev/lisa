/* =========================================================================
   Générateurs d'exercices de spécialité SES.
   Les outils quantitatifs sont calculés exactement ; les notions sont
   vérifiées par des QCM tirés du programme.
   ========================================================================= */

/* ---------- outils quantitatifs ---------- */

G('ses-quanti', 'ses-taux', 'Taux de variation', 'app', function(){
  const vd = R.pick([50, 80, 120, 150, 200, 250, 400, 500, 1200, 2500]);
  const tv = R.pick([-40, -25, -20, -15, -10, -5, 5, 8, 10, 15, 20, 25, 50, 80]);
  const va = Math.round(vd * (1 + tv / 100) * 100) / 100;
  const cm = Math.round((1 + tv / 100) * 1000) / 1000;
  return {
    enonce: '<p>Une grandeur passe de <b>' + nf(vd) + '</b> à <b>' + nf(va) + '</b>.</p>' +
            '<p>Calcule le taux de variation en pourcentage, puis le coefficient multiplicateur.</p>',
    champs: [
      { type: 'num', label: 'Taux de variation (%)', bon: tv, tol: 0.4 },
      { type: 'num', label: 'Coefficient multiplicateur', bon: cm, tol: 0.006 }
    ],
    etapes: [
      formM('TV = frac{V_A - V_D}{V_D} × 100') + ' = (' + nf(va) + ' - ' + nf(vd) + ') ÷ ' + nf(vd) +
        ' × 100 ≈ <b>' + nf(tv) + ' %</b>.',
      formM('CM = frac{V_A}{V_D}') + ' = ' + nf(va) + ' ÷ ' + nf(vd) + ' ≈ <b>' + nf(cm) + '</b>.',
      'On vérifie : CM = 1 + TV/100 = 1 ' + (tv >= 0 ? '+ ' : '- ') + nf(Math.abs(tv) / 100) + ' = ' + nf(cm) + '.',
      'Phrase d’interprétation attendue : « cette grandeur a ' + (tv >= 0 ? 'augmenté' : 'diminué') +
        ' de ' + nf(Math.abs(tv)) + ' % sur la période ».'
    ]
  };
});

G('ses-quanti', 'ses-cumule', 'Taux de variation cumulé', 'ds', function(){
  const t1 = R.pick([-20, -10, -5, 5, 10, 15, 20, 25]);
  const t2 = R.pick([-20, -15, -10, -5, 5, 10, 20, 30]);
  const cm = (1 + t1 / 100) * (1 + t2 / 100);
  const tg = (cm - 1) * 100;
  const tgr = Math.round(tg * 100) / 100;
  const somme = t1 + t2;
  return {
    enonce: '<p>Une grandeur varie de <b>' + nf(t1) + ' %</b> la première année, ' +
            'puis de <b>' + nf(t2) + ' %</b> la seconde.</p>' +
            '<p>Quel est le taux de variation <b>global</b> sur les deux années, en pourcentage, ' +
            'arrondi au centième ?</p>',
    champs: [{ type: 'num', label: 'Taux global (%)', bon: tgr, tol: 0.15 }],
    etapes: [
      'Les taux de variation <b>ne s’additionnent pas</b> : on multiplie les coefficients.',
      'CM₁ = ' + nf(Math.round((1 + t1 / 100) * 1000) / 1000) + ' · CM₂ = ' +
        nf(Math.round((1 + t2 / 100) * 1000) / 1000) + '.',
      'CM global = ' + nf(Math.round((1 + t1 / 100) * 1000) / 1000) + ' × ' +
        nf(Math.round((1 + t2 / 100) * 1000) / 1000) + ' ≈ ' + nf(Math.round(cm * 10000) / 10000) + '.',
      'Taux global = (CM - 1) × 100 ≈ <b>' + nf(tgr) + ' %</b>.',
      'À comparer avec la somme naïve des deux taux, ' + nf(somme) + ' %, qui est <b>fausse</b>. ' +
        'L’écart vient de l’effet du second taux sur la valeur déjà modifiée.'
    ]
  };
});

G('ses-quanti', 'ses-indice', 'Indice base 100', 'ent', function(){
  const vd = R.pick([120, 150, 200, 240, 300, 450, 800]);
  const tv = R.pick([-30, -20, -12, -5, 6, 10, 18, 25, 40, 60]);
  const va = Math.round(vd * (1 + tv / 100) * 100) / 100;
  const ind = Math.round(va / vd * 100 * 10) / 10;
  return {
    enonce: '<p>Une grandeur vaut <b>' + nf(vd) + '</b> en année de base et <b>' + nf(va) + '</b> ' +
            'l’année étudiée.</p>' +
            '<p>Calcule l’indice de l’année étudiée, en base 100 à l’année de base, arrondi au dixième.</p>',
    champs: [{ type: 'num', label: 'Indice', bon: ind, tol: 0.3 }],
    etapes: [
      formM('@Indice = frac{V_A}{V_D} × 100') + ' = ' + nf(va) + ' ÷ ' + nf(vd) + ' × 100 ≈ <b>' + nf(ind) + '</b>.',
      'Lecture : un indice de ' + nf(ind) + ' signifie une ' + (ind >= 100 ? 'hausse' : 'baisse') +
        ' de ' + nf(Math.round(Math.abs(ind - 100) * 10) / 10) + ' % depuis l’année de base.',
      'L’indice est un <b>taux de variation déguisé</b> : indice - 100 donne directement ' +
        'le pourcentage de variation depuis la base.'
    ]
  };
});

G('ses-quanti', 'ses-points', 'Points ou pourcentage ?', 'ent', function(){
  const p1 = R.pick([5, 8, 10, 12, 15, 20, 25, 40]);
  const p2 = R.pick([6, 9, 12, 14, 18, 24, 30, 48]).valueOf();
  const pts = Math.round((p2 - p1) * 10) / 10;
  const pc = Math.round((p2 - p1) / p1 * 100 * 10) / 10;
  return {
    enonce: '<p>Le taux de chômage d’un pays passe de <b>' + nf(p1) + ' %</b> à <b>' + nf(p2) + ' %</b>.</p>' +
            '<p>Exprime cette évolution en <b>points de pourcentage</b>, puis en <b>pourcentage</b>.</p>',
    champs: [
      { type: 'num', label: 'Variation en points', bon: pts, tol: 0.15 },
      { type: 'num', label: 'Variation en pourcentage', bon: pc, tol: 0.4 }
    ],
    etapes: [
      'En <b>points</b>, on soustrait : ' + nf(p2) + ' - ' + nf(p1) + ' = <b>' + nf(pts) + ' points</b>.',
      'En <b>pourcentage</b>, on calcule un taux de variation : (' + nf(p2) + ' - ' + nf(p1) + ') ÷ ' +
        nf(p1) + ' × 100 ≈ <b>' + nf(pc) + ' %</b>.',
      'C’est l’erreur la plus fréquente de la discipline. Dire « le chômage a augmenté de ' + nf(pts) +
        ' % » est <b>faux</b> : il a augmenté de ' + nf(pts) + ' <b>points</b>, soit ' + nf(pc) + ' %.',
      'Règle : quand la grandeur est <b>déjà</b> un pourcentage, on parle en points pour la différence.'
    ]
  };
});

G('ses-quanti', 'ses-moyenne', 'Moyenne pondérée et médiane', 'ent', function(){
  const g = [
    { n: R.int(10, 60), v: R.int(1000, 1600) },
    { n: R.int(20, 80), v: R.int(1700, 2400) },
    { n: R.int(5, 30), v: R.int(2500, 4000) }
  ];
  const tot = g.reduce((s, x) => s + x.n, 0);
  const moy = g.reduce((s, x) => s + x.n * x.v, 0) / tot;
  const moyr = Math.round(moy * 100) / 100;
  const simple = Math.round(g.reduce((s, x) => s + x.v, 0) / 3 * 100) / 100;
  return {
    enonce: '<p>Dans une entreprise, les salaires mensuels se répartissent ainsi :</p>' +
            '<ul><li><b>' + g[0].n + '</b> salariés à <b>' + nf(g[0].v) + ' €</b></li>' +
            '<li><b>' + g[1].n + '</b> salariés à <b>' + nf(g[1].v) + ' €</b></li>' +
            '<li><b>' + g[2].n + '</b> salariés à <b>' + nf(g[2].v) + ' €</b></li></ul>' +
            '<p>Calcule le salaire moyen de l’entreprise, en euros, arrondi au centime.</p>',
    champs: [{ type: 'num', label: 'Salaire moyen (€)', bon: moyr, tol: Math.max(1, moyr * 0.005) }],
    etapes: [
      'Il faut une moyenne <b>pondérée</b> par les effectifs, et non la moyenne des trois valeurs.',
      'Masse salariale : ' + g.map(x => x.n + ' × ' + nf(x.v)).join(' + ') + ' = ' +
        nf(g.reduce((s, x) => s + x.n * x.v, 0)) + ' €.',
      'Effectif total : ' + g.map(x => x.n).join(' + ') + ' = ' + tot + ' salariés.',
      'Moyenne = ' + nf(g.reduce((s, x) => s + x.n * x.v, 0)) + ' ÷ ' + tot + ' ≈ <b>' + nf(moyr) + ' €</b>.',
      'La moyenne <b>simple</b> des trois valeurs donnerait ' + nf(simple) + ' €, ce qui est faux : ' +
        'elle donnerait le même poids à un groupe de ' + g[2].n + ' personnes et à un groupe de ' + g[1].n + '.',
      'Rappel : sur des revenus, la <b>médiane</b> est souvent plus parlante, car elle n’est pas ' +
        'tirée vers le haut par les valeurs extrêmes.'
    ]
  };
});

G('ses-financement', 'ses-taux-reel', 'Taux d’intérêt réel', 'ent', function(){
  const nom = R.pick([1, 1.5, 2, 2.5, 3, 4, 5, 6]);
  const inf = R.pick([0.5, 1, 1.5, 2, 3, 4, 5, 6]);
  const reel = Math.round((nom - inf) * 100) / 100;
  return {
    enonce: '<p>Un prêt est consenti à un taux d’intérêt <b>nominal de ' + nf(nom) + ' %</b>, ' +
            'dans une économie où l’inflation est de <b>' + nf(inf) + ' %</b>.</p>' +
            '<p>Quel est le taux d’intérêt <b>réel</b> approché, en pourcentage ?</p>',
    champs: [{ type: 'num', label: 'Taux réel (%)', bon: reel, tol: 0.15 }],
    etapes: [
      'Approximation au programme : taux réel ≈ taux nominal − taux d’inflation.',
      '= ' + nf(nom) + ' − ' + nf(inf) + ' = <b>' + nf(reel) + ' %</b>.',
      reel < 0 ? 'Le taux réel est <b>négatif</b> : le prêteur perd du pouvoir d’achat, ' +
                   'et l’emprunteur y gagne. Cela arrive réellement en période de forte inflation.'
               : 'Le taux réel est positif : le prêteur gagne effectivement du pouvoir d’achat.',
      'Distinguer <b>nominal</b> et <b>réel</b> est un objectif explicite du programme : ' +
        'un taux annoncé sans précision est toujours nominal.'
    ]
  };
});

/* ---------- notions d'économie ---------- */
const ECO_QCM = [
  { q: 'Que se passe-t-il si le prix est supérieur au prix d’équilibre ?', b: 'L’offre est excédentaire, ce qui pousse le prix à la baisse',
    v: ['L’offre est excédentaire, ce qui pousse le prix à la baisse', 'La demande est excédentaire, il y a pénurie',
        'Le marché reste à l’équilibre', 'Les quantités échangées augmentent'], ch: 'ses-marche' },
  { q: 'Qu’est-ce qui déplace la courbe de demande, plutôt que d’y faire glisser le point ?', b: 'Une variation du revenu ou des goûts des consommateurs',
    v: ['Une variation du revenu ou des goûts des consommateurs', 'Une variation du prix du bien',
        'Une variation des quantités échangées', 'Le passage à l’équilibre'], ch: 'ses-marche' },
  { q: 'Quel effet a un choc d’offre positif sur l’équilibre ?', b: 'Le prix baisse et les quantités augmentent',
    v: ['Le prix baisse et les quantités augmentent', 'Le prix et les quantités augmentent',
        'Le prix monte et les quantités baissent', 'Rien ne change'], ch: 'ses-marche' },
  { q: 'Qu’est-ce que le surplus du consommateur ?', b: 'La différence entre ce qu’il était prêt à payer et ce qu’il paie réellement',
    v: ['La différence entre ce qu’il était prêt à payer et ce qu’il paie réellement',
        'Le bénéfice réalisé par le producteur', 'La quantité achetée en trop',
        'La différence entre l’offre et la demande'], ch: 'ses-marche' },
  { q: 'Qu’est-ce qui caractérise un oligopole ?', b: 'Quelques offreurs dont les décisions sont interdépendantes',
    v: ['Quelques offreurs dont les décisions sont interdépendantes', 'Un seul offreur',
        'De nombreux offreurs preneurs de prix', 'Un seul demandeur'], ch: 'ses-imparfait' },
  { q: 'Que sanctionne la politique de la concurrence ?', b: 'Les ententes et les abus de position dominante',
    v: ['Les ententes et les abus de position dominante', 'Le simple fait d’être en monopole',
        'Les prix trop bas', 'La différenciation des produits'], ch: 'ses-imparfait' },
  { q: 'Une externalité négative conduit le marché à…', b: 'Produire trop, car le coût social dépasse le coût privé',
    v: ['Produire trop, car le coût social dépasse le coût privé', 'Produire trop peu',
        'Produire la quantité optimale', 'Cesser de produire'], ch: 'ses-defaillances' },
  { q: 'Quelles sont les deux propriétés d’un bien collectif pur ?', b: 'Non rival et non excluable',
    v: ['Non rival et non excluable', 'Rival et excluable', 'Non rival et excluable', 'Gratuit et illimité'], ch: 'ses-defaillances' },
  { q: 'Quand parle-t-on de sélection adverse ?', b: 'Quand l’asymétrie d’information existe avant la signature du contrat',
    v: ['Quand l’asymétrie d’information existe avant la signature du contrat',
        'Quand elle apparaît après la signature du contrat', 'Quand les deux parties sont également informées',
        'Quand le prix est trop élevé'], ch: 'ses-defaillances' },
  { q: 'Quand parle-t-on d’aléa moral ?', b: 'Quand le comportement change après la signature du contrat',
    v: ['Quand le comportement change après la signature du contrat',
        'Quand l’asymétrie existe avant le contrat', 'Quand le contrat est illégal',
        'Quand l’assureur ment à l’assuré'], ch: 'ses-defaillances' },
  { q: 'Qu’est-ce qu’une action ?', b: 'Un titre de propriété donnant droit à un dividende et à un droit de vote',
    v: ['Un titre de propriété donnant droit à un dividende et à un droit de vote',
        'Un titre de créance donnant droit à un intérêt', 'Un prêt bancaire',
        'Une part de l’épargne des ménages'], ch: 'ses-financement' },
  { q: 'Qu’est-ce qu’une obligation ?', b: 'Un titre de créance donnant droit à un intérêt et au remboursement',
    v: ['Un titre de créance donnant droit à un intérêt et au remboursement',
        'Un titre de propriété', 'Une action sans droit de vote', 'Un compte d’épargne'], ch: 'ses-financement' },
  { q: 'Qu’appelle-t-on financement externe indirect ?', b: 'Le financement par le crédit bancaire',
    v: ['Le financement par le crédit bancaire', 'Le financement par émission d’actions',
        'L’autofinancement', 'Le financement par émission d’obligations'], ch: 'ses-financement' }
];

['ses-marche', 'ses-imparfait', 'ses-defaillances', 'ses-financement'].forEach(function(ch){
  G(ch, ch + '-qcm', 'Les notions du chapitre', 'app', function(){
    const x = R.pick(ECO_QCM.filter(y => y.ch === ch));
    const opts = R.shuffle(x.v.slice());
    return {
      enonce: '<p>' + x.q + '</p>',
      qcm: { options: opts, bon: opts.indexOf(x.b) },
      etapes: ['Réponse : <b>' + x.b + '</b>.',
               'En SES, une définition juste vaut des points : le vocabulaire est évalué comme tel.']
    };
  });
});

/* ---------- notions de sociologie et science politique ---------- */
const SOCIO_QCM = [
  { q: 'Qu’est-ce que la socialisation primaire ?', b: 'Celle de l’enfance, la plus durable, portée par la famille, l’école et les pairs',
    v: ['Celle de l’enfance, la plus durable, portée par la famille, l’école et les pairs',
        'Celle de l’âge adulte, par le travail et le couple', 'La socialisation par les médias uniquement',
        'La socialisation qui échoue'], ch: 'ses-socialisation' },
  { q: 'Quelle est la différence entre une norme et une valeur ?', b: 'La valeur est un idéal, la norme est la règle de comportement qui en découle',
    v: ['La valeur est un idéal, la norme est la règle de comportement qui en découle',
        'La norme est un idéal, la valeur est une règle', 'Ce sont deux synonymes',
        'La valeur est juridique, la norme est morale'], ch: 'ses-socialisation' },
  { q: 'La socialisation est dite différenciée selon…', b: 'Le milieu social et le genre',
    v: ['Le milieu social et le genre', 'L’âge uniquement', 'La région de résidence uniquement',
        'Le niveau de revenu uniquement'], ch: 'ses-socialisation' },
  { q: 'Qu’est-ce que la solidarité organique chez Durkheim ?', b: 'Celle des sociétés modernes, fondée sur la complémentarité issue de la division du travail',
    v: ['Celle des sociétés modernes, fondée sur la complémentarité issue de la division du travail',
        'Celle des sociétés traditionnelles, fondée sur la similitude',
        'La solidarité entre membres d’une même famille', 'La protection sociale obligatoire'], ch: 'ses-liens' },
  { q: 'Qu’est-ce que la solidarité mécanique ?', b: 'Celle des sociétés traditionnelles, fondée sur la similitude des individus',
    v: ['Celle des sociétés traditionnelles, fondée sur la similitude des individus',
        'Celle des sociétés modernes, fondée sur l’interdépendance', 'La solidarité imposée par l’État',
        'La solidarité entre entreprises'], ch: 'ses-liens' },
  { q: 'Quelle est la différence entre déviance et délinquance ?', b: 'La déviance transgresse une norme sociale, la délinquance une norme juridique',
    v: ['La déviance transgresse une norme sociale, la délinquance une norme juridique',
        'La délinquance transgresse une norme sociale, la déviance une loi', 'Ce sont deux synonymes',
        'La déviance est toujours punie par la loi'], ch: 'ses-deviance' },
  { q: 'Que dit la théorie de l’étiquetage de Becker ?', b: 'C’est la réaction sociale qui fabrique le déviant, pas l’acte en lui-même',
    v: ['C’est la réaction sociale qui fabrique le déviant, pas l’acte en lui-même',
        'La déviance est innée', 'La déviance vient uniquement de la pauvreté',
        'Les normes sont les mêmes partout'], ch: 'ses-deviance' },
  { q: 'Qu’est-ce que le chiffre noir de la délinquance ?', b: 'Les faits réellement commis mais non déclarés, que révèlent les enquêtes de victimation',
    v: ['Les faits réellement commis mais non déclarés, que révèlent les enquêtes de victimation',
        'Le nombre de condamnations prononcées', 'Le nombre de plaintes déposées',
        'Le coût financier de la délinquance'], ch: 'ses-deviance' },
  { q: 'Qu’est-ce qui garantit la qualité d’un sondage ?', b: 'La représentativité de l’échantillon, pas sa taille',
    v: ['La représentativité de l’échantillon, pas sa taille', 'Le nombre de répondants, avant tout',
        'La notoriété de l’institut', 'La rapidité de la collecte'], ch: 'ses-opinion' },
  { q: 'Que critique Bourdieu à propos de l’opinion publique ?', b: 'Les trois postulats des sondages : que chacun ait une opinion, que toutes se valent, et qu’il y ait consensus sur les questions à poser',
    v: ['Les trois postulats des sondages : que chacun ait une opinion, que toutes se valent, et qu’il y ait consensus sur les questions à poser',
        'Que les sondeurs mentent délibérément', 'Que les échantillons soient trop petits',
        'Que les sondages coûtent trop cher'], ch: 'ses-opinion' }
];

['ses-socialisation', 'ses-liens', 'ses-deviance', 'ses-opinion'].forEach(function(ch){
  G(ch, ch + '-qcm', 'Les notions du chapitre', 'app', function(){
    const x = R.pick(SOCIO_QCM.filter(y => y.ch === ch));
    const opts = R.shuffle(x.v.slice());
    return {
      enonce: '<p>' + x.q + '</p>',
      qcm: { options: opts, bon: opts.indexOf(x.b) },
      etapes: ['Réponse : <b>' + x.b + '</b>.',
               'En sociologie, toute affirmation doit s’appuyer sur une <b>donnée</b> ou une <b>enquête</b>, ' +
                 'jamais sur une impression personnelle.']
    };
  });
});

const CROISES_QCM = [
  { q: 'Quelle est la différence entre logique d’assurance et logique d’assistance ?', b: 'L’assurance repose sur des cotisations préalables, l’assistance sur la solidarité sans cotisation',
    v: ['L’assurance repose sur des cotisations préalables, l’assistance sur la solidarité sans cotisation',
        'L’assistance repose sur des cotisations, l’assurance sur l’impôt', 'Ce sont deux synonymes',
        'L’assurance est publique, l’assistance est privée'], ch: 'ses-protection' },
  { q: 'Pourquoi rendre une assurance obligatoire ?', b: 'Pour éviter la sélection adverse, qui verrait seuls les plus exposés s’assurer',
    v: ['Pour éviter la sélection adverse, qui verrait seuls les plus exposés s’assurer',
        'Pour augmenter les recettes de l’État', 'Pour supprimer l’aléa moral',
        'Pour réduire le nombre de sinistres'], ch: 'ses-protection' },
  { q: 'À quoi servent les franchises dans un contrat d’assurance ?', b: 'À limiter l’aléa moral, en laissant une part du risque à l’assuré',
    v: ['À limiter l’aléa moral, en laissant une part du risque à l’assuré',
        'À limiter la sélection adverse', 'À augmenter le nombre d’assurés',
        'À simplifier la gestion administrative'], ch: 'ses-protection' },
  { q: 'Quels sont les trois modes de coordination dans une organisation ?', b: 'La hiérarchie, le marché et la coopération',
    v: ['La hiérarchie, le marché et la coopération', 'Le capital, le travail et la terre',
        'L’offre, la demande et le prix', 'L’État, les entreprises et les ménages'], ch: 'ses-entreprise' },
  { q: 'Quel principe distingue une coopérative d’une société par actions ?', b: 'Une personne, une voix, au lieu d’une action, une voix',
    v: ['Une personne, une voix, au lieu d’une action, une voix', 'L’absence de salariés',
        'L’absence de bénéfices', 'L’interdiction d’emprunter'], ch: 'ses-entreprise' }
];

['ses-protection', 'ses-entreprise'].forEach(function(ch){
  G(ch, ch + '-qcm', 'Les notions du chapitre', 'app', function(){
    const x = R.pick(CROISES_QCM.filter(y => y.ch === ch));
    const opts = R.shuffle(x.v.slice());
    return {
      enonce: '<p>' + x.q + '</p>',
      qcm: { options: opts, bon: opts.indexOf(x.b) },
      etapes: ['Réponse : <b>' + x.b + '</b>.',
               'Les regards croisés mobilisent <b>à la fois</b> l’économie et la sociologie : ' +
                 'le correcteur attend les deux approches.']
    };
  });
});

/* ---------- lecture de données ---------- */
G('ses-quanti', 'ses-lecture', 'Lire une donnée correctement', 'ent', function(){
  const cas = [
    { d: 'En 2023, en France, 38 % des cadres déclarent avoir lu au moins un livre par mois.',
      t: 'Une proportion', e: 'Un pourcentage de la population des cadres qui vérifie un critère.' },
    { d: 'En 2023, en France, les cadres représentent 22 % de la population active occupée.',
      t: 'Un pourcentage de répartition', e: 'La part d’un groupe dans un ensemble : la somme de tous les groupes fait 100 %.' },
    { d: 'Entre 2010 et 2023, le nombre de cadres a augmenté de 35 % en France.',
      t: 'Un taux de variation', e: 'Une évolution entre deux dates, exprimée en pourcentage.' },
    { d: 'En base 100 en 2010, l’indice du nombre de cadres atteint 135 en 2023 en France.',
      t: 'Un indice', e: 'Une évolution rapportée à 100 à la date de base : 135 signifie +35 %.' },
    { d: 'En 2023, en France, le salaire médian s’élève à 2 100 euros nets par mois.',
      t: 'Une médiane', e: 'La valeur qui partage la population en deux parts égales : ' +
        'la moitié gagne moins, la moitié gagne plus.' },
    { d: 'En 2023, en France, le salaire moyen s’élève à 2 600 euros nets par mois.',
      t: 'Une moyenne', e: 'La masse totale divisée par l’effectif. Elle est tirée vers le haut ' +
        'par les très hauts salaires : c’est pourquoi elle dépasse la médiane.' }
  ];
  const x = R.pick(cas);
  const noms = ['Une proportion', 'Un pourcentage de répartition', 'Un taux de variation',
                'Un indice', 'Une médiane', 'Une moyenne'];
  return {
    enonce: '<p>De quel type de donnée s’agit-il ?</p>' + cit(x.d),
    qcm: { options: noms.slice(), bon: noms.indexOf(x.t) },
    etapes: [
      'C’est <b>' + x.t.toLowerCase() + '</b>.', x.e,
      'Toute lecture de donnée doit préciser la <b>date</b>, le <b>lieu</b>, la <b>source</b> ' +
        'et l’<b>unité</b>. Une phrase sans ces éléments ne rapporte pas de point.'
    ]
  };
});

/* ---------- exercice rédigé ---------- */
D('ses-quanti', 'ses-ec3', 'Raisonnement s’appuyant sur un dossier documentaire', function(){
  const sujets = [
    { s: 'Vous montrerez que le marché peut être défaillant.', ch: 'ses-defaillances',
      a: 'externalités, biens collectifs, asymétries d’information',
      d: 'un tableau sur les émissions de CO₂, un texte sur le marché de l’occasion' },
    { s: 'Vous montrerez comment la socialisation contribue à expliquer les différences de comportement des individus.',
      ch: 'ses-socialisation', a: 'socialisation primaire et secondaire, socialisation différenciée selon le milieu social et le genre',
      d: 'un tableau sur les pratiques culturelles selon la catégorie sociale, un texte sur les jouets genrés' },
    { s: 'Vous montrerez que la mesure de la délinquance est délicate.', ch: 'ses-deviance',
      a: 'statistiques policières et judiciaires, enquêtes de victimation, chiffre noir',
      d: 'un graphique des plaintes enregistrées, un extrait d’enquête de victimation' },
    { s: 'Vous montrerez comment les entreprises sont gouvernées.', ch: 'ses-entreprise',
      a: 'parties prenantes, modes de coordination, conflits d’intérêts',
      d: 'un organigramme, un texte sur une coopérative' },
    { s: 'Vous montrerez que le pouvoir de marché limite la concurrence.', ch: 'ses-imparfait',
      a: 'concentration, barrières à l’entrée, différenciation, politique de la concurrence',
      d: 'un tableau de parts de marché, une décision d’autorité de la concurrence' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet de raisonnement</b>, en lien avec le chapitre « ' + CHAP[x.ch].titre + ' » :</p>' +
            form(x.s) +
            '<p>Sur ton cahier, rédige le devoir complet. Tu t’appuieras sur tes connaissances ' +
            'et sur les documents que tu aurais eus : ' + x.d + '.</p>',
    aide: 'Structure attendue : introduction courte, deux ou trois paragraphes argumentés, ' +
          'conclusion. Chaque paragraphe : une idée, un mécanisme expliqué, une donnée chiffrée lue correctement. ' +
          'Notions à mobiliser : ' + x.a + '.',
    bareme: [
      { pts: 2, d: '<b>Introduction</b> : le sujet est reformulé, les termes sont définis, ' +
                   'et le plan est annoncé. Trois à cinq lignes suffisent.' },
      { pts: 3, d: '<b>Deux ou trois paragraphes</b>, chacun portant <b>une seule idée</b>, ' +
                   'annoncée en première phrase.' },
      { pts: 4, d: '<b>Mécanismes expliqués</b>, et non simplement affirmés. ' +
                   'Le correcteur cherche les enchaînements de cause à effet, pas des définitions juxtaposées. ' +
                   'Notions attendues ici : ' + x.a + '.' },
      { pts: 3, d: '<b>Données chiffrées</b> mobilisées et <b>lues correctement</b> : date, lieu, source, unité, ' +
                   'et distinction entre points et pourcentage quand la grandeur est déjà un taux.' },
      { pts: 2, d: '<b>Vocabulaire</b> de la discipline employé à bon escient, sans contresens.' },
      { pts: 2, d: '<b>Exemples concrets</b> qui illustrent les mécanismes, pris dans l’actualité ' +
                   'ou dans les documents.' },
      { pts: 2, d: '<b>Conclusion</b> qui répond au sujet, sans introduire d’idée nouvelle.' },
      { pts: 2, d: '<b>Rédaction</b> : phrases complètes, connecteurs logiques, aucun style télégraphique ' +
                   'ni liste à puces.' }
    ]
  };
});
