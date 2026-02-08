import React, { useState } from 'react'
import pic from "../assets/images/maxence.png"
import picglass from "../assets/images/maxence-glasses.png"

export default function ClickablePicture() {
    const [picture, setPicture] = useState(pic)
    const handlePic = () => setPicture((picture) => (picture === pic ? picglass : pic))
  return (
    <div>
        <img onClick={handlePic} src={picture} alt="" />
        {console.log(pic)}
    </div>
  )
}
