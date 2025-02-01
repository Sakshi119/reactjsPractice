import React, { useState } from "react";
import "./counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => { setCount(count + 1) };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>Simple Counter App</h1>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <div className="buttons">
          <button onClick={increment} >Increment</button>
          <button onClick={decrement} className={count === 0 ? "disabled" : ""}>Decrement</button>
          <button onClick={reset} className={count === 0 ? "disabled" : ""}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;