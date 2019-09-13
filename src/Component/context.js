import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../data';
const ProductContext = React.createContext();
//Provider
//Cunsumer
class ProductProvider extends Component {
	state ={
		products:storeProducts,
		detailProduct:detailProduct
	}
	handleDetail =() => {
		console.log('helo from detail')
	}
	addTOCart =() => {
		console.log('helo from add to cart')
	}
	render(){
		return (
			<ProductContext.Provider value={{
			...this.state,
			handleDetail:this.handleDetail,
			addTOCart:this.addTOCart
			}}>
            { this.props.children}
			</ProductContext.Provider>
			);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider,ProductConsumer};