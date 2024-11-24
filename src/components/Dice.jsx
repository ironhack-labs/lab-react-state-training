function Dice() {
    function getRandomDiceImage() {
      const diceNumbers = [1, 2, 3, 4, 5, 6];
      const randomNumber = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
      return `/src/assets/images/dice${randomNumber}.png`;
    }
  
    const initialSrc = getRandomDiceImage();
  
    function handleClick(event) {
      event.target.src = '/src/assets/images/dice-empty.png';
  
      setTimeout(() => {
        event.target.src = getRandomDiceImage();
      }, 1000);
    }
  
    return (
      <img
        src={initialSrc}
        alt="Dice"
        style={{ cursor: 'pointer', width: '200px', height: 'auto' }}
        onClick={handleClick}
      />
    );
  }
  
  export default Dice;  