const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  license_num: {
    type: String,
    required: true
  },
  license_issued: {
    type: String,
    required: true
  },
  license_expiration: {
    type: String,
    required: true
  }
});

const Admins = module.exports = mongoose.model('Admins', AdminSchema, 'Admins');

module.exports.getAdminById = function(id, callback){
  Admins.findById(id, callback);
}

module.exports.getAdmin = function(email, callback){
  const query = {email: email}
  Admins.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.admininfor = function(callback){
  Admins.find(callback);
}


