import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <label>Email: </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>You typed: {email}</p>
    </div>
  );
}
