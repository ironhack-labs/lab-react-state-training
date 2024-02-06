import React, { useState, useEffect } from 'react';

function  Dice()  {
  // Zarın değerini saklamak için state tanımla
  const [diceValue, setDiceValue] = useState(null);

  // Zarın resimlerini saklamak için dizi tanımla
  const diceImages = [
    '../assets/images/dice1.png',
    '../assets/images/dice2.png',
    '../assets/images/dice3.png',
    '../assets/images/dice4.png',
    '../assets/images/dice5.png',
    '../assets/images/dice6.png',
  ];

  // Zarın boş resmini göstermek için state tanımla
  const [emptyImage, setEmptyImage] = useState('../assets/images/dice-empty.png');

  // Zarın resmini değiştirmek için fonksiyon
  const changeDiceValue = () => {
    // Boş resmi göster
    setDiceValue(emptyImage);

    // 1 saniye sonra yeni bir random resmi göster
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceValue(diceImages[randomIndex]);
    }, 1000);
  };

  // Component yüklendiğinde ve diceImages değiştiğinde changeDiceValue fonksiyonunu çağır
  useEffect(() => {
    changeDiceValue();
  }, [diceImages]);

  return (
    <div>
      {/* Tıklanabilir zar resmi */}
      <img
        src={diceValue}
        alt="Dice"
        onClick={changeDiceValue}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Dice;
