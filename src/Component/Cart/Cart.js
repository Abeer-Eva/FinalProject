import React, { Component } from 'react'
import Title from '../Title';
import Cartcolumns from "./Cartcolumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import {ProductConsumer} from "./../context";
export default class Cart extends Component {
	render() {
		return (
			<section> 
			<ProductConsumer>
			{value => {
				const {cart} = value;
			if(cart.length>0){
					return(
						<React.Fragment>
			<Title name="Your" title="cart"/>
			<Cartcolumns />
			</React.Fragment>
			);
		}
		else {
			return <EmptyCart /> ;
		}
	}}
			</ProductConsumer>
			
			</section>
			);
	}
}