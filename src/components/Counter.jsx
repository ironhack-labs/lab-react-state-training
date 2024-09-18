import React from 'react'
import { useState } from "react";


function Counter() {

    const [ masButton, setMasButton]= useState(0);
    
    const handleSumar= ()=>{
        setMasButton( masButton + 1)
    }
    const hanldeRestar= () =>{
        setMasButton( masButton -1)
    }

  return (
    <div className="counter">
        
        <button disabled={masButton <=0 ? true :false} onClick={hanldeRestar} className="button-counter"> - </button>
        <h3>{masButton}</h3>
        <button onClick={handleSumar} className="button-counter"> + </button>
    </div>
  )
}

export default Counter