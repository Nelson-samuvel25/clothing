import React from "react";

import './CheckOut.scss';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems,selectCartItemsTotal } from "../../redux/cart/cart-selectors";

const CheckOut = ({cartItems,total})=>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>cartItem.name)
            }

            <div className="total">₹{total}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartItemsTotal    
})

export default connect(mapStateToProps)(CheckOut);
