import React, { useState } from 'react'
import origImg from '../../assets/images/maxence.png'
import funImg from '../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
  const [isFunMode, setIsFunMode] = useState(false)


  return (
    <div>
      {/* {isFunMode ? <img src={funImg}></img> : <img src={origImg}></img>} */}
      <img onClick={() => setIsFunMode(!isFunMode)} src={isFunMode ? funImg : origImg}></img>
    </div>
  )
}

export default ClickablePicture