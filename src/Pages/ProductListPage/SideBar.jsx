import React from "react";
import CategorySidebarElement from "./CategorySidebarElement";
import { StyledCategoryListContainer } from "Styles/ProductListPage/SideBar";
import { StyledTitle } from "Styles/ProductListPage/ProductListPage";
import { useSelector } from "react-redux";
import {
  getCategories,
  getSelectedCategories,
  resetSelectedCategories,
} from "redux/slices/categoriesSlice";
import { useDispatch } from "react-redux";
import { Button } from "Styles/Button";

export default function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const selectedCategories = useSelector(getSelectedCategories);

  const categoriesList = categories.map((element) => {
    return (
      <CategorySidebarElement
        key={element.id}
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
      {selectedCategories.length > 0 && (
        <Button onClick={() => dispatch(resetSelectedCategories())}>
          Clear filters
        </Button>
      )}
    </>
  );
}
