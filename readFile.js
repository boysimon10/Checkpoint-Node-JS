// Import du module fs (système de fichiers) de Node.js
const fs = require('fs');

// Lecture du contenu du fichier 'welcome.txt' avec l'encodage 'utf8'
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        // Gestion des erreurs lors de la lecture du fichier
        console.error('Error reading file:', err);
    } else {
        // Affichage du contenu du fichier 'welcome.txt'
        console.log('Content of "welcome.txt":', data);
    }
});
