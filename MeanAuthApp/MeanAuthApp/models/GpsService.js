const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const GpsSchema = mongoose.Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
    name: {
    type: String,
    required: true
  }
});

const GpsService = module.exports = mongoose.model('GpsService', GpsSchema, 'GpsServices');


module.exports.getGps = function(callback){
  GpsService.find(callback);
}

