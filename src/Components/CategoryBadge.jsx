import React from "react";
import PropTypes from "prop-types";
import { StyledCategoryBadge } from "Styles/CategoryBadgeStyles";
import { CategoryColors } from "utils/CategoryColors";

export function CategoryBadge({ categoryId, categoryName }) {
  let category = categoryName?.replace("--", " & ");
  return (
    <StyledCategoryBadge backgroundColor={CategoryColors[categoryId]}>
      {category}
    </StyledCategoryBadge>
  );
}

CategoryBadge.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
