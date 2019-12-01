const config = require('../config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/base');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);
app.use(bodyParser.json());

const database = require('./services/mongodb');
database.connection.once('open', () => start());

const start = () => {
    config.port = config.port || 3000;
    app.listen(config.port, () => console.log(`Listening on port ${config.port}.`));
};
