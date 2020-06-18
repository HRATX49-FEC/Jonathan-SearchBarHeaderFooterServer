const mysql = require('mysql');
const bodyparser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'prrget'
} );


connection.connect();


const getCats = (params, cb) => {
console.log(params);
  connection.query('select * from cats where name = (?)', params, (err, results) => {
    if(err) {
      console.log(err);
      cb(err, null);
    } else {
      console.log(results);
      cb(null, results);
    }
  })
};

module.exports = {
  getCats
}