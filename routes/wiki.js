var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('wiki home');
});
// about del wiki
router.get('/about', function(req, res, next) {
    res.send('wiki about');
});

module.exports = router;
