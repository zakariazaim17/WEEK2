'use strict';
// catRoute
const express = require('express');
const {users_list_get, user_get} = require('../controllers/userController');
const router = express.Router();

router.get('/', users_list_get);
router.get('/:id', user_get);
router.post('/', (req, res) => {
  res.send('From this endpoint you can get users.');
});
router.put('/', (req, res) => {
  res.send('From this endpoint you can get users.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can get userss.');
});

module.exports = router;
