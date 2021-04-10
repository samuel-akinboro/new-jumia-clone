import React, { useState } from 'react'
import './Card.css'
import { useStateValue } from '../StateProvider'

function Card({ id, src, title, price, categoryCard, number, textPrice }) {
  
  const [{ basket }, dispatch] = useStateValue();
  // check if the item already exists 
  const addToBasket = () => {
    // dispatch the item into the data layer
    const containedItem = basket.filter(item => item.id === id);
    !!containedItem[0] ? alert("item exist") : dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: src,
        price: price,
        number: number,
        textPrice: textPrice
      }
    })
    
  }

  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <p>{title}</p>
        {price && <h5>₦ {textPrice? textPrice : price}</h5>}
        {!categoryCard && <button onClick={addToBasket}>add to basket</button>}
      </div>
    </div>
  );
}

export default Card
