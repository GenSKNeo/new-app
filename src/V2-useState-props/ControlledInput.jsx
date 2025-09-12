import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // start empty so we can require both fields

  // show only if both have non-empty values (trim to ignore whitespace)
  const showGreeting = name.trim() !== "" && age.trim() !== "";

  return (
    <div>
      <label htmlFor="username">Name: </label>
      <input
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="userage">Age: </label>
      <input
        id="userage"
        type="number"
        min="0"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      {showGreeting && (
        <h2>
          Hello, {name}. You are {age} {Number(age) === 1 ? "year" : "years"} old.
        </h2>
      )}
    </div>
  );
}

export default App;
