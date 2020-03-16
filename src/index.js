const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.options('*', cors());

require('./controllers/controllerUser')(app);
require('./controllers/controllerAssociado')(app);
require('./controllers/controllerPagamento')(app);
require('./controllers/controllerGasto')(app);
app.listen(3001);