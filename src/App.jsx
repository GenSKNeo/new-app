import { useState, useEffect } from 'react';
import './App.css';
import ProfilesList from './SatLive4/ProfilesList';
import ProfileDetails from './SatLive4/ProfileDetails';
import ControlledForm from './SatLive4/ControlledForm';
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API when component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=12&nat=us,gb,ca,au');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const refreshUsers = () => {
    fetchUsers();
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="app-header">
        <div>
          <h1>User Profile Viewer</h1>
          <p>Real users fetched from RandomUser API</p>
        </div>
        <div className="header-controls">
          <button onClick={refreshUsers} className="refresh-button">
            Refresh Users
          </button>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      
      <div className="main-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading users from API...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<ProfilesList users={users} />} />
            <Route path="/profile/:id" element={<ProfileDetails users={users} />} />
            <Route path="/contact" element={<ControlledForm />} />
          </Routes>
        )}
      </div>
    
      <div className="instructions">
        <h2>React Concepts Demonstrated:</h2>
        <ul>
          <li><strong>API Integration:</strong> Fetching real user data from RandomUser API</li>
          <li><strong>useState & useEffect:</strong> Managing state and side effects</li>
          <li><strong>Components:</strong> Breaking UI into reusable pieces</li>
          <li><strong>JSX:</strong> HTML-like syntax inside JavaScript</li>
          <li><strong>Props:</strong> Passing data from parent to child components</li>
          <li><strong>State:</strong> Managing dynamic data with useState hook</li>
          <li><strong>Mapping:</strong> Using map() to render lists of components</li>
          <li><strong>Event Handling:</strong> Responding to user interactions</li>
          <li><strong>Routing:</strong> Navigating between different views</li>
          <li><strong>Conditional Rendering:</strong> Showing loading states</li>
          <li><strong>Live API Integration:</strong> Fetches real user data from RandomUser API instead of static data</li>
          <li><strong>Loading States:</strong> Shows a loading spinner while data is being fetched</li>
          <li><strong>Enhanced User Details:</strong> Displays comprehensive user information from the API response</li>
          <li><strong>Improved Filtering:</strong> Added sorting options and enhanced filtering capabilities</li>
          <li><strong>Better Error Handling:</strong> Added proper error handling for API requests</li>
          <li><strong>Responsive Design:</strong> Improved responsive layout for various screen sizes</li>
          <li><strong>Real-world Features:</strong> Added features like registration date, location details, etc.</li>


        </ul>
      </div>
    </div>
  );
}

export default App;