import React from "react";
import PropTypes from "prop-types";
import {
  StyledCard,
  ProductInformationContainer,
  PriceContainer,
  StyledProductImage,
  ProductName,
  ProductDescription,
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
  description,
}) {
  console.log(categoryName);
  return (
    <StyledCard selected={selected} categoryId={categoryId}>
      <ProductInformationContainer>
        <StyledProductImage src={imageUrl} alt={name} />
        <ProductName> {name}</ProductName>
        <ProductDescription> {description}</ProductDescription>
        <CategoryBadge categoryId={categoryId} categoryName={categoryName} />
      </ProductInformationContainer>
      <PriceContainer>
        <ProductPrice> ${price} US</ProductPrice>
      </PriceContainer>
    </StyledCard>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
