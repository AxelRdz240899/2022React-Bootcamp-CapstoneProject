import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsFromCart } from "redux/slices/cartSlice";
import { StyledTitle } from "Styles/GeneralStyles";
import { Button } from "Styles/Button";
import {
  CartSectionContainer,
  CartTableContainer,
} from "Styles/ShoppingCartPage/Index";
import ProductCard from "./ProductCard";
import { TotalSection } from "Components/ProductTotal";
export default function ShoppingCartPage() {
  let products = useSelector(getProductsFromCart);
  let productsCards = products.map((element) => (
    <ProductCard
      key={element.id}
      productId={element.id}
      name={element.name}
      price={element.unitaryPrice}
      image={element.image}
      quantity={element.requested}
      stock={element.stock}
    />
  ));
  let total = 0;
  products.forEach((element) => {
    total += element.requested * element.unitaryPrice;
  });
  return (
    <CartSectionContainer>
      <StyledTitle> Your cart </StyledTitle>
      <CartTableContainer>{productsCards}</CartTableContainer>

      <TotalSection total={total} />
      <Link to={products.length !== 0 ? "/checkout" : "#"}>
        <Button primary> Proceed to checkout </Button>
      </Link>
    </CartSectionContainer>
  );
}
