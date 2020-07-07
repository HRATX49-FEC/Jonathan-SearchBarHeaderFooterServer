import React from 'react';
import Arrow from '../images/up arrow.png';


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
            <img className="arrow" onClick={() => getCat('walnut')} src="https://prrgetsearchbarfooter.s3.amazonaws.com/up+arrow.png" alt="up arrow" />
          </li>
          <li className="row" >
          <div className="topBorder"></div>
            <button 
              className="catRows" 
              value="gizmo"
              onClick={() => getCat('gizmo')}
              >
              Gizmo               
            </button>
            <img className="arrow" onClick={() => getCat('gizmo')} src="https://prrgetsearchbarfooter.s3.amazonaws.com/up+arrow.png" alt="up arrow" /> 
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
            <img className="arrow" onClick={() => getCat('tuxedo')} src="https://prrgetsearchbarfooter.s3.amazonaws.com/up+arrow.png" alt="up arrow" />
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
            <img className="arrow" onClick={() => getCat('luna')} src="https://prrgetsearchbarfooter.s3.amazonaws.com/up+arrow.png" alt="up arrow" />
           </li>
        </ul>
    </div>
  )
}

export default SearchDropdown;