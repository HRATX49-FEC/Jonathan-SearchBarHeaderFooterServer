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
                <select className="footSelects"><option>Help</option></select>
                <select className="footSelects"><option>Stores</option>Stores</select>
                <select className="footSelects"><option>Apps</option>Apps</select>
                <select className="footSelects"><option>Social</option>Social</select>
                <select className="footSelects"><option>More</option>More</select>
            </div>

            <div>
                <button className="healthButton">
                    <span>The latest on our cat health and safety plans</span>
                    <img className="footerI" src="https://prrgetsearchbarfooter.s3.amazonaws.com/footeri.png" alt="footer i" />
                </button>
            </div>

            <div>
                <p className="legal">Recalls   Terms   Interest-Based   Ads    CA Privacy Rights    CA Supply Chain Act    Privacy    Do Not Sell My Info - CA Resident Only    ™ & © 2020 Prrget Brands, Inc.</p>
            </div>
            <div>
                <div className="kittySymbol">ಇ/ᐠ ̥ᵔ  ̮  ᵔ ̥ ᐟ\ಇ</div>
            </div>
            <div>
                <h2 className="expectCats">Expect Cats. Pay lots.</h2>
            </div>
            
        </div>
        )
    }
}

export default Footer;