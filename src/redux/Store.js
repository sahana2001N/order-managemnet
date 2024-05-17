// Store.js 

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
import AdminReducer from './adminSlice'
import ProductReducer from "./productSlice";
import CartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        user: UserReducer,
        admin:AdminReducer,
        product:ProductReducer,
        cart : CartReducer
    }
});

export default store;

