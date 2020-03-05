const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/controllerUser')(app);
require('./controllers/controllerAssociado')(app);
require('./controllers/controllerPagamento')(app);
require('./controllers/controllerGasto')(app);
app.listen(3000);