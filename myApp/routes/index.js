var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/helloWorld', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Hello World!');
});

router.get('/contacts',function(req, res, next) {
  var dataArray = [];
  dataArray.push(new User('1','1','1','1'));
  dataArray.push(new User('2','2','2','2'));
  dataArray.push(new User('3','3','3','3'));
  dataArray.push(new User('4','4','4','4'));
  res.send(dataArray);
});

var Foo = function (name) { this.name = name; };

var User = function(fname, lname, email, password){
  this.email = email;
  this.password = password;
  this.emailVerified = false;
  this.fname = fname;
  this.lname = lname;
};

module.exports = router;
