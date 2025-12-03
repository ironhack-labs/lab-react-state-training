import { useState } from "react"


function Counter(){

const [counter, setCounter] = useState(0)

    const increaseCounter = ()=>{   
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    } 

    return (
    <div className="counter-container">
      <button className="counter-btn" onClick={decreaseCounter}>−</button>
      <p className="counter-value">{counter}</p>
      <button className="counter-btn" onClick={increaseCounter}>+</button>
    </div>
    )
}

export default Counter