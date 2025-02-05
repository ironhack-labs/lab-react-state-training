import React from 'react'
import {useState} from 'react'

const LikeButton = () => {
    let [counter, setCounter] = useState(0)

    const incrementCount = ()=>{
    setCounter(counter+1);
    }
    const decrementCount = ()=>{
        if(counter > 0){
        setCounter(counter-1);}
        
        }

    return (
        <div className='buttons'>
            <button className='button' onClick={()=>{incrementCount()}}>+</button>
            <p>{counter}</p>
            <button className='button' onClick={()=>{decrementCount()}}>-</button>
        </div>
        
    )
}

export default LikeButton
