import Reminders from './reminders'

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const setupDatabase = (filename, callback) => {
  let db = new sqlite3.Database(filename, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database:', filename);
    callback(db)
  });
}

var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/reminders', (req, res) => Reminders.all(app, req, res))

var port = process.argv[2] || 3000;

setupDatabase("./database/homebuddy.sqlite", (db) => {
  app.homebuddy.database = db
  app.listen(port)
  console.log('app listening on port ' + port)
})
