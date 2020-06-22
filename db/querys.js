const mysql = require('mysql');
const bodyparser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'prrget'
} );


connection.connect(err => {
  if(err) {
    console.log(`couldnt connect to database`)
  } else {
    console.log('connected to mysql database')
  }
});


const getCats = (params, cb) => {

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