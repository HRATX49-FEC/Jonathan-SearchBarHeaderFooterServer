import React from 'react';


const Searchbar = ({getSearchedCat, catChange, cats}) => {
  return (

    <div className="searchBar">
      <nav className="navBar">
        <li>
          <img className="targetLogo"
            src="https://imgur.com/DXdvZDr.jpg"
            alt="target logo"
          ></img>
        </li>

        <li className="category">
          <select className="category">
            <option>Categories</option>
            <option>Floof</option>
            <option>Chonk</option>
            <option>Hairless</option>
            <option>Adorable</option>
          </select>
        </li>

        <li className="sameDayDelivery">
          <button className="sameDayDelivery">same day delivery</button>
        </li>

        <li className="search">
          <form className="form" onSubmit={(event) => getSearchedCat(event)}>
            <input
              onChange={catChange}
              type="text" className="search"
              placeholder="Search"
              name="catName"
              value={cats}
            />
          </form>
        </li>

        <li>

          <img className="userIcon"
            src="https://imgur.com/J3UlNAD.jpg"
            alt="users icon"
          >
          </img>
        </li>

        <li>
          <button className="shoppingCart">
            <img className="shoppingCart"
                  src="https://imgur.com/nZ0q7ht.jpg"
                  alt="shopping cart"
            >
            </img>
          </button>
        </li>

      </nav>
    </div>
  )
}

export default Searchbar;