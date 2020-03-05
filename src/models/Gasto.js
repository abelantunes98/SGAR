const mongoose = require('../dataBase');

const GastoSchema = new mongoose.Schema({
    valor: {
        type: Number,
        require: true,
    },
    finalidade: {
        type: String,
        require: true,
    },
    responsavelCpf: {
        type: String,
        require: true,
    },
    emailAdm: {
        type: String,
        require: true,
        lowercase: true,
    },
    dataGasto: {
        type: Date,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Gasto = mongoose.model('Gasto', GastoSchema);
module.exports = Gasto;