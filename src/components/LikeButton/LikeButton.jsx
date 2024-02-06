import {useState} from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(counter +1)
    }
    
    return (
        <div className = "Counter">
            <button onClick={handleCounterUp}>{counter} Likes</button>
        </div>
    )
}

export default Counter