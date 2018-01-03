var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Root');
});

app.get('/persons', function(req, res) {
  var sql = 'SELECT * FROM Persons'
  connection.query(sql, function(err, rows) {
    if (err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
})