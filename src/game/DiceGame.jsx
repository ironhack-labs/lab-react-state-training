import React, { useState } from 'react';
import Dice from './Dice';
import ScoreBoard from './ScoreBoard';
import ProgressBar from './ProgressBar';
import ThemeSwitcher from './ThemeSwitcher';
import GameControls from './GameControls';
import Carousel from '../components/Carousel';
import ClickablePicture from '../components/ClickablePicture';

const TARGET_SCORE = 20;

function DiceGame() {
  const [scores, setScores] = useState([0, 0]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [theme, setTheme] = useState('#228be6');
  const [winner, setWinner] = useState(null);

  const handleRoll = () => {
    setRolling(true);
    setDice(null); // mostra dado vazio
    setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1;
      setDice(value);
      setScores((prev) => {
        const newScores = [...prev];
        newScores[activePlayer] += value;
        if (newScores[activePlayer] >= TARGET_SCORE) {
          setWinner(activePlayer);
        }
        return newScores;
      });
      setRolling(false);
    }, 1000);
  };

  const handleNext = () => {
    setActivePlayer((prev) => (prev === 0 ? 1 : 0));
    setDice(1);
  };

  const handleReset = () => {
    setScores([0, 0]);
    setActivePlayer(0);
    setDice(1);
    setWinner(null);
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 18,
      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
      padding: '2rem 1rem',
      maxWidth: 420,
      margin: '2rem auto',
      border: `3px solid ${theme}`,
      transition: 'border 0.3s',
    }}>
      <h2 style={{ textAlign: 'center', color: theme, fontWeight: 800, marginBottom: 18 }}>🎲 Dice Game</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      <ClickablePicture />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <ScoreBoard scores={scores} activePlayer={activePlayer} target={TARGET_SCORE} />
      <ProgressBar scores={scores} target={TARGET_SCORE} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        {[0, 1].map((i) => (
          <Dice
            key={i}
            value={activePlayer === i ? dice : '-'}
            rolling={activePlayer === i && rolling}
            onRoll={activePlayer === i && !winner ? handleRoll : undefined}
            color={theme}
          />
        ))}
      </div>
      <GameControls
        onNext={winner === null ? handleNext : undefined}
        onReset={handleReset}
        winner={winner}
        activePlayer={activePlayer}
      />
    </div>
  );
}

export default DiceGame;
