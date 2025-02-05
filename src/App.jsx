import "./App.css";
import Button from "/src/components/Button.jsx"
import Counter from "/src/components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Button />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
