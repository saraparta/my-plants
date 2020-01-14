import React, { Component } from "react";
import { ProductConsumer } from "/Users/sarapartanen/my-plants/src/components/context.js";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end of title */}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid"></img>
                </div>
                {/* Product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-upeprcase text-muted mt-3 mb-2">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about plant:{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <Link to="/">
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "Already in Cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
              {/* End of product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}