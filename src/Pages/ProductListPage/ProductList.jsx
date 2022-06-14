import React from "react";
import Paginator from "Components/Paginator";
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
        <Paginator pagesNumber={5} />
      </CenteredContainer>
    </>
  );
}
