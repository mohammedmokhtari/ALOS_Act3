# ALOS_Act3
Compte rendu de tp3:

Exercice 1:
On à crée deux nouveaux json serveur déférent pour notre thème user.json et review.json avec data base originel covoiturage.json 
Index.js:on à définir les routes et middleware pour version 1 et version 2 avec les messages d'erreur 
V1: on à utiliser la stratégie Versioning through URI Path par ce que elle est La méthode la plus courante de gestion des versions d'API consiste à spécifier la version de l'API dans l'URI lui-même. C’est la méthode la plus courante car c’est aussi la plus efficace et on peut stocker chaque version avec un cache http
V2: contient v2.js: la version 2 pour api on à créer un code pour modifier le id  et delete id  et valider le middleware 
Model: contient review.js user .js pour définir reviews.json et user .json les nouveaux données
Contrôle : contient control de review et user et AuthController.js 
Middleware : contient erreur.js qui définit les erreurs dans api et notfound.js les page qui n'existe pas et validate.js les validations de api et la vérification de token 
Exercice 2:
On à implémenter les routes :signup signin login 
