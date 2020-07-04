const express = require('express');
const path = require('path');
const query = require('./db/querys.js');

const PORT = process.env.PORT || 5300;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static(path.join(__dirname, './client/dist/')));

//get request that returns a cat's data by cat name to the client
app.get(`/search/:catName`, (req, res) => {
    var params = [req.params.catName];

  query.getCat(params, (err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(404);
    } else {
      res.status(200).send(results);
    }
  })
});

//get request that retrieves all the contents of the cart table
app.get(`/search/cart/cats`, (req, res) => {
  query.getCart((err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  })
});

//this posts a cat to the cart table
app.post(`/search/cart/delete/post`, (req, res) => {
  params=[req.body.catName, req.body.price];
  query.postCatToCart(params,(err, results) => {
    if(err) {
        console.log('error getting from server: ', err)
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  })
});

//this deletes cats from the cart table 
app.delete(`/search/cart/delete/:catId`, (req, res) => {
  params=[req.params.catId];
  query.deleteCatFromCart(params,(err, results) => {
    if(err) {
        console.log('error deleting cat from cart on server: ', err)
      res.sendStatus(504);
    } else {
      res.status(200).send(results);
    }
  })
});


app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});