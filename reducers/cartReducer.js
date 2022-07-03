export const cartReducer = (state, action) => {
    // const newMenu = action.payload;
    // const existingItem = state.cart.find(menu => menu.id === newMenu);
    
    switch (action.type) {
        case "increase" :
            // console.log('The Payload: ', action.payload);
            const existingOrder = state.cart.find(order => order.id == action.payload.id);
            console.log({...existingOrder});
            const orderData = {...existingOrder};
            console.log(orderData.quantity + 1);
            // console.log('existing order: ', existingOrder.quantity);
            // existingOrder = {...existingOrder};
            // existingOrder.quantity++;
            // console.log('existing order: ', existingOrder.quantity);
            // console.log('existing order 2: ', existingOrder.quantity);
            return {...state, cart: state.cart}

        case "decrease" :
            console.log('decrease clicked');
            let orderToDecrease = state.cart.find(order => order.id == action.payload.id);
            console.log(orderToDecrease);
            let cartdata = [...state.cart];

            let order = {...orderToDecrease}
            let quantity = order.quantity - 1
            console.log(quantity)
            // if (order.quantity == 0) {
            //     cartdata = cartdata.filter(data => data.id != action.payload.id);
            //     return {...state, cart: cartdata}
            // };
            console.log(quantity);
            return {...state, cart: cartdata}
            
        case "addToCart" :
            const existingItem = state.cart.find(cartItem => cartItem.id == action.payload.id);
            let cartData = [...state.cart];
            let incomingCartItem = {...action.payload};

            if (existingItem) {
                cartData = cartData.filter(cartItem => cartItem.id != action.payload.id);
                existingItem = {...existingItem};
                existingItem.quantity++;
                existingItem.price = +action.payload.price * +existingItem.quantity;
                cartData = [...cartData, existingItem];
            } else {
                cartData = [...cartData, incomingCartItem];
            }

            return {...state, cart: cartData}

        case 'delete':
            const newCart = [...state.cart].filter((cartItem) => cartItem.id != action.payload.id);
            return {...state, cart: newCart};

        case 'clearCart':
            return {...state, cart: []};

        default:
            return state;
    }
}