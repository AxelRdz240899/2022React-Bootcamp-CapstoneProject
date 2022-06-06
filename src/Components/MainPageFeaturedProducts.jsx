import React from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { device } from "../utils/viewports";

const GridContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1.5rem;

  ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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
