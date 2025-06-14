import { useState } from "react"

function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  return (
    <div>
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
      >
        left
      </button>
      <img src={images[current]} alt="user profile" />
      <button onClick={() => setCurrent((current + 1) % images.length)}>
        right
      </button>
    </div>
  )
}

export default Carousel