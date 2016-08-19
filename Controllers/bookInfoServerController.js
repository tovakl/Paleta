
var express = require('express');

var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var BookInfoSchema = require('../DataBase/catalogModel');
var BooksInformation = db.model('BooksCatalog',BookInfoSchema);

var cartSchema = require('../Database/cartModel');
var ShoppingCart = db.model('ShoppingCart',cartSchema);


//routing
router.get('/loadBookInfo/:id', loadBookInfo);
router.get('/addBookToCart/:id', addBookToCart);

module.exports = router;

function loadBookInfo(req, res) {
    var bookId = req.params.id;
    BooksInformation.find({id: bookId}, function (err, booksinfo) {
        if (err)
            res.send(err);

        res.json(booksinfo); // return the book information in JSON format
    });
}

function reduceStock(res,book){
    var in_stock;

    in_stock = book.in_stock;
    console.log(in_stock);
    in_stock = in_stock - 1;
    console.log(in_stock);

    BooksInformation.findOneAndUpdate({id: book.id}, {$set: {in_stock: in_stock}}, {new: true}, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
        res.json({msg: "הוספת ספר זה לסל הקניות שלך"});

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

    BooksInformation.findOne({id : bookId},function(err,book ){
        if(book.in_stock>0)
        {
            ShoppingCart.findOne({id: book.id, userName: req.session.user.userName},function(err, cartBook) {
                if(err){
                    console.log("Something wrong with finding a book!");
                    return;
                }

                if(cartBook != null)
                {
                    amount = cartBook.amount;
                    amount = amount + 1;

                    ShoppingCart.findOneAndUpdate({id: cartBook.id, userName: req.session.user.userName}, {$set: {amount: amount}}, {new: true}, function(err, doc){
                        if(err){
                            console.log("Something wrong when updating data!");
                        }

                        console.log(doc);

                        reduceStock(res,book);
                    });

                }
                else
                {
                    obj = new ShoppingCart({id:book.id,URL_cover: book.URL_cover, title : book.title, price : book.price, amount : 1,userName: req.session.user.userName});
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




