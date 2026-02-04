
import React from 'react';

const diceImages = [
  '/src/assets/images/dice1.png',
  '/src/assets/images/dice2.png',
  '/src/assets/images/dice3.png',
  '/src/assets/images/dice4.png',
  '/src/assets/images/dice5.png',
  '/src/assets/images/dice6.png',
];

function Dice({ value, rolling, onRoll, color }) {
  let imgSrc = '';
  if (rolling) {
    imgSrc = '/src/assets/images/dice-empty.png';
  } else if (typeof value === 'number' && value >= 1 && value <= 6) {
    imgSrc = diceImages[value - 1];
  } else {
    imgSrc = '/src/assets/images/dice-empty.png';
  }

  return (
    <div style={{ textAlign: 'center', margin: '1rem' }}>
      <div
        style={{
          width: 70,
          height: 70,
          margin: '0 auto 0.5rem auto',
          background: color,
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px 0 rgba(0,0,0,0.10)',
          transition: 'background 0.3s',
          border: '3px solid #fff',
          animation: rolling ? 'shake 0.4s' : 'none',
        }}
      >
        <img src={imgSrc} alt={typeof value === 'number' ? `Dice ${value}` : 'Dice'} style={{ width: 48, height: 48 }} />
      </div>
      <button onClick={onRoll} disabled={rolling} style={{ marginTop: 8 }}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
      <style>{`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

export default Dice;
