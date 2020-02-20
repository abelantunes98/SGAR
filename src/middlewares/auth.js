const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ error: 'Acesso negado!' });
    }

    const parts = authHeader.split(' ');
    if (!parts.length === 2) {
        return res.status(401).send({ error: 'Token em formato inválido!' });
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token mal formatado!' });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: err });
        }

        req.id = decoded.id;
        return next();
    });
};