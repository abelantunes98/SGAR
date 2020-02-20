const Pagamento = require('../models/Pagamento');

// Adicionando pagamento de mensalidade de um sócio.
// Faltam verificações de existencia de admin e socio
adicionarPagamento = async function(reqBody) {
    
    try {
        const { cpfSocio, dataReferente } = reqBody;
        if (await verificaExistenciaPagamento(cpfSocio, dataReferente)) {
            throw 'Esse pagamento já foi cadastrado no sistema!';
        }
        const pag = await Pagamento.create(reqBody);
        return pag;
    } catch (err) {
        return err;
    }
}

// Verifica se já existe o pagamento do sócio no mês referido.
verificaExistenciaPagamento = async function(cpfSocio, dataReferente) {
    const pag = await Pagamento.findOne({ cpfSocio, dataReferente });
    return (pag != null);
}

module.exports = { adicionarPagamento };