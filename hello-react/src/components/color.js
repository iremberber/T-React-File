import React, { useState } from 'react';

function Colors() {
  const [colors, setColors] = useState(["kırmızı", "yeşil", "mavi"]);
  const difcolors = ["sarı", "gri", "beyaz", "siyah"];

  const getDifColor = () => {
    const randomIndex = Math.floor(Math.random() * difcolors.length);
    return difcolors[randomIndex]; 
  };

  const handleClick = () => {
    setColors([...colors, getDifColor()]); 
  };

  return (
    <div>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;
