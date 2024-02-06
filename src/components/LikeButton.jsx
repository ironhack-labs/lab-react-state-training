import { useState } from "react";

function LikeButton() {
    
    const [count, setCount] = useState(0);
    return (
      <section>
        <article>
        <button onClick = {()=>setCount(count + 1)}>{count} Likes</button>
        </article>
      </section>
    );
  }

  export default LikeButton