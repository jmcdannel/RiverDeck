var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    mongoose = require('mongoose');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
var app = express();

// Database

mongoose.connect('mongodb://localhost/testruns');

// Config

//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(application_root, "www")));
app.use(express.query());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.get('/api', function (req, res) {
  res.send('Test API is running');
});

var RiverRun = new mongoose.Schema({
    name: { type: String, required: true },
    notes: { type: String, required: false },
    usgsID: { type: String },
    stats: {
      miles: { type: Number, required: true },
      vertical: { type: Number, required: true },
      difficulty: { type: String, required: true }
    },
    location: {
      state: { type: String },
      country: { type: String },
      lat: { type: Number },
      lng: { type: Number },
      drainage: {}
    },
    access: {
      putin: {
        name: { type: String },
        directions: { type: String },
        lat: { type: Number },
        lng: { type: Number }
      },
      takeout: {
        name: { type: String },
        directions: { type: String },
        lat: { type: Number },
        lng: { type: Number }
      }
    },
    levels: {
      low: {
        min: { type: Number },
        max: { type: Number },
        notes: String
      },
      medium: {
        min: { type: Number },
        max: { type: Number },
        notes: String
      },
      high: {
        min: { type: Number },
        max: { type: Number },
        notes: String
      }
    }
});

var RiverRunModel = mongoose.model('RiverRun', RiverRun);

app.get('/api/runs', function (req, res){
  return RiverRunModel.find(function (err, products) {
    if (!err) {
      return res.send(products);
    } else {
      return console.log(err);
    }
  });
});

app.post('/api/runs', function (req, res){
  var run;
  console.log("POST: ");
  console.log(req);
  run = new RiverRunModel({
    name: req.body.name,
    stats: {
      miles: req.body.miles ,
      vertical: req.body.vertical,
      difficulty: req.body.difficulty
    }
  });
  run.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(run);
});

// Launch server

app.listen(8080);
