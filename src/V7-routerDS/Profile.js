import { useParams } from "react-router-dom";

function Profile() {

        // useParams hook give us an object with all the parameters in the URL.
        // We destructure it to get the 'userId` specifically.
        const { userId } = useParams(); // params is { userId: "abc123" }
     // const userId = params.userId; // Now userId is "abc123"

        // For now, let's just displey it.
        return(
            <div>
                <h1>User Profile Page</h1>
                <p>Showing profile for user with ID: <b>{userId}</b></p>
            </div>

        );
}

export default Profile;