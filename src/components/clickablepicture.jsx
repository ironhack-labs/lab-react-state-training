import { useState } from "react";

function ClickablePicture() {
  const [glasses, setGlasses] = useState("src/assets/images/maxence.png");

  function changeGlasses() {
    if (glasses === "src/assets/images/maxence.png") {
      setGlasses(("src/assets/images/maxence-glasses.png"));
    } else {
      setGlasses(("src/assets/images/maxence.png"));
    }
  }

  return(
     <div> <img onClick={changeGlasses} src={glasses}/> </div>
  )
 
}

export default ClickablePicture;


//