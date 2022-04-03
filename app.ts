const express = require('express');
//import express from 'express';
import { Request, Response } from 'express';
//const express, {Application, Request, Response} from 'express';
const cors = require('cors');
//const app: Application = express();
const app = express();


app.use(express.json());
app.use(cors()); //enable CORS for all requests

var taskHeader = require("./routes/taskHeader.js");
var taskItem = require("./routes/taskItem.js");


app.use("/taskHeader", taskHeader);
app.use("/taskItem", taskItem);

app.get("/", (req: Request, res: Response) => {
    res.send ("Sorry, this is an invalid URL")
});

module.exports= app;