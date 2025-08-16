import {useState} from 'react';
import LikeButton from './LikeButton';

function DiscoButton() {
  const styleColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [color, setColor] = useState(0);

  const nextColor = () => {
    setColor((index) => (index >= styleColors.length - 1 ? 0 : index + 1));
  };

  return (
    <LikeButton
      style={{
        backgroundColor: styleColors[color],
        fontSize: '20px',
        padding: '10px',
      }}
      onClick={nextColor}
    />
  );
}

export default DiscoButton;
