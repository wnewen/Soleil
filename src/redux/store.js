import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from './cartSlice';
//import colorReducer from './colorSLice';

// Data Persist Config
const persistConfig = {
  key: 'shoppingCart',
  storage,
}
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
//const persistedColorReducer = persistReducer(persistConfig, colorReducer);

//part2: combine reducers and create a store
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', 
    middleware: [thunk]
});

//export store to global 
export const persistor = persistStore(store);