# Lisa — réviser le programme, matière par matière

**Lisa** est une application de révision construite sur les programmes officiels de l'Éducation nationale.

Première matière couverte : **la spécialité mathématiques de première générale** (arrêté du 17 janvier 2019,
BO spécial n°1 du 22 janvier 2019) — 5 blocs, 12 chapitres, avec pour chacun les capacités attendues et une
fiche de cours. L'application est prévue pour accueillir **les autres matières** (`MATIERES` dans
`parts/03_programme.js`) et, plus tard, **d'autres classes** (`CLASSES`) : chaque chapitre porte un champ
`matiere` et un champ `classe`.

👉 **[bertolis-dev.github.io/lisa](https://bertolis-dev.github.io/lisa/)** — installable comme
une application (« Ajouter à l'écran d'accueil »), fonctionne hors connexion.

## Ce que fait l'application

- **Choix du chapitre en cours** — l'élève marque où elle en est ; les révisions ne piochent que dans ce
  qui a déjà été vu.
- **Exercices générés** — chaque exercice tire ses valeurs au hasard **et calcule la solution exacte en
  même temps**. Le nombre d'exercices est donc illimité et la correction, détaillée étape par étape,
  est toujours juste. Aucune IA, aucun appel réseau.
- **Cinq niveaux** : Application (10 pts) · Entraînement (15) · Type DS (25) · **Approfondissement (40)**,
  calibré sur une évaluation exigeante (paramètre littéral, changement de variable, position
  courbe / tangente, optimisation à deux étapes) · **Démonstration (50)**.
- **Démonstrations rédigées** — l'élève rédige sur son cahier, compare au corrigé et s'auto-évalue
  **ligne par ligne sur le barème**. C'est la seule façon honnête de corriger une rédaction sans IA,
  et ça apprend les attentes du correcteur.
- **Devoirs surveillés** — un sujet de 5 exercices tiré des chapitres vus, un barème, une durée
  calculée, aucune correction pendant l'épreuve. À la fin : la copie corrigée, la note sur 20
  et l'historique avec courbe de progression.
- **Fiches de cours** — pour chaque chapitre : capacités attendues du BO, définitions et propriétés,
  « à quoi ça sert », un exemple entièrement traité, les astuces qui font gagner des points,
  et les erreurs classiques.
- **Rangs** : Débutant → Confirmé → Avancé → Expert → Maître, au global et par chapitre.
- **Révision espacée** : une notion ratée revient automatiquement après 1, 3, 7 puis 16 jours.
- **Interro chrono** : 10 questions en 15 minutes.

La progression est stockée **dans le navigateur de l'élève** (`localStorage`). Rien n'est envoyé nulle part,
aucun compte n'est nécessaire, aucune donnée personnelle n'est collectée.

## Développement

Les sources sont découpées dans `parts/` et assemblées par `build.py` :

| Fichier | Rôle |
|---|---|
| `parts/01_shell.html` | feuille de style et squelette |
| `parts/02_core.js` | rendu mathématique, stockage, points et rangs |
| `parts/03_programme.js` | les 12 chapitres : capacités attendues + cours |
| `parts/04_generateurs.js` | générateurs des niveaux Application → Type DS |
| `parts/06_approfondissement.js` | générateurs du niveau Approfondissement |
| `parts/08_demonstrations.js` | démonstrations rédigées et leur barème |
| `parts/10_cours_plus.js` | « à quoi ça sert », exemples traités, astuces |
| `parts/07_fun.js` | badges, confettis, sons, objectif du jour |
| `parts/09_evaluation.js` | devoirs surveillés, copie corrigée, historique des notes |
| `parts/05_ui.js` | navigation, séries d'exercices, bilans |

```bash
python build.py
```

produit `docs/` (le site publié par GitHub Pages) et `maths_premiere.html` (variante sans en-tête HTML).

La notation mathématique est rendue **sans bibliothèque externe** : une mini-syntaxe
(`frac{}{}`, `sqrt{}`, `vec{}`, `^{}`, `_{}`) est convertie en HTML/CSS par `mathHtml()`.
