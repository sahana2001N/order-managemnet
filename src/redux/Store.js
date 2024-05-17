// Store.js 

import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
import AdminReducer from './adminSlice'
import ProductReducer from "./productSlice";

const store = configureStore({
    reducer: {
        user: UserReducer,
        admin:AdminReducer,
        product:ProductReducer
    }
});

export default store;

