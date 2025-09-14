// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './App.css'
import ProfilesList from './SatLive/ProfileList'
// import ProfileDetails from './SatLive/ProfileDetails'
// import ControlledForm from './SatLive/ControlledForm'
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app-container">

      <div className="app-header">
        <h1>NUS User Profile demo</h1>
      </div>
      
      <div>
        <Routes>
          <Route path="/" element={<ProfilesList />} />
          {/* <Route path="/profile/:id" element={<ProfileDetails />} /> */}
          {/* <Route path="/controlledComponent" element={<ControlledForm />} /> */}
        </Routes>
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
