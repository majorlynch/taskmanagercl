"use strict";
exports.__esModule = true;
var express = require('express');
//const express, {Application, Request, Response} from 'express';
var cors = require('cors');
//const app: Application = express();
var app = express();
app.use(express.json());
app.use(cors()); //enable CORS for all requests
var taskHeader = require("./routes/taskHeader.js");
var taskItem = require("./routes/taskItem.js");
app.use("/taskHeader", taskHeader);
app.use("/taskItem", taskItem);
app.get("/", function (req, res) {
    res.send("Sorry, this is an invalid URL");
});
module.exports = app;
