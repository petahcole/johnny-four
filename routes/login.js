const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Q = require('./query-helper')

router.post('/', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    Q.validSign(username, password)
        .then((result) => {
            if (username === result.username && bcrypt.compareSync(password, result.password)) {
                //assigning JWT here .then(res.redirect(/drive))
                res.send('Success')
                // res.redirect('/drive')
            } else {
                res.send('Not Successful')
            }
        })
})

router.post('/signup', (req, res, next) => {
    let userInfo = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),

    }
    Q
        .validSign(userInfo.username)
        .then(user => {
            if (!user) {
                Q
                    .createUser(userInfo)
                    .then(result => {
                        res.send('Success');
                    });
            } else {
                next(new Error('User already exists'));
            }
        });
})

module.exports = router;
