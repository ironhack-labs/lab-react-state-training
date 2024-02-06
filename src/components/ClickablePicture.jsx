import { useState } from "react";

function ClickablePicture(){

     
  
   const [picture, setPicture] = useState(true);

    return(
    <div onClick={() => setPicture(!picture)}>
    {picture 
    ? (<img src="../src/assets/images/maxence.png" alt="without glasses" />) 
    : (<img src="../src/assets/images/maxence-glasses.png" alt="with glasses" /> )} 
    </div>    
    )
}

export default ClickablePicture;