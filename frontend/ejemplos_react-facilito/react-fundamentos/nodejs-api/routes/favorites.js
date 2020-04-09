const express = require('express');
let router = express.Router();

const authenticateOwner = require('../middlewares/authenticateOwner');
const findUser = require('../middlewares/findUser');

const favoritesController = require('../controllers/FavoritesController');

const jwtMiddleware = require('express-jwt');
const secrets = require('../config/secrets');

router.route('/')
  .get(jwtMiddleware({secret: secrets.jwtSecret}),findUser,favoritesController.index)
  .post(favoritesController.create);

router.route('/:id')
  .delete(favoritesController.find,authenticateOwner,favoritesController.destroy)

module.exports = router;
