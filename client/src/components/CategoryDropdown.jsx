import React from 'react';


const CategoryDropdown = ({categoryDropFade}) => {

  return(
    <div className="categoryDropdown"
    onClick={() => categoryDropFade()}>
        <div className="columnArrow"/>
        <ul className="categoryDropMenu">
          <li className="row">
          <div className="CatSuggestions">Pick a CATegory</div>
          <div className="topBorder"></div>
            <div className="catRows">
               Floof
            
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows">
              Hairless
              
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows">
             Chonk
              
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRowsLast">
               Adorable
              
            </div>
          </li>
        </ul>
    </div>
  )
}

export default CategoryDropdown;