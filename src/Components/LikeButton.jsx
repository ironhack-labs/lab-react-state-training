import { useState } from 'react'

function LikeButton(){

    const [likeOne, setLikeOne] = useState(0);
    const [likeTwo, setLikeTwo] = useState(0);

    const [color, useColor] = useState(["purple", "blue", "green", "yellow", "orange", "red"]);

    function handleButtonOne(){
        if(likeOne >= 0){
            setLikeOne(likeOne + 1);
        }
        
        if(likeOne === 5){
            setLikeOne(0)
        }
    }

    function handleButtonTwo(){
        if(likeTwo >= 0){
            setLikeTwo(likeTwo + 1);
        }
        
        if(likeTwo === 5){
            setLikeTwo(0)
        }
    }

    return(
        <div>
            <button style={{backgroundColor: color[likeOne]}} type="button" onClick={handleButtonOne}>{likeOne} Likes</button>
            <button style={{backgroundColor: color[likeTwo]}} type="button" onClick={handleButtonTwo}>{likeTwo} Likes</button>
        </div>
    );
}

export default LikeButton