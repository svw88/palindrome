var express = require('express');
var app = express();
const path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');

// configuration =================
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	'extended' : 'true'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
}));
// parse application/vnd.api+json as json
app.use(methodOverride());


app.listen(app.get('port'));
console.log("App listening");


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});