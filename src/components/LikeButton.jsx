import { useState } from 'react';

function LikeButton() {
  console.log('this functions is invoked....');

  //
  // const [something, setSomething] = useState(initialValue);
  //

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
   counter = counter + 1;
    setCounter(counter);
  };

  return (
    <header>
      <button onClick={increaseCounter} >{counter} Likes </button> 
    </header>
  );
}

export default LikeButton;
