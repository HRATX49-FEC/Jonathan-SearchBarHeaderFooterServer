import React from 'react';

const ShoppingCart = ({ onPromoChange, promoCode, clickApply, onCheckoutClick, data, deleteCat, cartDropFade, toggleCart, catQtyChange }) => {

    //=====sets the shipping date to 5 days out=======//
    var shipDate = new Date();

    shipDate.setDate(shipDate.getDate() + 2);
    var dd = shipDate.getDate();
    var mm = shipDate.getMonth() + 1;
    var y = shipDate.getFullYear();

    shipDate = mm + '/' + dd + '/' + y;

    //============initialize variables==============//
    var cart = ''; //possibly change this to state
    var cartQty = 0;
    var totalCost = 0;
    var totalTax = 0;
    var grandTotal = 0;
    var discount = 0;
    var discountRow ='';
    // var itemsForDelivery = 0;
    // var itemsForPickup = 0;

    //=== once we have something added to the cart ===//
    if (data !== undefined) {
        //calculates the cart item prices and quantities//
        for(var i = 0; i < data.length; i++) {
            // //initialize pickup or delviery options
            // if(data[i].pickUp === undefined) {
            //     data[i].pickUp = 0;
            // }
            // if(data[i].deliver === undefined) {
            //     data[i].deliver = 0;
            // }
            // //last cat in cartdata array gets delivery of pickup qty
            // if(delivery === true) {
            //     if(data[data.length - 1].deliver === undefined) {
            //         data[data.length - 1].deliver = 0;
            //     }
            //     data[data.length - 1].deliver += data[data.length - 1].quantity;
            //     toggleDelivery();
            // } else if(pickup === true) {
            //     if(data[data.length - 1].pickUp === undefined) {
            //         data[data.length - 1].pickUp = 0;
            //     }
            //     data[data.length - 1].pickUp += data[data.length - 1].quantity;
            //     togglePickup();
            // }
            
            //total all the pickup and delivery in cartdata
            // itemsForPickup += data[i].pickUp;
            // itemsForDelivery += data[i].deliver;
            // console.log("pickup: ", itemsForPickup);
            // console.log("delivery: ", itemsForDelivery);

            for(var j = 0; j < data.length; j++) {
                if(i !== j ) {
                    if(data[i].name === data[j].name) {
                        data[i].quantity += Number(data[j].quantity);
                        if(data[j] !== data[data.length - 1]){
                            data[i].delivery += data[j].delivery;
                            data[i].pickup += data[j].pickup;
                        }
                        data.splice(j, 1);
                    }
                }
            }
            cartQty += Number(data[i].quantity);
            totalCost += data[i].pricePerUnit * cartQty;
        }
        if(promoCode === 'catsruledogsdrool') {
            discount = totalCost * .4;
            discountRow = 
                <div className="discount" key="9">
                    Discount(40% OFF)
                    <span className="discount"> <span className="expenseCost"> ${Number(discount.toFixed(2)).toLocaleString('en')} </span></span>
                </div>
        }

        //===total all values and round to two decimals==//
        totalTax = (totalCost * .08);
        grandTotal = totalCost + totalTax - discount;
        discount = discount.toFixed(2);
        totalCost = totalCost.toFixed(2);
        totalTax = totalTax.toFixed(2);
        grandTotal= grandTotal.toFixed(2);

        //================================================
        /////////formats numbers to currency//////////////
        //================================================
        grandTotal = Number(grandTotal).toLocaleString('en');
        totalCost = Number(totalCost).toLocaleString('en');
        totalTax = Number(totalTax).toLocaleString('en');
        discount = Number(discount).toLocaleString('en');
    
    }
    //=================================================//
   //========if user clicks on the shopping cart======//
   //========the cart drop down will render==========//
   //================================================//
    if (toggleCart === true) {
   
    cart =
        <div>
        <div className="dropDown" key="1"
            name="toggleCart"
            onClick={() => cartDropFade()}
        />
           
        <div className="cartContainer" key="2"/>
            <div key="2a" className="cartDropMenu">
                <div className="cartInfo" key="3">
                    <span className="cartTitleSpan">
                        <h2 className="cartTitle">Your Cat Cart({cartQty} items)</h2>
                        <div key="4">
                            <li className="cartTitle">My order includes a gift  <span className="learnMore"> Learn more</span></li>
                            
                        </div>
                    </span>
                    <div className="LogisticsOptionsContainer" key="5">
                        <div className="LogisticsOptionsHeader"> Your delivery/pickup choices <select className="selectNone"></select></div>
                        <div key="5b" className="LogisticsOptions">
    
                            <span className="logiSpans">
                                <span><img className="shipmoji" src="https://prrgetsearchbarfooter.s3.amazonaws.com/bag.png" alt="cat bag"/></span>
                                <span>
                                <li key="a" className="logis">Order Pickup</li>
                                <li key="b" className="logis">{Math.floor(cartQty/2)} items at Austin Saltillo</li>
                                </span>
                            </span>
                            <span className="logiSpans">
                            <img className="shipmoji" src="https://prrgetsearchbarfooter.s3.amazonaws.com/box.png" alt="cat bag"/>
                                <li key="c" className="logis">Shipping</li>
                                <li key="d" className="logis">{Math.ceil(cartQty/2)} items shipping</li>
                            </span>
                        </div>
                    </div>

                    {/* either pickup or delivery heading */}

                    <div className="itemsHeadContainer" key="6">
                        <div key="a5" className="itemsHeader">Order Pickup/Delivery for your {cartQty} items</div>
                    </div>
                    <div className="itemsBody" key="7">

                        {/* mapping function for the shopping cart items */}
                       
                        {data.map((cat, index) =>
                            <div className="cartItem" key={index}>

                                <span className="itemSpanOne">
                                    <div key={index}>
                                        <span className="cartItemName">{cat.name}</span>

                                        {/* quantity drop down for each  cat/item */}
                                        <select name ={index} value={cat.quantity} onChange={(event) => catQtyChange(event)} className="catItemQty">
                                            <option value="1">QTY 1</option>
                                            <option value="2">QTY 2</option>
                                            <option value="3">QTY 3</option>
                                            <option value="4">QTY 4</option>
                                            <option value="5">QTY 5</option>
                                            <option value="6">QTY 6</option>
                                            <option value="7">QTY 7</option>
                                            <option value="8">QTY 8</option>
                                            <option value="9">QTY 9</option>
                                            <option value="10">QTY 10</option>
                                            <option value="11">QTY 11</option>
                                            <option value="12">QTY 12</option>
                                            <option value="13">QTY 13</option>
                                            <option value="14">QTY 14</option>
                                            <option value="15">QTY 15</option>
                                        </select>
                                    </div>
                                    <div key="acc" className="protectionPlan">
                                        <span>
                                            <span><input className="protectPlanCheckbox" type="checkbox"/>2 year protection plan</span>
                                        </span>
                                        <div key="a1233" >plan $42 <span className="seePlans">See plan details</span></div>
                                    </div>
                                </span>
                                {/* shipping details on the item */}
                                <span className="itemSpanTwo">
                                <div><label className="ship"><input className="radioShip" type="radio"/>To The Door delivery</label></div>
                                <div className="getItBy">Get it by {shipDate}</div>
                                <div className="shipInOGPkg">Ships in original packaging</div>
                                <div className="shipDetailss">About delivery services</div>
                                <div><label className="pickup"><input className="radioShip" type="radio"/>pickup by {new Date().toLocaleDateString('en-US')}</label></div>
                    
                                </span>
                                 <span className="cartItemPrice">${Number(cat.pricePerUnit * cat.quantity).toLocaleString('en')}</span>
                                <span className="removeCatButton"><button className="removeCat" value={index} onClick={(event)=> deleteCat(event)}>X</button></span>
                            </div>
                        )}
    
                    </div> 
                </div>

                {/* total cost summary column */}
                <span className="totalCost">
                    <h2 className="orderSummary">Order Summary</h2>
                    <form className="promocode" onSubmit={(event) => clickApply(event)}> 
                        <input 
                            className="promocode" 
                            onChange={onPromoChange} 
                            placeholder="Promo code"
                            type="search"
                            id="promo"
                            name="promocode"
                            value={promoCode}
                        />
                        <button className="promocode" onClick={()=> clickApply()}>Apply</button>
                    </form>
                    <div className="expenseReport" key="8">
                        Subtotal( 
                            <span className="expenseDetails"
                            >{cartQty} items</span>
                        )
                            <span className="expenseCost"
                            >${totalCost}</span>
                    </div>
                    <div className="expenseReport" key="9">
                        Delivery
                        <span className="FREE"> <span className="expenseCost"> FREE </span></span>
                    </div>
                    <div>
                        {discountRow}
                    </div>
                    <div className="expenseReport" key="10">
                        Estimated cat tax 
                        <span className="expenseCost">    
                        ${totalTax}
                        </span>
                    </div>
                    <div key="11" className="expenseDetails">Delivery & tax for 78737</div>

                    <div key="12" className="price">
                    <span className="totalLabel">Total    <span className="totalExpenseCost">  ${grandTotal}</span></span>
                    <button className="checkOut" onClick={() => onCheckoutClick()}>I'm ready to check out</button>
                    </div> 
                    <div key="13" className="cartNumDiv">
                        <div key="ioiojojojoja" className="cartNumber">Cart number: 91668763780081</div>
                        <img className="tarCat" src="https://prrgetsearchbarfooter.s3.amazonaws.com/Tarcat.png" alt="catget image"/>
                    </div>
                </span>
            </div>            
         </div>
    }
    return (
        <div key="0">
            <span>{cart}</span>
        </div>
    )
}

export default ShoppingCart;