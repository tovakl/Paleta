
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var BookInformationSchema = new mongoose.Schema({
    id: Number,
    summery: String,
    target: String,
    URL_taste: String,
});

module.exports = BookInformationSchema;
