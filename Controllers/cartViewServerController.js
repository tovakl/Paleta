
var express = require('express');

var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var catalogSchema = require('../Database/catalogModel');
var BooksCatalog = db.model('BooksCatalog',catalogSchema);

var cartViewSchema = require('../DataBase/cartModel');
var cartView = db.model('shoppingCart',cartViewSchema);


//routing
router.get('/loadCartView', loadCartView);
router.get('/addSameBookToCart/:id', addSameBookToCart);
router.get('/reduceSameBook/:id', reduceSameBook);

module.exports = router;

function loadCartView(req, res) {
    var bookId = req.params.id;
    var finalCartData = {};

    if(req.session.user == null)
    {
        res.json({in:false, msg:"אין אפשרות להיכנס לסל הקניות ללא התחברות לאתר", cart: null});
        return;
    }

    cartView.count(function (err, count) {
        if (!err && count === 0) {

            console.log("No books",count);
            res.json({in:true, msg:"...אין עדיין ספרים בסל הקניות שלך", cart: null});
        }
        else
        {
            cartView.find({userName: req.session.user.userName}, function (err, cartData)
            {
                if (err)
                    res.send(err);


                res.json({in:true, msg:"", cart: cartData});

            });
        }
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
        res.json({msg: "הוספת לכמות הספר הנבחר בסל הקניות שלך"});

    });
}

function addSameBookToCart(req, res) {

    var bookId = req.params.id;
    var book;
    var amount;

    console.log("in add same");

    BooksCatalog.findOne({id : bookId},function(err,book ){
        if(book.in_stock>0)
        {
            cartView.findOne({id: book.id,userName: req.session.user.userName},function(err, cartBook) {

                amount = cartBook.amount;
                amount = amount + 1;

                cartView.findOneAndUpdate({id: cartBook.id,userName: req.session.user.userName}, {$set: {amount: amount}}, {new: true}, function(err, doc){
                    if(err){
                        console.log("Something wrong when updating data!");
                    }

                    console.log(doc);
                    reduceStock(res,book);
                });

            });
        }
        else
        {
            res.json({msg: "ספר זה אינו נמצא יותר במלאי"})
        }

    });
}


function incStock(res,book,more){

    var in_stock;

    BooksCatalog.findOne({id : book.id},function(err,Cbook) {

        in_stock = Cbook.in_stock;
        in_stock = in_stock + 1;

        BooksCatalog.findOneAndUpdate({id: book.id}, {$set: {in_stock: in_stock}}, {new: true}, function(err, doc){
            if(err){
                console.log("Something wrong when updating data!");
            }

            console.log(doc);

            if(more == 1) {
                res.json({msg: "הורדת מכמות הספר הנבחר בסל הקניות שלך"});
            }
            else
            {
                res.json({msg: "הסרת את הספר הנבחר מסל הקניות שלך"});
            }

        });
    });
}



function reduceSameBook(req, res) {

    var bookId = req.params.id;
    var book;
    var amount;

    cartView.findOne({id: bookId,userName: req.session.user.userName},function(err, cartBook) {

        amount = cartBook.amount;
        amount = amount - 1;

        if(amount > 0)
        {
            cartView.findOneAndUpdate({id: cartBook.id,userName: req.session.user.userName}, {$set: {amount: amount}}, {new: true}, function(err, doc){
                if(err){
                    console.log("Something wrong when updating data!");
                }

                console.log(doc);
                incStock(res,cartBook,1);
            });
        }
        else
        {
            cartView.findOneAndRemove({id: cartBook.id,userName: req.session.user.userName}, function(err, doc)
            {
                if(err){
                    console.log("Something wrong when removing data!");
                }

                console.log(doc);
                incStock(res,cartBook,0);

            });

        }

    });

}
