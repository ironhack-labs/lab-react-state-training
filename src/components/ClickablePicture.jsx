
import { useState } from "react";

function ClickablePicture(){

    const [imageSrc, setImageSrc] = useState("./src/assets/images/maxence.png");

    const changePicture = () => {
        setImageSrc((prevSrc) =>
            prevSrc === "./src/assets/images/maxence.png"
              ? "./src/assets/images/maxence-glasses.png"
              : "./src/assets/images/maxence.png"
          ); 
    }

    return (
        <img onClick={changePicture} src={imageSrc} alt="Toggleable Image" />
    )

}

export default ClickablePicture