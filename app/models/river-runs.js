var restful      = require('node-restful');
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RiverRun = restful.model('RiverRun', Schema({
      name: { type: String, required: true },
      notes: { type: String, required: false },
      usgsID: { type: String },
      aliases: { type: String },
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
  })
).methods(['get', 'post', 'put', 'delete']);


module.exports =RiverRun;
