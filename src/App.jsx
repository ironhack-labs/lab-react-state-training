import Counter from './components/counter'
import "./App.css";
import ChangeImage from './components/picture';
import RollDice from "./components/dice"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Counter/>
      <ChangeImage/>
      <RollDice/>
    </div>
  );
}

export default App;
