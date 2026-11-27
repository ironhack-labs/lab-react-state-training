import {useState} from 'react';

function LikeButtons(){
   const  [count1,setCount1] = useState(0);
   const  [count2,setCount2] = useState(0);
    return (
        <>
            <button onClick = {() => setCount1(count1 + 1)}>{count1} Likes</button>
            <button onClick  = {() => setCount2(count2 + 1) }>{count2} Likes</button>
        </>
    )
}

export default LikeButtons