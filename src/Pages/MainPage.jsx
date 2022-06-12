import React from "react";
import styled from "styled-components";
import { Footer } from "../Components/MainPageFooter";
import { Header } from "../Components/MainPageHeader";
import { Content } from "../Components/MainPageContent";

const StyledContainer = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export function MainPage() {
  return (
    <StyledContainer>
      <Header />
      <Content />
      <Footer />
    </StyledContainer>
  );
}
