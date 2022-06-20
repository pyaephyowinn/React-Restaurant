import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  products: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.quantity += 1;
      state.amount += +newProduct.price;

      const searchIndex = state.products.findIndex(
        (p) => p.id === newProduct.id
      );

      if (searchIndex >= 0) {
        state.products[searchIndex].quantity += 1;
      } else {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          price: newProduct.price,
          quantity: 1,
        });
      }
    },

    removeProduct: (state, action) => {
      const pid = action.payload;
      const targetIndex = state.products.findIndex((p) => p.id === pid);
      console.log(targetIndex);

      state.products[targetIndex].quantity -= 1;
      state.amount -= state.products[targetIndex].price;
      state.quantity -= 1;

      if (state.products[targetIndex].quantity <= 0) {
        state.products = state.products.filter((prouct) => prouct.id !== pid);
      }
    },

    resetCart: (state, action) => {
      state.products = []
      state.quantity = 0
      state.amount = 0
    }
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
