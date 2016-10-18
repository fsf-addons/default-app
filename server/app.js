var express = require("express");
var bodyParser = require('body-parser');

const NODE_PORT = process.env.NODE_PORT || 3000;

var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + "/../client/"));

app.listen(NODE_PORT, function () {
    console.log("Server running at http://localhost:" + NODE_PORT);
});
