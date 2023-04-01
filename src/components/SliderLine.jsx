import React, { useState } from 'react';

function SliderLine() {
  const [value, setValue] = useState(20);

  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 20);
    }
  };

  const handleIncrease = () => {
    if (value < 100) {
      setValue((value + 20));
    }
  };

  return (
    <div>
      <div style={{ width: '200px', height: '5px', backgroundColor: 'gray' }}>
        <div style={{ width: `${value}%`, height: '5px', backgroundColor: 'blue' }} />
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        <span>{value}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}

export default SliderLine;