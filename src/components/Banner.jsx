import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner__left">
          <p>
            <i className="fal fa-apple-alt"></i> <span>Supermarket</span>
          </p>
          <p>
            <i className="fal fa-heart"></i> <span>Health & Beauty</span>
          </p>
          <p>
            <i className="fal fa-home-alt"></i> <span>Home & Office</span>
          </p>
          <p>
            <i className="fal fa-mobile-android"></i>{" "}
            <span>Phones & Tablets</span>
          </p>
          <p>
            <i className="fal fa-desktop-alt"></i> <span>Computing</span>
          </p>
          <p>
            <i className="fal fa-tv-retro"></i> <span>Electronics</span>
          </p>
          <p>
            <i className="fal fa-tshirt"></i> <span>Fashion</span>
          </p>
          <p>
            <i className="fal fa-baby-carriage"></i> <span>Baby Products</span>
          </p>
          <p>
            <i className="fal fa-gamepad"></i> <span>Gaming</span>
          </p>
          <p>
            <i className="fal fa-dumbbell"></i> <span>Sporting Goods</span>
          </p>
          <p>
            <i className="fal fa-car"></i> <span>Automobile</span>
          </p>
          <p>
            <i className="fas fa-apple-alt"></i> <span>Other Categories</span>
          </p>
        </div>
        <div className="banner__center">
          <img src="/images/banner/gif1.gif" alt="" />
        </div>
        <div className="banner__right">
          <div className="box">
            <div className="info">
              <img src="/images/jumia-icon/help.png" alt="" />
              <div className="details">
                <h4>HELP CENTER</h4>
                <p>quick refund</p>
              </div>
            </div>
            <div className="info">
              <img src="/images/jumia-icon/refunds.png" alt="" />
              <div className="details">
                <h4>HELP CENTER</h4>
                <p>quick refund</p>
              </div>
            </div>
            <div className="info">
              <img src="/images/jumia-icon/sell.png" alt=""/>
                  <div className="details">
                    <h4>HELP CENTER</h4>
                    <p>quick refund</p>
                  </div>
            </div>
          </div>
          <div className="box">
            <img src="/images/banner/right.gif" className="right-gif" alt=""/>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="small-card">
          <img src="/images/banner/holiday.jpg" alt="" />
          <span>Holiday Sale</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/jumia-food.png" alt="" />
          <span>Jumia Food</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon-red.png" alt="" />
          <span>Official Store</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/jumiaGlobal.png" alt="" />
          <span>Jumia Global</span>
        </div>
      </div>
    </>
  );
}

export default Banner
