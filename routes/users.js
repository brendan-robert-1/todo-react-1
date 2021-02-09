const express = require('express')
const router = express.Router()


//Login page
router.get('/loginpage', (req, res) => res.send('Login'));
module.exports = router;