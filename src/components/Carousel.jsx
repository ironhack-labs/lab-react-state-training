import React, { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goLeft = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goRight = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '2rem 0',
    }}>
      <div style={{
        width: 220,
        height: 220,
        background: '#f1f3f5',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        boxShadow: '0 2px 12px 0 #0001',
      }}>
        <img
          src={images[index]}
          alt={`carousel-${index}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ display: 'flex', width: 220, justifyContent: 'space-between' }}>
        <button onClick={goLeft} style={{ padding: '0.5rem 1.2rem', fontWeight: 600 }}>Left</button>
        <button onClick={goRight} style={{ padding: '0.5rem 1.2rem', fontWeight: 600 }}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
