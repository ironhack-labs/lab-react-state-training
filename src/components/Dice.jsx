import react, {useState} from "react";
import dice_empty from "../assets/images/dice_empty.png";
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"




function Dice(){
    const images = [dice1, dice2, dice3, dice4, dice5, dice6];

    const[imageToDisplay, setImage] = useState(dice_empty);
    
        const displayImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setImage(images[randomIndex])
        };
    
        return(
            <div>
                <img src={imageToDisplay} alt="image" onClick={displayImage} />
            </div>
        )
    
    };

export default Dice;