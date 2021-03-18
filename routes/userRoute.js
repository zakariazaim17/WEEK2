'use strict';
// catRoute
const express = require('express');
const {
  users_list_get,
  user_get,
  user_create_post,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', users_list_get);

router.get('/:id', user_get);

router.post('/', user_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can get users.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can get userss.');
});

module.exports = router;
