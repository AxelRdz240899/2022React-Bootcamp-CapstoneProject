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
}) {
  return (
    <StyledCard selected={selected} categoryId={categoryId}>
      <StyledProductImage src={imageUrl} alt={name} />
      <ProductName> {name}</ProductName>
      <CategoryBadge categoryId={categoryId} categoryName={categoryName} />
      {/* <ProductInformationContainer>
      </ProductInformationContainer> */}
      <ProductPrice> ${price} US</ProductPrice>
      {/* <PriceContainer>
      </PriceContainer> */}
    </StyledCard>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
