import react, {useState} from "react";
import maxence from "../assets/images/maxence.png";
import maxence_glasses from "../assets/images/maxence_glasses.png"


function ClickablePicture(){
    const[imageToDisplay, setImage] = useState(maxence);

    const changeImage = () => {
        if(imageToDisplay === maxence){
            setImage(maxence_glasses);
        } else {
            setImage(maxence);
        }
    };

    return(
        <div>
            <img src={imageToDisplay} alt="photo maxence" onClick={changeImage} />
        </div>
    )

};

export default ClickablePicture;