import { useState, useRef } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const nameRef = useRef(null);   // ref for name input
  const colorRef = useRef(null);  // ref for color input

  function handleUpdate() {
    setName(nameRef.current.value);
    setColor(colorRef.current.value);
  }

  return (
    <div>
      <input ref={nameRef} placeholder="Type your name" />
      <input ref={colorRef} placeholder="Type your favorite color" />

      <button onClick={handleUpdate}>Show Greeting</button>

      <h2>
        Hi {name}, your favorite color is {color}.
      </h2>
    </div>
  );
}
