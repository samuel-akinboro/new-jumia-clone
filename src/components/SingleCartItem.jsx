import React, {useState} from 'react'
import { useStateValue } from '../StateProvider';

function SingleCartItem({ id, title, image, price, number}) {
    // number of a single item you wanna purchase
    const [num, setNumber] = useState(number);
     const [{ basket }, dispatch] = useStateValue();

  // this gets the number of a single product you want to purchase
    const selectNumber = (e) => {
        setNumber(e.target.value)
        let finalItem;
        basket.forEach((item, i) => {
            let index;
            if (item.id === id) {
                index = i;
                finalItem = [item, index];
            }
        });
        
      basket[finalItem[1]] = { ...finalItem[0], number: e.target.value };
        dispatch({
          type: "NUMBER_OF_SINGLE_PRODUCT",
          items: [...basket]
        });
  }
  
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
    <div className="single-product">
      <div className="product__info wide">
        <img src={image} alt="" />
        <div className="product__infoText">
          <p>Seller: Jumia</p>
          <h4>{title}</h4>
          <div className="product__buttons">
            <div className="single-button">
              <i className="fal fa-heart"></i>
              <button>MOVE TO SAVED ITEMS</button>
            </div>
            <div className="single-button">
              <i className="fas fa-trash"></i>
              <button onClick={removeItem}>REMOVE FROM BASKET</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product__quantity small">
        <select name="" id="" onChange={selectNumber} value={num}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="product__unitPrice small">
        <p>₦ {price}</p>
      </div>
      <div className="product__subtotal small">{num * price}</div>
    </div>
  );
}

export default SingleCartItem
