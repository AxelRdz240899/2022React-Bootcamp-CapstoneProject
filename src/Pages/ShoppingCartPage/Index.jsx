import React from "react";
import { useSelector } from "react-redux";
import { getProductsFromCart } from "redux/slices/cartSlice";
import { StyledTitle } from "Styles/GeneralStyles";
import {
  CartSectionContainer,
  CartTableContainer,
  CartTotalContainer,
  CartTotalSpan,
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
  let total = 0;
  products.forEach((element) => {
    console.log(element.requested);
    total += element.requested * element.unitaryPrice;
  });
  return (
    <CartSectionContainer>
      <StyledTitle> Your cart </StyledTitle>
      <CartTableContainer>{productsCards}</CartTableContainer>
      <CartTotalContainer>
        TOTAL:
        <CartTotalSpan>{" $" + total + " USD"}</CartTotalSpan>
      </CartTotalContainer>
    </CartSectionContainer>
  );
}
