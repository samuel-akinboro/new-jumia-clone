import React from 'react'
import Advertisement from '../Advertisement/Advertisement'
import CardsRow from '../CardsRow/CardsRow'
import CarouselCardsRow from '../CarouselCardsRow/CarouselCardsRow'
import CategoryRow from '../CategoryRow/CategoryRow'
import './Products.css'
import imageOne from '../../assets/images/ad/ad1.jpeg'
import imageTwo from  '../../assets/images/ad/ad2.jpg'
import imageThree from '../../assets/images/ad/ad3.jpg'
import imageFour from '../../assets/images/ad/ad4.jpeg'
import imageFive from '../../assets/images/ad/ad5.jpg'
import imageSix from '../../assets/images/ad/ad6.jpg'
import imageSeven from '../../assets/images/ad/ad7.jpeg'
import imageEight from  '../../assets/images/ad/ad8.jpeg'
import imageNine from '../../assets/images/ad/ad9.jpg'
import imageTen from '../../assets/images/ad/ad10.jpg'
import imageEleven from '../../assets/images/ad/ad11.jpg'
import imageTwelve from '../../assets/images/ad/ad12.jpg'

function Products() {
  return (
    <div>
      <CarouselCardsRow bgColor="#fff" color="#282828" seeMore={true} title="Top selling items" />
      <Advertisement image1={imageOne} image2={imageTwo} />
      <Advertisement image1={imageThree} image2={imageFour} />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CardsRow bgColor="rgb(254, 0, 0)" color="#fff" seeMore={true} title="Sneakers Day Top Deals | Free Delivery" />
      <CardsRow bgColor="rgb(254, 0, 0)" color="#fff" seeMore={true} title="Everyday Deals" />
      <Advertisement image1={imageFive} image2={imageSix} />
      <Advertisement image1={imageSeven} image2={imageEight} />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CarouselCardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="Nike" />
      <CardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="Top Deals | Women's Fashion" />
      <CardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="Top Deals | Drinks" />
      <Advertisement image1={imageNine} image2={imageTen} />
      <Advertisement image1={imageEleven} image2={imageTwelve} />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CardsRow bgColor="rgb(181, 222, 147)" color="#282828" seeMore={true} title="Nivea" />
    </div>
  )
}

export default Products
