import React from 'react';


const SearchDropdown = ({searchDrop, getCat}) => {

  return(
    <div className="dropDown"
    onClick={() => searchDrop()}>
        <ul className="searchDropMenu">
          <li className="row">
          <div className="CatSuggestions">Cat Suggestions</div>
          <div className="topBorder"></div>
            <button  
              className="catRows" 
              onClick={(event) => getCat(event)}
              value='walnut'
              >
               Walnut
            
            </button>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <button 
              className="catRows" 
              value="gizmo"
              onClick={(event) => getCat(event)}
              >
              Gizmo
              
            </button>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <button 
              className="catRows"
              onClick={(event) => getCat(event)}
              value='Tuxedo'
            >
             Tuxedo
            </button>
          </li>

          <li className="row">
          <div className="topBorder"></div>
            <button 
              className="catRows"
              onClick={(event) => getCat(event)}
              value='Luna'
            >
               Luna
            </button>
          </li>
        </ul>
    </div>
  )
}

export default SearchDropdown;