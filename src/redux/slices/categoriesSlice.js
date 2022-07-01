import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categoriesList",
  initialState: {
    categories: [],
    selectedCategories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      let index = state.selectedCategories.indexOf(action.payload);
      if (index === -1) {
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories = state.selectedCategories.filter(
          (categorie) => categorie !== action.payload
        );
      }
    },
    firsSelectCategory: (state, action) => {
      let index = state.selectedCategories.indexOf(action.payload);
      if (index === -1) {
        state.selectedCategories.push(action.payload);
      }
    },
    resetCategories: (state, action) => {
      state.categories = [];
    },
    resetSelectedCategories: (state, action) => {
      state.selectedCategories = [];
    },
    resetAll: (state, action) => {
      state.categories = [];
      state.selectedCategories = [];
    },
  },
});

// Acciones
export const {
  setCategories,
  selectCategory,
  firsSelectCategory,
  resetCategories,
  resetSelectedCategories,
  resetAll,
} = categoriesSlice.actions;

// Selectores
export const getCategories = (state) => state.categoriesList.categories;
export const getSelectedCategories = (state) =>
  state.categoriesList.selectedCategories;

// Reducer
export default categoriesSlice.reducer;
