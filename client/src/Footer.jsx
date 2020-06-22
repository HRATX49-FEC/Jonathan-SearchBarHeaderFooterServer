import React from 'react';


class Footer extends React.Component {
    constructor() {
        super ();
    }


    render () {
        return (
        <div className="footWrapper">
            <div className="seeOffer">
                <h1 className="seeOffer">*See offer details. Rescrictions apply. Pricing, promotions and availability may vary by location and at Prrget.com</h1>
            </div>

            <div className="footerSelects">
                <select><option>Help</option></select>
                <select><option>Stores</option>Stores</select>
                <select><option>Apps</option>Apps</select>
                <select><option>Social</option>Social</select>
                <select><option>More</option>More</select>
            </div>

            <div>
                <button className="healthButton">
                    The latest on our cat health and safety plans
                </button>
            </div>

            <div>
                <p className="legal">Recalls   Terms   Interest-Based   Ads    CA Privacy Rights    CA Supply Chain Act    Privacy    Do Not Sell My Info - CA Resident Only    ™ & © 2020 Prrget Brands, Inc.</p>
            </div>
            <div>
                <div>ಇ/ᐠ ̥ᵔ  ̮  ᵔ ̥ ᐟ\ಇ</div>
            </div>
            <div>
                <h2 className="expectCats">Expect Cats. Pay lots.</h2>
            </div>
            
        </div>
        )
    }
}

export default Footer;