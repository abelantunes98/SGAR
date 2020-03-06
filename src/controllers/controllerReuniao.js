const express = require('express');
const authMiddle = require('../middlewares/auth');
const gastoService = require('../services/reuniaoService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

router.post('/adicionarreuniao', async (req, res) => {

    try {
        const resp = await reuniaoService.adicionarReuniao(req.body);
        return res.send({ resp });
    } catch (err) {
        res.status(400).send({ err });
    }
});

// Retornando todas as reuniões cadastradas.
router.get('/listar', async (req, res) => {
    try {
        const resp = await reuniaoService.listarReunioes();
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Listando reunioes de um responsável, por seu cpf.
router.get('/listarporcpf', async (req, res) => {
    try {
        const { cpf } = req.body;
        const resp = await reuniaoService.listarReunioesCpf(cpf);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Listando reuniões a partir de um intervalo de datas.
// Intervalo referente a reunião.
router.get('/listarpordatareuniao', async (req, res) => {
    try {
        const {datInicial, datFinal} = req.body;
        const resp = await reuniaoService.listarReunioesIntervalo(datInicial, datFinal);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Listando reuniões a partir de um intervalo de datas.
// Intervalo referente a inserção da reunião.
router.get('/listarpordatainsercao', async (req, res) => {
    try {
        const {datInicial, datFinal} = req.body;
        const resp = await reuniaoService.listarReunioesIntervaloInsercao(datInicial, datFinal);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});

// Criando reuniões a partir de uma lista.
router.post('/adicionarreunioeslista', async (req, res) => {
    try {    
        const lista = req.body;
        const resp = await reuniaoService.adicionarReunioesPorLista(lista);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }

});

// Apagando uma reunião por seu id.
router.delete('/apagarporid', async (req, res) => {
    try {
        const { id } = req.body;
        const resp = await reuniaoService.apagaReuniaoPorId(id);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});



module.exports = app => app.use('/reuniao', router);