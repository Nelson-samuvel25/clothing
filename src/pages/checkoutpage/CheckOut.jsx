import React from "react";

import './CheckOut.scss';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems,selectCartItemsTotal } from "../../redux/cart/cart-selectors";

import CheckOutItem from "../../components/checkout-item/CheckOutItem";

import StripeCheckoutButton from "../../components/stripe-checkout/StripeCheckout";

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
                cartItems.map(cartItem=>(
                    <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }

            <div className="total">₹{total}</div>
            <div className="test-warning">
                *Please use the following test credit card details for payment*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV - 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartItemsTotal    
})

export default connect(mapStateToProps)(CheckOut);
