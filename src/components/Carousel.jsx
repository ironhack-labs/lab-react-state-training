import { useState } from "react"

function Carousel({images}) {
    const [imageIndex, setImageIndex] = useState(0)
    const handleClickRight = () => {
        imageIndex === images.length - 1? setImageIndex(0) : setImageIndex(imageIndex + 1)
    }
    const handleClickLeft = () => {
        imageIndex === 0 ? setImageIndex(images.length- 1) : setImageIndex(imageIndex - 1)
    }


  return (

    <div className="carousel">
        <button onClick={handleClickLeft}>Left</button>
        <img src={images[imageIndex]} alt="" />
        <button onClick={handleClickRight}>Right</button>
    </div>
  )
}
export default Carousel