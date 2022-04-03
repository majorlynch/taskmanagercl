const express = require('express');

const app  = require('./app.js');


let config = require("./config/config.json");
const port = config.node_port;


app.listen(port, () => {
//app.listen(3000, () => {
    console.log('Server started at ' + port);
})
