import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);

    // const [cont2, setCount2] = useState(0);
    // const handleClick2 = () => {
    //   setCount2(cont2 + 1);
    // };
  };
  return (
    <div>
      <button onClick={handleClick}> {count} Likes </button>
    </div>
  );
}

export default LikeButton;

// import React, { useState } from 'react';

// function ClickCounter() {
//     // Declare a state variable 'count' and a function to update it
//     const [count, setCount] = useState(0);

//     // Function to handle button click
//     const handleClick = () => {
//         setCount(count + 1); // Increment the count
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>{count}</button> {/* Display the count on the button */}
//         </div>
//     );
// }

// export default ClickCounter;
