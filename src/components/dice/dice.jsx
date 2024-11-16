import { useState } from "react";
import empty from "../../assets/images/dice-empty.png"
import one from "../../assets/images/dice1.png"
import two from "../../assets/images/dice2.png"
import three from "../../assets/images/dice3.png"
import four from "../../assets/images/dice4.png"
import five from "../../assets/images/dice5.png"
import six from "../../assets/images/dice6.png"

function Dice() {
    const diceImgs = [ one, two, three, four, five, six ];
    const randomIndex = () => Math.floor( Math.random() * diceImgs.length );
    const [img, setImg] = useState( diceImgs[ randomIndex() ] );

    const handleClick = () => {
        setImg(empty);
        setTimeout(() => {
            setImg(diceImgs[randomIndex()]);
        }, 1000);
    }
    return (
        <div className="d-flex justify-content-center">
            <img className = "img-fluid w-25" src = {img} alt = "dice" onClick={handleClick}></img>
        </div>
    );
}

export default Dice;