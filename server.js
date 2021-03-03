const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const db = require('./config/keys').MongoURI
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//----------------------------Middleware---------------------------------

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}))
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);

//-------------------------Routes-----------------------------------------

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/users', require('./routes/users'))

const port = 5000;
console.log('starting app on port: ' + port + ' via server.js...')
app.listen(port);