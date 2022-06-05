import React from "react";
import styled from "styled-components";
import logo from "../utils/assets/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { device } from "../utils/viewports";

const StyledHeader = styled.header`
  border-bottom: 2px solid #158cd2;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyledLogo = styled.img`
  height: 60px;
`;

const StyledCartIcon = styled(MdShoppingCart)`
  font-size: 3rem;
  color: gray;
  cursor: pointer;
`;

const StyledInput = styled.input`
  height: 50%;
  border-radius: 8px;
  border: 2px solid #5e5e5e;
  font-size: 1.3rem;
  padding-left: 15px;

  ${device.mobile} {
    width: 45%;
    font-size: 0.8rem;
  }

  ${device.mobileL} {
    width: 65%;
  }

  ${device.tablet} {
    width: 55%;
    font-size: 1rem;
  }

  ${device.laptop} {
    width: 50%;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledInput type="text" placeholder="Search product..." />
      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
    </StyledHeader>
  );
}
