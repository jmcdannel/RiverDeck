var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testruns');
exports.db = mongoose;
