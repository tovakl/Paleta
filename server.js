
var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');
var mongoose = require('mongoose');
var catalogSchema = require('./DataBase/catalog');
var Catalog = mongoose.model('Catalog', catalogSchema);

app.use(express.static(__dirname+'/Client'));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

mongoose.connect('mongodb://localhost:27017/paleta_db');

var book = new Catalog({id:1, title:'אביויו', URL_cover:'', description:'ספר פעוטות'});
book.save(function (err, book) {
    if(err) return console.error(err);
    console.dir(book);
});

app.get('/',function (req, res) {
      res.sendFile(path.join(__dirname+'/Client/index.html'));
});

//listen on port
var server = app.listen(3000, function(){
    console.log('Server listening at 3000');
});
