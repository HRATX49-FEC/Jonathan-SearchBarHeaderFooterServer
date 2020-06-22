import React from 'react';


const SearchDropdown = ({searchDrop, getSuggestedCat}) => {

  return(
    <div className="searchDropdown"
    onClick={() => searchDrop()}>
        <ul className="searchDropMenu">
          <li className="row">
          <div className="CatSuggestions">Cat Suggestions</div>
          <div className="topBorder"></div>
            <div className="catRows" value="walnut" onClick={(event) => getSuggestedCat(event.target)}>
               Walnut
            
            </div>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <div className="catRows" value="gizmo" onClick={(event) => getSuggestedCat(event.target.value)}>
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