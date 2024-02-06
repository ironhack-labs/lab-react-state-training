import { useState } from 'react'

function Counter(){
    const [counter,setCounter] = useState(0);
    return(  
    <section>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <spam>{counter}</spam>
      <button onClick={()=>counter>0 ? setCounter(counter-1): setCounter(0)}>-</button>
    </section>
    )
}

export default Counter