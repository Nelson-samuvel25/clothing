import cartActionType from "./cart-types"

export const toggleDropdown = ()=>({
    type: cartActionType.TOGGLE_CART_MENU,
})


export const addItem = item =>({
    type : cartActionType.ADD_ITEM,
    payload:item,
})
