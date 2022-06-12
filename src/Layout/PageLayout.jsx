import React from "react";
import styled from "styled-components";
import { Footer } from "Components/Footer";
import { Header } from "Components/Header";
import MainPageContent from "Pages/MainPage/Index";

const StyledContainer = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export default function PageLayout() {
  return (
    <StyledContainer>
      <Header />
      <MainPageContent />
      <Footer />
    </StyledContainer>
  );
}
