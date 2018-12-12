const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Bike = require('../models/Bike');

//=======================================>

router.get('/infor', (req, res,next) => {
  Bike.getBikeAll((err, Bike) => {
    res.json(Bike);
  });
});

//==================================================>

module.exports = router;
