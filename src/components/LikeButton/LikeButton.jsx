import styles from "./LikeButton.module.css";
import { useState } from "react";

const LikeButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      {counter} Likes
    </button>
  );
};

export default LikeButton;
