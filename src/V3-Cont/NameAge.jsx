import { useState } from "react";
import Greeting from "./V3-Cont/Greeting";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <label htmlFor="username">Name: </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <br />
      <label htmlFor="userage">Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Type your age"
      />
      <Greeting name={name} age={age} />
    </div>
  );
}
