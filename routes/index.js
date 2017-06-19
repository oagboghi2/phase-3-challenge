var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/zero', function(req, res, next) {
  res.render('index', { title: '0' });
});

////////variables//////////////////////
var page = function num(a){
  b = a + 10;
  console.log(b);
};
page(1);

console.log(` ${page(10)} `);
///////index//////////////////////////ß

module.exports = router;
