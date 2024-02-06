import { useState } from "react";

function LikeButton(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
  
    return (
    
        <article>
          <button id="likebutton1" onClick={()=>setCount(count + 1)}> {count}Likes</button>
          <button id="likebutton2" onClick={()=>setCount2 (count2 + 1) }> {count2}Likes</button>
        </article>
      
    );
  }

  export default LikeButton;