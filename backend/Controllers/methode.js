const offre = require('../Models/offre'); //appeler Model

///////fonction ajouter offre///////
exports.ajouterOffre = (req, res) => {
    const offreajout = {
        titre: req.body.titre,
        description: req.body.description,
        datedebut: req.body.datedebut,
        datefin: req.body.datefin
    };

    const offree = new offre(offreajout);
       //enregistrer de base de donnée
    offree.save()
        .then(createoffre => {
            return res.status(200).json({ createoffre });
        })
        .catch(error => {
            return res.status(400).json({ error });
        });
}
//fonction supprimer offre ///////
exports.supprimerOffre = (req, res) => {
    const id = req.params.id;
    
    offre.findByIdAndDelete(id)
        .then(deletedOffre => {
            if (deletedOffre) {
                return res.status(200).json({ message: "Offre supprimée avec succès" });
            } else {
                return res.status(404).json({ message: "Offre non trouvée" });
            }
        })
        .catch(error => {
            return res.status(400).json({ error });
        });
}

///////fonction liste afficher///////

exports.listOffre = async (req, res) => {
    try {
        //find : Attirer depuis la base de données
        const listoffre = await offre.find({}).exec();
        return res.status(200).json({ listoffre });
    } catch (error) {
        return res.status(400).json({ error });
    }
}
 
///////fonction modifier/////// 
exports.modifierOffre = (req, res) => {

    const id = req.params.id;
    // remettre nouvelle 
    const ModifiedObj = {
        titre: req.body.titre,
        description: req.body.description,
        datedebut: req.body.datedebut,
        datefin: req.body.datefin
    }
    ////// attirer les données  depuis de base //////
    offre.findByIdAndUpdate(id, ModifiedObj).exec()
        .then(modifiedTodos => {
            return res.status(200).json({ "message": "offre modifier avec" });
        })
        .catch(error => {
            return res.status(400).json({ error });
        });
}
///// afficher detail /////////

exports.detailOffre = async (req, res) => {
    const id = req.params.id;

    try {
        // Trouver l'offre spécifique par son ID
        const offerDetails = await offre.findById(id).exec();

        if (offerDetails) {
            return res.status(200).json({ offerDetails });
        } else {
            return res.status(404).json({ message: "Offre non trouvée" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
}
