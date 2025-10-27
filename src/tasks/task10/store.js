import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartItems', JSON.stringify(state.cart.items));
});

export default store;