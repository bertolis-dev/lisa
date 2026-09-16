/* =========================================================================
   Générateurs d'exercices d'histoire-géographie.
   Les repères, les notions et les méthodes se corrigent automatiquement.
   La composition, l'analyse de document et le croquis passent par le
   barème auto-évalué, comme les démonstrations de maths.
   ========================================================================= */

/* ---------- repères chronologiques ---------- */
const DATES_HG = [
  { d: '1789', e: 'Déclaration des droits de l’homme et du citoyen', an: 1789, ch: 'hg-h1-revolution' },
  { d: '21 janvier 1793', e: 'Exécution de Louis XVI', an: 1793, ch: 'hg-h1-revolution' },
  { d: '1804', e: 'Le Code civil et le sacre de Napoléon Ier', an: 1804, ch: 'hg-h1-revolution' },
  { d: '1815', e: 'Le congrès de Vienne redessine l’Europe', an: 1815, ch: 'hg-h1-restauration' },
  { d: '1822', e: 'Le massacre de Chios', an: 1822, ch: 'hg-h1-restauration' },
  { d: '1830', e: 'Les Trois Glorieuses et le début de la monarchie de Juillet', an: 1830, ch: 'hg-h1-restauration' },
  { d: '1848', e: 'Le printemps des peuples et la Deuxième République', an: 1848, ch: 'hg-h2-democratie' },
  { d: '27 avril 1848', e: 'L’abolition de l’esclavage dans les colonies françaises', an: 1848, ch: 'hg-h2-democratie' },
  { d: '2 décembre 1851', e: 'Le coup d’État de Louis-Napoléon Bonaparte', an: 1851, ch: 'hg-h2-democratie' },
  { d: '1852', e: 'La proclamation du Second Empire', an: 1852, ch: 'hg-h2-democratie' },
  { d: '25 mai 1864', e: 'La reconnaissance du droit de grève', an: 1864, ch: 'hg-h2-industrialisation' },
  { d: '1884', e: 'La loi Waldeck-Rousseau autorise les syndicats', an: 1884, ch: 'hg-h2-industrialisation' },
  { d: '1860', e: 'Le rattachement de Nice et de la Savoie à la France', an: 1860, ch: 'hg-h2-nations' },
  { d: '4 septembre 1870', e: 'La chute du Second Empire et la proclamation de la République', an: 1870, ch: 'hg-h2-nations' },
  { d: '18 janvier 1871', e: 'La proclamation de l’Empire allemand à Versailles', an: 1871, ch: 'hg-h2-nations' },
  { d: '1871', e: 'La Commune de Paris', an: 1871, ch: 'hg-h3-republique' },
  { d: '1875', e: 'Les lois constitutionnelles fondant la Troisième République', an: 1875, ch: 'hg-h3-republique' },
  { d: '1881-1882', e: 'Les lois Ferry : école gratuite, laïque et obligatoire', ch: 'hg-h3-republique' },
  { d: '1885', e: 'Les funérailles nationales de Victor Hugo', an: 1885, ch: 'hg-h3-republique' },
  { d: '9 décembre 1905', e: 'La loi de séparation des Églises et de l’État', an: 1905, ch: 'hg-h3-republique' },
  { d: '1er mai 1891', e: 'La fusillade de Fourmies', an: 1891, ch: 'hg-h3-societe' },
  { d: '1889', e: 'L’Exposition universelle de Paris et la tour Eiffel', an: 1889, ch: 'hg-h3-societe' },
  { d: '1830-1847', e: 'La conquête de l’Algérie', ch: 'hg-h3-colonies' },
  { d: '1887', e: 'Le code de l’indigénat est généralisé aux colonies françaises', an: 1887, ch: 'hg-h3-colonies' },
  { d: '1898', e: 'La crise de Fachoda, le choc des impérialismes', an: 1898, ch: 'hg-h3-colonies' },
  { d: '28 juin 1914', e: 'L’attentat de Sarajevo', an: 1914, ch: 'hg-h4-embrasement' },
  { d: 'septembre 1914', e: 'La bataille de la Marne, échec de la guerre de mouvement', an: 1914, ch: 'hg-h4-embrasement' },
  { d: '1916', e: 'Les batailles de Verdun et de la Somme', an: 1916, ch: 'hg-h4-embrasement' },
  { d: '11 novembre 1918', e: 'L’armistice de Rethondes', an: 1918, ch: 'hg-h4-embrasement' },
  { d: '24 mai 1915', e: 'La déclaration de la Triple Entente sur les crimes contre l’humanité commis contre les Arméniens', an: 1915, ch: 'hg-h4-societes' },
  { d: '1917', e: 'Les grèves en France et les révolutions russes', an: 1917, ch: 'hg-h4-societes' },
  { d: '28 juin 1919', e: 'La signature du traité de Versailles', an: 1919, ch: 'hg-h4-sortir' },
  { d: '1920', e: 'La Société des Nations et le soldat inconnu', an: 1920, ch: 'hg-h4-sortir' },
  { d: '1922', e: 'Le passeport Nansen et le statut des apatrides', an: 1922, ch: 'hg-h4-sortir' }
];

G('hg-reperes', 'hgr-date-event', 'De la date à l’événement', 'app', function(){
  const x = R.pick(DATES_HG);
  return {
    enonce: '<p>Que s’est-il passé en <b>' + x.d + '</b> ?</p>',
    qcm: qcm4(x.e, DATES_HG.map(y => y.e)),
    etapes: [
      '<b>' + x.d + '</b> : ' + x.e + '.',
      'Ce repère appartient au chapitre « ' + CHAP[x.ch].titre + ' ».'
    ]
  };
});

