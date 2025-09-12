import { useState } from "react";
import ColorChanger from "./ColorChanger";
import UserProfile from "./UserProfile";  
export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p>Hello, welcome to React!</p>}
      <ColorChanger />
      <UserProfile />
    </div>
  );
}
