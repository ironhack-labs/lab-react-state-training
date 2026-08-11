import {useState} from "react"
import maxence1 from "../assets/images/maxence.png";
import maxence2 from "../assets/images/maxence-glasses.png";
   
function PictureClick(){
   
    const [hasGlasses,setHasGlasses] = useState(false);

    function pictureClick() {
    setHasGlasses(!hasGlasses);
  }
    return(
   <div>
      <img
        src={hasGlasses ? maxence2 : maxence1}
        onClick={pictureClick}
      />
    </div>
  );
}
export default PictureClick;