G('hg-reperes', 'hgr-event-date', 'De l’événement à l’année', 'ent', function(){
  const pool = DATES_HG.filter(y => y.an);
  const x = R.pick(pool);
  return {
    enonce: '<p>En quelle année cet événement a-t-il eu lieu ?</p>' + cit(x.e),
    champs: [{ type: 'num', label: 'Année', bon: x.an, tol: 0 }],
    etapes: [
      'Réponse : <b>' + x.an + '</b>. Repère complet : ' + x.d + '.',
      'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ».',
      'Une date isolée s’oublie. Retiens-la avec son sens : ' + x.d + ', c’est ' + x.e.charAt(0).toLowerCase() + x.e.slice(1) + '.'
    ]
  };
});

const REGIMES = [
  { a: 1791, r: 'Monarchie constitutionnelle', e: 'La Constitution de 1791 fait du roi le chef du pouvoir exécutif, sous une assemblée élue.' },
  { a: 1795, r: 'Première République', e: 'Après la Convention, le Directoire gouverne : la République est proclamée depuis 1792.' },
  { a: 1800, r: 'Première République', e: 'Le Consulat conserve officiellement la République, même si Bonaparte y exerce un pouvoir personnel.' },
  { a: 1810, r: 'Premier Empire', e: 'Napoléon Ier règne depuis 1804.' },
  { a: 1820, r: 'Restauration', e: 'Louis XVIII règne sous le régime de la Charte de 1814.' },
  { a: 1825, r: 'Restauration', e: 'Charles X a succédé à Louis XVIII en 1824.' },
  { a: 1835, r: 'Monarchie de Juillet', e: 'Louis-Philippe règne depuis les Trois Glorieuses de 1830.' },
  { a: 1845, r: 'Monarchie de Juillet', e: 'Le suffrage reste censitaire jusqu’à la révolution de 1848.' },
  { a: 1850, r: 'Deuxième République', e: 'Proclamée en février 1848, elle dure jusqu’au Second Empire en 1852.' },
  { a: 1860, r: 'Second Empire', e: 'Napoléon III règne depuis 1852, avec un suffrage universel masculin.' },
  { a: 1865, r: 'Second Empire', e: 'C’est la période de l’Empire libéral et des grands travaux.' },
  { a: 1880, r: 'Troisième République', e: 'Les lois constitutionnelles de 1875 l’ont fondée.' },
  { a: 1890, r: 'Troisième République', e: 'C’est la période de l’enracinement républicain et de l’expansion coloniale.' },
  { a: 1910, r: 'Troisième République', e: 'Le régime durera jusqu’en 1940.' }
];
const NOMS_REGIMES = ['Monarchie constitutionnelle', 'Première République', 'Premier Empire',
                      'Restauration', 'Monarchie de Juillet', 'Deuxième République',
                      'Second Empire', 'Troisième République'];

G('hg-reperes', 'hgr-regime', 'Quel régime, quelle année ?', 'app', function(){
  const x = R.pick(REGIMES);
  return {
    enonce: '<p>Quel régime politique gouverne la France en <b>' + x.a + '</b> ?</p>',
    qcm: qcm4(x.r, NOMS_REGIMES),
    etapes: [
      'En ' + x.a + ', c’est <b>' + x.r.toLowerCase() + '</b>.', x.e,
      'Sept régimes se succèdent entre 1789 et 1870 : c’est cette instabilité que raconte le programme.'
    ]
  };
});

G('hg-reperes', 'hgr-ordre', 'Remettre dans l’ordre', 'ent', function(){
  const pool = DATES_HG.filter(y => y.an);
  let t = [];
  while (t.length < 3){
    const c = R.pick(pool);
    if (!t.some(x => x.an === c.an || x.e === c.e)) t.push(c);
  }
  const tri = t.slice().sort((a, b) => a.an - b.an);
  const aff = R.shuffle(t);
  const opts = tri.map(x => x.e);
  return {
    enonce: '<p>Voici trois événements, dans le désordre :</p>' +
            '<ul>' + aff.map(x => '<li>' + x.e + '</li>').join('') + '</ul>' +
            '<p>Lequel vient <b>en premier</b>, et lequel vient <b>en dernier</b> ?</p>',
    champs: [
      { type: 'choix', label: 'Le premier', options: opts.slice(), bon: 0 },
      { type: 'choix', label: 'Le dernier', options: opts.slice(), bon: 2 }
    ],
    etapes: [
      'L’ordre chronologique est : ' + tri.map(x => '<b>' + x.an + '</b> ' + x.e).join(' → ') + '.',
      'Savoir ordonner, c’est la capacité « identifier les continuités et les ruptures chronologiques » du programme.'
    ]
  };
});

const ACTEURS_HG = [
  { n: 'Madame Roland', r: 'Figure girondine de la Révolution française, guillotinée en 1793', ch: 'hg-h1-revolution' },
  { n: 'Metternich', r: 'Chancelier autrichien, maître d’œuvre du congrès de Vienne en 1815', ch: 'hg-h1-restauration' },
  { n: 'Giuseppe Mazzini', r: 'Fondateur de la Jeune-Italie, militant de l’unité italienne', ch: 'hg-h1-restauration' },
  { n: 'Alphonse de Lamartine', r: 'Poète et homme politique, figure de la Deuxième République en 1848', ch: 'hg-h2-democratie' },
  { n: 'George Sand', r: 'Femme de lettres engagée en politique en 1848', ch: 'hg-h2-democratie' },
  { n: 'Louis-Napoléon Bonaparte', r: 'Premier président de la République, puis empereur sous le nom de Napoléon III', ch: 'hg-h2-democratie' },
  { n: 'Le baron Haussmann', r: 'Préfet qui transforme Paris sous le Second Empire', ch: 'hg-h2-industrialisation' },
  { n: 'Les frères Pereire', r: 'Banquiers, acteurs de la modernisation économique du Second Empire', ch: 'hg-h2-industrialisation' },
  { n: 'Otto von Bismarck', r: 'Chancelier prussien, artisan de l’unité allemande proclamée en 1871', ch: 'hg-h2-nations' },
  { n: 'Louise Michel', r: 'Institutrice et militante, figure de la Commune de Paris en 1871', ch: 'hg-h3-republique' },
  { n: 'Victor Hugo', r: 'Écrivain proscrit sous le Second Empire, honoré de funérailles nationales en 1885', ch: 'hg-h3-republique' },
  { n: 'Jules Ferry', r: 'Ministre des lois scolaires, défenseur de l’expansion coloniale', ch: 'hg-h3-colonies' },
  { n: 'Georges Clemenceau', r: 'Adversaire de la colonisation en 1885, puis chef du gouvernement pendant la Grande Guerre', ch: 'hg-h3-colonies' },
  { n: 'Marie Curie', r: 'Scientifique qui met la radiologie au service des blessés pendant la guerre', ch: 'hg-h4-societes' },
  { n: 'Woodrow Wilson', r: 'Président des États-Unis, auteur des quatorze points et inspirateur de la Société des Nations', ch: 'hg-h4-sortir' },
  { n: 'Fridtjof Nansen', r: 'Haut-commissaire aux réfugiés, à l’origine du passeport qui porte son nom en 1922', ch: 'hg-h4-sortir' }
];

