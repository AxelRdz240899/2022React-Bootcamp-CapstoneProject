import React from "react";
import {
  StyledProductCard,
  NameLabel,
  NumberLabel,
  SubTotalLabel,
} from "Styles/CheckoutPage/ProductRow";

export default function ProductRow({ name, number, price }) {
  return (
    <StyledProductCard>
      <NameLabel>{name}</NameLabel>
      <NumberLabel>{"QTY: " + number}</NumberLabel>
      <SubTotalLabel>{"Subtotal: $" + price * number + " USD"}</SubTotalLabel>
    </StyledProductCard>
  );
}
