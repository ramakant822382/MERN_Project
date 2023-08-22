import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../action/myOrderAction";


const OrderDetails = () => {

  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(param));
  }, [dispatch, param]);
  return  <>
  <div className="container">
    <div className="order-header">
      <h1>Order Details</h1>
    </div>
    <div className="order-details">
      <div className="item">
        <img src="product1.jpg" alt="Product 1" />
        <div className="item-info">
          <h2>Product 1</h2>
          <p>Quantity: 2</p>
          <p>Price: $25.00</p>
        </div>
      </div>
      <div className="item">
        <img src="product2.jpg" alt="Product 2" />
        <div className="item-info">
          <h2>Product 2</h2>
          <p>Quantity: 1</p>
          <p>Price: $30.00</p>
        </div>
      </div>
    </div>
  </div>;
</>

};

export default OrderDetails;