G('hg-reperes', 'hgr-acteur', 'Qui est-ce ?', 'app', function(){
  const x = R.pick(ACTEURS_HG);
  return {
    enonce: '<p>De quel acteur du programme s’agit-il ?</p>' + cit(x.r),
    qcm: qcm4(x.n, ACTEURS_HG.map(y => y.n)),
    etapes: ['Il s’agit de <b>' + x.n + '</b>.', 'Chapitre concerné : « ' + CHAP[x.ch].titre + ' ».']
  };
});

/* ---------- un exercice de repères propre à chaque chapitre d'histoire ---------- */
['hg-h1-revolution', 'hg-h1-restauration', 'hg-h2-democratie', 'hg-h2-industrialisation',
 'hg-h2-nations', 'hg-h3-republique', 'hg-h3-societe', 'hg-h3-colonies',
 'hg-h4-embrasement', 'hg-h4-societes', 'hg-h4-sortir'].forEach(function(ch){
  G(ch, ch + '-reperes', 'Les repères du chapitre', 'app', function(){
    const locales = DATES_HG.filter(y => y.ch === ch);
    const x = R.pick(locales);
    return {
      enonce: '<p>Dans ce chapitre, à quoi correspond la date <b>' + x.d + '</b> ?</p>',
      qcm: qcm4(x.e, DATES_HG.map(y => y.e)),
      etapes: ['<b>' + x.d + '</b> : ' + x.e + '.',
               'Les autres repères du chapitre : ' + locales.filter(y => y !== x).map(y => y.d).join(', ') + '.']
    };
  });
});

/* ---------- points de passage et d'ouverture ---------- */
const PPO_HG = [
  { p: 'Le procès et la mort de Louis XVI', ch: 'hg-h1-revolution' },
  { p: 'Le Code civil de 1804', ch: 'hg-h1-revolution' },
  { p: 'Metternich et le congrès de Vienne', ch: 'hg-h1-restauration' },
  { p: 'Le massacre de Chios', ch: 'hg-h1-restauration' },
  { p: 'Les Trois Glorieuses', ch: 'hg-h1-restauration' },
  { p: 'Louis-Napoléon Bonaparte, premier président de la République', ch: 'hg-h2-democratie' },
  { p: 'Paris haussmannien, la transformation d’une ville', ch: 'hg-h2-industrialisation' },
  { p: 'Le droit de grève de 1864', ch: 'hg-h2-industrialisation' },
  { p: 'Bismarck et la proclamation du Reich', ch: 'hg-h2-nations' },
  { p: 'Louise Michel pendant la Commune de Paris', ch: 'hg-h3-republique' },
  { p: 'Les funérailles nationales de Victor Hugo', ch: 'hg-h3-republique' },
  { p: 'La loi de séparation des Églises et de l’État', ch: 'hg-h3-republique' },
  { p: 'La fusillade de Fourmies', ch: 'hg-h3-societe' },
  { p: 'Le Creusot et la famille Schneider', ch: 'hg-h3-societe' },
  { p: 'Le code de l’indigénat', ch: 'hg-h3-colonies' },
  { p: 'Fachoda, le choc des impérialismes', ch: 'hg-h3-colonies' },
  { p: 'Saigon, ville coloniale', ch: 'hg-h3-colonies' },
  { p: 'L’offensive des Dardanelles', ch: 'hg-h4-embrasement' },
  { p: 'La bataille de la Somme', ch: 'hg-h4-embrasement' },
  { p: 'Marie Curie dans la guerre', ch: 'hg-h4-societes' },
  { p: 'Les grèves de l’année 1917', ch: 'hg-h4-societes' },
  { p: 'Les traités de paix', ch: 'hg-h4-sortir' },
  { p: 'Le soldat inconnu et les enjeux mémoriels', ch: 'hg-h4-sortir' },
  { p: 'Le passeport Nansen et le statut des apatrides', ch: 'hg-h4-sortir' }
];
const TITRES_HG_H = ['hg-h1-revolution', 'hg-h1-restauration', 'hg-h2-democratie', 'hg-h2-industrialisation',
  'hg-h2-nations', 'hg-h3-republique', 'hg-h3-societe', 'hg-h3-colonies',
  'hg-h4-embrasement', 'hg-h4-societes', 'hg-h4-sortir'];

G('hg-reperes', 'hgr-ppo', 'Situer un point de passage', 'ent', function(){
  const x = R.pick(PPO_HG);
  const bon = CHAP[x.ch].titre;
  return {
    enonce: '<p>À quel chapitre du programme se rattache ce point de passage et d’ouverture ?</p>' + cit(x.p),
    qcm: qcm4(bon, TITRES_HG_H.map(c => CHAP[c].titre)),
    etapes: [
      '« ' + x.p + '» appartient au chapitre <b>' + bon + '</b>.',
      'Les points de passage sont les moments que le programme demande d’étudier en détail : ' +
        'ce sont eux qui fournissent les documents des devoirs.'
    ]
  };
});

