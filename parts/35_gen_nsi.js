/* =========================================================================
   Générateurs d'exercices de spécialité NSI.
   Conversions, booléens, Python, structures de données, coûts.
   Tout est recalculé exactement : les sorties de code sont simulées en JS.
   ========================================================================= */

function bin(n, bits){
  let s = (n >>> 0).toString(2);
  while (bits && s.length < bits) s = '0' + s;
  return s;
}

G('nsi-binaire', 'nsi-dec-bin', 'Décimal vers binaire', 'app', function(){
  const n = R.int(5, 255);
  const b = bin(n);
  const restes = [];
  let q = n;
  while (q > 0){ restes.push(q % 2); q = Math.floor(q / 2); }
  return {
    enonce: '<p>Écris ce nombre en <b>binaire</b>, sans zéro inutile devant.</p>' +
            form('<b>' + n + '</b><span class="form-leg">en base 10</span>'),
    champs: [{ type: 'texte', label: 'Écriture binaire', bon: b }],
    etapes: [
      'On divise par 2 en notant les restes, puis on les lit <b>de bas en haut</b> : ' +
        restes.join(', ') + ' → <b>' + b + '</b>.',
      'Vérification par les puissances de 2 : ' +
        b.split('').map((c, i) => c === '1' ? Math.pow(2, b.length - 1 - i) : null)
          .filter(x => x).join(' + ') + ' = ' + n + '.',
      'Ce nombre tient sur <b>' + b.length + ' bits</b>.'
    ]
  };
});

G('nsi-binaire', 'nsi-bin-dec', 'Binaire vers décimal', 'app', function(){
  const bits = R.pick([4, 5, 6, 7, 8]);
  const n = R.int(1, Math.pow(2, bits) - 1);
  const b = bin(n, bits);
  const dec = b.split('').map((c, i) => c === '1' ? Math.pow(2, b.length - 1 - i) : 0);
  return {
    enonce: '<p>Quelle est la valeur décimale de cet entier écrit en binaire ?</p>' +
            form('<b>' + b + '</b><span class="form-leg">en base 2</span>'),
    champs: [{ type: 'num', label: 'Valeur décimale', bon: n, tol: 0 }],
    etapes: [
      'Les poids, de gauche à droite : ' +
        b.split('').map((c, i) => Math.pow(2, b.length - 1 - i)).join(' · ') + '.',
      'On additionne les poids des bits à 1 : ' + dec.filter(x => x).join(' + ') + ' = <b>' + n + '</b>.',
      'Sur ' + bits + ' bits, on peut représenter 2<sup>' + bits + '</sup> = ' + Math.pow(2, bits) +
        ' valeurs, de 0 à ' + (Math.pow(2, bits) - 1) + '.'
    ]
  };
});

G('nsi-binaire', 'nsi-hexa', 'Hexadécimal', 'ent', function(){
  const n = R.int(16, 255);
  const h = n.toString(16).toUpperCase();
  const b = bin(n, 8);
  return {
    enonce: '<p>Convertis cet octet en <b>hexadécimal</b>.</p>' +
            form('<b>' + b + '</b><span class="form-leg">en base 2</span>'),
    champs: [{ type: 'texte', label: 'Écriture hexadécimale', bon: h, alt: [h.toLowerCase(), '0x' + h, '0x' + h.toLowerCase()] }],
    etapes: [
      'On groupe les bits par <b>quatre</b> en partant de la droite : ' +
        b.slice(0, 4) + ' et ' + b.slice(4) + '.',
      'Chaque groupe de quatre bits donne un chiffre hexadécimal : ' +
        b.slice(0, 4) + ' → ' + parseInt(b.slice(0, 4), 2).toString(16).toUpperCase() + ' · ' +
        b.slice(4) + ' → ' + parseInt(b.slice(4), 2).toString(16).toUpperCase() + '.',
      'Donc <b>' + h + '</b>, soit ' + n + ' en décimal.',
      'Les chiffres au-delà de 9 : A = 10 · B = 11 · C = 12 · D = 13 · E = 14 · F = 15.'
    ]
  };
});

