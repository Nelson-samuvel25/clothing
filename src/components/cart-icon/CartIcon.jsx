import React from "react";

import {ReactComponent as ShoppingIcon} from '../../assets/shpping.svg';




import './CartIcon.scss'
import { connect } from "react-redux";

import {toggleDropdown} from '../../redux/cart/cart-action'

const CartIcon = ({toggleDropdown})=>(
    <div className="cart-icon" onClick={toggleDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch)=>({
    toggleDropdown : ()=>dispatch(toggleDropdown())
})


export default connect(null,mapDispatchToProps)(CartIcon);