/* ---------- notions de géographie ---------- */
const NOTIONS_GEO = [
  { n: 'Métropolisation', d: 'la concentration des populations, des activités et des fonctions de commandement dans quelques grandes villes', ch: 'hg-g1-metropolisation' },
  { n: 'Urbanisation', d: 'l’augmentation de la part de la population qui vit en ville', ch: 'hg-g1-metropolisation' },
  { n: 'Centralité', d: 'la capacité d’un lieu à polariser et à attirer les hommes et les activités', ch: 'hg-g1-metropolisation' },
  { n: 'Ville primatiale', d: 'une ville dont le poids est très supérieur à celui de toutes les autres villes du pays', ch: 'hg-g1-metropolisation' },
  { n: 'Étalement urbain', d: 'l’extension spatiale de la ville vers ses périphéries', ch: 'hg-g1-metropolisation' },
  { n: 'Espace productif', d: 'un espace aménagé et organisé pour produire des biens ou des services', ch: 'hg-g2-production' },
  { n: 'Système productif', d: 'l’ensemble des acteurs, des lieux et des relations qui concourent à une production', ch: 'hg-g2-production' },
  { n: 'Chaîne de la valeur ajoutée', d: 'la suite des étapes qui, de la conception à la vente, ajoutent chacune de la valeur au produit', ch: 'hg-g2-production' },
  { n: 'Entreprise multinationale', d: 'une entreprise implantée dans plusieurs pays, qui organise la production à l’échelle mondiale', ch: 'hg-g2-production' },
  { n: 'Littoralisation', d: 'la concentration des hommes et des activités sur les littoraux, au contact des grands ports', ch: 'hg-g2-production' },
  { n: 'Flux', d: 'la circulation de marchandises, de capitaux, d’informations ou de personnes entre des lieux', ch: 'hg-g2-production' },
  { n: 'Multifonctionnalité', d: 'le fait qu’un même espace remplisse plusieurs fonctions à la fois, agricole, résidentielle, touristique ou environnementale', ch: 'hg-g3-ruraux' },
  { n: 'Fragmentation', d: 'la division d’un espace en portions aux dynamiques opposées, certaines attractives, d’autres à l’écart', ch: 'hg-g3-ruraux' },
  { n: 'Périurbanisation', d: 'l’installation de citadins dans les campagnes proches des villes', ch: 'hg-g3-ruraux' },
  { n: 'Conflit d’usage', d: 'l’opposition entre des acteurs qui veulent utiliser différemment le même espace', ch: 'hg-g3-ruraux' },
  { n: 'Recomposition', d: 'la réorganisation d’un espace sous l’effet de mutations économiques, sociales ou environnementales', ch: 'hg-g4-chine' }
];

/* une révision de notions par thème, avec les notions de ce thème */
[['hg-g1-metropolisation', 'Les notions de la métropolisation'],
 ['hg-g2-production',      'Les notions de la production'],
 ['hg-g3-ruraux',          'Les notions des espaces ruraux']].forEach(function(t){
  G(t[0], t[0] + '-notions', t[1], 'app', function(){
    const locales = NOTIONS_GEO.filter(y => y.ch === t[0]);
    const x = R.pick(locales);
    return {
      enonce: '<p>Quelle notion de ce thème désigne <b>' + x.d + '</b> ?</p>',
      qcm: qcm4(x.n, NOTIONS_GEO.map(y => y.n)),
      etapes: [
        'C’est la <b>' + x.n.toLowerCase() + '</b> : ' + x.d + '.',
        'Les autres notions du thème : ' + locales.filter(y => y !== x).map(y => y.n.toLowerCase()).join(', ') + '.',
        'Le programme demande explicitement d’employer ces notions à bon escient : c’est une capacité évaluée.'
      ]
    };
  });
});

/* révision générale des notions, dans le thème conclusif */
G('hg-g4-chine', 'hgg-definition', 'Toutes les notions de l’année', 'ent', function(){
  const x = R.pick(NOTIONS_GEO);
  const defs = R.shuffle([x.d].concat(autres(NOTIONS_GEO.map(y => y.d), x.d, 3)));
  return {
    enonce: '<p>Que désigne exactement la notion de <b>' + x.n.toLowerCase() + '</b> ?</p>',
    qcm: { options: defs, bon: defs.indexOf(x.d) },
    etapes: [
      '<b>' + x.n + '</b> : ' + x.d + '.',
      'Notion travaillée dans le thème « ' + CHAP[x.ch].titre + ' ».',
      'Piège classique du thème 1 : l’<b>urbanisation</b> compte les citadins, ' +
        'la <b>métropolisation</b> concentre le pouvoir. Ce ne sont pas les mêmes processus.'
    ]
  };
});

const CAS_GEO = [
  { c: 'Londres : une métropole de rang mondial', t: 'hg-g1-metropolisation' },
  { c: 'Mumbai : une métropole fragmentée', t: 'hg-g1-metropolisation' },
  { c: 'La métropolisation au Brésil : dynamiques et contrastes', t: 'hg-g1-metropolisation' },
  { c: 'La mégalopole du Nord-Est des États-Unis, de Boston à Washington', t: 'hg-g1-metropolisation' },
  { c: 'Singapour : l’articulation de la finance, de la production et des flux', t: 'hg-g2-production' },
  { c: 'La Silicon Valley : un espace productif intégré', t: 'hg-g2-production' },
  { c: 'Les industries aéronautique et aérospatiale européennes : une production en réseau', t: 'hg-g2-production' },
  { c: 'Les investissements chinois en Afrique', t: 'hg-g2-production' },
  { c: 'Les mutations des espaces ruraux de Toscane', t: 'hg-g3-ruraux' },
  { c: 'Mutations agricoles et recomposition des espaces ruraux en Inde', t: 'hg-g3-ruraux' },
  { c: 'Les espaces ruraux canadiens : une multifonctionnalité marquée', t: 'hg-g3-ruraux' }
];
const THEMES_GEO = ['hg-g1-metropolisation', 'hg-g2-production', 'hg-g3-ruraux', 'hg-g4-chine'];

