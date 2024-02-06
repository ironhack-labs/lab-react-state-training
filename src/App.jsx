import './App.css'
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import LikeButton from './components/LikeButton';
import DiscoButton from './components/DiscoButton';
import Carousel from './components/Carousel';

  function App() {


    return (
      <section>
        <article>
          <h3>Like Button</h3>
          <LikeButton />
        </article>
        <article>
          <h3>Counter component</h3>
          <Counter />
        </article>
        <article>
          <h3>Clickable Picture</h3>
          <ClickablePicture />
        </article>
        <article>
          <h3>Dice</h3>
          <Dice />
        </article>
        <article>
          <h3>Dico Button</h3>
          <DiscoButton />
        </article>
        <article>
          <h3>Carousel</h3>
          <Carousel
            images={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/2.jpg"
            ]}
          />
        </article>
      </section>
    )
  }

export default App