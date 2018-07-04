var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require('fs')
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res){
	fs.readFile('./test.json', 'utf8', function(err, data) {
	    stringifyFile = data
	    res.send(data);
	});
})

app.post('/updateNote/:note', function(req, res){
	stringifyFile.concat(req.params.note);
	fs.writeFile('./test.json', stringifyFile, function() {
	    console.log('file updated');
	});
})

app.listen(3000)