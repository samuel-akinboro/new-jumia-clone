import React, {useState, useEffect} from 'react'
import Advertisement from './Advertisement';
import './AllProducts.css'
import Card from './Card';
import CardsRow from './CardsRow/CardsRow'
import {db} from '../Firebase'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from  '../Product-Data/products.json'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button 
            onClick={() => onClick()} 
            style={{
              height: "40px",
              width: "40px",
              background: "rgba(0,0,0,0.5)",
              zIndex: "99", 
              position: "absolute", 
              top: "80px",
              right: "0",
              borderRadius: "50%",
              border: "none",
              justifyContent: 'center',
              alignItems: 'center',
              cursor: "pointer"
              }}
              className="custom-arrows">
           <ChevronRightIcon />
         </button>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button 
            onClick={() => onClick()} 
            style={{
              height: "40px",
              width: "40px",
              background: "rgba(0,0,0,0.5)",
              zIndex: 102, 
              position: 'absolute', 
              top: "80px",
              left: "0",
              borderRadius: "50%",
              border: "none",
              justifyContent: 'center',
              alignItems: 'center',
              cursor: "pointer"
              }}
              className="custom-arrows"
              >
           <ChevronLeftIcon />
         </button>;
};

function AllProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => setProducts(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))))
  }, []);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    less: {
      breakpoint: { max: 680, min: 479 },
      items: 3
    },
    small: {
      breakpoint: { max: 600, min: 479 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2
    }
  };


  return (
    <div className="all-products">
      <CardsRow title="Top selling items" color="rgb(254, 0, 0)" showMore={true} />

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
          {data.topSelling.map(item => 
          <Card
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            priceDigit={item.priceDigit}
            number={item.number}
            numberAvailableInStock={item.numberAvailableInStock}
          />)}
        </div>
      </div>

      <div className="product-box">
      <h3
          className="yellow"
          style={{ backgroundColor: "#FF0000", color: "#fff" }}
        >
          Latest Products with discounts
        </h3>
        <div style={{padding: "20px 0"}}>
        <Carousel 
          responsive={responsive} 
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          // customButtonGroup={<CustomButtonGroup />}
          // arrows={false}
        >
          {data.latestProducts.map(item => 
            <Card
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            priceDigit={item.priceDigit}
            number={item.number}
            numberAvailableInStock={item.numberAvailableInStock}
          />)}
        </Carousel>
        </div>
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
        <h3 className="yellow">Best Delicious Food Sale of the Season</h3>
        <div className="product-list">
        {data.bestFood.map(item => 
            <Card
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            priceDigit={item.priceDigit}
            number={item.number}
            numberAvailableInStock={item.numberAvailableInStock}
          />)}
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
          Best Must Have of the Season
        </h3>
        <div className="product-list">
        {data.mustHave.map(item => 
            <Card
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            priceDigit={item.priceDigit}
            number={item.number}
            numberAvailableInStock={item.numberAvailableInStock}
          />)}
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
          Best Fitness Gadgets of the Season
        </h3>
        <div className="product-list">
        {data.fitnessGadgets.map(item => 
            <Card
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            price={item.price}
            priceDigit={item.priceDigit}
            number={item.number}
            numberAvailableInStock={item.numberAvailableInStock}
          />)}
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad11.jpg" image2="images/ad/ad12.jpg" />
      </div>
    </div>
  );
}

export default AllProducts
