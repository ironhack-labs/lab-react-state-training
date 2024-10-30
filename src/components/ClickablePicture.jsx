import React, { useState } from 'react'
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

function ClickablePicture() {
    const [ glasses, setGlasses] = useState(false)
  return (
        <img
            src={glasses ? maxenceGlasses : maxence} 
            onClick={() => setGlasses(!glasses)} />
  )
}

export default ClickablePicture