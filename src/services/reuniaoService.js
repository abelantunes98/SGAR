const Reuniao = require('../models/Reuniao');

// Adicionando uma reunião da associação.
adicionarReuniao = async function(reqBody) {
    
    try {
        const reuniao = await Reuniao.create(reqBody);
        return reuniao;
    } catch (err) {
        return err;
    }
}

// Adicionando multiplas reuniões no sistema a partir de um array de 
// Jsons.
adicionarReunioesPorLista = async function(lista) {
    try {
        const saida = [];
        for (indice in lista) {
            const reuAdd = await Reuniao.create(lista[indice]);
            saida[indice] = reuAdd;
        }
        return saida;
    } catch (err) {
        return err;
    }
}

// Listando todas as reuniões.
listarTodasReunioes = async function() {
    try {
        const reunioes = await Reuniao.find();
        return reunioes;
    } catch (err) {
        return err;
    }    
}

// Listando todas as reuniões de um responsável, por seu email.
listarReunioesEmail = async function(email) {
    try {
        const reunioes = await Reuniao.find({emailAdm: email});
        return reunioes;
    } catch (err) {
        return err;
    }    
}

// Listando reunioes de um determinado intervalo de tempo.
// Referente a data da reunião.
listarReunioesIntervalo = async function(datInicial, datFinal) {
    const reunioes = await Reuniao.find({ dataRealizada: {$gt: datInicial, $lt: datFinal}});
    return reunioes;
}

// Listando reuniões de um determinado intervalo de tempo.
// Referente a data de inserção.
listarReunioesIntervaloInsercao = async function(datInicial, datFinal) {
    const reunioes = await Reuniao.find({ createdAt: {$gte: datInicial, $lte: datFinal}});
    return reunioes;
}

// Apagando reunião do sistema.
apagaReuniaoPorId = async function(id) {
    try {
        const resp = await Reuniao.findOneAndDelete({_id:id});
        return resp;
    } catch (err) {
        return err;
    }
}

// Verifica se já existe a reunião por seu id.
verificaExistenciaReuniaoPorId = async function(_id) {
    const reuniao = await Reuniao.findOne({ _id });
    return (reuniao != null);
}

module.exports = { adicionarReuniao, listarTodasReunioes, listarReunioesEmail, listarReunioesIntervalo, listarReunioesIntervaloInsercao, adicionarReunioesPorLista, apagaReuniaoPorId };