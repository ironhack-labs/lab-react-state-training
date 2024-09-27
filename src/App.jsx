import "./App.css";
import Counter from "./components/Counter.jsx";
import LikeButton from "./components/LikeButton.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
import DiscoButton from "./components/DiscoButton.jsx"
import Carousel from "./components/Carousel.jsx"

function App() {
  const divButtonsStyle = {
    display: "flex",
  }

  return (
    <div className="App">
      <div style={divButtonsStyle}>
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ClickablePicture />
      </div>
      <div>
        <Dice />
      </div>
      <div style={divButtonsStyle}>
        <DiscoButton />
        <DiscoButton />
      </div>
      <div>
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
