import LikeButton from './assets/components/LikeButton.jsx';
import Counter from './assets/components/Counter.jsx';
import ClickablePicture from './assets/components/ClickablePicture.jsx';
import Dice from './assets/components/Dice.jsx'; // Importar el nuevo componente Dice

function App() {
  return (
    <div>
      <h1>¡Bienvenido al juego de dados!</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
