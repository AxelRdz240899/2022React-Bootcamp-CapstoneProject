import React from "react";
import PropTypes from "prop-types";
import {
  CategoryStyledCard,
  CategoryStyledImage,
  CategoryCardText,
} from "Styles/CategoryCardStyles";
import { Link } from "react-router-dom";

export function CategoryCard({ name, imageSrc, categoryId }) {
  return (
    <CategoryStyledCard>
      <Link to={`/products?category=${categoryId}`}>
        <CategoryCardText>{name}</CategoryCardText>
        <CategoryStyledImage src={imageSrc} alt={name} />
      </Link>
    </CategoryStyledCard>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
