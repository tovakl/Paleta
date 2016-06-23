
var express = require('express');

var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var BookInfoSchema = require('../DataBase/catalogModel');
var BooksInformation = db.model('BooksCatalog',BookInfoSchema);


//routing
router.get('/loadBookInfo/:id', loadBookInfo);

module.exports = router;

function loadBookInfo(req, res) {
    var bookId = req.params.id;
    BooksInformation.find({id : bookId}, function (err, booksinfo)
    {
        if (err)
            res.send(err);

        res.json(booksinfo); // return all courses in JSON format
    });
}




