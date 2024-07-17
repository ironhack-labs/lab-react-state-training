import React from 'react'
import noGlasses from '../assets/images/maxence.png'
import glasses from '../assets/images/maxence-glasses.png'
import { useState } from 'react';

function ClickablePicture() {

  const [picture, setPicture] = useState(noGlasses)

  const handlePicture = () => { 
    if(picture === noGlasses){
      setPicture(glasses)
    } else if(picture === glasses) {
      setPicture(noGlasses)
    }
   }
  return (
    <button onClick={handlePicture}>
        <img src={picture} alt="" />
    </button>
  )
}

export default ClickablePicture;