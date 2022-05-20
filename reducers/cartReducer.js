export const cartReducer = (state, action) => {
    const newMenu = action.payload;
    const existingItem = state.cart.find(menu => menu.id === newMenu);
    
    switch (action.type) {
        case "increase" :
            return {...state, quantity: state.quantity + 1}
        case "decrease" :
            return {...state, quantity: state.quantity - 1}
        default:
            return state;
    }
}