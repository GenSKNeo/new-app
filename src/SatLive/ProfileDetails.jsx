import React from "react";
import { useParams, Link } from "react-router-dom";

const profiles = [
                {
                    image: "https://randomuser.me/api/portraits/men/32.jpg",
                    name: "John Doe",
                    age: 28,
                    gender: "Male",
                },
                {
                    image: "https://randomuser.me/api/portraits/women/45.jpg",
                    name: "Jane Smith",
                    age: 25,
                    gender: "Female",
                },
                {
                    image: "https://randomuser.me/api/portraits/men/11.jpg",
                    name: "Michael Brown",
                    age: 30,
                    gender: "Male",
                },
                {
                    image: "https://randomuser.me/api/portraits/men/65.jpg",
                    name: "Robert Johnson",
                    age: 35,
                    gender: "Male",
                },
                {
                    image: "https://randomuser.me/api/portraits/women/22.jpg",
                    name: "Sarah Williams",
                    age: 29,
                    gender: "Female",
                },
                {
                    image: "https://randomuser.me/api/portraits/women/67.jpg",
                    name: "Emily Davis",
                    age: 26,
                    gender: "Female",
                },
            ];

function ProfileDetails() {
    const { id } = useParams(); // get profile id from URL
    console.log("id --", id);

    const profile = profiles.find((p) => p.id.toString() === id);
    console.log("profile --", profile);

    if (!profile) {
        return <h2>Profile not found</h2>;
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h2>{profile.name}'s Details</h2>
            <img src={profile.image} alt={profile.name} />
            <p style={{ color: "white"}}>Age: {profile.age}</p>
            <p style={{ color: "purple"}}>Gender: {profile.gender}</p>
            <Link to="/">Back to Home</Link>

        </div>

    );

}
export default ProfileDetails;
