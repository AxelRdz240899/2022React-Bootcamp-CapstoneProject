import React from "react";
import { ProductCard } from "./ProductCard";
import { GridContainer } from "../Styles/FeaturedProductsStyles";

export function FeaturedProducts({ products }) {
  // Lista de productos destacados
  const productCardList = products.map((element) => (
    <ProductCard
      key={element.data.sku}
      name={element.data.name}
      category={element.data.category}
      price={element.data.price}
      imageUrl={element.data.mainimage.url}
      description={element.data.description}
    />
  ));

  return <GridContainer>{productCardList}</GridContainer>;
}
