const config = require('../../config').db;
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.name}`, config.options);

module.exports = mongoose;
