import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
import DiscoButton from "./components/DiscoButton.jsx";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <section>
      <Counter />
      </section>
      <section>
        <ClickablePicture />
      </section>
      <section>
        <Dice />
      </section>
      <section>
        <DiscoButton />
        <DiscoButton />
      </section>
    </div>
  );
}

export default App;
