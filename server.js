
var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');
var mongoose = require('mongoose');
//var catalogSchema = require('./DataBase/catalog');
//var Catalog = mongoose.model('Catalog', catalogSchema);


config={
    mongoURL:'mongodb://paleta:123@ds038739.mlab.com:38739/paleta_db'
};

var options=
{
    server:
    {
        auto_reconnect: true,
    }
};

var db = mongoose.createConnection(config.mongoURL, options);

//db = mongoose.connection;// a global connection variable
// Event handlers for Mongoose
db.on('error', function (err) {
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
});


app.use(express.static(__dirname+'/Client'));
app.get('/',function (req, res) {
      res.sendFile(path.join(__dirname+'/Client/index.html'));
});

//listen on port
var server = app.listen(3000, function(){
    console.log('Server listening at 3000');
});
