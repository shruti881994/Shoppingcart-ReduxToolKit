import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      { id: 1, name: 'Laptop', price: 50000 },
      { id: 2, name: 'Phone', price: 20000 },
      { id: 3, name: 'Camera', price: 30000 },
      {id: 4, name: 'Headphones', price: 2000},
      {id: 5, name: 'Smart Watch', price: 5000},
      {id: 6, name: 'Tablet', price: 15000},
      {id: 7, name: 'Keyboard', price: 1000},
      {id: 8, name: 'Mouse', price: 500},
      {id: 9, name: 'Monitor', price: 10000},
   ],
   cart: [],
}
const cartSlice = createSlice({
   name: "cart",
   initialState: initialState,
   reducers: {
      addToCart: (state, action) => { state.cart.push(action.payload); },
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter((item => item.id !== action.payload.id));
      },
      clearCart: (state) => { state.cart = []; }
   }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;