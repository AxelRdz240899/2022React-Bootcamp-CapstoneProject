import React from "react";
import Paginator from "Components/Paginator";
import {
  StyledTitle,
  StyledProductGrid,
  CenteredContainer,
} from "Styles/ProductListPage/ProductListPage";
import getFilteredProductList from "utils/getFilteredProductList";
import { useSelector } from "react-redux";
import { getSelectedCategories } from "redux/slices/categoriesSlice";
import { getProducts } from "redux/slices/productsSlice";

export default function ProductListSection() {
  const activeCategories = useSelector(getSelectedCategories);
  const products = useSelector(getProducts);
  let productList = getFilteredProductList(activeCategories, products);
  return (
    <>
      <StyledTitle>Products</StyledTitle>
      <CenteredContainer>
        <StyledProductGrid>{productList}</StyledProductGrid>
        <Paginator pagesNumber={5} />
      </CenteredContainer>
    </>
  );
}
