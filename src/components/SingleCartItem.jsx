import React, {useState, useEffect} from 'react'
import { useStateValue } from '../StateProvider';

function SingleCartItem({ id, title, image, price, number, priceDigit, numberAvailableInStock}) {
    // number of a single item you wanna purchase
    const [num, setNumber] = useState(number);
    const [{ basket }, dispatch] = useStateValue();
    const [numberOfOption, setNumberOfOption] = useState([]);
    let arr = [];

  useEffect(()=>{
    for(let i = 1; i <= Number(numberAvailableInStock); i++){
      arr.push(i)
    }
    setNumberOfOption([...arr]);
  }, [])

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
      <div className="product__info wide hide-desktop">
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
      <div className="product__quantity small hide-desktop">
        <select name="" id="" onChange={selectNumber} value={num}>
          {numberOfOption.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="product__unitPrice small hide-desktop">
        <p>₦ {price}</p>
      </div>
      <div className="product__subtotal small hide-desktop">{num * priceDigit}</div>

      <div className="mobile-cart">
        <div className="first-row">
          <img src={image} alt="" />
          <div className="info">
            <h4>{title}</h4>
            <p>₦ {price}</p>
          </div>
        </div>

        <div className="second-row">
          <div className="one">
            <i className="fal fa-heart"></i>
            <button onClick={removeItem}><i className="fas fa-trash"></i> REMOVE</button>
          </div>
          <div className="two">
            <select name="" id="" onChange={selectNumber} value={num}>
              {numberOfOption.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCartItem
