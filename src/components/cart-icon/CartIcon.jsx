import React from "react";

import {ReactComponent as ShoppingIcon} from '../../assets/shpping.svg';

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import { createStructuredSelector } from "reselect";



import './CartIcon.scss'
import { connect } from "react-redux";

import {toggleDropdown} from '../../redux/cart/cart-action'

const CartIcon = ({toggleDropdown,itemCount})=>(
    <div className="cart-icon" onClick={toggleDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch)=>({
    toggleDropdown : ()=>dispatch(toggleDropdown())
})

const mapStateToProps = createStructuredSelector({
   itemCount : selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);