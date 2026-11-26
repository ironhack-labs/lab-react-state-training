import { useState } from "react"
import "./dice.css"

function Dice () {
    
    const [dice, setDice] = useState("./src/assets/images/dice-empty.png")

    const toggleDice = () => {
        setDice("./src/assets/images/dice-empty.png")

        setTimeout(() => {
            const randomNumber = Math.floor((Math.random() * 6) + 1)
            switch (randomNumber) {
                case 1:
                    setDice("./src/assets/images/dice1.png")
                    break;
                case 2:
                    setDice("./src/assets/images/dice2.png")
                    break;
                case 3:
                    setDice("./src/assets/images/dice3.png")
                    break;
                case 4:
                    setDice("./src/assets/images/dice4.png")
                    break;
                case 5:
                    setDice("./src/assets/images/dice5.png")
                    break;
                case 6:
                    setDice("./src/assets/images/dice6.png")
                    break;
            }   
        }, 1000)
    
    }

    return  <img className="dice" src={dice} onClick={toggleDice} />
}

export default Dice