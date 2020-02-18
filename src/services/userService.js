const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js');

 criarUsuario = async function (userReq) {

    try {

        const user = await User.create(userReq);
        // Removendo senha do response.
        user.password = undefined;
        return user;
    
    } catch (err) {
        return 'Erro no cadastro!';
    }
}

verificaExistenciaUser = async function (email) {
    return await User.findOne({ email });
}

login = async function (email, senha) {
    // Pegando um campo marcado como no select
    user = await User.findOne({ email }).select('+password');

    if (!await bcrypt.compare(senha, user.password)) {
        return 'Senha incorreta!';
    }

    user.password = undefined;
    // Gerando Token de login.
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
    });
    return {user, token};
}

module.exports = { criarUsuario, verificaExistenciaUser, login };