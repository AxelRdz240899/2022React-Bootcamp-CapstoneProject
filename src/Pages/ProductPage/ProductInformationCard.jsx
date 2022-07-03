import React from "react";
import PropTypes from "prop-types";
import {
  ProductInformationContainer,
  InformationCard,
  ProductName,
  ProductDescription,
  SectionTitle,
  ProductSKU,
  TagsContainer,
  AddToCartButton,
  Tag,
  CategoryContainer,
  Price,
  Stock,
  SpecTitle,
  QuantityContainer,
  QuantityInput,
  Separator,
} from "Styles/ProductPage/ProductInformationCard";

import { CategoryBadge } from "Components/CategoryBadge";

export default function ProductInformationCard({ product }) {
  const tags = product?.tags?.map((element, index) => {
    return <Tag key={element}>{element}</Tag>;
  });

  const specs = product?.data?.specs.map((element) => {
    return (
      <li key={element.spec_name}>
        {<SpecTitle>{element.spec_name + ":  "}</SpecTitle>}
        {element.spec_value}
      </li>
    );
  });

  return (
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
  );
}

ProductInformationCard.propTypes = {
  product: PropTypes.object.isRequired,
};
