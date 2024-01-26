
const mongoose = require('mongoose');
const offreemploi = new mongoose.Schema({//création  nouvelle collection
    titre:{
        type : String ,
        required :true
    },
    description:{
        type : String ,
        required :true
    },
    datedebut:{
        type : Date ,
        required :true
    },
    datefin:{
        type : Date ,
        required :true
    }
})

module.exports = mongoose.model('offre',offreemploi);

// =>voila c'est définition collection d'offre