
import { useState } from "react";
import boy from '../assets/images/maxence.png';
import boyGlasses from '../assets/images/maxence-glasses.png';

function checkPhoto(photo) {
    if (photo === boy) {
        return boyGlasses;
    } else if (photo === boyGlasses) {
        return boy;
    }
}

function ClickablePicture() {
    const [photo, setPhoto] = useState(boy);
    return (
        <img style={{width: '150px'}}src={photo} onClick={() =>{setPhoto(checkPhoto(photo))}} />
    );
}

export default ClickablePicture;