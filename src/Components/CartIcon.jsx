import React from "react";
import { StyledCartIcon, Container, Badge } from "Styles/CartIconStyles";
import { useSelector } from "react-redux";
import { getProductsFromCart } from "redux/slices/cartSlice";
import { Link } from "react-router-dom";
export default function CartIcon() {
  const productsInCart = useSelector(getProductsFromCart).length;
  const empty = productsInCart === 0 ? true : false;
  return (
    <Link to={!empty ? "/cart" : "#"}>
      <Container>
        <StyledCartIcon />
        <Badge empty={empty}>{productsInCart}</Badge>
      </Container>
    </Link>
  );
}
