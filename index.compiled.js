"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = process.env.PORT || 5300;

var query = require('./db/querys.js');

var bodyparser = require('body-parser');

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
app.get("/api/cart", function (req, res) {
  query.getCart(function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app.post("/api/cart", function (req, res) {
  params = [req.body.catName, req.body.price];
  console.log(params);
  query.postCatToCart(params, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app["delete"]("/api/cart/:catId", function (req, res) {
  params = [req.params.catId];
  console.log(params);
  query.deleteCatFromCart(params, function (err, results) {
    if (err) {
      console.log('error deleting cat from cart on server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app.listen(PORT, function () {
  console.log("connected to port: ".concat(PORT));
});
