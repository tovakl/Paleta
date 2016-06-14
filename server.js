/**
 * Created by Class on 01/06/2016.
 */
var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');

app.use(express.static(__dirname+'/Client'));


app.get('/',function (req, res) {
      res.sendFile(path.join(__dirname+'/Client/index.html'));
});

//listen on port
var server = app.listen(3000, function(){
    console.log('Server listening at 3000');
});
