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

// Atualiza os dados de um usuário, apenas se o usuário que está
// logado estiver alterando seus próprios dados.
// É necessária a presença do email nos dados do usuário à ser alterado.
atualizaUsuario = async function (dados, token) {
    
    try {
        const { email } = dados;
        if (! await verificaExistenciaUser(email)){
            throw 'Usuário não localizado no sistema.';
        }
        
        if (!(await comparaIdTokenEmail(token, email))) {
            throw 'Um usuário só pode alterar seus própios dados.';
        }
        const att = await User.findOneAndUpdate({ email }, {$set:dados}, {new: true});
        return att;
    } catch (err) {
        return err;
    }

}

// Atualizando o E-mail de um usuário.
// Apenas quando o mesmo está logado.
atualizaEmailUser = async function (dados, token) {
    
    const {email, novoEmail} = dados;
    try {
        if (! await verificaExistenciaUser(email)) {
            throw 'Usuário não localizado no sistema!';
        }

        if (!(await comparaIdTokenEmail(token, email))){
            throw 'Um usuário só pode alterar seu próprio E-mail.';
        }
        const idUser = await retornaIdUser(email);
        const att = await User.findOneAndUpdate({ _id: idUser }, {$set:{email:novoEmail}}, {new: true});
        return att;
    } catch (err) {
        return err;
    }
}

verificaExistenciaUser = async function (email) {
    const user = await User.findOne({ email });
    return (user != null);
}

// Capturando id de um usuário no BD, a partir de seu email.
retornaIdUser = async function (email) {
    const userDB = await User.findOne({ email });
    if (userDB != null) {
        return userDB._id;
    }
}

// Capturando id de um usuário no BD por seu token de acesso.
retornaIdPorToken = async function (token) {
    const idUser = await jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return null;
        }
        return decoded.id;
    });
    return idUser;
}

// Comparando se o usuário logado é o mesmo do E-mail passado
comparaIdTokenEmail = async function(token, email) {
    const userId = await retornaIdUser(email);
    const reqId = await retornaIdPorToken(token);
    if (!(userId == reqId)) {
        return false;
    }
    return true;
}

module.exports = { criarUsuario, verificaExistenciaUser, login, retornaIdPorToken, atualizaUsuario, atualizaEmailUser};