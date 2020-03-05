const Pagamento = require('../models/Pagamento');

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

// Apagando gasto do sistema.
apagaGastoPorId = async function(id) {
    try {
        await Gasto.findOneAndDelete({ id });
        return 'Gasto apagado!';
    } catch (err) {
        return err;
    }
}

// Verifica se já existe o pagamento por seu id.
verificaExistenciaGastoPorId = async function(_id) {
    const gasto = await Gasto.findOne({ _id });
    return (gasto != null);
}

module.exports = { adicionarGasto, listarTodosGastos, adicionarGastosPorLista, apagaGastoPorId };