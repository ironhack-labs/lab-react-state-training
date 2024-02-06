import { useState } from "react";

import defaultImage from '../assets/images/maxence.png';
import newImage from '../assets/images/maxence-glasses.png';

function ClickablePicture () {

    const [defaultImg, setNewImg] = useState(defaultImage)

    function changePicture () {
        if  (defaultImg === defaultImage){
        setNewImg(newImage)
    }
        else if (defaultImg === newImage) {
        setNewImg(defaultImage)
    }      
}
 

    return (
        <div>
            <img src={defaultImg} onClick={changePicture}/>
        </div>
    )
}

export default ClickablePicture