
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var BookCatalogSchema = new mongoose.Schema({
    id: Number,
    URL_cover: String,
    title: String,
    in_stock : Number,
    price : Number,
    tasting : String,
});

module.exports = BookCatalogSchema;