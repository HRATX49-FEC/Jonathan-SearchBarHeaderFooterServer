const mysql = require('mysql');
const bodyparser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  username: 'root',
  password: 'password123',
  database: 'prrget'
} );


connection.connect();


const getCats = (cb) => {

  connection.query('select * from cats', (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
};

module.exports = {
  getCats
}