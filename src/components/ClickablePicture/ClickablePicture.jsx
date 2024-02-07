
import { useState } from "react";


import "./ClickablePicture.css";

import image from "../../assets/images/maxence.png";
import imageWithGlasses from "../../assets/images/maxence-glasses.png";

function ClickablePicture () {


    const [isVisible, setIsVisible] = useState(false);
    //const isVisible = false;



    return (

        <div className="image">

        <img onClick={() => setIsVisible(!isVisible)} src={isVisible ? imageWithGlasses : image} alt='Maxence' />



        </div>

    )

}


export default ClickablePicture;