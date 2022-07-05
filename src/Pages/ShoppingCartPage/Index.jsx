import React from "react";
import { useSelector} from "react-redux";
import { getProductsFromCart } from "redux/slices/cartSlice";
import { StyledTitle } from "Styles/GeneralStyles";
import {
  CartSectionContainer,
  CartTableContainer,
} from "Styles/ShoppingCartPage/Index";
import ProductCard from "./ProductCard";
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
    />
  ));
  return (
    <CartSectionContainer>
      <StyledTitle> Your cart </StyledTitle>
      <CartTableContainer>{productsCards}</CartTableContainer>
    </CartSectionContainer>
  );
}
