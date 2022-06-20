import React from "react";
import PropTypes from "prop-types";
import {
  StyledCard,
  StyledProductImage,
  ProductName,
  ProductPrice,
} from "Styles/ProductCardStyles";
import { CategoryBadge } from "./CategoryBadge";

export function ProductCard({
  selected,
  name,
  categoryId,
  categoryName,
  price,
  imageUrl,
  productId,
}) {
  return (
    <StyledCard
      to={`product/${productId}`}
      selected={selected}
      categoryid={categoryId}
    >
      <StyledProductImage src={imageUrl} alt={name} />
      <ProductName> {name}</ProductName>
      <CategoryBadge categoryId={categoryId} categoryName={categoryName} />
      <ProductPrice> ${price} USD</ProductPrice>
      <button> Add to Cart </button>
    </StyledCard>
  );
}

ProductCard.propTypes = {
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};
