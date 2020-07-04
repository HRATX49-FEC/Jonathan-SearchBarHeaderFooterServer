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
              onClick={() => getCat('walnut')}
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
              onClick={() => getCat('gizmo')}
              >
              Gizmo
              
            </button>
          </li>
          <li className="row">
          <div className="topBorder"></div>
            <button 
              className="catRows"
              onClick={() => getCat('tuxedo')}
              value='Tuxedo'
            >
             Tuxedo
            </button>
          </li>

          <li className="row">
          <div className="topBorder"></div>
            <button 
              className="catRows"
              onClick={() => getCat('luna')}
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