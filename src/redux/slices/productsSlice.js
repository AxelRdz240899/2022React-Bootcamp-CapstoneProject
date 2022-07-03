import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "productsList",
    initialState: {
        productList: [],
        productPage: 1,
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        resetProductList: (state, action) => {
            state.productList = []
        },
        setProductPage: (state, action) => {
            state.productPage = action.payload;
        },
        resetProductPage: (state, action) => {
            state.productPage = 1;
        },
        resetAll: (state, action) => {
            state.productList = [];
            state.productPage = 1;
        },
    },
});

// Acciones
export const {
    setProductList,
    resetProductList,
    setProductPage,
    resetProductPage,
    resetAll,
} = productsSlice.actions;

// Selectores
export const getProducts = (state) => state.productsList.productList;
export const getPage = (state) => state.productsList.productPage;
// Reducers
export default productsSlice.reducer;

