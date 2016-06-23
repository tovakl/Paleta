var express = require('express');
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var catalogSchema = require('../Database/catalogModel');
var BooksCatalog = db.model('BooksCatalog',catalogSchema);

var cartSchema = require('../Database/cartModel');
var ShoppingCart = db.model('ShoppingCart',cartSchema);

//routing
router.get('/loadBooks', loadBooks);
router.get('/addBookToCart/:id', addBookToCart);


module.exports = router;

function loadBooks(req, res){

    //Getting all documents from books catalog collection and put in books array
    BooksCatalog.find({},function(err,books ){
        res.json(books);
    });
}


function addBookToCart(req, res){
    var bookId = req.params.id;
    var book;
    BooksCatalog.findOne({id : bookId},function(err,book ){
     if(book.in_stock>0)
     {
         //Creating collection shopping cart, inserting documents
         var obj = new ShoppingCart({id:book.id,URL_cover:book.URL_cover,title:book.title,price:book.price});
         obj.save();
         console.log("Before UPdate");
         BooksCatalog.update({id:book.id},{in_stock: "2"});
         console.log("after Update");

     }
        else
     {
         console.log("cant add to table");
     }

    });
}
        

   


