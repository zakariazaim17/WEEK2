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

module.exports = {
  cat_list_get,
  cat_get,
};
