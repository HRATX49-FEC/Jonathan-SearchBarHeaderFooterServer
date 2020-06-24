import React from 'react';
import userIcon from '../images/SignIn.png';

const Searchbar = ({searchDropdown, categoryDropdown, getSearchedCat, catChange, cats}) => {

  return (

    <div className="navWrapper">
      <nav className="navBar">

        <span className="targetLogo">
          {/* TARGET LOGO IMAGE */}
          <img className="targetLogo"
            src="https://prrgetsearchbarfooter.s3.amazonaws.com/catTargetLogo.png"
            alt="cat prrget logo"
          />
        </span>

            {/* CATEGORY DROP DOWN */}
      
        <li className="leftSide" >
          <span id="left" className="category" onClick={() => categoryDropdown()}>
            Categories
            <select className="selectArrow"></select>
          </span>
          
            {/* on Mobile Delete options */}
          <span id="left"  className="deals">Deals
            <select className="selectArrow"></select>
          </span>
          <span id="left" className="deleteOnMobile">What's New
            <select id="deleteOnMobile" className="selectArrow"></select>
          </span>
          <span id="left" className="deleteOnMobile">Same Day Delivery</span>
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
                src="https://prrgetsearchbarfooter.s3.amazonaws.com/SignIn.png"
                alt="users icon"
              >
              </img>
            </span>
                  {/* shopping cart image */}
            <span className="shoppingCart">
                <img className="shoppingCart"
                      src="https://prrgetsearchbarfooter.s3.amazonaws.com/shoppingCart.png"
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