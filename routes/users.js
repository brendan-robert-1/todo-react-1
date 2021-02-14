const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
// User model
const User = require('../models/User')

//Register handle
router.post('/register', (req, res) => {
    const{username, email, password, passwordConfirmation} = req.body;
    console.log('got request: ' + JSON.stringify(req.body))
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
                res.send({successful:false, errors: ["Email is already registered."]})
            } else {
                // new user
                const newUser = new User({
                    username,
                    email,
                    password
                });
                
                // Hash Password
                bcrypt.genSalt(10, (error, salt) => 
                    bcrypt.hash(newUser.password, salt, (error, hash)=> {
                        if(error) throw errors;
                        newUser.password = hash;
                        console.log(newUser)
                        newUser.save()
                            .then(user => res.send({successful:true, msg:"Registration successful. You may now log in."}))
                            .catch(err => console.log(err));
                }));
            }
        });
    }
});
function usernameAvailable(username){
    return true;
}
module.exports = router;