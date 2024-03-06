import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import picture from "../assets/images/dice-empty.png";

const Dice = ({diceImage, setDiceImage}) => {
    const handleClick = () => {
        setDiceState('../assets/images/dice-empty.png');

    //set timeout to update dice after one second
    setTimeout(()=> {
        const randomDiceValue = Math.floor(Math.random() * 6) +1;
        const newRandomDice = `./assets/images/dice${randomDiceValue}.png`;
        setDiceState(newRandomDice);
    }, 1000);
    }


  return (
    <div className="dice" >
    <img src={dice3} alt="" onClick={handleClick} className="dice"/>
      
    </div>
  )
}

export default Dice
