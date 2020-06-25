const mysql = require('mysql');
const bodyparser = require('body-parser');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || 'password123',
  database: process.env.DB_NAME || 'prrget',
  port: process.env.RDS_PORT || 3306,
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