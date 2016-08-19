require('rootpath')();
var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');
var port = process.env.PORT || 3000;

//initalization for using POST calls
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

var session = require('express-session');
app.use(session({
    secret: "hashsecret", resave: true,
    saveUninitialized: true
}));

app.use('/Client', express.static('Client'));
//app.use(express.static(__dirname+'/Client'));
// app.use('/app', express.static('app'));

//////////////////////////////////////////////////////////////////////////////////
/*app.use('/booksCatalog',require('./Controllers/booksCatalogServerController'));
app.use('/readingTasting',require('./Controllers/tasteReadingServerController'));
app.use('/taste',require('./Controllers/tasteServerController'));
app.use('/booksInfo',require('./Controllers/bookInfoServerController'));
app.use('/cartView',require('./Controllers/cartViewServerController'));
app.use('/userManage',require('./Controllers/userServerController'));
*/

app.get('/',function (req, res) {
      //res.sendFile(path.join(__dirname+'/Client/index.html'));
      return res.redirect('/Client');
});


//listen on port
var server = app.listen(port, function(){
   console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
