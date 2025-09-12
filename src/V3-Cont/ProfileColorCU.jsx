import { useState, useRef } from "react";

export default function App() {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const colorRef = useRef(null);

  const handleSubmit = () => {
    setProfile({
      ...profile,
      favoriteColor: colorRef.current.value,
    });
  };

  return (
    <div>
      <h1>Profile Viewer</h1>

      {/* Controlled */}
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

      {/* Uncontrolled */}
      <input ref={colorRef} placeholder="Favorite Color" />

      <button onClick={handleSubmit}>Save Profile</button>

      {profile.name && (
        <div>
          <h2>Hi {profile.name}!</h2>
          <p>Email: {profile.email}</p>
          <p>Favorite Color: {profile.favoriteColor}</p>
        </div>
      )}
    </div>
  );
}
