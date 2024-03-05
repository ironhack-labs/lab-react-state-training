import Image0 from '../assets/images/dice-empty.png';
import Image1 from '../assets/images/dice1.png';
import Image2 from '../assets/images/dice2.png';
import Image3 from '../assets/images/dice3.png';
import Image4 from '../assets/images/dice4.png';
import Image5 from '../assets/images/dice5.png';
import Image6 from '../assets/images/dice6.png';

const Dice = ({dice, setDice}) => {
    
    const arrImage = [Image1,Image2,Image3,Image4,Image5,Image6];

    const rollDice = () => {
        setDice(Image0)
        setTimeout(() => {
            const number = Math.floor(Math.random()* arrImage.length)
            setDice(arrImage[number])
        }, 2000);
    }
  return (
    <div className='dice'>  
      <img src={dice === undefined ? setDice(Image1) : dice} 
      onClick={rollDice} alt=""/>
    </div>
  )
}

export default Dice
