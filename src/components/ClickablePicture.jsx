
import { useState } from "react";
import Maxence from '../assets/images/Maxence.png'
import MaxenceGlasses from '../assets/images/Maxence-glasses.png'


const ClickablePicture = () => {
    const [glasses, setGlasses] = useState(false);
    const toggleGlasses = () => {
        setGlasses(!glasses);
    }

    return (
        <>
            <img onClick={toggleGlasses}  src={glasses ? MaxenceGlasses : Maxence} />
        </>
    )
}

export default ClickablePicture