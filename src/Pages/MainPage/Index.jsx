import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "./MainPageSlider";
import { Categories } from "./MainPageCategories";
import { FeaturedProducts } from "./MainPageFeaturedProducts";
import {
  MainPageContainer,
  FeaturedProductsContainer,
  CategoriesContainer,
} from "Styles/MainPageStyles";

import { Button } from "Styles/Button";

export default function MainPage() {
  return (
    <MainPageContainer>
      {/* Slider */}
      <Slider />
      {/* Sección de categorias */}
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
      {/* Sección de productos destacados */}
      <FeaturedProductsContainer>
        <FeaturedProducts />
      </FeaturedProductsContainer>
      {/* Boton para ir a lista de productos */}
      <Link to="/products">
        <Button primary>
          View all products
        </Button>
      </Link>
    </MainPageContainer>
  );
}
