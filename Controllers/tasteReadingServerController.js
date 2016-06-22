/**
 * Created by Tamar mamo on 21/06/2016.
 */


var express = require('express');

var app=express();

var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');

var db=mongoose.createConnection(config.connectionString);

var catalogSchema = require('../Database/catalogModel');

var BooksCatalog = db.model('BooksCatalog',catalogSchema);

//routing
router.get('/loadBooks', loadBooks);

module.exports = router;

function loadBooks(req, res){
    //Creating collection books catalog, inserting documents
    //var obj = new BooksCatalog({id:1,URL_cover:"../../DataBase/Covers/aboyoyo.JPG",title:"אביויו",description:"ספר פעוטות"});
    //obj.save();

    //Getting all documents from books catalog collection and put in books array
    BooksCatalog.find({},function(err,books ){
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



