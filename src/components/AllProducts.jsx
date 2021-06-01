import React, {useState, useEffect} from 'react'
import Advertisement from './Advertisement';
import './AllProducts.css'
import Card from './Card';
import {db} from '../Firebase'
// import data from '../Product-Data/products.json';
import Slider from "react-slick";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

function AllProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => setProducts(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))))
  }, [])

  const settings = {
    slidesToScroll:10,
    adaptiveHeight: true,
    slidesToShow: 6,
    infinite: false,
    nextArrow: <RightArrow  />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="all-products">

      {products.length > 0 && <div className="product-box">
        <h3 className="yellow">Best Portable Speaker Sale of the Season</h3>
        <div className="product-list">
          {products.map((product) => (
            <Card
              id= {product.id}
              src={product.src}
              title={product.title}
              price={product.price}
              number={product.number}
              textPrice={product.textPrice}
            />
          ))}
        </div>
      </div>}

      <div className="product-box">
        <h3>Top selling items</h3>
        <div className="product-list">
          <Card
            id="11"
            src="/images/deals/16.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="12"
            src="/images/deals/17.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="13"
            src="/images/deals/18.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="14"
            src="/images/deals/19.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="15"
            src="/images/deals/20.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="16"
            src="/images/deals/21.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
      <h3
          className="yellow"
          style={{ backgroundColor: "#FF0000", color: "#fff" }}
        >
          Best Portable Speaker Sale of the Season
        </h3>
        <Slider {...settings} className="product-list product-slider">
      <Card
            id="1"
            src="/images/deals/6.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="2"
            src="/images/deals/7.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="3"
            src="/images/deals/8.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="4"
            src="/images/deals/9.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="5"
            src="/images/deals/10.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="6"
            src="/images/deals/11.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="7"
            src="/images/deals/12.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="8"
            src="/images/deals/13.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="9"
            src="/images/deals/14.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="10"
            src="/images/deals/15.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
    </Slider>
      </div>

      <div className="product-box">
        <h3>Featured Category</h3>
        <div className="product-list category-row">
          <Card
            src="/images/collection/1.jpg"
            title="Televisions"
            categoryCard={true}
          />
          <Card
            src="/images/collection/2.jpg"
            title="IOS"
            categoryCard={true}
          />
          <Card
            src="/images/collection/3.jpg"
            title="Air pods"
            categoryCard={true}
          />
          <Card
            src="/images/collection/4.jpg"
            title="Laptops"
            categoryCard={true}
          />
          <Card
            src="/images/collection/5.jpg"
            title="Kitchen Bundles"
            categoryCard={true}
          />
          <Card
            src="/images/collection/6.jpg"
            title="Wigs"
            categoryCard={true}
          />
          <Card
            src="/images/collection/7.jpg"
            title="Video Games"
            categoryCard={true}
          />
          <Card
            src="/images/collection/8.jpg"
            title="₦5000 deals"
            categoryCard={true}
          />
          <Card
            src="/images/collection/9.jpg"
            title="Refrigirators"
            categoryCard={true}
          />
          <Card
            src="/images/collection/10.png"
            title="Men Shirts"
            categoryCard={true}
          />
          <Card
            src="/images/collection/11.png"
            title="Printers"
            categoryCard={true}
          />
          <Card
            src="/images/collection/12.png"
            title="Android"
            categoryCard={true}
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad3.jpg" image2="images/ad/ad4.jpeg" />
      </div>

      <div className="product-box">
        <h3>Featured Category</h3>
        <div className="product-list category-row">
          <Card
            src="/images/collection/1.jpg"
            title="Televisions"
            categoryCard={true}
          />
          <Card
            src="/images/collection/2.jpg"
            title="IOS"
            categoryCard={true}
          />
          <Card
            src="/images/collection/3.jpg"
            title="Air pods"
            categoryCard={true}
          />
          <Card
            src="/images/collection/4.jpg"
            title="Laptops"
            categoryCard={true}
          />
          <Card
            src="/images/collection/5.jpg"
            title="Kitchen Bundles"
            categoryCard={true}
          />
          <Card
            src="/images/collection/6.jpg"
            title="Wigs"
            categoryCard={true}
          />
          <Card
            src="/images/collection/7.jpg"
            title="Video Games"
            categoryCard={true}
          />
          <Card
            src="/images/collection/8.jpg"
            title="₦5000 deals"
            categoryCard={true}
          />
          <Card
            src="/images/collection/9.jpg"
            title="Refrigirators"
            categoryCard={true}
          />
          <Card
            src="/images/collection/10.png"
            title="Men Shirts"
            categoryCard={true}
          />
          <Card
            src="/images/collection/11.png"
            title="Printers"
            categoryCard={true}
          />
          <Card
            src="/images/collection/12.png"
            title="Android"
            categoryCard={true}
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad5.jpg" image2="images/ad/ad6.jpg" />
      </div>

      <div className="product-box">
        <h3 className="yellow">Best Portable Speaker Sale of the Season</h3>
        <div className="product-list">
          <Card
            id="22"
            src="/images/deals/22.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="23"
            src="/images/deals/23.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="24"
            src="/images/deals/24.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="25"
            src="/images/deals/25.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="26"
            src="/images/deals/26.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="27"
            src="/images/deals/27.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad7.jpeg" image2="images/ad/ad8.jpeg" />
      </div>
      <div className="product-box">
        <h3
          className="yellow"
          style={{ backgroundColor: "#0000FF", color: "#fff" }}
        >
          Best Portable Speaker Sale of the Season
        </h3>
        <div className="product-list">
          <Card
            id="28"
            src="/images/deals/28.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="29"
            src="/images/deals/29.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="30"
            src="/images/deals/30.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="31"
            src="/images/deals/31.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="32"
            src="/images/deals/32.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="33"
            src="/images/deals/33.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad9.jpg" image2="images/ad/ad10.jpg" />
      </div>
      <div className="product-box">
        <h3
          className="yellow"
          style={{ backgroundColor: "#FF0000", color: "#fff" }}
        >
          Best Portable Speaker Sale of the Season
        </h3>
        <div className="product-list">
          <Card
            id="34"
            src="/images/deals/34.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="35"
            src="/images/deals/35.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="36"
            src="/images/deals/36.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="37"
            src="/images/deals/37.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="38"
            src="/images/deals/38.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="39"
            src="/images/deals/39.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad11.jpg" image2="images/ad/ad12.jpg" />
      </div>
    </div>
  );
}

export default AllProducts
