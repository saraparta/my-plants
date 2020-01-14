import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "/Users/sarapartanen/my-plants/src/components/context.js";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked me on the image container")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"></img>
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In cart
                </p>
              ) : (
                <ion-icon name="IoMdHeartEmpty">
                  <IoMdHeartEmpty></IoMdHeartEmpty>
                </ion-icon>
              )}
            </button>
            {/* Card footer below. align-self-center (two different size/front texts on same level), mb(margin botton)*/}
            <div className="card-footer mb-0 d-flex justify-content-between px-5">
              <p className="align-self-center mb-0">{title}</p>
              <h5 className="text-blue font-italic mx-auto mb-0">
                <span className="mr-4">$</span>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Use proptypes for  cathcing mistakes e.g. price is boolean value or inCart boolean value is Int
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    bottom: 0;
    transition: all 0.5s linear;
    transform: scale(1.21);
  }
  .cart-btn {
    bottom: 3.5rem;
    right: 3.5rem;
    display: none;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
    .align-self-center {
      transition: all 0.5s linear;
    }
  }
  .img-container {
    padding-bottom: 0 !important;
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    background: transparent;
    font-size: 3rem;
    border: none !important;
    border-radius: 0.5rem 0 0 0;
  }

  .img-container: hover .cart-btn {
    transform: translate(0, 0);
    display: inline-block;
  }
  .cart-btn:hover {
    cursor: pointer;
  }
`;
{
  /* -img-container: hover .cart-btn -> means that when hovering over image cart-btn should be shown*/
}
