import React from 'react';
import Searchbar from "./components/Searchbar.jsx";
import SearchDropdown from "./components/SearchDropdown.jsx";
import CategoryDropdown from "./components/CategoryDropdown.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import ShopOrCheckOut from './ShopOrCheckOut.js';

const $ = require('jquery');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartData:[],
      cats: [],
      shopOrCheckout: false,
      deliverCat: false,
      catName: '',
      searchDrop: false,
      categoryDrop: false,
      toggleCart: false,
      catQty: '',
      cartQty: 0,
      catCartName: '',
      nopromo: false,
      promoCode: '',
      delivery: false,
      pickup: false
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
    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.catPopUpsFade = this.catPopUpsFade.bind(this);
    this.clickApply = this.clickApply.bind(this);
    this.onPromoChange = this.onPromoChange.bind(this);
    this.togglePickup = this.togglePickup.bind(this);
    this.toggleDelivery= this.toggleDelivery.bind(this);
    this.catQtyChange= this.catQtyChange.bind(this);
  };

  componentDidMount () {
    /////cart Dummy Data///////
    //  window.cart = [
    //    {
    //      name: 'pecan', 
    //      pricePerUnit: '500.99', 
    //      quantity: 4,
    //      deliver: 2
         
    //    }, {
    //     name: 'tom', 
    //     pricePerUnit: '500.99', 
    //     quantity: 2,
    //     pickUp: 3
        
    //    }, {
    //     name: 'jan', 
    //     pricePerUnit: '500.99', 
    //     quantity: 2
    //    }
    // ];
    window.cart = [];
    this.getCart();
    $('body').on('click', '#pickup', (e) => {
      this.getCart();
      this.setState({
        shopOrCheckout: true,
        delivery: false,
        pickup: true
      })
    });

    $('body').on('click', '#delivery', (e) => {
      this.setState({
        shopOrCheckout: true,
        delivery: true,
        pickup: false
      })
      this.getCart();
    });
  }

  getCat(name) {
    name = name || this.state.catName;
    axios.get(`/search/${name}`)
      .then(res => {
        this.setState({
          cats: res.data,
          searchDrop: false,
          catName: ''
        })
      })
      .catch(err => {
        console.log('axios error getting cats: ', err);
      })
    this.getCart();
  }

  

  //gets the cart items from database//
    //sets the quantity to display//
  getCart() {
    setTimeout( () =>
    this.setState ({
      cartData: window.cart,
      catName: ''
    }), 700);
    //changes the cart quantity on the shopping cart image
    setTimeout(() => this.changeCartQty(), 1700);
  }

  changeCartQty() {
    //totals the quantity for each item in cart
    var quantityInCart = 0;
    for(var i = 0; i< this.state.cartData.length; i++) {
      quantityInCart += Number(this.state.cartData[i].quantity);
    }

    this.setState({
      cartQty: quantityInCart
    })
  }
  //this is rendering test dummy data right now
    //will update once combined with everyone's services
  addToCart(catObj) {
    axios.post('/search/cart/delete/post', {
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
    const index = event.target.value;
    this.state.cartData.splice(index, 1);

    setTimeout(() => this.changeCartQty(), 100);    
  }

  getSearchedCat (event) {
    event.preventDefault();
    this.getCat();
  }

  onCatNameChange (event) {
    event.preventDefault();
    this.setState ({
      catName: event.target.value,
    })
  }

  onPromoChange (event) {
    event.preventDefault();
    this.setState ({
      promoCode: event.target.value,
    })
    //console.log(this.state.promoCode);
  }
// functions for Category, searchbar and shopping cart below
  searchDropAnimation () {
    this.setState ({
      searchDrop: true,
      categoryDrop: false,
      toggleCart: false,
      shopOrCheckout: false,
      deliverCat: false,
      nopromo: false
    })
  }

  onCheckoutClick () {
    this.setState({
      deliverCat: true,
      searchDrop: false,
      categoryDrop: false,
      toggleCart: false,
      shopOrCheckout: false,
      nopromo: false
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
  //changes the quantity on each cat item
  catQtyChange (event) {

    this.state.cartData[event.target.name].quantity = event.target.value;

    setTimeout(() => this.changeCartQty(), 100);
  }

  categoryDropAnimation () {
      this.setState ({
        categoryDrop: true,
        searchDrop: false,
        toggleCart: false,
        shopOrCheckout: false,
        deliverCat: false,
        nopromo: false
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
        shopOrCheckout: false,
        deliverCat: false,
        nopromo: false
      })
  }

  cartDropFade () {
    this.setState ({
      toggleCart: false
    })
  }
  catPopUpsFade () {
    this.setState ({
      deliverCat: false,
      nopromo: false,
      searchDrop: false,
      categoryDrop: false,
      toggleCart: false,
      shopOrCheckout: false
    })
  }
  clickApply() {
    this.setState ({
      nopromo: true,
      deliverCat: false,
      searchDrop: false,
      categoryDrop: false,
      toggleCart: false,
      shopOrCheckout: false
    })
  }

  toggleDelivery () {
    this.setState ({
      delivery: false
    })
  }
  togglePickup () {
    this.setState ({
      pickup: false
    })
  }



  render() {
    //renders the dropdown menus/cart feature once clicked
    var renderSearchDrop = '';
    var renderCategoryDrop = '';
    var renderConfirmShopMenu = '';
    var buttonInCartClicked = '';

    if(this.state.searchDrop === true) {
      renderSearchDrop = <SearchDropdown getCat={this.getCat} searchDrop={this.searchDropFade} />
    }

    if(this.state.categoryDrop === true) {
      renderCategoryDrop = <CategoryDropdown categoryDropFade={this.categoryDropFade} />
    }

    if(this.state.shopOrCheckout === true) {
      renderConfirmShopMenu = <ShopOrCheckOut exit={this.confirmShopFade} renderCart={this.cartDropDown}/>
    }

    if(this.state.deliverCat === true) {

      buttonInCartClicked = 
          <div className="catDelivery" onClick={() => this.catPopUpsFade()}>
            <div className="deliveryContainer">
              <div className="catProcessed">Success! Your Cat Is Being Processed</div>
              <img src="https://prrgetsearchbarfooter.s3.amazonaws.com/catDelivery.gif" alt="cat delivery gif"/>
            </div>
          </div>
    }


    if(this.state.nopromo === true) {
      if(this.state.promoCode !== 'catsruledogsdrool') {
      buttonInCartClicked = 
        <div className="catDelivery" onClick={() => this.catPopUpsFade()}>
          <div className="deliveryContainer">
            <div className="catProcessed">OOH NOO!</div>
            <img src="https://prrgetsearchbarfooter.s3.amazonaws.com/nopromo.gif" alt="no promo cat gif"/>
            <div>Your promo CAT code no work /ᐠᵕ̩̩̥ ‸ᵕ̩̩̥ ᐟ\ﾉ</div>
          </div>
        </div>
      } else {
        buttonInCartClicked = 
        <div className="catDelivery" onClick={() => this.cartDropDown()}>
          <div className="discountSuccessContainer">
            <div className="catProcessed">MEOW MEOW!!!!</div>
              <img src="https://prrgetsearchbarfooter.s3.amazonaws.com/congratscat.gif" alt="no promo cat gif"/>
            <div>40% OFF CAT PROMO CODE ADDED</div>
          </div>
        </div>
      }
    }


    return (
      <div>
        <div>
          <Searchbar
            cartData={this.cartData}
            getCart={this.getCart}
            categoryDropdown={this.categoryDropAnimation}
            searchDropdown={this.searchDropAnimation}
            cats={this.state.catName}
            getSearchedCat={this.getSearchedCat}
            catChange={this.onCatNameChange}
            cartDropFade={this.cartDropFade}
            cartDropDown={this.cartDropDown}
            toggleCart={this.toggleCart}
            cartQty={this.state.cartQty}
          />
        </div>
       
          <Navbar />
          {buttonInCartClicked}
          <ShoppingCart
            toggleDelivery={this.toggleDelivery}
            togglePickup={this.togglePickup}
            pickup={this.state.pickup}
            delivery={this.state.delivery}
            onPromoChange={this.onPromoChange}
            promoCode={this.state.promoCode}
            clickApply={this.clickApply}
            cartQty={this.cartQty}
            changeCartQty={this.changeCartQty}
            catQtyChange={this.catQtyChange}
            onCheckoutClick={this.onCheckoutClick}
            deleteCat={this.deleteFromCart}
            data={this.state.cartData}
            toggleCart={this.state.toggleCart}
            cartDropFade={this.cartDropFade}
          />
        {renderSearchDrop}
        {renderCategoryDrop}
        {renderConfirmShopMenu}
      </div>
    );
  }
}

export default App;

