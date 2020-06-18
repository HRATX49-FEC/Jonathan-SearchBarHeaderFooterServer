const express = require('express');
const app = express();
const path = require('path');
const PORT = 5300;
const query = require('./db/query.js');
const bodyparser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


app.use(cors());


app.use(express.static(path.join(__dirname, '/prrget')));

app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());

app.get('/cats/:catName', (req, res) => {
  var params = [req.params.catName];

  console.log(params);
  query.getCats(params, (err, results) => {
    if(err) {
      console.log('error getting from server: ', err)
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  })
});


app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});