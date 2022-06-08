import React from "react";
import {
  CategoryStyledCard,
  CategoryStyledImage,
  CategoryCardText,
} from "../Styles/CategoryCardStyles";

export function CategoryCard({ name, imageSrc }) {
  return (
    <CategoryStyledCard>
      <CategoryCardText>{name}</CategoryCardText>
      <CategoryStyledImage src={imageSrc} alt={name} />
    </CategoryStyledCard>
  );
}