G('hg-g1-metropolisation', 'hgg-cas', 'Relier une étude de cas à son thème', 'app', function(){
  const x = R.pick(CAS_GEO);
  const noms = THEMES_GEO.map(t => CHAP[t].titre);
  return {
    enonce: '<p>À quel thème de géographie se rattache cette étude de cas ?</p>' + cit(x.c),
    qcm: { options: noms.slice(), bon: noms.indexOf(CHAP[x.t].titre) },
    etapes: ['Cette étude de cas illustre le thème <b>' + CHAP[x.t].titre + '</b>.',
             'Ton professeur choisit une étude de cas par thème : c’est elle qui te fournit tes exemples précis en devoir.']
  };
});

const FRANCE_GEO = [
  { q: 'La France : la métropolisation et ses effets', t: 'hg-g1-metropolisation',
    e: 'Renforcement de Paris, ville primatiale, montée différenciée des métropoles régionales, et évolution contrastée des villes petites et moyennes.' },
  { q: 'La France : les systèmes productifs entre valorisation locale et intégration européenne et mondiale', t: 'hg-g2-production',
    e: 'L’étude porte sur la France, Outre-mer inclus, et articule savoir-faire locaux et insertion dans les réseaux européens et mondiaux.' },
  { q: 'La France : des espaces ruraux multifonctionnels, entre initiatives locales et politiques européennes', t: 'hg-g3-ruraux',
    e: 'Mutation des systèmes agricoles, pression urbaine croissante, et dynamiques démographiques diversifiées entre vieillissement et renouveau.' }
];

G('hg-g2-production', 'hgg-france', 'Les questions sur la France', 'ent', function(){
  const x = R.pick(FRANCE_GEO);
  const noms = THEMES_GEO.map(t => CHAP[t].titre);
  return {
    enonce: '<p>Chaque thème de géographie comporte une question spécifique sur la France. ' +
            'À quel thème appartient celle-ci ?</p>' + cit(x.q),
    qcm: { options: noms.slice(), bon: noms.indexOf(CHAP[x.t].titre) },
    etapes: ['Cette question appartient au thème <b>' + CHAP[x.t].titre + '</b>.', x.e,
             'Le thème conclusif sur la Chine est le seul sans question sur la France.']
  };
});

const ECHELLES = [
  { p: 'La concurrence entre Paris, Londres et New York pour attirer les sièges sociaux', e: 'Mondiale' },
  { p: 'L’organisation des chaînes de valeur ajoutée d’un constructeur automobile', e: 'Mondiale' },
  { p: 'La dévitalisation des centres-villes des villes moyennes françaises', e: 'Nationale' },
  { p: 'Les politiques européennes de développement rural appliquées en France', e: 'Nationale' },
  { p: 'Un conflit entre agriculteurs et nouveaux habitants sur l’usage d’un chemin', e: 'Locale' },
  { p: 'L’apparition d’un nouveau quartier d’affaires en périphérie d’une métropole', e: 'Locale' },
  { p: 'L’opposition entre le littoral chinois et les provinces de l’intérieur', e: 'Régionale' },
  { p: 'Les migrations des campagnes vers les villes à l’intérieur de la Chine', e: 'Régionale' }
];

G('hg-g3-ruraux', 'hgg-echelle', 'Choisir la bonne échelle', 'ent', function(){
  const x = R.pick(ECHELLES);
  const noms = ['Locale', 'Régionale', 'Nationale', 'Mondiale'];
  return {
    enonce: '<p>À quelle échelle raisonne-t-on pour étudier ce phénomène ?</p>' + cit(x.p),
    qcm: { options: noms.slice(), bon: noms.indexOf(x.e) },
    etapes: [
      'On raisonne ici à l’échelle <b>' + x.e.toLowerCase() + '</b>.',
      'Le programme demande une <b>approche multiscalaire</b> : un même phénomène se traduit différemment ' +
        'selon l’échelle, et les territoires interagissent d’une échelle à l’autre.',
      'En devoir, changer d’échelle au moins une fois est presque toujours payant.'
    ]
  };
});

const CHINE = [
  { q: 'Quel contraste territorial structure l’espace chinois ?', b: 'L’opposition entre un littoral développé et un intérieur en retard',
    v: ['L’opposition entre le nord industriel et le sud agricole', 'L’opposition entre un littoral développé et un intérieur en retard',
        'L’opposition entre l’est rural et l’ouest urbanisé', 'L’absence de contraste, le développement étant homogène'] },
  { q: 'Pourquoi le thème sur la Chine est-il dit « conclusif » ?', b: 'Il applique à une seule aire géographique les acquis des trois premiers thèmes',
    v: ['Il conclut le programme d’histoire', 'Il applique à une seule aire géographique les acquis des trois premiers thèmes',
        'Il est facultatif', 'Il ne comporte pas d’étude de cas'] },
  { q: 'Quelles sont les trois questions du thème sur la Chine ?', b: 'Développement et inégalités ; ressources et environnements sous pression ; recompositions spatiales',
    v: ['Métropolisation, production, espaces ruraux', 'Développement et inégalités ; ressources et environnements sous pression ; recompositions spatiales',
        'Démographie, industrie, agriculture', 'Puissance, territoire, frontières'] },
  { q: 'Le thème sur la Chine comporte-t-il une question spécifique sur la France ?', b: 'Non, c’est le seul thème qui n’en comporte pas',
    v: ['Oui, comme tous les thèmes', 'Non, c’est le seul thème qui n’en comporte pas',
        'Oui, mais elle est facultative', 'Non, aucun thème n’en comporte'] }
];

