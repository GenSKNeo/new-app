import ProfileViewer from "./ProfileViewer.jsx";
import profiles from './profiles.js'
import { useState } from 'react';
import "./ProfileViewer.css"; // import CSS file
import "./ProfilesList.css"; // import CSS file
import { Link } from "react-router-dom";
function ProfilesList() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      {/* Centered Button */}
      <div className="button-container">
        <Link to="/controlledComponent" className="nav-button">
          Go to Controlled Component
        </Link>
      </div>

      {/* Search Box */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Profile Cards */}
      <div className="profiles-row">
        {profiles
          .filter((profile) =>
            profile.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((profile, index) => (
            <ProfileViewer
              key={index}
              id={profile.id}
              image={profile.image}
              name={profile.name}
              age={profile.age}
              gender={profile.gender}
            />
          ))}
        </div>
    </div>
  );
}

export default ProfilesList;
