import React, { useEffect, useState } from "react";
import {
  StyledMainContainer,
  StyledSideBarContainer,
  StyledProductsContainer,
} from "Styles/ProductListPage/ProductListPage";

import SideBar from "./SideBar";
import ProductListSection from "./ProductList";
import { ProductCard } from "Components/ProductCard";
import { useWizelineGetEndpoints } from "utils/hooks/useWizelineGetEndpoints";
import { getProductsUrl } from "utils/constants";
import LoadingSpinner from "Components/LoadingSpinner";

function getFilteredProductList(filters, products) {
  let filteredProductList = [];

  if (filters.length === 0) {
    filteredProductList = products;
  } else {
    products.forEach((product) => {
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
      productId={element.data.sku}
    />
  ));
}

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  let { data, isLoading } = useWizelineGetEndpoints(getProductsUrl);

  useEffect(() => {
    if (!data || isLoading) {
      return () => {};
    }
    setProducts(data.results);
  }, [data, isLoading]);

  const [activeCategories, setActiveCategories] = useState([]);

  let productList = getFilteredProductList(activeCategories, products);

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
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <StyledMainContainer>
          <StyledSideBarContainer>
            <SideBar categoryClick={categoryClick} />
          </StyledSideBarContainer>
          <StyledProductsContainer>
            <ProductListSection products={productList} />
          </StyledProductsContainer>
        </StyledMainContainer>
      )}
    </>
  );
}
