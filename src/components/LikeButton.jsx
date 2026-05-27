import { useState } from 'react';

export function LikeButton(){

    const [count, setCount]= useState(0);

    const numberOfClicks=()=>{
        setCount(count + 1)

    }
    return (
        <LikeButton onClick={numberOfClicks}>
            0 Likes

        </LikeButton>
    )








}