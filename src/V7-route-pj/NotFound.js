import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Oop! Page Not Found (404)</h1>
            <p>The page you are looking for doesn't exist.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>

    );
}

export default NotFound;