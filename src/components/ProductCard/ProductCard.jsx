import React from 'react'
import './ProductCard.css'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function ProductCard({imageUrl, title, price, priceDigit, id}) {
  return (
    <div className="product-card">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>₦{price}</p>
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
