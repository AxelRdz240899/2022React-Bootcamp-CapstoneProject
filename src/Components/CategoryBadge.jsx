import React from "react";
import PropTypes from "prop-types";
import { StyledCategoryBadge } from "../Styles/CategoryBadgeStyles";

export function CategoryBadge({ category }) {
  let color = "#ffffff";

  switch (category) {
    case "bed--bath":
      color = "#0094C7";
      break;
    case "lighting":
      color = "#FFEA00";
      break;
    case "kitchen":
      color = "#FD330C";
      break;
    case "furniture" || "furnitures":
      color = "#FFC300 ";
      break;
    case "decorate--organize":
      color = "#AFE1AF";
      break;
    default:
      color = "white";
      break;
  }
  return (
    <StyledCategoryBadge backgroundColor={color}>
      {category}
    </StyledCategoryBadge>
  );
}

CategoryBadge.propTypes = {
  category: PropTypes.string.isRequired,
};
