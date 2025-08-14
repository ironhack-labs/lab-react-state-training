import { useState } from "react";


function Dice() {
    const [count, setCount] = useState(() => Math.floor(Math.random() * 7));
    const [isRolling, setIsRolling] = useState(false);
    
    function handleClick() {
        if (isRolling) return;
        setIsRolling(true);
        setCount(0);
        setTimeout(() => {
            const newCount = Math.floor(Math.random() * 6) + 1;
            setCount(newCount);
            setIsRolling(false);
        }, 1000);
    }
    const dice = "/src/assets/images/dice" + count + ".png";
  return (
    <div>
        <img 
        src={dice} 
        onClick={handleClick}/>
    </div>
  );
}

export default Dice;
