const Socio = require('../models/Socio');

// Criar sócio com data em formato americano mm/dd/aaaa 
criarSocio = async function (userReq) {

    try {
        const socio = await Socio.create(userReq);
        return socio;    
    } catch (err) {
        return 'Erro no cadastro!';
    }
}

// Apagando um associado a partir de seu cpf.
apagarSocio = async function (cpf) {

    try {
        if (! await verificaExistenciaSocio(cpf)) {
            throw 'Sócio inexistente no sistema!'
        }
        await Socio.findOneAndDelete({ cpf });
        return 'Sócio apagado!'
    } catch (err) {
        return err;
    }
}

// Atualizando dados de um socio.
// Entre os dados, o cpf do sócio deve está presente.
atualizaSocio = async function(dados) {
    
    try {
        const { cpf } = dados;
            if (!await verificaExistenciaSocio(cpf)){
                throw 'Sócio não localizado no sistema!'
            }
            const att = await Socio.findOneAndUpdate({ cpf }, {$set:dados}, {new: true});
            return att;
    } catch (err) {
        return err;
    }
}

// Atualizando o cpf de um sócio.
atualizaCpfSocio = async function (dados) {
    
    const {cpf, novoCpf} = dados;
    try {
        if (! await verificaExistenciaSocio(cpf)) {
            throw 'Sócio não localizado no sistema!';
        }
        const idSocio = await retornaIdSocio(cpf);
        const att = await Socio.findOneAndUpdate({ _id: idSocio }, {$set:{cpf:novoCpf}}, {new: true});
        return att;
    } catch (err) {
        return err;
    }
}

// Verificando se um usuário está presente no BD a partir de seu cpf.
verificaExistenciaSocio = async function (cpf) {
    const socioDB = await Socio.findOne({ cpf });
    return (socioDB != null);
}

// Capturando id de um sócio no BD, a partir de seu cpf.
retornaIdSocio = async function (cpf) {
    const socioDB = await Socio.findOne({ cpf });
    if (socioDB != null) {
        return socioDB._id;
    }
}

module.exports = { criarSocio, verificaExistenciaSocio, apagarSocio, atualizaSocio, atualizaCpfSocio };