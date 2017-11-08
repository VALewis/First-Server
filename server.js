var express = require('express');
var app = express();

app.use(express.static('./'))
app.get('/', function (request, response) {  
	response.send('Your very first server, great!');
});

var server = app.listen(3000, function() {
	console.log('Listening to port 3000');
});