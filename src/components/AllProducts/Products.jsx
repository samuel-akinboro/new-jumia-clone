import React from 'react'
import Advertisement from '../Advertisement/Advertisement'
import CardsRow from '../CardsRow/CardsRow'
import CarouselCardsRow from '../CarouselCardsRow/CarouselCardsRow'
import CategoryRow from '../CategoryRow/CategoryRow'
import './Products.css'

function Products() {
  return (
    <div>
      <CarouselCardsRow bgColor="#fff" color="#282828" seeMore={true} title="Top selling items" />
      <Advertisement image1="images/ad/ad1.jpeg" image2="images/ad/ad2.jpg" />
      <Advertisement image1="images/ad/ad3.jpg" image2="images/ad/ad4.jpg" />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CardsRow bgColor="rgb(254, 0, 0)" color="#fff" seeMore={true} title="Sneakers Day Top Deals | Free Delivery" />
      <CardsRow bgColor="rgb(254, 0, 0)" color="#fff" seeMore={true} title="Everyday Deals" />
      <Advertisement image1="images/ad/ad4.jpg" image2="images/ad/ad6.jpg" />
      <Advertisement image1="images/ad/ad4.jpg" image2="images/ad/ad6.jpg" />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="Nike" />
      <CardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="Kid's sneakers" />
      <CardsRow bgColor="#C7C7CD" color="#282828" seeMore={true} title="High end sneakers" />
      <Advertisement image1="images/ad/ad4.jpg" image2="images/ad/ad6.jpg" />
      <Advertisement image1="images/ad/ad4.jpg" image2="images/ad/ad6.jpg" />
      <CategoryRow title="Shop The Best Collections For You!" bgColor="#fff" color="#282828" />
      <CardsRow bgColor="rgb(181, 222, 147)" color="#282828" seeMore={true} title="Nivea" />
    </div>
  )
}

export default Products
