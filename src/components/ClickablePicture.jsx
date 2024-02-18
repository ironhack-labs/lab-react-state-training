import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClikablePicture() {
    
    let pics = [maxence, maxenceGlasses];
    let [wearingGlasses, setWearingGlasses] = useState(false);
    
    const toggleImage = () => { {
        if(wearingGlasses) {
            setWearingGlasses(false);
        } else {
            setWearingGlasses(true);
        }
    }
    };   
    return(
        <div>
            <img src={pics[wearingGlasses ? 1 : 0]}  onClick={toggleImage}/>
        </div>
    );



}
    

    



export default ClikablePicture;