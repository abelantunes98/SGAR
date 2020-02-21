const express = require('express');
const authMiddle = require('../middlewares/auth');
const pagamentoService = require('../services/pagamentoService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

router.post('/adicionarpagamento', async (req, res) => {

    try {
        const resp = await pagamentoService.adicionarPagamento(req.body);
        return res.send({ resp });
    } catch (err) {
        res.status(400).send({ err });
    }
});

// Criando pagamentos a partir de uma lista.
router.post('/adicionarpagamentoslista', async (req, res) => {
        const lista = req.body;
        const resp = await pagamentoService.adicionarPagamentosPorLista(lista);
        return res.send({ resp });

});

// Apagando um pagamento por seu id.
router.delete('/apagarporid', async (req, res) => {
    try {
        const { id } = req;
        const resp = await pagamentoService.apagaPagamentoPorId(id);
        return res.send({ resp });
    } catch (err) {
        return res.status(400).send({ err });
    }
});



module.exports = app => app.use('/pagamento', router);