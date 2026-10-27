import { useState } from "react";

function ClickablePicture (){
    const imgOne = "/src/assets/images/maxence.png";
    const imgTwo = "/src/assets/images/maxence-glasses.png";

    const [imgValue, setImgValue] = useState (imgOne);

    const imageToggle = () => {
        imgValue === imgOne ? setImgValue (imgTwo):setImgValue(imgOne);
    }


    return (
<div>
    <img onClick={imageToggle} src={imgValue} alt="" width="200px"/>
</div>

    )
}

export default ClickablePicture;