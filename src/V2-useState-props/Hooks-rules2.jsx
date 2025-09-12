import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const showGreeting = name.trim() !== "";

  const handleIncrement = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : 10)); // ✅ capped at 10
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0)); // ✅ stops at 0
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <label htmlFor="username">Name: </label>
      <input
        id="username"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <h3>Count: {count}</h3>

      <button 
        type="button" 
        onClick={handleIncrement} 
        disabled={count >= 10} // ❌ disabled when max reached
      >
        Increment
      </button>

      <button 
        type="button" 
        onClick={handleDecrement} 
        disabled={count <= 0} // ❌ disabled when at 0
      >
        Decrement
      </button>

      <button 
        type="button" 
        onClick={handleReset} 
        disabled={count === 0} // ❌ disabled if already 0
      >
        Reset
      </button>

      {showGreeting && (
        <h2>
          Hi {name}, your count is {count}.
        </h2>
      )}
    </div>
  );
}

export default App;
