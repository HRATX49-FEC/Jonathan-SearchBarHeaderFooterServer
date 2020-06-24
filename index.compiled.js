"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = process.env.PORT || 5300;

var query = require('./db/querys.js');

var bodyparser = require('body-parser');

var axios = require('axios');

app.use(express["static"](path.join(__dirname, './client/dist/')));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.get("/api/search/:catName", function (req, res) {
  var params = [req.params.catName];
  console.log(params);
  query.getCats(params, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app.listen(PORT, function () {
  console.log("connected to port: ".concat(PORT));
});
