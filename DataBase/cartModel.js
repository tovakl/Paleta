
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var BookCartSchema = new mongoose.Schema({
    id        : String,
    URL_cover : String,
    title     : String,
    price     : Number,
    amount    : Number,
    userName  : String
});

module.exports = BookCartSchema;