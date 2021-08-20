const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: { 
        type: String ,
        required: [true , 'Name is required'],
    },
    
    img: { 
        type: String,
        required: [true , 'img is required']
        
    },

    treasure : {
        type : Number,
        required: [true , 'treasure is required']
    },
    phrase: {
        type : String,
        required: [true , 'phrase is required']
    },
    position: {
        type : String,
        required: [true , 'position is required']
    },
    Peg: {type: Boolean
    },
    Eye: {type: Boolean},
        
    Hook: {type: Boolean
       },


}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);