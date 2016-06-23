/**
 * Created by Tamar mamo on 23/06/2016.
 */

var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var BookCartSchema = new mongoose.Schema({
    id : String,
    URL_cover: String,
    title : String,
    price : Number,

});

module.exports = BookCartSchema;