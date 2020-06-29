import React from 'react';
import Searchbar from "./components/Searchbar.jsx";
import SearchDropdown from "./components/SearchDropdown.jsx";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import ShopOrCheckOut from './ShopOrCheckOut.js';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      cats: [],
      shopOrCheckout: false,
      catName: '',
      searchDrop: false,
      categoryDrop: false,
      toggleCart: false,
      cartData: [],
      cartQuantity: '',
      catTestAddToCart: {
        catName: 'Pizza',
        price: 446
      }

    };
    this.getCat = this.getCat.bind(this);
    this.onCatNameChange = this.onCatNameChange.bind(this);
    this.getSearchedCat = this.getSearchedCat.bind(this);
    this.searchDropAnimation = this.searchDropAnimation.bind(this);
    this.searchDropFade = this.searchDropFade.bind(this);
    this.categoryDropAnimation = this.categoryDropAnimation.bind(this);
    this.categoryDropFade = this.categoryDropFade.bind(this);
    this.cartDropDown = this.cartDropDown.bind(this);
    this.cartDropFade = this. cartDropFade.bind(this);
    this.getCart = this.getCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.confirmShopFade = this.confirmShopFade.bind(this);
  }

  componentDidMount () {
    this.getCart();
    console.log('component mounts')
  }

  getCat(event) {
    var name = this.state.catName || event.target.value;
    console.log('get request cat name: ', name);
    axios.get(`/api/search/${name}`)
      .then(res => {
        console.log(res);
        this.setState({
          cats: res.data,
          searchDrop: false,
          catName: ''
        })
      })
      .catch(err => {
        console.log('axios error getting cats: ', err);
      })
  }

  getCart() {
    axios.get('api/cart')
      .then(res => {
        this.setState({
          cartData: res.data,
          cartQuantity: res.data.length
        })
      })
      .catch(err => {
        console.log('axios error getting cart data: ', err);
      })
  }

  addToCart(catObj) {
    axios.post('api/cart', {
      catName: catObj.catName,
      price: catObj.price
    })
      .then(res => {
        this.getCart();
      })
      .then(res => {
        this.setState ({
          shopOrCheckout: true
        })
      })
      .catch(err => {
        console.log('axios error posting to cart: ', err);
      })
  }

  deleteFromCart(event) {
    const catId = event.target.value;

    axios.delete(`/api/cart/${catId}`)
      .then(res => {
        this.getCart()
      })
      .then(res =>{
        this.cartDropDown();
      })
      .catch(err=>{
        console.log(err);
      })
  }

  getSearchedCat (event) {
    event.preventDefault();
    this.getCat();
  }

  onCatNameChange (event) {
    console.log(this.state.catName);
    event.preventDefault();
    this.setState ({
      catName: event.target.value,
    })
  }

  searchDropAnimation () {
    this.setState ({
      searchDrop: true,
      categoryDrop: false,
      toggleCart: false,
      shopOrCheckout: false
    })
  }

  searchDropFade () {
    this.setState ({
      searchDrop: false
    })
  }

  confirmShopFade () {
    this.setState ({
      shopOrCheckout: false
    })
  }

  categoryDropAnimation () {
      this.setState ({
        categoryDrop: true,
        searchDrop: false,
        toggleCart: false,
        shopOrCheckout: false
      })
  }

  categoryDropFade () {
    this.setState ({
      categoryDrop: false
    })
  }

  cartDropDown () {
      this.setState ({
        toggleCart: true,
        searchDrop: false,
        categoryDrop: false,
        shopOrCheckout: false
      })
  }

  cartDropFade () {
    this.setState ({
      toggleCart: false
    })
  }


  render() {
    var renderSearchDrop = '';
    var renderCategoryDrop = '';
    var renderConfirmShopMenu = '';
    if(this.state.searchDrop === true) {
      renderSearchDrop = <SearchDropdown getCat={this.getCat} searchDrop={this.searchDropFade} />
    }
    if(this.state.categoryDrop === true) {
      renderCategoryDrop = <CategoryDropdown categoryDropFade={this.categoryDropFade} />
    }
    if(this.state.shopOrCheckout === true) {
      renderConfirmShopMenu = <ShopOrCheckOut exit={this.confirmShopFade} renderCart={this.cartDropDown}/>

    }

    return (
      <div>
        <div>
          <Searchbar
            categoryDropdown={this.categoryDropAnimation}
            searchDropdown={this.searchDropAnimation}
            getSearchedCat={this.getSearchedCat}
            getCat={this.getCat}
            catChange={this.onCatNameChange}
            cartDropFade={this.cartDropFade}
            cartDropDown={this.cartDropDown}
            toggleCart={this.toggleCart}
            cartQty={this.state.cartQuantity}
          />
        </div>
        <div>
          <Navbar />
        </div>
        {renderSearchDrop}
        {renderCategoryDrop}
        <ShoppingCart
              deleteCat={this.deleteFromCart}
              data={this.state.cartData}
              toggleCart={this.state.toggleCart}
              cartDropFade={this.cartDropFade}
              cartQty={this.state.cartQuantity}
            />
        <div>
          <button onClick={() => this.addToCart(this.state.catTestAddToCart)}>Add Cat to Cart</button>
        </div>
        {renderConfirmShopMenu}
      </div>
    );
  }
}

export default App;

