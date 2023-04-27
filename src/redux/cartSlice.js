import { createSlice } from "@reduxjs/toolkit";

//part1: define slice (including reducers and actions)
const initialState = { cartItems: [] };
const cartSlice = createSlice( {
    name: 'cart',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id);
            if(!!product)
            {
                const cartItems = state.cartItems.map((x) =>
                    x.id === product.id ? item : x
                );
                state.cartItems = cartItems;
            }
            else
            {
                state.cartItems = [...state.cartItems, item]
            }
        },
    },
});

//export state to global (variable)
export const selectCarItems = (state) => state.cart.cartItems;

//export action to global (function)
export const { addCartItems } = cartSlice.actions;

//export reducer to global 
export default cartSlice.reducer;