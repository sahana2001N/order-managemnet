import { createSlice } from "@reduxjs/toolkit";
console.log('productSlice');
const productSlice = createSlice({
    name: 'product',
    initialState : { 
        productObj: {name: 'T-shirt', price: 1200},
        productDataList:'',
        productaddList:'',
        deleteProduct: ''
    },
    reducers : { // more methods 
        setProductObj : (state, action) => {
            console.log(action.payload);
            state.productObj = action.payload;
        },
        setAllProduct : (state, action) => {
            console.log(action.payload);
            state.productDataList = action.payload;
        },
        addAllProduct : (state, action) => {
             console.log(action.payload);
             state.productaddList = action.payload;
         },
         deleteProduct : (state, action) => {
            console.log(action.payload);
            state.deleteProduct = action.payload;
        },
    }
});
export default productSlice.reducer;

export const {productObj,setAllProduct,addAllProduct , deleteProduct} = productSlice.actions;