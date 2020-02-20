const express = require('express');
const authMiddle = require('../middlewares/auth');
const PagamentoService = require('../services/PagamentoService');

const router = express.Router();

// Protegendo a rota.
router.use(authMiddle);

router.post('/adicionarPagamento', async (req, res) => {

});



module.exports = app => app.use('/pagamento', router);