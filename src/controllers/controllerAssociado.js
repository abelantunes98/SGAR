const express = require('express');
const authMiddle = require('../middlewares/auth');
const socioService = require('../services/socioService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

// Criando um novo associado.
router.post('/criar', async (req, res) => {
    try {
        const { cpf } = req.body;
        if (await socioService.verificaExistenciaSocio(cpf)) {
            throw 'Sócio já cadastrado!';
        }

        const socio = await socioService.criarSocio(req.body);
        return res.send({ socio });

    } catch (err) {
        return res.status(400).send({ error: err});
    }
});

// Criando associados a partir de uma lista.
router.post('/criarlista', authMiddle, async (req, res) => {
    try {    
        const lista = req.body;
        const resp = await socioService.criarSociosPorLista(lista);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Listando socios cadastrados em ordem alfabética.
router.get('/listar', async (req, res) => {
    try {
        const socios = await socioService.listarSocios();
        return res.send({ socios });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Apagando um associado.
router.delete('/', async (req, res) => {
    try {
        const { cpf } = req.body;
        resp = await socioService.apagarSocio(cpf);
        return res.send({ resp });
    } catch (err) {
        res.status(400).send({ error: err });
    }
})

// Atualizando um associado
router.post('/update', async (req, res) => {
    const dados = req.body;
    const resp = await socioService.atualizaSocio(dados);
    return res.send({ resp });
})

// Atualizando o cpf de um associado
router.post('/updatecpf', async (req, res) => {
    const dados = req.body;
    const resp = await socioService.atualizaCpfSocio(dados);
    return res.send({ resp });
})
module.exports = app => app.use('/socio', router);