G('nsi-binaire', 'nsi-bits', 'Combien de bits, combien de valeurs ?', 'ent', function(){
  if (R.int(0, 1)){
    const bits = R.pick([4, 6, 8, 10, 12, 16]);
    return {
      enonce: '<p>Combien de valeurs différentes peut-on représenter sur <b>' + bits + ' bits</b> ?</p>',
      champs: [
        { type: 'num', label: 'Nombre de valeurs', bon: Math.pow(2, bits), tol: 0 },
        { type: 'num', label: 'Plus grand entier positif représentable', bon: Math.pow(2, bits) - 1, tol: 0 }
      ],
      etapes: [
        'Sur n bits, il y a ' + M('2^{n}') + ' combinaisons possibles : 2<sup>' + bits + '</sup> = <b>' +
          Math.pow(2, bits) + '</b>.',
        'Les entiers positifs vont de 0 à 2<sup>' + bits + '</sup> - 1 = <b>' + (Math.pow(2, bits) - 1) + '</b>.',
        'Repères : 8 bits, un octet, donnent 256 valeurs, de 0 à 255.'
      ]
    };
  }
  const n = R.int(20, 4000);
  const bits = Math.floor(Math.log2(n)) + 1;
  return {
    enonce: '<p>Combien de bits faut-il au minimum pour écrire l’entier <b>' + n + '</b> en binaire ?</p>',
    champs: [{ type: 'num', label: 'Nombre de bits', bon: bits, tol: 0 }],
    etapes: [
      'Il faut le plus petit n tel que 2<sup>n</sup> > ' + n + '.',
      '2<sup>' + (bits - 1) + '</sup> = ' + Math.pow(2, bits - 1) + ' ≤ ' + n +
        ' < 2<sup>' + bits + '</sup> = ' + Math.pow(2, bits) + '.',
      'Il faut donc <b>' + bits + ' bits</b>. Son écriture binaire est ' + bin(n) + '.'
    ]
  };
});

/* ---------- booléens ---------- */
G('nsi-types', 'nsi-booleen', 'Expressions booléennes', 'ent', function(){
  const a = R.int(0, 1), b = R.int(0, 1), c = R.int(0, 1);
  const cas = [
    { e: 'a and b', v: a && b },
    { e: 'a or b', v: a || b },
    { e: 'not a', v: !a },
    { e: 'a and (b or c)', v: a && (b || c) },
    { e: '(a or b) and not c', v: (a || b) && !c },
    { e: 'not (a and b)', v: !(a && b) },
    { e: 'not a or not b', v: !a || !b }
  ];
  const x = R.pick(cas);
  const vb = v => v ? 'True' : 'False';
  return {
    enonce: '<p>On pose <code>a = ' + vb(a) + '</code>, <code>b = ' + vb(b) + '</code> ' +
            'et <code>c = ' + vb(c) + '</code>.</p>' +
            '<p>Que vaut cette expression ?</p>' + form('<code>' + x.e + '</code>'),
    qcm: { options: ['True', 'False'], bon: x.v ? 0 : 1 },
    etapes: [
      'L’expression vaut <b>' + vb(x.v) + '</b>.',
      '<b>and</b> est vrai seulement si les deux opérandes sont vrais. ' +
        '<b>or</b> est vrai dès qu’au moins un l’est : c’est un ou <b>inclusif</b>.',
      'Lois de De Morgan : <code>not (a and b)</code> équivaut à <code>not a or not b</code>, ' +
        'et <code>not (a or b)</code> équivaut à <code>not a and not b</code>.'
    ]
  };
});

