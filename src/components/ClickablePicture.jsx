import React, { useState } from 'react'

const ClickablePicture = () => {
    const[picClick, setPicClick] = useState(false)

    function handleClick(){
        setPicClick(!picClick)
    }
  return (
    <div>
        <img src={picClick ? "src/assets/images/maxence-glasses.png" : "src/assets/images/maxence.png"} alt="Maxence picture" onClick={handleClick}/>
    </div>
  )
}

export default ClickablePicture