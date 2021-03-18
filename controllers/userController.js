'use strict';
// catController

const userModel = require('../models/userModel');

const {users} = userModel;

const users_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const specific_user = users.filter((val) => val.id == req.params.id);
  res.json(specific_user);
};

module.exports = {
  users_list_get,
  user_get,
};
