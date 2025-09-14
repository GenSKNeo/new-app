import React from "react";
import { useParams, Link } from "react-router-dom";
import profiles from "./profiles";
import "./ProfileDetails.css";

function ProfileDetails() {
  const { id } = useParams();
  const profile = profiles.find(p => p.id.toString() === id);

  if (!profile) {
    return (
      <div className="profile-details">
        <div className="not-found">
          <h2>Profile not found</h2>
          <p>The profile you're looking for doesn't exist.</p>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-details">
      <div className="detail-card">
        <div className="detail-header">
          <img src={profile.image} alt={profile.name} className="detail-img" />
          <div className="detail-title">
            <h2>{profile.name}</h2>
            <p className="detail-subtitle">{profile.email}</p>
          </div>
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Personal Information</h3>
            <p><span className="label">Age:</span> {profile.age}</p>
            <p><span className="label">Gender:</span> {profile.gender}</p>
          </div>

          <div className="info-group">
            <h3>Contact Information</h3>
            <p><span className="label">Phone:</span> {profile.phone}</p>
            <p><span className="label">Address:</span> {profile.address}</p>
          </div>

          {profile.department && (
            <div className="info-group">
              <h3>Professional Information</h3>
              <p><span className="label">Department:</span> {profile.department}</p>
              <p><span className="label">Position:</span> {profile.position}</p>
            </div>
          )}
        </div>

        <div className="detail-actions">
          <Link to="/" className="back-button">Back to All Profiles</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;