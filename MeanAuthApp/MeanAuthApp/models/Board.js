const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const BoardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

const Boards = module.exports = mongoose.model('Boards', BoardSchema, 'Boards');


module.exports.getBoardAll = function(callback){
  Boards.find(callback);
}

module.exports.remove = function(title, callback){
  const query = {title: title}
  Boards.deleteOne(query,callback);
}


module.exports.addBoard = function(newBoard, callback){
      newBoard.save(callback);
}

