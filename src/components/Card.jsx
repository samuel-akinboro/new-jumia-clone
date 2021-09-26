import React, {useState, useEffect} from 'react'
import './Card.css'
import { useStateValue } from '../StateProvider'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function Card({ id, src, title, price, priceDigit, numberAvailableInStock, categoryCard, number }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [num, setNum] = useState(0);
  const [messageModal, setMessageModal] = useState({show: false, message: "", color: ""});
  // check if the item already exists

  useEffect(()=>{
    // this gets number of this item added to cart and makes it visible in the main page
    basket.forEach((item, i) => {
      if (item.id === id) {
        setNum(Number(item.number))
        }
      })
  }, [])

  const showMessage = (type='add') => {
    if(type === 'add'){
      setMessageModal({show: true, message: "Added to cart", color: "#8dc04e"})
      setTimeout(()=>{
        setMessageModal({show: false, message: "", color: ""})
      }, 1000)
    }else{
      setMessageModal({show: true, message: "Removed from cart", color: "#ca280b"})
      setTimeout(()=>{
        setMessageModal({show: false, message: "", color: ""})
      }, 1000)
    }
  }
  
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: src,
        price: price,
        number: "1",
        priceDigit,
        numberAvailableInStock
      }
    })
  
    setNum(1);
    showMessage()
  }

  const increaseNumber = () => {
    // this automatically increase the number of item in the cart
    basket.forEach((item, i) => {
      if (item.id === id) {
        if(item.number < item.numberAvailableInStock && !(item.numberAvailableInStock < item.number)){
          setNum(num + 1)
          basket[i].number = (num + 1).toString();
          dispatch({
            type: "SINGLE_CART_ITEM_INCREASE",
            items: [...basket]
          });
          showMessage()
        }else{
          alert("available number of item exceeded")
        }
        }
      })
  }

  const decreaseNumber = () => {
    // this automatically decrease the number of item in the cart
    basket.forEach((item, i)=> {
      if(item.id === id){
        if(item.number === "1"){
          setNum(num - 1);
          basket.splice(i, 1);
          dispatch({
            type: "REMOVE_SINGLE_PRODUCT",
            items: [...basket]
          });
          showMessage('remove')
        }
        else{
          setNum(num - 1);
          basket[i].number = (num - 1).toString();
          dispatch({
            type: "SINGLE_CART_ITEM_INCREASE",
            items: [...basket]
          });
          showMessage('remove')
        }
      }
    })
  }


  return (
    <div className="card" style={{width: "183px"}}>
      <img src={src} alt="" />
      <div className="card__info">
        <p>{title}</p>
        {price && <h5>₦ {price}</h5>}
        {!categoryCard && (num === 0) && <button onClick={addToBasket}>add to basket</button>}
        {(num >= 1) && <div className="number-of-item">
          <button onClick={decreaseNumber}><RemoveIcon /></button>
          <span>{num}</span>
          <button onClick={increaseNumber}><AddIcon /></button>
        </div>}
      </div>
      {messageModal.show && <p style={{background: messageModal.color}} className="message">{messageModal.message}</p>}
    </div>
  );
}

export default Card
