// Store.js 

import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from './EmpSlice';
import UserReducer from './UserSlice';
import AdminReducer from './adminSlice'
import ProductReducer from "./productSlice";

const store = configureStore({
    reducer: {
        emp: EmpReducer,
        user: UserReducer,
        admin:AdminReducer,
        product:ProductReducer
    }
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import EmpReducer from './EmpSlice';
// import UserReducer from './UserSlice';
// console.log('store');
// const store = configureStore({
//     reducer: {
//         emp: EmpReducer,
//         user: UserReducer // more reducers
//     }
// });
// export default store;


// steps in using redux store -

// install libraries
// create store
// provide store to the app
// create slices
// send data to store
// receive data from store


// import { configureStore } from "@reduxjs/toolkit";


// const Store = configureStore({
//     reducer: ''
// });

// export default Store;