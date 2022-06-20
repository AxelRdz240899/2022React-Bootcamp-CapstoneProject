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

const featuredProducts = require("mocks/en-us/featured-products.json");
const categories = require("mocks/en-us/product-categories.json");

export default function MainPage({ changeToProducts }) {
  return (
    <MainPageContainer>
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
      {/* Boton para ir a lista de productos */}
      <Link to="/products">
        <Button primary onClick={changeToProducts}>
          View all products
        </Button>
      </Link>
    </MainPageContainer>
  );
}
