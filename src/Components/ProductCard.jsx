import React from "react";
import {
  StyledCard,
  ImageContainer,
  InformationContainer,
  PriceCategoryContainer,
  StyledProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
} from "../Styles/ProductCardStyles";

export function ProductCard({ name, category, price, imageUrl, description }) {
  return (
    <StyledCard>
      <StyledProductImage src={imageUrl} alt={name} />
      <ProductName> {name}</ProductName>
      <ProductDescription> {description}</ProductDescription>
      <ProductPrice> ${price}</ProductPrice>
      <p> {category}</p>
    </StyledCard>
  );
}
