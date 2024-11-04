import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import { useState } from "react";

const Dice = () => {
  const [diceNo, setDiceNo] = useState(diceEmpty);

  function rollDice(){
    let rollNo = Math.floor((Math.random() * 6)+1)

    setDiceNo(diceEmpty);

    let timeOut = setTimeout(()=>{
        switch (rollNo){
            case 1: setDiceNo(dice1);
                    break;
            case 2: setDiceNo(dice2);
                    break;
            case 3: setDiceNo(dice3);
                    break;
            case 4: setDiceNo(dice4);
                    break;
            case 5: setDiceNo(dice5);
                    break;
            case 6: setDiceNo(dice6);
                    break;
        }        

        clearTimeout(timeOut);
    }, 1000);
  }

  return (
    <div className="dice" onClick={rollDice}>
        <img src={diceNo} alt="Dice" className='dice-pic'/>
    </div>
  )
}

export default Dice