import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: 'kim',
});

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 1, name: 'apple', price: 1000, quantity: 1 },
    { id: 2, name: 'banana', price: 2000, quantity: 2 },
    { id: 3, name: 'orange', price: 3000, quantity: 3 },
  ],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      item.quantity = item.quantity + 1;
    },
  },
});

export const { addItem, updateItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
