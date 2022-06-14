import React from "react";
import {
  StyledTitle,
  StyledProductGrid,
  CenteredContainer,
} from "Styles/ProductListPage/ProductListPage";

export default function ProductListSection({ products }) {
  return (
    <>
      <StyledTitle>Products</StyledTitle>
      <CenteredContainer>
        <StyledProductGrid>{products}</StyledProductGrid>
      </CenteredContainer>
    </>
  );
}
