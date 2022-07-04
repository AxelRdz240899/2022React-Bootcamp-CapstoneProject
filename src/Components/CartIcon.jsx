import React from "react";
import { StyledCartIcon, Container, Badge } from "Styles/CartIconStyles";
import { useSelector } from "react-redux";
import { getProductsFromCart } from "redux/slices/cartSlice";

export default function CartIcon() {
  const productsInCart = useSelector(getProductsFromCart).length;
  return (
    <Container>
      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
      <Badge empty={productsInCart === 0}>{productsInCart}</Badge>
    </Container>
  );
}
