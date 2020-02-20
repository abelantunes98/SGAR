const mongoose = require('../dataBase');

const SocioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    cpf: {
        type: String,
        require: true,
        null: false,
        unique: true,
    },
    rg: {
        type: String,
        required: true,
        unique: true,
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Socio = mongoose.model('Socio', SocioSchema);
module.exports = Socio;