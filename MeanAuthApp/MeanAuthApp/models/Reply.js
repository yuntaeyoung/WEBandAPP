const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const ReplySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  reply: {
    type: String,
    required: true
  }
});

const Replys = module.exports = mongoose.model('Replys', ReplySchema, 'Replys');


module.exports.getReply = function(callback){
  Replys.find(callback);
}


module.exports.addReply = function(newReply, callback){
      newReply.save(callback);
}

module.exports.removeReply = function(title, callback){
  const query = {title: title}
  Replys.deleteOne(query,callback);
}
