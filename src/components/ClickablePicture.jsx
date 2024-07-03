import { useState } from "react";
import maxImg from "../assets/images/maxence.png"
import maxImgGls from "../assets/images/maxence-glasses.png"

const ClickablePicture = () => {

    const [pic, setPic] = useState(maxImg)
    return ( 

        <div>
            <img src = {pic} onClick={() => {
            if (pic === maxImg) {
                setPic (maxImgGls)
            } else {
                setPic (maxImg)
            }
        }}/>
        </div>
        
     );
}
 
export default ClickablePicture;