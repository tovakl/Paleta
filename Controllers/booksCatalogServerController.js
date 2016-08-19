var express = require('express');
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var catalogSchema = require('../Database/catalogModel');
var BooksCatalog = db.model('BooksCatalog',catalogSchema);

var cartSchema = require('../Database/cartModel');
var cartView = db.model('ShoppingCart',cartSchema);

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

function reduceStock(res,book){
    var in_stock;

    in_stock = book.in_stock;
    in_stock = in_stock - 1;

    BooksCatalog.findOneAndUpdate({id: book.id}, {$set: {in_stock: in_stock}}, {new: true}, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
        res.json({msg: "הוספת ספר לסל הקניות שלך"});

    });
}


function addBookToCart(req, res){
    var bookId = req.params.id;
    var book;
    var amount;
    var obj;

    if(req.session.user == null)
    {
        res.json({msg: "אין אפשרות לרכוש ספרים ללא התחברות לאתר"});
        return;
    }

    BooksCatalog.findOne({id : bookId},function(err,book ){
     if(book.in_stock>0)
     {
         cartView.findOne({id: book.id,userName: req.session.user.userName},function(err, cartBook) {
             if(err){
                 console.log("Something wrong with finding a book!");
                 return;
             }

             if(cartBook != null)
             {
                 amount = cartBook.amount;
                 amount = amount + 1;

                 cartView.findOneAndUpdate({id: cartBook.id, userName: req.session.user.userName}, {$set: {amount: amount}}, {new: true}, function(err, doc){
                     if(err){
                         console.log("Something wrong when updating data!");
                     }

                     console.log(doc);

                     reduceStock(res,book);
                 });

             }
             else
             {
                 obj = new cartView({id:book.id,URL_cover: book.URL_cover, title : book.title, price : book.price, amount : 1,userName: req.session.user.userName});
                 obj.save();
                 reduceStock(res,book);
             }

         });
     }
     else
     {
         res.json({msg: "ספר זה אינו נמצא במלאי"})
     }

    });

}
        

   


