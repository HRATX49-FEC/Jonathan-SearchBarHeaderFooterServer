import React from 'react';


const CategoryDropdown = ({categoryDropFade}) => {

  return(
    <div className="dropDown"
    onClick={() => categoryDropFade()}>
        <div className="columnArrow"/>
        <ul className="categoryDropMenu">
          <li className="row">
            <div className="CatSuggestions" id="categoryTitle">Pick a CATegory</div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows" id="categories">
               Floof
            
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows" id="categories">
              Hairless
              
            </div>
          </li>
          <li className="row" >
          <div className="topBorder"></div>
            <div className="catRows" id="categories">
             Chonk
              
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows" id="categories">
               Adorable
              
            </div>
          </li>
        </ul>
    </div>
  )
}

export default CategoryDropdown;