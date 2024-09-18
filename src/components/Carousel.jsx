import { useState } from 'react'

function Carousel(props) {
  const { images } = props
  const [imageIndex, setImagenesIndex] = useState(0)

  const handleLeft = () => {
    const nuevoIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
    setImagenesIndex(nuevoIndex)
  }
  const handleRight = () => {
    const nuevoIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1
    setImagenesIndex(nuevoIndex)
  }
  return (
    <div>
      <button onClick={handleLeft}>Lest</button>
      <img src={images[imageIndex]} alt="" />
      <button onClick={handleRight}>Right</button>
    </div>
  )
}

export default Carousel
