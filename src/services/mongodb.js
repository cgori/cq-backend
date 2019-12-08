const config = require('../../config').db;

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.name}`, config.options);

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = mongoose;
