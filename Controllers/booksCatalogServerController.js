
var express = require('express');
var app=express();
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);


var catalogSchema = require('../Database/catalogModel');

var Catalog = db.model('Catalog',catalogSchema);

//routing
router.get('/loadBooks', loadBooks);

module.exports = router;

function loadBooks(req, res){
    console.log("Connection GOOD!");
    var books={};
    db.tblBooksCatalog.find({},function(err,books ){
        console.log("books:"+ JSON.stringify(books));
        res.json(books);
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



