import { useState } from "react";

function Dice() {
    const [number, setNumber] = useState(Math.floor(Math.random()*6)+1);
    const rollDice = () => {setNumber(Math.floor(Math.random()*6)+1)};
  return (
    <div>
        <img src={`./dice${number}.png`} alt="" width="200" onClick={rollDice}/>
    </div>
  )
}

export default Dice