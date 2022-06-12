import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "Components/Footer";
import { Header } from "Components/Header";
import MainPageContent from "Pages/MainPage/Index";
import ProductListPage from "Pages/ProductListPage/Index";

const StyledContainer = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export default function PageLayout() {
  const [page, changePage] = useState("MainPage");

  function GoToMainPage() {
    changePage("MainPage");
  }

  function GoToProductsPage() {
    changePage("ProductsPage");
  }

  const renderPages = {
    MainPage: <MainPageContent changeToProducts={GoToProductsPage} />,
    ProductsPage: <ProductListPage />,
  };

  return (
    <StyledContainer>
      <Header logoClick={GoToMainPage} />
      {renderPages[page]}
      <Footer />
    </StyledContainer>
  );
}
