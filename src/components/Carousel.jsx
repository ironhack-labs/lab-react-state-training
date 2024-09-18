import { useState } from 'react'

function Carousel({ imagesArr }) {

  const [currentImage, setCurrentImage] = useState(0)

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % imagesArr.length)
  }

  const handlePreviousImage = () => {
    setCurrentImage((currentImage - 1 + imagesArr.length) % imagesArr.length)
  }

  return (
    <div className='carousel-container'>
      <button onClick={handlePreviousImage}>Left</button>
      <img src={imagesArr[currentImage]} />
      <button onClick={handleNextImage}>Right</button>
    </div>
  )
}

export default Carousel