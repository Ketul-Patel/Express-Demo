// This is my server.js file
// I'm gonna require all my modules and I'm gonna use them to build my set of routes and then listen on a specific port

// require express and path
var express = require('express');
// allows us to make fancy path strings that are easy and nice to use
var path = require('path');

// makes our req.body not undefined
var bodyParser = require('body-parser');
// loads the express app
var app = express();

// use bodyParser urlencoded so that we can get post data through the request
app.use(bodyParser.urlencoded());

// lets you use static stuff in the static folder 
app.use(express.static(path.join(__dirname,"./static")));

// sets the views to the views folder
app.set('views', path.join(__dirname,"./templates"));
app.set('view engine', 'ejs');

// index route that we'll mess with later
app.get('/', function(req, res) {
	res.render("index");
})

app.post('/user', function(req, res) {
	console.log("NEW PERSON", req.body);
})

app.listen(8000, function() {
	console.log("listening on 8000")
})