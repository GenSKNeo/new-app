import { useState } from 'react';
import ProfileViewer from "./ProfileViewer";
import profiles from './profiles';
import "./ProfilesList.css";
import { Link } from "react-router-dom";

function ProfilesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("All");

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender === "All" || profile.gender === filterGender;
    return matchesSearch && matchesGender;
  });

  return (
    <div>
      <div className="navigation-buttons">
        <Link to="/contact" className="nav-button">
          Contact Us
        </Link>
        <Link to="/add-profile" className="nav-button">
          Add New Profile
        </Link>
      </div>

      <div className="filters-container">
        <div className="search-container">
          <input 
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="gender-filter">Filter by Gender: </label>
          <select 
            id="gender-filter"
            value={filterGender} 
            onChange={(e) => setFilterGender(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className="results-count">
        Showing {filteredProfiles.length} of {profiles.length} profiles
      </div>

      <div className="profiles-row">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <ProfileViewer
              key={profile.id}
              id={profile.id}
              image={profile.image}
              name={profile.name}
              age={profile.age}
              gender={profile.gender}
              email={profile.email}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No profiles found matching your criteria</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilesList;