import React from 'react';

function GameControls({ onNext, onReset, winner, activePlayer }) {
  return (
    <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
      {winner === null ? (
        <button onClick={onNext} style={{
          background: '#fab005',
          color: '#222',
          border: 'none',
          borderRadius: 8,
          padding: '0.7rem 1.5rem',
          fontWeight: 700,
          fontSize: 16,
          marginRight: 12,
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 #fab00533',
        }}>
          Passar para {activePlayer === 0 ? 'Player 2' : 'Player 1'}
        </button>
      ) : (
        <span style={{ fontWeight: 700, fontSize: 18, color: '#51cf66', marginRight: 12 }}>
          🎉 Player {winner + 1} venceu!
        </span>
      )}
      <button onClick={onReset} style={{
        background: '#868e96',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        padding: '0.7rem 1.5rem',
        fontWeight: 700,
        fontSize: 16,
        cursor: 'pointer',
        boxShadow: '0 2px 8px 0 #868e9633',
      }}>
        Reiniciar Jogo
      </button>
    </div>
  );
}

export default GameControls;
