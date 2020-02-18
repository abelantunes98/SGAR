const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/controllerAutenticacao')(app);
require('./controllers/controllerAssociado')(app);
app.listen(3000);