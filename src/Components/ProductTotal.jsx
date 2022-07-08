import React from "react";
import styled from "styled-components";

const CartTotalSpan = styled.span`
  color: #28a745;
  font-weight: 600;
`;

const Label = styled.label`
  margin: 15px 0;
  font-size: 2.2rem;
  text-align: center;
`;

export function TotalSection({ total }) {
  return (
    <Label>
      TOTAL:
      <CartTotalSpan>{" $" + total + " USD"}</CartTotalSpan>
    </Label>
  );
}
