import React from "react";

import CustomBtn from "../custom-btn/CustomBtn";


import './CartDropdown.scss';

import { connect } from "react-redux";

import CartItems from "../cart-items/CartItems";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import { toggleDropdown } from "../../redux/cart/cart-action";

const CartDropdown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">

            {
                cartItems.length?
                cartItems.map(item=>(<CartItems key={item.id} item={item}/>))
                :(
                    <span className="empty-message">The cart is empty</span>
                )
            }
        </div>
        <CustomBtn onClick={()=>{
            history.push('/checkout')
            dispatch(toggleDropdown())
        }} style={{
            fontSize:'12px'
        }}>Go to Checkout</CustomBtn>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropdown));