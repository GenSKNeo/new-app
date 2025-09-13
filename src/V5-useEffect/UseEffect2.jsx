function App() {
  const [count, setCount] = useState(0);

  // ❌ This is BAD: runs on every render
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log("Fetched:", data));

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
