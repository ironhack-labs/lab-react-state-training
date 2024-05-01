import { useState } from "react";

export default function Carousel({images}) {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex( prev => (prev - 1 + 4) % 4)
  };

  const handleNext = () => {
    setIndex( prev => (prev + 1) % 4)
  };

  return (
    <div>
      <button onClick={handlePrevious} >Left</button>
      <img src={images[index]} alt="dice"  />
      <button onClick={handleNext}><Right></Right></button>
    </div>
  );
}
