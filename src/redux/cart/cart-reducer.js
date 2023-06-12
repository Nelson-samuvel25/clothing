import cartActionType from "./cart-types"

import addToCart from "./cart-utils"

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
        default:
            return state;
    }
}

export default CartReducer;