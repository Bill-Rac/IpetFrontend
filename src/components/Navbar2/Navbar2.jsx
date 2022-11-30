import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <Nav>
      <NavLink to="/canines">CANINES</NavLink>
      <NavLink to="/felines">FELINES</NavLink>
      <NavLink to="/rodents">RODENTS</NavLink>
      <NavLink to="/repitles">REPTILES</NavLink>
      <NavLink to="/birds">BIRDS</NavLink>
      <NavLink to="/fishes">FISHES</NavLink>
    </Nav>
  );
}

export default Navbar2;

const Nav = styled.nav`
  background: #7052ff;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 400;
  border-bottom: 1px solid white;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 30px;
  line-height: 50px;
  margin-left: 3rem;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
