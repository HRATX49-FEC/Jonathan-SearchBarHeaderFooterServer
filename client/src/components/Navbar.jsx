import React from 'react';
    

const Navbar = () => {
    return (
        <div className="navWrap">
            <nav className="navBarTwo">
                <span className="locationButton">
                    <button className="navLeftSide">
                        <div>
                            <span className="leftSide">You're shopping </span>
                            <span id="time" className="leftSide">(closes at 10pm):</span>
                        </div>
                        <div className="location">Austin UT Campus<select className="selectTag"></select></div>
                    </button>
                </span>
                <span className="navRightSide">
                    <li id="rightSide" className="registry">Registry</li>
                    <li id="rightSide" >Weekly Ad</li>
                    <li id="rightSide" >RedCard</li>
                    <li id="rightSide" className="deleteWMobile">Gift Cards</li>
                    <li id="rightSide" className="deleteWMobile">Find Stores</li>
                    <li id="rightSide" className="deleteWMobile">Orders</li>
                    <li id="heart" className="deleteWMobile" role="img">♡</li>
                    <li id="rightSide" ><select className="selectTag"></select>More</li>
                </span>
            </nav>
        </div>
    )
}

export default Navbar;