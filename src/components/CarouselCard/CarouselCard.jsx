import React from 'react'
import './CarouselCard.css'

function CarouselCard({id, imageUrl, title, price}) {
  return (
    <div>
      <div className="carousel-card" style={{transition: "0.3s"}}>
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>₦ {price}</p>
      </div>
      {/* <div className="number-of-items">
        <button><AddIcon /></button>
        <span>28</span>
        <button><RemoveIcon /></button>
      </div> */}
      {/* <button>add to cart</button> */}
    </div>
    </div>
  )
}

export default CarouselCard
