import ProfileViewer from "./ProfileViewer";

// Array of profile objects with sample data
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

function ProfilesList() {
            return (
                <div className="profiles-row">
                    {profiles.map((profile, index) => (
                        <ProfileViewer
                            key={index}
                            image={profile.image}
                            name={profile.name}
                            age={profile.age}
                            gender={profile.gender}
                        />
                    ))}
                </div>
            );
        }

export default ProfilesList;
