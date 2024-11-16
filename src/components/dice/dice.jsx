import { useEffect, useState } from "react"
import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"



function Dice({className = ''}) {
    const ramdonNumber = Math.floor(Math.random() * 6);
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    
    
    const[currentImage, setCurrentImage] = useState(diceImages[ramdonNumber]);
    const [isRolling, setIsRolling] = useState(false);

    useEffect(() => {
        if(isRolling) {
            const timeout = setTimeout(() => {
                const ramdonNumber = Math.floor(Math.random() * 6);
                setCurrentImage(diceImages[ramdonNumber]);
                setIsRolling(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [isRolling]);

    const handleClick = () => {
        if(!isRolling) {
            setCurrentImage(diceEmpty);
            setIsRolling(true);
        }
    };

    return (
        <div className={className} onClick={handleClick} style={{ cursor: "pointer"}}>
            <img src={currentImage} alt="Dice" style={{width: '100px', height: '100px'}} />
        </div>

    )  
}
export default Dice;