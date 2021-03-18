'use strict';
const jwt = require('jsonwebtoken');
const passport = require('../utils/pass');

const login = (req, res) => {
  //console.log('hello');
  // TODO: add passport authenticate
  passport.authenticate('local', {session: false}, (err, user, info) => {
    console.log('login info', info);
    if (err || !user) {
      return res.send('error', err);
    }
    req.login(user, {session: false}, (err) => {
      if (err) {
        return res.send('error');
      }
      const token = jwt.sign(user, '1234');
      return res.json({token: token});
    });
  })(req, res);
};

module.exports = {
  login,
};
