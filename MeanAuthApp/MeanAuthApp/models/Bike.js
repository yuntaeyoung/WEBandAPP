const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const BikeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  battery: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  reserve: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  }
});

const Bikes = module.exports = mongoose.model('Bikes', BikeSchema, 'Bikes');


module.exports.getBikeAll = function(callback){
  Bikes.find(callback);
}


module.exports.change = function(name,email,callback){
  const query = {name: name}
  Bikes.update(query,{$set:{reserve:"false", email: email}},callback);
}

module.exports.cancel = function(name,callback){
  const query = {name: name}
  Bikes.update(query,{$set:{reserve:"true", email:" "}},callback);
}
