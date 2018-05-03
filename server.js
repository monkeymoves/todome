// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var porty = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todo')

// require stuff to access request body from posts 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/api/todos', todoRoutes); 

// listen for requests :)
var listener = app.listen(porty, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
