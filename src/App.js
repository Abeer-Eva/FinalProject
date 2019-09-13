import React, { Component } from 'react';
import { Switch,Router,Route } from 'react-router-dom';
//impot Logo from "./Logo.svg";
import"./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import Detalis from "./Component/Detalis";
import Default from "./Component/Default";
class App extends Component {  

 render() {
      return (
    

    <React.Fragment>
     <Navbar />
     <Switch>
     <Route path="/" Component={ProductList} />
     <Route path="/details" Component={Detalis} />
     <Route path="/cart" Component={Cart} />
     <Route Component={Default} />
     </Switch>
     <ProductList />
     <Detalis />
     <Cart />
     <Default />
    </React.Fragment>
   
      
     
      
    

      );
   }
}
export default App;
