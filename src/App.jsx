import "./App.css";
import LikeButton from "./assets/components/LikeButton";
import Counter from "./assets/components/Counter";
import ClickablePicture from "./assets/components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <hr />
      <h2>Iteration 1:</h2>
      <LikeButton />
      <hr />
      <h2>Iteration 2:</h2>
      <Counter />
      <hr />
      <h2>Iteration 3:</h2>
      <ClickablePicture />
      <hr />
    </div>
  );
}

export default App;
