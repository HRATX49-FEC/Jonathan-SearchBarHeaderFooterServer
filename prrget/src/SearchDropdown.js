import React from 'react';


const SearchDropdown = ({searchDrop}) => {

  return(
    <div className="searchDropdown"
    onClick={() => searchDrop()}>
        <ul className="searchDropMenu">
          <li className="row">
          <div className="CatSuggestions">Cat Suggestions</div>
          <div className="topBorder"></div>
            <div className="catRows">
               Walnut
            
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows">
              Gizmo
              
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows">
             Tuxedo
              
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRowsLast">
               Taco
              
            </div>
          </li>
        </ul>
    </div>
  )
}

export default SearchDropdown;