import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
//impot Logo from "./Logo.svg";
import"./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart/Cart";
import Detalis from "./Component/Details";
import Default from "./Component/Default";
import Menu from './Component/Menu';
import Modal from './Component/Modal';

class App extends Component {  

 render() {
      return (
    

    <React.Fragment>
     <Navbar />
     <Menu />
     <Switch>
     <Route 
     exact path="/" 
     Component={ProductList}
      />
     <Route path="/details" component={Detalis} />
     <Route path="/cart" component={Cart} />
     <Route component={Default} />
     </Switch>
     
     <ProductList />
     <Modal />
     <Detalis />
     <Cart />
     <Default />
    </React.Fragment>
   
      
     
      
    

      );
   }
}
export default App;
