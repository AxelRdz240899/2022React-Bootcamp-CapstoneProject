import React from "react";
import logo from "utils/assets/logo.png";
import {
  StyledHeader,
  StyledLogo,
  StyledCartIcon,
  StyledInput,
} from "Styles/HeaderStyles";

export function Header({ logoClick }) {
  return (
    <StyledHeader>
      <StyledLogo
        data-testid="header-logo"
        src={logo}
        alt="logo"
        onClick={logoClick}
      />
      <StyledInput type="text" placeholder="Search product..." />
      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
    </StyledHeader>
  );
}
