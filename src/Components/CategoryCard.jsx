import React from "react";
import PropTypes from "prop-types";
import {
  CategoryStyledCard,
  CategoryStyledImage,
  CategoryCardText,
} from "Styles/CategoryCardStyles";

export function CategoryCard({ name, imageSrc }) {
  return (
    <CategoryStyledCard>
      <CategoryCardText>{name}</CategoryCardText>
      <CategoryStyledImage src={imageSrc} alt={name} />
    </CategoryStyledCard>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
