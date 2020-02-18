const express = require('express');
authMiddle = require('../middlewares/auth');
socioService = require('../services/socioService');

const router = express.Router();

router.use(authMiddle);

router.post('/criar', async (req, res) => {
    try {
        const { cpf } = req.body;
        if (socioService.verificaExistenciaSocio(cpf)) {
            throw 'Sócio já cadastrado!';
        }

        const socio = await socioService.criarSocio(req.body);
        // Removendo senha do response.
        return res.send({ socio });
    } catch (err) {
        return res.status(400).send({ error: err});
    }
});

module.exports = app => app.use('/socio', router);