import { useState } from "react"

function Carousel({images}) {

  const [ index, setIndex] = useState(0)

  const handleDecrease = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const handleIncrease = () => {
    if (index < images.length - 1)
    setIndex(index + 1)
  }

  return (
    <div className="carousel">
      <button onClick={handleDecrease}>Left</button>
      <img src={images[index]} alt="Carousel" />
      <button onClick={handleIncrease}>Right</button>
    </div>
  )
}

export default Carousel