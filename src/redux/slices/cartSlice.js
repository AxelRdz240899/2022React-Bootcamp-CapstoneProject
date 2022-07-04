import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
  },
  reducers: {
    resetCartProductList: (state, action) => {
      state.productList = [];
    },
    addProductToCart: (state, action) => {
      state.productList.push(action.payload);
    },
    updateProductFromCart: (state, action) => {
      state.productList[action.payload.index].requested =
        action.payload.requested;
    },
    deleteProductFromCart: (state, action) => {
      state.productList = state.productList.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

// Acciones
export const {
  resetCartProductList,
  addProductToCart,
  updateProductFromCart,
  deleteProductFromCart,
} = cartSlice.actions;

// Selectores
export const getProductsFromCart = (state) => state.cart.productList;
// Reducers
export default cartSlice.reducer;
