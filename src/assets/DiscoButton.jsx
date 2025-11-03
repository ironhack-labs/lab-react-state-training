import { useState } from "react";


function DiscoButton() {
    const [likeCount, setLikeCount] = useState(0);
   const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
   const [ colorindex, setColorIndex] = useState(0);

   const handleClick = () => {
    setLikeCount(prevCount => prevCount + 1);
    setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
   };

   return (
    <button onClick={handleClick}
    style={{
        backgroundColor: colors[colorindex],
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease'
    }}
    >
        {likeCount} likes
    </button>
   );



   
}
export default DiscoButton;