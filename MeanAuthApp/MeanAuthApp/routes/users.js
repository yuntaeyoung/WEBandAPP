const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const BikeStorage = require('../models/BikeStorage');
const Bike = require('../models/Bike');
const Admin = require('../models/Admin');
const Board = require('../models/Board');
const Reply = require('../models/Reply');
const GpsService = require('../models/GpsService')

//회원가입
router.post('/register', function(req, res, next) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    pass: req.body.pass,
    license_num: req.body.license_num,
    license_issued: req.body.license_issued,
    license_expiration: req.body.license_expiration
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<
//유저로그인
router.post('/authenticate', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    // if(err) throw err;
    if(!user) {
     return res.json('0');
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            license_num: user.license_num,
            license_issued: user.license_issued,
            license_expiration: user.license_expiration
          }
        });
      } else {
        return res.json('0');
      }
    })
  })
});

//유저정보보내기
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//교환소정보보내기
router.get('/BikeStorage', (req, res,next) => {
  BikeStorage.getBikeStorageAll((err, BikeStorage) => {
    console.log(BikeStorage);
    res.json({BikeStorage: BikeStorage});
  });
});

//유저정보보내기
router.get('/userinfor', (req, res,next) => {
  User.getUser((err, User) => {
    res.json(User);
  });
});

//bike정보보내기
router.get('/Bike', (req, res,next) => {
  Bike.getBikeAll((err, Bike) => {
    console.log(Bike);
    res.json({Bike: Bike});
  });
});

//어드민로그인
router.post('/adminlogin', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body.email);
  console.log(req.body.password);
  
  Admin.getAdmin(email, (err, admin) => {
    // if(err) throw err;
    if(!admin) {
     return res.json('0');
    }
    
   Admin.comparePassword(password, admin.password, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: admin}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          admin: {
             id: admin._id,
            name: admin.name,
            email: admin.email,
            license_num: admin.license_num,
            license_issued: admin.license_issued,
            license_expiration: admin.license_expiration
          }
        });
      } else {
        return res.json('0');
      }
    })
  })
});

//bike예약기능
router.post('/reserve', function(req, res, next) {

  const name = req.body.name;
  const email = req.body.email;
  console.log(name);
  console.log(email);
  Bike.change(name,email,(err, user) => {
	if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//bike예약취소
router.post('/cancel', function(req, res, next) {

  const name = req.body.name;
  console.log(name);
  Bike.cancel(name,(err, user) => {
    if(err){
      res.json({success: false, msg:'Failed', err: err})
    } else {
      res.json({success: true, msg:'registered'})
    }
  });
});

//qna보내기
router.get('/board', (req, res,next) => {
  Board.getBoardAll((err, Board) => {
    res.json(Board);
  });
});

//게시물삭제
router.post('/removeboard', (req, res,next) => {
  const title = req.body.title;
  console.log(title);

  Board.remove(title,(err, name) => {
    res.json('success');
  });
});

//어드민에서유저삭제
router.post('/removeuser', (req, res,next) => {
  const email = req.body.email;
  console.log(email);

  User.remove(email,(err, name) => {
    res.json('success');
  });
});

//qna추가
router.post('/addBoard', function(req, res, next) {

  const newBoard = new Board({
    title: req.body.content,
    username: req.body.username,
    content: req.body.title
  });

  console.log(newBoard);

  Board.addBoard(newBoard, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
	}
  });
});



//reply정보보내기
router.get('/reply', (req, res,next) => {
  Reply.getReply((err, Reply) => {
    console.log(Reply);
    res.json(Reply);
  });
});

//reply쓰기
router.post('/addreply', function(req, res, next) {

  const newreply = new Reply({
    title: req.body.title,
    reply: req.body.reply
  });

  console.log(newreply);

  Reply.addReply(newreply, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user', err: err})
    } else {
      res.json({success: true, msg:'User registered'})
    }
  });
});

//gps정보
router.get('/gpsinfor', (req, res,next) => {
  GpsService.getGps((err, GpsService) => {
    console.log(GpsService);
    res.json(GpsService);
  });
});
//==================================================>

module.exports = router;

