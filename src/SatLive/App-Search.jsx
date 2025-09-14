// eslint-disable-next-line no-unused-vars

import './App.css'
import ProfilesList from './SatLive/ProfileList'
import { useState } from 'react';

let count = 0;
function App() {
  // const [count, setCount] = useState(0);

 const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app-container">
      <button 
        onClick={() => { 
          // alert("Buttin clicked!);
          console.log("Button clicked!");
          // setCount(count + 1);
          count += 1;
          console.log("Count - ", count);
          }
          }
        >Count - {count}</button>

        <div>
          <input 
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ height: "40px", width: "300px", fontSize: "16px", marginBotton: "20px"}}
          />
          <h1>{searchTerm}</h1>{}
      </div>

      <div className="app-header">
        <h1>NUS User Profile demo</h1>
      </div>
      
      <div>
        <ProfilesList />
      </div>

    <div className="instructions">
                        <h2>React Concepts Demonstrated:</h2>
                        <ul>
                            <li><strong>Components:</strong> Breaking UI into reusable pieces (App, ProfilesList, ProfileViewer)</li>
                            <li><strong>JSX:</strong> HTML-like syntax inside JavaScript</li>
                            <li><strong>Props:</strong> Passing data from parent to child components</li>
                            <li><strong>Mapping:</strong> Using map() to render lists of components</li>
                            <li><strong>Event Handling:</strong> Hover effects on profile cards</li>
                            <li><strong>Styling:</strong> CSS classes for component styling</li>
                        </ul>
                      </div>
    </div>
  )
}

export default App
