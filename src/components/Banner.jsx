import React from 'react'
import './Banner.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// custom slider dots
const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = ["", "", "", "", "", ""];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? "active" : "inactive"}
      style={{
        width: "10px", 
        height: "10px", 
        border: "none", 
        marginRight: "5px", 
        borderRadius: "50%",
        cursor: "pointer"
      }}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

function Banner() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    small: {
      breakpoint: { max: 600, min: 479 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };

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
          <Carousel 
            responsive={responsive} 
            swipeable={true} 
            autoPlay={true} 
            autoPlaySpeed={5000}
            infinite={true}
            showDots={true}
            dotListClass="custom-dot-list-style"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            customDot={<CustomDot />}
          >
            <img src="/images/banner/ban3.gif" alt="" />
            <img src="/images/banner/ban5.jpg" alt="" />
            <img src="/images/banner/ban6.jpeg" alt="" />
            <img src="/images/banner/ban4.png" alt="" />
            <img src="/images/banner/ban2.jpg" alt="" />
            <img src="/images/banner/ban1.jpg" alt="" />
          </Carousel>
        </div>
        <div className="banner__right">
          <div className="box">
            {/* <div className="info">
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
            </div> */}
            <img src="/images/banner/right1.gif" className="right-gif" alt=""/>
          </div>
          <div className="box">
            <img src="/images/banner/right2.gif" className="right-gif" alt=""/>
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
