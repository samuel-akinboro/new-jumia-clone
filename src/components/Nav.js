import React from 'react'
import './Nav.css'
import { useStateValue } from '../StateProvider';
import {Link} from 'react-router-dom'
import { auth } from '../Firebase';


function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleLogOut = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="nav">
      <div className="desktop-nav">
        <div className="logo">
          <Link to="/">
            <img alt="jumia logo" src="images/logo/final-logo.png" />
          </Link>
        </div>
        <div className="search">
          <input
            type="search"
            placeholder="Search products, brand and categories"
          /> <button>search</button>
        </div>
        <div className="options">
          < Link to = {!user && "/login"}
          style = {
            {
              color: "#3C3C3C",
              textDecoration: "none"
            }
          } >
            <span onClick={handleLogOut}>
                { user ? `Hi, ${user?.email.slice(0, user.email.indexOf("@"))}` : 'Sign In'} <i className="icon-keyboard_arrow_down"></i>
            </span>
          </Link>
          <span>
            <i className="fal fa-question-circle"></i> Help <i className="icon-keyboard_arrow_down"></i>
          </span>
          <Link to="/cart" style={{ textDecoration: "none", color: "#3C3C3C" }}>
            <span>
              <i className="fal fa-shopping-cart"></i> Cart <span className="number">{basket.length}</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-nav__top">
          <div className="logo">
            <i className="icon-menu"></i>
            <Link to="/">
            <img alt="jumia logo" src="images/logo/final-logo.png" />
          </Link>
          </div>
          <div className="mobile-nav__icon">
            <i className="fal fa-question-circle"></i>
            <Link to="/cart" style={{ textDecoration: "none", color: "#3C3C3C" }}>
            <span>
              <i className="fal fa-shopping-cart"></i> <span className="number">{basket.length}</span>
            </span>
          </Link>
          </div>
        </div>
        <div className="search">
          <input
            type="search"
            placeholder="Search products, brand and categories"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav
