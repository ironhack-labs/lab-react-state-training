import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePictures.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      <div className="iteration">
        <LikeButton />
        <LikeButton />
      </div>

      <div className="iteration">
        <Counter />
      </div>

      <div className="iteration">
        <ClickablePicture />
      </div>

      <div className="iteration">
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