G('hg-g4-chine', 'hgg-chine', 'Le thème conclusif', 'app', function(){
  const x = R.pick(CHINE);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le programme insiste sur les <b>paradoxes</b> chinois : croissance et inégalités, ' +
               'pollution record et investissements massifs dans les renouvelables.']
  };
});

/* ---------- méthodes ---------- */
const METH_COMPO = [
  { q: 'Que doit contenir l’introduction d’une composition ?', b: 'Une accroche, la définition des termes, la problématique et l’annonce du plan',
    v: ['Le plan seul', 'Une accroche, la définition des termes, la problématique et l’annonce du plan',
        'Un résumé du cours', 'La conclusion annoncée à l’avance'] },
  { q: 'Que sont les « bornes » d’un sujet ?', b: 'Les limites chronologiques en histoire, spatiales en géographie',
    v: ['Les limites chronologiques en histoire, spatiales en géographie', 'Les titres des parties',
        'Les documents fournis', 'Le nombre de pages attendu'] },
  { q: 'Quel plan convient à un sujet qui décrit une évolution par étapes ?', b: 'Le plan chronologique',
    v: ['Le plan chronologique', 'Le plan thématique', 'Le plan dialectique', 'Le plan multiscalaire'] },
  { q: 'Quel plan consiste à aller de l’échelle mondiale à l’échelle locale ?', b: 'Le plan multiscalaire',
    v: ['Le plan chronologique', 'Le plan thématique', 'Le plan dialectique', 'Le plan multiscalaire'] },
  { q: 'Que doit contenir la conclusion ?', b: 'La réponse à la problématique, puis une ouverture',
    v: ['La réponse à la problématique, puis une ouverture', 'Un résumé de chaque partie',
        'Une nouvelle idée non traitée', 'L’annonce du plan'] },
  { q: 'Que vaut une idée présentée sans exemple précis ?', b: 'Presque rien : c’est l’exemple qui prouve l’idée',
    v: ['Presque rien : c’est l’exemple qui prouve l’idée', 'Autant qu’une idée illustrée',
        'Davantage, car elle est plus générale', 'Cela dépend de la longueur du paragraphe'] }
];

G('hg-m-composition', 'hgm-composition', 'La méthode de la composition', 'app', function(){
  const x = R.pick(METH_COMPO);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le programme nomme trois exercices travaillés au lycée : la composition, ' +
               'l’analyse critique de document(s) et la réalisation d’un croquis.']
  };
});

const METH_DOC = [
  { q: 'Que signifie « analyse critique » d’un document ?', b: 'Interroger le point de vue de l’auteur, ses intérêts, ses silences et la portée du document',
    v: ['Dire que le document est faux', 'Interroger le point de vue de l’auteur, ses intérêts, ses silences et la portée du document',
        'Résumer le document', 'Comparer le document à un autre'] },
  { q: 'Quelle est l’erreur la plus sanctionnée dans cet exercice ?', b: 'La paraphrase, qui reformule le document sans l’expliquer',
    v: ['La paraphrase, qui reformule le document sans l’expliquer', 'Citer trop souvent',
        'Utiliser des connaissances du cours', 'Mentionner la date du document'] },
  { q: 'Que faut-il identifier en premier ?', b: 'La nature, l’auteur, la date, le destinataire et le contexte',
    v: ['La nature, l’auteur, la date, le destinataire et le contexte', 'Le plan du devoir',
        'Le nombre de lignes', 'La conclusion'] },
  { q: 'Qu’est-ce qu’un anachronisme ?', b: 'Juger les acteurs du passé avec les valeurs d’aujourd’hui au lieu de les expliquer',
    v: ['Juger les acteurs du passé avec les valeurs d’aujourd’hui au lieu de les expliquer',
        'Se tromper de date', 'Citer un document postérieur', 'Employer un mot trop savant'] },
  { q: 'Quel est le bon rythme de rédaction ?', b: 'Alterner citation courte entre guillemets et explication tirée du cours',
    v: ['Alterner citation courte entre guillemets et explication tirée du cours',
        'Citer tout le document puis l’expliquer', 'N’utiliser que ses connaissances',
        'Recopier le document en le reformulant'] }
];

G('hg-m-document', 'hgm-document', 'La méthode de l’analyse de document', 'app', function(){
  const x = R.pick(METH_DOC);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le mot qui compte dans l’intitulé est <b>critique</b> : on ne raconte pas le document, on le pèse.']
  };
});

const METH_CROQUIS = [
  { q: 'Par quoi commence-t-on un croquis ?', b: 'Par la légende, qui est le plan du devoir',
    v: ['Par la légende, qui est le plan du devoir', 'Par le coloriage des surfaces',
        'Par le titre', 'Par les flèches de flux'] },
  { q: 'Quel figuré représente un flux ?', b: 'Une flèche, dont l’épaisseur indique l’intensité',
    v: ['Une flèche, dont l’épaisseur indique l’intensité', 'Un aplat de couleur',
        'Un cercle proportionnel', 'Un hachurage'] },
  { q: 'Quel figuré représente une ville ?', b: 'Un point ou un cercle, dont la taille indique l’importance',
    v: ['Un point ou un cercle, dont la taille indique l’importance', 'Une flèche',
        'Un aplat de couleur', 'Une ligne pointillée'] },
  { q: 'Quel figuré représente un ensemble régional ?', b: 'Un aplat de couleur, qui couvre une surface',
    v: ['Un aplat de couleur, qui couvre une surface', 'Une flèche', 'Un point', 'Un trait épais'] },
  { q: 'Quelle faute fait perdre des points automatiquement ?', b: 'Un croquis sans titre',
    v: ['Un croquis sans titre', 'Un croquis en noir et blanc', 'Trop de figurés', 'Une légende en trois parties'] },
  { q: 'Qu’est-ce qu’un schéma, par rapport à un croquis ?', b: 'Une version simplifiée, dessinée à main levée, qui illustre un raisonnement',
    v: ['Une version simplifiée, dessinée à main levée, qui illustre un raisonnement',
        'Un croquis sans légende', 'Une carte au format officiel', 'Un croquis colorié à l’ordinateur'] }
];

