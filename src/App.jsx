import "./App.css";
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice'; // Import the Dice component
import DiscoButton from './components/DiscoButton';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h1>Like Button Example</h1>
      <LikeButton />

      <h1>Counter Example</h1>
      <Counter />

      <h1>Clickable Picture Example</h1>
      <ClickablePicture />

      <h1>Dice Example</h1>
      <Dice />
      <DiscoButton />
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />
    </div>
  );
}

export default App;
