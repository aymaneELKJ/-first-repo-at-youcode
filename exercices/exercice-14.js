/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function calculatrice(a, b, signe){
    switch(signe){
        case "+":
            return somme (a,b)
        case "-":
            return mois(a,b)
        case "*":
            return multipli(a,b)
        case "/":
            return divition(a,b)
    }

}
function somme(a,b){
    return a + b 
}
function mois(a,b){
    return a - b
}
function multipli(a,b){
    return a * b
}
function divition(a,b){
    return a / b
}
console.log(calculatrice(2, 4,"+"))