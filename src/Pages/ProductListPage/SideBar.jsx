import React from "react";
import CategorySidebarElement from "./CategorySidebarElement";
import { StyledCategoryListContainer } from "Styles/ProductListPage/SideBar";
const categories = require("mocks/en-us/product-categories.json");

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

function categoryClickHandler(categoryId) {
  console.log("Se dió click a la categoría: ", categoryId);
}

export default function SideBar() {
  return (
    <>
      <StyledCategoryListContainer>
        {categoriesList}
      </StyledCategoryListContainer>
    </>
  );
}
