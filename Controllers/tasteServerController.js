var express = require('express');
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var tasteSchema = require('../Database/catalogModel');
var taste = db.model('BooksCatalog',tasteSchema);

//routing
router.get('/loadTasteById/:id', loadTasteById);

module.exports = router;

function loadTasteById(req, res){
    var bookId = req.params.id;

    taste.find({id : bookId}, function(err,tastingBooks ){

        if (err)
            res.send(err);

        res.json(tastingBooks);
    });
}


