import cartActionType from "./cart-types"

import {addToCart, removeFromCart} from "../cart/cart-utils"

const INITIAL_STATE = {
    hidden : true,
    cartItems : [],
}

const CartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case  cartActionType.TOGGLE_CART_MENU:
            return{
                ...state,
                hidden : !state.hidden,
            }
        case cartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems : addToCart(state.cartItems,action.payload),
            }

        case cartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems : removeFromCart(state.cartItems,action.payload)
            }
        
        case cartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default CartReducer;