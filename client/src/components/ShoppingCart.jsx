import React from 'react';
import catget from '../images/Tarcat.png';
import bag from '../images/bag.png';
import box from '../images/box.png';

const ShoppingCart = ({onCheckoutClick, deleteCat, data, cartDropFade, toggleCart}) => {
    var shipDate = new Date();
    shipDate.setDate(shipDate.getDate() + 5);
    var dd = shipDate.getDate();
    var mm = shipDate.getMonth() + 1;
    var y = shipDate.getFullYear();
    shipDate = mm + '/' + dd + '/' + y;

    var cart = '';
    var cartQty = data.length;
    console.log(data);

    var totalCost = 0;
    var totalTax = 0;
    for(var i = 0; i < data.length; i++) {
        totalCost += data[i].price;
        totalTax += data[i].price *.08;
    }
    var grandTotal = totalCost + totalTax;
    grandTotal = Number(grandTotal).toLocaleString('en');
    totalCost = Number(totalCost).toLocaleString('en');
    totalTax = Number(totalTax).toLocaleString('en');
   
    if (toggleCart === true) {

    cart =
        <div className="dropDown"
            name="toggleCart"
            onClick={() => cartDropFade()}
        >
           
        <div className="cartContainer"/>
            <div className="cartDropMenu">
                <div className="cartInfo">
                    <span className="cartTitleSpan">
                        <h2 className="cartTitle">Your Cat Cart({cartQty} items)</h2>
                        <div>
                            <li className="cartTitle">My order includes a gift  <span className="learnMore"> Learn more</span></li>
                            
                        </div>
                    </span>
                    <div className="LogisticsOptionsContainer">
                        <div className="LogisticsOptionsHeader"> Your delivery/pickup choices <select className="selectNone"></select></div>
                        <div className="LogisticsOptions">
    
                            <span className="logiSpans">
                                <span><img className="shipmoji" src="https://prrgetsearchbarfooter.s3.amazonaws.com/bag.png" alt="cat bag"/></span>
                                <span>
                                <li className="logis">Order Pickup</li>
                                <li className="logis">{cartQty / 2} item at Austin Saltillo</li>
                                </span>
                            </span>
                            <span className="logiSpans">
                            <img className="shipmoji" src="https://prrgetsearchbarfooter.s3.amazonaws.com/box.png" alt="cat bag"/>
                                <li className="logis">Shipping</li>
                                <li className="logis">{cartQty/2} items shipping</li>
                            </span>
                        </div>
                    </div>
                    {/* either pickup or delivery heading */}
                    <div className="itemsHeadContainer">
                        <div className="itemsHeader">Order Pickup/Delivery for your {cartQty} items</div>
                    </div>
                    <div className="itemsBody">
                        {data.map((cat) => 
                            <div className="cartItem" key={cat.id}>

                                <span className="itemSpanOne">
                                    <div>
                                        <span className="cartItemName">{cat.catName}</span>
                                        <select className="catItemQty">
                                            <option>QTY 1</option>
                                            <option>QTY 2</option>
                                            <option>QTY 3</option>
                                            <option>QTY 4</option>
                                            <option>QTY 5</option>
                                        </select>
                                    </div>
                                    <div className="protectionPlan">
                                        <span>
                                            <span><input className="protectPlanCheckbox" type="checkbox"/>2 year protection plan</span>
                                        </span>
                                        <div>plan $42 <span className="seePlans">See plan details</span></div>
                                    </div>
                                </span>
                                <span className="itemSpanTwo">
                                <div><label className="ship"><input className="radioShip" type="radio"/>To The Door delivery</label></div>
                                <div className="getItBy">Get it by {shipDate}</div>
                                <div className="shipInOGPkg">Ships in original packaging</div>
                                <div className="shipDetailss">About delivery services</div>
                                <div><label className="pickup"><input className="radioShip" type="radio"/>pickup by {new Date().toLocaleDateString('en-US')}</label></div>
                    
                                </span>
                                 <span className="cartItemPrice">${Number(cat.price).toLocaleString('en')}</span>
                                <span className="removeCatButton"><button className="removeCat" value={cat.id} onClick={(event)=> deleteCat(event)}>X</button></span>
                            </div>
                        )}
                    </div> 
                </div>
                {/* total cost summary column */}
                <span className="totalCost">
                    <h2 className="orderSummary">Order Summary</h2>
                    <form className="promocode"> 
                        <input className="promocode" placeholder="Promo code"></input>
                        <button className="promocode">Apply</button>
                    </form>
                    <div className="expenseReport">
                        Subtotal( 
                            <span className="expenseDetails"
                            >{cartQty} items</span>
                        )
                            <span className="expenseCost"
                            >${totalCost}</span>
                    </div>
                    <div className="expenseReport">
                        Delivery
                        <span className="FREE"> <span className="expenseCost"> FREE</span></span>
                    </div>
                    <div className="expenseReport">
                        Estimated cat tax 
                        <span className="expenseCost">    
                        ${totalTax}
                        </span>
                    </div>
                    <div className="expenseDetails">Delivery & tax for 78737</div>

                    <div className="price">
                    <span className="totalLabel">Total    <span className="totalExpenseCost">  ${grandTotal}</span></span>
                    <button className="checkOut" onClick={() => onCheckoutClick()}>I'm ready to check out</button>
                    </div> 
                    <div className="cartNumDiv">
                        <div className="cartNumber">Cart number: 91668763780081</div>
                        <img className="tarCat" src="https://prrgetsearchbarfooter.s3.amazonaws.com/Tarcat.png" alt="catget image"/>
                    </div>
                </span>
            </div>            
        </div>
    }
    return (
        <div>
            <span>{cart}</span>
        </div>
    )
}

export default ShoppingCart;