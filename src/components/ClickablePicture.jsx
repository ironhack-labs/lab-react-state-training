import { useState } from 'react';
import notGangsterPic from "../assets/images/maxence.png";
import gangsterPic from "../assets/images/maxence-glasses.png";

function ClickablePicture () {
    const [isGangsterState,setGangsterState] = useState(false);
    const togglePic = () => {
        setGangsterState((prevState) => !prevState);
    }
    return(
        <img src={isGangsterState ? gangsterPic : notGangsterPic} onClick = {() => togglePic()}/>
    )
}

export default ClickablePicture;

