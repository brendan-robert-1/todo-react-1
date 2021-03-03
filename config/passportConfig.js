const User = require('../models/User');
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    console.log('running local strategy config')
    passport.use(
        new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },(email, password, done) => {
            User.findOne({email: email}, (err, doc) => {
                if(err) throw err;
                if(!doc) return done(null, false) //no error and false is the user aka no user
                bcrypt.compare(password, doc.password, (err, result) => {
                    if(err) throw err;
                    if(result === true){
                        return done(null, doc); //no error and the passwords matched
                    }else  {
                        return done(null, false) //no error and passwords did not match
                    }
                })
            })
        })
    )

    // TODO this is probably bad because we are storing the actual id of the user in the cookie 
    // here is where we would use mongo session store to try to store the cookie in mongo
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            const userInfo = {
                username: user.username,
                email: user.email
            }
            cb(err, userInfo);
        })
    })
}