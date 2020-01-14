import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "/Users/sarapartanen/my-plants/src/components/context.js";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5 ">
          <div className="container ">
            <Title name="Meet the " title="Plants"></Title>
            <div className="row ">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return (
                      <Product key={product.id} product={product}></Product>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
