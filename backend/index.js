const express = require('express');
const app = express(); // serveur 
const mongoose = require('mongoose'); // Mongoose
const cors = require ('cors');//frontend

const offre = require('./Models/offre'); // appeler Model
app.use(cors());
app.use(express.json()); // (ajouter postman )travail json qui existe de express qu'il est mon application pour traiter body se donner 
const offreRoutes = require('./Routes/route'); // Use correct relative path

// ...

// use the routes defined in offreRoutes
app.use('/offre', offreRoutes);
///////////////////---- les taches ----/////////////////////////////




//////////////////////////////////////////////

/////////////////connexion à la base de donnes ///////////////////////////////

mongoose.connect('mongodb://127.0.0.1:27017/projet_new' , { useNewUrlParser : true } )


///tester connecter ou non 

const db = mongoose.connection
//si connect on dit mongodb connecté
db.once('open',()=>{
console.log("mongodb a connecté !!!!!!");
})
//s'il y a un erreur (err)
// fonction a une paramètre err
db.on('error', err => {
    console.log('connection error :', err);
    //affiche (err)
})

///////////////////////////////////////////////////////
//execution serveur
app.listen(3000, ()=>{
    console.log("serveur demarer")
});
