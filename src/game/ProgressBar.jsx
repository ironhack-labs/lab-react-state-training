import React from 'react';

function ProgressBar({ scores, target }) {
  const percent = [
    Math.min((scores[0] / target) * 100, 100),
    Math.min((scores[1] / target) * 100, 100),
  ];
  return (
    <div style={{ width: '100%', margin: '1rem 0' }}>
      <div style={{ display: 'flex', height: 18, background: '#e9ecef', borderRadius: 9, overflow: 'hidden' }}>
        <div style={{ width: `${percent[0]}%`, background: '#228be6', transition: 'width 0.3s' }} />
        <div style={{ width: `${percent[1]}%`, background: '#fa5252', transition: 'width 0.3s' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 2 }}>
        <span style={{ color: '#228be6' }}>P1: {scores[0]}</span>
        <span style={{ color: '#fa5252' }}>P2: {scores[1]}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
