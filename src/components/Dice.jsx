import { useState } from "react"
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";


function Dice() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]



  const nextImage = () => {
    //setInterval(DiceEmpty, 1000)
    setCurrentImageIndex( Math.floor(Math.random() * images.length) )
  }
  
    return (
    <div>
        <h2>Dice</h2>
<div>
<img className="dice" onClick={nextImage} src={images[currentImageIndex]} alt="" />
</div>

    </div>
  )
}

export default Dice