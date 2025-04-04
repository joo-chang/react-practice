import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: 'kim',
});

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      item.quantity = item.quantity + 1;
    },
    insertOrReplaceItem: (state, action) => {
      const { quantity, id, name, price } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = item.quantity + quantity;
      } else {
        state.push(action.payload);
      }
    },
  },
});

const recentProducts = createSlice({
  name: 'recentProducts',
  initialState: [],
  reducers: {
    addRecentProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const { addItem, updateItem, insertOrReplaceItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
