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
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
