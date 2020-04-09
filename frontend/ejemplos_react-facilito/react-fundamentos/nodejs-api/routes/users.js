const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');

const sessionsController = require('../controllers/sessionsController');

router.route('/')
  .post(
      usersController.create,
      sessionsController.generateToken,
      sessionsController.sendToken);

module.exports = router;
