/**
 * Created by Tamar mamo on 23/06/2016.
 */
var express = require('express');

var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var cartViewSchema = require('../DataBase/cartModel');
var cartView = db.model('shoppingCart',cartViewSchema);


//routing
router.get('/loadCartView', loadCartView);

module.exports = router;

function loadCartView(req, res) {
    var bookId = req.params.id;
    cartView.find({}, function (err, cartData)
    {
        if (err)
            res.send(err);

        res.json(cartData); // return all courses in JSON format
    });
}
