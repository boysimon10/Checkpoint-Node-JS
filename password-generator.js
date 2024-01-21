// Importez le module 'generate-password'
const generator = require('generate-password');

// Générez un mot de passe avec les options spécifiées
const password = generator.generate({
    length: 12,                    // Longueur du mot de passe (12 caractères dans cet exemple)
    numbers: true,                 // Inclure des chiffres dans le mot de passe
    symbols: true,                 // Inclure des symboles dans le mot de passe
    uppercase: true,               // Inclure des lettres majuscules dans le mot de passe
    excludeSimilarCharacters: true, // Exclure les caractères similaires (par exemple, 'i', 'l', '1', 'I', 'o', '0', 'O')
});

console.log(password);
