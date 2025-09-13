/* 
Practice Exercise:
Create a JSON string that describes your favorite movie (title, year, genre).
Convert it to a JavaScript object with `JSON.parse`.
Convert it back to JSON text using `JSON.stringify`. 
*/

export default function App() {
// A JSON string (text)
const jsonString = '{ "name": "Alice", "age": 25, "isMember": true }';

// Convert JSON string -> JavaScript object
const user = JSON.parse(jsonString);
console.log(user.name); // Alice

// Convert JavaScript object -> JSON string
const obj = { product: "Laptop", price: 1200 };
const json = JSON.stringify(obj);
console.log(json); // {"product":"Laptop","price":1200}

  return (
    <div>
      <h1>Profile Viewer</h1>
    </div>
  );
}
