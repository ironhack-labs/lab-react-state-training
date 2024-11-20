import "./App.css";
import LikeButton from './components/like-button/like-button'; // Import the LikeButton component
import Counter from './components/counter/counter';
import ClickablePicture from './components/clickable-picture/clickable-picture';
import Dice from './components/dice/dice';
import DiscoButton from './components/disco-button/disco-button';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <div className="app">
      <h1> LAB | React Training</h1>
      
      {/* Separate section for LikeButton */}
      <div className="like-section">
        <h2>Like Button</h2>
        <LikeButton />
      </div>

      {/* Separate section for Counter */}
      <div className="counter-section">
        <h2>Counter</h2>
        <Counter />
      </div>

      <div className="clickable-picture-section">
        <h2>Clickable Picture</h2>
        <ClickablePicture />
      </div>

      <div className="dice-section">
        <h2>Dice</h2>
        <Dice />
      </div>

      <div className="disco-button-section">
        <h2>Disco Button</h2>
        <DiscoButton />
      </div>

      <div className="carousel-section">
        <h2>Image Carousel</h2>
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
      </div>
    </div>
  );
  
}

export default App;
