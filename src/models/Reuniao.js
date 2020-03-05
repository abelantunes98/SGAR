const mongoose = require('../dataBase');

const ReuniaoSchema = new mongoose.Schema({
    dataRealizada: {
        type: Date,
        required: true,
    },
    local: {
        type: String,
        require: true
    },
    pauta: {
        type: String,
        require: true,
    },
    presentes: [{ 
        nome: {
        type: String,
        unique: true,
        }
    }],
    emailAdm: {
        type: String,
        require: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Reuniao = mongoose.model('Reuniao', ReuniaoSchema);
module.exports = Reuniao;