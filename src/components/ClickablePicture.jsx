import { useState } from 'react'
import Maxence from '../assets/images/maxence.png'
import MaxenceGlasses from '../assets/images/maxence-glasses.png'


function ClickablePicture(){
    const [picture,setPicture] = useState(Maxence);

    const togglePicture=()=>{
    setPicture((prevPicture) => prevPicture === Maxence ? MaxenceGlasses : Maxence)
    };

    return(
        <>
        <div>
        <img  src={picture} alt="Maxence" onClick={togglePicture} />
        
        </div>
        </>
    )
}

export default ClickablePicture;