import glassesImg from "/src/assets/images/maxence-glasses.png/"
import noGlassesImg from "/src/assets/images/maxence.png"
import { useState } from "react"

function ClickablePicture (){

    const [img, setImage] = useState(noGlassesImg)

    function changeImg(){
        if (img === glassesImg){
            return setImage(noGlassesImg)
        } else if (img === noGlassesImg){
            return setImage(glassesImg)
        }
    }

    return(
        <img onClick={()=>{changeImg()}} src={img} alt="img"/>

    )
}

export default ClickablePicture