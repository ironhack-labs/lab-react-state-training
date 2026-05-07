import { useState } from "react";
import Maxence from "../assets/images/maxence.png"
import MaxenceGlasses from "../assets/images/maxence-glasses.png"

export default function ClickablePicture(){
      const [click, setClick] = useState(true);
    return(
        <>
        <img 
            src={click ? Maxence : MaxenceGlasses }
            style={{height: "200px", width: "200px"}}
            onClick={() => setClick(!click)} 
        />
        </>
    )
}