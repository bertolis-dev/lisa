/* =========================================================================
   Histoire-géographie : deux exercices de plus par chapitre d'histoire.
   Les points de passage et d'ouverture du chapitre, et les contresens
   classiques sous forme de vrai ou faux.
   ========================================================================= */

TITRES_HG_H.forEach(function(ch){
  G(ch, ch + '-ppo', 'Les points de passage du chapitre', 'ent', function(){
    const locaux = PPO_HG.filter(y => y.ch === ch);
    const x = R.pick(locaux);
    const ailleurs = PPO_HG.filter(y => y.ch !== ch).map(y => y.p);
    return {
      enonce: '<p>Parmi ces quatre propositions, laquelle est un <b>point de passage et d’ouverture</b> ' +
              'du chapitre « ' + CHAP[ch].titre + ' » ?</p>',
      qcm: qcm4(x.p, ailleurs),
      etapes: [
        '<b>' + x.p + '</b> est un point de passage de ce chapitre.',
        locaux.length > 1
          ? 'Les autres points de passage du chapitre : ' + locaux.filter(y => y !== x).map(y => y.p).join(' · ') + '.'
          : 'C’est le point de passage de ce chapitre retenu dans l’application.',
        'Le programme prévoit deux à quatre points de passage par chapitre. Ce sont les moments à savoir raconter ' +
          'précisément, et ceux d’où viennent les documents des devoirs.'
      ]
    };
  });
});

