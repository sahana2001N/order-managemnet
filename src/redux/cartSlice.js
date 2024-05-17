import { createSlice } from "@reduxjs/toolkit";
console.log('cartSlice');

const initialState = {
    items: '',
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers : { // more methods 
       
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1; // Update quantity for existing item
            } else {
              state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
            }
            state.totalQuantity += 1; // Increment total quantity
          },
          
      
    }
});
export default cartSlice.reducer;

export const {addItem,updateQuantity} = cartSlice.actions;
