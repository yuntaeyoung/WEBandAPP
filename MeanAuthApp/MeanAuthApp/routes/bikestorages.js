const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const BikeStorage = require('../models/BikeStorage');

//=======================================>

router.get('/locations', (req, res,next) => {
  BikeStorage.getBikeStorageAll((err, BikeStorage) => {
    res.json(BikeStorage);
  });
});

//==================================================>

module.exports = router;
