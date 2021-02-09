const express = require('express');
const router = express.Router();

//Register Handle
router.post('/register', (req, res) => {
    console.log(req.body);
    res.send('hello')
});

module.exports = router;