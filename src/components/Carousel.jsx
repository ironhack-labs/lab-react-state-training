import React from 'react'
import { useState } from 'react'

function Carousel() {
    const [imageIndex,useImageIndex] = useState(0)
    const images=[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
      ]

      function goNext(){
        if(imageIndex === images.length-1){
            useImageIndex(0)
        }else{
            useImageIndex(imageIndex + 1)
        }
        
      }
      function goPrev(){
        if(imageIndex === 0){
            useImageIndex(images.length-1)
        }else{
            useImageIndex(imageIndex -1)
        }
        
      }



  return (
    <div>
        <button onClick={goPrev}>Left</button>
        <img src={images[imageIndex]} alt="" />
        <button onClick={goNext}>Right</button>
    </div>
  )
}

export default Carousel