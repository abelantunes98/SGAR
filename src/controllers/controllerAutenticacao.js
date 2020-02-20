const express = require('express');
const userService = require('../services/userService');
const authMiddle = require('../middlewares/auth');

const router = express.Router();

router.post('/register', async(req, res) => {
    
    try {
        const { email } = req.body;
        const userDB = await userService.verificaExistenciaUser(email);
        if (userDB) {
             throw 'Usuário já cadastrado!';
        }

        const user = await userService.criarUsuario(req.body);
        // Removendo senha do response.
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: err});
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    if (await userService.verificaExistenciaUser(email)) {
        resp = await userService.login(email, password);
        return res.send({ resp });
    } else {
        return res.status(400).send({ error: 'Usuário não encontrado!' });
    }
});

router.post('/update', authMiddle, async (req, res) => {
    
    try {
        const dados = req.body;
        const authHeader = req.headers.authorization;
        const parts = authHeader.split(' ');
        const [ scheme, token ] = parts;

        resp = await userService.atualizaUsuario(dados, token);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
})

//https://www.youtube.com/watch?v=KKTX1l3sZGk
module.exports = app => app.use('/auth', router);