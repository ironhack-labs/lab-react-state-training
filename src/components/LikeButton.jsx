import React, {useState} from "react";

function LikeButton(){

  const[like , setLike] = useState(0);
  const[like1 , setLike1] = useState(0);

  const increment = ()=>{
    setLike(like +1);
  }
  const increment1 = ()=>{
    setLike1(like1 +1);
  }


    return (
  <>
  
  <button onClick={increment}>Likes {like} </button>
  <button onClick={increment1}>Likes {like1} </button>
  
  </>
    );

}

export default LikeButton;