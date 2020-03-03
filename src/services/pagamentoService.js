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

// Adicionando multiplos sócios no sistema a partir de um array de 
// Jsons.
adicionarPagamentosPorLista = async function(lista) {
    try {
        const saida = [];
        for (indice in lista) {
            if (await verificaExistenciaPagamento(lista[indice].cpfSocio, lista[indice].dataReferente)) {
                saida[indice] = lista[indice].cpfSocio + ' | ' + lista[indice].dataReferente + ': Pagamento já cadastrado.';
            } else {
                const pagAdd = await Pagamento.create(lista[indice]);
                saida[indice] = pagAdd;
            }
        }
        return saida;
    } catch (err) {
        return err;
    }
}

// Listando todos os pagamentos.
listarTodosPagamentos = async function() {
    try {
        const pagamentos = await Pagamento.find();
        return pagamentos;
    } catch (err) {
        return err;
    }    
}

// Listando todos os pagamentos de um sócio, por seu cpf.
listarPagamentosCpf = async function(cpf) {
    try {
        const pagamentos = await Pagamento.find({cpfSocio: cpf});
        return pagamentos;
    } catch (err) {
        return err;
    }    
}

// Apagando pagamento do sistema.
apagaPagamentoPorId = async function(id) {
    try {
        //if (!(await verificaExistenciaPagamentoPorId(_id))) {
          //  throw 'Esse pagamento não está cadastrado no sistema.';
        //}
        await Pagamento.findOneAndDelete({ id });
        return 'Pagamento apagado!';
    } catch (err) {
        return err;
    }
}

// Verifica se já existe o pagamento do sócio no mês referido.
verificaExistenciaPagamento = async function(cpfSocio, dataReferente) {
    const pag = await Pagamento.findOne({ cpfSocio, dataReferente });
    return (pag != null);
}

// Verifica se já existe o pagamento por seu id.
verificaExistenciaPagamentoPorId = async function(_id) {
    const pag = await Pagamento.findOne({ _id });
    return (pag != null);
}

module.exports = { adicionarPagamento, listarTodosPagamentos, listarPagamentosCpf, adicionarPagamentosPorLista, apagaPagamentoPorId };