'use strict';
// catRoute
const express = require('express');
const {
  cat_list_get,
  cat_get,
  cat_create_post,
} = require('../controllers/catController');
const router = express.Router();
const multer = require('multer');

const upload = multer({dest: 'uploads/'});

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), cat_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

module.exports = router;
