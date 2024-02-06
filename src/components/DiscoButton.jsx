import { useState } from "react";



function DiscoButton() {
    
    let colorArr = ["purple", "blue", "green", "yellow", "orange", "red"]
    
    const [count, setCount] = useState(0);
    const [colors, setColor] = useState(colorArr[0]);

   
    return (
      <section>
        <article>
        <button style={{background: `${colors}`}} onClick = {()=>{setCount(count + 1); setColor(colorArr[Math.floor(Math.random() * colorArr.length)])}}>{count} Likes</button>
        </article>
      </section>
    );
  }

  export default DiscoButton