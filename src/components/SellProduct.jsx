import React, {useState} from 'react'
import './SellProduct.css'
import {db} from '../Firebase'
import UploadModal from './UploadModal'

function SellProduct() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({
    firstImage: null,
    secondImage: null,
    thirdImage: null
  })

  const [text, setText] = useState({
    title: "",
    description: "",
    price: "",
    priceDigit: ""
  })

  const setDetails = (e) => {
    switch (e.target.id) {
      case "title":
        setText({
          ...text,
          title: e.target.value,
        });
        break;
      case "description":
        setText({
          ...text,
          description: e.target.value,
        });
        break;
      case "price":
        setText({
          ...text,
          price: e.target.value,
        });
        break;
      default:
        setText({
          ...text,
          priceDigit: e.target.value,
        });
    }
  }

  const setPicture = (e) => {
    setFile({
      id: e.target.id,
      file: e.target.files[0]
    });
  }

  const handleSubmit = () => {
    db.collection('products').add({
      name: text.title,
      number: "1",
      price: text.price,
      src: image.firstImage,
      allImages: image,
      textPrice: text.price,
      price: text.priceDigit,
      title: text.description
    })

    setText({
      title: "",
      description: "",
      price: "",
      priceDigit: "",
    });
  }

  const style1 = image.firstImage ? { position: "relative", boxShadow: "none"} : { position: "relative"};
  const style2 = image.secondImage ? { position: "relative", boxShadow: "none"} : { position: "relative"};
  const style3 = image.thirdImage ? { position: "relative", boxShadow: "none"} : { position: "relative"};
  
  return (
    <div className="sell__product">
      <div className="sell__product__images">
        <h1>Add the images of the products</h1>
        <div className="images__container">
          <label
            htmlFor="main-image"
            className="main__image"
            style={style1}
          >
            <input
              type="file"
              name="main-image"
              id="main-image"
              onChange={setPicture}
            />
            {image.firstImage && (
              <img
                src={image.firstImage}
                alt=""
                style={{
                  width: "100%",
                  position: "absolute",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            <img src="/images/svg/add-photo.svg" alt="" className="svg" />
          </label>
          <div className="other__images">
            <label
              htmlFor="image2"
              className="image2"
              style={style2}
            >
              {image.secondImage && (
                <img
                  src={image.secondImage}
                  alt=""
                  style={{
                    width: "100%",
                    position: "absolute",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              <img src="/images/svg/add-photo.svg" alt="" className="svg" />
              <input
                type="file"
                name="image2"
                id="image2"
                onChange={setPicture}
              />
            </label>
            <label
              htmlFor="image3"
              className="image3"
              style={style3}
            >
              {image.thirdImage && (
                <img
                  src={image.thirdImage}
                  alt=""
                  style={{
                    width: "100%",
                    position: "absolute",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              <img src="/images/svg/add-photo.svg" alt="" className="svg" />
              <input
                type="file"
                name="image3"
                id="image3"
                onChange={setPicture}
              />
            </label>
          </div>
        </div>
        {file && (
          <UploadModal
            file={file}
            setFile={setFile}
            setImage={setImage}
            images={image}
          />
        )}
      </div>
      <div className="product__description">
        <h2>Product Details</h2>
        <div className="grey-box"></div>
        <div className="single-detail">
          <h3>Title</h3>
          <input type="text" value={text.title} id="title" placeholder="Enter Title" onChange={setDetails}/>
        </div>
        <div className="single-detail">
          <h3>Description</h3>
          <input type="text" value={text.description} id="description" placeholder="Description" onChange={setDetails} />
        </div>
        <div className="single-detail">
          <h3>Price</h3>
          <input type="text" value={text.price} id="price" placeholder="Example: N100,000" onChange={setDetails} />
        </div>
        <div className="single-detail">
          <h3>Price Digit</h3>
          <input type="text" value={text.priceDigit} id="price-digit" placeholder="Example: N100000" onChange={setDetails} />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SellProduct
