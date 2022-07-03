import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "utils/assets/logo.png";
import {
  StyledHeader,
  StyledLogo,
  StyledCartIcon,
  StyledInput,
  HeaderButton,
  SearchContainer,
  LogoContainer,
} from "Styles/HeaderStyles";
export function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearch] = useState("");

  function handleInputSearch(event) {
    setSearch(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      ProductSearch();
    }
  }
  function ProductSearch() {
    navigate(`/search?q=${searchInput}`);
    setSearch("");
  }

  return (
    <StyledHeader>
      <LogoContainer>
        <Link to="/">
          <StyledLogo data-testid="header-logo" src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <SearchContainer>
        <StyledInput
          value={searchInput}
          onChange={handleInputSearch}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search products..."
        />
        <HeaderButton primary onClick={ProductSearch}>
          Search
        </HeaderButton>
      </SearchContainer>

      <StyledCartIcon onClick={() => console.log("Click en carrito")} />
    </StyledHeader>
  );
}
