// Import du module nodemailer
const nodemailer = require('nodemailer');

// Configuration du transporteur (utilisation du service Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'expediteur@gmail.com', // Adresse Gmail de l'expéditeur
    pass: '' // Mot de passe Gmail ou Mot de passe d'application si la vérification en deux étapes est activée
  }
});

// Options de l'e-mail
const mailOptions = {
  from: 'Simon Le Goat <expediteur@gmail.com>', // Expéditeur avec un nom
  to: 'destinataire@gmail.com', // Adresse e-mail du destinataire
  subject: 'Envoi d\'email avec Node.js',
  html: `
    <h1>Bonjour !</h1>
    <p>Ceci est un email envoyé depuis Node.js en utilisant Nodemailer.</p>
  `
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
