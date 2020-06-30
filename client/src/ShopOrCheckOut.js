import React from 'react';


const ShopOrCheckOut = ({exit, renderCart}) => {
    return (
        <div className="dropDown">
            <div className="shopOrCheckout">
                <span><button className="shopConfirmButtons" onClick={() => exit()}>Continue Shopping?</button></span>
            
                <span><button className="shopConfirmButtons" onClick={() => renderCart()}>Go to Cart and Checkout?</button></span>
            </div>
        </div>
    )
}

export default ShopOrCheckOut;