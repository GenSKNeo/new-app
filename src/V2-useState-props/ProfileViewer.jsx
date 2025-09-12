import { useState } from "react";
import ProfileCard from "./V2/ProfileCard";

function App() {
  const profiles = [
    { id: 1, name: "Alice", age: 25, bio: "Loves hiking and cats." },
    { id: 2, name: "Bob", age: 30, bio: "Enjoys coding and coffee." },
    { id: 3, name: "Charlie", age: 28, bio: "Avid reader and gamer." },

  ];

  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  return (
    <div>
      <h1>Profile Viewer</h1>
      <button onClick={() => setSelectedProfile(profiles[0])}>Alice</button>
      <button onClick={() => setSelectedProfile(profiles[1])}>Bob</button>
      <button onClick={() => setSelectedProfile(profiles[2])}>Charlie</button>

      <ProfileCard
        name={selectedProfile.name}
        age={selectedProfile.age}
        bio={selectedProfile.bio}
      />
    </div>
  );
}

export default App;
