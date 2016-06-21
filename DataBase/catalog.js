
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var BookCatalogSchema = new mongoose.Schema({
    id: Number,
    URL_cover: String,
    title: String,
    description : String,
});

module.exports = BookCatalogSchema;