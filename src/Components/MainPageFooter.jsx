import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 15vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export function Footer() {
  return (
    <StyledFooter>
      <h2>Ecommerce created during Wizeline’s Academy React Bootcamp</h2>
    </StyledFooter>
  );
}
