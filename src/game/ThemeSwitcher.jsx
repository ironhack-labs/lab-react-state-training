import React from 'react';

const themes = [
  { name: 'Azul', color: '#228be6' },
  { name: 'Vermelho', color: '#fa5252' },
  { name: 'Verde', color: '#51cf66' },
  { name: 'Roxo', color: '#845ef7' },
  { name: 'Laranja', color: '#fab005' },
];

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div style={{ margin: '1rem 0', textAlign: 'center' }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Tema do Jogo:</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {themes.map((t) => (
          <button
            key={t.color}
            onClick={() => setTheme(t.color)}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: theme === t.color ? '3px solid #222' : '2px solid #fff',
              background: t.color,
              cursor: 'pointer',
              outline: 'none',
              boxShadow: theme === t.color ? '0 0 0 2px #222' : '0 1px 4px 0 #0001',
              transition: 'all 0.2s',
            }}
            aria-label={t.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
