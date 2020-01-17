import React, { Component } from "react";
import {
  plantList,
  detailProduct
} from "/Users/sarapartanen/my-plants/src/data.js";

const ProductContext = React.createContext();
//Two properties: Provider(provides all information) and consumer
//Properties below contain information/data that change when clicking items and adding to cart
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: plantList,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 10,
    cartTax: 20,
    cartTotal: 30
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
  //change value in actual state, ADD CART property above
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => console.log(this.state)
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  //function used in Product.js and in Details.js
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    console.log("this is the increment method");
  };
  decrement = id => {
    console.log("this is the decrement method");
  };
  removeItem = id => {
    console.log("remove item");
  };
  clearCart = () => {
    console.log("cart cleared");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
