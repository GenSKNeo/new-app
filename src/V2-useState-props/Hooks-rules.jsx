import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // show only if both have non-empty values (trim to ignore whitespace)
  //const showGreeting = name.trim() !== "";
  // X WrongL This updates state every render -> infinite loop
  // setCount(count + 1);
  const showGreeting = name.trim() !== "" && count > 0;

  
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
         <button type="button" onClick={() => setCount(prev => prev + 1)}>
          Increment
         </button>

        {showGreeting && (
        <h2> Hi {name}, your count is {count}.</h2>
      )}
    </div>
  );
}

export default App;