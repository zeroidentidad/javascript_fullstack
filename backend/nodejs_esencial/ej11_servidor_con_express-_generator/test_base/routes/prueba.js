var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('muestra los contenidos de pruebas');
});

module.exports = router;
