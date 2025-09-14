import { useState } from 'react';
import './App.css';
import ProfilesList from './SatLive2/ProfilesList';
import ProfileDetails from './SatLive2/ProfileDetails';
import ControlledForm from './SatLive2/ControlledForm';
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="app-header">
        <h1>NUS User Profile Demo</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProfilesList />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="/contact" element={<ControlledForm />} />
          <Route path="/add-profile" element={<ControlledForm isProfileForm={true} />} />
        </Routes>
      </div>
    
      <div className="instructions">
        <h2>React Concepts Demonstrated:</h2>
        <ul>
          <li><strong>Components:</strong> Breaking UI into reusable pieces (App, ProfilesList, ProfileViewer)</li>
          <li><strong>JSX:</strong> HTML-like syntax inside JavaScript</li>
          <li><strong>Props:</strong> Passing data from parent to child components</li>
          <li><strong>State:</strong> Managing dynamic data with useState hook</li>
          <li><strong>Mapping:</strong> Using map() to render lists of components</li>
          <li><strong>Event Handling:</strong> Responding to user interactions</li>
          <li><strong>Routing:</strong> Navigating between different views</li>
          <li><strong>Forms:</strong> Creating controlled form components</li>
          <li><strong>Styling:</strong> CSS classes for component styling</li>
        </ul>
      </div>
    </div>
  );
}

export default App;