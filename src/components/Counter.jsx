import  {useState} from "react"

function Counter(){

  const [counter, setCounter] = useState(0)

  const handleIncrease =() => {
setCounter (counter +1)
     }

     const handleDecrease =() => {
        setCounter (counter -1)
             }


return(
    <div>
        
        <button onClick={handleIncrease}>+</button>
        <h1>{counter}</h1>
        <button onClick={handleDecrease}>-</button>
    </div>
)}
export default Counter