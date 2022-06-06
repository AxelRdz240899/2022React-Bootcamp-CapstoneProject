import React from "react";
import styled from "styled-components";
import { device } from "../utils/viewports";
import { Slider } from "./MainPageSlider";
import { Categories } from "./MainPageCategories";
import { FeaturedProducts } from "./MainPageFeaturedProducts";

const featuredProducts = require("../mocks/en-us/featured-products.json");

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedProductsContainer = styled.div`
  display: flex;
  justify-content: center;

  align-self: center;

  ${device.mobile} {
    width: 90%;
  }
  ${device.tablet} {
    width: 80%;
  }
  ${device.desktop} {
    width: 70%;
  }
`;

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
