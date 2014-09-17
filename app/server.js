var express = require("express");
var restful = require('node-restful');
var path = require("path");
var bodyParser = require('body-parser');

//local vars
var application_root = path.join(__dirname, '../');

//db connect
var db = require('./db').db;

//models
var RiverRun = require('./models/river-runs');

//app
var app = express();
app.use(express.static(path.join(application_root, "www")));
app.use(express.query());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register restful APIs
RiverRun.register(app, '/api/runs');

// START THE SERVER
app.listen(8080);
console.log('Magic happens on port 8080');
