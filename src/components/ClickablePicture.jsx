import { useState } from 'react'

function ClickablePicture(){
    const img1 = "src/assets/images/maxence.png";
    const img2 = "src/assets/images/maxence-glasses.png";

    const [picture, setPicture] = useState(img1);

    const changePicture = () =>  {
        setPicture((previousPicture) => (previousPicture === img1 ? img2 : img1));
    }

    return (
        <button onClick={changePicture}>
            <img src={picture} alt= "maxence"/>
        </button>
    )
}

export default ClickablePicture
