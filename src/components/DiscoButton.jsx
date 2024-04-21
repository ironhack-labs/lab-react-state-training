import React from "react";
import { useState } from "react";

const colors = [
  "white",
  "blue",
  "purple",
  "lightblue",
  "orange",
  "red",
  "yellow",
  "green",
  "pink",
];

function DiscoButton() {
  const [count, setCount] = useState(0);
  return (
    <div className="discobutton">
      <h2> Bonus Iteration 5 - Disco Button</h2>
      <button
        style={{
          background: colors[count % colors.length],
          color: "black",
          fontSize: "20px",
          padding: "10px",
          marginBottom: "10%",
        }}
        onClick={() => setCount(count + 1)}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default DiscoButton;

//   //tried with random but did not work :(
//   let randomIndexColors = Math.floor(Math.random() * colors.length);

//   const rollColors = () => {
//     setCurrentColor(colors[randomIndexColors]);
//   };

//   return (
//     <div className="color-buttons-container">
//       <h2>Bonus - Iteration 5 - disco buttons</h2>
//       <button
//         style={{
//           background: { rollColors },
//           color: "black",
//           fontsize: "1em",
//           margin: "10%",
//         }}
//         onClick={() => {
//           setCount((prevCount) => prevCount + 1);
//         }}
//       >
//         {count} Likes
//       </button>
//     </div>
//   );
// }

// export default DiscoButton;
