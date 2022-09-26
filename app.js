var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8080);
console.log("App is running at http://display.com:8080")