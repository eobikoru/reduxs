import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './folder/cart/cartSlice.js'
import modalReducer from './folder/cart/modalSlice.js'
export const store = configureStore({
    reducer: {
        cart : cartReducer,
        modal : modalReducer
    },
  });