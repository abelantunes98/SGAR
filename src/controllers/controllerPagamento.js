const express = require('express');
const authMiddle = require('../middlewares/auth');
const pagamentoService = require('../services/pagamentoService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

router.post('/adicionarPagamento', authMiddle,async (req, res) => {

    try {
        const resp = await pagamentoService.adicionarPagamento(req.body);
        return res.send({ resp });
    } catch (err) {
        res.status(400).send({ err });
    }
});



module.exports = app => app.use('/pagamento', router);