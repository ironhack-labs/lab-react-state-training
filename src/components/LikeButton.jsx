import React from 'react'
import {useState} from 'react'

function Likebutton() {
    let [counter, setCounter]=useState(0);
    const handleIncrease=() =>{
        setCounter(counter++)
    }
  return (
    <div>

    <button onClick={handleIncrease}>{counter}Likes</button>
    </div>
  )
}

export default Likebutton