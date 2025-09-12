function App() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const name = event.target[0].value;   // First input field
    const email = event.target[1].value;  // Second input field

    alert(`Submitted name: ${name}, email: ${email}`);
  }

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

