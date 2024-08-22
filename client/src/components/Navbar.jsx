
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  height: 85px !important;
  ${mobile({ height: "50px" })}
  width: 100vw;
  height: 100%;
  background: 
    url("https://i.ibb.co/JF8HLH0/Vector.png")
      center;
  background-color: #2148C0;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6531862745098039) 0%, rgba(0,0,0,0.65) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  margin-bottom: -30px;
  padding-right:45px;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItm = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LogoImg = styled.img`
  width: 100px;
`;

const Navbar = () => {


  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: 'none' }} to="/">
            <LogoImg src='https://as2.ftcdn.net/v2/jpg/03/93/91/25/1000_F_393912563_doSXIFG62VoKoVOwOkdsyqCA00LU4uWY.jpg' />
          </Link>
        </Left>
        <Center>
          <Link style={{ textDecoration: 'none' }} to="/">
            <MenuItm>HOME</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/products">
            <MenuItm>PAGES</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/categories">
            <MenuItm>TRACKING</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/contact">
            <MenuItm>SERVICES</MenuItm>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/about">
            <MenuItm>BLOG</MenuItm>
          </Link>
        </Center><>
              <Link style={{ textDecoration: 'none', marginLeft: '15px'}} to="/register">
                <MenuItm>GET A QUOTE</MenuItm>
              </Link>
              <Link style={{ textDecoration: 'none', marginLeft: '15px' }} to="/login">
                <MenuItm>SIGN IN</MenuItm>
              </Link>
            </>
        <Right>

        </Right>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar