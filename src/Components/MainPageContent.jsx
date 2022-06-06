import React from "react";
import { Slider } from "./MainPageSlider";
import { Categories } from "./MainPageCategories";
import { FeaturedProducts } from "./MainPageFeaturedProducts";
import {
  StyledContentContainer,
  FeaturedProductsContainer,
} from "../Styles/MainPageStyles";

const featuredProducts = require("../mocks/en-us/featured-products.json");

export function Content() {
  return (
    <StyledContentContainer>
      <Slider />
      <Categories />
      <FeaturedProductsContainer>
        <FeaturedProducts products={featuredProducts.results} />
      </FeaturedProductsContainer>
    </StyledContentContainer>
  );
}
