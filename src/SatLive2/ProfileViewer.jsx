import React from "react";
import "./ProfileViewer.css"; // import CSS file
import { Link } from "react-router-dom";

// ProfileViewer Component - Displays individual profile card
function ProfileViewer({ id, image, name, age, gender }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
      {/* Navigate to Profile Details */}
      <Link to={`/profile/${id}`}>View Profile</Link>
    </div>
  );
}

export default ProfileViewer;