/* ---------- Python : listes et tranches ---------- */
G('nsi-types', 'nsi-liste', 'Indices et tranches', 'ent', function(){
  const t = [];
  while (t.length < R.int(5, 8)) t.push(R.int(1, 40));
  const ops = [
    { e: 't[0]', v: t[0], d: 'L’indice 0 désigne le <b>premier</b> élément.' },
    { e: 't[-1]', v: t[t.length - 1], d: 'Un indice négatif compte depuis la fin : -1 est le dernier.' },
    { e: 't[1]', v: t[1], d: 'L’indice 1 désigne le deuxième élément, pas le premier.' },
    { e: 'len(t)', v: t.length, d: '<code>len</code> donne le nombre d’éléments.' },
    { e: 'sum(t)', v: t.reduce((s, x) => s + x, 0), d: '<code>sum</code> additionne tous les éléments.' },
    { e: 'max(t)', v: Math.max.apply(null, t), d: '<code>max</code> renvoie le plus grand élément.' },
    { e: 'min(t)', v: Math.min.apply(null, t), d: '<code>min</code> renvoie le plus petit élément.' },
    { e: 'len(t[1:4])', v: Math.max(0, Math.min(4, t.length) - 1),
      d: 'La tranche <code>t[a:b]</code> contient les indices a à <b>b-1</b> : la borne de droite est <b>exclue</b>.' }
  ];
  const x = R.pick(ops);
  return {
    enonce: '<p>On définit la liste suivante :</p>' +
            form('<code>t = [' + t.join(', ') + ']</code>') +
            '<p>Que vaut cette expression ?</p>' + form('<code>' + x.e + '</code>'),
    champs: [{ type: 'num', label: 'Valeur', bon: x.v, tol: 0 }],
    etapes: [
      '<code>' + x.e + '</code> vaut <b>' + x.v + '</b>.', x.d,
      'Les indices vont de 0 à len(t) - 1, soit de 0 à ' + (t.length - 1) + ' ici. ' +
        '<code>t[' + t.length + ']</code> provoquerait une erreur.'
    ]
  };
});

G('nsi-python', 'nsi-boucle', 'Que fait cette boucle ?', 'ent', function(){
  const cas = [];
  const n1 = R.int(3, 8), p1 = R.int(2, 5);
  let s1 = 0; for (let i = 0; i < n1; i++) s1 += i * p1;
  cas.push({ c: 's = 0\nfor i in range(' + n1 + '):\n    s = s + i * ' + p1 + '\nprint(s)', v: s1,
             d: '<code>range(' + n1 + ')</code> fait prendre à i les valeurs 0 à ' + (n1 - 1) +
                ', <b>jamais</b> ' + n1 + '. On somme ' +
                Array.from({ length: n1 }, (_, i) => i * p1).join(' + ') + '.' });
  const n2 = R.int(4, 9);
  let s2 = 1; for (let i = 1; i <= n2; i++) s2 *= i;
  cas.push({ c: 'p = 1\nfor i in range(1, ' + (n2 + 1) + '):\n    p = p * i\nprint(p)', v: s2,
             d: '<code>range(1, ' + (n2 + 1) + ')</code> va de 1 à ' + n2 + ' : c’est la factorielle de ' + n2 + '.' });
  const n3 = R.pick([64, 100, 128, 200, 256, 1000]);
  let c3 = 0, q3 = n3; while (q3 > 1){ q3 = Math.floor(q3 / 2); c3++; }
  cas.push({ c: 'n = ' + n3 + '\nc = 0\nwhile n > 1:\n    n = n // 2\n    c = c + 1\nprint(c)', v: c3,
             d: 'On divise par 2 jusqu’à atteindre 1 : le compteur donne environ log₂(' + n3 + '). ' +
                'C’est exactement le coût d’une recherche dichotomique.' });
  const t4 = []; while (t4.length < 6) t4.push(R.int(1, 30));
  const seuil = R.int(10, 20);
  const c4 = t4.filter(x => x > seuil).length;
  cas.push({ c: 't = [' + t4.join(', ') + ']\nc = 0\nfor x in t:\n    if x > ' + seuil + ':\n        c = c + 1\nprint(c)',
             v: c4, d: 'On compte les éléments strictement supérieurs à ' + seuil + ' : ' +
                (t4.filter(x => x > seuil).join(', ') || 'aucun') + '.' });
  const x = R.pick(cas);
  return {
    enonce: '<p>Qu’affiche ce programme ?</p>' + code(x.c),
    champs: [{ type: 'num', label: 'Valeur affichée', bon: x.v, tol: 0 }],
    etapes: [
      'Le programme affiche <b>' + x.v + '</b>.', x.d,
      'Le piège permanent de Python : <code>range(n)</code> s’arrête à <b>n-1</b>.'
    ]
  };
});

