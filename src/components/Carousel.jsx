import './App.css';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <h1>React State Training</h1>
      <LikeButton />
      <Counter />
      <Dice />
    </div>
  );
}

export default App;
