import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "7rem" }}
          className="img-fluid"
          alt="product"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      {/* Start of button columns*/}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black " onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* End of button columns*/}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <span className="btn btn-black  mx-1" onClick={() => removeItem(id)}>
          X
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 p-1">
        <span className="d-lg-none"></span>
        <strong>item total : {total} $</strong>
      </div>
    </div>
  );
}
