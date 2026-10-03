import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [
      { id: 1, name: 'Laptop', price: 50000, image: "https://m.media-amazon.com/images/I/71CjP9jmqZL._SL1500_.jpg" },
      { id: 2, name: 'Phone', price: 20000, image: "https://m.media-amazon.com/images/I/61ULimPWODL._AC_UY218_.jpg" },
      { id: 3, name: 'Camera', price: 30000, image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg" },
      {id: 4, name: 'Headphones', price: 2000, image: "https://m.media-amazon.com/images/I/41keelc+1HL._SY300_SX300_QL70_FMwebp_.jpg"},
      {id: 5, name: 'Smart Watch', price: 5000, image: "https://m.media-amazon.com/images/I/81oS2scJ5GL._AC_UY218_.jpg"},
      {id: 6, name: 'Tablet', price: 15000, image: "https://m.media-amazon.com/images/I/81r-RPv-HxL._AC_UY218_.jpg"},
      {id: 7, name: 'Keyboard', price: 1000, image: "https://m.media-amazon.com/images/I/81r-RPv-HxL._AC_UY218_.jpg"},
      {id: 8, name: 'Mouse', price: 500, image:"https://m.media-amazon.com/images/I/51hZtBRUFBL._AC_UY218_.jpg"},
      {id: 9, name: 'Monitor', price: 10000, image: "https://m.media-amazon.com/images/I/71Rz4qNarwL._AC_UL320_.jpg"},
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