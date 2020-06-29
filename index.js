const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5300;
const query = require('./db/querys.js');
const bodyparser = require('body-parser');


app.use(express.static(path.join(__dirname, './client/dist/')));
app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());

app.get(`/api/search/:catName`, (req, res) => {
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

app.get(`/api/cart`, (req, res) => {
  query.getCart((err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  })
});

app.post(`/api/cart`, (req, res) => {
  params=[req.body.catName, req.body.price];
  console.log(params);
  query.postCatToCart(params,(err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  })
});

app.delete(`/api/cart/:catId`, (req, res) => {
  params=[req.params.catId];
  console.log(params);
  query.deleteCatFromCart(params,(err, results) => {
    if(err) {
        console.log('error deleting cat from cart on server: ', err)
      res.status(504);
    } else {
      res.status(200).send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});