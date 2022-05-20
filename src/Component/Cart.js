import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Products";

const Cart = () => {

    const state = useSelector((state) = state.addItem)
    const dispatch = useDispatch()
  const cartItems = (cartItems) => {
      return ( <div className="container">
      <div className="row">
          <div className="col-md-4">
              <img src ={product.image} alt = {product.title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
              <h3>{product.tile}</h3>
              <p className="lead fw-bold">
                  {product.qty} X ${product.price} = ${product.qty * product.price}
              </p>
              <button className="btn btn-outline-dark me-4" onClick={()=> handleButton(product)}>
                  <i className="fa fa-minus"></i>

              </button>
              <button className="btn btn-outline-dark me-4" onClick={()=> handleButton(product)}>
                  <i className="fa fa-plus"></i>

              </button>
          </div>
      </div>
      )}


  </div>;
};

export default Cart;
