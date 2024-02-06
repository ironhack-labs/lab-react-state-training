import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      {/* Iteration 1 */}
      <div>
        <LikeButton/>
        <LikeButton/>
      </div>
      {/* Iteration 2 */}
      <div>
        <Counter/>
      </div>
      {/* Iteration 3 */}
      <div>
        <ClickablePicture/>
      </div>
      {/* Iteration 4 */}
      <div>
        <Dice />
      </div>
      {/* Iteration 5 - Bonus */}
      <div>
        <DiscoButton />
      </div>
      {/* Iteration 6 - Bonus */}
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
