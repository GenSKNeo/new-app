import { useState } from "react";
import ProfileCard from "./V2/ProfileCard";

function App() {
  const profiles = [
    { id: 1, name: "Alice", age: 25, bio: "Loves hiking and cats." },
    { id: 2, name: "Bob", age: 30, bio: "Enjoys coding and coffee." },
    { id: 3, name: "Charlie", age: 28, bio: "Avid reader and gamer." },
    { id: 4, name: "Diana", age: 22, bio: "Passionate about art and music." },
    { id: 5, name: "Ethan", age: 35, bio: "Travel enthusiast and foodie." },
    { id: 6, name: "Fiona", age: 27, bio: "Fitness lover and tech geek." }, 
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div>
      <h1>Profile Viewer</h1>

      {/* Dynamically generate one button per profile */}
      {profiles.map((profile, i) => (
        <button key={profile.id} onClick={() => setIndex(i)}>
          {profile.name}
        </button>
      ))}

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
