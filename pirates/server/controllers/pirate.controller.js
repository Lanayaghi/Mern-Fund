const { Pirate } = require('../models/pirate.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//------------------------------- Creating a pirate ---------------------------------
module.exports.createPirate = (request, response) => {
    const { pirateName, img, treasure, phrase, position, Peg, Eye, Hook} = request.body;
    console.log(request.body)
    Pirate.create({
        pirateName,
        img,
        treasure,
        phrase,
        position,
        Peg,
        Eye,
        Hook
        
        
    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}
//---------------------------------------------------------------------------------

//------------------------------- Getting All pirates------------------------------
module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
    }
//-----------------------------------------------------------------------------------

//------------------------------ Get One Pirate--------------------------------------
module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------

//------------------------------ Update Pirate --------------------------------------
// module.exports.updatePirate = (request, response) => {
//     Pirate.findOneAndUpdate({_id:request.params.id},request.body,{new:true,runValidations:true})
//         .then(productUpdated => response.json(productUpdated))
//         .catch(err => response.status(400).json(err))
// }
//-----------------------------------------------------------------------------------


//------------------------------ Delete a pirate --------------------------------------
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}