const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth');
const User = require('../models/user');
const logger=require('../logger');



router.post('/', auth.optional, (req, res, next) => {   
    const email=req.body.email;
    const password=req.body.password;
    if(!email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = new User({email: email });
  
    finalUser.setPassword(password);
  
    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }));
  });


router.post('/login', auth.optional, (req, res, next) => {
    const email=req.body.email;
    const password=req.body.password;
  
    if(!email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
    const user={
        email:email,
        password:password
    }
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        return next(err);
      }

      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }

      return res.status(400).send("");
    })(req, res, next);
  });
  
//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return Users.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
      });
  });
  
module.exports = router;