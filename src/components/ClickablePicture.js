
import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
    />
  );
};

export default ClickablePicture;
