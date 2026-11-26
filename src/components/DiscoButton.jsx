import { useState } from "react";

function DiscoButton() {
  const [count, setCount] = useState(0);

  const colours = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLike = () => {
    setCount(count + 1);
  };

  const styles = {
    backgroundColor: colours[count % colours.length]
  };

  return (
    <button onClick={handleLike} style={styles}>
      {count} Likes
    </button>
  );
}

export default DiscoButton;