"use strict"

let mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
    host: 'dbtask.cp9hk0vhcyso.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Ec0mmerce',
    database: 'taskmanager'
  });
  
  connection.connect(function(err:any) {
    if (err) throw err;
    console.log("Connected");
  });
  
  module.exports = connection;
