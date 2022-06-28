import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Paginator from "Components/Paginator";
import {
  StyledTitle,
  StyledProductGrid,
  CenteredContainer,
} from "Styles/ProductListPage/ProductListPage";
import getFilteredProductList from "utils/getFilteredProductList";
import { useSelector } from "react-redux";
import { getSelectedCategories } from "redux/slices/categoriesSlice";
import {
  getProducts,
  getPage,
  setProductPage,
} from "redux/slices/productsSlice";

const pageElements = 12;

export default function ProductListSection() {
  const dispatch = useDispatch();

  const pageNumber = useSelector(getPage);
  const activeCategories = useSelector(getSelectedCategories);
  const products = useSelector(getProducts);

  const productList = getFilteredProductList(activeCategories, products);
  const numberOfPages = Math.ceil(productList.length / 12);

  const startIndex = (pageNumber - 1) * pageElements;
  const pageProductList = productList.slice(
    startIndex,
    startIndex + pageElements
  );

  useEffect(() => {
    dispatch(setProductPage(1));
  }, [dispatch]);

  function clickHandler(number) {
    dispatch(setProductPage(number));
  }
  
  return (
    <>
      <StyledTitle>Products</StyledTitle>
      <CenteredContainer>
        <StyledProductGrid>{pageProductList}</StyledProductGrid>
        <Paginator
          pagesNumber={numberOfPages}
          changePageHandler={clickHandler}
          pageSelected={pageNumber}
        />
      </CenteredContainer>
    </>
  );
}
