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
app.get('/todos', function(req, res){
  const host = process.env.MYSQL_HOST;
  const user = process.env.MYSQL_USER;
  const pw = process.env.MYSQL_PW;
  const db = process.env.DB;
  let sql = 'select todo from todos';
  connection.query(sql, (error, results, fields)=>{
    if(error){
        return console.error(error.message);
    }
    return results;
});
});
const port = 8080;
console.log('starting app on port' + port + 'via server.js...')

app.listen(port);