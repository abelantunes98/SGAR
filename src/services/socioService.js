const Socio = require('../models/Socio');

 criarSocio = async function (userReq) {

    try {

        const socio = await Socio.create(userReq);
        // Removendo senha do response.
        return socio;
    
    } catch (err) {
        return 'Erro no cadastro!';
    }
}

verificaExistenciaSocio = async function (cpf) {
    return await Socio.findOne({ cpf });
}

module.exports = { criarUsuario, verificaExistenciaSocio };