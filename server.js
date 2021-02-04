const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = 8080;
console.log('starting app on port' + port + 'via server.js...')

app.listen(port);