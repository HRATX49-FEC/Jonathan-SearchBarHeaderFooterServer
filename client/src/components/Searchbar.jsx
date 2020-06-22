import React from 'react';
import catLogo from '../images/catTargetLogo.png';
import userIcon from '../images/SignIn.png';
import shoppingCart from '../images/shoppingCart.png';


const Searchbar = ({searchDropdown, categoryDropdown, getSearchedCat, catChange, cats}) => {

  return (

    <div className="navWrapper">
      <nav className="navBar">

        <span className="targetLogo">
          {/* TARGET LOGO IMAGE */}
          <img className="targetLogo"
            src={catLogo}
            alt="cat prrget logo"
          />
        </span>

            {/* CATEGORY DROP DOWN */}
      
        <li className="leftSide" >
          <span className="category" onClick={() => categoryDropdown()}>
            Categories
            <select className="selectArrow"></select>
          </span>
          
            {/* on Mobile Delete options */}
          <span className="deals">Deals
            <select className="selectArrow"></select>
          </span>
          <span className="deleteOnMobile">What's New
            <select id="deleteOnMobile" className="selectArrow"></select>
          </span>
          <span className="deleteOnMobile">Same Day Delivery</span>
        </li>

            {/* SEARCH BAR */}
        <li className="searchBarWrap">
          <form className="form" onSubmit={(event) => getSearchedCat(event)}>
            <input
              onClick={() => searchDropdown()}
              autoCorrect="off"
              autoComplete="off"
              className="search"
              onChange={catChange}
              type="search"
              id="search"
              placeholder="Search"
              name="catName"
              value={cats}
              aria-label="Search: suggestions appear below"
            />
            <span className="searchIcon">
              <span className="glyphicon glyphicon-search"/>
            </span>
          </form>
          </li>

          <li className="rightSide">
                    {/* user icon image */}
            <span className="userIcon">
              <img className="userIcon"
                src={userIcon}
                alt="users icon"
              >
              </img>
            </span>
                  {/* shopping cart image */}
            <span className="shoppingCart">
                <img className="shoppingCart"
                      src={shoppingCart}
                      alt="shopping cart"
                >
                </img>
            </span>
          </li>
        
      </nav>
    </div>
  )
}

export default Searchbar;