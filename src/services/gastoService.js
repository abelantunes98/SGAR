const Gasto = require('../models/Gasto');

// Adicionando um gasto da associação.
adicionarGasto = async function(reqBody) {
    
    try {
        const gasto = await Gasto.create(reqBody);
        return gasto;
    } catch (err) {
        return err;
    }
}

// Adicionando multiplos gastos no sistema a partir de um array de 
// Jsons.
adicionarGastosPorLista = async function(lista) {
    try {
        const saida = [];
        for (indice in lista) {
            const gasAdd = await Gasto.create(lista[indice]);
            saida[indice] = gasAdd;
        }
        return saida;
    } catch (err) {
        return err;
    }
}

// Listando todos os gastos.
listarTodosGastos = async function() {
    try {
        const gastos = await Gasto.find();
        return gastos;
    } catch (err) {
        return err;
    }    
}

// Listando todos os gastos de um responsável, por seu cpf.
listarGastosCpf = async function(cpf) {
    try {
        const gastos = await Gasto.find({responsavelCpf: cpf});
        return gastos;
    } catch (err) {
        return err;
    }    
}

// Listando gastos de um determinado intervalo de tempo.
// Referente a data do gasto.
listarGastosIntervalo = async function(datInicial, datFinal) {
    const gastos = await Gasto.find({ dataGasto: {$gt: datInicial, $lt: datFinal}});
    return gastos;
}

// Listando gastos de um determinado intervalo de tempo.
// Referente a data de inserção.
listarGastosIntervaloInsercao = async function(datInicial, datFinal) {
    const gastos = await Gasto.find({ createdAt: {$gte: datInicial, $lte: datFinal}});
    return gastos;
}

// Apagando gasto do sistema.
apagaGastoPorId = async function(id) {
    try {
        if (!verificaExistenciaGastoPorId(id)) {
            throw 'Gasto não encontrado!';
        }
        const resp = await Gasto.findOneAndDelete({_id:id});
        return resp;
    } catch (err) {
        return err;
    }
}

// Verifica se já existe o pagamento por seu id.
verificaExistenciaGastoPorId = async function(_id) {
    const gasto = await Gasto.findOne({ _id });
    return (gasto != null);
}

module.exports = { adicionarGasto, listarTodosGastos, listarGastosCpf, listarGastosIntervalo, listarGastosIntervaloInsercao, adicionarGastosPorLista, apagaGastoPorId };