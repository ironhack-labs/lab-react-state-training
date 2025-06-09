import { useState } from "react";


function Counter() {

    const [like, setLike] = useState(0)

    const handleClicMas = () => {
        setLike(like + 1)
    }

    const handleClickMenos = () => {
        setLike(like - 1)
    }

  return (
    <div>
      <button onClick={handleClicMas}>+</button>
      <h3>{like}</h3>
      <button onClick={handleClickMenos}>-</button>
    </div>
  );
}

export default Counter;
