import { useState } from "react"

function ClickablePicture () {
    const [picture, setPicture] = useState(false);
    const changeStyle = () => {
        setPicture(!picture) }

    
    return (
    <button className="glassesButton" onClick={changeStyle}>
        <img
         src={picture ? "./src/assets/images/maxence-glasses.png"  : "./src/assets/images/maxence.png"}
        alt="Maxence" />
    </button>
    
    )
}

export default ClickablePicture