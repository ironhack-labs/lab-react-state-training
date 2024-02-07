import { useState } from "react";

function LikeButton() {
   
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
      return (
        <section>
      <article>
       
            <button onClick={()=>setCount(count + 1)}>{count} Likes</button>
            <button onClick={()=>setCount2(count2 + 1)}>{count2}Likes</button>
            </article>
            </section>
        

    
        )
    }
    export default LikeButton;


  






















