import {useState} from 'react';

function Carousel({images}) {
  const [current, setCurrent] = useState(0);
  const decreaseNumber = () => (current === 0 ? 0 : setCurrent(current - 1));
  const increaseNumber = () =>
    current === images.length - 1 ? 0 : setCurrent(current + 1);
  return (
    <div>
      <button disabled={current === 0 && true} onClick={decreaseNumber}>
        Left
      </button>
      <img src={`${images[current]}`}></img>
      <button
        disabled={current === images.length - 1 && true}
        onClick={increaseNumber}
      >
        Right
      </button>
    </div>
  );
}
export default Carousel;
