var express = require('express');
var path = require('path');
var event = require('./EventController');
var app = express();
var bodyParser = require('body-parser');
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app/'));

app.get('/data/event/:id', event.get);
app.post('/data/event/:id', event.post);

app.listen(9000);
console.log('listening on port 9000');