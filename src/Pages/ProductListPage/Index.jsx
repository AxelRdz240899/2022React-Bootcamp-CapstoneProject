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

function getFilteredProductList(filters) {
  let filteredProductList = [];

  if (filters.length === 0) {
    filteredProductList = productsJson.results;
  } else {
    productsJson.results.forEach((product) => {
      if (filters.indexOf(product.data.category.id) !== -1) {
        filteredProductList.push(product);
      }
    });
  }

  return filteredProductList.map((element) => (
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
}
export default function ProductListPage() {
  const [activeCategories, setActiveCategories] = useState([]);

  let productList = getFilteredProductList(activeCategories);

  function categoryClick(categoryId) {
    let categoryIndex = activeCategories.indexOf(categoryId);
    let newCategoryArray = [];

    newCategoryArray.push(...activeCategories);

    if (categoryIndex === -1) {
      newCategoryArray.push(categoryId);
      setActiveCategories(newCategoryArray);
    } else {
      newCategoryArray.splice(categoryIndex, 1);
      setActiveCategories(newCategoryArray);
    }
  }

  return (
    <StyledMainContainer>
      <StyledSideBarContainer>
        <SideBar categoryClick={categoryClick} />
      </StyledSideBarContainer>
      <StyledProductsContainer>
        <ProductListSection products={productList} />
      </StyledProductsContainer>
    </StyledMainContainer>
  );
}
