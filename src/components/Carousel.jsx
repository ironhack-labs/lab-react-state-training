import { useState } from "react"

const Carousel = ({ images }) => {
  const [image, setImage] = useState(images[0])
  const handleImages = buttonType => {
    const imageIndex = images.indexOf(image)
    switch (buttonType) {
      case "left":
        imageIndex > 0 && setImage(images[imageIndex - 1])
        break
      case "right":
        imageIndex < 3 && setImage(images[imageIndex + 1])
        break
    }
  }
  return (
    <div className="Carousel">
      <button onClick={() => handleImages("left")}>Left</button>
      <img src={image} alt="Image" />
      <button onClick={() => handleImages("right")}>Right</button>
    </div>
  )
}

export default Carousel