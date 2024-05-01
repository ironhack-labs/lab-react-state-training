import {useState} from "react"

function Counter() {
    let [ counter, setCounter ] = useState(0)
    const handleIncrease = () => {
        setCounter (counter+1)
        setButtonColor("lightblue")
    }
    const handleDecrease = () => {
        setCounter (counter-1)
        setButtonColor("lightblue")
    }
    const [ buttonColor, setButtonColor ] = useState("blue")
  return (
    <div>
         <h1>{counter}</h1> 
        <button onClick={handleIncrease} style={{backgroundColor: buttonColor}}>+</button>
      
       <button onClick={handleDecrease} style={{backgroundColor: buttonColor}}>-</button>
        
        
        </div>
  )
}

export default Counter