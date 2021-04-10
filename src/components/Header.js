import React from "react";
import "./Header.css";
import Nav from "./Nav";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="advert">
        <div className="header__topAD">
          {/* <h1>Due to heavy traffic 🚦 in Lagos, delivery might be delayed.</h1> */}
          <img src="/images/banner/ad.gif" alt=""/>
        </div>
        <div className="header__sell">
          <div className="header__sellLink">
            <Link to="sell-product">
              <i className="icon-stars"></i> <span>sell on jumia</span>
            </Link>
          </div>
          <div className="header__sellLink">
            <img alt="jumia logo" src="images/logo/logo1.png" />
            <img alt="jumia logo" src="images/logo/logo1.png" />
            <img alt="jumia logo" src="images/logo/logo1.png" />
          </div>
          <div className="header__sellLink"></div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
