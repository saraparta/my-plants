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
  //Utility method that gets the item
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  // Create temporary productory
  // Get item index with getItem method
  // Change items properties -> in cart value to true and count +=1
  addToCart = id => {
    let tempProducts = [...this.state];
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
