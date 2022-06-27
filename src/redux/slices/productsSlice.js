import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "productsList",
    initialState: {
        productList: [],
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        resetProductList: (state, action) => {
            state.productList = []
        },
    },
});

// Acciones
export const {
    setProductList,
    resetProductList,
} = productsSlice.actions;

// Selectores
export const getProducts = (state) => state.productsList.productList;

// Reducers
export default productsSlice.reducer;

