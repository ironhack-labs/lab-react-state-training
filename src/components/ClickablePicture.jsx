import { useState } from "react";
import noglasses from "../assets/images/maxence.png";
import glasseson from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [img, setImg] = useState(noglasses);

    function changePic(){
    let pic = img

    if (pic === noglasses){
        setImg(glasseson)
    } else {
        setImg(noglasses)
    }
}
    

    return (
        <div>
            <img src= {img} onClick = {changePic} ></img>
        </div>
    )
  }

  export default ClickablePicture