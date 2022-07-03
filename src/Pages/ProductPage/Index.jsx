import LoadingSpinner from "Components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInformation } from "utils/hooks/useProductInformation";
import ProductGallery from "./ProductGallery";
import { MainContainer, CarouselContainer } from "Styles/ProductPage/Layout";
import ProductInformationCard from "./ProductInformationCard";
export default function ProductPage() {
  const [loading, setLoading] = useState(true);

  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const { data, isLoading } = useProductInformation(productId);

  useEffect(() => {
    if (!data || isLoading) {
      return () => {};
    } else {
      setLoading(false);
      setProduct(data.results[0]);
    }
  }, [data, isLoading]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <MainContainer>
          <CarouselContainer>
            <ProductGallery product={product} />
          </CarouselContainer>
          <ProductInformationCard product={product} />
        </MainContainer>
      )}
    </>
  );
}
