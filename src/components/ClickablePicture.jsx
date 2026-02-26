import React, { useState } from 'react';

function ClickablePicture() {
  const [withGlasses, setWithGlasses] = useState(false);
  const img = withGlasses
    ? '/src/assets/images/maxence-glasses.png'
    : '/src/assets/images/maxence.png';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <img
        src={img}
        alt="Clickable"
        style={{ width: 180, height: 180, borderRadius: 12, boxShadow: '0 2px 12px 0 #0001', cursor: 'pointer', border: '3px solid #228be6' }}
        onClick={() => setWithGlasses((prev) => !prev)}
      />
    </div>
  );
}

export default ClickablePicture;
