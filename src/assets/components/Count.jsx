import {useState} from "react";
import "./count.css";

export default function Count() {
  const [count, setCount] = useState(0);

  const minHandler = () => {
    setCount(count - 1);
  };

  const plusHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="counter">
        <h2>{count}</h2>
        <div className="count-buttons">
          <button className="minBtn" onClick={minHandler}>
            -
          </button>
          <button className="plusBtn" onClick={plusHandler}>
            +
          </button>
        </div>
        <div className="count-reset">
          <button className="resetBtn" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
