import { useState } from "react"
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'


export default function ClickablePicture() {
    
   const[glassesOn, setGlassesOn] = useState(false);

   const finalPicture = () => {
    setGlassesOn(!glassesOn);
   }

   return(
    <img onClick={finalPicture} src={glassesOn ? maxenceGlasses : maxence} />
   )
}