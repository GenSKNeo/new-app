import { useState, useRef } from "react";

export default function App() {
  // Controlled state: React tracks name, email, and age
  const [profile, setProfile] = useState({ name: "", email: "", age: "" });

  // Uncontrolled: useRef for favoriteColor and hobby
  const colorRef = useRef(null);
  const hobbyRef = useRef(null);

  const handleSubmit = () => {
    // Combine controlled state with values read from uncontrolled refs
    setProfile({
      ...profile,
      favoriteColor: colorRef.current.value,
      hobby: hobbyRef.current.value,
    });
  };

  return (
    <div>
      <h1>Profile Viewer</h1>

      {/* Controlled inputs: React manages these values */}
      <input
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        placeholder="Name"
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        placeholder="Email"
      />
      <input
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
        placeholder="Age"
        type="number"
      />

      {/* Uncontrolled inputs: DOM manages these values */}
      <input ref={colorRef} placeholder="Favorite Color" />
      <input ref={hobbyRef} placeholder="Hobby" />

      <button onClick={handleSubmit}>Save Profile</button>

      {/* Display profile only when name is entered */}
      {profile.name && (
        <div>
          <h2>Hi {profile.name}!</h2>
          <p>Email: {profile.email}</p>
          <p>Age: {profile.age}</p>
          <p>Favorite Color: {profile.favoriteColor}</p>
          <p>Hobby: {profile.hobby}</p>
        </div>
      )}
    </div>
  );
}
