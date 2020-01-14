import React, { Component } from "react";
import {
  plantList,
  detailProduct
} from "/Users/sarapartanen/my-plants/src/data.js";

const ProductContext = React.createContext();
//Two properties: Provider(provides all information) and consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setPlants();
  }
  setPlants = () => {
    let tempProducts = [];
    plantList.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("hello from handleDetail");
  };
  addToCart = () => {
    console.log("Hello from add to cart.id is ${id}");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
