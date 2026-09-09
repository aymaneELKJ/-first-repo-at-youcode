# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

en JavaScript, la différence fondamentale entre `let`, `const` et `var` servent à créer des variables, mais ils ne fonctionnent pas exactement de la même manière. 
`let` est utilisé quand je veux pouvoir changer la valeur de la variable.
`const` est utilisé quand je ne veux pas réassigner la variable après sa création.
`var` est une ancienne façon de déclarer des variables. Aujourd’hui, on utilise généralement plutôt let et const.
par exemple : 
l'age peut changer j'utilise "let age = 19;" puis je peut l'age = 20 

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

en JavaScript, les 7 types primitifs de données sont : 'string'---> text, 'number'--->numbres, 'bigint'--->tres grands numbres entiers, 'boolean'--->true or false, 'undefined'--->valeur no definie, 'null'--->absence volontaire de valeur et 'symbol'--->valeur unique utilisée notamment comme identifiant.

Par exemple: "Bonjour" est un 'string', "20" est un 'number' et "true" est un 'boolean'

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

en JavaScript, quand j’utilise `typeof null`, le résultat est "object". C’est un comportement historique considéré comme une erreur, car "null" n’est pas vraiment un objet. Cette erreur existe encore aujourd’hui pour garder la compatibilité avec les anciens programmes.

Par exemple : console.log(typeof null); le resultat est "object"

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

la différence entre l'opérateur d'égalité souple '==' et l'opérateur d'égalité stricte '===' est : '==' compare principalement les valeurs et peut convertir les types automatiquement.
'===' compare la valeur et le type sans faire de conversion.

Je préfère utiliser '===' parce que c’est plus précis et évite des résultats inattendus.

Par exemple: 5 == "5" donne true, alors que 5 === "5" donne false.

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

si je déclare une variable avec const, je ne peux pas lui donner une nouvelle valeur après sa création si j’essaie de la modifier JavaScript affiche une erreur

Par exemple :

const age = 18;
age = 19; le resultat: erreur

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Quand j’utilise '+' entre un nombre et une chaîne de caractères, JavaScript transforme le nombre en chaîne et les deux valeurs sont assemblées. On appelle cela la conversion implicite des types.

Par exemple : 5 + "5"  Le résultat est "55" 

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

L’opérateur '%' sert à trouver le reste d’une division.

Par exemple,'10 % 3' donne'1', car 10 divisé par 3 laisse un reste de 1.

Un cas d’utilisation classique est de vérifier si un nombre est pair ou impair :

8 % 2 le resultat: 0 --> nombre pair
7 % 2 le resultat: 1 --> nombre impair

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

`&&` signifie « ET » : toutes les conditions doivent être vraies pour que le résultat soit vrai.

`||` signifie « OU » : une seule condition vraie suffit pour avoir un résultat vrai.

Par exemple, avec 'age >= 18 && permis === true', il faut avoir au moins 18 ans et avoir le permis.

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, je peux utiliser `switch` à la place de plusieurs `if / else if`. C’est surtout pratique quand je dois comparer la même variable avec plusieurs valeurs précises. Pour des conditions plus complexes, je préfère utiliser `if / else if`.

Par exemple, pour vérifier le jour de la semaine selon un numéro, `switch` permet d’avoir un code plus clair.

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une valeur `falsy` est une valeur que JavaScript considère comme fausse dans une condition, même si sa valeur n’est pas directement `false`.

Par exemple: '0', '""' et 'null' sont des valeurs 'falsy'.

if (0) {
  console.log("Vrai");
} else {
  console.log("Faux");
}


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
