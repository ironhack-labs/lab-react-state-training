

import React, {useState} from "react"

import Glasses from "../assets/images/glasses.png"
import Maxence from "../assets/images/maxence.png"
import Maxenceglasses from "../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const image1 = Maxence
    const image2 = Glasses
    const image3 = Maxenceglasses
    

const [currentImg, setCurrentImg] = useState(image1)

const toggleImg = () => {
    
    setCurrentImg((prevImg) => 
    prevImg === image1 ? image3 : image1 

    )
}

return (
    <div>
        <img src={currentImg} alt="clickable" onClick={toggleImg}></img>
    </div>
)
}
export default ClickablePicture