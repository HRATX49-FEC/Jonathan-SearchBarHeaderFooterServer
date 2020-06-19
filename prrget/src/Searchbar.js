import React from 'react';


const Searchbar = ({searchDropdown, getSearchedCat, catChange, cats}) => {

  return (

    <div className="navWrapper">
      <nav className="navBar">

        <li className="targetLogo">
          {/* TARGET LOGO IMAGE */}
          <img className="targetLogo"
            src="https://imgur.com/DXdvZDr.jpg"
            alt="target logo"
          ></img>
        </li>

            {/* CATEGORY DROP DOWN */}
      
        <li className="category">
          <select className="category">
            <option>Categories</option>
            <option>Floof</option>
            <option>Chonk</option>
            <option>Hairless</option>
            <option>Adorable</option>
          </select>
            {/* SAME DAY DELIVERY BUTTON */}
        
          <button className="sameDayDelivery">same day delivery</button>
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
                  {/* user icon image */}
          <span className="userIcon">
            <img className="userIcon"
              src="https://imgur.com/J3UlNAD.jpg"
              alt="users icon"
            >
            </img>
          </span>
                 {/* shopping cart image */}
          <span className="shoppingCart">
              <img className="shoppingCart"
                    src="https://imgur.com/nZ0q7ht.jpg"
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