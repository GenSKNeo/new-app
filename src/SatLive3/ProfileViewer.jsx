import React from "react";
import "./ProfileViewer.css";
import { Link } from "react-router-dom";

function ProfileViewer({ id, image, name, age, gender, email }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <div className="profile-info">
        <h2>{name}</h2>
        <p><span className="label">Age:</span> {age}</p>
        <p><span className="label">Gender:</span> {gender}</p>
        <p><span className="label">Email:</span> {email}</p>
      </div>
      <div className="profile-actions">
        <Link to={`/profile/${id}`} className="view-profile-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileViewer;