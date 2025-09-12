function Welcome() {
  return <p>Welcom to React!</p>;
}

function Greeting() {
  return <p>Hello, World!</p>;
}

function App(){
  return (
    <div>
      <h1>Hello React 👋</h1>
      <Welcome />
      <Greeting />
    </div>
  );

}
export default App;