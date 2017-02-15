const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Q = require('./query-helper')

router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  Q.validSignIn(username, passowrd)
    .then((result) => {
      if (username === result[0].username && bcrypt.compareSync(password, result[0].password))  {
        //assigning JWT here .then(res.redirect(/drive))
        res.redirect('/drive')
      } else {
        res.redirect('/')
      }
    })
})

router.post('/signup', (req, res, next) => {
  let userInfo = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password),

  }
    Q.validSignUp(userInfo.username)
      .then((result)  => {
        Q.createUser(userInfo)
          .then((result) =>  {
            res.redirect('/drive')
          })
      })
      .catch((error)  => {
        console.log('username exists already')
      })
})

module.exports = router;