G('hg-m-croquis', 'hgm-croquis', 'Le langage du croquis', 'app', function(){
  const x = R.pick(METH_CROQUIS);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le programme le formule ainsi : « le croquis est l’aboutissement d’un travail de description, ' +
               'd’analyse et de synthèse ».']
  };
});

/* ---------- synthèses de niveau devoir surveillé ---------- */
G('hg-reperes', 'hgr-synthese', 'Situer un événement complètement', 'ds', function(){
  const pool = DATES_HG.filter(y => y.an && y.an >= 1789);
  const x = R.pick(pool);
  const reg = x.an < 1792 ? 'Monarchie constitutionnelle'
            : x.an < 1804 ? 'Première République'
            : x.an < 1814 ? 'Premier Empire'
            : x.an < 1830 ? 'Restauration'
            : x.an < 1848 ? 'Monarchie de Juillet'
            : x.an < 1852 ? 'Deuxième République'
            : x.an < 1870 ? 'Second Empire'
            : 'Troisième République';
  const bonT = CHAP[x.ch].titre;
  const titres = R.shuffle([bonT].concat(autres(TITRES_HG_H.map(c => CHAP[c].titre), bonT, 3)));
  return {
    enonce: '<p>Situe complètement cet événement, comme on te le demandera en devoir.</p>' + cit(x.e) +
            '<p class="tiny">Trois réponses : l’année, le régime politique français du moment, le chapitre du programme.</p>',
    champs: [
      { type: 'num', label: 'Année', bon: x.an, tol: 0 },
      { type: 'choix', label: 'Régime politique en France', options: NOMS_REGIMES.slice(), bon: NOMS_REGIMES.indexOf(reg) },
      { type: 'choix', label: 'Chapitre du programme', options: titres, bon: titres.indexOf(bonT) }
    ],
    etapes: [
      '<b>' + x.d + '</b> : ' + x.e + '.',
      'La France est alors sous le régime de la <b>' + reg.toLowerCase() + '</b>.',
      'Chapitre du programme : <b>' + bonT + '</b>.',
      'Savoir replacer un événement dans son régime, c’est la capacité « contextualiser » du programme.'
    ]
  };
});

/* ---------- exercices rédigés, au barème auto-évalué ---------- */

