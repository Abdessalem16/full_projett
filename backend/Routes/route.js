const express = require('express');
const Router = express.Router();
const offreController = require('../Controllers/methode');
const offre = require('../Models/offre');

Router.get('/afficherlisteoffre', offreController.listOffre);
Router.post('/ajouter', offreController.ajouterOffre);
Router.get('/:id/supprimer', offreController.supprimerOffre);
Router.post('/:id/modifier', offreController.modifierOffre);
Router.get('/:id/offredetail', offreController.detailOffre); 

module.exports = Router;
