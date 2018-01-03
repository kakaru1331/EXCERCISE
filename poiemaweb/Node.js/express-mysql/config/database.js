var ID = process.env.SQL_ID;
var PWD = process.env.SQL_PWD;

module.exports = {
  host      : 'localhost',
  user      : ID,
  password  : PWD,
  port      : '3306',
  database  : 'my_db'
};