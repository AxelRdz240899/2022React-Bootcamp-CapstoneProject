import React from "react";
import styled from "styled-components";
import { device } from "../utils/viewports";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const StyledProductImage = styled.img`
  height: auto;
  ${device.mobile} {
    width: 90%;
  }

  ${device.tablet} {
    width: 80%;
  }

  ${device.laptop} {
    width: 60%;
  }

  ${device.desktop} {
    width: 55%;
  }
`;

export function ProductCard({ name, category, price, imageUrl, description }) {
  return (
    <StyledCard>
      <StyledProductImage src={imageUrl} alt={name} />
      <p> {name}</p>
      <p> ${price}</p>
    </StyledCard>
  );
}
