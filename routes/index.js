var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Home Page' });
});

router.get('/comments', function(req, res, next) {
  res.render('message', {title: 'Message Board', messages: messages})
  
});

router.get('/comments/api', function(req, res, next) {
  res.json(messages)
});


// handling new forms

router.get('/new', function(req, res, next){
  res.render('form', {title: 'Greetings User'})
})

router.post('/new', function(req, res, next){

  const book = {
    
    text: req.body.usermessage,
    user: req.body.username,
    added: new Date()
  }
  
  messages.push(book)
  console.log(messages)
  return res.redirect('/comments')
  
})



module.exports = router;
