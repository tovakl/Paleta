
var mongoose = require('mongoose');

var Schema= mongoose.Schema;

var CatalogSchema = new mongoose.Schema({
    id: Number,
    URL_cover: String,
    title: String,
    description : String,
});

//var Catalog = mongoose.model('Catalog', CatalogSchema);