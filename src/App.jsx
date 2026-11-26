import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h2>Like Button</h2>
      <LikeButton />
      <LikeButton />

      <h2>Counter</h2>
      <Counter />
    </div>
  );
}

export default App;
