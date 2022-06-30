import LoadingSpinner from "Components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInformation } from "utils/hooks/useProductInformation";
import ProductGallery from "./ProductGallery";
import {
  MainContainer,
  CarouselContainer,
  ProductInformationContainer,
  InformationCard,
  ProductName,
  ProductDescription,
  SectionTitle,
  ProductSKU,
  TagsContainer,
  Tag,
  CategoryContainer,
  AddToCartButton,
  Price,
  Stock,
  SpecTitle,
  QuantityContainer,
  QuantityInput,
  Separator,
} from "Styles/ProductPage/Layout";
import { CategoryBadge } from "Components/CategoryBadge";

export default function ProductPage() {
  let { productId } = useParams();
  const [product, setProduct] = useState({
    tags: [""],
    data: {
      name: "",
      price: 0,
      stock: 0,
      sku: "",
      category: {
        slug: "",
      },
      description: [{ text: "" }],
      images: [
        {
          image: {
            url: "",
          },
        },
      ],
    },
  });
  const { data, isLoading } = useProductInformation(productId);

  useEffect(() => {
    if (!data || isLoading) {
      return () => {};
    } else {
      setProduct(data.results[0]);
    }
  }, [data, isLoading]);

  const tags = product?.tags?.map((element) => {
    return (
      <>
        <Tag key={element}>{element}</Tag>
      </>
    );
  });

  const specs = product?.data?.specs?.map((element) => {
    return (
      <li key={element.spec_name}>
        {<SpecTitle>{element.spec_name + ":  "}</SpecTitle>}
        {element.spec_value}
      </li>
    );
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <MainContainer>
          <CarouselContainer>
            <ProductGallery product={product} />
          </CarouselContainer>
          <ProductInformationContainer>
            <InformationCard>
              {/* Nombre del producto */}
              <ProductName>{product?.data.name}</ProductName>
              <br />

              {/* Tags del producto */}
              <TagsContainer>{tags}</TagsContainer>

              {/* Categoria */}
              <CategoryContainer>
                <CategoryBadge
                  categoryName={product?.data.category.slug}
                  categoryId={product?.data.category.id}
                />
              </CategoryContainer>

              <Separator />
              {/* Descripcion del producto */}
              <SectionTitle align={"start"}> Description</SectionTitle>
              <ProductDescription>
                {product?.data.description[0].text}
              </ProductDescription>
              <br />

              {/* Specs */}
              <SectionTitle align={"start"}>Specs</SectionTitle>
              <ul>{specs}</ul>
              <Separator />
              {/* Stock */}
              <Stock>{product?.data.stock + " LEFT!"}</Stock>

              {/* Precio */}
              <Price> For Only </Price>
              <Price>{"$" + product?.data.price + " USD"}</Price>

              <QuantityContainer>
                <SectionTitle>Quantity: </SectionTitle>
                {/* Input Numerico */}
                <QuantityInput type="number" />
              </QuantityContainer>
              <br />
              {/* Boton carrito */}
              <AddToCartButton primary> Add to Cart</AddToCartButton>

              {/* SKU */}
              <SectionTitle align={"center"}> SKU </SectionTitle>
              <ProductSKU>{product?.data.sku}</ProductSKU>
            </InformationCard>
          </ProductInformationContainer>
        </MainContainer>
      )}
    </>
  );
}
