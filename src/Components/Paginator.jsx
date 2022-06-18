import React, { useState } from "react";
import {
  StyledPaginatorContainer,
  StyledPaginatorButton,
} from "Styles/Paginator";

function PaginatorButton({ number, selected, clickHandler }) {
  return (
    <StyledPaginatorButton
      onClick={() => clickHandler(number)}
      selected={selected}
    >
      {number}
    </StyledPaginatorButton>
  );
}
export default function Paginator({ pagesNumber }) {
  const [pageSelected, setPage] = useState(1);

  function changePage(number) {
    setPage(number);
  }

  let pageList = [];
  for (let i = 0; i < pagesNumber; i++) {
    pageList.push(
      <PaginatorButton
        key={i}
        clickHandler={changePage}
        selected={i + 1 === pageSelected ? true : false}
        number={i + 1}
      />
    );
  }

  return <StyledPaginatorContainer> {pageList}</StyledPaginatorContainer>;
}
