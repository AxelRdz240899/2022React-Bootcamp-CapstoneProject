import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  getProductsFromCart,
  updateProductFromCart,
} from "redux/slices/cartSlice";
import swal from "sweetalert2";

export default function ProductInformationCard({ product }) {
  let productIndex = useSelector(getProductsFromCart).findIndex(
    (element) => element.id === product?.id
  );
  const dispatch = useDispatch();
  const [productQuantityInput, setProductQuantityInput] = useState(
    product?.data.stock === 0 ? 0 : 1
  );

  const tags = product?.tags?.map((element) => {
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

  function handleProductInput(event) {
    let value = event.target.value;
    if (value < 0) {
      value = 0;
    }
    setProductQuantityInput(value);
  }

  function AddToCart() {
    // If there is not enough stock
    if (productQuantityInput > product?.data.stock) {
      swal.fire({
        icon: "error",
        title: `Oops... The requested amount can´t be more than ${product.data.stock} pieces`,
      });
      return;
    }
    // Add new product to cart
    if (productIndex === -1) {
      dispatch(
        addProductToCart({
          id: product.id,
          requested: Number(productQuantityInput),
          image: product.data.mainimage.url,
          name: product.data.name,
          unitaryPrice: product.data.price,
          stock: product.data.stock,
        })
      );
      swal.fire({
        icon: "success",
        title: "The product has been added to your cart",
      });
    }
    // Update product from cart
    else {
      dispatch(
        updateProductFromCart({
          index: productIndex,
          requested: Number(productQuantityInput),
        })
      );
      swal.fire({
        icon: "info",
        title: "The product has been updated in your cart",
      });
    }
  }

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
        <Stock empty={product?.data.stock === 0}>
          {product?.data.stock + " LEFT"}
        </Stock>

        {/* Precio */}
        <Price> For Only </Price>
        <Price>{"$" + product?.data.price + " USD"}</Price>

        <QuantityContainer>
          <SectionTitle>Quantity: </SectionTitle>
          {/* Input Numerico */}
          <QuantityInput
            min={1}
            value={productQuantityInput}
            onChange={handleProductInput}
            disabled={product?.data.stock === 0}
            type="number"
          />
        </QuantityContainer>
        <br />
        {/* Boton carrito */}
        <AddToCartButton
          disabled={product?.data.stock === 0}
          primary
          onClick={AddToCart}
        >
          Add to Cart
        </AddToCartButton>

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
