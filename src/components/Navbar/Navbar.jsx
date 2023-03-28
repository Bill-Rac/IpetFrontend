import React from "react";
import { BsSearch, BsPersonCircle, BsCart3 } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo>
          <Link to="/">
            <img
              src="/src/assets/My project-1.png"
              width="130px"
              height="130px"
            />
          </Link>
        </Logo>

        <Search>
          <SearchWrap>
            <Input type="text" placeholder=" SEARCH FOR PRODUCTS..." />
            <BsSearch />
          </SearchWrap>
        </Search>

        <ButtonsContainer>
          <CarContainer>
            <NavBtnLink to="/car">
              <BsCart3 />
            </NavBtnLink>
          </CarContainer>

          <ButtonContainer>
            <NavBtnLink to="/profile">
              <BsPersonCircle />
            </NavBtnLink>
          </ButtonContainer>
        </ButtonsContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #7052ff;
`;

const NavbarWrap = styled.div`
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding: 25px;
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Search = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 0;
  }
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 2.4rem;
  position: relative;
  box-sizing: border-box;
  background-color: #fefefe;
  border-radius: 5px;
`;

const Input = styled.input`
  color: #000;
  width: 90%;
  margin: 0.6em 0.2em;
  text-align: center;
  border: transparent;
  font-size: 15px;
  outline: none;

  &::placeholder {
    color: #d1d8de;
    font-size: 1rem;
  }
`;

const NavBtnLink = styled(Link)`
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  background: #d06aff;
  background: -webkit-linear-gradient(317deg, #d06aff 0%, #7052ff 100%);
  background: linear-gradient(317deg, #d06aff 0%, #7052ff 100%);
  border-radius: 15px;
  text-decoration: none;
  font-size: 1.2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const CarContainer = styled.div`
  color: #fff;
  height: 2.4rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const ButtonContainer = styled.div`
  color: #fff;
  width: 10%;
  height: 2.4rem;
  display: flex;
  align-items: center;
  margin-right: 5rem;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #d1d8de;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled(Input)`
  padding-right: 2.8rem;
`;
