import React, { useState } from "react";
import Counter from "./Counter";

function LikeButton() {

    // states 
    const [likeValue, setLikeValue]= useState(0)


    //functions
    function handleLikes(){
       return setLikeValue(likeValue + 1 )
        
    }



  return (
    <div>
      
      <button onClick={handleLikes}>{likeValue} Likes</button>

         
    </div>
  );
}

export default LikeButton;
