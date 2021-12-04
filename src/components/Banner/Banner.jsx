import React, {useEffect, useState} from 'react'
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
  const [isMobile, setIsMobile] = useState(false);

  const updateScreenSize = () => {
    if(window.innerWidth > 1024){
      setIsMobile(false)
    }else{
      setIsMobile(true)
    }
  }

  window.addEventListener('resize', updateScreenSize);

  useEffect(()=>{
    updateScreenSize()
  }, [])

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
      breakpoint: { max: 1024, min: 900 },
      items: 1,
      partialVisibilityGutter: 195
    },
    tab: {
      breakpoint: { max: 900, min: 768 },
      items: 1,
      partialVisibilityGutter: 145
    },
    small: {
      breakpoint: { max: 768, min: 479 },
      items: 1,
      partialVisibilityGutter: 105  
    },
    mobile: {
      breakpoint: { max: 480, min: 365 },
      items: 1,
      partialVisibilityGutter: 70
    },
    mini: {
      breakpoint: { max: 365, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
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
          {/* <div className="sub-category">
            <div className="col">
              <h4>FOOD CUPBOARD</h4>
              <ul>
                <li>Grains & rice</li>
                <li>Pasta</li>
                <li>Noodles</li>
                <li>Breakfast foods</li>
                <li>Herbs, Spices & Seasoning</li>
                <li>Flour & Meals</li>
                <li>Malt Drinks</li>
                <li>Coffee</li>
                <li>Water</li>
                <li>Cooking Oil</li>
                <li>juices</li>
                <li>Soft drinks</li>
                <li>canned & packaged foods</li>
                <li>Candy & Chocolate</li>
                <li>Syrups, Sugars & Sweeteners</li>
              </ul>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div> */}
        </div>
        <div className="banner__center">
          <Carousel
            partialVisible={true} 
            responsive={responsive} 
            swipeable={true} 
            autoPlay={true} 
            autoPlaySpeed={5000}
            infinite={true}
            showDots={true}
            dotListClass="custom-dot-list-style"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "tab", "small", "mobile", "mini"]}
            customDot={<CustomDot />}
            itemClass="banner__image"
          >
            <img src="/images/banner/ban1.gif" alt="" />
            <img src="/images/banner/ban2.jpg" alt="" />
            <img src="/images/banner/ban3.gif" alt="" />
            <img src="/images/banner/ban4.jpg" alt="" />
            <img src="/images/banner/ban5.jpg" alt="" />
            <img src="/images/banner/ban6.png" alt="" />
            {/* <div className="ime">knk</div>
            <div className="ime">asfasdf</div>
            <div className="ime">asdfasd</div>
            <div className="ime">asfasdf</div>
            <div className="ime">asdfasd</div> */}
          </Carousel>
        </div>
        <div className="banner__right">
          <div className="box">
            <img src="/images/banner/right1.gif" className="right-gif" alt=""/>
          </div>
          <div className="box">
            <img src="/images/banner/right2.gif" className="right-gif" alt=""/>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="small-card">
          <img src="/images/banner/icon1.png" alt="" />
          <span>Top Deals</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon2.png" alt="" />
          <span>Brand Day</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon3.png" alt="" />
          <span>Borrow Money</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon4.png" alt="" />
          <span>Jumia Food</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon5.png" alt="" />
          <span>Jumia Global</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon6.png" alt="" />
          <span>Flash Sales</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon7.png" alt="" />
          <span>Phones</span>
        </div>
        <div className="small-card">
          <img src="/images/banner/icon8.png" alt="" />
          <span>Jumia Prime</span>
        </div>
      </div>
    </>
  );
}

export default Banner
