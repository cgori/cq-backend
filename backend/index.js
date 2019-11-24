const config = require('../config');
const database = require('./services/mongodb');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/base');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use('/api', routes);

database.connection.once('open', () => start());

const start = () => {
    app.listen(config.port, () => console.log(`Listening on port ${config.port}.`));
};
