import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

    function handleInc() {
    setCount(count + 1);
    console.log("count is now :", count);}


    function handleDec() {
    setCount(count - 1);
    console.log("count is now :", count);
  }
      function handleRes() {
    setCount(0);
    console.log("count is now :", count);
  }





  return (
    <div className="container">
      <div className="counter-box">
        <h1>{count}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleRes}>RESET</button>
      </div>
    </div>
  );
}

export default Counter;