const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();
let mysql = require('mysql')
app.use(express.static(path.join(__dirname, 'build')));
var jsonParser = bodyParser.json();
console.log('api host: ' + process.env.REACT_APP_API_HOST)
let connection = mysql.createConnection({
  host:process.env.MYSQL_HOST,
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PW,
  database: process.env.DB
});

connection.changeUser({database : 'todo'}, function(err) {
  if (err) throw err;
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/todos', function(req, res){
  console.log('fetching todos...')
  let sql = 'select todo from todos';
  connection.query(sql, (error, results, fields)=>{
    if(error){
        return console.error(error.message);
    }
    var resp = JSON.stringify({"status": 200, "error": null, "todos": results});
    console.log(resp);
    res.send(resp);
  });
});
app.post('/addtodo', jsonParser, function(req, res){
  if(!req.body.todo){
    return res.status(400).send({success:'false', message:'todo is required'});
  }
  var newtodo = req.body.todo;
  console.log('adding new todos ' + newtodo);
  var post = {todo: newtodo};
  var query = connection.query('INSERT INTO todos SET?',post, (error, results, fields)=>{
    if(error){
        return console.error(error.message);
    }
  });
  console.log(query.sql)
  res.send({"status":200});
});
const port = 8080;
console.log('starting app on port' + port + ' via server.js...')

app.listen(port);