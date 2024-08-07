import { useState } from 'react';
import firstPicture from "../assets/images/maxence.png";
import secondPicture from "../assets/images/maxence-glasses.png";


function ClickablePicture() {
    const [picture, setPicture] = useState(firstPicture);

    const changePhoto = () => {
            if (picture === firstPicture){
                setPicture(secondPicture);
        }

    return (
        <img src={picture} on Click={changePhoto}/>
    )
}
}

export default ClickablePicture;