import { useState } from "react"

function Dice() {

    const getRandomNumber = () => Math.floor(Math.random()* 6) + 1;
    const [number, setNumber] = useState(getRandomNumber)

    const getRandomDice = () => {
        setNumber("-empty");
        setTimeout(()=> {
            setNumber(getRandomNumber);
        }, 1000);
    }
  return (
    <section className="iteration"> 
        <header className="header">Iteration 4 | Dice</header>
        <img src={`./dice${number}.png`} alt="" className="Dice" width="200" onClick={getRandomDice}/>

    </section>
  )
}

export default Dice