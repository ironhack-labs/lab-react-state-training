import img from "./assets/images/maxence.png"
import imgGlass from './assets/images/maxence-glasses.png'
import { useState } from "react"

function ClickablePicture() {
    const [currentImg, setCurrerntImg] = useState(img)
    const divStyle = {
        width: '150px',
        height: '200px'
    }
    const handleChangeImg = (currentImgCheck) => {
            currentImgCheck === img?
            setCurrerntImg(imgGlass):
            setCurrerntImg(img)
    }
  return (
    <div style={divStyle} onClick={()=> handleChangeImg(currentImg)}>
        <img style={{width:'100%'}} src={currentImg} />
    </div>
  )
}

export default ClickablePicture
