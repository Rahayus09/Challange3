var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/', function (req, res) {
  res.render('index', { layout: false});
});

router.get('/dashboard', function (req, res) {
  res.render('dashboardTable');
});

router.get('/listCar', function (req, res) {
  res.render('listCar');
});

router.get('/newCar', function (req, res) {
  res.render('addNewCar');
});

module.exports = router;