'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTSTRATEGY = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const {getUserLogin} = require('../models/userModel');
passport.use(
  new Strategy((username, password, done) => {
    // get user by username from getUserLogin
    const user = getUserLogin(username);
    // if user is undefined
    if (user == undefined) {
      // return done(null, false);
      return done(null, false);
    }
    // if passwords dont match
    if (password !== user.password) {
      // return done(null, false);
      return done(null, false);
    }

    // if all is ok
    delete user.password;
    return done(null, user);
    // return done(null, user.user_id);
  })
);

passport.use(
  new JWTSTRATEGY(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234',
    },
    (jwtPayload, done) => {
      console.log('Payload', jwtPayload);
      const user = getUserLogin(jwtPayload.email);
      if (user === undefined) {
        return done(null, false);
      }
      return done(null, jwtPayload);
    }
  )
);

module.exports = passport;
