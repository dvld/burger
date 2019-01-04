
// dependencies
var mysql = require('mysql');

// create connection
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'W!nt3rL1nk',
  database: 'burgers_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// export connection
module.exports = connection;