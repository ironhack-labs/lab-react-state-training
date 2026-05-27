import { useState } from 'react';

export function LikeButton(){

    const [count, setCount]= useState(0);

    function numberOfClicks(){
        setCount(count+1);

    }
    
    return (
        <button onClick={numberOfClicks}>
           {count} Likes

        </button>
    )








}