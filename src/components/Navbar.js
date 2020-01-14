import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "/Users/sarapartanen/my-plants/src/a-vector-circle.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    {
      /* sm specifies the attributes for small screen */
    }
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        <Link to="/">
          <img
            src={logo}
            width="40"
            height="40"
            alt="store"
            className="navbar-brand"
          ></img>
        </Link>
        <ul className="navbar-nav.align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mx">
              <i className="fas fa-cart-plus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
