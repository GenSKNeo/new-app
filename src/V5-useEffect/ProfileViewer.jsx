import { useState, useEffect } from "react";

export default function App() {
  const [size, setSize] = useState(2);   // default = 2
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching with size =", size);
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${size}`)
      .then(res => res.json())
      .then(json => setData(json));
  }, [size]); // ✅ runs only when size changes

  return (
    <div>
      <h2>Profile Viewer</h2>

      {/* Dropdown for size */}
      <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>

      {/* Reset Button */}
      <button onClick={() => setSize(2)}>Reset to 2</button>

      {/* Display Users */}
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
