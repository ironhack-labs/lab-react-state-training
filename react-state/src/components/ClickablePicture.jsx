import React, { useState } from 'react'
import niño from "../assets/images/maxence.png"
import niño1 from "../assets/images/maxence-glasses.png"
function ClickablePicture(){

    const[picture, setPicture]=useState(niño)
    const handleClick=()=>{
           if(picture===niño){
            setPicture(niño1)
           }else{
            setPicture (niño)
           }
        }

  return (
    <div>
      <button onClick={handleClick}><img src={picture}style={{width: "100px"}}/></button>
    </div>
  )
    
}
export default ClickablePicture
