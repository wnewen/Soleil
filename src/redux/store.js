import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

//part2: combine reducers and create a store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

//export store to global 
export default store;