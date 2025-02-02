import React, { useEffect, useState } from "react";
import { ProductCard } from "Components/ProductCard";
import {
  GridContainer,
  FeaturedProductsContainer,
} from "Styles/FeaturedProductsStyles";
import { StyledTitle } from "Styles/GeneralStyles";
import { useWizelineGetEndpoints } from "utils/hooks/useWizelineGetEndpoints";
import { getFeaturedProductsUrl } from "utils/constants";
import LoadingSpinner from "Components/LoadingSpinner";

export function FeaturedProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  let { data, loadingResponse } = useWizelineGetEndpoints(
    getFeaturedProductsUrl
  );
  useEffect(() => {
    if (!data || loadingResponse) {
      return () => {};
    } else {
      setLoading(false);
      setProducts(data.results.splice(0, 16));
    }
  }, [data, loadingResponse]);

  // Lista de productos destacados
  const productCardList = products.map((element) => (
    <ProductCard
      selected={false}
      key={element.data.sku}
      name={element.data.name}
      categoryId={element.data.category.id}
      categoryName={element.data.category.slug}
      price={element.data.price}
      imageUrl={element.data.mainimage.url}
      productId={element.id}
    />
  ));

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <FeaturedProductsContainer>
          <StyledTitle> Featured Products </StyledTitle>
          <GridContainer>{productCardList}</GridContainer>
        </FeaturedProductsContainer>
      )}
    </>
  );
}
