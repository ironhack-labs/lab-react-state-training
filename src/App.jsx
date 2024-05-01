import "./App.css";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import ClickOnImage from "./components/ClickablePicture/ClickablePicture";
import ThrowDice from "./components/Dice/Dice"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <Counter />
      <Counter2 />
      <ClickOnImage />
      <ThrowDice />

    </div>
  );
}

export default App;
