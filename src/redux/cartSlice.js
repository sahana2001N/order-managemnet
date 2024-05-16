import { createSlice } from "@reduxjs/toolkit";
console.log('cartSlice');
const cartSlice = createSlice({
    name: 'cart',
    initialState : { 
        cartObj: {name: 'T-shirt', price: 1200},
        cartDataList:''
      
    },
    reducers : { // more methods 
        setCartObj : (state, action) => {
            console.log(action.payload);
            state.cartObj = action.payload;
        },
        setAllCart : (state, action) => {
            console.log(action.payload);
            state.cartDataList = action.payload;
        }
      
    }
});
export default cartSlice.reducer;

export const {cartObj,setAllCart} = cartSlice.actions;