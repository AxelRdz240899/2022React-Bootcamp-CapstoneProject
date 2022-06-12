import React from "react";
import { Slider } from "./MainPageSlider";
import { Categories } from "./MainPageCategories";
import { FeaturedProducts } from "./MainPageFeaturedProducts";
import {
  StyledContentContainer,
  FeaturedProductsContainer,
  CategoriesContainer,
} from "Styles/MainPageStyles";
import { Button } from "Styles/Button";

const featuredProducts = require("mocks/en-us/featured-products.json");
const categories = require("mocks/en-us/product-categories.json");

export default function MainPageContent({changeToProducts}) {
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
      <Button  onClick={changeToProducts}>View all products</Button>
    </StyledContentContainer>
  );
}
