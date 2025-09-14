import React from "react";
import { useParams, Link } from "react-router-dom";
import profiles from "./profiles.js";

function ProfileDetails() {
  const { id } = useParams(); // get profile id from URL
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return <h2>Profile not found</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{profile.id}'s Details</h2>
      <img src={profile.image} alt={profile.id} />
      <p style={{ color: "white" }}>Age: {profile.age}</p>
      <p style={{ color: "purple" }}>Gender: {profile.gender}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProfileDetails;
