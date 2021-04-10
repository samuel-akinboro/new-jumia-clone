import React, {useState, useEffect} from 'react'
import Advertisement from './Advertisement';
import './AllProducts.css'
import Card from './Card';
import {db} from '../Firebase'

function AllProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    db.collection('products').onSnapshot(snapshot => setProducts(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))))
  }, [])

  return (
    <div className="all-products">
      <div className="product-box">
        <h3>Top selling items</h3>
        <div className="product-list">
          <Card
            id="1"
            src="/images/deals/1.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="2"
            src="/images/deals/2.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="3"
            src="/images/deals/3.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="4"
            src="/images/deals/4.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="5"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="6"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
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
            id="7"
            src="/images/deals/1.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="8"
            src="/images/deals/2.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="9"
            src="/images/deals/3.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="10"
            src="/images/deals/4.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="11"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="12"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <h3>Featured Category</h3>
        <div className="product-list">
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
        <div className="product-list">
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
        <h3 className="yellow">Best Portable Speaker Sale of the Season</h3>
        <div className="product-list">
          <Card
            id="7"
            src="/images/deals/1.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="8"
            src="/images/deals/2.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="9"
            src="/images/deals/3.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="10"
            src="/images/deals/4.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="11"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="12"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad3.jpg" image2="images/ad/ad4.jpeg" />
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
            id="7"
            src="/images/deals/1.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="8"
            src="/images/deals/2.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="9"
            src="/images/deals/3.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="10"
            src="/images/deals/4.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="11"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="12"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad3.jpg" image2="images/ad/ad4.jpeg" />
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
            id="7"
            src="/images/deals/1.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="8"
            src="/images/deals/2.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="3500"
            number="1"
          />
          <Card
            id="9"
            src="/images/deals/3.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="200"
            number="1"
          />
          <Card
            id="10"
            src="/images/deals/4.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="11"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="2500"
            number="1"
          />
          <Card
            id="12"
            src="/images/deals/5.jpg"
            title="Yellow Gold plated Wedding Ring"
            price="8000"
            number="1"
          />
        </div>
      </div>

      <div className="product-box">
        <Advertisement image1="images/ad/ad3.jpg" image2="images/ad/ad4.jpeg" />
      </div>
    </div>
  );
}

export default AllProducts
