import { useState, useEffect } from "react";

function App() {

  // Get the saved value from localStorage when the app starts
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counter");

    if (savedCount !== null)
    {
      return Number(savedCount);
    }

    return 0;
  });

  // Save the count to localStorage whenever it changes
  useEffect(() =>
    {
    localStorage.setItem("counter", count);
    }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;