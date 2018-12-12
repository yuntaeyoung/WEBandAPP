const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

/*var BikeStorage = mongoose.model('BikeStorage',{
  uid: { type: String},
  Storage_name: {type: String},
  latitude: {type: String},
  longitude: {type: String}
});

module.exports = {BikeStorage};
*/
const StorageSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  Storage_name: {
    type: String,
    required: true
  }
});

const BikeStorage = module.exports = mongoose.model('BikeStorage', StorageSchema,'BikeStorages');


module.exports.getBikeStorageAll = function(callback){
  BikeStorage.find(callback);
}