G('nsi-python', 'nsi-fonction', 'Lire une fonction', 'ds', function(){
  const t = []; while (t.length < R.int(5, 7)) t.push(R.int(-20, 40));
  const cas = [
    { n: 'maximum', c: 'def f(t):\n    m = t[0]\n    for x in t:\n        if x > m:\n            m = x\n    return m',
      v: Math.max.apply(null, t), d: 'La fonction parcourt la liste en gardant le plus grand vu jusque-là : ' +
        'c’est une recherche de maximum.' },
    { n: 'somme des positifs', c: 'def f(t):\n    s = 0\n    for x in t:\n        if x > 0:\n            s = s + x\n    return s',
      v: t.filter(x => x > 0).reduce((s, x) => s + x, 0),
      d: 'Seuls les éléments strictement positifs sont ajoutés : ' + (t.filter(x => x > 0).join(' + ') || '0') + '.' },
    { n: 'nombre d’éléments négatifs', c: 'def f(t):\n    c = 0\n    for x in t:\n        if x < 0:\n            c = c + 1\n    return c',
      v: t.filter(x => x < 0).length, d: 'La fonction compte les éléments strictement négatifs.' },
    { n: 'indice du minimum', c: 'def f(t):\n    i = 0\n    for j in range(len(t)):\n        if t[j] < t[i]:\n            i = j\n    return i',
      v: t.indexOf(Math.min.apply(null, t)), d: 'La fonction renvoie l’<b>indice</b> du minimum, pas sa valeur. ' +
        'Le minimum vaut ' + Math.min.apply(null, t) + ', situé à l’indice ' + t.indexOf(Math.min.apply(null, t)) + '.' }
  ];
  const x = R.pick(cas);
  return {
    enonce: '<p>On exécute ce programme. Que renvoie l’appel ?</p>' +
            code(x.c + '\n\nf([' + t.join(', ') + '])'),
    champs: [{ type: 'num', label: 'Valeur renvoyée', bon: x.v, tol: 0 }],
    etapes: [
      'La fonction renvoie <b>' + x.v + '</b>.',
      'Ce que fait cette fonction : <b>' + x.n + '</b>. ' + x.d,
      'Méthode de lecture : identifier l’<b>initialisation</b>, ce que fait le corps de la boucle, ' +
        'puis ce qui est <b>renvoyé</b>. Trois lignes suffisent souvent à comprendre.',
      'Une spécification en docstring aurait évité de deviner : c’est ce que le programme attend de toi ' +
        'quand tu écris une fonction.'
    ]
  };
});

