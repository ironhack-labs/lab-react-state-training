import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1 )
    }

    const handleDecrement = () => {
        if (counter > 0){setCounter(counter - 1 )}
        

    }


return(
    <div>
        <p> Counter : { counter }</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick = {handleDecrement}>-</button>


    </div>

)
}

export default Counter