import { useState } from "react";

export default function ClickablePicture(){
    const glass = "./src/assets/images/maxence-glasses.png";
    const noglass = "./src/assets/images/maxence.png";
    const [state, setState] = useState(glass)
    const clicked = () =>{
        setState(state == glass
        ? noglass
        : glass)
    }
    return(
        <>
            <button onClick={clicked}>
                <img src={state} alt="guy without glass" />
            </button>
            
        </>
    )
}