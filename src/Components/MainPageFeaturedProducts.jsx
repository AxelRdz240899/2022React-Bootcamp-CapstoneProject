import React from "react";
import { ProductCard } from "./ProductCard";
import {
  GridContainer,
  FeaturedProductsContainer,
} from "../Styles/FeaturedProductsStyles";
import { SectionTitle } from "../Styles/GeneralStyles";

export function FeaturedProducts({ products }) {
  // Lista de productos destacados
  const productCardList = products.map((element) => (
    <ProductCard
      key={element.data.sku}
      name={element.data.name}
      category={element.data.category.slug}
      price={element.data.price}
      imageUrl={element.data.mainimage.url}
      description={element.data.short_description}
    />
  ));

  return (
    <FeaturedProductsContainer>
      <SectionTitle> Featured Products </SectionTitle>
      <GridContainer>{productCardList}</GridContainer>;
    </FeaturedProductsContainer>
  );
}
