import React, { useState } from 'react';

const themes = {
  light: {
    background: '#fff',
    color: '#222'
  },
  dark: {
    background: '#222',
    color: '#fff'
  },
  blue: {
    background: '#0074D9',
    color: '#fff'
  }
};

function ThemeSelector() {
  const [theme, setTheme] = useState('light');

  return (
    <div style={{ ...themes[theme], padding: 20, borderRadius: 8, textAlign: 'center', margin: '2rem 0' }}>
      <h2>Theme Selector</h2>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setTheme('light')} style={{ marginRight: 8 }}>Light</button>
        <button onClick={() => setTheme('dark')} style={{ marginRight: 8 }}>Dark</button>
        <button onClick={() => setTheme('blue')}>Blue</button>
      </div>
      <p>O tema atual é: <b>{theme}</b></p>
    </div>
  );
}

export default ThemeSelector;
