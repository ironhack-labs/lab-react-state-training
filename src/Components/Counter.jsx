import { useState } from "react"

function Counter() {

    const [count, counterMovement] = useState(0)


    const handleSumar = () => {

        counterMovement(count + 1)
    
    } 

    const handleRestar = () => {

        if(count > 0){
            counterMovement(count - 1)
        }else {
            return
        }

    }

  return (



    <div>
        
    <button onClick={handleSumar}>+</button>
    <p>{count}</p>
    <button onClick={handleRestar}>-</button>

    </div>
  )
}

export default Counter