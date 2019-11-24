const config = require('../../config');
const mongoose = require('mongoose');

mongoose.connect('mongodb://51.89.139.147:27017/criticalquestion', config.db.options);

module.exports = mongoose;
