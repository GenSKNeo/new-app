import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  // ✅ Runs only once (initial fetch)
  useEffect(() => {
    console.log("Initial load fetch...");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setData(json));
  }, []); // empty dependency array

  // ✅ Runs only once, listens for resize, cleans up on unmount
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 📝 Practice Exercise solution
  // ✅ Runs whenever "data" changes
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  return (
    <div>
      <h2>Window width: {width}px</h2>
      <h3>Users:</h3>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