D('hg-m-composition', 'hgd-composition', 'Préparer une composition', function(){
  const sujets = [
    { s: 'La difficile entrée de la France dans l’âge démocratique (1848-1870)', t: 'histoire',
      a: 'Bornes : 1848, la Deuxième République ; 1870, la chute du Second Empire. Le mot à interroger est « difficile ».' },
    { s: 'La Troisième République avant 1914 : un régime qui s’enracine ?', t: 'histoire',
      a: 'Le point d’interrogation impose un plan qui nuance : l’enracinement est réel, mais contesté.' },
    { s: 'La Première Guerre mondiale, une guerre totale', t: 'histoire',
      a: 'Il faut définir « totale » : militaire, économique, scientifique, et engageant les civils.' },
    { s: 'La métropolisation, un processus mondial mais différencié', t: 'géographie',
      a: 'Le « mais » est le cœur du sujet : montrer l’unité du processus, puis sa diversité, à plusieurs échelles.' },
    { s: 'Les espaces ruraux dans le monde : multifonctionnalité ou fragmentation ?', t: 'géographie',
      a: 'Le sujet est le titre même du thème. Une bonne copie montre que les deux processus se nourrissent l’un l’autre.' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet de composition</b>, en ' + x.t + ' :</p>' + cit(x.s) +
            '<p>Sur ton cahier, rédige entièrement l’<b>introduction</b>, puis note le <b>plan détaillé</b> ' +
            'avec les exemples que tu emploierais.</p>',
    aide: x.a + ' Introduction en quatre temps : accroche, définition des termes, problématique, annonce du plan.',
    bareme: [
      { pts: 1, d: '<b>Accroche</b> précise : un fait, une date ou un chiffre, jamais une généralité du type « de tout temps ».' },
      { pts: 2, d: '<b>Définition des termes</b> du sujet, et repérage des <b>bornes</b> ' +
                   (x.t === 'histoire' ? 'chronologiques.' : 'spatiales et des échelles concernées.') },
      { pts: 2, d: '<b>Problématique</b> formulée en une question claire, qui reprend la tension du sujet ' +
                   'au lieu de le recopier.' },
      { pts: 1, d: '<b>Annonce du plan</b> en deux ou trois parties, présentées comme des réponses et non comme des thèmes.' },
      { pts: 3, d: '<b>Plan détaillé</b> : chaque partie porte une idée directrice, et comporte deux ou trois sous-parties.' },
      { pts: 3, d: '<b>Exemples précis</b> pour chaque sous-partie : une date, un acteur, un lieu, un chiffre. ' +
                   'Une sous-partie sans exemple ne compte pas.' },
      { pts: 2, d: '<b>Notions du programme</b> employées à bon escient' +
                   (x.t === 'géographie' ? ' : métropolisation, multifonctionnalité, chaîne de la valeur ajoutée, acteurs, échelles.'
                                         : ' : nation, souveraineté, république, question sociale, empire colonial.') },
      { pts: 1, d: '<b>Ouverture</b> prévue pour la conclusion : un autre espace, une autre période, ou l’actualité.' }
    ]
  };
});

D('hg-m-document', 'hgd-document', 'Analyser un document', function(){
  return {
    enonce: '<p>Voici un extrait du discours de <b>Jules Ferry</b> devant la Chambre des députés, ' +
      'le 28 juillet 1885, dans le débat sur la politique coloniale.</p>' +
      '<div class="cit">Messieurs, il faut parler plus haut et plus vrai ! Il faut dire ouvertement qu’en effet ' +
      'les races supérieures ont un droit vis-à-vis des races inférieures. […] Je répète qu’il y a pour les races ' +
      'supérieures un droit, parce qu’il y a un devoir pour elles. Elles ont le devoir de civiliser les races inférieures.' +
      '<span class="cit-src">Jules Ferry, discours à la Chambre des députés, 28 juillet 1885</span></div>' +
      '<p><b>Consigne :</b> à l’aide du document et de vos connaissances, analysez les justifications ' +
      'de la politique coloniale de la Troisième République, et montrez les limites de ce discours.</p>' +
      '<p>Rédige l’analyse complète sur ton cahier.</p>',
    aide: 'Quatre temps : identifier, comprendre, expliquer avec le cours, critiquer. ' +
          'La critique est la partie qui rapporte le plus, et celle que l’on oublie le plus souvent.',
    bareme: [
      { pts: 2, d: '<b>Identification</b> : nature (un discours politique), auteur (Jules Ferry, ancien président du Conseil, ' +
                   'ministre des lois scolaires), date (1885), destinataire (les députés), lieu (la Chambre).' },
      { pts: 2, d: '<b>Contexte</b> : la France est en pleine expansion coloniale sous la Troisième République ; ' +
                   'Ferry doit justifier une politique contestée, après l’échec du Tonkin qui l’a fait tomber quelques mois plus tôt.' },
      { pts: 3, d: '<b>Thèse du document</b>, citée : « les races supérieures ont un droit vis-à-vis des races inférieures », ' +
                   'un droit fondé sur un prétendu « devoir de civiliser ». Ferry transforme une domination en mission.' },
      { pts: 3, d: '<b>Explication par le cours</b> : les motivations réelles de l’expansion sont aussi économiques ' +
                   '(débouchés, matières premières), stratégiques (points d’appui, rivalité avec le Royaume-Uni) ' +
                   'et de prestige national après 1871.' },
      { pts: 3, d: '<b>Critique</b> : le discours est une justification <i>a posteriori</i>, adressée à une assemblée à convaincre. ' +
                   'Il repose sur une hiérarchie raciale que rien ne fonde. Il tait la violence de la conquête, ' +
                   'le code de l’indigénat de 1887 et le statut de sujet imposé aux colonisés.' },
      { pts: 2, d: '<b>Mise en perspective</b> : la contradiction avec les principes de 1789 que la République revendique. ' +
                   'Citer l’opposition de Clemenceau, qui dénonce ce discours au nom des droits de l’homme.' },
      { pts: 2, d: '<b>Portée et limites</b> du document : il éclaire le discours officiel de la colonisation, ' +
                   'mais ne dit rien de ce qu’en pensaient les colonisés ni de la réalité des sociétés coloniales.' },
      { pts: 1, d: '<b>Rédaction</b> : alternance de citations courtes entre guillemets et d’explications, ' +
                   'aucune paraphrase, aucun jugement anachronique substitué à l’explication.' }
    ]
  };
});

D('hg-m-croquis', 'hgd-croquis', 'Construire une légende de croquis', function(){
  const sujets = [
    { s: 'Les dynamiques de la métropolisation dans le monde', t: 'hg-g1-metropolisation',
      l: ['Les grandes métropoles mondiales et leur rayonnement',
          'Des métropoles inégalement attractives',
          'Des recompositions internes et des inégalités croissantes'] },
    { s: 'Les espaces productifs et les flux à l’échelle mondiale', t: 'hg-g2-production',
      l: ['Les grands espaces productifs : métropoles et littoraux',
          'Des chaînes de valeur ajoutée qui relient les territoires',
          'Des flux croissants, matériels et immatériels'] },
    { s: 'La Chine : des recompositions spatiales multiples', t: 'hg-g4-chine',
      l: ['Un littoral urbanisé, ouvert et intégré à la mondialisation',
          'Un intérieur moins développé, marqué par les départs',
          'Des flux internes et des environnements sous pression'] }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet de croquis</b> :</p>' + cit(x.s) +
            '<p>Sur ton cahier, construis la <b>légende organisée</b> de ce croquis : deux ou trois parties titrées, ' +
            'et pour chaque information le <b>figuré</b> que tu emploierais (surface, point, ligne ou flèche) ' +
            'et sa <b>couleur</b>.</p>',
    aide: 'La légende se construit avant le croquis : c’est le plan du devoir. ' +
          'Une piste possible : ' + x.l.map(t => '« ' + t + ' »').join(' · ') + '.',
    bareme: [
      { pts: 3, d: '<b>Légende organisée en parties titrées</b>, chaque titre étant une idée qui répond au sujet, ' +
                   'et non une étiquette comme « les villes ».' },
      { pts: 2, d: '<b>Ordre logique</b> des parties : du général au particulier, ou du plus intégré au moins intégré.' },
      { pts: 3, d: '<b>Figurés adaptés</b> : des <i>surfaces</i> pour les espaces et les ensembles régionaux, ' +
                   'des <i>points</i> pour les villes et les sites, des <i>flèches</i> pour les flux et les axes.' },
      { pts: 2, d: '<b>Hiérarchie visuelle</b> : la taille des points et l’épaisseur des flèches traduisent l’intensité. ' +
                   'Deux métropoles d’importance différente ne portent pas le même cercle.' },
      { pts: 2, d: '<b>Couleurs cohérentes</b> : rouge pour le dense et le dynamique, bleu pour les flux et le maritime, ' +
                   'vert pour l’agricole et l’environnemental.' },
      { pts: 2, d: '<b>Nomenclature</b> : les lieux essentiels sont nommés, et correctement localisés.' },
      { pts: 1, d: '<b>Titre du croquis</b>, qui reprend le sujet. Un croquis sans titre perd des points automatiquement.' }
    ]
  };
});