/* ---------- coûts et algorithmes ---------- */
const ALGOS = [
  { q: 'Quel est le coût, dans le pire des cas, d’une recherche séquentielle dans un tableau de n éléments ?',
    b: 'Linéaire : de l’ordre de n comparaisons',
    v: ['Linéaire : de l’ordre de n comparaisons', 'Logarithmique : de l’ordre de log n',
        'Quadratique : de l’ordre de n²', 'Constant : une seule comparaison'] },
  { q: 'Quel est le coût d’une recherche dichotomique dans un tableau trié de n éléments ?',
    b: 'Logarithmique : de l’ordre de log₂(n)',
    v: ['Logarithmique : de l’ordre de log₂(n)', 'Linéaire : de l’ordre de n',
        'Quadratique : de l’ordre de n²', 'Constant'] },
  { q: 'Quelle condition la recherche dichotomique exige-t-elle ?',
    b: 'Que le tableau soit trié',
    v: ['Que le tableau soit trié', 'Que le tableau ne contienne pas de doublons',
        'Que le tableau soit de taille paire', 'Aucune condition particulière'] },
  { q: 'Quel est le coût du tri par sélection ou par insertion ?',
    b: 'Quadratique : de l’ordre de n²',
    v: ['Quadratique : de l’ordre de n²', 'Linéaire', 'Logarithmique', 'Constant'] },
  { q: 'Qu’est-ce qu’un variant de boucle ?',
    b: 'Une quantité entière positive qui décroît strictement à chaque tour, ce qui prouve la terminaison',
    v: ['Une quantité entière positive qui décroît strictement à chaque tour, ce qui prouve la terminaison',
        'Une propriété vraie à chaque tour, qui prouve la correction',
        'Une variable qui change de type pendant la boucle',
        'Le nombre total de tours effectués'] },
  { q: 'Qu’est-ce qu’un invariant de boucle ?',
    b: 'Une propriété conservée à chaque tour, qui permet de prouver la correction',
    v: ['Une propriété conservée à chaque tour, qui permet de prouver la correction',
        'Une quantité qui décroît à chaque tour', 'Une variable qui ne change jamais de valeur',
        'Une constante du programme'] },
  { q: 'Un algorithme glouton donne-t-il toujours la solution optimale ?',
    b: 'Non : cela dépend du problème et des données',
    v: ['Non : cela dépend du problème et des données', 'Oui, toujours',
        'Oui, si les données sont triées', 'Oui, si le problème admet une solution'] }
];

G('nsi-algo', 'nsi-couts', 'Coûts et propriétés des algorithmes', 'app', function(){
  const x = R.pick(ALGOS);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Pour retenir : <b>variant</b> → terminaison · <b>invariant</b> → correction.']
  };
});

G('nsi-algo', 'nsi-dichotomie', 'Compter les étapes d’une dichotomie', 'ent', function(){
  const n = R.pick([16, 32, 64, 100, 128, 256, 1000, 1024, 10000]);
  const etapes = Math.ceil(Math.log2(n + 1));
  const seq = n;
  return {
    enonce: '<p>Un tableau <b>trié</b> contient <b>' + nf(n) + ' éléments</b>.</p>' +
            '<p>Combien de comparaisons faut-il au maximum pour y trouver une valeur par ' +
            '<b>recherche dichotomique</b> ? Et par <b>recherche séquentielle</b> ?</p>',
    champs: [
      { type: 'num', label: 'Dichotomie (au pire)', bon: etapes, tol: 1 },
      { type: 'num', label: 'Recherche séquentielle (au pire)', bon: seq, tol: 0 }
    ],
    etapes: [
      'Chaque comparaison divise la zone de recherche par <b>deux</b>. ' +
        'Il faut donc le plus petit k tel que 2<sup>k</sup> ≥ ' + nf(n) + ' + 1, soit k ≈ <b>' + etapes + '</b>.',
      'La recherche séquentielle parcourt tout le tableau : au pire <b>' + nf(seq) + '</b> comparaisons.',
      'L’écart est spectaculaire : ' + nf(seq) + ' contre ' + etapes + '. ' +
        'Et il grandit avec la taille, puisque doubler n n’ajoute qu’une seule comparaison à la dichotomie.',
      'Mais la dichotomie exige un tableau <b>trié</b> : c’est le prix à payer.'
    ]
  };
});

