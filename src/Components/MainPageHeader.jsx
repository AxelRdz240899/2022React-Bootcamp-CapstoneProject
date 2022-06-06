import React from "react";
import logo from "../utils/assets/logo.png";
import {
  StyledHeader,
  StyledLogo,
  StyledCartIcon,
  StyledInput,
} from "../Styles/HeaderStyles";

export function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledInput type="text" placeholder="Search product..." />
      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
    </StyledHeader>
  );
}
