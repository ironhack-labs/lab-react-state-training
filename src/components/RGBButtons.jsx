import React, { useState } from 'react';

const colors = [
  { name: 'Red', value: 'red' },
  { name: 'Green', value: 'green' },
  { name: 'Blue', value: 'blue' },
];

function RGBButtons() {
  const [selected, setSelected] = useState('red');

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>RGB Buttons</h2>
      <div>
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelected(color.value)}
            style={{
              background: selected === color.value ? color.value : '#eee',
              color: selected === color.value ? '#fff' : '#222',
              margin: '0 8px',
              border: selected === color.value ? '2px solid #222' : '1px solid #ccc',
              borderRadius: 4,
              padding: '8px 16px',
              fontWeight: selected === color.value ? 'bold' : 'normal',
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <p style={{ marginTop: 12 }}>Cor selecionada: <b>{selected}</b></p>
    </div>
  );
}

export default RGBButtons;
