import { useState } from "react";

function Counter() {
    
    const [count, setCount] = useState(0);
    return (
        
      <section style={{display:"flex", flexDirection:"row"}}> 
        <article>
        <button style={{background: `rgb(46,108,204)`}} onClick = {()=>setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button style = {{background: `rgb(46,108,204)`}} onClick = {()=>count>0 ? setCount(count - 1): setCount (0)}>-</button>
        </article>
      </section>
    );
  }

  export default Counter