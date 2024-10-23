import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h2>Iteration 1</h2>

      <LikeButton />

      <h2>Iteration 2</h2>

      <Counter />

      <h2>Iteration 3</h2>

      <ClickablePicture />

    </div>
  );
}

export default App;
