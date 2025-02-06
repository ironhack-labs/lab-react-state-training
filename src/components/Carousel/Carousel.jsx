import React, { useState } from 'react'
import CarouselCard from '../CarouselCard/CarouselCard'

function Carousel() {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];

  const [posImage, setPosImage] = useState(0);
  console.log('posición actual', posImage)

  function setNextImage () {
    return setPosImage((prevPos) => prevPos === images.length - 1 ? 0 : prevPos + 1);
  }

  function setPrevImage () {
    return setPosImage((prevPos) => prevPos === 0 ? images.length - 1 : prevPos - 1);
  }

  return (
    <div className='carousel'>
      <button className='prev' onClick={ setPrevImage }>Left</button>
      <CarouselCard images={ images[posImage] }/>
      <button className='next' onClick={ setNextImage }>Right</button>
    </div>
  )
}

export default Carousel