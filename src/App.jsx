import "./App.css";
import LikeButton from "./components/Like";
import Counter from "./components/Counter";

const [counter, setCounter] = useState(0);

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />

    </div>
  );
}

export default App;