G('nsi-algo', 'nsi-glouton', 'Rendu de monnaie glouton', 'ent', function(){
  const pieces = [200, 100, 50, 20, 10, 5, 2, 1];
  const somme = R.int(7, 199);
  let reste = somme, nb = 0;
  const detail = [];
  pieces.forEach(p => {
    const k = Math.floor(reste / p);
    if (k > 0){ detail.push(k + ' × ' + p); nb += k; reste -= k * p; }
  });
  return {
    enonce: '<p>On rend la monnaie sur <b>' + somme + ' centimes</b> avec le système européen : ' +
            'pièces de 1, 2, 5, 10, 20, 50, 100 et 200 centimes.</p>' +
            '<p>L’algorithme glouton prend à chaque étape la plus grosse pièce possible. ' +
            'Combien de pièces rend-il au total ?</p>',
    champs: [{ type: 'num', label: 'Nombre de pièces', bon: nb, tol: 0 }],
    etapes: [
      'Détail du rendu : ' + detail.join(' · ') + '.',
      'Soit <b>' + nb + ' pièce' + (nb > 1 ? 's' : '') + '</b> au total.',
      'Avec le système européen, ce glouton donne bien le <b>nombre minimal</b> de pièces. ' +
        'Ce n’est pas une propriété générale : avec un système comme 1, 3, 4, ' +
        'le glouton rend 6 = 4 + 1 + 1, soit trois pièces, alors que 3 + 3 en suffirait deux.',
      'Un algorithme glouton ne revient jamais en arrière : c’est ce qui le rend rapide, et parfois faux.'
    ]
  };
});

/* ---------- tables, Web, machine, histoire ---------- */
const TABLES_NSI = [
  { q: 'Dans un fichier CSV, que contient généralement la première ligne ?', b: 'Les noms des colonnes, c’est-à-dire les descripteurs',
    v: ['Les noms des colonnes, c’est-à-dire les descripteurs', 'Le premier enregistrement',
        'Le nombre de lignes du fichier', 'Le type de chaque colonne'] },
  { q: 'Sous quelle forme lit-on les valeurs d’un CSV en Python ?', b: 'Sous forme de chaînes de caractères, à convertir avant tout calcul',
    v: ['Sous forme de chaînes de caractères, à convertir avant tout calcul', 'Sous forme d’entiers',
        'Sous forme de flottants', 'Sous forme de booléens'] },
  { q: 'Que faut-il pour fusionner deux tables ?', b: 'Un attribut commun servant de clé',
    v: ['Un attribut commun servant de clé', 'Le même nombre de lignes',
        'Le même nombre de colonnes', 'Que les deux soient triées'] },
  { q: 'Quelle est la différence entre sorted(t) et t.sort() ?', b: 'sorted renvoie une nouvelle liste, sort modifie la liste en place',
    v: ['sorted renvoie une nouvelle liste, sort modifie la liste en place',
        'Il n’y a aucune différence', 'sorted trie en ordre décroissant',
        'sort ne fonctionne que sur des nombres'] }
];

G('nsi-tables', 'nsi-tables-qcm', 'Données en tables', 'app', function(){
  const x = R.pick(TABLES_NSI);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'Le programme demande aussi d’interroger la <b>provenance</b> et la <b>validité</b> des données.']
  };
});

const WEB_NSI = [
  { q: 'Où se trouvent les paramètres d’une requête GET ?', b: 'Dans l’URL, après un point d’interrogation',
    v: ['Dans l’URL, après un point d’interrogation', 'Dans le corps de la requête',
        'Dans un fichier séparé', 'Dans les en-têtes uniquement'] },
  { q: 'Pourquoi préfère-t-on POST à GET pour envoyer un mot de passe ?', b: 'Parce que GET l’écrirait dans l’URL, l’historique et les journaux du serveur',
    v: ['Parce que GET l’écrirait dans l’URL, l’historique et les journaux du serveur',
        'Parce que POST chiffre les données', 'Parce que GET est plus lent',
        'Parce que POST est plus récent'] },
  { q: 'Qu’est-ce qui chiffre réellement les échanges avec un site ?', b: 'Le protocole HTTPS',
    v: ['Le protocole HTTPS', 'La méthode POST', 'Le langage JavaScript', 'Le format HTML'] },
  { q: 'Quel est le rôle du CSS ?', b: 'Décrire la présentation, alors que HTML décrit la structure',
    v: ['Décrire la présentation, alors que HTML décrit la structure',
        'Décrire la structure de la page', 'Exécuter des calculs côté serveur',
        'Stocker les données du site'] },
  { q: 'Où s’exécute JavaScript dans une page Web classique ?', b: 'Côté client, dans le navigateur',
    v: ['Côté client, dans le navigateur', 'Côté serveur uniquement',
        'Dans le système d’exploitation', 'Dans la base de données'] }
];

