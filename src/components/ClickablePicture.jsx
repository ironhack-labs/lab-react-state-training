import { useState } from "react";

function ClickablePicture(){

    const [imageSrc, changeImageSrc] = useState("src/assets/images/maxence.png")

    const changePicture = () => {
       if (imageSrc==="src/assets/images/maxence.png") {
        changeImageSrc("src/assets/images/maxence-glasses.png")
       } else  {
        changeImageSrc("src/assets/images/maxence.png")
       }
    }


    return <div>

        <img onClick={changePicture} src={imageSrc}></img>


    </div>

}

export default ClickablePicture;