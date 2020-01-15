import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "/Users/sarapartanen/my-plants/src/components/context.js";
import { ButtonContainer } from "/Users/sarapartanen/my-plants/src/components/Button.js";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-md-6 col-lg-4 text-center text-capitalize p-3"
                    >
                      <h5>item added to cart</h5>
                      {/* className="img-fluid" ensures that picture is not bigger than container*/}
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5 className="p-2">{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Back to plants
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
