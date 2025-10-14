import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addItem(state, action) {
        const item = state.items.find(i => i.id === action.payload.id);
        if (item) {
            item.quantity += 1;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    removeItem(state, action) {
        const item = state.items.find(i => i.id === action.payload.id);
        if (item && item?.quantity > 1) {
            item.quantity -= 1;
        } else {
            state.items = state.items.filter(i => i.id !== action.payload.id);
        }
    },
    clearCart(state) {
        state.items = [];
    },
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;