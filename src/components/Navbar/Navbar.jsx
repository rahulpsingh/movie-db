import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import Searchbar from "../Searchbar";

const NavbarWrapper = styled.nav`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 2vh;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const Navbar = ({ setSearchResults }) => {
  const handleClick = () => {};
  return (
    <NavbarWrapper>
      <Logo src={logo} alt="Timescale" onClick={handleClick} />
      <Searchbar setSearchResults={setSearchResults} />
    </NavbarWrapper>
  );
};

export default Navbar;
