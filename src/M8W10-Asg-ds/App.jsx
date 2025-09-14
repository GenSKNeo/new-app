import { useState, useEffect } from "react";
import "./App.css";

// Task 1: Toggle Message
function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h2>Task 1: Toggle Message</h2>
      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p>Hello, welcome to React!</p>}
    </div>
  );
}

// Task 2: Color Changer
function ColorChanger() {
  const [color, setColor] = useState("lightgray");

  return (
    <div className="card">
      <h2>Task 2: Color Changer</h2>
      <input
        type="text"
        placeholder="Enter a color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="color-box" style={{ backgroundColor: color }} />
    </div>
  );
}

// Task 3: User Profile (Data Fetching)
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <h2>Task 3: User Profile</h2>
      {loading ? (
        <p className="loading">Loading user data...</p>
      ) : (
        <div className="fade-in">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="App">
      <h1>React Tasks Combined</h1>
      <div className="cards-container">
        <ToggleMessage />
        <ColorChanger />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
