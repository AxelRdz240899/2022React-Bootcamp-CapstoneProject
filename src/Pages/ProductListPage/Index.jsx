import React, { useEffect, useState } from "react";
import {
  StyledMainContainer,
  StyledSideBarContainer,
  StyledProductsContainer,
} from "Styles/ProductListPage/ProductListPage";

import SideBar from "./SideBar";
import ProductListSection from "./ProductList";
import { useWizelineGetEndpoints } from "utils/hooks/useWizelineGetEndpoints";
import { getCategoriesUrl, getProductsUrl } from "utils/constants";
import LoadingSpinner from "Components/LoadingSpinner";
import { useDispatch } from "react-redux";
import {
  setCategories,
  firsSelectCategory,
  resetSelectedCategories,
} from "redux/slices/categoriesSlice";
import { setProductList } from "redux/slices/productsSlice";
import { useSearchParams } from "react-router-dom";

export default function ProductListPage() {
  const [searchParams, setSearch] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  dispatch(resetSelectedCategories());

  if (searchParams.get("category")) {
    dispatch(firsSelectCategory(searchParams.get("category")));
  }

  let productRequest = useWizelineGetEndpoints(getProductsUrl);
  let categoriesRequest = useWizelineGetEndpoints(getCategoriesUrl);

  // Use Effect que setea la lista de productos
  useEffect(() => {
    if (
      !productRequest.data ||
      productRequest.loadingResponse ||
      !categoriesRequest.data ||
      categoriesRequest.loadingResponse
    ) {
      return () => {};
    } else {
      setLoading(false);
      dispatch(setProductList(productRequest.data.results));
      dispatch(setCategories(categoriesRequest.data.results));
    }
  }, [
    productRequest.data,
    productRequest.loadingResponse,
    categoriesRequest.data,
    categoriesRequest.loadingResponse,
    dispatch,
  ]);

  return (
    <StyledMainContainer>
      {!loading ? (
        <>
          <StyledSideBarContainer>
            <SideBar />
          </StyledSideBarContainer>
          <StyledProductsContainer>
            <ProductListSection />
          </StyledProductsContainer>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </StyledMainContainer>
  );
}
