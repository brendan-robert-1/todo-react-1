const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'build', 'index.html'));});
app.use('/users', require('./routes/users'))

const port = process.env.PORT || 5000;
console.log(`starting app on port ${port} via server.js...`)
app.listen(port);