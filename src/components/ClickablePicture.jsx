import { useState } from "react";
import pic1 from "../assets/images/maxence.png";
import pic2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picture, setPicture]= useState(pic1);
  function togglePicture(){
    if(picture === pic1){
      setPicture(pic2)
    }else{setPicture(pic1)

    }
  }

  return(
    <>
<h1>Clickable Picture</h1>
  <div>
    <img className="picClick" onClick={()=>{togglePicture()}} src={picture} alt="pic1" />
  </div>

    </>
  )
 
}
export default ClickablePicture;
