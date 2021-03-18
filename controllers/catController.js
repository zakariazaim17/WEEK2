'use strict';
// catController

const catModel = require('../models/catModel');

const {cats} = catModel;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const specific_cat = cats.filter((val) => val.id == req.params.id);
  res.json(specific_cat);
};

const cat_create_post = (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send('From this endpoint you can get cats.');
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
};
