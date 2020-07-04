"use strict";

var express = require('express');

var path = require('path');

var query = require('./db/querys.js');

var PORT = process.env.PORT || 5300;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, './client/dist/'))); //get request that returns a cat's data by cat name to the client

app.get("/search/:catName", function (req, res) {
  var params = [req.params.catName];
  query.getCat(params, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.sendStatus(404);
    } else {
      res.status(200).send(results);
    }
  });
}); //get request that retrieves all the contents of the cart table

app.get("/search/cart/cats", function (req, res) {
  query.getCart(function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  });
}); //this posts a cat to the cart table

app.post("/search/cart/delete/post", function (req, res) {
  params = [req.body.catName, req.body.price];
  query.postCatToCart(params, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  });
}); //this deletes cats from the cart table 

app["delete"]("/search/cart/delete/:catId", function (req, res) {
  params = [req.params.catId];
  query.deleteCatFromCart(params, function (err, results) {
    if (err) {
      console.log('error deleting cat from cart on server: ', err);
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app.listen(PORT, function () {
  console.log("connected to port: ".concat(PORT));
});
