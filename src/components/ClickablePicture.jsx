import { useState } from 'react';
export default function ClickablePicture(){
    const [click, setClick]= useState("./src/assets/images/maxence.png")
    return(
        <div>
<img src={click} onClick={()=>setClick(click === "./src/assets/images/maxence.png"?"./src/assets/images/maxence-glasses.png":"./src/assets/images/maxence.png")}/> 

        </div>
    )
}