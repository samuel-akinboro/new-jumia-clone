import React from 'react'
import './Card.css'
import { useStateValue } from '../StateProvider'

function Card({ id, src, title, price, priceDigit, numberAvailableInStock, categoryCard, number }) {
  
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
        priceDigit,
        numberAvailableInStock
      }
    })
    
  }

  // where to increase item in cart

  const removeItem = () => {
    basket.forEach((item, i) => {
      if (item.id === id) {
        basket.splice(i, 1);
        dispatch({
          type: "REMOVE_SINGLE_PRODUCT",
          items: [...basket]
        });
        }
      })
  }


  return (
    <div className="card" style={{width: "183px"}}>
      <img src={src} alt="" />
      <div className="card__info">
        <p>{title}</p>
        {price && <h5>₦ {price}</h5>}
        {!categoryCard && <button onClick={addToBasket}>add to basket</button>}
      </div>
    </div>
  );
}

export default Card