G('nsi-web', 'nsi-web-qcm', 'Le Web : client, serveur, requêtes', 'app', function(){
  const x = R.pick(WEB_NSI);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'À retenir : POST cache les paramètres de l’URL, mais <b>ne chiffre rien</b>. C’est HTTPS qui chiffre.']
  };
});

const MACHINE_NSI = [
  { q: 'Quelle est l’idée centrale de l’architecture de von Neumann ?', b: 'Le programme est stocké dans la même mémoire que les données',
    v: ['Le programme est stocké dans la même mémoire que les données',
        'Le processeur possède plusieurs cœurs', 'Les données circulent par paquets',
        'La mémoire est volatile'] },
  { q: 'Quelle est la propriété de la mémoire vive ?', b: 'Elle est rapide mais volatile : son contenu disparaît à l’extinction',
    v: ['Elle est rapide mais volatile : son contenu disparaît à l’extinction',
        'Elle est lente mais persistante', 'Elle contient le système d’exploitation en permanence',
        'Elle ne stocke que les programmes'] },
  { q: 'Que gère un système d’exploitation ?', b: 'Les processus, la mémoire, les fichiers, les périphériques et les droits',
    v: ['Les processus, la mémoire, les fichiers, les périphériques et les droits',
        'Uniquement l’affichage', 'Uniquement les fichiers',
        'Uniquement la connexion réseau'] },
  { q: 'Quel est l’intérêt du découpage des données en paquets ?', b: 'La robustesse : une panne locale n’interrompt pas la communication, les paquets sont réacheminés',
    v: ['La robustesse : une panne locale n’interrompt pas la communication, les paquets sont réacheminés',
        'La confidentialité des échanges', 'La réduction de la taille des données',
        'La suppression des erreurs de transmission'] },
  { q: 'Que fait la commande ls en ligne de commande ?', b: 'Elle liste le contenu du répertoire courant',
    v: ['Elle liste le contenu du répertoire courant', 'Elle affiche le répertoire courant',
        'Elle change de répertoire', 'Elle supprime un fichier'] }
];

G('nsi-machine', 'nsi-machine-qcm', 'Architecture, système, réseau', 'app', function(){
  const x = R.pick(MACHINE_NSI);
  const opts = R.shuffle(x.v.slice());
  return {
    enonce: '<p>' + x.q + '</p>',
    qcm: { options: opts, bon: opts.indexOf(x.b) },
    etapes: ['Réponse : <b>' + x.b + '</b>.',
             'La formule à retenir pour von Neumann : <b>programme et données dans la même mémoire</b>.']
  };
});

const HISTOIRE_NSI = [
  { d: '1936', e: 'Alan Turing définit la machine de Turing et la calculabilité' },
  { d: '1843', e: 'Ada Lovelace écrit le premier algorithme destiné à une machine' },
  { d: '1945', e: 'L’architecture de von Neumann est décrite' },
  { d: '1947', e: 'Invention du transistor' },
  { d: '1969', e: 'Arpanet, ancêtre d’Internet, est mis en service' },
  { d: '1971', e: 'Premier microprocesseur' },
  { d: '1989', e: 'Tim Berners-Lee invente le Web au CERN' },
  { d: '1991', e: 'Premier noyau Linux, par Linus Torvalds' }
];

