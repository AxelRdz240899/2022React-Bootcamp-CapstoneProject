import React, { useEffect } from "react";
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
import { setCategories } from "redux/slices/categoriesSlice";
import { setProductList } from "redux/slices/productsSlice";

export default function ProductListPage() {
  const dispatch = useDispatch();

  // const [products, setProducts] = useState([]);

  let productRequest = useWizelineGetEndpoints(getProductsUrl);
  let categoriesRequest = useWizelineGetEndpoints(getCategoriesUrl);

  // Use Effect que setea la lista de productos
  useEffect(() => {
    if (!productRequest.data || productRequest.isLoading) {
      return () => {};
    } else {
      dispatch(setProductList(productRequest.data.results));
      // setProducts(productRequest.data.results);
    }
  }, [productRequest.data, productRequest.isLoading, dispatch]);

  // Use effect que setea la lista de categorias
  useEffect(() => {
    if (!categoriesRequest.data || categoriesRequest.isLoading) {
      return () => {};
    } else {
      dispatch(setCategories(categoriesRequest.data.results));
    }
  }, [categoriesRequest.data, categoriesRequest.isLoading, dispatch]);

  // let productList = getFilteredProductList(activeCategories, products);

  return (
    <StyledMainContainer>
      {!productRequest.isLoading && !categoriesRequest.isLoading ? (
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
