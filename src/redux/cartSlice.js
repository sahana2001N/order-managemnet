import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
console.log('cartSlice');

const initialState = {
    // cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers : { // more methods 
       
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
              state.cartItems[itemIndex].cartQuantity += 1; // Update quantity for existing item
              toast.info(`Increased ${state.cartItems[itemIndex].name} product quantity`, {
                position:"bottom-right",
              })
            } else {
              const tempProduct = {...action.payload, cartQuantity: 1}
              state.cartItems.push(tempProduct);
              toast.success(`${action.payload.name} added to cart`, {
                position:"bottom-right"
              })
            }

            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

          },

        
        removeFromCart : (state,action) => {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          )

            state.cartItems = nextCartItems;
            toast.error(`${action.payload.name} removed from cart`, {
              position:"bottom-right"
            })

        },

        decreaseCart : (state,action) => {
          const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

          if (state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity -= 1

            toast.info(`Decreased ${action.payload.name} cart quantity`, {
              position:"bottom-right"
            })
          }
          else if (state.cartItems[itemIndex].cartQuantity == 1){
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            )
  
              state.cartItems = nextCartItems;
              toast.error(`${action.payload.name} removed from cart`, {
                position:"bottom-right"
              })
          }
        },

        clearCart : (state,action) => {
          state.cartItems = [];
          toast.error(`Cart Cleared`, {
            position:"bottom-right"
          })

        },

        getTotal : (state,action) => {

          let {total, quantity} = state.cartItems.reduce((cartTotal, item) => {
            const { price, cartQuantity } = item
            const itemTotal = price * cartQuantity

            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity

            return cartTotal
          }, {
            total: 0,
            quantity : 0
          })

          state.cartTotalQuantity = quantity
          state.cartTotalAmount = total
        }
          
      
    }
});

export const { addToCart,removeFromCart,decreaseCart,clearCart, getTotal} = cartSlice.actions;
export default cartSlice.reducer;

