var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //render homepage
  res.json({response: "You sent a get request"})
});

/*
router.get('/zero', function(req, res, next) {
  res.render('index', { title: '0' });
});
*/



router.get('/api', function(req, res, next) {
  //render homepage
  res.json({response: "You sent a get request for " + req.params.id})
});

//POST requests
router.post("/", function(req, res, next){
  res.json({
    response: "You sent a POST request",
    body: req.body
  });
});
/*
router.get('/zero', function(req, res, next) {
  res.render('index', { title: '0' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: '0' });
});

router.get('/subtract', function(req, res, next) {
  res.render('subtract', { title: '0' });
});

router.get('/result', function(req, res, next) {
  res.render('result', { title: '0' });
});
*/


////////variables//////////////////////
var page = function num(a){
  b = a + 10;
  console.log(b);
};
page(1);

console.log(` ${page(10)} `);
///////index//////////////////////////ß


module.exports = router;
