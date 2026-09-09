# 🔎 Jour 02 — Recherche

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

> Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

'for' et 'while' servent tous les deux à répéter du code. J’utilise généralement 'for' quand je connais le nombre de répétitions. J'utilise 'while' quand la répétition dépend surtout d'une condition qui doit rester vraie.

Par exemple, je peux utiliser 'for' pour répéter une action 5 fois et 'while' pour répéter une action jusqu'à ce qu'une condition devienne fausse.

### Question 02

> À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

La boucle 'do...while' permet de répéter du code tant qu'une condition est vraie. Sa différence avec 'while' est que le code de 'do...while' est exécuté au moins une fois avant de vérifier la condition.

Par exemple, si la condition est fausse dès le début, 'while' ne s'exécute pas, mais 'do...while' s’exécute une fois.

### Question 03

> Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Si j'oublie d'incrémenter la variable ou de modifier la condition d'arrêt dans une boucle `while`, la boucle peut continuer sans jamais s'arrêter. On appelle cela une **boucle infinie**.

### Question 04

> À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le mot-clé `break` permet d'arrêter une boucle immédiatement, même si la condition de la boucle est encore vraie. Il est souvent utilisé lorsqu'on a trouvé ce qu'on cherchait ou lorsqu'on veut sortir de la boucle.

### Question 05

> À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le mot-clé `continue` permet de passer à l'itération suivante d'une boucle sans exécuter le reste du code de l'itération actuelle. Contrairement à `break`, il n'arrête pas complètement la boucle.

### Question 06

> Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Dans une boucle `for`, on commence par l'initialisation, qui est exécutée une seule fois. Ensuite, on vérifie la condition. Si elle est vraie, le code de la boucle est exécuté, puis l'incrémentation est faite. Après cela, on revient vérifier la condition, et le processus continue jusqu'à ce que la condition soit fausse.

### Question 07

> Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, on peut déclarer la variable d'initialisation en dehors de la boucle `for`. Dans ce cas, on ne met rien dans la partie initialisation du `for`. La variable peut ensuite être utilisée dans la condition et l'incrémentation.

### Question 08

> Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Une boucle imbriquée est une boucle placée à l'intérieur d'une autre boucle. Elle est utile quand on doit faire une répétition à l'intérieur d'une autre répétition, par exemple pour parcourir une grille avec des lignes et des colonnes.

### Question 09

> Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Le principal risque des boucles imbriquées est de ralentir le programme. Plus il y a de boucles imbriquées, plus le nombre d'opérations peut augmenter rapidement, ce qui peut rendre le programme moins performant.

### Question 10

> Peut-on utiliser un `switch` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, on peut utiliser un `switch` à l'intérieur d'une boucle. À chaque tour de la boucle, le `switch` peut vérifier une valeur et exécuter le cas correspondant. Cela permet de faire différents traitements selon la valeur.

## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
