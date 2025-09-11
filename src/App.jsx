import { useState } from "react";
import ColorChanger from "./components/ColorChanger";
import UserProfile from "./components/UserProfile";  
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