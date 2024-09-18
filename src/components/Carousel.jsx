import { useState } from "react"

const images = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg"
]

export default function Carousel() {
  const [photoIndex, setPhotoIndex] = useState(0)
  function nextPhotoHandler () {
    setPhotoIndex(prev => {
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }
  function prevPhotoHandler () {
    setPhotoIndex(prev => { 
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }
  return (
    <div>
      <button onClick={nextPhotoHandler}>Left</button>
      <img src={images[photoIndex]} alt="" />
      <button onClick={prevPhotoHandler}>Right</button>
    </div>
  )
}
