import React, { useState } from 'react';
import MaxenceGlasses from '/src/assets/images/maxence-glasses.png';
import Maxence from '/src/assets/images/maxence.png';

export default function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);
  const picChange = () => {
    setHasGlasses(!hasGlasses);
  };

  return (
    <div>
      <div id="main-content">
        <section>
          <p>{hasGlasses ? 'Maxence with glasses' : 'Maxence without glasses'}</p>
          <img
            src={hasGlasses ? MaxenceGlasses : Maxence}
            alt="Maxence"
            onClick={picChange}
            style={{ cursor: 'pointer' }}
          />
        </section>
      </div>
    </div>
  );
}
