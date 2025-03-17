import React, {useState} from 'react'

export const ClickablePicture = () => {
    const [glasses, setGlasses] = useState(false)
  return (
    <>
    <img src={ glasses ? './src/assets/images/maxence-glasses.png' : './src/assets/images/maxence.png'}alt="" onClick={() => {setGlasses(!glasses)}}/>
    
    </>
  )
}
