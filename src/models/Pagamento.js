const mongoose = require('../dataBase');

const PagamentoSchema = new mongoose.Schema({
    cpfSocio: {
        type: String,
        require: true,
    },
    dataReferente: {
        type: Date.UTC,
        required: true,
    },
    emailAdm :{
        type: String,
        require: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Pagamento = mongoose.model('Pagamento', PagamentoSchema);
module.exports = Pagamento;