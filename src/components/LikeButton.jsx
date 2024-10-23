import React from 'react';
import { useState } from 'react';

function LikeButton(){
    
    const [count, setCount] = useState(0);
   
    const increaseLikes = () => {
        setCount(count+1);
    };


    return (
        <>
        <button onClick={increaseLikes}>{count} likes </button>
        </>
    )
}

export default LikeButton;