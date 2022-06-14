import React, { useState } from "react";
import {
  StyledCategoryContainer,
} from "Styles/ProductListPage/SideBar";

import CheckBox from "Components/Checkbox";

export default function CategorySidebarElement({
  onClickHandler,
  categoryId,
  categoryName,
}) {
  const [checked, changeChecked] = useState(false);

  function handleClick() {
    if (checked) {
      changeChecked(false);
      onClickHandler(categoryId);
    } else {
      changeChecked(true);
      onClickHandler(categoryId);
    }
  }
  return (
    <StyledCategoryContainer onClick={() => handleClick()}>
      <CheckBox checked={checked} />
      {categoryName}
    </StyledCategoryContainer>
  );
}
