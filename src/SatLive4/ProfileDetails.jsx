import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProfileDetails.css";

function ProfileDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => u.login.uuid === id);

  if (!user) {
    return (
      <div className="profile-details">
        <div className="not-found">
          <h2>User not found</h2>
          <p>The user profile you're looking for doesn't exist.</p>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </div>
    );
  }

  const fullName = `${user.name.first} ${user.name.last}`;
  const registeredDate = new Date(user.registered.date).toLocaleDateString();
  
  return (
    <div className="profile-details">
      <div className="detail-card">
        <div className="detail-header">
          <img src={user.picture.large} alt={fullName} className="detail-img" />
          <div className="detail-title">
            <h2>{fullName}</h2>
            <p className="detail-subtitle">{user.email}</p>
            <p className="detail-subtitle">Joined: {registeredDate}</p>
          </div>
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Personal Information</h3>
            <p><span className="label">Age:</span> {user.dob.age}</p>
            <p><span className="label">Gender:</span> {user.gender}</p>
            <p><span className="label">Date of Birth:</span> {new Date(user.dob.date).toLocaleDateString()}</p>
          </div>

          <div className="info-group">
            <h3>Contact Information</h3>
            <p><span className="label">Phone:</span> {user.phone}</p>
            <p><span className="label">Cell:</span> {user.cell}</p>
            <p><span className="label">Email:</span> {user.email}</p>
          </div>

          <div className="info-group">
            <h3>Location</h3>
            <p><span className="label">Street:</span> {`${user.location.street.number} ${user.location.street.name}`}</p>
            <p><span className="label">City:</span> {user.location.city}</p>
            <p><span className="label">State:</span> {user.location.state}</p>
            <p><span className="label">Country:</span> {user.location.country}</p>
            <p><span className="label">Postcode:</span> {user.location.postcode}</p>
          </div>

          <div className="info-group">
            <h3>Login Information</h3>
            <p><span className="label">Username:</span> {user.login.username}</p>
            <p><span className="label">UUID:</span> {user.login.uuid}</p>
          </div>
        </div>

        <div className="detail-actions">
          <Link to="/" className="back-button">Back to All Users</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;