
// dependencies
var connection = require('./connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

function objectToSql(object) {
  var arr = [];

  for (var key in object) {
    arr.push(key + '=' + object[key]);
  }

  return arr.toString();
}

var orm = {
  all: function (tableInput, callback) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  create: function (table, columns, values, callback) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += columns.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(values.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  update: function (table, objectColumnValues, condition, callback) {
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objectToSql(objectColumnValues);
    queryString += ' Where ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

// export
module.exports = orm;