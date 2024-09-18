import React from 'react'
import imgVacia from "../assets/images/dice-empty.png";
import img1 from "../assets/images/dice1.png";
import img2 from "../assets/images/dice2.png";
import img3 from "../assets/images/dice3.png";
import img4 from "../assets/images/dice4.png";
import img5 from "../assets/images/dice5.png";
import img6 from "../assets/images/dice6.png";

import { useState } from "react";


function Dice() {

  const totalImages=[img1, img2, img3, img4, img5, img6];

  const[imgCubo, setImgCubo] = useState(imgVacia)

const handleImgCubo= ()=>{
    const randomImg= Math.floor(Math.random()* totalImages.length)
    setImgCubo(totalImages[randomImg])

}

  return (
    <div>
        <img 
        src={imgCubo} 
        alt="imagen dado vacia" 
        onClick={handleImgCubo}
        className="cubo"/>
    </div>
  )
}

export default Dice