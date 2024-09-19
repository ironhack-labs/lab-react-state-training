import React from 'react'
import { useState } from 'react';


export default function ClicablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

  };
  return (
    <div>
      <img 
        src={isClicked ? "/images/maxence-glasses.png" : "/maxence.png"} 
        alt="foto" 
        onClick={handleClick} 
      />
    </div>
  )
}
