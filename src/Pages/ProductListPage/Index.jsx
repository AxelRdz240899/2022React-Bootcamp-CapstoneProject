import React, { useState } from "react";
import {
  StyledMainContainer,
  StyledSideBarContainer,
  StyledProductsContainer,
} from "Styles/ProductListPage/ProductListPage";

import SideBar from "./SideBar";
import ProductListSection from "./ProductList";
import { ProductCard } from "Components/ProductCard";

const productsJson = require("mocks/en-us/products.json");

let productList = productsJson.results.map((element) => (
  <ProductCard
    selected={true}
    key={element.data.sku}
    name={element.data.name}
    categoryId={element.data.category.id}
    categoryName={element.data.category.slug}
    price={element.data.price}
    imageUrl={element.data.mainimage.url}
  />
));

export default function ProductListPage() {

  const [activeCategories, setActiveCategories] = useState([]);

  return (
    <StyledMainContainer>
      <StyledSideBarContainer>
        <SideBar />
      </StyledSideBarContainer>
      <StyledProductsContainer>
        <ProductListSection products={productList} />
      </StyledProductsContainer>
    </StyledMainContainer>
  );
}
