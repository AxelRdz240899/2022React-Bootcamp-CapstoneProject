import React from "react";
import {
  StyledPaginatorContainer,
  PaginatorText,
  PaginatorSelectedText,
  PaginatorLeftArrow,
  PaginatorRightArrow,
} from "Styles/Paginator";
export default function Paginator({
  pagesNumber,
  changePageHandler,
  pageSelected,
}) {
  function changePage(pageNumber) {
    if (pageNumber > 0 && pageNumber < pagesNumber + 1) {
      changePageHandler(pageNumber);
    }
  }

  return (
    <StyledPaginatorContainer>
      <PaginatorLeftArrow
        disabled={pageSelected === 1}
        onClick={() => changePage(pageSelected - 1)}
      />
      <PaginatorText>
        <PaginatorSelectedText>{pageSelected}/</PaginatorSelectedText>
        {pagesNumber}
      </PaginatorText>
      <PaginatorRightArrow
        disabled={pageSelected === pagesNumber}
        onClick={() => changePage(pageSelected + 1)}
      />
    </StyledPaginatorContainer>
  );
}
