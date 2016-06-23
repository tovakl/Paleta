var express = require('express');
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var catalogSchema = require('../Database/catalogModel');
var BooksCatalog = db.model('BooksCatalog',catalogSchema);

//routing
router.get('/loadBooksForTaste', loadBooksForTaste);

module.exports = router;

function loadBooksForTaste(req, res){

    //Getting all documents from books catalog collection and put in books array
    BooksCatalog.find({"tasting":"true"},function(err,tastingBooks ){
        //console.log("books:"+ JSON.stringify(tastingBooks));
        res.json(tastingBooks);
    });
}










// Event handlers for Mongoose
/*db.on('error', function (err) {
 console.log('Mongoose: Error: ' + err);
 });
 db.on('open', function() {
 console.log('Mongoose: Connection established');
 });
 db.on('disconnected', function() {
 console.log('Mongoose: Connection stopped, recconect');
 mongoose.connect(config.mongoURL, options);
 });
 db.on('reconnected', function () {
 console.info('Mongoose reconnected!');
 });*/



