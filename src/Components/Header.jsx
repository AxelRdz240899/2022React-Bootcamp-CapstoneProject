import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <StyledLogo data-testid="header-logo" src={logo} alt="logo" />
      </Link>
      <StyledInput type="text" placeholder="Search product..." />
      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
    </StyledHeader>
  );
}
