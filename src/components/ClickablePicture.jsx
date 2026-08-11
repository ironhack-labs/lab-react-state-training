import image1 from '../assets/images/maxence.png';
import image2 from '../assets/images/maxence-glasses.png';
import { useState } from 'react';


function ClickablePicture(){
    const [picture, setPicture] = useState("false");
    function toggle(){
        setPicture(!picture)
    }
    return (
        <div>
            <img onClick = {toggle} src= {picture ? image1 : image2} alt="imageToggle" />
        </div>
    )
    };
    export default ClickablePicture;
    
