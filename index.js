var express = require('express');
var app = require('./app.js');
var config = require("./config/config.json");
var port = config.node_port;
app.listen(port, function () {
    //app.listen(3000, () => {
    console.log('Server started at ' + port);
});
