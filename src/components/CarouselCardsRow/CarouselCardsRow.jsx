import React, {useState} from 'react'
import './CarouselCardsRow.css'
import CarouselCard from '../CarouselCard/CarouselCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightButton from '../CustomRightButton';
import CustomLeftButton from '../CustomLeftButton';
import data from "../data.json"

function CardsRow({showMore, title, color, bgColor}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1210 },
      items: 6,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 1199, min: 1024 },
      items: 4,
      // slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      // partialVisibilityGutter: 50
    },
    less: {
      breakpoint: { max: 767, min: 479 },
      items: 2,
      // partialVisibilityGutter: 40
    },
    small: {
      breakpoint: { max: 600, min: 479 },
      items: 2,
      // partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 3,
      // partialVisibilityGutter: 40,
      slidesToSlide: 4
    }
  };

  const [isMoving, setIsMoving] = useState(false)

  return (
    <div className="carousel_card__row">
      <h2 
        className="row__title" 
        style={{backgroundColor: bgColor, color}}
      >
        {title}
        <span>See all</span>
      </h2>
      <Carousel
        swipeable={true}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customRightArrow={<CustomRightButton />}
        customLeftArrow={<CustomLeftButton />}
        // partialVisible={true}
        itemClass="carousel-card-item"
        ssr={true}
  //       beforeChange={() => setIsMoving(true)}
  // afterChange={() => setIsMoving(false)}
        // centerMode={true}
      >
        {
          data[title].map(item => <CarouselCard key={item.id} imageUrl={item.src} title={item.title} price={item.price} />)
        }
      </Carousel>
    </div>
  )
}

export default CardsRow
