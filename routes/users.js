const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const passport = require('passport')
// User model
const User = require('../models/User')

//Register handle
router.post('/register', (req, res) => {
    const{username, email, password, passwordConfirmation} = req.body;
    console.log('got registration request for: ', username)
    let errors = [];

    //check required fields
    if(!username || !email || !password || !passwordConfirmation){
        errors.push("Please fill in all fields")
    }
    //check passwords match
    if(password !== passwordConfirmation){
        errors.push('Passwords do not match')
    }
    //check pass length
    if(password.length < 7){
        errors.push('Password should be at least 7 characters')
    }
    if(errors.length > 0){
        res.send({successful:false, errors: errors})
    }else {
        //Validation passes
        User.findOne({email: email})
        .then(user => {
            if(user) {
                // User already exists
                console.log(`${username} User already exists...`)
                res.send({successful:false, errors: ["Email is already registered."]})
            } else {
                // new user
                const hashedPassword = bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    const newUser = new User({
                        username: username,
                        email: email,
                        password: hash
                    });
                    console.log('Saving to db...')
                    newUser.save()
                        .then(user => {
                            console.log(`successfully saved ${username} to database`)
                            res.send({successful:true, msg:"Registration successful. You may now log in."})
                        })
                        .catch(err => console.log(err));
                }).catch(err => console.log(err))
               
            }
        });
    }
});
router.post('/login', (req, res, next) => {
    console.log('Got log in request for ', req.body.email);
    passport.authenticate("local", (err, user, info)  => {
        if(err) throw err;
        if(!user) res.send({successful: false, errors:["Login failed."]})
        else {
            req.logIn(user, err => {
                if(err) throw err;
                console.log(`${user.username} logged in successfully`)
                res.send({successful: true})
            });
        }
    })(req, res, next);
});
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        console.log('logging out...')
        res.send({successful:true})
    })
});
router.get('/user', (req, res) => {
    res.send(req.user)
});
module.exports = router;