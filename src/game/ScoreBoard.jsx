import React from 'react';

function ScoreBoard({ scores, activePlayer, target }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1.5rem 0',
      gap: 16,
    }}>
      {[0, 1].map((i) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: activePlayer === i ? '#ffe066' : '#f1f3f5',
            borderRadius: 12,
            padding: '1rem 0.5rem',
            boxShadow: activePlayer === i ? '0 2px 12px 0 #ffe06655' : 'none',
            border: activePlayer === i ? '2px solid #fab005' : '1px solid #dee2e6',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 18,
            transition: 'all 0.3s',
          }}
        >
          <div style={{ fontSize: 15, marginBottom: 6 }}>Player {i + 1}</div>
          <div style={{ fontSize: 32 }}>{scores[i]}</div>
          <div style={{ fontSize: 12, color: '#888' }}>Goal: {target}</div>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
