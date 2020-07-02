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
app.get("/search/:catName", function (req, res) {
  var params = [req.params.catName];
  query.getCats(params, function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
});
app.get("/search/cart/cats", function (req, res) {
  query.getCart(function (err, results) {
    if (err) {
      console.log('error getting from server: ', err);
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  });
}); // app.post(`/search/cart/delete/post`, (req, res) => {
//   params=[req.body.catName, req.body.price];
//   query.postCatToCart(params,(err, results) => {
//     if(err) {
//         console.log('error getting from server: ', err)
//       res.status(504);
//     } else {
//       res.status(200).send(results);
//     }
//   })
// });
// app.get(`/search/cart/delete/:catId`, (req, res) => {
//   params=[req.params.catId];
//   query.deleteCatFromCart(params,(err, results) => {
//     if(err) {
//         console.log('error deleting cat from cart on server: ', err)
//       res.status(504);
//     } else {
//       res.status(200).send(results);
//     }
//   })
// });

app.listen(PORT, function () {
  console.log("connected to port: ".concat(PORT));
});
