import "./App.css";
import LikeButtons from "./components/LikeButtons";
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButtons />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
