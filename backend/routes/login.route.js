
const express = require('express');
const app = express();
const LoginRoute = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Login model
let Loginmodel = require('../models/login_page');

// Add Login
// LoginRoute.route('/create').post((req, res, next) => {
//   Login.create((error,data) => {
   
//      if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//     });
//   });

  LoginRoute.route('/create').post(function (req, res) {
    let login = new Loginmodel(req.body);
    login.save().then(game => {
      
    res.status(200).json({ 'login': 'login Added Successfully' });
    })
    .catch(err => {res.status(400).send("Something Went Wrong"); });
   });

module.exports = LoginRoute;