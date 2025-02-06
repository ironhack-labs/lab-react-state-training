import React from 'react'

function CarouselCard(propImg) {
  const { images } = propImg;
  return (
    <>
        <img src={images} alt="image" />
    </>
  )
}

export default CarouselCard