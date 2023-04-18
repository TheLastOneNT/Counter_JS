import "./index.css";

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
      alert("Минимальное число - 0!");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleInc = () => {
    setCount(count + 1);
    if (count >= 15) {
      setCount(15);
      alert("Максимальное число - 15!");
    }
  };

  return (
    <div className="counter">
      <div className="menu">
        <div className="count">{count}</div>
        <div className="buttons">
          <button className="btn" onClick={handleDec}>
            Отнять
          </button>
          <button className="btn" onClick={handleReset}>
            Обнулить
          </button>
          <button className="btn" onClick={handleInc}>
            Увеличить
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
