import React from 'react'
import './ProductCard.css'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function ProductCard({src, title, price, priceDigit}) {
  return (
    <div className="product-card">
      <div className="image">
        <img src="/images/deals/4.jpg" alt="" />
      </div>
      <div className="info">
        <h3>Nike Air Max 90 Flyease Men's Sneakers</h3>
        <p>₦ 7,500</p>
      </div>
      {/* <div className="number-of-items">
        <button><AddIcon /></button>
        <span>28</span>
        <button><RemoveIcon /></button>
      </div> */}
      {/* <button>add to cart</button> */}
    </div>
  )
}

export default ProductCard
