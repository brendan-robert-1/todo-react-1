const express = require('express')
const router = express.Router()


//Register handle
router.post('/register', (req, res) => {
    const{username, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!username || !email || !password || !password2){
        errors.push({msg: "Please fill in all fields"})
    }
    //check passwords match
    if(password !== password2){
        errors.push({msg:'Passwords do not match'})
    }
    //check pass length
    if(password.length < 7){
        errors.push({msg: 'Password should be at least 7 characters'})
    }
    if(errors.length > 0){
        res.send({successful:false, errors: errors})
    }else {
        res.send({successful:true, msg:"Registration successful. You may now log in."})
    }
});
module.exports = router;