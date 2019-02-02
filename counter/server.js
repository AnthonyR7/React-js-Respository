var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(6789);