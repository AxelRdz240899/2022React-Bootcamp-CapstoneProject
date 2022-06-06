import React from "react";
import { StyledCard, StyledProductImage } from "../Styles/ProductCardStyles";

export function ProductCard({ name, category, price, imageUrl, description }) {
  return (
    <StyledCard>
      <StyledProductImage src={imageUrl} alt={name} />
      <p> {name}</p>
      <p> ${price}</p>
    </StyledCard>
  );
}