const VF_HG = [
  { a: 'La Déclaration des droits de l’homme et du citoyen de 1789 accorde aux femmes les mêmes droits politiques qu’aux hommes.',
    v: false, ch: 'hg-h1-revolution',
    e: 'Elle proclame l’égalité des droits, mais les femmes restent exclues de la citoyenneté politique. Olympe de Gouges y répond dès 1791.' },
  { a: 'Le Code civil de 1804 conserve l’égalité devant la loi héritée de la Révolution.',
    v: true, ch: 'hg-h1-revolution',
    e: 'C’est l’exemple type de la continuité entre Révolution et Empire. Il place en revanche la femme sous l’autorité de son mari.' },
  { a: 'Napoléon rétablit une monarchie identique à celle d’avant 1789.',
    v: false, ch: 'hg-h1-revolution',
    e: 'Il installe un régime autoritaire, mais qui conserve des acquis révolutionnaires : égalité devant la loi, ' +
       'administration centralisée, vente des biens nationaux.' },
  { a: 'Le congrès de Vienne redessine l’Europe sans tenir compte du sentiment national des peuples.',
    v: true, ch: 'hg-h1-restauration',
    e: 'C’est ce qui rend son œuvre fragile : le mouvement des nationalités la conteste dès les années 1820.' },
  { a: 'Sous la Restauration et la monarchie de Juillet, tous les hommes ont le droit de vote.',
    v: false, ch: 'hg-h1-restauration',
    e: 'Le suffrage est <b>censitaire</b> : seuls votent ceux qui paient un certain montant d’impôt. ' +
       'Le suffrage universel masculin date de 1848.' },
  { a: 'Le suffrage universel instauré en France en 1848 est masculin.',
    v: true, ch: 'hg-h2-democratie',
    e: 'Les femmes n’obtiendront le droit de vote qu’en 1944. Préciser « masculin » est attendu dans une copie.' },
  { a: 'Le Second Empire supprime le suffrage universel masculin.',
    v: false, ch: 'hg-h2-democratie',
    e: 'Il le conserve et s’en sert : le plébiscite donne une apparence démocratique à un pouvoir personnel.' },
  { a: 'L’esclavage est aboli dans les colonies françaises en 1848.',
    v: true, ch: 'hg-h2-democratie',
    e: 'Le décret du 27 avril 1848, porté par Victor Schœlcher, abolit définitivement l’esclavage. ' +
       'Une première abolition de 1794 avait été annulée en 1802.' },
  { a: 'En 1914, la France est un pays majoritairement urbain.',
    v: false, ch: 'hg-h2-industrialisation',
    e: 'La France reste très rurale jusqu’à la Première Guerre mondiale : c’est le contresens le plus fréquent du thème 2.' },
  { a: 'Le droit de grève est reconnu en 1864, mais les syndicats restent interdits jusqu’en 1884.',
    v: true, ch: 'hg-h2-industrialisation',
    e: 'Deux dates, deux étapes distinctes : la loi Ollivier de 1864, puis la loi Waldeck-Rousseau de 1884.' },
  { a: 'L’unité allemande est proclamée à Berlin en 1871.',
    v: false, ch: 'hg-h2-nations',
    e: 'Elle est proclamée dans la <b>galerie des Glaces du château de Versailles</b>, le 18 janvier 1871. ' +
       'Le lieu est une humiliation voulue.' },
  { a: 'Les unités italienne et allemande sont réalisées par des monarchies, par la guerre et la diplomatie.',
    v: true, ch: 'hg-h2-nations',
    e: 'Cavour et Bismarck agissent au nom de souverains. Les nations se font « par en haut », ' +
       'et non par le soulèvement des peuples.' },
  { a: 'La Troisième République est proclamée en 1875, lors du vote des lois constitutionnelles.',
    v: false, ch: 'hg-h3-republique',
    e: 'Elle est proclamée le <b>4 septembre 1870</b>, après la défaite de Sedan. Les lois de 1875 ne font que l’organiser.' },
  { a: 'La loi de 1905 sépare les Églises et l’État et garantit la liberté de conscience.',
    v: true, ch: 'hg-h3-republique',
    e: 'Elle n’interdit pas la religion : elle met fin au régime concordataire et garantit le libre exercice des cultes.' },
  { a: 'La Troisième République accorde le droit de vote aux femmes avant 1914.',
    v: false, ch: 'hg-h3-republique',
    e: 'Le refus du droit de vote des femmes figure explicitement dans le programme : il nuance l’universalisme affiché du régime.' },
  { a: 'L’affaire Dreyfus révèle la structuration d’un antisémitisme politique en France.',
    v: true, ch: 'hg-h3-societe',
    e: 'Ce n’est pas seulement une erreur judiciaire : c’est une crise qui divise le pays et fait naître ' +
       'la figure de l’intellectuel engagé.' },
  { a: 'Au début du XXe siècle, la France n’accueille presque aucun immigré.',
    v: false, ch: 'hg-h3-societe',
    e: 'L’immigration, surtout belge, italienne et polonaise, est un point du programme, et elle suscite déjà des tensions.' },
  { a: 'L’Algérie est organisée en départements français à partir de 1848.',
    v: true, ch: 'hg-h3-colonies',
    e: 'C’est le cas particulier du chapitre : un territoire juridiquement français, dont la majorité des habitants ' +
       'ne sont pourtant pas citoyens.' },
  { a: 'Le code de l’indigénat accorde la citoyenneté française aux populations colonisées.',
    v: false, ch: 'hg-h3-colonies',
    e: 'Il fait l’inverse : il institue un statut de <b>sujet</b>, avec des peines spécifiques. ' +
       'C’est la preuve juridique de l’inégalité coloniale.' },
  { a: 'La politique coloniale de la Troisième République fait l’objet de débats en métropole.',
    v: true, ch: 'hg-h3-colonies',
    e: 'Le débat de 1885 entre Jules Ferry, qui la défend, et Georges Clemenceau, qui la dénonce au nom des droits de l’homme, ' +
       'en est l’exemple attendu.' },
  { a: 'La guerre de mouvement échoue dès l’automne 1914 et cède la place à la guerre de position.',
    v: true, ch: 'hg-h4-embrasement',
    e: 'La puissance de feu défensive, mitrailleuse et artillerie, fige le front. Commence alors la guerre des tranchées.' },
  { a: 'La Première Guerre mondiale ne concerne que l’Europe.',
    v: false, ch: 'hg-h4-embrasement',
    e: 'Les empires coloniaux britannique et français y sont engagés, les combats gagnent le Proche-Orient, ' +
       'et les États-Unis entrent en guerre en 1917.' },
  { a: 'L’expression « crimes contre l’humanité » apparaît dans une déclaration internationale dès 1915.',
    v: true, ch: 'hg-h4-societes',
    e: 'La déclaration de la Triple Entente du 24 mai 1915 vise les massacres commis contre les Arméniens de l’Empire ottoman.' },
  { a: 'Le rôle nouveau des femmes pendant la guerre leur vaut le droit de vote en France dès 1918.',
    v: false, ch: 'hg-h4-societes',
    e: 'Leur rôle s’élargit pendant le conflit, mais l’après-guerre en ramène beaucoup au foyer, et la France attendra 1944.' },
  { a: 'Les traités de paix de 1919-1923 font disparaître les empires multinationaux européens.',
    v: true, ch: 'hg-h4-sortir',
    e: 'Les empires allemand, austro-hongrois, ottoman et russe disparaissent. De nouveaux États apparaissent ' +
       'au nom du principe des nationalités.' },
  { a: 'Les États-Unis adhèrent à la Société des Nations qu’ils ont inspirée.',
    v: false, ch: 'hg-h4-sortir',
    e: 'Le Sénat américain refuse de ratifier le traité de Versailles. Cette absence est une des causes de la faiblesse de la SDN.' }
];

TITRES_HG_H.forEach(function(ch){
  G(ch, ch + '-vf', 'Vrai ou faux : les contresens classiques', 'ent', function(){
    const x = R.pick(VF_HG.filter(y => y.ch === ch));
    return {
      enonce: '<p>Cette affirmation est-elle exacte ?</p>' + cit(x.a),
      qcm: { options: ['Vrai', 'Faux'], bon: x.v ? 0 : 1 },
      etapes: [
        x.v ? 'C’est <b>exact</b>.' : 'C’est <b>faux</b>.',
        x.e,
        'Ce sont ces précisions qui font la différence entre une copie moyenne et une bonne copie.'
      ]
    };
  });
});
