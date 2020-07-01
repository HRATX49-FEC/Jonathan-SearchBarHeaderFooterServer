import React from 'react';


const ShopOrCheckOut = ({exit, renderCart}) => {
    return (
        <div className="dropDown">
            <div className="shopOrCheckout">
                <h1 className="shopConfirmTitle">Kitty added to shopping cart!</h1>
                <button id="continueShopping" className="shopConfirmButtons" onClick={() => exit()}>Continue shopping</button>
            
                <button className="shopConfirmButtons" onClick={() => renderCart()}>View cart & Checkout</button>
            </div>
        </div>
    )
}

export default ShopOrCheckOut;