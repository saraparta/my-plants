import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { taggedTemplateExpression } from "@babel/types";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  /* Allows us to simulate html tag, no need for div etc tags. */
  return (
    <React.Fragment>
      {/* Navbar outside of Switch, because it is displayed in all pages */}
      <Navbar></Navbar>
      {/*Setting up routes for each page */}
      <Switch>
        {/*All searches match '/' attribute. Specify with exact*/}
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
