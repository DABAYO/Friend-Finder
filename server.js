// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const index = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use("/api", apiRoutes);
app.use("/", index);


// routes
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);


// listener
app.listen(PORT, function () {
  console.log("...app is listening on PORT " + PORT);
});