const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

//DB Config
const db = require('./config/keys').MongoURI

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//BodyParser
app.use(express.json());

//Cors
app.use(cors());

//Routes
app.use(express.static(path.join(__dirname, 'build')));
app.use('/users', require('./routes/users'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/usertaken', function (req, res) {
  const email = req.query.name;
  console.log("checking if email " + email + " is taken...")
  res.send({taken:false})
});


const port = 5000;
console.log('starting app on port: ' + port + ' via server.js...')
app.listen(port);