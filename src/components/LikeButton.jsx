import { useState } from "react"

function LikeButton() {
  const [counts, setCounts] = useState([0, 0]); // Dos contadores independientes

  const handleAddLike = (index) => {
    const updatedCounts = [...counts]; // Clon del array
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  return (
    <div>
      <button onClick={() => handleAddLike(0)}>{counts[0]} Likes</button>
      <button onClick={() => handleAddLike(1)}>{counts[1]} Likes</button>
    </div>
  );
}

export default LikeButton