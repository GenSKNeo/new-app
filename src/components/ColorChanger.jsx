import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("lightgray");

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter a color" 
        onChange={(e) => setColor(e.target.value)} 
      />
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
    </div>
  );
}
