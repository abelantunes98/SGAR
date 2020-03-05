const express = require('express');
const authMiddle = require('../middlewares/auth');
const gastoService = require('../services/gastoService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

router.post('/adicionargasto', async (req, res) => {

    try {
        const resp = await gastoService.adicionarGasto(req.body);
        return res.send({ resp });
    } catch (err) {
        res.status(400).send({ err });
    }
});

// Retornando todos os gastos cadastrados.
router.get('/listar', async (req, res) => {
    try {
        const resp = await gastoService.listarTodosGastos();
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Listando gastos de um responsável, por seu cpf.
router.get('/listarporcpf', async (req, res) => {
    try {
        const { cpf } = req.body;
        const resp = await gastoService.listarGastosCpf(cpf);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Criando gastos a partir de uma lista.
router.post('/adicionargastoslista', async (req, res) => {
        const lista = req.body;
        const resp = await gastoService.adicionarGastosPorLista(lista);
        return res.send({ resp });

});

// Apagando um gasto por seu id.
router.delete('/apagarporid', async (req, res) => {
    try {
        const { id } = req.body;
        const resp = await gastoService.apagaGastoPorId(id);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});



module.exports = app => app.use('/gasto', router);