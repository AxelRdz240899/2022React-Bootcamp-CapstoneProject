import React from "react";
import { StyledCategoryContainer } from "Styles/ProductListPage/CategorySidebarElement";

import CheckBox from "Components/Checkbox";

export default function CategorySidebarElement({
  onClickHandler,
  categoryId,
  categoryName,
}) {
  return (
    <StyledCategoryContainer onClick={() => onClickHandler(categoryId)}>
      <CheckBox checked={false} />
      {categoryName}
    </StyledCategoryContainer>
  );
}
