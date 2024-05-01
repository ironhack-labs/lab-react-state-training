import  {useState} from "react"

function LikeButton(){

  const [counter, setCounter] = useState(0)

  const handleIncrease =() => {
setCounter (counter +1)
     }
     


return(
    <div>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>likes</button>
    </div>
)}
export default LikeButton