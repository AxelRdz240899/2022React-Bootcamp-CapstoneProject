import React from "react";
import CategorySidebarElement from "./CategorySidebarElement";
import { StyledCategoryListContainer } from "Styles/ProductListPage/SideBar";
import { StyledTitle } from "Styles/ProductListPage/ProductListPage";

const categories = require("mocks/en-us/product-categories.json");

export default function SideBar({ categoryClick }) {
  function categoryClickHandler(categoryId) {
    categoryClick(categoryId);
  }

  const categoriesList = categories.results.map((element) => {
    return (
      <CategorySidebarElement
        key={element.id}
        onClickHandler={categoryClickHandler}
        categoryId={element.id}
        categoryName={element.data.name}
      />
    );
  });
  return (
    <>
      <StyledTitle> Categories </StyledTitle>
      <StyledCategoryListContainer>
        {categoriesList}
      </StyledCategoryListContainer>
    </>
  );
}
