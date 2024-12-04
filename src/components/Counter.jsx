import { useState } from "react";



function Counter() {

    const [numToMod, setNumToMod] = useState(0);

    const handleDecrease = () => {
        // console.log("testing")
        if(numToMod <= 0) {
            return numToMod;
        } else {
            setNumToMod(numToMod - 1);
        }
    };

    const handleIncrement = () => {
        // console.log("testing")
        setNumToMod(numToMod + 1);
    };

    return(
        <div className="counter-container">
            <div className="counter-elements">
                <button onClick={() => handleDecrease()} className="decoration-btn">-</button>
                <p>{numToMod}</p>
                <button onClick={() => handleIncrement()} className="decoration-btn">+</button>
            </div>
        </div>
    )
}

export default Counter;