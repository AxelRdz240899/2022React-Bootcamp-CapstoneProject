import React from "react";
import PropTypes from "prop-types";
import { StyledCategoryContainer } from "Styles/ProductListPage/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  getSelectedCategories,
} from "redux/slices/categoriesSlice";

import CategoryCheckBox from "Components/CategoryCheckbox";
import { resetProductPage } from "redux/slices/productsSlice";

export default function CategorySidebarElement({ categoryId, categoryName }) {
  const dispatch = useDispatch();

  const checked =
    useSelector(getSelectedCategories).indexOf(categoryId) === -1
      ? false
      : true;

  function handleClick() {
    dispatch(selectCategory(categoryId));
    dispatch(resetProductPage());
  }

  return (
    <StyledCategoryContainer onClick={() => handleClick()}>
      <CategoryCheckBox checked={checked} categoryId={categoryId} />
      {categoryName}
    </StyledCategoryContainer>
  );
}

CategorySidebarElement.propTypes = {
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};
