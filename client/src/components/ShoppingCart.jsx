import React from 'react';


const ShoppingCart = ({deleteCat, data, cartDropFade, toggleCart}) => {
    var cart = '';
    var cartQty = data.length;
    console.log(data);

    var totalCost = 0;
    for(var i = 0; i < data.length; i++) {
        totalCost += data[i].price;
    }
   
    if (toggleCart === true) {

    cart =
        <div className="dropDown"
            name="toggleCart"
            onClick={() => cartDropFade()}
        >
           
        <div className="cartContainer"/>
            <ul className="cartDropMenu">
                <li className="row">
                    <h2 className="CartTitle">Your Cat Cart({cartQty} items)</h2>
                        <div className="topBorder"></div>
                {/* either pickup or delivery heading */}
                <div className="logistics">Order Pickup/Delivery for your {cartQty} items</div>
                <div>
                    {data.map((cat) => 
                    
                        <div className="cartItem" key={cat.id}>
                            <span className="cartItemName">{cat.catName}</span>
                            <span className="ship">2-day shipping</span>
                            <span className="pickup">pickup by {new Date().toLocaleDateString('en-US')}</span>
                            <span className="cartItemPrice">${cat.price}</span>
                            <button className="removeCat" value={cat.id} onClick={(event)=> deleteCat(event)}>Remove {cat.catName}</button>
                        </div>

                    )}
                </div>
                </li>
                <li className="totalCost">
                        Total: ${totalCost}
                </li>
            </ul>
        </div>
    }
    return (
        <div>
            <span>{cart}</span>
        </div>
    )
}

export default ShoppingCart;