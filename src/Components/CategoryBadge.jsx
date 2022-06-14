import React from "react";
import PropTypes from "prop-types";
import { StyledCategoryBadge } from "Styles/CategoryBadgeStyles";
import { CategoryColors } from "utils/CategoryColors";

export function CategoryBadge({ categoryId, categoryName }) {
  return (
    <StyledCategoryBadge backgroundColor={CategoryColors[categoryId]}>
      {categoryName}
    </StyledCategoryBadge>
  );
}

CategoryBadge.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
