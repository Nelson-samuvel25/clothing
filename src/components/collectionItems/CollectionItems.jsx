import React from "react";

import './CollectionItem.scss'

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart-action";

import CustomBtn from "../custom-btn/CustomBtn";

const CollectionItem = ({item,addItem})=>{
    const {name,imageUrl,price} = item;
    return(
        <div className="collection-item">
            <div
            className="image"
            style={{
                backgroundImage : `url(${imageUrl})`,
            }}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomBtn inverted onClick = {()=>addItem(item)}>Add to cart</CustomBtn>
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    addItem : item => dispatch(addItem(item))
})


export default connect(null,mapDispatchToprops)(CollectionItem);