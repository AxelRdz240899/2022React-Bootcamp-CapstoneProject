import React from "react";
import {
  StyledMainContainer,
  StyledSideBarContainer,
  StyledProductsContainer,
} from "Styles/ProductListPage/ProductListPage";

import SideBar from "./SideBar";

export default function ProductListPage() {
  return (
    <StyledMainContainer>
      <StyledSideBarContainer>
        <SideBar />
      </StyledSideBarContainer>
      <StyledProductsContainer> </StyledProductsContainer>
    </StyledMainContainer>
  );
}
