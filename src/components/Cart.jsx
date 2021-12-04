import React from "react";
import "./Cart.css";
import {Link} from 'react-router-dom'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import SingleCartItem from "./SingleCartItem/SingleCartItem";
import Footer from "./ConstantComponent/Footer/Footer";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className="cart">
        <h1>
          Cart ({basket.length} {basket.length > 1 ? "items" : "item"})
        </h1>
        {basket.length > 0 && <div className="item-box">
          <div className="headings hide-desktop">
            <h4 className="wide">ITEM</h4>
            <h4 className="small">QUANTITY</h4>
            <h4 className="small">UNIT PRICE</h4>
            <h4 className="small">SUBTOTAL</h4>
          </div>
          <div className="all-items">
            {basket.map(item => <SingleCartItem {...item} key={item.id} />)}
          </div>
        </div>}
        {basket.length > 0 && <div className="total-box">
          <div className="mini-box">
            <div className="total">
              <h5>Total: </h5>
              <h3>₦ {getBasketTotal(basket)}</h3>
            </div>
            <p>Delivery fee not included yet</p>
          </div>
        </div>}
        {basket.length === 0 && <div className="empty-cart">
          <div className="empty-cart-container">
            <img src="/images/assets/empty-cart.png" alt="" />
            <h2>Your cart is empty!</h2>
            <p>Browse our categories and discover our best deals!</p>
            <Link to="/">START SHOPPING</Link>
          </div>
        </div>}
      </div>

      {basket.length > 0 && <div className="checkout-buttons">
        <div className="mini-box">
          <Link to="/">
            <button className="orange">CONTINUE SHOPPING</button>
          </Link>
          <button className="white">PROCEED TO CHECKOUT</button>
        </div>
      </div>}
      <Footer />
    </>
  );
}

export default Cart;