G('nsi-histoire', 'nsi-histoire-qcm', 'Les repères de l’informatique', 'app', function(){
  const x = R.pick(HISTOIRE_NSI);
  return {
    enonce: '<p>De quand date cet évènement ?</p>' + cit(x.e),
    qcm: qcm4(x.d, HISTOIRE_NSI.map(y => y.d)),
    etapes: ['<b>' + x.d + '</b> : ' + x.e + '.',
             'Erreur à ne pas commettre : <b>Internet</b> est le réseau, né à la fin des années 1960 ; ' +
               '<b>le Web</b> est un service qui fonctionne dessus, inventé vingt ans plus tard.']
  };
});

/* ---------- exercice rédigé ---------- */
D('nsi-algo', 'nsi-ecrire', 'Écrire et justifier une fonction', function(){
  const sujets = [
    { s: 'Écrire une fonction moyenne(t) qui renvoie la moyenne des éléments d’une liste de nombres.',
      p: 'la liste ne doit pas être vide, sinon la division est impossible',
      i: 's contient la somme des éléments déjà parcourus',
      t: 'moyenne([2, 4, 6]) == 4 · moyenne([5]) == 5 · moyenne([-2, 2]) == 0' },
    { s: 'Écrire une fonction indice_min(t) qui renvoie l’indice du plus petit élément d’une liste.',
      p: 'la liste ne doit pas être vide',
      i: 'i est l’indice du minimum parmi les éléments déjà parcourus',
      t: 'indice_min([3, 1, 2]) == 1 · indice_min([7]) == 0 · indice_min([2, 2]) == 0' },
    { s: 'Écrire une fonction recherche(t, v) qui renvoie True si la valeur v figure dans la liste t, et False sinon.',
      p: 'aucune : la liste peut être vide, la fonction renvoie alors False',
      i: 'aucun élément parmi ceux déjà parcourus n’est égal à v',
      t: 'recherche([1, 2], 2) == True · recherche([], 5) == False · recherche([1], 9) == False' },
    { s: 'Écrire une fonction compte(t, v) qui renvoie le nombre d’occurrences de v dans la liste t.',
      p: 'aucune : une liste vide donne 0',
      i: 'c contient le nombre d’occurrences parmi les éléments déjà parcourus',
      t: 'compte([1, 2, 1], 1) == 2 · compte([], 3) == 0 · compte([4], 4) == 1' }
  ];
  const x = R.pick(sujets);
  return {
    enonce: '<p><b>Sujet :</b></p>' + form(x.s) +
            '<p>Sur ton cahier, écris la fonction <b>avec sa spécification</b>, puis justifie ' +
            'sa terminaison et propose des tests.</p>',
    aide: 'Une fonction complète, c’est : une docstring qui dit ce qu’elle fait et ce qu’elle exige, ' +
          'un corps correct, et des tests qui couvrent le cas ordinaire et les cas limites.',
    bareme: [
      { pts: 2, d: '<b>Signature</b> correcte : <code>def</code>, le nom demandé, les bons paramètres.' },
      { pts: 2, d: '<b>Docstring</b> qui indique ce que la fonction <b>renvoie</b>, et non ce qu’elle affiche.' },
      { pts: 2, d: '<b>Précondition</b> énoncée. Ici : ' + x.p + '.' },
      { pts: 2, d: '<b>Initialisation</b> correcte des variables avant la boucle.' },
      { pts: 3, d: '<b>Boucle</b> correcte : parcours complet, aucun indice hors bornes, ' +
                   'et pas de <code>range</code> décalé d’un cran.' },
      { pts: 2, d: '<b>Valeur renvoyée</b> par <code>return</code>, et pas seulement affichée par <code>print</code>. ' +
                   'C’est l’erreur qui coûte le plus souvent des points.' },
      { pts: 2, d: '<b>Terminaison</b> justifiée : la boucle est bornée par la longueur de la liste, ' +
                   'donc elle s’arrête.' },
      { pts: 2, d: '<b>Invariant</b> proposé, même informel. Ici : ' + x.i + '.' },
      { pts: 3, d: '<b>Tests</b> écrits avec <code>assert</code>, couvrant le cas ordinaire <b>et</b> ' +
                   'les cas limites. Par exemple : ' + x.t + '.' }
    ]
  };
});
