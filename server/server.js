const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const query = require('../db/querys.js');
const bodyparser = require('body-parser');
const axios = require('axios');


app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());

app.get(`/api/search/:catName`, (req, res) => {
    var params = [req.params.catName];

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