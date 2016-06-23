var express = require('express');
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
        res.json(books);
    });
}
 


