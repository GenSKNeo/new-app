import { useState } from "react";
import ProfileCard from "./V2/ProfileCard";

function App() {
  const profiles = [
    { id: 1, name: "Alice", age: 25, bio: "Loves hiking and cats." },
    { id: 2, name: "Bob", age: 30, bio: "Enjoys coding and coffee." },
    { id: 3, name: "Charlie", age: 28, bio: "Avid reader and gamer." },
  ];

  // store index instead of object
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div>
      <h1>Profile Viewer</h1>

      <button onClick={() => setIndex(0)}>Alice</button>
      <button onClick={() => setIndex(1)}>Bob</button>
      <button onClick={() => setIndex(2)}>Charlie</button>

      <button onClick={handleNext}>Next Profile</button>

      <ProfileCard
        name={profiles[index].name}
        age={profiles[index].age}
        bio={profiles[index].bio}
      />
    </div>
  );
}

export default App;
