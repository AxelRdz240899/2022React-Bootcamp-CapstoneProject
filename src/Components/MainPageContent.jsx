import React from "react";
import { Slider } from "./MainPageSlider";
import { Categories } from "./MainPageCategories";
import { FeaturedProducts } from "./MainPageFeaturedProducts";
import {
  StyledContentContainer,
  FeaturedProductsContainer,
  CategoriesContainer,
} from "../Styles/MainPageStyles";

const featuredProducts = require("../mocks/en-us/featured-products.json");
const categories = require("../mocks/en-us/product-categories.json");

export function Content() {
  return (
    <StyledContentContainer>
      {/* Slider */}
      <Slider />
      {/* Sección de categorias */}
      <CategoriesContainer>
        <Categories categories={categories.results} />
      </CategoriesContainer>
      {/* Sección de productos destacados */}
      <FeaturedProductsContainer>
        <FeaturedProducts products={featuredProducts.results} />
      </FeaturedProductsContainer>
    </StyledContentContainer>
  );
}
