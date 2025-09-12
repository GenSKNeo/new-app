function SearchUsers({ users }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(users);

  function handleSearch(e) {
    e.preventDefault();
    setResults(users.filter(u => u.name.toLowerCase().includes(term.toLowerCase())));
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {results.map((u, i) => <p key={i}>{u.name}</p>)}
    </div>
  );
}
