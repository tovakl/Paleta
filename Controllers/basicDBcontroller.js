
var express = require('express');
var router = express.Router();

var mongoose = require ('mongoose');

var catalogSchema = require('../Database/catalog.js');

var Catalog = mongoose.model('Catalog',catalogSchema);




function init(){
    var book = new Catalog ({id:1 ,title: "אביויו"  , URL_cover: "", description:"הספר מוצלח... יש לקוות"});
        book.save();

        book = new Catalog ({id:2 ,title: "די די"  , URL_cover: "", description:"הספר מוצלח... יש לקוות"});
        book.save();


    console.log("end of init");




}


