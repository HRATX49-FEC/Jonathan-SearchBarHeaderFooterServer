import React from 'react';
    

const Navbar = () => {
    return (
        <div className="navWrap">
            <nav className="navBarTwo">
                <span className="locationButton">
                    <button className="navLeftSide">
                        <div>
                            <span className="youreShop">You're shopping </span>
                            <span className="time">(closese at 10pm):</span>
                        </div>
                        <div className="location">Austin UT Campus<select></select></div>
                    </button>
                </span>
                <span className="navRightSide">
                    <span className="registry">Registry</span>
                    <span>Weekly Ad</span>
                    <span>RedCard</span>
                    <span className="deleteWMobile">Gift Cards</span>
                    <span className="deleteWMobile">Find Stores</span>
                    <span className="deleteWMobile">Orders</span>
                    <span className="deleteWMobile" role="img">♡</span>
                    <span><select></select>More</span>
                </span>
            </nav>
        </div>
    )
}

export default Navbar;