// Import du module 'http' de Node.js
const http = require('http');

// Création d'un serveur HTTP en utilisant la méthode createServer
const server = http.createServer((req, res) => {
    // Configuration de l'en-tête de la réponse avec le code de statut 200 et le type de contenu 'text/html'
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Envoi de la réponse au client avec un message HTML simple
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Définition du numéro de port sur lequel le serveur écoutera les connexions
const PORT = 3000;

// Mise en écoute du serveur sur le port spécifié
server.listen(PORT, () => {
    // Affichage d'un message dans la console lorsque le serveur démarre avec succès
    console.log(`Server is running at http://localhost:${PORT}/`);
});
