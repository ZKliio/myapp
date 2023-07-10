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

// router.post('/new', function(req, res, next){

//   const book = {
    
//     text: req.body.usermessage,
//     user: req.body.username,
//     added: new Date()
//   }
  
//   messages.push(book)
//   console.log(messages)
//   return res.redirect('/comments')
  
// })
const mongoose = require('mongoose')
const newbook = require('../models/bookModel')

mongoose.set("strictQuery", false)
router.post('/new', async function(req, res, next){
  const booktoarray = {
      text: req.body.usermessage,
      user: req.body.username,
      added: new Date()
  }
  try {
    const book = await newbook.create({
      userName: req.body.username,
      userMessage: req.body.usermessage
    })
    messages.push(booktoarray)
    res.status(200).json(book)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({message: err.message})
  }
  
})




module.exports = router;
