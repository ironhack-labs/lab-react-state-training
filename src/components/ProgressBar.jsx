import React, { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(50);

  const handleChange = (e) => {
    setProgress(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>Progress Bar</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
        style={{ width: 200 }}
      />
      <div style={{ margin: '1rem 0', height: 24, width: 220, background: '#eee', borderRadius: 12, overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#0074D9', transition: 'width 0.3s' }} />
      </div>
      <p>{progress}%</p>
    </div>
  );
}

export default ProgressBar;
