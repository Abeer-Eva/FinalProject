import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import logo from "./lex-clothes-logo.png";
import cart from "./iconfinder_shopping-cart_216477 (1).png";
import styled from 'styled-components';
import { ButtonContainer }from "./Button";
export default class Navbar extends Component {
	render() {
		return (
			
			<NavWrapper className=" navbar navbar-expand-md bg-danger navbar-dark px-lg-10">
			

<Link to='/'>
<img src={logo} alt="kläd butik" className="navbar-brand"/>
 </Link>
 
 <ul className="navbar-nav algin-items-center">
 <li className="nav-item ml-5">
 <Link to="/" className="nav-link">
 products
 </Link>
 </li>
 </ul>
 <Link to="/cart" className="ml-auto">
 <ButtonContainer>
 <span>
 <img src={cart} alt="kläd butik" className="navbar-brand"/> 
 <i className="fas fa-cart-plus" />
 </span>
 My cart
 </ ButtonContainer>
 </Link>
			</NavWrapper>
			);
	}
}
const NavWrapper = styled.nav`
background:var(--mainRed);
.nav-link{
	color:var(--mainWhite)!important;
	font-size:1.3rem;
	text-transform:capitalize !important;

}
`