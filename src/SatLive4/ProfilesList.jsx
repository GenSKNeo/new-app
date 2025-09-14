import { useState } from 'react';
import ProfileViewer from "./ProfileViewer";
import "./ProfilesList.css";
import { Link } from "react-router-dom";

function ProfilesList({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredUsers = users.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const matchesSearch = fullName.includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender === "All" || user.gender === filterGender;
    return matchesSearch && matchesGender;
  });

  // Sort users based on selected option
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`);
    } else if (sortBy === "age") {
      return a.dob.age - b.dob.age;
    } else if (sortBy === "country") {
      return a.location.country.localeCompare(b.location.country);
    }
    return 0;
  });

  return (
    <div>
      <div className="navigation-buttons">
        <Link to="/contact" className="nav-button">
          Contact Us
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
          <label htmlFor="gender-filter">Gender: </label>
          <select 
            id="gender-filter"
            value={filterGender} 
            onChange={(e) => setFilterGender(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort-by">Sort by: </label>
          <select 
            id="sort-by"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="country">Country</option>
          </select>
        </div>
      </div>

      <div className="results-count">
        Showing {sortedUsers.length} of {users.length} users
      </div>

      <div className="profiles-row">
        {sortedUsers.length > 0 ? (
          sortedUsers.map(user => (
            <ProfileViewer
              key={user.login.uuid}
              id={user.login.uuid}
              image={user.picture.large}
              name={`${user.name.first} ${user.name.last}`}
              age={user.dob.age}
              gender={user.gender}
              email={user.email}
              country={user.location.country}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No users found matching your criteria</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilesList;