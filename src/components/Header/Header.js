import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
`;

const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${(props) =>
    props.$active &&
    `
    background: rgba(0,0,0,0.1);
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>部落格</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          <Nav $active={location.pathname === "/new-post"} to="/new-post">
            發布文章
          </Nav>
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        <Nav $active={location.pathname === "/login"} to="/login">
          登入
        </Nav>
      </NavbarList>
    </HeaderContainer>
  );
}
