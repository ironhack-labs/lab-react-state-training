import { useState, useEffect  } from 'react';


// 
async function importDiceImages(baseName, frames) {
    const images = {};
  
    // Import the "empty" image
    images['empty'] = (await import(`../assets/images/${baseName}-empty.png`)).default;
  
    // Dynamically create imports for each frame
    const imports = [];
    for (let i = 1; i <= frames; i++) {
      imports.push(import(`../assets/images/${baseName}${i}.png`));
    }
  
    // Wait for all imports to resolve
    // this is created with help :DDD i still have no clue how it works
    const importedImages = await Promise.all(imports);
  
    // Assign the imported images to the `images` object
    importedImages.forEach((image, index) => {
      images[index + 1] = image.default; // Images are 1-indexed based on your dice example
    });
  
    return images;
  }
  



function Dice() {
  const [currentDice, setCurrentDice] = useState();
  const [diceImages, setDiceImages] = useState({});
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    // Load all dice images on mount
    importDiceImages("dice", 6).then((images) => {
      setDiceImages(images);
      setCurrentDice(images[Math.ceil(Math.random() * 6)]); // Start with the first dice image
    });
    
  }, []); // The empty array means this effect runs once on mount

  const rollDice = async () => {
    // small trick to prevent multiple clicks, i'm pretty sure ther ere smarter methods.
    if (isRolling) return; // If a roll is already in progress, don't do anything

    setIsRolling(true); // Disable further clicks

    // Show the empty dice first
    setCurrentDice(diceImages["empty"]);

    // Simulate the dice roll after 1 second
    setTimeout(() => {
      setCurrentDice(diceImages[Math.ceil(Math.random() * 6)]);
    }, 1000);
    setTimeout(() => {
        setIsRolling(false);
    }, 2000);
  };

  if (!currentDice) {
    // If the images haven't been loaded yet return null
    return null;
  }

  return (
    <img
      src={currentDice}
      alt="Roll the dice"
      onClick={rollDice}
      style={{ cursor: "pointer", width: "100px", height: "100px" }}
    />
  );
}

export default Dice;
