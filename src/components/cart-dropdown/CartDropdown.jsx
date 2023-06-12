import React from "react";

import CustomBtn from "../custom-btn/CustomBtn";



import './CartDropdown.scss';

const CartDropdown = ()=>(
    <div className="cart-dropdown">
    <div className="cart-items"/>
        <CustomBtn style={{
            fontSize:'12px'
        }}>Go to Checkout</CustomBtn>
    </div>
)


export default CartDropdown;